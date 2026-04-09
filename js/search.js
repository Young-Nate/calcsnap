// Homepage calculator search + category filter
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('calc-search');
  const cards = document.querySelectorAll('.calc-card');
  const catTabs = document.querySelectorAll('.cat-tab');
  let activeCategory = 'all';

  function filterCards() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    cards.forEach(function (card) {
      const name = (card.dataset.name || '').toLowerCase();
      const cat = (card.dataset.category || '').toLowerCase();
      const matchSearch = !query || name.includes(query);
      const matchCat = activeCategory === 'all' || cat === activeCategory;
      card.style.display = matchSearch && matchCat ? '' : 'none';
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', filterCards);
  }

  catTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      catTabs.forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');
      activeCategory = tab.dataset.category || 'all';
      filterCards();
    });
  });
});
