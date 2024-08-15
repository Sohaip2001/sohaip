document.addEventListener('DOMContentLoaded', function() {
    const voteTab = document.getElementById('vote-tab');
    const candidatesTab = document.getElementById('candidates-tab');
    const rulesTab = document.getElementById('rules-tab');

    const voteSection = document.getElementById('vote-section');
    const candidatesSection = document.getElementById('candidates-section');
    const rulesSection = document.getElementById('rules-section');

    const loginSection = document.getElementById('login-section');
    const mainContent = document.getElementById('main-content');

    const loginForm = document.getElementById('login-form');
    const backToMainButtons = document.querySelectorAll('#back-to-main');

    function showSection(sectionToShow) {
        voteSection.classList.add('hidden');
        candidatesSection.classList.add('hidden');
        rulesSection.classList.add('hidden');
        sectionToShow.classList.remove('hidden');
    }

    function showMainContent() {
        loginSection.classList.add('hidden');
        mainContent.classList.remove('hidden');
        showSection(voteSection); // يظهر قسم التصويت بشكل افتراضي
    }

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // بيانات تسجيل دخول وهمية؛ استبدلها بنظام تحقق حقيقي
        const nationalId = document.getElementById('national-id').value;
        const password = document.getElementById('password').value;
        const captcha = document.getElementById('captcha').value;

        if (nationalId === '2024' && password === '0000' && captcha === '2024') {
            showMainContent();
        } else {
            alert('الرقم الوطني أو كلمة السر أو التحقق غير صحيح');
        }
    });

    voteTab.addEventListener('click', function(event) {
        event.preventDefault();
        showSection(voteSection);
    });

    candidatesTab.addEventListener('click', function(event) {
        event.preventDefault();
        showSection(candidatesSection);
    });

    rulesTab.addEventListener('click', function(event) {
        event.preventDefault();
        showSection(rulesSection);
    });

    backToMainButtons.forEach(button => {
        button.addEventListener('click', function() {
            showSection(voteSection); // أو أي قسم تريد إظهاره عند العودة
        });
    });

    // يظهر نموذج تسجيل الدخول عند تحميل الصفحة
    loginSection.classList.remove('hidden');
    mainContent.classList.add('hidden');
});
