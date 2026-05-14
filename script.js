// আপনার সঠিক ডাটাবেজ
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

document.addEventListener("DOMContentLoaded", function() {
    // ১. লগইন বাটনটি খুঁজে বের করা (আপনার অরিজিনাল ক্লাস নাম অনুযায়ী)
    const loginBtn = document.querySelector('.login-btn');
    const loginForm = document.getElementById('loginForm');

    // ২. লগইন ফাংশন
    function performLogin(e) {
        if(e) e.preventDefault(); // পেজ রিফ্রেশ হওয়া বন্ধ করবে

        const idInput = document.getElementById('studentId');
        const passInput = document.getElementById('password');
        const errorMsg = document.getElementById('errorMsg');

        if (idInput.value.trim() === studentData.id && passInput.value.trim() === studentData.password) {
            // সফল লগইন: লগইন পেজ লুকিয়ে মেইন ইন্টারফেস দেখাবে
            document.getElementById('loginPage').classList.add('hidden');
            document.getElementById('portalInterface').classList.remove('hidden');
            if (errorMsg) errorMsg.innerText = "";
            
            // ডাটা লোড করা
            loadProfileData();
        } else {
            if (errorMsg) {
                errorMsg.innerText = "Invalid Student ID or Password!";
            } else {
                alert("Invalid Student ID or Password!");
            }
        }
    }

    // ৩. বাটনে ক্লিক করলে বা এন্টার চাপলে লগইন ট্রিগার হবে
    if (loginBtn) {
        loginBtn.addEventListener('click', performLogin);
    }
    if (loginForm) {
        loginForm.addEventListener('submit', performLogin);
    }

    // ৪. আপনার ড্যাশ '-' ওয়ালা ফিল্ডগুলোতে ডাটা বসানোর ফাংশন
    function loadProfileData() {
        const setField = (id, value) => {
            const el = document.getElementById(id);
            if(el) el.innerText = value;
        };

        setField("headerName", studentData.name);
        setField("headerId", studentData.id);
        setField("pName", studentData.name);
        setField("pId", studentData.id);
        setField("pDept", studentData.dept);
        setField("pProgram", studentData.program);
        setField("pBatch", studentData.batch);
        setField("pFather", studentData.father);
        setField("pMother", studentData.mother);
        setField("pBlood", studentData.blood);
        setField("pGender", studentData.gender);
        setField("pEmail", studentData.email);
        setField("pPhone", studentData.phone);
        setField("pAddress", studentData.address);
    }

    // ৫. ইমেজ প্রিভিউ ও ট্যাব সুইচিং (আগের মতো)
    window.switchTab = function(tabName) {
        document.querySelectorAll('.tab-content').forEach(t => t.classList.add('hidden'));
        document.querySelectorAll('.sidebar-menu li').forEach(l => l.classList.remove('active'));
        document.getElementById(`tab-${tabName}`).classList.remove('hidden');
        document.getElementById(`menu-${tabName}`).classList.add('active');
    };

    window.previewImage = function(event) {
        const reader = new FileReader();
        reader.onload = () => document.getElementById('profilePic').src = reader.result;
        if(event.target.files[0]) reader.readAsDataURL(event.target.files[0]);
    };

    window.logout = function() {
        document.getElementById('portalInterface').classList.add('hidden');
        document.getElementById('loginPage').classList.remove('hidden');
        document.getElementById('password').value = "";
    };
});
