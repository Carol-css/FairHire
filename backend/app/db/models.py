from sqlalchemy import Column, Integer, String, Text, DateTime
from sqlalchemy.sql import func
from app.db.database import Base

class InterviewAnalysis(Base):
    __tablename__ = "interview_analysis"

    id = Column(Integer, primary_key=True, index=True)
    transcript = Column(Text)
    sentiment = Column(Text)
    bias_flags = Column(Text)
    followups = Column(Text)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

