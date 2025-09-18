import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Bio: 0,
  maths: 0,
  commerce: 0,
  arts: 0,
  total: 0,
};

const marksSlice = createSlice({
  name: "marks",
  initialState,
  reducers: {
    setMarks: (state, action) => {
      const { Bio, maths, commerce, arts, total } =
        action.payload;
      state.Bio = Bio;
      state.maths = maths;
      state.commerce = commerce;
      state.arts = arts;
      state.total = total;
    },
    resetMarks: (state) => {
      state.Bio = 0;
      state.maths = 0;
      state.commerce = 0;
      state.arts = 0;
      state.total = 0;
    },
  },
});

export const { setMarks, resetMarks } = marksSlice.actions;
export default marksSlice.reducer;
