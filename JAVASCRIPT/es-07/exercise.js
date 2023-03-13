function printName() {
    let helloName = "Hello John";
    function inner () {
        return helloName;
    }
    setTimeout(function()
    {
        console.log(helloName);
    }, 1000);
}
printName();



