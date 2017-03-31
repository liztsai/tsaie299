var springBreak = 'drive to Philly for a cheesesteak';

console.log(springBreak);

console.log(132 / 2);
console.log(44 + 22);
console.log(22 * 3);
console.log(70 - 4);
console.log(66 + 0);

var myArray1 = ['Gurika', 'Moon', 'Ana'];
var myArray2 = ['Kyle', 'Carol', 'Fish'];
var myArray3 = ['Liz', 'Jissara', 'Vitoria'];

var totalStudentCount = 10;
var studentsHereCount = myArray1.length + myArray2.length + myArray3.length;
var allStudentsHere = studentsHereCount == totalStudentCount;
var studentsMissing = !allStudentsHere;

console.log(allStudentsHere);
console.log(studentsHereCount);
console.log(totalStudentCount);

var allGroups = [myArray1, myArray2, myArray3];

for (var index1 = 0; index1 < allGroups.length; index1++) {
  console.log('The group number is' + (index1 + 1));
  console.log('The students in this group are:');

for (var index2 = 0; index2 < allGroups[index1].length; index2++) {
  console.log(allGroups[index1][index2]);
  }
}

