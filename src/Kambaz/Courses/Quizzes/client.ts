import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/quizzes`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const fetchAssignmentById = async (courseId: string, quizId: string) => {
  const { data } = await axiosWithCredentials.get(`${REMOTE_SERVER}/api/courses/${courseId}/quizzes/${quizId}`);
  return data;
};


export const updateAssignment = async (assignment: any) => {
  const { data } = await axiosWithCredentials.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
  return data;
}

export const createAssignment = async () => {
  const { data } = await axiosWithCredentials.post(ASSIGNMENTS_API);
  return data;
}

export const deleteAssignment = async (assignmentId: string) => {
  const response = await axiosWithCredentials.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  return response.data;
}