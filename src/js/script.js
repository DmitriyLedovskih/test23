import scrollHeader from "./modules/header.js";
import textHidden from "./modules/hiddenText.js";
import map from "./modules/map.js";
import maskPhone from "./modules/maskPhone.js";
import swiper from "./modules/slider.js";

const init = () => {
  maskPhone();
  textHidden();
  map();
  swiper.init();
  window.addEventListener("scroll", scrollHeader);
};

export default init;
