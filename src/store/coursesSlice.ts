import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { courses, Course } from '../data/courseList';

interface CoursesState {
  courses: Course[];
  searchTerm: string;
}

const initialState: CoursesState = {
  courses: courses,
  searchTerm: '',
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = coursesSlice.actions;
export default coursesSlice.reducer;