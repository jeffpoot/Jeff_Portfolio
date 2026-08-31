const navbarPath = window.location.pathname.includes("/pages/")
    ? "../components/nav.html"
    : "components/nav.html";

fetch(navbarPath)
    .then(response => response.text())
    .then(data => {
        document.querySelector("#navbar-container").innerHTML = data;

        const currentPage = window.location.pathname.split("/").pop() || "index.html";

        document.querySelectorAll(".navbar a").forEach(link => {
            const linkPage = link.getAttribute("href").split("/").pop();

            if (linkPage === currentPage) {
                link.classList.add("active");
            }
        });
    })
    .catch(error => console.error("Navbar failed to load:", error));