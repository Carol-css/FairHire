from ml_models.sentiment_analysis.model import analyze_sentiment
from ml_models.bias_detection.model import detect_bias
from ml_models.followup_generator.model import generate_followup
from app.db import models as db_models

def analyze_transcript(transcript: str, db):
    sentiment = analyze_sentiment(transcript)
    bias_flags = detect_bias(transcript)
    followups = generate_followup(transcript)

    # Store analysis in DB
    record = db_models.InterviewAnalysis(
        transcript=transcript,
        sentiment=str(sentiment),
        bias_flags=str(bias_flags),
        followups=str(followups)
    )
    db.add(record)
    db.commit()
    db.refresh(record)

    return {
        "sentiment": sentiment,
        "bias_flags": bias_flags,
        "followups": followups,
        "id": record.id
    }
