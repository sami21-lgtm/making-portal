// আপনার রিয়েল সব ইনফরমেশন অবজেক্ট ডাটা
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

// SS ৩ এর ডাটা ধরে ফর্ম সাবমিট ইভেন্ট হ্যান্ডলার রেন্ডারিং
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault(); // ব্রাউজার স্ক্রিন রিফ্রেশ লক
            
            // HTML থেকে আইডি ও পাসওয়ার্ড ইনপুট রিড করা
            const inputId = document.getElementById('studentId').value.trim();
            const inputPass = document.getElementById('password').value.trim();
            const errorMsg = document.getElementById('errorMsg');
            
            // আইডি ও পাসওয়ার্ড সঠিক হলে ড্যাশবোর্ড স্ক্রিন আনলক হবে
            if (inputId === studentData.id && inputPass === studentData.password) {
                document.getElementById('loginPage').classList.add('hidden');
                document.getElementById('portalInterface').classList.remove('hidden');
                if (errorMsg) errorMsg.innerText = "";
                
                // প্রোফাইল ও টপ বারে আপনার সব ডাটা পুশ করার মেকানিজম চালু করা
                loadStudentProfileData();
            } else {
                if (errorMsg) errorMsg.innerText = "Invalid Student ID or Password!";
            }
        });
    }
});

// SS ১ এর খালি জায়গাগুলোতে ডাইনামিকালি সব ডাটা পুশ করার ফাংশন
function loadStudentProfileData() {
    // হেডার রাইট প্যানেল ডাটা
    document.getElementById("headerName").innerText = studentData.name;
    document.getElementById("headerId").innerText = studentData.id;
    
    // প্রোফাইল প্যানেল বেসিক কার্ড ডাটা
    document.getElementById("pName").innerText = studentData.name;
    document.getElementById("pId").innerText = studentData.id;
    document.getElementById("pDept").innerText = studentData.dept;
    document.getElementById("pProgram").innerText = studentData.program;
    document.getElementById("pBatch").innerText = studentData.batch;
    
    // পার্সোনাল ও কন্টাক্ট ইনফো বক্স ডাটা
    document.getElementById("pFather").innerText = studentData.father;
    document.getElementById("pMother").innerText = studentData.mother;
    document.getElementById("pBlood").innerText = studentData.blood;
    document.getElementById("pGender").innerText = studentData.gender;
    document.getElementById("pEmail").innerText = studentData.email;
    document.getElementById("pPhone").innerText = studentData.phone;
    document.getElementById("pAddress").innerText = studentData.address;
}

// সাইডবার ট্যাব পরিবর্তন করার জন্য কন্ট্রোলার লজিক
function switchTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.add('hidden'));
    
    const menuItems = document.querySelectorAll('.sidebar-menu li');
    menuItems.forEach(item => item.classList.remove('active'));
    
    document.getElementById(`tab-${tabName}`).classList.remove('hidden');
    document.getElementById(`menu-${tabName}`).classList.add('active');
}

// ল্যাপটপ স্টোরেজ থেকে ফটো আপলোড করে সেট করার ফাংশন
function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function() {
        document.getElementById('profilePic').src = reader.result;
    };
    if(event.target.files[0]) {
        reader.readAsDataURL(event.target.files[0]);
    }
}

// লগআউট সেশন ডেস্ট্রাকশন কন্ট্রোলার
function logout() {
    document.getElementById('portalInterface').classList.add('hidden');
    document.getElementById('loginPage').classList.remove('hidden');
    document.getElementById('password').value = ""; // ক্লিয়ার ইনপুট
}
