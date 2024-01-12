export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  const employees = [];

  for (const departmentEmployees of departments) {
    employees.push(...departmentEmployees);
  }

  let currentIndex = 0;

  return {
    [Symbol.iterator]() {
      return {
        next() {
          if (currentIndex < employees.length) {
            const value = employees[currentIndex];
            currentIndex += 1;
            return {
              value,
              done: false,
            };
          }
          return {
            done: true,
          };
        },
      };
    },
  };
}
