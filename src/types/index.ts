export type VisaCategory = "O-1" | "EB-1A" | "EB-2 NIW" | "I don't know";

export interface Lead {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  linkedin: string;
  visaCategories: VisaCategory[];
  resumeUrl: string;
  message: string;
  country: string;
  status: "PENDING" | "REACHED_OUT";
  createdAt: string;
}

export interface LeadFormData {
  firstName: string;
  lastName: string;
  email: string;
  linkedin: string;
  country: string;
  visaCategories: VisaCategory[];
  resume: File | null;
  message: string;
}

export interface IconProps {
  className?: string;
  fill?: string;
  width?: string;
  height?: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
