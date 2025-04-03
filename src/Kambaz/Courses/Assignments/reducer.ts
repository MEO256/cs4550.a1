import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  assignments: [],
  assignment: {
      course: -1
  }
}
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignment: (state, action) => {
      state.assignment = action.payload;
  },
  setAssignments: (state, action) => {
      state.assignments = action.payload;
  },
  setAssignmentCourse: (state, action) => {
    state.assignment.course = action.payload;
},
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        _id: new Date().getTime().toString(),
        title: assignment.title,
        course: assignment.course,
        modules: assignment.modules,
        available_from_date: assignment.available_from_date,
        available_until_date: assignment.available_until_date,
        points: assignment.points,
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignmentId);
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      ) as any;
    },
  },
});
export const { setAssignmentCourse, setAssignment, setAssignments, addAssignment, deleteAssignment, updateAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;