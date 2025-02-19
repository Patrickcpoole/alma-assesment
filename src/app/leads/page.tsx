import ProtectedRoute from "@/components/ProtectedRoute";
import LeadsTable from "@/components/LeadsTable";
import Header from "@/components/Header";

export default function LeadsPage() {
  return (
    <ProtectedRoute>
      <main>
        <Header
          title="Leads Management"
          subtitle="View and manage your leads"
        />
        <div className="container mx-auto px-4 py-8">
          <LeadsTable />
        </div>
      </main>
    </ProtectedRoute>
  );
}
