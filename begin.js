
  function loadStaticBackground() {
    document.body.style.background = "linear-gradient(135deg, #1a0033, #1e0a57)";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }

  function loadAnimatedBackground() {
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

    const colorA = { r: 26, g: 0, b: 51 };  // #1a0033
    const colorB = { r: 30, g: 10, b: 87 }; // #1e0a57

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

  // Detectar tamaño pantalla y cargar fondo animado solo en móviles
  if (window.innerWidth < 768) {
    loadAnimatedBackground();
  } else {
    loadStaticBackground();
  }

  // Opcional: si el usuario cambia tamaño de ventana después de cargar
  window.addEventListener("resize", () => {
    // Esto es opcional, si quieres que cambie dinámicamente:
    if (window.innerWidth < 768) {
      if (!document.getElementById("liquid-background")) {
        loadAnimatedBackground();
      }
    } else {
      if (document.getElementById("liquid-background")) {
        document.getElementById("liquid-background").remove();
      }
      loadStaticBackground();
    }
  });








  // Show main site after welcome animation
  
  window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      document.querySelector('.welcome-screen').style.display = 'none';
      document.querySelector('.main-site').style.display = 'block';
    }, 4000);
  });
