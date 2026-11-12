// JavaScript Interaction Code
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const whatsappText = `مرحباً مدار تك، أنا ${name}%0A` +
                         `البريد: ${email}%0A` +
                         `الهاتف: ${phone}%0A` +
                         `الرسالة: ${message}`;

    const whatsappUrl = `https://wa.me/972590000000?text=${whatsappText}`;
    window.open(whatsappUrl, '_blank');
});

function openProgramModal(programName) {
    alert('شكراً لاهتمامك ببرنامج ' + programName + '. يمكنك الإرسال عبر نموذج التواصل للتسجيل في الدفعة القادمة!');
}