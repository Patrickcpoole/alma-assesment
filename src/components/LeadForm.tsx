"use client";

import { useState } from "react";
import { LeadFormData, VisaCategory } from "@/types";
import { DocumentIcon } from "./icons/DocumentIcon";
import { DiceIcon } from "./icons/DiceIcon";
import { HeartIcon } from "./icons/HeartIcon";

const VISA_OPTIONS: VisaCategory[] = [
  "O-1",
  "EB-1A",
  "EB-2 NIW",
  "I don't know",
];

export default function LeadForm() {
  const [formData, setFormData] = useState<LeadFormData>({
    firstName: "",
    lastName: "",
    email: "",
    linkedin: "",
    visaCategories: [],
    resume: null,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    // For now, we'll just console.log the data
    console.log(formData);
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
              className="w-full p-3 rounded-lg border border-gray-200"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-3 rounded-lg  border border-gray-200"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg  border border-gray-200"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            <select
              className="w-full p-3 rounded-lg border border-gray-200 bg-white"
              required
            >
              <option value="">Country of Citizenship</option>
              {/* Add country options here */}
            </select>
            <input
              type="url"
              placeholder="LinkedIn / Personal Website URL"
              className="w-full p-3 rounded-lg  border border-gray-200"
              value={formData.linkedin}
              onChange={(e) =>
                setFormData({ ...formData, linkedin: e.target.value })
              }
              required
            />
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
            className="w-full p-3 rounded border border-gray-200"
            placeholder="What is your current status and when does it expire? What is your past immigration history? Are you currently employed or have a job offer? Is it for short term employment visa or both? Are there any timeline considerations?"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
          />
        </section>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
