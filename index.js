/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

window.addEventListener('DOMContentLoaded', () => {
    const cssVars = ['--brown', '--red-brown', '--red'];
    const rootStyles = getComputedStyle(document.documentElement);
    const colors = cssVars
        .map(v => rootStyles.getPropertyValue(v).trim())
        .filter(Boolean);
    if (!colors.length) return;

    const hashToIndex = (str, mod) => {
        let h = 2166136261; // FNV-1a
        for (let i = 0; i < str.length; i++) {
            h ^= str.charCodeAt(i);
            h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24);
        }
        return Math.abs(h) % mod;
    };

    document.querySelectorAll('.work__box').forEach(box => {
        const id = box.getAttribute('data-id') || box.textContent.trim().slice(0, 30);
        const color = colors[hashToIndex(id, colors.length)];
        box.style.backgroundColor = color;
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const cssVars = ['--brown', '--red-brown', '--red'];
    const rootStyles = getComputedStyle(document.documentElement);
    const colors = cssVars
        .map(v => rootStyles.getPropertyValue(v).trim())
        .filter(Boolean);
    if (!colors.length) return;

    const hashToIndex = (str, mod) => {
        let h = 2166136261; // FNV-1a
        for (let i = 0; i < str.length; i++) {
            h ^= str.charCodeAt(i);
            h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24);
        }
        return Math.abs(h) % mod;
    };

    document.querySelectorAll('.client__logos').forEach(box => {
        const id = box.getAttribute('data-id') || box.textContent.trim().slice(0, 30);
        const color = colors[hashToIndex(id, colors.length)];
        box.style.backgroundColor = color;
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const cssVars = ['--brown', '--red-brown', '--red'];
    const rootStyles = getComputedStyle(document.documentElement);
    const colors = cssVars
        .map(v => rootStyles.getPropertyValue(v).trim())
        .filter(Boolean);
    if (!colors.length) return;

    const hashToIndex = (str, mod) => {
        let h = 2166136261; // FNV-1a
        for (let i = 0; i < str.length; i++) {
            h ^= str.charCodeAt(i);
            h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24);
        }
        return Math.abs(h) % mod;
    };

    document.querySelectorAll('.about__content').forEach(box => {
        const id = box.getAttribute('data-id') || box.textContent.trim().slice(0, 30);
        const color = colors[hashToIndex(id, colors.length)];
        box.style.backgroundColor = color;
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const cssVars = ['--brown', '--red-brown', '--red'];
    const rootStyles = getComputedStyle(document.documentElement);
    const colors = cssVars
        .map(v => rootStyles.getPropertyValue(v).trim())
        .filter(Boolean);
    if (!colors.length) return;

    const hashToIndex = (str, mod) => {
        let h = 2166136261; // FNV-1a
        for (let i = 0; i < str.length; i++) {
            h ^= str.charCodeAt(i);
            h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24);
        }
        return Math.abs(h) % mod;
    };

    document.querySelectorAll('.contact__info').forEach(box => {
        const id = box.getAttribute('data-id') || box.textContent.trim().slice(0, 30);
        const color = colors[hashToIndex(id, colors.length)];
        box.style.backgroundColor = color;
    });
});