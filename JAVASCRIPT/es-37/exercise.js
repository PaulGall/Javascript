

const prom = new Promise((resolve, reject) => {
    const number = 9;
    if(number > 10) {
        resolve(number);
    } else {
        reject(new Error("Questo è il tuo errore:"))
    }
})

prom.then(function (number){
    console.log(number)
}).catch(function(Error){
    console.log(Error);
});