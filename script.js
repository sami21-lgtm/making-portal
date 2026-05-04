const studentData = {
    id: "221-15-1234",
    password: "1234",
    name: "Md. Emtiaz Hossain Sami",
    dept: "Software Engineering (SWE)",
    program: "B.Sc. in SWE",
    batch: "42nd",
    father: "Mr. XXX",
    mother: "Mrs. XXX",
    blood: "B+",
    gender: "Male",
    email: "sami@diu.edu.bd",
    phone: "017XXXXXXXX",
    address: "Dhaka, Bangladesh"
};

function checkLogin(e) {
    e.preventDefault();
    const id = document.getElementById("studentId").value;
    const pass = document.getElementById("password").value;
    const errorMsg = document.getElementById("errorMsg");

    if (id === studentData.id && pass === studentData.password) {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "dashboard.html";
    } else {
        errorMsg.innerText = "Invalid Student ID or Password!";
    }
}

function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "index.html";
}

function loadPage(page) {
    window.location.href = page + ".html";
}

function loadProfileData() {
    document.getElementById("headerName").innerText = studentData.name;
    document.getElementById("pName").innerText = studentData.name;
    document.getElementById("pId").innerText = studentData.id;
    document.getElementById("pDept").innerText = studentData.dept;
    document.getElementById("pProgram").innerText = studentData.program;
    document.getElementById("pBatch").innerText = studentData.batch;
    document.getElementById("pFather").innerText = studentData.father;
    document.getElementById("pMother").innerText = studentData.mother;
    document.getElementById("pBlood").innerText = studentData.blood;
    document.getElementById("pGender").innerText = studentData.gender;
    document.getElementById("pEmail").innerText = studentData.email;
    document.getElementById("pPhone").innerText = studentData.phone;
    document.getElementById("pAddress").innerText = studentData.address;
}

function loadDashboardData() {
    document.getElementById("headerName").innerText = studentData.name;
}

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", checkLogin);
    }

    if (window.location.pathname.includes("profile")) {
        loadProfileData();
    }

    if (window.location.pathname.includes("dashboard")) {
        loadDashboardData();
    }
});
