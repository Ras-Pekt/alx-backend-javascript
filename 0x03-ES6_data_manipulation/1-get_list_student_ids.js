export default function getListStudentIds (studentList) {
  if (Array.isArray(studentList)) {
    return studentList.map((studentId) => studentId.id);
  }
  return [];
}
