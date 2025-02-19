"use client";

import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchLeads } from "@/common/data/mockLeads";

import { SortingState } from "@tanstack/react-table";
import { Search } from "lucide-react";
import Dropdown from "@/components/ui/Dropdown";
import LeadsTable from "@/app/(admin)/leads/components/LeadsTable";

const statusOptions = [
  { value: "all", label: "Status" },
  { value: "pending", label: "Pending" },
  { value: "reached_out", label: "Reached Out" },
];

export default function LeadsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pageIndex, setPageIndex] = useState(0);
  const pageSize = 10;

  const { data, isLoading } = useQuery({
    queryKey: ["leads", pageIndex, pageSize],
    queryFn: () => fetchLeads(pageIndex + 1, pageSize),
  });

  const filteredLeads = useMemo(() => {
    if (!data) return [];
    return data.leads.filter((lead) => {
      const matchesSearch = (lead.firstName + " " + lead.lastName)
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesStatus =
        statusFilter === "all" || lead.status === statusFilter.toUpperCase();
      return matchesSearch && matchesStatus;
    });
  }, [data, searchQuery, statusFilter]);

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-secondary">Leads</h1>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="pl-10 px-4 py-2 border rounded-md w-64"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Dropdown
          value={statusFilter}
          onChange={(value) => setStatusFilter(value)}
          options={statusOptions}
        />
      </div>

      <LeadsTable
        leads={filteredLeads}
        sorting={sorting}
        setSorting={setSorting}
        isLoading={isLoading}
        pageIndex={pageIndex}
        pageSize={pageSize}
        pageCount={data?.totalPages ?? 0}
        onPageChange={setPageIndex}
      />
    </div>
  );
}
