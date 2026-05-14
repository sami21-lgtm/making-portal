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

let currentUser = null;

function handleLogin(event) {
    event.preventDefault();
    const studentId = document.getElementById('studentId').value;
    const password = document.getElementById('password').value;

    if (studentId === studentData.id && password === studentData.password) {
        currentUser = studentData;
        document.getElementById('loginPage').classList.remove('active');
        document.getElementById('portalPage').classList.add('active');
        updateUserDisplay();
    } else {
        alert('Invalid credentials. Try ID: 242-35-744, Password: 1234');
    }
}

function updateUserDisplay() {
    document.getElementById('userName').textContent = currentUser.name;
}

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from all nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    // Show selected section
    document.getElementById(sectionId).classList.add('active');

    // Add active class to clicked nav link
    event.target.closest('.nav-link').classList.add('active');

    // Update page title
    const titles = {
        'dashboard': 'Dashboard',
        'profile': 'Student Profile',
        'schedule': 'Class Schedule',
        'results': 'Academic Results',
        'courses': 'Enrolled Courses',
        'notices': 'Notices & Announcements'
    };
    document.getElementById('pageTitle').textContent = titles[sectionId] || 'Dashboard';
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        currentUser = null;
        document.getElementById('loginPage').classList.add('active');
        document.getElementById('portalPage').classList.remove('active');
        document.getElementById('studentId').value = '';
        document.getElementById('password').value = '';
    }
}
