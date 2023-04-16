function repeatHello(callback) {
  const clear = setInterval(() => {
    callback();
  }, 1000);
  setTimeout(() => {
    clearInterval(clear);
  }, 5000);
}

const repeat = () => {
  console.log("Ciao");
};

repeatHello(repeat);