from fastapi import APIRouter, Depends, HTTPException, Request
from sqlalchemy.orm import Session
from starlette.responses import RedirectResponse
from authlib.integrations.starlette_client import OAuth
import os

from app.db import models as db_models
from app.db.database import get_db
from app.routes.auth import create_access_token

router = APIRouter()

GOOGLE_CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID")
GOOGLE_CLIENT_SECRET = os.getenv("GOOGLE_CLIENT_SECRET")

oauth = OAuth()
oauth.register(
    name='google',
    client_id=GOOGLE_CLIENT_ID,
    client_secret=GOOGLE_CLIENT_SECRET,
    server_metadata_url='https://accounts.google.com/.well-known/openid-configuration',
    client_kwargs={'scope': 'openid email profile'}
)

@router.get("/google")
async def login_via_google(request: Request):
    redirect_uri = request.url_for('auth_google_callback')
    return await oauth.google.authorize_redirect(request, redirect_uri)

@router.get("/google/callback")
async def auth_google_callback(request: Request, db: Session = Depends(get_db)):
    token = await oauth.google.authorize_access_token(request)
    user_info = token.get("userinfo")
    if user_info is None:
        raise HTTPException(status_code=400, detail="Invalid credentials")

    email = user_info['email']
    name = user_info.get('name', email.split('@')[0])
    user = db.query(db_models.User).filter(db_models.User.email == email).first()
    if not user:
        user = db_models.User(name=name, email=email, hashed_password="google-oauth")
        db.add(user)
        db.commit()
        db.refresh(user)

    jwt_token = create_access_token({"sub": user.email})
    return RedirectResponse(url=f"/dashboard?token={jwt_token}")
