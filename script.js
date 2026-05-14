// আপনার সকল সঠিক তথ্য
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

// এই ফাংশনটি স্বয়ংক্রিয়ভাবে বাটনের সাথে কানেক্ট হবে
document.addEventListener("DOMContentLoaded", function() {
    console.log("Portal Script Loaded!");

    // ১. লগইন বাটন ও ফর্ম খুঁজে বের করা
    const loginForm = document.getElementById('loginForm');
    const loginBtn = document.querySelector('.login-btn');

    // ২. লগইন করার মেইন ফাংশন
    function performLogin(e) {
        if(e) e.preventDefault(); // পেজ রিফ্রেশ হওয়া আটকাবে
        
        const idInput = document.getElementById('studentId');
        const passInput = document.getElementById('password');
        const errorMsg = document.getElementById('errorMsg');

        // ভ্যালিডেশন চেক
        if (idInput.value.trim() === studentData.id && passInput.value.trim() === studentData.password) {
            // লগইন পেজ লুকিয়ে পোর্টাল দেখাবে
            document.getElementById('loginPage').style.display = 'none';
            document.getElementById('portalInterface').classList.remove('hidden');
            document.getElementById('portalInterface').style.display = 'flex';
            
            loadProfileData(); // তথ্য লোড করবে
        } else {
            if (errorMsg) {
                errorMsg.innerText = "Invalid Student ID or Password!";
            } else {
                alert("Invalid Student ID or Password!");
            }
        }
    }

    // ৩. বাটন এবং এন্টার কী-তে ইভেন্ট লিসেনার সেট করা
    if (loginForm) {
        loginForm.addEventListener('submit', performLogin);
    } else if (loginBtn) {
        loginBtn.addEventListener('click', performLogin);
    }

    // ৪. তথ্যগুলো ড্যাশ '-' এর জায়গায় বসানো
    function loadProfileData() {
        const fields = {
            "headerName": studentData.name,
            "headerId": studentData.id,
            "pName": studentData.name,
            "pId": studentData.id,
            "pDept": studentData.dept,
            "pProgram": studentData.program,
            "pBatch": studentData.batch,
            "pFather": studentData.father,
            "pMother": studentData.mother,
            "pBlood": studentData.blood,
            "pGender": studentData.gender,
            "pEmail": studentData.email,
            "pPhone": studentData.phone,
            "pAddress": studentData.address
        };

        for (let id in fields) {
            const element = document.getElementById(id);
            if (element) element.innerText = fields[id];
        }
    }

    // ট্যাব পরিবর্তন ও ইমেজ প্রিভিউ ফাংশন (গ্লোবাল রাখা হয়েছে)
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
        location.reload(); // পেজ রিলোড করে আবার লগইন স্ক্রিনে আনবে
    };
});
