
// MENU PARA CELULAR

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
  });

  navigation.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
    });
  });
}

// PESQUISA DE EVENTOS

const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const eventCards = document.querySelectorAll(".event-card");
const noResults = document.querySelector("#noResults");

let selectedCategory = "todos";

function filterEvents() {
  if (!searchInput) return;

  const search = searchInput.value.toLowerCase().trim();
  let visibleCount = 0;

  eventCards.forEach(card => {
    const text = card.innerText.toLowerCase();
    const categories = card.dataset.category.split(" ");

    const matchesSearch = text.includes(search);

    const matchesCategory =
      selectedCategory === "todos" ||
      categories.includes(selectedCategory);

    const show = matchesSearch && matchesCategory;

    card.style.display = show ? "block" : "none";

    if (show) visibleCount++;
  });

  if (noResults) {
    noResults.hidden = visibleCount !== 0;
  }
}

if (searchInput) {
  searchInput.addEventListener("input", filterEvents);
}

if (searchButton) {
  searchButton.addEventListener("click", filterEvents);
}

// FILTRO POR CATEGORIA

const categoryButtons = document.querySelectorAll(".category-card");

categoryButtons.forEach(button => {
  button.addEventListener("click", () => {

    selectedCategory = button.dataset.filter;

    categoryButtons.forEach(item => {
      item.classList.remove("selected");
    });

    button.classList.add("selected");

    filterEvents();
  });
});

// ANO AUTOMÁTICO NO RODAPÉ

document.querySelectorAll(".footer small").forEach(item => {
  item.textContent =
    `Projeto acadêmico • POA PRA TI © ${new Date().getFullYear()}`;
});
