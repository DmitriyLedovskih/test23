import IMask from "imask";

export const maskPhone = () => {
  const inputTel = document.querySelectorAll("input[type='tel']");

  inputTel.forEach((el) => {
    new IMask(el, {
      mask: "+{7} (000) 000-00-00",
    });
  });
};
