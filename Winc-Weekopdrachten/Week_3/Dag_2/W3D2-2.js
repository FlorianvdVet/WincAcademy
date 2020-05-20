let log = console.log;

const huiswerkMaken = (vak, callback) => {
    setTimeout(() => {
        log(`Ok ik ga mijn ${vak} huiswerk maken`);
        callback();
   }, 2000);
};

const klaarMetHuiswerk = () => {
    log("Kijk P & M ik ben klaar met huiswerk");
}

huiswerkMaken("wiskunde", klaarMetHuiswerk);