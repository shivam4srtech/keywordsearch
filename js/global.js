
document.querySelectorAll('.custom-dropdown').forEach(dropdown => {
  const selected = dropdown.querySelector('.dropdown-selected');
  const list = dropdown.querySelector('.dropdown-list');
  const searchInput = dropdown.querySelector('.search-box input'); // may be null
  const items = dropdown.querySelectorAll('ul li');

  // Toggle dropdown open/close
  selected.addEventListener('click', () => {
    document.querySelectorAll('.custom-dropdown').forEach(d => {
      if (d !== dropdown) d.classList.remove('active');
    });
    dropdown.classList.toggle('active');
  });

  // Select item
  items.forEach(item => {
    item.addEventListener('click', () => {
      const imgSelected = selected.querySelector('img');
      const imgItem = item.querySelector('img');
      if (imgSelected && imgItem) imgSelected.src = imgItem.src;

      const spanSelected = selected.querySelector('span');
      if (spanSelected) spanSelected.textContent = item.textContent.trim();

      dropdown.classList.remove('active');
    });
  });

  // Filter items (only if search input exists)
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      const val = e.target.value.toLowerCase();
      items.forEach(item => {
        item.style.display = item.textContent.toLowerCase().includes(val) ? 'flex' : 'none';
      });
    });
  }

  // Close on outside click
  document.addEventListener('click', e => {
    if (!dropdown.contains(e.target)) dropdown.classList.remove('active');
  });
});

