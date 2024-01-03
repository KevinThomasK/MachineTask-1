import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./feautures/sidebarSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
  },
});
