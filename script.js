// আপনার সব ইনপুট ডাটা এখানে অবজেক্ট আকারে রাখা হলো
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

// DOM Content Loaded ইভেন্ট ব্যবহার করা হয়েছে যাতে HTML পুরোপুরি লোড হওয়ার পর স্ক্রিপ্ট রান হয়
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            // CRITICAL FIX: এই লাইনটি ফর্ম সাবমিট হয়ে পেজ রিফ্রেশ হওয়া (ইউআরএল-এ '?' আসা) বন্ধ করবে
            e.preventDefault(); 
            
            const inputId = document.getElementById('studentId').value.trim();
            const inputPass = document.getElementById('password').value.trim();
            const errorMsg = document.getElementById('errorMsg');
            
            if (inputId === studentData.id && inputPass === studentData.password) {
                // সফলভাবে লগইন হলে পেজ ট্রানজিশন হবে
                document.getElementById('loginPage').classList.add('hidden');
                document.getElementById('portalInterface').classList.remove('hidden');
                if (errorMsg) errorMsg.innerText = "";

                // ডাটা লোড করার ফাংশন কল
                loadStudentProfileData();
            } else {
                if (errorMsg) errorMsg.innerText = "Invalid Student ID or Password!";
            }
        });
    }
});

// প্রোফাইল ও হেডারে ডাটা পুশ করার ফাংশن
function loadStudentProfileData() {
    if (!document.getElementById("pId")) return; // পেজে এলিমেন্ট না থাকলে ব্যাক করবে
    
    // টপ হেডার ইনফো
    document.getElementById("headerName").innerText = studentData.name;
    document.getElementById("headerId").innerText = studentData.id;
    
    // প্রোফাইল কার্ডের বেসিক ইনফো
    document.getElementById("pName").innerText = studentData.name;
    document.getElementById("pId").innerText = studentData.id;
    document.getElementById("pDept").innerText = studentData.dept;
    document.getElementById("pProgram").innerText = studentData.program;
    document.getElementById("pBatch").innerText = studentData.batch;
    
    // পার্সোনাল ইনফরমেশন বক্স
    document.getElementById("pFather").innerText = studentData.father;
    document.getElementById("pMother").innerText = studentData.mother;
    document.getElementById("pBlood").innerText = studentData.blood;
    document.getElementById("pGender").innerText = studentData.gender;
    
    // কন্টাক্ট ইনফরমেশন বক্স
    document.getElementById("pEmail").innerText = studentData.email;
    document.getElementById("pPhone").innerText = studentData.phone;
    document.getElementById("pAddress").innerText = studentData.address;
}

// Dynamic Sidebar Navigation Tab Switcher
function switchTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.add('hidden'));
    
    const menuItems = document.querySelectorAll('.sidebar-menu li');
    menuItems.forEach(item => item.classList.remove('active'));
    
    document.getElementById(`tab-${tabName}`).classList.remove('hidden');
    document.getElementById(`menu-${tabName}`).classList.add('active');
}

// Image Loader Setup for PC Upload
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

// Session Destruction System
function logout() {
    document.getElementById('portalInterface').classList.add('hidden');
    document.getElementById('loginPage').classList.remove('hidden');
    document.getElementById('password').value = ""; 
}
