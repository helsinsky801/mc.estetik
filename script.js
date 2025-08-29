document.addEventListener('DOMContentLoaded', () => {
    // Fungsionalitas Navigasi Mobile
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('open');
        });
    }

    // Fungsionalitas Popup
    const loginPopup = document.getElementById('login-popup');
    const registerPopup = document.getElementById('register-popup');
    const showLoginButtons = document.querySelectorAll('.show-login');
    const showRegisterButtons = document.querySelectorAll('.show-register');
    const showLoginLinks = document.querySelectorAll('.show-login-link');
    const showRegisterLinks = document.querySelectorAll('.show-register-link');
    const closeButtons = document.querySelectorAll('.close-btn');

    // Fungsi untuk menampilkan popup
    function showPopup(popup) {
        popup.classList.add('active');
        document.body.style.overflow = 'hidden'; // Nonaktifkan scroll
    }

    // Fungsi untuk menyembunyikan popup
    function hidePopups() {
        loginPopup.classList.remove('active');
        registerPopup.classList.remove('active');
        document.body.style.overflow = ''; // Aktifkan kembali scroll
    }

    // Event listener untuk tombol 'Masuk'
    showLoginButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            hidePopups();
            showPopup(loginPopup);
        });
    });

    // Event listener untuk tombol 'Daftar'
    showRegisterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            hidePopups();
            showPopup(registerPopup);
        });
    });

    // Event listener untuk link 'Masuk' di dalam popup
    showLoginLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            hidePopups();
            showPopup(loginPopup);
        });
    });

    // Event listener untuk link 'Daftar' di dalam popup
    showRegisterLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            hidePopups();
            showPopup(registerPopup);
        });
    });

    // Event listener untuk tombol 'x' (tutup)
    closeButtons.forEach(button => {
        button.addEventListener('click', hidePopups);
    });

    // Menutup popup saat klik di luar area popup
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('popup')) {
            hidePopups();
        }
    });

    // Fungsionalitas Kuis (hanya di halaman kuis.html)
    const submitQuizButton = document.getElementById('submit-quiz');
    const quizResult = document.getElementById('quiz-result');

    if (submitQuizButton && quizResult) {
        const answers = {
            q1: 'b',
            q2: 'a',
            q3: 'c'
        };

        submitQuizButton.addEventListener('click', () => {
            let score = 0;
            const form = document.getElementById('quiz-container');
            const userAnswers = {};

            for (let i = 1; i <= 3; i++) {
                const radios = form.elements[`q${i}`];
                for (const radio of radios) {
                    if (radio.checked) {
                        userAnswers[`q${i}`] = radio.value;
                        break;
                    }
                }
            }

            for (const question in answers) {
                if (userAnswers[question] === answers[question]) {
                    score++;
                }
            }

            quizResult.innerHTML = `Skor Anda: ${score} dari 3!`;
            
            if (score === 3) {
                quizResult.style.color = '#38b2ac';
                quizResult.innerHTML += ' 🥳 Keren, Anda ahli!';
            } else {
                quizResult.style.color = '#e53e3e';
                quizResult.innerHTML += ' 🤔 Coba lagi untuk lebih baik.';
            }

            submitQuizButton.disabled = true;
        });
    }
});