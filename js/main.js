"use strict";

// 1. マウスに追従する光（肉球風グラデーションの位置を更新）
const title = document.querySelector("h1");

title.addEventListener("pointermove", (event) => {
    const rect = title.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // パーセンテージではなくピクセル単位で渡すと、肉球の形が美しく追従します！
    title.style.setProperty("--mouse-x", `${x}px`);
    title.style.setProperty("--mouse-y", `${y}px`);
});

// 2. スクロール時のアニメーション
const items = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    document.documentElement.classList.add("js-enabled");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    items.forEach((item) => observer.observe(item));
}

// 3. ダークモード切り替え（猫気分で切り替え）
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");

    themeToggle.textContent = isDark
        ? "🐾 ライトモードにする"
        : "🌙 ダークモード (夜行性モード)";

    themeToggle.setAttribute("aria-pressed", String(isDark));
});
