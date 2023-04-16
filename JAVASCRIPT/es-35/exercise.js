function repeatHello(callback) {
    setInterval(() => {
        callback()
      }, 1000);
}
const repeat = () => {
    console.log("Ciao");
}
repeatHello(repeat);


// si usa un'arrow function perché la 
// funzione di callback non richiede parametri, 
// quindi la sintassi breve e leggibile delle funzioni 
// freccia è meglio.