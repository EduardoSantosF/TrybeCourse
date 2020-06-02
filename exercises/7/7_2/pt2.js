const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1
function changeValue(obj, key, value) {
  obj[key] = value;
}
changeValue(lesson2, 'turno', 'manhã');

// 2
function listKeys(obj) {
  console.log(Object.keys(obj));
}

// 3 
function objectSize(obj) {
  console.log(Object.keys.length);
}

// 4
function listValues(obj) {
  console.log(Object.values(obj));
}

// 5
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

// 6
function numberOfStudents(obj) {
  let students = 0;
  for (const i in obj) {
    students += obj[i].numeroEstudantes; 
  }
  return students;
}
// console.log(numberOfStudents(allLessons));

// 7
function getValueByIndex(obj, index){
  return Object.values(obj)[index];
}
// console.log(getValueByIndex(lesson2, 0));

// 8
function verifyPair(obj, key, value) {
  return obj.hasOwnProperty(key) && obj[key] === value;
}

// console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false

// Bônus

// 1
function howManyStudentsWatched(obj, subject) {
  let students = 0;
  for (const i in obj) {
    if (obj[i].materia === subject) {
      students += obj[i].numeroEstudantes;
    }
  }
  return students;
}
// console.log(howManyStudentsWatched(allLessons, 'Matemática'));

// 2
function createReport(obj, prof) {
  const report = {
    professor: prof,
    aulas: [],
    estudantes: 0,
  }

  for (const i in obj) {
    if (obj[i].professor == prof) {
      report.aulas.push(obj[i].materia);
      report.estudantes += obj[i].numeroEstudantes;
    }
  }
  return report;
}
// console.log(createReport(allLessons, 'Maria Clara'));
