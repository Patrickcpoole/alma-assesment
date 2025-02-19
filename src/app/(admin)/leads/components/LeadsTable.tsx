"use client";

import { useEffect } from "react";
import { Lead } from "@/types";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { useMemo } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { fetchLeads } from "@/common/data/mockLeads";
import { SortableField } from "@/types";
import { useDispatch } from "react-redux";
import { updateLeadStatus } from "@/common/store/leadsSlice";

interface LeadsTableProps {
  leads: Lead[];
  sorting: SortingState;
  setSorting: (sorting: SortingState) => void;
  isLoading: boolean;
  pageIndex: number;
  pageSize: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  onSortingChange: (sorting: SortingState) => void;
}

export default function LeadsTable({
  leads,
  sorting,
  setSorting,
  isLoading,
  pageIndex,
  pageSize,
  pageCount,
  onPageChange,
  onSortingChange,
}: LeadsTableProps) {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  useEffect(() => {
    if (pageIndex > 0) {
      queryClient.prefetchQuery({
        queryKey: ["leads", pageIndex - 1, pageSize, sorting],
        queryFn: () =>
          fetchLeads(
            pageIndex - 1,
            pageSize,
            sorting[0]?.id as SortableField,
            sorting[0]?.desc
          ),
      });
    }

    if (pageIndex < pageCount - 1) {
      queryClient.prefetchQuery({
        queryKey: ["leads", pageIndex + 1, pageSize, sorting],
        queryFn: () =>
          fetchLeads(
            pageIndex + 1,
            pageSize,
            sorting[0]?.id as SortableField,
            sorting[0]?.desc
          ),
      });
    }
  }, [pageIndex, pageSize, sorting, pageCount, queryClient]);

  const columnHelper = createColumnHelper<Lead>();

  const columns = useMemo(
    () => [
      columnHelper.accessor((row) => `${row.firstName} ${row.lastName}`, {
        id: "fullName",
        header: "Name",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("createdAt", {
        header: "Submitted",
        cell: (info) => new Date(info.getValue() as string).toLocaleString(),
      }),
      columnHelper.accessor("status", {
        header: "Status",
        cell: (info) => (
          <span
            className={`px-3 py-1 rounded-full text-xs ${
              info.getValue() === "PENDING"
                ? "bg-[#FFF8E6] text-[#B25E02]"
                : "bg-[#E8F5E9] text-[#1B5E20]"
            }`}
          >
            {info.getValue() === "PENDING" ? "Pending" : "Reached Out"}
          </span>
        ),
      }),
      columnHelper.accessor("country", {
        header: "Country",
      }),
      columnHelper.accessor("id", {
        header: () => null,
        cell: (info) => {
          const lead = info.row.original;
          return lead.status === "PENDING" ? (
            <button
              onClick={() => {
                dispatch(
                  updateLeadStatus({ id: lead.id, status: "REACHED_OUT" })
                );
                queryClient.invalidateQueries({ queryKey: ["leads"] });
              }}
              className="px-3 py-1 text-sm text-white bg-primary rounded-md hover:bg-secondary/90"
            >
              Reach Out
            </button>
          ) : null;
        },
      }),
    ],
    [columnHelper, dispatch, queryClient]
  );

  const table = useReactTable({
    data: leads,
    columns,
    state: {
      sorting,
      pagination: {
        pageIndex,
        pageSize,
      },
    },
    onSortingChange: (updater) => {
      const newSorting = updater as SortingState;
      setSorting(newSorting);
      onSortingChange(newSorting);
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    pageCount,
    manualPagination: true,
    manualSorting: true,
  });

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="space-y-3">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="h-4 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (leads.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-6 text-center">
        <div className="space-y-3">
          <p className="text-gray-500 text-lg">No leads found</p>
          <p className="text-gray-400">
            Try adjusting your search or filter criteria
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
      <table className="min-w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border-b">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-6 py-3 text-left text-sm font-medium text-gray-500 cursor-pointer group"
                  onClick={header.column.getToggleSortingHandler()}
                >
                  <div className="flex items-center gap-1">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {header.column.id !== "id" && (
                      <span className="text-gray-400">
                        {header.column.getIsSorted()
                          ? header.column.getIsSorted() === "asc"
                            ? "↓"
                            : "↑"
                          : "↕"}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-b hover:bg-gray-50">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-6 py-4 text-sm">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="px-6 py-4 flex items-center justify-end border-t gap-2">
        <button
          onClick={() => onPageChange(pageIndex - 1)}
          disabled={pageIndex === 0}
          className="p-2 text-gray-600 disabled:text-gray-300"
        >
          ←
        </button>

        {Array.from({ length: pageCount }, (_, i) => (
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className={`w-8 h-8 rounded ${
              i === pageIndex
                ? "bg-white text-secondary border border-secondary"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => onPageChange(pageIndex + 1)}
          disabled={pageIndex === pageCount - 1}
          className="p-2 text-gray-600 disabled:text-gray-300"
        >
          →
        </button>
      </div>
    </div>
  );
}
