import AssesmentForm from "@/app/assessment/components/AssesmentForm";
import AssesmentHeader from "@/app/assessment/components/AssesmentHeader";
export default function AssessmentPage() {
  return (
    <>
      <AssesmentHeader title={"Get An Assessment\nOf Your Immigration Case"} />
      <AssesmentForm />
    </>
  );
}
