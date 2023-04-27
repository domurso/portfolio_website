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


imageSet3 = ["img/grad1.jpeg","img/grat2.jpeg","img/grat3.jpeg","img/grat4.jpeg","img/port1.png","img/port2.jpeg","img/port3.jpeg","img/port4.jpeg"];
imageSet2 = ["img/roxyg1.jpeg","img/roxyg2.jpeg","img/roxyg3.jpeg","img/roxyg4.jpeg","img/jay1.jpeg","img/jay2.jpeg","img/jay3.jpeg","img/jay4.jpeg"];
imageSet1 = ["img/showcase1.jpeg","img/showcase2.jpeg","img/showcase3.jpeg","img/showcase4.jpeg","img/open1.jpeg","img/open2.jpeg","img/open3.jpeg","img/open4.jpeg"];
imageSetSet = [imageSet1, imageSet2, imageSet3];
setIndex = 0;
const button = document.getElementById('forward');
button.addEventListener('click', () => {
  const container = document.getElementById('set1');
  console.log(container);
  const images = container.getElementsByTagName('img');
  console.log(images)

  const containerTwo = document.getElementById('set2');
  console.log(containerTwo);
  const imagesTwo = containerTwo.getElementsByTagName('img');
  console.log(imagesTwo)

  // Replace each image with a new image
  setIndex+=1;
  if(setIndex > 2){
    setIndex = 0;
  }
  for (let i = 0; i < images.length; i++) {
    images[i].src = imageSetSet[setIndex][i];
    imagesTwo[i].src = imageSetSet[setIndex][i+4];
  }
});

const buttonTwo = document.getElementById('backward');
buttonTwo.addEventListener('click', () => {
  const container = document.getElementById('set1');
  console.log(container);
  const images = container.getElementsByTagName('img');
  console.log(images)

  const containerTwo = document.getElementById('set2');
  console.log(containerTwo);
  const imagesTwo = containerTwo.getElementsByTagName('img');
  console.log(imagesTwo)

  // Replace each image with a new image
  setIndex-=1;
  if(setIndex < 0){
    setIndex = 2;
  }
  for (let i = 0; i < images.length; i++) {
    images[i].src = imageSetSet[setIndex][i];
    imagesTwo[i].src = imageSetSet[setIndex][i+4];
    console.log(imageSetSet[setIndex][i])
  }
});