export function getPageMaxScroll() {
    // Cross browser page height detection is ugly
    return Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    ) - window.innerHeight; // Subtract viewport height
  }