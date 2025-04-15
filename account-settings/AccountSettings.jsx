import React, { useState } from "react";

export default function PersonalDetailsPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Jane Doe");
  const [email, setEmail] = useState("jane@company.com");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

  const handleSave = () => {
    console.log({ name, email, password, confirmPassword, currentPassword });
    setIsEditing(false);
  };

  return (
    <div className="bg-[#0f172a] min-h-screen text-white p-10">
      <div className="max-w-3xl mx-auto space-y-10">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold border-b border-gray-700 pb-2">Account Settings</h1>
          <button
            className="text-sm text-blue-400 hover:underline"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "Cancel" : "Edit"}
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-medium border-b border-gray-700 pb-1">Personal Details</h2>
            <div className="space-y-4 mt-2">
              <div>
                <label className="block text-sm text-gray-400">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 disabled:opacity-60"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 disabled:opacity-60"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400">Phone Number</label>
                <input
                  type="tel"
                  placeholder="e.g. +44 7911 123456"
                  disabled={!isEditing}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 disabled:opacity-60"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium border-b border-gray-700 pb-1">Company Details</h2>
            <div className="space-y-4 mt-2">
              <div>
                <label className="block text-sm text-gray-400">Company Name</label>
                <input
                  type="text"
                  defaultValue="Peerformance Ltd."
                  disabled={!isEditing}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 disabled:opacity-60"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400">Peer Group Sector (default when no studies joined)</label>
                <input
                  type="text"
                  defaultValue="Professional Services"
                  disabled={!isEditing}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 disabled:opacity-60"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400">Peer Group Location (default when no studies joined)</label>
                <input
                  type="text"
                  defaultValue="London, UK"
                  disabled={!isEditing}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 disabled:opacity-60"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium border-b border-gray-700 pb-1">Change Password</h2>
            <div className="space-y-4 mt-2">
              <div>
                <label className="block text-sm text-gray-400">Current Password</label>
                <input
                  type="password"
                  placeholder="Current Password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 disabled:opacity-60"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400">New Password</label>
                <input
                  type="password"
                  placeholder="New Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 disabled:opacity-60"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400">Confirm New Password</label>
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 disabled:opacity-60"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium border-b border-gray-700 pb-1">Company Profile</h2>
            <div className="space-y-4 mt-2">
              <div>
                <label className="block text-sm text-gray-400">Company Size (Employees)</label>
                <select
                  disabled={!isEditing}
                  defaultValue="51-100"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 disabled:opacity-60"
                >
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-100">51-100</option>
                  <option value="101-500">101-500</option>
                  <option value="500+">500+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-400">Annual Revenue (£)</label>
                <select
                  disabled={!isEditing}
                  defaultValue="£1M-5M"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 disabled:opacity-60"
                >
                  <option value="<£100k">&lt;£100k</option>
                  <option value="£100k-£500k">£100k-£500k</option>
                  <option value="£500k-£1M">£500k-£1M</option>
                  <option value="£1M-5M">£1M-5M</option>
                  <option value=">£5M">&gt;£5M</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-400">Competitive Reach</label>
                <select
                  disabled={!isEditing}
                  defaultValue="national"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 disabled:opacity-60"
                >
                  <option value="local">Local</option>
                  <option value="regional">Regional</option>
                  <option value="national">National</option>
                  <option value="international">International</option>
                </select>
              </div>
            </div>
          </div>
        </div>

          <div>
            <h2 className="text-lg font-medium border-b border-gray-700 pb-1">Encryption Key</h2>
            <div className="space-y-4 mt-2">
              <div>
                <label className="block text-sm text-gray-400">Key Type</label>
                <input
                  type="text"
                  value="Peerformance Managed"
                  disabled
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-600 disabled:opacity-60"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400">Key Status</label>
                <input
                  type="text"
                  value="Active" disabled className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-300 placeholder-gray-400 border border-gray-600 disabled:opacity-60"
                />
              </div>
              <button
                className="bg-gray-700 hover:bg-gray-600 text-white text-sm px-4 py-2 rounded-lg"
                onClick={() => alert("📜 Request sent for key usage logs")}
              >
                Request Key Usage Logs
              </button>
            </div>
          </div>
{isEditing && (
          <div className="mt-8 text-right">
            <button
              className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-xl font-medium"
              onClick={handleSave}
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
