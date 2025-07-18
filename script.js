document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling para os links da navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            // Verifica se o link é para uma seção na *mesma* página e se o elemento existe
            if (targetId.startsWith('#') && document.querySelector(targetId)) {
                e.preventDefault();
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Lógica do Modal da Galeria
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("img-modal");
    const captionText = document.getElementById("caption");
    const closeButton = document.getElementsByClassName("close-button")[0];
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    if (portfolioItems.length > 0) {
        portfolioItems.forEach(item => {
            item.addEventListener("click", () => {
                modal.style.display = "flex";
                modalImg.src = item.dataset.fullImage || item.querySelector('img').src;
                captionText.innerHTML = item.querySelector(".overlay").innerText;
                document.body.style.overflow = 'hidden';
            });
        });

        closeButton.addEventListener("click", () => {
            modal.style.display = "none";
            document.body.style.overflow = 'auto';
        });

        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
                document.body.style.overflow = 'auto';
            }
        });
    }
});