'use client';
import { Button } from './button';


export default function SettingsPanel() {
  return (
    <div className="bg-gray-800 p-6 rounded-xl">
      <h2 className="text-xl font-semibold text-white mb-4">⚙️ Settings</h2>
      <input type="text" placeholder="Organization Name" className="w-full p-2 mb-2 bg-gray-700 rounded text-white" />
      <input type="text" placeholder="Default Questions" className="w-full p-2 mb-4 bg-gray-700 rounded text-white" />
      <Button className="w-full bg-yellow-600">Save</Button>
    </div>
  );
}
