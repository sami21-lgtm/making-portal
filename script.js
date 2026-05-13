// আপনার সব ডাটা অবজেক্ট আকারে এখানে সেভ করা থাকবে
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

// HTML পেজটি ব্রাউজারে পুরোপুরি রেডি হলে এই ইভেন্টটি কাজ শুরু করবে
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault(); // ফর্ম সাবমিট হয়ে স্ক্রিন রিফ্রেশ হওয়া বন্ধ করবে
            
            // HTML এর ইনপুট বক্স থেকে আইডি আর পাসওয়ার্ড রিড করা
            const inputId = document.getElementById('studentId').value.trim();
            const inputPass = document.getElementById('password').value.trim();
            const errorMsg = document.getElementById('errorMsg');
            
            // ডাটাবেজের (অবজেক্টের) সাথে আইডি-পাসওয়ার্ড ম্যাচ করা হলো
            if (inputId === studentData.id && inputPass === studentData.password) {
                // লগইন সফল হলে লগইন স্ক্রিন হাইড হয়ে মেইন ইন্টারফেস শো করবে
                document.getElementById('loginPage').classList.add('hidden');
                document.getElementById('portalInterface').classList.remove('hidden');
                if (errorMsg) errorMsg.innerText = "";
                
                // আপনার আগের HTML ফাইলের আইডিগুলো ধরে ডাটা লোড করার ফাংশন কল
                loadStudentProfileData();
            } else {
                if (errorMsg) errorMsg.innerText = "Invalid Student ID or Password!";
            }
        });
    }
});

// আপনার আগের HTML ফাইলের আইডিগুলোর (`pId`, `pDept`, `pFather` ইত্যাদি) ভেতর ডাটা পুশ করার মেকানিজম
function loadStudentProfileData() {
    // টপ হেডার প্যানেলের নাম ও আইডি আপডেট
    if(document.getElementById("headerName")) {
        document.getElementById("headerName").innerText = studentData.name;
    }
    
    // প্রোফাইল কার্ডের বেসিক তথ্য ফিল্ড (যেখানে ড্যাশ '-' আসছিল)
    if(document.getElementById("pName")) document.getElementById("pName").innerText = studentData.name;
    if(document.getElementById("pId")) document.getElementById("pId").innerText = studentData.id;
    if(document.getElementById("pDept")) document.getElementById("pDept").innerText = studentData.dept;
    if(document.getElementById("pProgram")) document.getElementById("pProgram").innerText = studentData.program;
    if(document.getElementById("pBatch")) document.getElementById("pBatch").innerText = studentData.batch;
    
    // পার্সোনাল ইনফরমেশন বক্সের ভেতর ডাটা পুশ
    if(document.getElementById("pFather")) document.getElementById("pFather").innerText = studentData.father;
    if(document.getElementById("pMother")) document.getElementById("pMother").innerText = studentData.mother;
    if(document.getElementById("pBlood")) document.getElementById("pBlood").innerText = studentData.blood;
    if(document.getElementById("pGender")) document.getElementById("pGender").innerText = studentData.gender;
    
    // কন্টাক্ট ইনফরমেশন বক্সের ভেতর ডাটা পুশ
    if(document.getElementById("pEmail")) document.getElementById("pEmail").innerText = studentData.email;
    if(document.getElementById("pPhone")) document.getElementById("pPhone").innerText = studentData.phone;
    if(document.getElementById("pAddress")) document.getElementById("pAddress").innerText = studentData.address;
}

// সাইডবারের মেনু বা ট্যাব পরিবর্তন করার অরিজিনাল ফাংশন
function switchTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.add('hidden'));
    
    const menuItems = document.querySelectorAll('.sidebar-menu li');
    menuItems.forEach(item => item.classList.remove('active'));
    
    document.getElementById(`tab-${tabName}`).classList.remove('hidden');
    document.getElementById(`menu-${tabName}`).classList.add('active');
}

// ল্যাপটপ থেকে ছবি আপলোড করে প্রোফাইলে সেট করার ফাংশন
function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const output = document.getElementById('profilePic');
        if(output) output.src = reader.result;
    };
    if(event.target.files[0]) {
        reader.readAsDataURL(event.target.files[0]);
    }
}

// লগআউট সেশন কন্ট্রোলার ফাংশন
function logout() {
    document.getElementById('portalInterface').classList.add('hidden');
    document.getElementById('loginPage').classList.remove('hidden');
    document.getElementById('password').value = ""; // পাসওয়ার্ড বক্স ক্লিয়ার
}
