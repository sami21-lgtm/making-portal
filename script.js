// আপনার সব ইনফরমেশন (ইনপুট ডাটা) এখানে থাকবে
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

// লগইন চেক করার ফাংশন
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const inputId = document.getElementById('studentId').value.trim();
    const inputPass = document.getElementById('password').value.trim();
    const errorMsg = document.getElementById('errorMsg');
    
    if (inputId === studentData.id && inputPass === studentData.password) {
        // লগইন সফল হলে ইন্টারফেস দেখাবে এবং ডাটা লোড করবে
        document.getElementById('loginPage').classList.add('hidden');
        document.getElementById('portalInterface').classList.remove('hidden');
        errorMsg.innerText = "";
        
        // ড্যাশবোর্ড এবং প্রোফাইলের ডাটা একবারে সেট করে দেওয়া
        loadStudentProfileData();
    } else {
        errorMsg.innerText = "Invalid Student ID or Password!";
    }
});

// এই ফাংশনটি স্বয়ংক্রিয়ভাবে HTML-এর আইডিগুলো খুঁজে ডাটা বসিয়ে দেবে
function loadStudentProfileData() {
    // হেডার ও বেসিক ইনফো
    document.getElementById("headerName").innerText = studentData.name;
    document.getElementById("headerId").innerText = studentData.id;
    document.getElementById("pName").innerText = studentData.name;
    document.getElementById("pId").innerText = studentData.id;
    document.getElementById("pDept").innerText = studentData.dept;
    document.getElementById("pProgram").innerText = studentData.program;
    document.getElementById("pBatch").innerText = studentData.batch;
    
    // পার্সোনাল ও কন্টাক্ট ইনফো
    document.getElementById("pFather").innerText = studentData.father;
    document.getElementById("pMother").innerText = studentData.mother;
    document.getElementById("pBlood").innerText = studentData.blood;
    document.getElementById("pGender").innerText = studentData.gender;
    document.getElementById("pEmail").innerText = studentData.email;
    document.getElementById("pPhone").innerText = studentData.phone;
    document.getElementById("pAddress").innerText = studentData.address;
}

// সাইডবার ট্যাব পরিবর্তন করার ফাংশন
function switchTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.add('hidden'));
    
    const menuItems = document.querySelectorAll('.sidebar-menu li');
    menuItems.forEach(item => item.classList.remove('active'));
    
    document.getElementById(`tab-${tabName}`).classList.remove('hidden');
    document.getElementById(`menu-${tabName}`).classList.add('active');
}

// ল্যাপটপ থেকে ছবি আপলোড করে চেঞ্জ করার ফাংশন
function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const output = document.getElementById('profilePic');
        output.src = reader.result;
    };
    if(event.target.files[0]) {
        reader.readAsDataURL(event.target.files[0]);
    }
}

// লগআউট ফাংশন
function logout() {
    document.getElementById('portalInterface').classList.add('hidden');
    document.getElementById('loginPage').classList.remove('hidden');
    document.getElementById('password').value = "";
}
