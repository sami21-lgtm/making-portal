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
        // লগইন সফল হলে লগইন পেজ হাইড এবং পোর্টাল শো করবে
        document.getElementById('loginPage').classList.remove('active');
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('portalPage').classList.add('active');
        document.getElementById('portalPage').style.display = 'flex';
        updateUserDisplay();
    } else {
        alert('ভুল আইডি বা পাসওয়ার্ড! আবার চেষ্টা করুন।');
    }
}

function updateUserDisplay() {
    document.getElementById('userName').textContent = studentData.name;
}

function showSection(sectionId) {
    // সব সেকশন হাইড করা
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active');
    });

    // সব লিঙ্কের একটিভ ক্লাস সরানো
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    // নির্দিষ্ট সেকশন দেখানো
    document.getElementById(sectionId).classList.add('active');

    // টাইটেল আপডেট
    const titles = {
        'dashboard': 'Dashboard',
        'profile': 'Student Profile',
        'schedule': 'Class Schedule',
        'results': 'Academic Results',
        'courses': 'Enrolled Courses',
        'notices': 'Notices'
    };
    document.getElementById('pageTitle').textContent = titles[sectionId] || 'Dashboard';
}

function logout() {
    if (confirm('আপনি কি লগআউট করতে চান?')) {
        location.reload(); // পেজ রিলোড করে আবার লগইন স্ক্রিনে নিয়ে যাবে
    }
}
