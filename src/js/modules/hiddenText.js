let isFull;
const hiddenButton = document.querySelector(".hidden-button");
const hiddenText = document.querySelector(".hidden-text");
const hiddenButtonSpan = hiddenButton.querySelector(".hidden-button span");

const textHidden = () => {
  hiddenButton.addEventListener("click", () => {
    if (!isFull) {
      isFull = true;
      hiddenText.style.setProperty("--height", "0");
      hiddenButtonSpan.textContent = "Скрыть";
    } else {
      isFull = false;
      hiddenText.style.removeProperty("--height");
      hiddenButtonSpan.textContent = "Читать полностью";
    }
  });
};

export default textHidden;
