import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = {
    quizzes: [],
};
const quizSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    setQuizzes: (state, action) => {
      state.quizzes = action.payload;
    },
    addQuizzes: (state, { payload: assignment }) => {
      const newAssignment: any = {
        _id: uuidv4(),
        title: assignment.title,
        description: assignment.description,
        points: assignment.points,
        due: assignment.due,
        available: assignment.available,
        course: assignment.course,
        shuffle_answers: assignment.shuffle_answers,
        show_answers: assignment.show_answers,
        webcam: assignment.webcam,
        time_limit: assignment.time_limit,
        multiple_attempts: assignment.multiple_attempts,
        assignmentGroup: assignment.assignmentGroup,
        displayType: assignment.displayType,
        submissionType: assignment.submissionType,
        assignTo: assignment.assignTo,
      };
      state.quizzes = [...state.quizzes, newAssignment] as any;
    },
    deleteQuizzes: (state, { payload: assignmentId }) => {
      state.quizzes = state.quizzes.filter(
        (a: any) => a._id !== assignmentId);
    },
    updateQuizzes: (state, { payload: assignment }) => {
      state.quizzes = state.quizzes.map((a: any) =>
        a._id === assignment._id ? assignment : a
      ) as any;
    },
    editQuizzes: (state, { payload: assignmentId }) => {
      state.quizzes = state.quizzes.map((a: any) =>
        a._id === assignmentId ? { ...a, editing: true } : a
      ) as any;
    },
  },
});
export const { addQuizzes, deleteQuizzes, updateQuizzes, editQuizzes, setQuizzes } =
    quizSlice.actions;
export default quizSlice.reducer;