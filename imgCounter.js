const img = document.getElementById("img");

setInterval(() => {
  for (let i = 1; i < 7; i++) {
    img.src = `./img/img${i}.jpg`;
    i += 1;
  }
}, 1000);
