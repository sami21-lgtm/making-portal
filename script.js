// ডাটা সোর্স অবজেক্ট
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

// DOM Content পুরোপুরি রেডি হলে ইভেন্ট লিসেনার চালু হবে
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault(); // ফর্ম সাবমিট হয়ে পেজ রিফ্রেশ হওয়া লক করা হলো
            
            const inputId = document.getElementById('studentId').value.trim();
            const inputPass = document.getElementById('password').value.trim();
            const errorMsg = document.getElementById('errorMsg');
            
            if (inputId === studentData.id && inputPass === studentData.password) {
                // সফলভাবে লগইন হলে পোর্টাল ভিউ আনলক হবে
                document.getElementById('loginPage').classList.add('hidden');
                document.getElementById('portalInterface').classList.remove('hidden');
                if (errorMsg) errorMsg.innerText = "";
                
                // ইন্টারফেসে প্রোফাইল ডাটা সেট করার ফাংশন কল
                loadStudentProfileData();
            } else {
                if (errorMsg) errorMsg.innerText = "Invalid Student ID or Password!";
            }
        });
    }
});

// HTML এর খালি ফিল্ডগুলোতে ডাটা ডিস্ট্রিবিউট করার ফাংশন
function loadStudentProfileData() {
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

// Side Menu Tab Switcher Mechanism
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
        document.getElementById('profilePic').src = reader.result;
    };
    if(event.target.files[0]) {
        reader.readAsDataURL(event.target.files[0]);
    }
}

// Session Log Out Frame Controller
function logout() {
    document.getElementById('portalInterface').classList.add('hidden');
    document.getElementById('loginPage').classList.remove('hidden');
    document.getElementById('password').value = "";
}
