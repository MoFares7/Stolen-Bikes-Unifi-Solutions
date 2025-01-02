import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  viewMode: "table" | "grid";
}

const initialState: InitialState = {
  viewMode: "table",
};

const viewSlice = createSlice({
  name: "view-mode",
  initialState,
  reducers: {
    changeMode: (state, action: PayloadAction<"table" | "grid">) => {
      state.viewMode = action.payload;
    },
  },
});

export default viewSlice.reducer;
export const { changeMode } = viewSlice.actions;
