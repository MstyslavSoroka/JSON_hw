const form = document.getElementById('form');
const table = document.getElementById('table_content');
let students = [];

function show() {
  table.innerHTML = '';
  students.forEach((student, i) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.surname}</td>
      <td>${student.age}</td>
      <td>${student.course}</td>
      <td>${student.faculty}</td>
      <td>
        <button onclick="deleteStudent(${i})">Delete</button>
      </td>
    `;
    table.appendChild(row);
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const newStudent = {
    name: document.getElementById('name').value,
    surname: document.getElementById('surname').value,
    age: document.getElementById('age').value,
    course: document.getElementById('course').value,
    faculty: document.getElementById('faculty').value,
  };

  students.push(newStudent);
  show();

  console.log(JSON.stringify(students));

  form.reset();
});

function deleteStudent(index) {
  students.splice(index, 1);
  show();
}
