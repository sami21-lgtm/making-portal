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
        updateProfileUI();
    } else {
        alert('Invalid ID or Password!');
    }
}

function updateProfileUI() {
    // হেডার ও প্রোফাইল নাম
    document.getElementById('userName').textContent = studentData.name;
    
    // প্রোফাইল সেকশনের তথ্য (যদি HTML-এ এই আইডিগুলো থাকে)
    const fields = {
        'pName': studentData.name,
        'pId': studentData.id,
        'pDept': studentData.dept,
        'pFather': studentData.father,
        'pMother': studentData.mother,
        'pEmail': studentData.email,
        'pPhone': studentData.phone
    };

    for (let id in fields) {
        const element = document.getElementById(id);
        if (element) element.textContent = fields[id];
    }
}

function showSection(sectionId) {
    document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    
    document.getElementById(sectionId).classList.add('active');
    if (event) event.currentTarget.classList.add('active');
    
    const titles = { 'dashboard': 'Dashboard', 'profile': 'Student Profile', 'results': 'Academic Results' };
    document.getElementById('pageTitle').textContent = titles[sectionId] || 'Portal';
}

function logout() {
    location.reload();
}
