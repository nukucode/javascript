// today we make javascript clock
setInterval(() => {
  const date = new Date();

  const hh = date.getHours();
  const min = date.getMinutes();
  const ss = date.getSeconds();

  hh < 10 ? `0${hh}` : hh;
  min < 10 ? `0${min}` : min;
  ss < 10 ? `0${ss}` : ss;

  const time = `${hh}:${min}:${ss}`;
  console.log(time);

}, 1000);
