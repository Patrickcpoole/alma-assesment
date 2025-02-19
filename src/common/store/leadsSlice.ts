import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Lead } from "@/types";

export interface LeadsState {
  leads: Lead[];
  isLoading: boolean;
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
  isLoading: true,
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
      const lead = state.leads.find((l) => l.id === action.payload.id);
      if (lead) {
        lead.status = action.payload.status;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    initializeLeads: (state, action: PayloadAction<Lead[]>) => {
      state.leads = action.payload;
      state.isLoading = false;
    },
  },
});

export const { addLead, updateLeadStatus, setLoading, initializeLeads } =
  leadsSlice.actions;
export default leadsSlice.reducer;
