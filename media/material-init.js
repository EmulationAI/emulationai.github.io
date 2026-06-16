document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("material-theme");

    document.querySelectorAll(".cmn-btn a, .submit-btn, button").forEach((el) => {
        el.classList.add("mat-pill-action");
        if (!el.querySelector("md-ripple")) {
            const ripple = document.createElement("md-ripple");
            ripple.setAttribute("for", "");
            el.appendChild(ripple);
        }
    });

    const currentPath = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    document.querySelectorAll(".main-nav a[href]").forEach((a) => {
        const href = (a.getAttribute("href") || "").toLowerCase();
        if (!href || href.startsWith("#")) {
            return;
        }
        if (href === currentPath || (currentPath === "" && href === "index.html")) {
            a.classList.add("active");
        }
    });
});
