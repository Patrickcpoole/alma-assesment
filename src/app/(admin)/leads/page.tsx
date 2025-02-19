"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { SortingState } from "@tanstack/react-table";
import { fetchLeads } from "@/common/data/mockLeads";
import LeadsTable from "./components/LeadsTable";
import { SortableField } from "@/types";
import { Search } from "lucide-react";
import Dropdown from "@/components/ui/Dropdown";

const statusOptions = [
  { value: "all", label: "Status" },
  { value: "pending", label: "Pending" },
  { value: "reached_out", label: "Reached Out" },
];

export default function LeadsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [pageIndex, setPageIndex] = useState(0);
  const pageSize = 10;
  const [sorting, setSorting] = useState<SortingState>([]);

  const { data, isLoading } = useQuery({
    queryKey: [
      "leads",
      pageIndex,
      pageSize,
      sorting,
      searchQuery,
      statusFilter,
    ],
    queryFn: () =>
      fetchLeads(
        pageIndex,
        pageSize,
        sorting[0]?.id as SortableField,
        sorting[0]?.desc,
        searchQuery,
        statusFilter
      ),
    placeholderData: (prev) => prev,
    staleTime: 0,
  });

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
        leads={data?.leads ?? []}
        sorting={sorting}
        setSorting={setSorting}
        isLoading={isLoading}
        pageIndex={pageIndex}
        pageSize={pageSize}
        pageCount={data?.totalPages ?? 0}
        onPageChange={setPageIndex}
        onSortingChange={setSorting}
      />
    </div>
  );
}
