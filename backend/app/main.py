from fastapi import FastAPI
from app.routes import interview, auth, oauth
from app.db.database import engine, Base
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

app.include_router(interview.router, prefix="/api/interview")
app.include_router(auth.router, prefix="/api/auth")
app.include_router(oauth.router, prefix="/api/oauth")

@app.get("/")
def root():
    return {"message": "FairHire API is running"}
