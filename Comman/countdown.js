const h1 = document.getElementById("h1");

const coutdown = () => {
  const input = document.getElementById("countDown");

  const countDownDate = new Date(input.value).getTime();
  const now = new Date().getTime();

  const distance = countDownDate - now;

  const dd = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hh = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  const mm = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  const ss = Math.floor((distance % (1000 * 60)) / 1000);

  const output = `${dd}d ${hh}h ${mm}m ${ss}s`;
  console.log(output);
  h1.innerText = output;

  if (distance < 0) {
    h1.innerText = "Exp";
  }
};

coutdown();
setInterval(coutdown, 1000);
