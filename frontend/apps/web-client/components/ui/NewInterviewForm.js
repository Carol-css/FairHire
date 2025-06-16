'use client';
import { useState } from 'react';
import { Button } from './button';


export default function NewInterviewForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [transcript, setTranscript] = useState('');

  return (
    <div className="bg-gray-800 p-6 rounded-xl space-y-4">
      <h2 className="text-2xl text-white font-semibold">📤 New Interview</h2>
      <input
        className="w-full bg-gray-700 p-2 rounded text-white"
        placeholder="Candidate Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="w-full bg-gray-700 p-2 rounded text-white"
        placeholder="Job Role"
        onChange={(e) => setRole(e.target.value)}
      />
      <textarea
        className="w-full bg-gray-700 p-2 rounded text-white"
        placeholder="Transcript"
        onChange={(e) => setTranscript(e.target.value)}
      />
      <Button className="w-full bg-blue-600" onClick={() => onSubmit({ name, role, transcript })}>
        Start AI Analysis
      </Button>
    </div>
  );
}
