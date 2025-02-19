"use client";

import { useState, useEffect } from "react";
import { Lead } from "@/types";

export default function Dashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    // TODO: Fetch leads from API
    // Mock data for now
    setLeads([
      {
        id: "1",
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        linkedin: "https://linkedin.com/in/johndoe",
        visaCategories: ["O-1"],
        resumeUrl: "/uploads/resume1.pdf",
        message: "Interested in O-1 visa",
        status: "PENDING",
        createdAt: new Date().toISOString(),
      },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Leads Dashboard</h1>

        <div className="bg-white rounded-lg shadow">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Visa Categories
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {leads.map((lead) => (
                <tr key={lead.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {lead.firstName} {lead.lastName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{lead.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {lead.visaCategories.join(", ")}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        lead.status === "PENDING"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {lead.status === "PENDING" && (
                      <button
                        onClick={() => {
                          // TODO: Implement status update
                          console.log("Update status for lead:", lead.id);
                        }}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Mark as Reached Out
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
