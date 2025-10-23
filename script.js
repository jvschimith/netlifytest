// Simple behaviors: toggle archive sections and filter links by search input

document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.archive .toggle');
  toggles.forEach(h => {
    h.addEventListener('click', () => {
      h.classList.toggle('closed');
      const list = h.nextElementSibling;
      if (list) list.classList.toggle('hidden');
    });
  });

  const search = document.getElementById('archive-search');
  search.addEventListener('input', () => {
    const q = search.value.trim().toLowerCase();
    const lists = document.querySelectorAll('.archive-list');
    lists.forEach(list => {
      let anyVisible = false;
      list.querySelectorAll('li').forEach(li => {
        const text = li.textContent.toLowerCase();
        const match = q === '' || text.includes(q);
        li.style.display = match ? '' : 'none';
        if (match) anyVisible = true;
      });
      // hide the whole section if no items match
      const section = list.closest('.archive');
      if (section) section.style.display = anyVisible ? '' : 'none';
    });
  });
});