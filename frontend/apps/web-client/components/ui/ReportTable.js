'use client';
import { Button } from './button';


export default function ReportTable({ reports, onView }) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl">
      <h2 className="text-2xl text-white font-semibold mb-4">📄 Interview Reports</h2>
      <table className="w-full text-left text-sm text-gray-300">
        <thead>
          <tr>
            <th>Candidate</th>
            <th>Role</th>
            <th>Date</th>
            <th>Score</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((r, idx) => (
            <tr key={idx}>
              <td>{r.name}</td>
              <td>{r.role}</td>
              <td>{r.date}</td>
              <td>{r.score}%</td>
              <td>
                <Button size="sm" className="bg-green-600" onClick={() => onView(r)}>View</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
