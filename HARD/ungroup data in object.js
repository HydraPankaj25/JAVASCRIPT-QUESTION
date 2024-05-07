// You volunteered to help out teaching a preschool in your area! You were given an array of all students and some important data about them, grouped by their teacher. Create a function that will ungroup every student so you can look at their details individually.

// ungroupStudents([{
//     teacher: "Ms. Car",
//     data: [{
//        name: "James",
//        emergenceNumber: "617-771-1082",
//     }, {
//        name: "Alice",
//        alergies: ["nuts", "carrots"],
//     }],
//   }, {
//     teacher: "Mr. Lamb",
//     data: [{
//       name: "Aaron",
//       age: 3
//     }]
//   }])

//   ➞ [{
//     teacher: "Ms. Car",
//     name: "James",
//     emergencyNumber: "617-771-1082",
//   }, {
//     teacher: "Ms. Car",
//     name: "Alice",
//     alergies: ["nuts", "carrots"],
//   }, {
//     teacher: "Mr. Lamb",
//     name: "Aaron",
//     age: 3,
//   }]

const data = [
  {
    teacher: "Ms. Car",
    name: "James",
    emergencyNumber: "617-771-1082",
  },
  {
    teacher: "Ms. Car",
    name: "Alice",
    alergies: ["nuts", "carrots"],
  },
  {
    teacher: "Mr. Lamb",
    name: "Aaron",
    age: 3,
  },
];

function groupByTeacher(data) {
    const groupedData = {};
    data.forEach(entry => {
      if (!groupedData[entry.teacher]) {
        groupedData[entry.teacher] = { teacher: entry.teacher, data: [] };
      }
      const { teacher, ...rest } = entry;
      groupedData[entry.teacher].data.push(rest);
    });
    return Object.values(groupedData);
  }
  
  const transformedData = groupByTeacher(data);
  console.log(JSON.stringify(transformedData));