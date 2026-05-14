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

// লগইন ফাংশন
function checkLogin() {
    const idInput = document.getElementById('studentId').value.trim();
    const passInput = document.getElementById('password').value.trim();
    const errorMsg = document.getElementById('errorMsg');

    if (idInput === studentData.id && passInput === studentData.password) {
        document.getElementById('loginPage').style.display = 'none';
        const portal = document.getElementById('portalInterface');
        portal.classList.remove('hidden');
        portal.style.display = 'flex';
        
        loadProfileData(); // প্রোফাইল ডাটা লোড
    } else {
        errorMsg.innerText = "Invalid ID or Password!";
    }
}

// প্রোফাইলে ডাটা বসানো
function loadProfileData() {
    document.getElementById("headerName").innerText = studentData.name;
    document.getElementById("headerId").innerText = studentData.id;
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

// ট্যাব সুইচিং
function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.add('hidden'));
    document.querySelectorAll('.sidebar-menu li').forEach(l => l.classList.remove('active'));
    document.getElementById(`tab-${tabName}`).classList.remove('hidden');
    document.getElementById(`menu-${tabName}`).classList.add('active');
}

// ইমেজ আপলোড
function previewImage(event) {
    const reader = new FileReader();
    reader.onload = () => document.getElementById('profilePic').src = reader.result;
    if(event.target.files[0]) reader.readAsDataURL(event.target.files[0]);
}

// লগআউট
function logout() {
    location.reload(); 
}
