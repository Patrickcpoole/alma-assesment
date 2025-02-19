export type VisaCategory = "O-1" | "EB-1A" | "EB-2 NIW" | "I don't know";

export interface Lead extends Omit<AssesmentFormData, "resume"> {
  id: string;
  status: "PENDING" | "REACHED_OUT";
  resumeUrl: string;
  createdAt: string;
}

export interface AssesmentFormData {
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

export interface AuthContextType {
  isAuthenticated: boolean | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}
