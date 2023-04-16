function printAsyncName(callback, name) {
  setTimeout(function () {
    callback();
  }, 1000);
  setTimeout(function () {
    console.log(name);
  }, 2000);
}

function sayHello() {
    console.log("Ciao");
}

printAsyncName(sayHello, "Alessandro !");