document.querySelectorAll(".hero-buttons a[href^='#']").forEach(btn => {
    btn.addEventListener("click", e => {
        e.preventDefault();

        const targetId = btn.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        if (!targetSection) return;

        // Eski efektleri temizle
        document.querySelectorAll(".section-focus, .animate")
            .forEach(el => el.classList.remove("section-focus", "animate"));

        // Scroll
        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        // Anlık vurgu
        setTimeout(() => {
            targetSection.classList.add("section-focus");

            requestAnimationFrame(() => {
                targetSection.classList.add("animate");
            });

            setTimeout(() => {
                targetSection.classList.remove("animate");
                targetSection.classList.remove("section-focus");
            }, 450);

        }, 300);
    });
});


/* POP UP EKRANININ X TUŞUNDAN VE ESC TTUŞU İLE KAPANMASINI SAĞLAYAN JS KODU BURADA */

const contactBtn = document.querySelector('.navbar a[href="#contact"]');
const popup = document.getElementById("contactPopup");
const popupClose = popup.querySelector(".popup-close");

// Aç
contactBtn.addEventListener("click", e => {
    e.preventDefault();
    popup.classList.add("active");
});

// Kapat (X)
popupClose.addEventListener("click", () => {
    popup.classList.remove("active");
});

// Kapat (arka plana tık)
popup.addEventListener("click", e => {
    if (e.target === popup) {
        popup.classList.remove("active");
    }
});

// ESC ile kapat
document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
        popup.classList.remove("active");
    }
});

window.addEventListener("load", () => {
    // Portföy yazısı geldikten SONRA bekleme süresi
    setTimeout(() => {
        const intro = document.getElementById("intro");
        if (intro) {
            intro.classList.add("hide");
        }
    }, 2300);
});


/* SİLİP YAZMA ANİMASYONU */

const texts = [
    "Web Sitesi Geliştiricisiyim.",
    "Backend Geliştiricisiyim.",
    "IoT Geliştiricisiyim.",
    "UI (User Interface) Geliştiricisiyim."
];

const typingEl = document.getElementById("typing");

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = texts[textIndex];

    if (!isDeleting) {
        typingEl.textContent = currentText.slice(0, charIndex++);
        if (charIndex > currentText.length) {
            setTimeout(() => isDeleting = true, 1200);
        }
    } else {
        typingEl.textContent = currentText.slice(0, charIndex--);
        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
    }

    const speed = isDeleting ? 40 : 70;
    setTimeout(typeEffect, speed);
}

typeEffect();


