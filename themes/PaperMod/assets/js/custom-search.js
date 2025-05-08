document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('search-input');
    const results = document.getElementById('search-results');
  
    if (!input) return;
  
    fetch('/index.json')
      .then(res => res.json())
      .then(data => {
        const fuse = new Fuse(data, {
          keys: ['title', 'summary'],
          includeScore: true,
          threshold: 0.3,
        });
  
        input.addEventListener('input', () => {
          const query = input.value.trim();
          results.innerHTML = '';
  
          if (!query) return;
  
          const matches = fuse.search(query);
          matches.slice(0, 5).forEach(match => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${match.item.permalink}">${match.item.title}</a>`;
            results.appendChild(li);
          });
        });
      });
  });
  