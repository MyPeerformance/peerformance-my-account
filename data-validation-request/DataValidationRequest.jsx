import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export default function DataValidationRequests() {
  const [openModal, setOpenModal] = useState(false);
  const [activeRequest, setActiveRequest] = useState(null);
  const [showDecrypted, setShowDecrypted] = useState(false);

  const validationRequests = [
    {
      id: 1,
      study: "PT revenue per member",
      month: "February 2025",
      status: "Pending",
      requestDetail:
        "Please validate the revenue total submitted for February by showing this data point from your internal system.",
      decryptedValue: "£2,900"
    },
    {
      id: 2,
      study: "Monthly spend on marketing",
      month: "January 2025",
      status: "Resolved",
      requestDetail:
        "Verify the marketing spend submitted for January aligns with your finance report.",
      decryptedValue: "£1,500"
    },
  ];

  const handleDecrypt = () => {
    setShowDecrypted(true);
    setTimeout(() => setShowDecrypted(false), 5000);
  };

  return (
    <div className="bg-[#0f172a] min-h-screen text-white p-10">
      <div className="max-w-5xl mx-auto space-y-8">
        <h1 className="text-2xl font-semibold">Data Validation Requests</h1>

        <p className="text-sm text-gray-400 max-w-3xl">
          Occasionally, Peerformance selects a random data point from submitted studies for validation. If selected, you will be asked to decrypt the data on your device and confirm it matches your internal records. The data is never shared with Peerformance unless you choose to share your screen (e.g., via Zoom).g., via Zoom).
        </p>

        <div className="overflow-x-auto rounded-xl border border-gray-700">
          <table className="min-w-full divide-y divide-gray-700 text-sm">
            <thead className="bg-gray-900">
              <tr>
                <th className="px-6 py-3 text-left font-medium text-gray-300">Study</th>
                                <th className="px-6 py-3 text-left font-medium text-gray-300">Status</th>
                <th className="px-6 py-3 text-left font-medium text-gray-300">Action</th>
              </tr>
            </thead>
            <tbody className="bg-[#1e293b] divide-y divide-gray-800">
              {validationRequests.map((req) => (
                <tr key={req.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-white">{req.study}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
  <span className={req.status === 'Pending' ? 'text-yellow-400' : req.status === 'Resolved' ? 'text-green-400' : 'text-white'}>
    {req.status}
  </span>
</td>
                  <td className="px-6 py-4 whitespace-nowrap">
  {req.status === 'Resolved' ? (
    <Button
      className="bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-xl px-4 py-1"
      onClick={() => {
        setActiveRequest(req);
        setOpenModal(true);
      }}
    >
      View
    </Button>
  ) : (
    <Button
      className="bg-green-600 hover:bg-green-700 text-white text-sm rounded-xl px-4 py-1"
      onClick={() => {
        setActiveRequest(req);
        setOpenModal(true);
      }}
    >
      Respond
    </Button>
  )}
</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogContent className="bg-[#111827] text-white rounded-2xl border border-gray-700 max-w-xl mx-auto">
          <DialogTitle className="text-xl font-semibold mb-4">Validation Instructions</DialogTitle>
          <div className="space-y-4">
            {activeRequest && (
              <>
                <p className="text-sm text-gray-400">
                  Study: <span className="text-white font-medium">{activeRequest.study}</span>
                </p>
                <p className="text-sm text-gray-400">
                  Month: <span className="text-white font-medium">{activeRequest.month}</span>
                </p>
                <p className="text-sm text-gray-300 mt-4">{activeRequest.requestDetail}</p>
                <p className="text-xs text-gray-500 mt-2">
                  Decryption and validation happen on your device. Peerformance never has access to your decrypted data unless you choose to share it visually (e.g., via Zoom).g., via Zoom).
                </p>

                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 text-sm rounded-xl"
                  onClick={handleDecrypt}
                >
                  Decrypt & Reveal Data Point
                </Button>

                {showDecrypted && (
                  <div className="bg-gray-800 text-green-400 text-center p-3 rounded-lg font-mono text-lg">
                    {activeRequest.decryptedValue}
                  </div>
                )}

                <textarea
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-sm text-white"
                  placeholder="Add a short comment or proof reference (optional)"
                  rows={3}
                ></textarea>
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 text-sm rounded-xl"
                  onClick={() => {
                    setOpenModal(false);
                    alert("✅ Response submitted");
                  }}
                >
                  Submit Response
                </Button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
