// Estado de la aplicación
let currentFilter = 'Todos';
let currentSearch = '';

// SVG Icons
const icons = {
  heart: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
  activity: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg>',
  scissors: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/></svg>',
  stethoscope: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3a7 7 0 0 0 7 7 7 7 0 0 0 7-7"/><path d="M8 10a5 5 0 1 0 8 0"/><circle cx="19" cy="14" r="2"/><path d="m19 16-2.5 2.5"/></svg>'
};

// Renderizar tarjetas de razas
function renderBreeds() {
  const breedsGrid = document.getElementById('breedsGrid');
  const noResults = document.getElementById('noResults');
  
  const filteredBreeds = dogBreeds.filter(breed => {
    const matchesSearch = breed.name.toLowerCase().includes(currentSearch.toLowerCase());
    const matchesSize = currentFilter === 'Todos' || breed.size === currentFilter;
    return matchesSearch && matchesSize;
  });

  if (filteredBreeds.length === 0) {
    breedsGrid.style.display = 'none';
    noResults.style.display = 'block';
    return;
  }

  breedsGrid.style.display = 'grid';
  noResults.style.display = 'none';

  breedsGrid.innerHTML = filteredBreeds.map(breed => `
    <div class="breed-card" onclick="openModal('${breed.id}')">
      <img src="${breed.image}" alt="${breed.name}" class="breed-image">
      <div class="breed-info">
        <span class="breed-size">${breed.size}</span>
        <h3 class="breed-name">${breed.name}</h3>
        <p class="breed-temperament">${breed.temperament}</p>
        <p class="breed-description">${breed.description}</p>
      </div>
    </div>
  `).join('');
}

// Abrir modal con detalles de la raza
function openModal(breedId) {
  const breed = dogBreeds.find(b => b.id === breedId);
  if (!breed) return;

  const modal = document.getElementById('modal');
  document.getElementById('modalImage').src = breed.image;
  document.getElementById('modalImage').alt = breed.name;
  document.getElementById('modalSize').textContent = breed.size;
  document.getElementById('modalTemperament').textContent = breed.temperament;
  document.getElementById('modalName').textContent = breed.name;
  document.getElementById('modalDescription').textContent = breed.description;

  // Generar secciones de cuidado
  const careContent = document.getElementById('modalCareContent');
  careContent.innerHTML = `
    <div class="care-section">
      <div class="care-header">
        <div class="care-icon" style="background: #8b5a3c;">${icons.heart}</div>
        <h3 class="care-title">Alimentación</h3>
      </div>
      <ul class="care-list">
        ${breed.care.feeding.map(item => `
          <li><span style="color: #8b5a3c;">•</span> <span>${item}</span></li>
        `).join('')}
      </ul>
    </div>

    <div class="care-section">
      <div class="care-header">
        <div class="care-icon" style="background: #a67c52;">${icons.activity}</div>
        <h3 class="care-title">Ejercicio</h3>
      </div>
      <ul class="care-list">
        ${breed.care.exercise.map(item => `
          <li><span style="color: #a67c52;">•</span> <span>${item}</span></li>
        `).join('')}
      </ul>
    </div>

    <div class="care-section">
      <div class="care-header">
        <div class="care-icon" style="background: #c8a882;">${icons.scissors}</div>
        <h3 class="care-title">Aseo y Cuidado</h3>
      </div>
      <ul class="care-list">
        ${breed.care.grooming.map(item => `
          <li><span style="color: #c8a882;">•</span> <span>${item}</span></li>
        `).join('')}
      </ul>
    </div>

    <div class="care-section">
      <div class="care-header">
        <div class="care-icon" style="background: #6b4423;">${icons.stethoscope}</div>
        <h3 class="care-title">Salud</h3>
      </div>
      <ul class="care-list">
        ${breed.care.health.map(item => `
          <li><span style="color: #6b4423;">•</span> <span>${item}</span></li>
        `).join('')}
      </ul>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Cerrar modal
function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Cerrar modal al hacer clic fuera del contenido
document.getElementById('modal').addEventListener('click', function(e) {
  if (e.target === this) {
    closeModal();
  }
});

// Búsqueda
document.getElementById('searchInput').addEventListener('input', function(e) {
  currentSearch = e.target.value;
  renderBreeds();
});

// Filtros
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    currentFilter = this.dataset.size;
    renderBreeds();
  });
});

// Inicializar la aplicación
renderBreeds();