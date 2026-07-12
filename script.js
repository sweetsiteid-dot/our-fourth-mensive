const startBtn = document.getElementById("startBtn");
const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("bgMusic");

/* OPEN LETTER + PLAY MUSIC */

startBtn.addEventListener("click", () => {

    music.play();

    document.querySelector(".gallery").scrollIntoView({
        behavior: "smooth"
    });

});

/* PLAY / PAUSE BUTTON */

musicBtn.addEventListener("click", () => {

    if (music.paused) {
        music.play();
        musicBtn.innerHTML = "⏸ Pause Music";
    } else {
        music.pause();
        musicBtn.innerHTML = "🎵 Play Music";
    }

});

/* REVEAL ANIMATION */

const reveals = document.querySelectorAll(".reveal");

function revealElements() {

    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;
        const top = element.getBoundingClientRect().top;

        if (top < windowHeight - 100) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealElements);
revealElements();

/* FLOATING HEARTS */

const heartsContainer = document.querySelector(".hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        Math.random() * 25 + 15 + "px";

    heart.style.animationDuration =
        Math.random() * 5 + 7 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 12000);

}

setInterval(createHeart, 500);

/* CHANGE BUTTON TEXT WHEN SONG ENDS */

music.addEventListener("ended", () => {
    musicBtn.innerHTML = "🎵 Play Music";
});

/* AUTO REVEAL HERO */

window.addEventListener("load", () => {

    document.querySelectorAll(".reveal").forEach((el, i) => {

        setTimeout(() => {
            el.classList.add("active");
        }, i * 150);

    });

});
