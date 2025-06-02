  // Selecciona los íconos y el texto
  const icons = document.querySelector('.icons');
  const typingContainer = document.querySelector('.typing-container');
  const typingText = document.querySelector('.typing-text');

  // Duración total de la animación fadeIn de los íconos (1.5s + delay 1s)
  // Según tu CSS: animation-delay: 1s; animation-duration: 1.5s;
  const totalAnimationTime = 1700; // 1s delay + 1.5s duration + margen

  setTimeout(() => {
    // Quitamos la clase que oculta el texto
    typingContainer.classList.remove('hidden');

    // Activamos la animación typing
    typingText.classList.add('active');
    
  }, totalAnimationTime);

  




let open = false;

const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');

// Ajusta el tamaño inicial cuando carga la página para que siempre estén diferentes
line1.style.width = '40px';
line2.style.width = '30px';
line3.style.width = '20px';

function toggleMenu(button) {
  const bar1 = document.querySelector('.bar1');
  const bar2 = document.querySelector('.bar2');
  const bar3 = document.querySelector('.bar3');
  const menu = document.getElementById('menu');

  if (!open) {
    // Activar (abrir) — Las 3 líneas igual a 30px
    button.classList.add('active');

    line1.style.width = '40px';
    line2.style.width = '40px';
    line3.style.width = '40px';

    bar1.style.transitionDelay = '0s';
    bar1.style.width = '100%';

    setTimeout(() => {
      bar2.style.transitionDelay = '0s';
      bar2.style.width = '100%';
    }, 300);

    setTimeout(() => {
      bar3.style.transitionDelay = '0s';
      bar3.style.width = '100%';
    }, 600);

    setTimeout(() => {
      menu.classList.add('show');
    }, 1000);

    open = true;
  } else {
    // Desactivar (cerrar) — Vuelven a tamaños diferentes (triángulo invertido)
    menu.classList.remove('show');

    bar3.style.transitionDelay = '0s';
    bar3.style.width = '0%';

    setTimeout(() => {
      bar2.style.transitionDelay = '0s';
      bar2.style.width = '0%';
    }, 300);

    setTimeout(() => {
      bar1.style.transitionDelay = '0s';
      bar1.style.width = '0%';
    }, 600);

    setTimeout(() => {
      button.classList.remove('active');

      line1.style.width = '40px';  // base más larga
      line2.style.width = '30px';  // mediana
      line3.style.width = '20px';  // punta más pequeña

      open = false;
    }, 900);
  }
}


window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    // Ocultar la pantalla de bienvenida
    document.querySelector('.welcome-screen').style.display = 'none';

    // Mostrar la pantalla principal
    const mainSite = document.querySelector('.main-site');
    mainSite.style.display = 'block';

    // Animar elementos principales
    const elementsToAnimate = mainSite.querySelectorAll('.hamburger, .header, .container');
    elementsToAnimate.forEach((el, index) => {
      el.classList.add('animate-appear');
      el.style.animationDelay = `${index * 0.3}s`;
    });

    // Animar tech-tags uno por uno
    const techTags = document.querySelectorAll('.tech-tags span');
    const animationTotalTime = (elementsToAnimate.length - 1) * 500;
    const extraDelay = 800;
    const techTagStartTime = animationTotalTime + extraDelay;
    const delayPerTag = 100;

    techTags.forEach((tag, i) => {
      setTimeout(() => {
        tag.classList.add('visible');
      }, techTagStartTime + i * delayPerTag);
    });

    // Animar socials uno por uno con escala y reset
    const socialLinks = document.querySelectorAll('.socials a');
    const techTagsTotalTime = techTagStartTime + techTags.length * delayPerTag;
    const delayAfterTechTags = 500;
    const socialStartTime = techTagsTotalTime + delayAfterTechTags;
    const delayPerSocial = 300;

    socialLinks.forEach((link, i) => {
      setTimeout(() => {
        link.classList.add('animate-social');
        setTimeout(() => {
          link.classList.add('reset');
        }, 300); // Reset después de la animación
      }, socialStartTime + i * delayPerSocial);
    });

    // Animar botones después de socials
    const buttons = document.querySelectorAll('.buttons .btn');
    const socialsTotalTime = socialStartTime + socialLinks.length * delayPerSocial;
    const extraDelayAfterSocials = 500;
    const buttonsStartTime = socialsTotalTime + extraDelayAfterSocials;
    const delayPerButton = 300;

    buttons.forEach((btn, i) => {
      setTimeout(() => {
        btn.classList.add('animate-button');
        setTimeout(() => {
          btn.classList.remove('animate-button');
        }, 300); // Eliminar la clase después de que termina la animación
      }, buttonsStartTime + i * delayPerButton);
    });

    const buttonsTotalTime = buttonsStartTime + buttons.length * delayPerButton;
    const extraDelayAfterButtons = 500; // un pequeño delay antes de animar la línea
    
    setTimeout(() => {
      const underline = document.querySelector('.underline');
      underline.classList.add('animate-grow');
    }, buttonsTotalTime + extraDelayAfterButtons);

  }, 4000);
});


  function copyDiscordTag(event) {
    event.preventDefault();
    const discordTag = 'thehunter5293'; // Cambia aquí tu tag completo
    navigator.clipboard.writeText(discordTag).then(() => {
      alert('Discord tag copied: ' + discordTag);
    }).catch(() => {
      alert('Error');
    });
  }


  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', e => {
      btn.classList.add('active');
  
      setTimeout(() => {
        btn.classList.remove('active');
      }, 300);
  
      if (btn.getAttribute('href') === '#') {
        e.preventDefault(); // Solo previene el scroll para este enlace "vacío"
      }
    });
  });














  const btnDesktop = document.getElementById('btnDesktop');
  const btnMobile = document.getElementById('btnMobile');
  const prueba1 = document.getElementById('cards-container');
  const prueba2 = document.getElementById('prueba2');
  
  function animateCardsOut(container, direction, callback) {
    const cards = container.querySelectorAll('.card');
    let completed = 0;
  
    // Guarda la posición actual del scroll vertical
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    cards.forEach((card, index) => {
      card.classList.remove('fade-in');
      card.classList.add(index % 2 === 0 ? 'card-exit-left' : 'card-exit-right');
  
      card.addEventListener('animationend', () => {
        completed++;
        if (completed === cards.length) {
          callback();
  
          // Después de cambiar visibilidad, vuelve a poner el scroll en la posición guardada
          window.scrollTo(0, scrollTop);
        }
      }, { once: true });
    });
  }
  
  function showContainer(container) {
    container.style.display = 'grid';
    const cards = container.querySelectorAll('.card');
    cards.forEach(card => {
      card.classList.remove('card-exit-left', 'card-exit-right');
      card.classList.add('fade-in');
    });
  }
  
  btnMobile.addEventListener('click', () => {
    if (!btnMobile.classList.contains('active')) {
      btnMobile.classList.add('active');
      btnDesktop.classList.remove('active');
  
      animateCardsOut(prueba1, 'left', () => {
        prueba1.style.display = 'none';
        showContainer(prueba2);
      });
    }
  });
  
  btnDesktop.addEventListener('click', () => {
    if (!btnDesktop.classList.contains('active')) {
      btnDesktop.classList.add('active');
      btnMobile.classList.remove('active');
  
      animateCardsOut(prueba2, 'right', () => {
        prueba2.style.display = 'none';
        showContainer(prueba1);
      });
    }
  });




let startX = 0;
let endX = 0;
let moved = false;

function handleTouchStart(event) {
  startX = event.touches[0].clientX;
  moved = false;
}

function handleTouchMove(event) {
  endX = event.touches[0].clientX;
  if (Math.abs(endX - startX) > 10) {
    moved = true;
  }
}

function handleTouchEnd() {
  if (!moved) return; // Si no se movió lo suficiente, permitir el click

  const deltaX = endX - startX;

  if (Math.abs(deltaX) > 50) { // Umbral mínimo para swipe
    if (deltaX < 0 && !btnMobile.classList.contains('active')) {
      btnMobile.click(); // Swipe izquierda → Mobile
    } else if (deltaX > 0 && !btnDesktop.classList.contains('active')) {
      btnDesktop.click(); // Swipe derecha → Desktop
    }
  }

  // Reset
  startX = 0;
  endX = 0;
  moved = false;
}

// Contenedores de swipe
const swipeArea = document.getElementById('cards-container');
const swipeAreaMobile = document.getElementById('prueba2');

// Asignar eventos
[swipeArea, swipeAreaMobile].forEach(area => {
  area.addEventListener('touchstart', handleTouchStart, { passive: true });
  area.addEventListener('touchmove', handleTouchMove, { passive: true });
  area.addEventListener('touchend', handleTouchEnd);
});














const cards = document.querySelectorAll('.card');
const modal = document.querySelector('.__overlay-modal');
const modalTitle = modal.querySelector('.__modal-title');
const modalDescription = modal.querySelector('.__modal-description');
const modalVideoIframe = modal.querySelector('iframe');
const closeBtn = modal.querySelector('.__close-btn');



function getEmbedUrl(url) {
  const videoIdMatch = url.match(/v=([^&]+)/);
  if (videoIdMatch && videoIdMatch[1]) {
    return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
  }
  return url;
}

let activeCard = null;  // guarda la card que tiene click to view activa

cards.forEach(card => {
  card.addEventListener('click', (e) => {
    e.stopPropagation();

    const img = card.querySelector('.card-image');

    if (activeCard !== card) {
      // Si es una card diferente a la activa:
      // 1. Quitar active a la anterior
      if (activeCard) {
        const prevImg = activeCard.querySelector('.card-image');
        prevImg.classList.remove('active');
      }
      // 2. Activar esta
      img.classList.add('active');
      activeCard = card;

      // Cerrar modal si estaba abierto
      modal.classList.add('hidden');
      modalVideoIframe.src = '';
      document.body.classList.remove('modal-open');

    } else {
      // Si es la misma card que ya estaba activa
      // Mostrar modal con video

      const title = card.getAttribute('data-title') || 'Sin título';
      const description = card.getAttribute('data-description') || 'Sin descripción';
      const videoUrlRaw = card.getAttribute('data-video') || '';
      const videoUrl = getEmbedUrl(videoUrlRaw);

      modalTitle.textContent = title;
      modalDescription.textContent = description;
      modalVideoIframe.src = videoUrl;

      modal.classList.remove('hidden');
      document.body.classList.add('modal-open');
    }
  });
});

// Cerrar modal con botón
closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
  modalVideoIframe.src = '';
  document.body.classList.remove('modal-open');
});



// Click fuera de cualquier card desactiva la imagen activa y cierra modal
document.addEventListener('click', (e) => {
  const clickedCard = e.target.closest('.card');
  const isModalOpen = !modal.classList.contains('hidden');

  if (!clickedCard && !isModalOpen && activeCard) {
    const img = activeCard.querySelector('.card-image');
    img.classList.remove('active');
    activeCard = null;
  }
});



const menuLinks = document.querySelectorAll('#menu a');

// Agrega un event listener a cada enlace
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (open) {
      // Simula el segundo clic al botón hamburguesa
      toggleMenu(document.querySelector('.hamburger'));
    }
  });
});








const track = document.querySelector('.x-slider-track');
const dots = document.querySelectorAll('.x-dot');
const slides = document.querySelectorAll('.x-slide');

let currentIndex = 0;
const totalSlides = slides.length;
let autoSlideInterval;
let userPaused = false;
let userPauseTimeout;

// Función para ir a una slide específica
function goToSlide(index) {
  currentIndex = index;
  track.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

// Función para avanzar a la siguiente
function nextSlide() {
  const nextIndex = (currentIndex + 1) % totalSlides;
  goToSlide(nextIndex);
}

// Auto-slide con reinicio si el usuario interactúa
function startAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(() => {
    if (!userPaused) {
      nextSlide();
    }
  }, 7000);
}

function pauseAutoSlide() {
  userPaused = true;
  clearTimeout(userPauseTimeout);
  userPauseTimeout = setTimeout(() => {
    userPaused = false;
  }, 10000);
  startAutoSlide(); // reinicia para que no salte en medio del tiempo de espera
}

// Click en los puntos
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    goToSlide(index);
    pauseAutoSlide();
  });
});


track.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

track.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  const diff = endX - startX;

  if (Math.abs(diff) > 50) {
    if (diff < 0 && currentIndex < totalSlides - 1) {
      goToSlide(currentIndex + 1);
    } else if (diff > 0 && currentIndex > 0) {
      goToSlide(currentIndex - 1);
    }
    pauseAutoSlide();
  }
});

goToSlide(0);
startAutoSlide();





const readMore = document.getElementById("readMoreTrigger");
const readLess = document.getElementById("readLessTrigger");
const extraText = document.getElementById("extraContent");

readMore.addEventListener("click", () => {
  extraText.classList.add("show");
  readMore.style.display = "none";
});

readLess.addEventListener("click", () => {
  extraText.classList.remove("show");

  // Esperar 1 segundo (1000 ms) antes de mostrar "Read More"
  setTimeout(() => {
    readMore.style.display = "inline";
  }, 300);
});



const hireMeCard = document.getElementById('hireMeCard');

hireMeCard.addEventListener('click', (e) => {
  e.stopPropagation();  // Evita que otros listeners globales detecten el click
  window.location.hash = '#projects';  // Cambia el hash sin recargar la página
});



const btn = document.querySelector('.config-button');
const menu = document.querySelector('.config-menu');

btn.addEventListener('click', (e) => {
  e.stopPropagation();
  menu.classList.toggle('show');
});

// Cerrar menú si se hace click fuera del botón y menú
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !btn.contains(e.target)) {
    menu.classList.remove('show');
  }
});








const languageOption = document.querySelector('.language-option');
const languageList = document.querySelector('.language-list');
const langButtons = document.querySelectorAll('.language-list button');
const musicOption = document.querySelector('.music-option');
const musicIcon = document.getElementById('music-icon');
const musicAudio = document.getElementById('music-audio');

let musicActive = false; // Música silenciada por defecto

function updateMusicIcon() {
  if (musicActive) {
    musicIcon.classList.remove('fa-volume-mute', 'music-off');
    musicIcon.classList.add('fa-volume-up', 'music-on');
    musicAudio.play();
    musicOption.setAttribute('aria-pressed', 'true');
  } else {
    musicIcon.classList.remove('fa-volume-up', 'music-on');
    musicIcon.classList.add('fa-volume-mute', 'music-off');
    musicAudio.pause();
    musicAudio.currentTime = 0;
    musicOption.setAttribute('aria-pressed', 'false');
  }
}

// Inicializa el icono al cargar la página
updateMusicIcon();


// Language selection
langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    langButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    console.log('Idioma seleccionado:', btn.dataset.lang);
  });
});

// Music toggle
musicOption.addEventListener('click', () => {
  musicActive = !musicActive;
  updateMusicIcon();
});












// Variables globales para el tema
let isDarkMode = true;
let themeIcon, themeOption;
function updateThemeIcon() {
  if (!themeIcon || !themeOption) return;
  if (isDarkMode) {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    document.documentElement.removeAttribute('data-theme');
    themeOption.setAttribute('aria-pressed', 'false');
  } else {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    document.documentElement.setAttribute('data-theme', 'light');
    themeOption.setAttribute('aria-pressed', 'true');
  }
}
function updateAnimatedBackground() {
  const canvas = document.getElementById('liquid-background');
  if (canvas) {
    canvas.remove();
  }
  if (window.innerWidth < 768) {
    loadAnimatedBackgroundWithTheme();
  } else {
    loadStaticBackgroundWithTheme();
  }
}
function loadStaticBackgroundWithTheme() {
  if (isDarkMode) {
    document.body.style.background = "linear-gradient(135deg, #1a0033, #1e0a57)";
  } else {
    document.body.style.background = "linear-gradient(135deg, #f0f4ff, #e8f0ff)";
  }
  document.body.style.backgroundAttachment = "fixed";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
}
function loadAnimatedBackgroundWithTheme() {
  const canvas = document.createElement("canvas");
  canvas.id = "liquid-background";
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");
  let w, h, t = 0;
  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();
  function lerp(a, b, t) {
    return a + (b - a) * t;
  }
  let colorA, colorB;
  if (isDarkMode) {
    colorA = {r: 26, g: 0, b: 51};
    colorB = {r: 30, g: 10, b: 87};
  } else {
    colorA = {r: 220, g: 200, b: 255}; // lavanda claro, suave
    colorB = {r: 200, g: 190, b: 255}; // lila azulado claro
  }
  function draw() {
    t += 0.01;
    const imgData = ctx.createImageData(w, h);
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const i = (y * w + x) * 4;
        const wave = Math.sin(x * 0.003 + t) + Math.cos(y * 0.003 + t);
        const mix = (wave + 2) / 4;
        const r = Math.floor(lerp(colorA.r, colorB.r, mix));
        const g = Math.floor(lerp(colorA.g, colorB.g, mix));
        const b = Math.floor(lerp(colorA.b, colorB.b, mix));
        imgData.data[i] = r;
        imgData.data[i + 1] = g;
        imgData.data[i + 2] = b;
        imgData.data[i + 3] = 255;
      }
    }
    ctx.putImageData(imgData, 0, 0);
    requestAnimationFrame(draw);
  }
  draw();
}
// Cargar fondo inicial
if (window.innerWidth < 768) {
  loadAnimatedBackgroundWithTheme();
} else {
  loadStaticBackgroundWithTheme();
}
// Resize event  
window.addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    if (!document.getElementById("liquid-background")) {
      loadAnimatedBackgroundWithTheme();
    }
  } else {
    if (document.getElementById("liquid-background")) {
      document.getElementById("liquid-background").remove();
    }
    loadStaticBackgroundWithTheme();
  }
});
// Inicializar cuando el DOM esté listo
window.addEventListener('DOMContentLoaded', () => {
  // Inicializar elementos del tema
  themeIcon = document.getElementById('theme-icon');
  themeOption = document.querySelector('.theme-option');
  // Cargar tema guardado
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    isDarkMode = savedTheme === 'dark';
  }
  updateThemeIcon();
  // Event listener para toggle de tema
  if (themeOption) {
    themeOption.addEventListener('click', () => {
      isDarkMode = !isDarkMode;
      updateThemeIcon();
      updateAnimatedBackground();
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
  }
  // Show main site after welcome animation
  setTimeout(() => {
    document.querySelector('.welcome-screen').style.display = 'none';
    document.querySelector('.main-site').style.display = 'block';
  }, 4000);
});


