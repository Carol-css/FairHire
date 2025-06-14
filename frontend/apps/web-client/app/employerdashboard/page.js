'use client';

import { useState } from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';



export default function EmployerDashboard() {
  const [interviewsThisWeek, setInterviewsThisWeek] = useState(4);
  const [avgFairnessScore, setAvgFairnessScore] = useState(87);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">👋 Welcome, HR Manager</h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <Card className="bg-gray-800 shadow-lg rounded-2xl p-4">
          <CardContent>
            <p className="text-xl font-semibold">Interviews This Week</p>
            <p className="text-4xl mt-2">{interviewsThisWeek}</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 shadow-lg rounded-2xl p-4">
          <CardContent>
            <p className="text-xl font-semibold">Avg. Fairness Score</p>
            <p className="text-4xl mt-2">{avgFairnessScore}%</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 shadow-lg rounded-2xl p-4">
          <CardContent>
            <p className="text-xl font-semibold">Recent Activity</p>
            <ul className="list-disc ml-5 mt-2 text-sm">
              <li>Interview with John Doe</li>
              <li>Bias check flagged in Q3</li>
              <li>Exported report for Role: Analyst</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* New Interview Section */}
      <div className="bg-gray-800 p-6 rounded-2xl mb-6">
        <h2 className="text-2xl font-semibold mb-4">📤 New Interview</h2>
        <div className="space-y-4">
          <input type="text" placeholder="Candidate Name" className="w-full p-2 rounded bg-gray-700 text-white" />
          <input type="text" placeholder="Job Role" className="w-full p-2 rounded bg-gray-700 text-white" />
          <input type="file" accept="audio/*,video/*" className="w-full p-2 rounded bg-gray-700 text-white" />
          <Button className="bg-blue-600 hover:bg-blue-500 text-white w-full">Start AI Analysis</Button>
        </div>
      </div>

      {/* AI Analysis Results (mocked) */}
      <div className="bg-gray-800 p-6 rounded-2xl mb-6">
        <h2 className="text-2xl font-semibold mb-4">🧠 AI Analysis Result</h2>
        <p className="text-sm text-gray-300 mb-2">Transcript: "Tell me about yourself..."</p>
        <p className="text-sm text-gray-300 mb-2">Sentiment: Positive | Engagement: High</p>
        <p className="text-sm text-yellow-400">⚠ Bias Detected in Q3</p>
        <p className="text-sm mt-2">Suggested Follow-Up: "Can you elaborate on your team experience?"</p>
        <p className="text-xl font-bold mt-2">Fairness Score: 87%</p>
      </div>

      {/* Reports Table */}
      <div className="bg-gray-800 p-6 rounded-2xl mb-6">
        <h2 className="text-2xl font-semibold mb-4">📄 Interview Reports</h2>
        <table className="w-full table-auto text-left">
          <thead>
            <tr className="text-gray-400">
              <th className="pb-2">Candidate</th>
              <th className="pb-2">Role</th>
              <th className="pb-2">Date</th>
              <th className="pb-2">Score</th>
              <th className="pb-2">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr>
              <td>John Doe</td>
              <td>Data Analyst</td>
              <td>12 June 2025</td>
              <td>85%</td>
              <td><Button size="sm" className="bg-green-600 hover:bg-green-500">View Report</Button></td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>

      {/* Download & Settings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-800 p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-2">📥 Download & Export</h2>
          <Button className="bg-purple-600 hover:bg-purple-500 w-full mb-2">Download PDF</Button>
          <Button className="bg-purple-600 hover:bg-purple-500 w-full">Export CSV</Button>
        </div>
        <div className="bg-gray-800 p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-2">⚙️ Settings</h2>
          <input type="text" placeholder="Organization Name" className="w-full p-2 rounded bg-gray-700 text-white mb-2" />
          <input type="text" placeholder="Default Questions" className="w-full p-2 rounded bg-gray-700 text-white mb-2" />
          <Button className="bg-yellow-600 hover:bg-yellow-500 w-full">Save Changes</Button>
        </div>
      </div>
    </div>
  );
}
