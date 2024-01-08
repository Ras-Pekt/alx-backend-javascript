export default function updateStudentGradeByCity (studentList, city, newGrades) {
  // get an array filtered by city
  const studentCity = studentList.filter((location) => location.location === city);

  // add a new entry of grades to the new array
  const newArray = studentCity.map((newEntry) => {
    // find the object by id where to make the new entry
    const newGrade = newGrades.find((id) => newEntry.id === id.studentId);
    if (newGrade) {
      return {...newEntry, grade: newGrade.grade};
    } else {
      return {...newEntry, grade: 'N/A'};
    }
  })
  return newArray;
}
