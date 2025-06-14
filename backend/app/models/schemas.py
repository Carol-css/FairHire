from pydantic import BaseModel, EmailStr

class TranscriptRequest(BaseModel):
    transcript: str

class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str