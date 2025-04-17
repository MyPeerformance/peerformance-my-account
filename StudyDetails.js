import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const studies = [
  {
    name: "PT revenue per member",
    status: "Available",
    renewalDate: "01/07/2025",
    participants: 5,
    peerGroup: "UK PTs, 10-50 employees",
    region: "London, UK",
    description: "Benchmark PT revenue per member against similar-sized UK businesses.",
    dataHistory: ["Jan: Submitted", "Feb: Submitted", "Mar: Missing"],
  },
  {
    name: "Monthly spend on marketing",
    status: "Queued",
    renewalDate: null,
    participants: 3,
    peerGroup: "UK Gyms, 10-100 employees",
    region: "Manchester, UK",
    description: "Track monthly marketing expenditure and impact.",
    dataHistory: ["Jan: Submitted", "Feb: Missing", "Mar: Missing"],
  },
  {
    name: "New member acquisition rate",
    status: "Available",
    renewalDate: "01/07/2025",
    participants: 7,
    peerGroup: "Fitness Studios, National",
    region: "UK Wide",
    description: "Measure how fast you grow your new member base each month.",
    dataHistory: ["Jan: Submitted", "Feb: Submitted", "Mar: Submitted"],
  },
  {
    name: "Member referral rate",
    status: "Available",
    renewalDate: "30/04/2025",
    participants: 5,
    peerGroup: "Boutique Fitness, Urban",
    region: "Bristol, UK",
    description: "How often your members refer others to your business.",
    dataHistory: ["Jan: Missing", "Feb: Submitted", "Mar: Missing"],
  },
];

const statusText = (status) => {
  const colors = {
    Available: "text-green-400",
    Queued: "text-yellow-400",
    Inactive: "text-red-400",
  };
  return <span className={`text-sm font-medium ${colors[status] || "text-gray-400"}`}>{status}</span>;
};

const formatDataEntry = (entry) => {
  const isMissing = entry.includes("Missing");
  const color = isMissing ? "text-red-400" : "text-green-400";
  return <div className={`text-sm ${color}`}>• {entry}</div>;
};

export default function StudyDetailsTable() {
  const [expandedRow, setExpandedRow] = useState(null);
  const [sortColumn, setSortColumn] = useState("name");
  const [sortAsc, setSortAsc] = useState(true);
  const [modalStudy, setModalStudy] = useState(null);

  const sortedStudies = [...studies].sort((a, b) => {
    const aVal = a[sortColumn] || "";
    const bVal = b[sortColumn] || "";
    if (typeof aVal === "string") {
      return sortAsc ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
    }
    return sortAsc ? aVal - bVal : bVal - aVal;
  });

  return (
    <div className="bg-[#0f172a] min-h-screen text-white p-10">
      <div className="max-w-6xl mx-auto space-y-6">
        <h1 className="text-2xl font-semibold">Your Studies</h1>

        <div className="overflow-x-auto rounded-xl border border-gray-700">
          <table className="min-w-full divide-y divide-gray-700 text-sm">
            <thead className="bg-gray-900">
              <tr>
                <th className="px-6 py-3 text-left font-medium text-gray-300 cursor-pointer" onClick={() => { setSortColumn("name"); setSortAsc(sortColumn === "name" ? !sortAsc : true); }}>Study Name</th>
                <th className="px-6 py-3 text-left font-medium text-gray-300 cursor-pointer" onClick={() => { setSortColumn("status"); setSortAsc(sortColumn === "status" ? !sortAsc : true); }}>Status</th>
                <th className="px-6 py-3 text-left font-medium text-gray-300 cursor-pointer" onClick={() => { setSortColumn("renewalDate"); setSortAsc(sortColumn === "renewalDate" ? !sortAsc : true); }}>Renewal Date</th>
                <th className="px-6 py-3 text-left font-medium text-gray-300 cursor-pointer" onClick={() => { setSortColumn("participants"); setSortAsc(sortColumn === "participants" ? !sortAsc : true); }}>Participants</th>
                <th className="px-6 py-3 text-left font-medium text-gray-300">Data</th>
              </tr>
            </thead>
            <tbody className="bg-[#1e293b] divide-y divide-gray-800">
              {sortedStudies.map((study, idx) => (
                <React.Fragment key={idx}>
                  <tr>
                    <td
                      className="px-6 py-4 whitespace-nowrap text-blue-400 hover:underline cursor-pointer"
                      onClick={() => setModalStudy(study)}
                    >
                      {study.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{statusText(study.status)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-white">{study.renewalDate || "—"}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-white">{study.participants}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {study.status !== "Queued" && (
                        <button
                          className="flex items-center space-x-1 text-blue-400 hover:underline"
                          onClick={() =>
                            setExpandedRow(expandedRow === idx ? null : idx)
                          }
                        >
                          <ChevronDown className={`w-4 h-4 transition-transform ${expandedRow === idx ? "rotate-180" : "rotate-0"}`} />
                          <span>View</span>
                        </button>
                      )}
                    </td>
                  </tr>
                  {expandedRow === idx && study.status !== "Queued" && (
                    <tr>
                      <td colSpan="5" className="px-6 py-4 bg-gray-900">
                        <div className="text-sm text-gray-300 space-y-1">
                          {study.dataHistory.map((entry, i) => (
                            <div key={i}>{formatDataEntry(entry)}</div>
                          ))}
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {modalStudy && (
          <Dialog open={true} onOpenChange={() => setModalStudy(null)}>
            <DialogContent className="bg-[#111827] border border-gray-700 text-white rounded-2xl max-w-md mx-auto p-6">
              <DialogTitle className="text-xl font-semibold mb-2">{modalStudy.name}</DialogTitle>
              <p className="text-sm text-gray-400 mb-4">{modalStudy.description}</p>
              <div className="text-sm space-y-2">
                <p><span className="text-gray-400">Peer Group:</span> {modalStudy.peerGroup}</p>
                <p><span className="text-gray-400">Region:</span> {modalStudy.region}</p>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
}
