const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ%#!&1234567890";

function animateText() {
  const h1 = document.querySelector("a");
  let iterations = 0;
  const interval = setInterval(() => {
    h1.innerText = h1.innerText.split("")
      .map((letter,index) => {
        if(index < iterations){
          return h1.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * letters.length)]
      })
      .join("");
    if(iterations >= h1.innerText.split("").length) clearInterval(interval);
    iterations+=1/5
  }, 50)
}

window.addEventListener("load", animateText);

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
  link.onmouseover = event => {
    let iterations = 0;
    const interval = setInterval(() => {
      event.target.innerText = event.target.innerText.split("")
        .map((letter,index) => {
          if(index < iterations){
            return event.target.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * letters.length)]
        })
        .join("");
      if(iterations >= event.target.innerText.split("").length) clearInterval(interval);
      iterations+=1/5
    }, 50);
  };
});
