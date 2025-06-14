import openai
import os

openai.api_key = os.getenv("OPENAI_API_KEY")

def generate_followup(text: str):
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "You are an interview assistant. Generate 2 follow-up questions."},
            {"role": "user", "content": text}
        ]
    )
    return response["choices"][0]["message"]["content"]
