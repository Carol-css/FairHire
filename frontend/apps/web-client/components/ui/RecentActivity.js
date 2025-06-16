'use client';
export default function RecentActivity({ activities }) {
  return (
    <div className="bg-gray-800 p-4 rounded-xl">
      <h2 className="text-xl font-semibold text-white mb-2">📌 Recent Activity</h2>
      <ul className="text-gray-300 list-disc ml-5 space-y-1">
        {activities.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
