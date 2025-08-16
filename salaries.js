let company = {
  // the same object, compressed for brevity
  sales: [
    { name: "John", salary: 1 },
    { name: "Alice", salary: 3 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 9 },
      { name: "Alex", salary: 5 },
    ],
    internals: [{ name: "Jack", salary: 8 }],
  },
};

// The function to do the job
function sumSalaries(department) {
  if (Array.isArray(department)) {
    // case (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
  } else {
    // case (2)
    let sum = 0;
    for (let subDepartment of Object.values(department)) {
      sum += sumSalaries(subDepartment); // recursively call for subdepartments, sum the results
    }
    return sum;
  }
}

console.log("TOTAL SALARIES: ", sumSalaries(company));

/*
  - sumSalaries([
      { name: "John", salary: 1 },
      { name: "Alice", salary: 3 },
  ]) -> 4;

  - sumSalaries([
      { name: "Peter", salary: 9 },
      { name: "Alex", salary: 5 },
  ]) -> 14;

  - sumSalaries([{ name: "Jack", salary: 8 }]) -> 8;
  = 8 + 14 + 4 = 26;
*/
