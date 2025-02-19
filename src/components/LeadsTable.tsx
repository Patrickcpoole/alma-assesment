"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { updateLeadStatus, Lead } from "@/store/leadsSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export default function LeadsTable() {
  const [isClient, setIsClient] = useState(false);
  const leads = useSelector<RootState, Lead[]>((state) => state.leads.items);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleStatusChange = (
    id: string,
    status: "PENDING" | "APPROVED" | "REJECTED"
  ) => {
    dispatch(updateLeadStatus({ id, status }));
  };

  if (!isClient) {
    return null; // or a loading state
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Country
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
        <tbody className="divide-y divide-gray-200">
          {leads.map((lead) => (
            <tr key={lead.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                {lead.firstName} {lead.lastName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{lead.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{lead.country}</td>
              <td className="px-6 py-4">{lead.visaCategories.join(", ")}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                  ${
                    lead.status === "APPROVED"
                      ? "bg-green-100 text-green-800"
                      : lead.status === "REJECTED"
                      ? "bg-red-100 text-red-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {lead.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <select
                  value={lead.status}
                  onChange={(e) =>
                    handleStatusChange(
                      lead.id,
                      e.target.value as "PENDING" | "APPROVED" | "REJECTED"
                    )
                  }
                  className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  <option value="PENDING">Pending</option>
                  <option value="APPROVED">Approved</option>
                  <option value="REJECTED">Rejected</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
