import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { currentUser, User,} from '../data/userData';

const initialState: User = currentUser;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateCourseProgress: (state, action: PayloadAction<{ courseId: number; progress: number }>) => {
      const enrollment = state.enrolledCourses.find(c => c.courseId === action.payload.courseId);
      if (enrollment) {
        enrollment.progress = action.payload.progress;
      }
    },
    markCourseCompleted: (state, action: PayloadAction<number>) => {
      const enrollment = state.enrolledCourses.find(c => c.courseId === action.payload);
      if (enrollment) {
        console.log(action.payload);
        enrollment.completed = true;
        enrollment.progress = 100;
      }
    },
  },
});

export const { updateCourseProgress, markCourseCompleted } = userSlice.actions;
export default userSlice.reducer;