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
    // ... other initial leads if needed
  ],
};

const leadsSlice = createSlice({
  name: "leads",
  initialState,
  reducers: {
    addLead: (state, action: PayloadAction<Lead>) => {
      state.leads.push(action.payload);
    },
    updateLeadStatus: (
      state,
      action: PayloadAction<{ id: string; status: Lead["status"] }>
    ) => {
      const { id, status } = action.payload;
      state.leads = state.leads.map((lead) =>
        lead.id === id ? { ...lead, status } : lead
      );
    },
    initializeLeads: (state, action: PayloadAction<Lead[]>) => {
      state.leads = action.payload;
    },
  },
});

export const { addLead, updateLeadStatus, initializeLeads } =
  leadsSlice.actions;
export default leadsSlice.reducer;
