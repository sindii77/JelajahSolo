/**
 * JELAJAH SOLO - APPLICATION LOGIC (ES6)
 * Fitur: Search, Filter, Modal Detail, Carousel,
 *        Lightbox, Form Validation & Community Board, Gamelan Audio Synthesizer
 */

document.addEventListener('DOMContentLoaded', () => {
  // Inisialisasi Aplikasi
  initNavbar();
  initHeroCarousel();
  renderDestinations(soloData.destinations);
  renderCulinary(soloData.culinary);
  renderHotels(soloData.accommodations);
  renderBerandaPreviews();
  renderHistoryTimeline();
  renderBatikPhilosophy();
  renderTransport('toSolo');
  renderItinerary('1-hari');
  renderGallery('semua');

  initSearchAndFilter();
  initHotelSearchAndFilter();
  initCommunityReviews();
  initRecommendationForm();
  initModals();
  initAmbientAudio();
});

/* ==========================================================================
   1. PAGE ROUTER & NAVBAR (SPA NAVIGATION)
   Menjamin saat mengklik Destinasi, Kuliner, Sejarah, Budaya dll
   halaman berpindah langsung ke halaman tersebut (BUKAN berpindah ke beranda)
   ========================================================================== */
function navigateToPage(pageId) {
  if (!pageId || pageId === '#' || pageId === '') pageId = 'beranda';
  pageId = pageId.replace('#', '');

  const targetPage = document.getElementById(pageId);
  if (!targetPage || !targetPage.classList.contains('page-view')) {
    pageId = 'beranda';
  }

  // Sembunyikan semua halaman page-view
  document.querySelectorAll('.page-view').forEach(view => {
    view.classList.remove('active-page');
  });

  // Tampilkan hanya halaman yang dipilih
  const activeView = document.getElementById(pageId);
  if (activeView) {
    activeView.classList.add('active-page');
  }

  // Update status active pada navigasi menu navbar
  document.querySelectorAll('.nav-links .nav-link').forEach(link => {
    const href = link.getAttribute('href') ? link.getAttribute('href').replace('#', '') : '';
    if (href === pageId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Scroll ke atas dengan halus agar halaman baru dimulai dari awal
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update URL hash agar bisa di-bookmark & navigasi tombol back/forward
  if (window.location.hash !== `#${pageId}`) {
    history.pushState(null, '', `#${pageId}`);
  }
}

// Ekspor ke window agar bisa dipanggil langsung dari onclick HTML
window.navigateToPage = navigateToPage;

function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('active');
    });

    // Tutup mobile menu jika klik di luar navbar
    document.addEventListener('click', (e) => {
      if (navLinks.classList.contains('active') && !navbar.contains(e.target)) {
        navLinks.classList.remove('active');
      }
    });

    // Tutup menu saat menekan tombol Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
      }
    });

    // Reset status menu saat window diperbesar kembali ke desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1220 && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
      }
    });
  }

  // Tangani semua klik hyperlink internal (nav, tombol CTA, footer, logo)
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href').replace('#', '');
      const targetEl = document.getElementById(targetId);
      if (targetEl && targetEl.classList.contains('page-view')) {
        e.preventDefault();
        navigateToPage(targetId);
        if (navLinks) navLinks.classList.remove('active');
      }
    });
  });

  // Tangani perubahan hash pada tombol back/forward browser
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash || '#beranda';
    navigateToPage(hash);
  });

  // Tampilkan halaman yang sesuai saat pertama kali dibuka (jika ada hash di URL)
  const initialHash = window.location.hash || '#beranda';
  navigateToPage(initialHash);
}

/* ==========================================================================
   2. HERO CAROUSEL / SLIDESHOW
   ========================================================================== */
function initHeroCarousel() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    slides.forEach((s, i) => s.classList.toggle('active', i === index));
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
    currentSlide = index;
  }

  function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const targetIndex = parseInt(dot.getAttribute('data-slide'), 10);
      showSlide(targetIndex);
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 6000);
    });
  });

  slideInterval = setInterval(nextSlide, 6000);
}

/* ==========================================================================
   3. RENDER DESTINASI WISATA
   ========================================================================== */
function renderDestinations(items) {
  const container = document.getElementById('destinationsGrid');
  if (!container) return;



  if (items.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 50px 20px;">
        <p style="font-size: 1.2rem; color: var(--gold-light); margin-bottom: 10px;">Tidak ada destinasi yang sesuai dengan pencarian Anda.</p>
        <p style="color: var(--text-muted);">Coba gunakan kata kunci lain seperti "Keraton", "Batik", atau "Balekambang".</p>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(dest => {
    return `
      <article class="card-item" data-id="${dest.id}" data-category="${dest.category}">
        <div class="card-img-wrapper">
          <img src="${dest.image}" alt="${dest.name}" class="card-img" loading="lazy">
          <span class="card-badge-category">${dest.categoryLabel}</span>
        </div>

        <div class="card-body">
          <div class="card-rating-row">
            <div class="rating-stars">
              <span>★</span> ${dest.rating}
            </div>
            <span class="card-reviews-count">(${dest.reviewsCount} ulasan)</span>
          </div>

          <h3 class="card-title">${dest.name}</h3>
          <p class="card-description">${dest.shortDesc}</p>

          <div class="card-meta-list">
            <div class="meta-row">
              <span class="meta-label">Buka:</span>
              <span class="meta-value">${dest.openHours.split('(')[0]}</span>
            </div>
            <div class="meta-row">
              <span class="meta-label">Tiket:</span>
              <span class="meta-value">${dest.ticketPrice.split('/')[0]}</span>
            </div>
          </div>

          <div class="card-footer">
            <button class="btn btn-primary-gold btn-card-detail" onclick="openDestinationDetail('${dest.id}')">
              Lihat Detail
            </button>
            <a href="${dest.mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-map" title="Buka di Google Maps" aria-label="Google Maps">
              <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
            </a>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/* ==========================================================================
   4. RENDER KULINER KHAS SOLO
   ========================================================================== */
function renderCulinary(items) {
  const container = document.getElementById('culinaryGrid');
  if (!container) return;

  container.innerHTML = items.map(food => {
    return `
      <article class="card-item">
        <div class="card-img-wrapper">
          <img src="${food.image}" alt="${food.name}" class="card-img" loading="lazy">
          <span class="card-badge-category">${food.bestTime}</span>
        </div>
        <div class="card-body">
          <div class="card-rating-row">
            <div class="rating-stars">
              <span>★</span> ${food.rating}
            </div>
            <span style="color: var(--gold-light); font-weight: 600; font-size: 0.85rem;">${food.priceRange}</span>
          </div>

          <h3 class="card-title">${food.name}</h3>
          <p class="card-description">${food.shortDesc}</p>

          <div class="card-meta-list">
            <div class="meta-row">
              <span class="meta-label">Lokasi:</span>
              <span class="meta-value">${food.location}</span>
            </div>
            <div class="meta-row">
              <span class="meta-label">Wajib Coba:</span>
              <span class="meta-value" style="color: var(--gold-light);">${food.mustTry}</span>
            </div>
          </div>

          <div class="card-footer">
            <a href="${food.mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-gold" style="width: 100%;">
              <span>Buka Google Maps</span>
              <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/* ==========================================================================
   4A. RENDER PENGINAPAN & HOTEL DI SOLO
   ========================================================================== */
function renderHotels(items) {
  const container = document.getElementById('hotelsGrid');
  if (!container) return;

  if (!items || items.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 50px 20px;">
        <p style="font-size: 1.2rem; color: var(--gold-light); margin-bottom: 10px;">Tidak ada penginapan yang sesuai dengan pencarian Anda.</p>
        <p style="color: var(--text-muted);">Coba gunakan kata kunci lain seperti "Alila", "Heritage", "Laweyan", atau "Bintang 5".</p>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(hotel => {
    return `
      <article class="card-item" data-id="${hotel.id}" data-category="${hotel.category}">
        <div class="card-img-wrapper">
          <img src="${hotel.image}" alt="${hotel.name}" class="card-img" loading="lazy">
          <span class="card-badge-category">${hotel.categoryLabel}</span>
        </div>

        <div class="card-body">
          <div class="card-rating-row">
            <div class="rating-stars">
              <span>★</span> ${hotel.rating}
            </div>
            <span style="color: var(--gold-light); font-weight: 600; font-size: 0.85rem;">${hotel.priceRange}</span>
          </div>

          <h3 class="card-title">${hotel.name}</h3>
          <p class="card-description">${hotel.shortDesc}</p>

          <div class="card-meta-list">
            <div class="meta-row">
              <span class="meta-label">Area:</span>
              <span class="meta-value">${hotel.area}</span>
            </div>
            <div class="meta-row">
              <span class="meta-label">Tipe:</span>
              <span class="meta-value">${hotel.type}</span>
            </div>
          </div>

          <div class="card-footer">
            <button class="btn btn-primary-gold btn-card-detail" onclick="openHotelDetail('${hotel.id}')">
              Lihat Detail
            </button>
            <a href="${hotel.mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-map" title="Buka di Google Maps" aria-label="Google Maps">
              <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
            </a>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/* ==========================================================================
   4B. RENDER TEASER CUPLIKAN PADA BERANDA
   ========================================================================== */
function renderBerandaPreviews() {
  const destContainer = document.getElementById('berandaDestGrid');
  const culinaryContainer = document.getElementById('berandaCulinaryGrid');

  if (destContainer) {
    const popularDest = soloData.destinations.filter(d => d.popular).slice(0, 3);
    destContainer.innerHTML = popularDest.map(dest => {
      return `
        <article class="card-item" data-id="${dest.id}">
          <div class="card-img-wrapper">
            <img src="${dest.image}" alt="${dest.name}" class="card-img" loading="lazy">
            <span class="card-badge-category">${dest.categoryLabel}</span>
          </div>
          <div class="card-body">
            <div class="card-rating-row">
              <div class="rating-stars"><span>★</span> ${dest.rating}</div>
              <span class="card-reviews-count">(${dest.reviewsCount} ulasan)</span>
            </div>
            <h3 class="card-title">${dest.name}</h3>
            <p class="card-description">${dest.shortDesc}</p>
            <div class="card-footer">
              <button class="btn btn-primary-gold btn-card-detail" onclick="openDestinationDetail('${dest.id}')">
                Lihat Detail
              </button>
              <a href="${dest.mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-map" title="Buka di Google Maps" aria-label="Google Maps">
                <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  if (culinaryContainer) {
    const popularFood = soloData.culinary.slice(0, 3);
    culinaryContainer.innerHTML = popularFood.map(food => {
      return `
        <article class="card-item">
          <div class="card-img-wrapper">
            <img src="${food.image}" alt="${food.name}" class="card-img" loading="lazy">
            <span class="card-badge-category">${food.bestTime}</span>
          </div>
          <div class="card-body">
            <div class="card-rating-row">
              <div class="rating-stars"><span>★</span> ${food.rating}</div>
              <span style="color: var(--gold-light); font-weight: 600; font-size: 0.85rem;">${food.priceRange}</span>
            </div>
            <h3 class="card-title">${food.name}</h3>
            <p class="card-description">${food.shortDesc}</p>
            <div class="card-footer">
              <a href="${food.mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-gold" style="width: 100%;">
                <span>Buka Google Maps</span>
                <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  const hotelContainer = document.getElementById('berandaHotelGrid');
  if (hotelContainer && soloData.accommodations) {
    const popularHotels = soloData.accommodations.filter(h => h.popular).slice(0, 3);
    hotelContainer.innerHTML = popularHotels.map(hotel => {
      return `
        <article class="card-item" data-id="${hotel.id}">
          <div class="card-img-wrapper">
            <img src="${hotel.image}" alt="${hotel.name}" class="card-img" loading="lazy">
            <span class="card-badge-category">${hotel.categoryLabel}</span>
          </div>
          <div class="card-body">
            <div class="card-rating-row">
              <div class="rating-stars"><span>★</span> ${hotel.rating}</div>
              <span style="color: var(--gold-light); font-weight: 600; font-size: 0.85rem;">${hotel.priceRange}</span>
            </div>
            <h3 class="card-title">${hotel.name}</h3>
            <p class="card-description">${hotel.shortDesc}</p>
            <div class="card-footer">
              <button class="btn btn-primary-gold btn-card-detail" onclick="openHotelDetail('${hotel.id}')">
                Lihat Detail
              </button>
              <a href="${hotel.mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-map" title="Buka di Google Maps" aria-label="Google Maps">
                <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }
}

/* ==========================================================================
   5. SEJARAH & BATIK PHILOSOPHY
   ========================================================================== */
function renderHistoryTimeline() {
  const container = document.getElementById('historyTimeline');
  if (!container) return;

  container.innerHTML = soloData.historyTimeline.map((item, idx) => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <span class="timeline-year">${item.year}</span>
        <h4 class="timeline-title">${item.title}</h4>
        <p class="timeline-desc">${item.desc}</p>
      </div>
    </div>
  `).join('');
}

function renderBatikPhilosophy() {
  const container = document.getElementById('batikGrid');
  if (!container) return;

  container.innerHTML = soloData.batikPhilosophy.map(batik => `
    <div class="batik-card">
      <div class="batik-icon">
        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      </div>
      <h3 class="batik-name">${batik.name}</h3>
      <div class="batik-section-label">Filosofi & Makna:</div>
      <p class="batik-text">${batik.meaning}</p>
      <div class="batik-section-label">Penggunaan Adat:</div>
      <p class="batik-text" style="color: var(--gold-light);">${batik.usage}</p>
    </div>
  `).join('');
}

/* ==========================================================================
   6. TRANSPORTASI SECTION
   ========================================================================== */
function renderTransport(type) {
  const container = document.getElementById('transportGrid');
  if (!container) return;

  if (type === 'toSolo') {
    container.innerHTML = soloData.transportation.toSolo.map(item => `
      <div class="transport-card">
        <div class="transport-header">
          <div>
            <span class="transport-badge">${item.mode}</span>
            <h4 class="transport-title">${item.hub}</h4>
          </div>
        </div>
        <p class="transport-desc">${item.desc}</p>
      </div>
    `).join('');
  } else {
    container.innerHTML = soloData.transportation.inSolo.map(item => `
      <div class="transport-card">
        <div class="transport-header">
          <div>
            <span class="transport-badge">${item.type}</span>
            <h4 class="transport-title">${item.name}</h4>
          </div>
        </div>
        <p class="transport-desc">${item.info}</p>
      </div>
    `).join('');
  }
}

// Handler Tab Transportasi
window.switchTransportTab = function(type, button) {
  document.querySelectorAll('.transport-tab-btn').forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
  renderTransport(type);
};

/* ==========================================================================
   7. ITINERARY PLANNER
   ========================================================================== */
function renderItinerary(id) {
  const container = document.getElementById('itineraryDisplay');
  if (!container) return;

  const plan = soloData.itineraries.find(it => it.id === id);
  if (!plan) return;

  container.innerHTML = `
    <div class="itinerary-header-box">
      <h3 class="itinerary-name">${plan.title}</h3>
      <p class="itinerary-target">Rekomendasi: ${plan.target}</p>
    </div>
    <div class="itinerary-timeline-list">
      ${plan.steps.map(s => `
        <div class="itinerary-step">
          <span class="itinerary-time-tag">${s.time}</span>
          <p class="itinerary-act-text">${s.activity}</p>
        </div>
      `).join('')}
    </div>
  `;
}

window.switchItinerary = function(id, button) {
  document.querySelectorAll('.itinerary-btn').forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
  renderItinerary(id);
};

/* ==========================================================================
   8. SEARCH & FILTER DESTINASI
   ========================================================================== */
function initSearchAndFilter() {
  const searchInput = document.getElementById('destinationSearch');
  const categoryChips = document.querySelectorAll('.category-tabs .filter-chip');
  const searchInfo = document.getElementById('searchResultsInfo');

  let activeCategory = 'semua';
  let searchTerm = '';

  function applyFilter() {
    let filtered = soloData.destinations;

    if (activeCategory !== 'semua') {
      filtered = filtered.filter(item => item.category === activeCategory);
    }

    if (searchTerm.trim() !== '') {
      const q = searchTerm.toLowerCase();
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(q) ||
        item.shortDesc.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q)
      );
    }

    renderDestinations(filtered);

    if (searchInfo) {
      if (searchTerm.trim() !== '' || activeCategory !== 'semua') {
        searchInfo.style.display = 'block';
        searchInfo.textContent = `Menampilkan ${filtered.length} dari ${soloData.destinations.length} destinasi`;
      } else {
        searchInfo.style.display = 'none';
      }
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value;
      applyFilter();
    });
  }

  categoryChips.forEach(chip => {
    chip.addEventListener('click', () => {
      categoryChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeCategory = chip.getAttribute('data-category');
      applyFilter();
    });
  });
}

/* ==========================================================================
   8B. SEARCH & FILTER PENGINAPAN
   ========================================================================== */
function initHotelSearchAndFilter() {
  const searchInput = document.getElementById('hotelSearch');
  const categoryChips = document.querySelectorAll('[data-hotel-cat]');
  const searchInfo = document.getElementById('hotelSearchResultsInfo');

  let activeCategory = 'semua';
  let searchTerm = '';

  function applyHotelFilter() {
    let filtered = soloData.accommodations;

    if (activeCategory !== 'semua') {
      filtered = filtered.filter(item => item.category === activeCategory);
    }

    if (searchTerm.trim() !== '') {
      const q = searchTerm.toLowerCase();
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(q) ||
        item.shortDesc.toLowerCase().includes(q) ||
        item.area.toLowerCase().includes(q) ||
        item.type.toLowerCase().includes(q)
      );
    }

    renderHotels(filtered);

    if (searchInfo) {
      if (searchTerm.trim() !== '' || activeCategory !== 'semua') {
        searchInfo.style.display = 'block';
        searchInfo.textContent = `Menampilkan ${filtered.length} dari ${soloData.accommodations.length} pilihan penginapan`;
      } else {
        searchInfo.style.display = 'none';
      }
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value;
      applyHotelFilter();
    });
  }

  categoryChips.forEach(chip => {
    chip.addEventListener('click', () => {
      categoryChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeCategory = chip.getAttribute('data-hotel-cat');
      applyHotelFilter();
    });
  });
}



/* ==========================================================================
   10B. MODAL DETAIL PENGINAPAN / HOTEL
   ========================================================================== */
window.openHotelDetail = function(hotelId) {
  const hotel = soloData.accommodations.find(h => h.id === hotelId);
  if (!hotel) return;

  const modal = document.getElementById('detailModal');
  const modalContent = document.getElementById('detailModalContent');
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <img src="${hotel.image}" alt="${hotel.name}" class="modal-hero-img">
    <div class="modal-content-body">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
        <span class="badge-tag">${hotel.categoryLabel}</span>
        <div class="rating-stars" style="font-size: 1.1rem;">
          <span>★</span> ${hotel.rating} <span style="font-size: 0.85rem; color: var(--text-muted);">(${hotel.reviewsCount} review)</span>
        </div>
      </div>
      <h2 class="modal-title">${hotel.name}</h2>
      <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 20px;">${hotel.address}</p>

      <div class="card-meta-list" style="margin-bottom: 24px;">
        <div class="meta-row">
          <span class="meta-label">Tipe Penginapan:</span>
          <span class="meta-value">${hotel.type}</span>
        </div>
        <div class="meta-row">
          <span class="meta-label">Kisaran Tarif:</span>
          <span class="meta-value" style="color: var(--gold-light); font-weight: 600;">${hotel.priceRange}</span>
        </div>
      </div>

      <h4 style="font-size: 1.1rem; color: var(--gold-light); margin-bottom: 10px;">Tentang Penginapan:</h4>
      <p style="color: var(--text-cream); line-height: 1.7; margin-bottom: 24px;">${hotel.fullDesc}</p>

      <h4 style="font-size: 1.1rem; color: var(--gold-light); margin-bottom: 10px;">Fasilitas & Keunggulan:</h4>
      <div class="modal-facilities-list">
        ${hotel.facilities.map(f => `<span class="facility-pill">✓ ${f}</span>`).join('')}
      </div>

      <div style="display: flex; gap: 14px; margin-top: 28px; flex-wrap: wrap;">
        <a href="${hotel.mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary-gold" style="flex: 1;">
          <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
            <circle cx="12" cy="9" r="2.5"/>
          </svg>
          <span>Petunjuk Arah (Google Maps)</span>
        </a>
      </div>
    </div>
  `;

  modal.classList.add('active');
};

/* ==========================================================================
   10. MODAL DETAIL DESTINASI
   ========================================================================== */
window.openDestinationDetail = function(destId) {
  const dest = soloData.destinations.find(d => d.id === destId);
  if (!dest) return;

  const modal = document.getElementById('detailModal');
  const modalContent = document.getElementById('detailModalContent');
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <img src="${dest.image}" alt="${dest.name}" class="modal-hero-img">
    <div class="modal-content-body">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
        <span class="badge-tag">${dest.categoryLabel}</span>
        <div class="rating-stars" style="font-size: 1.1rem;">
          <span>★</span> ${dest.rating} <span style="font-size: 0.85rem; color: var(--text-muted);">(${dest.reviewsCount} review)</span>
        </div>
      </div>
      <h2 class="modal-title">${dest.name}</h2>
      <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 20px;">${dest.address}</p>

      <div class="card-meta-list" style="margin-bottom: 24px;">
        <div class="meta-row">
          <span class="meta-label">Jam Buka:</span>
          <span class="meta-value">${dest.openHours}</span>
        </div>
        <div class="meta-row">
          <span class="meta-label">Harga Tiket:</span>
          <span class="meta-value" style="color: var(--gold-light);">${dest.ticketPrice}</span>
        </div>
      </div>

      <h4 style="font-size: 1.1rem; color: var(--gold-light); margin-bottom: 10px;">Tentang Destinasi:</h4>
      <p style="color: var(--text-cream); line-height: 1.7; margin-bottom: 24px;">${dest.fullDesc}</p>

      <h4 style="font-size: 1.1rem; color: var(--gold-light); margin-bottom: 10px;">Fasilitas & Layanan:</h4>
      <div class="modal-facilities-list">
        ${dest.facilities.map(f => `<span class="facility-pill">✓ ${f}</span>`).join('')}
      </div>

      <div style="display: flex; gap: 14px; margin-top: 28px; flex-wrap: wrap;">
        <a href="${dest.mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary-gold" style="flex: 1;">
          <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
            <circle cx="12" cy="9" r="2.5"/>
          </svg>
          <span>Petunjuk Arah (Google Maps)</span>
        </a>

      </div>
    </div>
  `;

  modal.classList.add('active');
};

/* ==========================================================================
   11. GALERI & LIGHTBOX MULTIMEDIA
   ========================================================================== */
function renderGallery(cat) {
  const container = document.getElementById('galleryGrid');
  if (!container) return;

  const items = cat === 'semua' 
    ? soloData.gallery 
    : soloData.gallery.filter(g => g.category === cat);

  container.innerHTML = items.map(item => `
    <div class="gallery-item" onclick="openLightbox('${item.image}', '${item.title} - ${item.caption}')">
      <img src="${item.image}" alt="${item.title}" loading="lazy">
      <div class="gallery-overlay">
        <div class="gallery-zoom-icon">
          <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            <line x1="11" y1="8" x2="11" y2="14"/>
            <line x1="8" y1="11" x2="14" y2="11"/>
          </svg>
        </div>
        <h4 class="gallery-caption-title">${item.title}</h4>
        <p class="gallery-caption-desc">${item.caption}</p>
      </div>
    </div>
  `).join('');
}

window.filterGallery = function(cat, button) {
  document.querySelectorAll('.gallery-filter-nav .filter-chip').forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
  renderGallery(cat);
};

window.openLightbox = function(imgSrc, caption) {
  const modal = document.getElementById('lightboxModal');
  const imgElem = document.getElementById('lightboxImg');
  const captionElem = document.getElementById('lightboxCaption');

  if (modal && imgElem) {
    imgElem.src = imgSrc;
    captionElem.textContent = caption;
    modal.classList.add('active');
  }
};

/* ==========================================================================
   12. FORM VALIDATION & COMMUNITY REVIEWS
   ========================================================================== */
function getCommunityReviews() {
  try {
    const saved = localStorage.getItem('solo_community_reviews');
    return saved ? JSON.parse(saved) : soloData.initialReviews;
  } catch (e) {
    return soloData.initialReviews;
  }
}

function initCommunityReviews() {
  const container = document.getElementById('communityReviewsList');
  if (!container) return;

  const reviews = getCommunityReviews();
  container.innerHTML = reviews.map(r => `
    <div class="review-item-card">
      <div class="review-card-top">
        <span class="reviewer-name">${escapeHtml(r.name)}</span>
        <span class="rating-stars">${'★'.repeat(r.rating || 5)}</span>
      </div>
      <div class="review-target-place">
        <span>${escapeHtml(r.placeName)}</span>
        <span style="color: var(--gray-subtle);">(${escapeHtml(r.category)})</span>
      </div>
      <p class="review-text">"${escapeHtml(r.message)}"</p>
    </div>
  `).join('');
}

function initRecommendationForm() {
  const form = document.getElementById('recommendationForm');
  const starPickers = document.querySelectorAll('.star-pick-item');
  const ratingInput = document.getElementById('ratingValue');

  // Star Rating Selector
  starPickers.forEach(star => {
    star.addEventListener('click', () => {
      const val = parseInt(star.getAttribute('data-star'), 10);
      ratingInput.value = val;
      starPickers.forEach((s, idx) => {
        s.classList.toggle('active', idx < val);
      });
    });
  });

  // Form Submit Handler
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('recName').value.trim();
      const email = document.getElementById('recEmail').value.trim();
      const category = document.getElementById('recCategory').value;
      const placeName = document.getElementById('recPlace').value.trim();
      const message = document.getElementById('recMessage').value.trim();
      const rating = parseInt(ratingInput.value, 10) || 5;

      // Validasi sederhana
      if (!name || !email || !placeName || !message) {
        showToast('Peringatan Form', 'Mohon lengkapi seluruh field yang bertanda bintang (*).');
        return;
      }

      // Validasi email regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showToast('Format Email Salah', 'Silakan masukkan alamat email yang valid.');
        return;
      }

      const newReview = {
        id: 'rev-' + Date.now(),
        name,
        email,
        category,
        placeName,
        rating,
        date: new Date().toISOString().split('T')[0],
        message
      };

      // Simpan ke local storage
      const reviews = getCommunityReviews();
      reviews.unshift(newReview);
      localStorage.setItem('solo_community_reviews', JSON.stringify(reviews));

      // Re-render daftar
      initCommunityReviews();

      // Reset form
      form.reset();
      ratingInput.value = 5;
      starPickers.forEach(s => s.classList.add('active'));

      // Toast feedback
      showToast('Rekomendasi Berhasil Dikirim!', `Matur nuwun ${name}, rekomendasi "${placeName}" Anda telah tampil di papan komunitas.`);
    });
  }
}

/* ==========================================================================
   13. AMBIENT GAMELAN AUDIO (Web Audio API Synthesizer)
   ========================================================================== */
let audioCtx = null;
let isAudioPlaying = false;
let audioTimer = null;

function initAmbientAudio() {
  const audioBtn = document.getElementById('audioToggleBtn');
  if (!audioBtn) return;

  audioBtn.addEventListener('click', () => {
    if (!isAudioPlaying) {
      startGamelanAmbient();
      audioBtn.classList.add('playing');
      audioBtn.title = "Matikan Musik Latar Gamelan";
      showToast('Suasana Solo Aktif', 'Alunan gamelan pelog syahdu menemani perjalanan jelajah Anda.');
    } else {
      stopGamelanAmbient();
      audioBtn.classList.remove('playing');
      audioBtn.title = "Putar Musik Latar Gamelan Solo";
      showToast('Audio Dijeda', 'Musik latar dinonaktifkan.');
    }
  });
}

function startGamelanAmbient() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!audioCtx) {
      audioCtx = new AudioContext();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    isAudioPlaying = true;

    // Frekuensi tangga nada Pelog Jawa (Hz)
    const pelogScale = [261.63, 277.18, 329.63, 392.00, 415.30, 523.25, 554.37, 659.25];

    function playBell() {
      if (!isAudioPlaying || !audioCtx) return;

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      const freq = pelogScale[Math.floor(Math.random() * pelogScale.length)];
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      // Karakteristik genta gamelan: Attack cepat, decay panjang lembut
      gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.08, audioCtx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 3.5);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 3.6);

      // Interval nada berikutnya dengan ritme gamelan tenang (1.5 - 3 detik)
      const nextDelay = 1600 + Math.random() * 1800;
      audioTimer = setTimeout(playBell, nextDelay);
    }

    playBell();
  } catch (err) {
    console.warn("Web Audio tidak didukung pada browser ini:", err);
  }
}

function stopGamelanAmbient() {
  isAudioPlaying = false;
  if (audioTimer) {
    clearTimeout(audioTimer);
  }
}

/* ==========================================================================
   14. TOAST NOTIFICATION & MODALS CONTROLLER
   ========================================================================== */
function showToast(title, message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <div class="toast-icon">
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
      </svg>
    </div>
    <div>
      <div class="toast-msg-title">${escapeHtml(title)}</div>
      <div class="toast-msg-text">${escapeHtml(message)}</div>
    </div>
  `;

  container.appendChild(toast);

  // Animasi Masuk
  setTimeout(() => toast.classList.add('show'), 10);

  // Auto Hilang setelah 4 detik
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

function initModals() {
  // Tutup modal saat tombol close diklik
  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', closeAllModals);
  });

  // Tutup modal saat backdrop diklik
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeAllModals();
      }
    });
  });

  // Tutup modal saat tombol Escape ditekan
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });
}

window.closeAllModals = function() {
  document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
};

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
