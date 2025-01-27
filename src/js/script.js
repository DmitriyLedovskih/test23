import { headerScroll } from "./modules/header";
import { hiddenText } from "./modules/hiddenText";
import { map } from "./modules/map";
import { maskPhone } from "./modules/maskPhone";
import { slider } from "./modules/slider";

const init = () => {
  headerScroll();
  slider();
  hiddenText();
  maskPhone();
  map();
};

export default init;
