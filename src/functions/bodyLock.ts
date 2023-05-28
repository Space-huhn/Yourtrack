export const bodyLock = (state) => {
  const container = document.querySelector("body") as HTMLBodyElement;

    if (state) {
      const scrollWidth = window.innerWidth - container.offsetWidth;

      container.style.overflow = "hidden";
      container.style.paddingRight = `${scrollWidth}px`;
    } else {
      container.style.overflow = "auto";
      container.style.paddingRight = `0px`;
    }
}