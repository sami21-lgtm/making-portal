const studentData = {
    id: "242-35-744",
    password: "1234",
    name: "Md. Emtiaz Hossain Sami",
    dept: "Software Engineering (SWE)",
    program: "B.Sc. in SWE",
    batch: "43rd",
    father: "Md. Emarat Hossian Mollah",
    mother: "Sabrina Sultana",
    blood: "B+",
    gender: "Male",
    email: "sami242-35-744@diu.edu.bd",
    phone: "01998453990",
    address: "Dhaka, Bangladesh"
};

function handleLogin(event) {
    event.preventDefault();
    const studentId = document.getElementById('studentId').value.trim();
    const password = document.getElementById('password').value.trim();

    if (studentId === studentData.id && password === studentData.password) {
        document.getElementById('loginPage').classList.remove('active');
        document.getElementById('portalPage').classList.add('active');
        updateUserDisplay();
    } else {
        alert('ভুল আইডি বা পাসওয়ার্ড! আবার চেষ্টা করুন।');
    }
}

function updateUserDisplay() {
    document.getElementById('userName').textContent = studentData.name;
}

function showSection(sectionId) {
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active');
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

function logout() {
    if (confirm('আপনি কি লগআউট করতে চান?')) {
        location.reload(); 
    }
}
