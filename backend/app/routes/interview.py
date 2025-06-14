from fastapi import APIRouter, UploadFile, File, Depends
from sqlalchemy.orm import Session
from app.services import transcription_service, analytics_service
from app.db.database import get_db
from app.models.schemas import TranscriptRequest

router = APIRouter()

@router.post("/transcribe")
async def transcribe_audio(file: UploadFile = File(...)):
    transcript = await transcription_service.transcribe(file)
    return {"transcript": transcript}

@router.post("/analyze")
async def analyze_transcript(payload: TranscriptRequest, db: Session = Depends(get_db)):
    result = analytics_service.analyze_transcript(payload.transcript, db)
    return result
