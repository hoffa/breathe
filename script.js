const root = document.documentElement;

// Keep the inhale/exhale cadence explicit in one place.
root.style.setProperty("--duration", "10s");

const syncViewport = () => {
  const viewport = window.visualViewport;
  const width = Math.round(viewport?.width ?? window.innerWidth);
  const height = Math.round(viewport?.height ?? window.innerHeight);

  root.style.setProperty("--app-width", `${width}px`);
  root.style.setProperty("--app-height", `${height}px`);
  root.style.setProperty("--app-min", `${Math.min(width, height)}px`);
};

syncViewport();

window.addEventListener("resize", syncViewport, { passive: true });
window.addEventListener("orientationchange", syncViewport, { passive: true });
window.visualViewport?.addEventListener("resize", syncViewport, { passive: true });
