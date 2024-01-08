export default function getStudentsByLocation (studentList, city) {
  if (Array.isArray(studentList)) {
    return studentList.filter((location) => location.location === city);
  }
  return [];
}