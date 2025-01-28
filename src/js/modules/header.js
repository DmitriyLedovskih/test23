const header = document.querySelector(".header");

const scrollHeader = () => {
  if (window.scrollY > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

export default scrollHeader;
