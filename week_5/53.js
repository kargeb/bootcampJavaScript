console.log("53");

class EventEmitter {

    constructor(){  
        this.events = {};
    }

    on(type, fn) {
        if(!type || !fn) return;
        
        this.events[type] = this.events[type] || [];
        this.events[type].push(fn);
    }

    emit(type, data) {
        var fns = this.events[type];
        if(!fns || !fns.length) return;
        
        for(var i = 0; i < fns.length; i++) {
            fns[i](data);
        }
    }
}

class Database extends EventEmitter {

    constructor(url) {
        super();
        this.url = url;
    }

    connect() {
        super.emit("connect", this.url);
    }
    
    disconnect() {
        super.emit("disconnect", this.url);
    }
}


var content = document.getElementById("content"),
    button_run = document.getElementById("button_run"); 

button_run.addEventListener("click", function () {

    content.classList.remove("hidden");

    // Użycie EventEmittera
    var ev = new EventEmitter();

    ev.on("hello", function (message) {
        console.log("Witaj " + message + "!");
        content.innerHTML += "Witaj " + message + "!";
    });

    ev.on("hello", function (message) {
        console.log("Siema " + message + ".");
        content.innerHTML += "<br> Siema " + message + ".";
    });

    ev.on("goodbye", function () {
        console.log("Do widzenia!");
        content.innerHTML += "<br> Do widzenia! <br>";
    });

    ev.emit("hello", "Marek");
    ev.emit("goodbye");
    ev.emit("custom"); // nic się nie wydarzy

    // DO ZROBIENIA!
    // Docelowe użycie klasy Database
    var db = new Database("db://localhost:3000"); // fikcyjny adres

    db.on("connect", function (url) {
        console.log("Połączenie z bazą pod adresem " + url + " zostało ustanowione.");
        content.innerHTML += "<br> Połączenie z bazą pod adresem " + url + " zostało ustanowione.";
    });

    db.on("disconnect", function (url) {
        console.log("Połączenie z bazą pod adresem " + url + " zostało zakończone.");
        content.innerHTML += "<br> Połączenie z bazą pod adresem " + url + " zostało zakończone.";
    });

    db.connect();

    // po 5 sekundach rozłączamy się
    setTimeout(function () {
        db.disconnect();
    }, 5000);

})  


// // Użycie EventEmittera
// var ev = new EventEmitter();

// ev.on("hello", function(message) {
//     console.log("Witaj " + message + "!");
// });

// ev.on("hello", function(message) {
//     console.log("Siema " + message + ".");
// });

// ev.on("goodbye", function() {
//     console.log("Do widzenia!");
// });

// ev.emit("hello", "Marek");
// ev.emit("goodbye");
// ev.emit("custom"); // nic się nie wydarzy

// // DO ZROBIENIA!
// // Docelowe użycie klasy Database
// var db = new Database("db://localhost:3000"); // fikcyjny adres

// db.on("connect", function(url) {
//     console.log("Połączenie z bazą pod adresem " + url + " zostało ustanowione.");
// });

// db.on("disconnect", function(url) {
//     console.log("Połączenie z bazą pod adresem " + url + " zostało zakończone.");
// });

// db.connect();

// // po 5 sekundach rozłączamy się
// setTimeout(function() {
//     db.disconnect();
// }, 5000);