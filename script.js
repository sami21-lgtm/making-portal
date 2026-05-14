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
    address: "Dhaka, Bangladesh",
    // পেমেন্ট তথ্য (image_84f17e.png অনুযায়ী)
    payable: "408,668.00",
    paid: "442,568.00",
    due: "-33,900.00",
    other: "0.00"
};

// পেজ লোড হওয়ার সাথে সাথে ডাটা সেট হবে
window.onload = function() {
    updatePortalInfo();
};

function updatePortalInfo() {
    // ড্যাশবোর্ড কার্ড আপডেট
    document.querySelector('.payable .value').innerText = studentData.payable;
    document.querySelector('.paid .value').innerText = studentData.paid;
    document.querySelector('.due .value').innerText = studentData.due;
    document.querySelector('.other .value').innerText = studentData.other;

    // প্রোফাইল সেকশন আপডেট (image_84f199.png অনুযায়ী)
    document.getElementById('pName').innerText = studentData.name;
    document.getElementById('pId').innerText = studentData.id;
    document.getElementById('pDept').innerText = studentData.dept;
    document.getElementById('pProgram').innerText = studentData.program;
    document.getElementById('pBatch').innerText = studentData.batch;
    
    // পার্সোনাল ও কন্টাক্ট ইনফো
    document.getElementById('pFather').innerText = studentData.father;
    document.getElementById('pMother').innerText = studentData.mother;
    document.getElementById('pBlood').innerText = studentData.blood;
    document.getElementById('pGender').innerText = studentData.gender;
    document.getElementById('pEmail').innerText = studentData.email;
    document.getElementById('pPhone').innerText = studentData.phone;
    document.getElementById('pAddress').innerText = studentData.address;

    // হেডার এরিয়া নাম
    document.querySelector('.user-name').innerText = studentData.name;
}

function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));
    document.querySelectorAll('.sidebar-menu li').forEach(li => li.classList.remove('active'));
    
    document.getElementById('tab-' + tabId).classList.remove('hidden');
    document.getElementById('menu-' + tabId).classList.add('active');
}
