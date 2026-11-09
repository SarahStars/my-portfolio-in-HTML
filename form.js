function showError(id, message) {
    document.getElementById(id).textContent = message;
}

export function initForm() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        let isValid = true;

        showError("nameError", "");
        showError("emailError", "");
        showError("messageError", "");
        document.getElementById("formSuccess").textContent = "";

        if (name === "") {
            showError("nameError", "الرجاء كتابة الاسم");
            isValid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            showError("emailError", "الرجاء كتابة إيميل صحيح");
            isValid = false;
        }

        if (message.length < 10) {
            showError("messageError", "الرسالة قصيرة، اكتبي 10 أحرف على الأقل");
            isValid = false;
        }

        if (isValid) {
            document.getElementById("formSuccess").textContent = "البيانات صحيحة ✅";
            form.reset();
        }
    });
}