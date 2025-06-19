// Existing array of students
const students = [
  {
    name: "Farddin Khan",
    rollNo: "12345678",
    course: "B.Sc Computer Science",
    semester: "2",
    subjects: ["CS201 - Web Development", "MA202 - Discrete Math", "HS203 - Communication"]
  }
];

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim().toLowerCase();
  const rollNo = document.getElementById("rollNo").value.trim();

  const student = students.find(
    s => s.name.toLowerCase() === name && s.rollNo === rollNo
  );

  if (student) {
    showDashboard(student);
    document.getElementById("errorMessage").textContent = "";
  } else {
    document.getElementById("errorMessage").textContent = "Invalid name or roll number.";
  }
});


function showDashboard(student) {
  document.getElementById("studentName").textContent = student.name;
  document.getElementById("studentRollNo").textContent = student.rollNo;
  document.getElementById("studentCourse").textContent = student.course || "N/A";
  document.getElementById("studentSemester").textContent = student.semester || "N/A";

  const subjectList = document.getElementById("subjectList");
  subjectList.innerHTML = "";
  (student.subjects || []).forEach(subject => {
    const li = document.createElement("li");
    li.textContent = subject;
    subjectList.appendChild(li);
  });

  toggleView("dashboard");
}

document.getElementById("logoutBtn").addEventListener("click", () => {
  toggleView("login");
  document.getElementById("loginForm").reset();
});


document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const newStudent = {
    name: document.getElementById("regName").value.trim(),
    rollNo: document.getElementById("regRollNo").value.trim(),
    age: document.getElementById("regAge").value.trim(),
    email: document.getElementById("regEmail").value.trim(),
    phone: document.getElementById("regPhone").value.trim(),
    fatherName: document.getElementById("regFatherName").value.trim(),
    course: "B.Sc Computer Science",
    semester: "1",
    subjects: ["CS101 - Intro to CS", "MA101 - Algebra", "HS101 - English"]
  };

  students.push(newStudent);

  document.getElementById("registerMessage").textContent =
    "Registration successful! You can now log in.";

  document.getElementById("registerForm").reset();
});

document.getElementById("loginTab").addEventListener("click", () => toggleView("login"));
document.getElementById("registerTab").addEventListener("click", () => toggleView("register"));

function toggleView(view) {
  document.getElementById("loginSection").classList.add("hidden");
  document.getElementById("registerSection").classList.add("hidden");
  document.getElementById("studentDashboard").classList.add("hidden");

  if (view === "login") document.getElementById("loginSection").classList.remove("hidden");
  if (view === "register") document.getElementById("registerSection").classList.remove("hidden");
  if (view === "dashboard") document.getElementById("studentDashboard").classList.remove("hidden");

  
  document.getElementById("errorMessage").textContent = "";
  document.getElementById("registerMessage").textContent = "";
}


// let time = 90;
// if (time < 10) {
//   greeting = "Good morning";
// } else if (time < 20) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }



// let i = 10;
// if(i<5, i++){
//   console.log("Good morning");
// }else{
//   console.log("Good night");
// }


// sum with mininum row and colume


// function minSum(grid) {
//     const rows = grid.length;
//     const cols = grid[0].length;

//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < cols; j++) {
//             if (i === 0 && j === 0) continue; 
//             else if (i === 0) grid[i][j] += grid[i][j - 1]; 
//             else if (j === 0) grid[i][j] += grid[i - 1][j]; 
//             else grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]); 
//         }
//     }

//     return grid[rows - 1][cols - 1];
// }

// const grid = [
//     [1, 3, 1],
//     [1, 5, 1],
//     [4, 2, 1]
// ];

// console.log(minSum(grid));


