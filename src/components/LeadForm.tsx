"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LeadFormData, VisaCategory } from "@/types";
import { DocumentIcon } from "./icons/DocumentIcon";
import { DiceIcon } from "./icons/DiceIcon";
import { HeartIcon } from "./icons/HeartIcon";
import dynamic from "next/dynamic";
import { useCountries } from "@/common/hooks/useCountries";
import { useDispatch } from "react-redux";
import { addLead } from "@/common/store/leadsSlice";

const Select = dynamic(() => import("react-select"), { ssr: false });

const VISA_OPTIONS: VisaCategory[] = [
  "O-1",
  "EB-1A",
  "EB-2 NIW",
  "I don't know",
];

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export default function LeadForm() {
  const router = useRouter();
  const { countryOptions } = useCountries();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<LeadFormData>({
    firstName: "",
    lastName: "",
    email: "",
    linkedin: "",
    country: "",
    visaCategories: [],
    resume: null,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateForm = (): boolean => {
    if (!formData.firstName.trim()) {
      setError("First name is required");
      return false;
    }
    if (!formData.lastName.trim()) {
      setError("Last name is required");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Email is required");
      return false;
    }
    if (!isValidEmail(formData.email)) {
      setError("Please enter a valid email address");
      return false;
    }
    if (!formData.linkedin.trim()) {
      setError("LinkedIn/Website URL is required");
      return false;
    }
    if (!isValidUrl(formData.linkedin)) {
      setError("Please enter a valid URL");
      return false;
    }
    if (formData.visaCategories.length === 0) {
      setError("Please select at least one visa category");
      return false;
    }
    if (!formData.message.trim()) {
      setError("Please provide some details about your case");
      return false;
    }
    if (!formData.resume) {
      setError("Please upload your resume");
      return false;
    }
    if (!formData.country) {
      setError("Please select your country of citizenship");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("firstName", formData.firstName);
      formDataToSend.append("lastName", formData.lastName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("linkedin", formData.linkedin);
      formDataToSend.append("country", formData.country);
      formDataToSend.append(
        "visaCategories",
        JSON.stringify(formData.visaCategories)
      );
      formDataToSend.append("message", formData.message);
      if (formData.resume) {
        formDataToSend.append("resume", formData.resume);
      }

      const response = await fetch("/api/submit-lead", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      console.log("lead data", data);

      dispatch(addLead(data.lead));

      router.push("/assessment/success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto px-4 py-8 space-y-12"
      >
        <section className="space-y-4">
          <div className="flex items-center flex-col gap-2">
            <DocumentIcon className="w-14 h-14 text-purple-400" />
            <h2 className="text-2xl font-semibold text-secondary">
              Want to understand your visa options?
            </h2>
          </div>
          <p className="text-secondary text-center text-lg font-semibold text-md px-8">
            Submit the form below and our team of experienced attorneys will
            review your information and send a preliminary assessment of your
            case based on your goals.
          </p>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full py-3.5 px-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full py-3.5 px-3 rounded-lg  border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              required
            />
            <input
              type="email"
              placeholder="Email"
              className={`w-full py-3.5 px-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary ${
                formData.email && !isValidEmail(formData.email)
                  ? "border-red-300 bg-red-50"
                  : "border-gray-200"
              }`}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            {formData.email && !isValidEmail(formData.email) && (
              <p className="text-red-500 text-sm mt-1">
                Please enter a valid email address
              </p>
            )}
            <Select
              placeholder="Country of Citizenship"
              options={countryOptions}
              classNames={{
                control: (state) =>
                  `!py-2 !px-3 !rounded-lg !border ${
                    state.isFocused
                      ? "!border-primary !shadow-none !ring-2 !ring-primary"
                      : "!border-gray-200"
                  } hover:!border-gray-300`,
                menu: () => "!rounded-lg !mt-1",
                input: () => "!m-0",
                valueContainer: () => "!p-0",
                singleValue: () => "!m-0",
              }}
              value={countryOptions.find(
                (option) => option.value === formData.country
              )}
              onChange={(option) =>
                setFormData({
                  ...formData,
                  country: (option as { value: string }).value || "",
                })
              }
              isSearchable
              required
            />
            <input
              type="url"
              placeholder="LinkedIn / Personal Website URL"
              className={`w-full py-3.5 px-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary ${
                formData.linkedin && !isValidUrl(formData.linkedin)
                  ? "border-red-300 bg-red-50"
                  : "border-gray-200"
              }`}
              value={formData.linkedin}
              onChange={(e) =>
                setFormData({ ...formData, linkedin: e.target.value })
              }
              required
            />
            {formData.linkedin && !isValidUrl(formData.linkedin) && (
              <p className="text-red-500 text-sm mt-1">
                Please enter a valid URL
              </p>
            )}
          </div>
          <div className="relative">
            <input
              type="file"
              id="resume"
              accept=".pdf,.doc,.docx"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0] || null;
                setFormData({ ...formData, resume: file });
              }}
            />
            <label
              htmlFor="resume"
              className="w-full py-3.5 px-3 rounded-lg border border-gray-200 bg-white flex items-center justify-center cursor-pointer hover:bg-gray-50"
            >
              {formData.resume ? (
                <span className="text-green-600">✓ {formData.resume.name}</span>
              ) : (
                <span className="text-gray-500">
                  Upload Resume (PDF, DOC, DOCX)
                </span>
              )}
            </label>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center flex-col gap-2">
            <DiceIcon className="w-14 h-14 text-purple-400" />
            <h2 className="text-xl font-semibold text-secondary">
              Visa categories of interest?
            </h2>
          </div>
          <div className="space-y-2">
            {VISA_OPTIONS.map((visa) => (
              <label key={visa} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.visaCategories.includes(visa)}
                  onChange={(e) => {
                    const newCategories = e.target.checked
                      ? [...formData.visaCategories, visa]
                      : formData.visaCategories.filter((v) => v !== visa);
                    setFormData({
                      ...formData,
                      visaCategories: newCategories,
                    });
                  }}
                  className="w-4 h-4 rounded border-gray-300"
                />
                <span className="text-md text-secondary font-medium">
                  {visa}
                </span>
              </label>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center flex-col gap-2">
            <HeartIcon className="w-14 h-14 text-purple-400" />
            <h2 className="text-xl font-semibold text-secondary">
              How can we help you?
            </h2>
          </div>
          <textarea
            rows={4}
            className="w-full py-2 px-3 rounded border border-gray-200"
            placeholder="What is your current status and when does it expire? What is your past immigration history? Are you currently employed or have a job offer? Is it for short term employment visa or both? Are there any timeline considerations?"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
          />
        </section>

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
