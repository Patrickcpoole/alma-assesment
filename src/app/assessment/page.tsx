import AssesmentForm from "@/app/assessment/components/AssesmentForm";
import AssesmentHeader from "@/app/assessment/components/AssesmentHeader";
export default function AssessmentPage() {
  return (
    <div className="w-full h-screen bg-white">
      <AssesmentHeader title={"Get An Assessment\nOf Your Immigration Case"} />
      <AssesmentForm />
    </div>
  );
}
