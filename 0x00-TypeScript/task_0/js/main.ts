interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Carson",
    lastName: "David",
    age: 40,
    location: "NYC",
};

const student2: Student = {
    firstName: "Luis",
    lastName: "Switch",
    age: 30,
    location: "PA",
};

const studentList: Array<Student> = [student1, student2];
const table = document.createElement("table");
const tbody = document.createElement("tbody");

studentList.forEach((student) => {
    const row = document.createElement("tr");
    const cellName = document.createElement("td");
    const cellLocation = document.createElement("td");
    cellName.textContent = student.firstName;
    cellLocation.textContent = student.location;
    row.appendChild(cellName);
    row.appendChild(cellLocation);
    tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
