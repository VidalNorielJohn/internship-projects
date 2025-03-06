const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 78 },
  { name: "David", score: 95 },
  { name: "Eve", score: 88 },
];

// 1. Use .map() to create an array of student names.
// const studentNames = students.map((student) => student.name);
// console.log("Student Names:", studentNames);

// 2. Use .filter() to get students who scored above 80.
// const highScorers = students.filter((student) => student.score >= 80);
// console.log(highScorers);

// 3. Use .reduce() to calculate the average score of all students.
// const totalScore = students.reduce((acc, student) => acc + student.score, 0);
// const averageScore = totalScore / students.length;

// console.log("Average Score:", averageScore);

// 4. Use .find() to get the first student who scored above 90.
// const topStudent = students.find((student) => student.score >= 90);
// console.log("Top Student:", topStudent);

// 5. Use .some() to check if any student scored below 80.
// const hasLowScorer = students.some((student) => student.score <= 80);
// console.log("Low Scorer: ", hasLowScorer);

// 6. Use .every() to check if all students scored above 75.
// const allPassed = students.every((student) => student.score >= 75);
// console.log("All Passed: ", allPassed);

// 7. Use .sort() to sort students by score in descending order.
// const sortedStudents = students.sort((a, b) => a.score - b.score);
// console.log("Sort Asending: ", sortedStudents);
