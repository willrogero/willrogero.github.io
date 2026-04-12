document.addEventListener("DOMContentLoaded", () => {

    const music = document.getElementById("bgMusic");
    const btn = document.getElementById("musicBtn");

    // ✅ Set volume to 15%
    if (music) {
        music.volume = 0.15;
    }

    let isPlaying = false;

    if (btn && music) {

        btn.addEventListener("click", async () => {
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
            } catch (e) {
                alert("Click again — browser requires user interaction for audio.");
            }
        });

    }

    // 🚫 Hide button halfway down page
    window.addEventListener("scroll", () => {

        const btn = document.getElementById("musicBtn");
        if (!btn) return;

        const trigger = window.innerHeight * 1.2;

        if (window.scrollY > trigger) {
            btn.style.opacity = "0";
            btn.style.pointerEvents = "none";
        } else {
            btn.style.opacity = "1";
            btn.style.pointerEvents = "auto";
        }

    });

    // 📅 footer year
    const year = document.getElementById("year");
    if (year) {
        year.textContent = new Date().getFullYear();
    }

});
