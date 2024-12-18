import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { analyticsTypes } from "../Types";

const initialState: analyticsTypes = {
  links: [],
  pastMonthLeads:0,
  pastMonthViews:0,
  pastWeekLeads:0,
  pastWeekViews:0,
  todayLeads:0,
  todayViews:0,
  totalClickRate:0,
  totalClicks:0,
  totalLeads:0,
  totalViews:0,
  userid:"",
  weeklyConnections: [0,0,0,0,0,0,0],
  weeklyViews:[0,0,0,0,0,0,0],
  recentConnections:[]
};

export const analyticsSlice = createSlice({
  name: "analyticsHandeler",
  initialState,
  reducers: {
    setAnalytics: (state, action: PayloadAction<Partial<analyticsTypes> | undefined>) => {
        if (!action.payload || Object.keys(action.payload).length === 0) {
          Object.assign(state, initialState);
        } else {
          Object.assign(state, action.payload);
        }
      }
    }
});

export const { setAnalytics } = analyticsSlice.actions;

export default analyticsSlice.reducer;
