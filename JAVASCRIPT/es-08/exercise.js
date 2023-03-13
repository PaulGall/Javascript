function multiplyByTwo(value) {
    let number = 2;
    return function inner() {
      console.log(value * number);
  }
}
result = multiplyByTwo(4)();