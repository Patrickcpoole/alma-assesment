import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Lead {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  linkedin: string;
  country: string;
  visaCategories: string[];
  resumeUrl: string;
  message: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
  createdAt: string;
}

interface LeadsState {
  items: Lead[];
}

const initialState: LeadsState = {
  items: [],
};

const leadsSlice = createSlice({
  name: "leads",
  initialState,
  reducers: {
    addLead: (state, action: PayloadAction<Lead>) => {
      state.items.push(action.payload);
    },
    updateLeadStatus: (
      state,
      action: PayloadAction<{ id: string; status: Lead["status"] }>
    ) => {
      const lead = state.items.find((lead) => lead.id === action.payload.id);
      if (lead) {
        lead.status = action.payload.status;
      }
    },
  },
});

export const { addLead, updateLeadStatus } = leadsSlice.actions;
export default leadsSlice.reducer;
