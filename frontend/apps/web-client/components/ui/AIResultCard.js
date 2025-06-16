'use client';
export default function AIResultCard({ result }) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl text-white space-y-2">
      <h2 className="text-2xl font-semibold">🧠 AI Analysis Result</h2>
      <p>Sentiment: {result.sentiment}</p>
      <p>Engagement: {result.engagement}</p>
      <p className={result.bias ? 'text-yellow-400' : 'text-green-400'}>
        {result.bias ? '⚠ Bias Detected' : '✅ No Bias Detected'}
      </p>
      <p>Follow-Up: {result.suggestion}</p>
      <p className="text-lg font-bold">Fairness Score: {result.score}%</p>
    </div>
  );
}
