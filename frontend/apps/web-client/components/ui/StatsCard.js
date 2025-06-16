'use client';
export default function StatsCard({ title, value }) {
  return (
    <div className="bg-gray-800 shadow-md rounded-xl p-4">
      <p className="text-lg font-medium text-gray-300">{title}</p>
      <p className="text-3xl font-bold text-white mt-1">{value}</p>
    </div>
  );
}
