document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       MUSIC PLAYER
    ========================== */
    const music = document.getElementById("bgMusic");
    const btn = document.getElementById("musicBtn");

    let isPlaying = false;

    if (btn && music) {

        btn.addEventListener("click", async function () {
            try {
                if (!isPlaying) {
                    await music.play();
                    btn.innerHTML = "🎵 Pause";
                    isPlaying = true;
                } else {
                    music.pause();
                    btn.innerHTML = "🎵 Music";
                    isPlaying = false;
                }
            } catch (err) {
                console.log("Audio blocked until user interaction:", err);
            }
        });

        /* =========================
           HIDE BUTTON ON SCROLL
        ========================== */
        window.addEventListener("scroll", function () {

            const triggerPoint = window.innerHeight * 1.2;

            if (window.scrollY > triggerPoint) {
                btn.style.opacity = "0";
                btn.style.pointerEvents = "none";
            } else {
                btn.style.opacity = "1";
                btn.style.pointerEvents = "auto";
            }

        });

    }

    /* =========================
       FOOTER YEAR AUTO UPDATE
    ========================== */
    const yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

});
