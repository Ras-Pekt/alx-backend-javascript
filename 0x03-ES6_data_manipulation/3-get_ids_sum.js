export default function getStudentIdsSum(studentList) {
  if (Array.isArray(studentList)) {
    return studentList.map((obj) => obj.id)
      .reduce((accumulator, currentValue) => accumulator + currentValue);
  }
  return [];
}
