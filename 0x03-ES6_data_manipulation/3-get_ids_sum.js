export default function getStudentIdsSum (studentList) {
  if (Array.isArray(studentList)) {
    // const studentId = studentList.map(obj => obj.id);
    return studentList.map(obj => obj.id).reduce((accumulator, currentValue) => accumulator + currentValue);
  }
  return [];
}
