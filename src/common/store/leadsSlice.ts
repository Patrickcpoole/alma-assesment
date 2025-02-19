import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Lead } from "@/types";

export interface LeadsState {
  leads: Lead[];
}

const initialState: LeadsState = {
  leads: [
    {
      id: "1",
      firstName: "Jorge",
      lastName: "Ruiz",
      email: "jorge.ruiz@example.com",
      linkedin: "https://www.linkedin.com/in/jorge-ruiz/",
      visaCategories: ["EB-1A"],
      resumeUrl: "https://www.example.com/jorge-ruiz-resume.pdf",
      message: "I am interested in the EB-1A visa category.",
      status: "PENDING",
      createdAt: "2024-02-02T14:45:00",
      country: "Mexico",
    },
    {
      id: "2",
      firstName: "Bahar",
      lastName: "Zamir",
      email: "bahar.zamir@example.com",
      linkedin: "https://www.linkedin.com/in/bahar-zamir/",
      visaCategories: ["EB-1A"],
      resumeUrl: "https://www.example.com/bahar-zamir-resume.pdf",
      message: "I am interested in the EB-1A visa category.",
      status: "PENDING",
      country: "Mexico",
      createdAt: "2024-02-02T14:45:00",
    },
    // Add more initial leads to match the design
  ],
};

const leadsSlice = createSlice({
  name: "leads",
  initialState,
  reducers: {
    addLead: (state, action: PayloadAction<Lead>) => {
      console.log("action.payload | adding lead", action.payload);
      state.leads.push(action.payload);
    },
    updateLeadStatus: (
      state,
      action: PayloadAction<{ id: string; status: Lead["status"] }>
    ) => {
      const lead = state.leads.find((l) => l.id === action.payload.id);
      if (lead) {
        lead.status = action.payload.status;
      }
    },
  },
});

export const { addLead, updateLeadStatus } = leadsSlice.actions;
export default leadsSlice.reducer;
