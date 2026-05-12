const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

}

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validation
        if (name === "" || phone === "" || email === "" || message === "") {

            formMessage.style.color = "#FF5757";
            formMessage.textContent = "Please fill all details.";
            return;

        }

        // Phone validation
        if (!/^[0-9]{10}$/.test(phone)) {

            formMessage.style.color = "#FF5757";
            formMessage.textContent =
                "Please enter a valid 10-digit phone number.";

            return;

        }

        try {

            // Backend API call
            const response = await fetch("/api/inquiry", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name: name,
                    phone: phone,
                    email: email,
                    message: message
                })

            });

            // Success
            if (response.ok) {

                formMessage.style.color = "#1f9d45";
                formMessage.textContent =
                    "Inquiry submitted successfully.";

                // WhatsApp Number
                const whatsappNumber = "919791584287";

                // Prefilled Enquiry Message
                const whatsappMessage =

                    `New Website Enquiry%0A%0A` +

                    `Name : ${name}%0A` +
                    `Phone : ${phone}%0A` +
                    `Email : ${email}%0A` +
                    `Requirement : ${message}`;

                // Open WhatsApp
                setTimeout(() => {

                    window.open(
                        `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
                        "_blank"
                    );

                }, 500);

                // Reset Form
                contactForm.reset();

            } else {

                formMessage.style.color = "red";
                formMessage.textContent =
                    "Failed to submit inquiry.";

            }

        } catch (error) {

            console.error(error);

            formMessage.style.color = "red";
            formMessage.textContent =
                "Server error. Please try again.";

        }

    });

}