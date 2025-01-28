import IMask from "imask";

const inputTel = document.querySelectorAll("input[type='tel']");

const maskPhone = () => {
  inputTel.forEach((el) => {
    new IMask(el, {
      mask: "+{7} (000) 000-00-00",
    });
  });
};

export default maskPhone;
