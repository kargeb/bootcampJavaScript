function EventEmitter() {

    this.events = {};

}

EventEmitter.prototype.on = function (type, fn) {

    if (!type || !fn) return;

    this.events[type] = this.events[type] || [];
    this.events[type].push(fn);

}

EventEmitter.prototype.emit = function (type, data) {

    var fns = this.events[type];

    if (!fns || !fns.length) return;

    for (var i = 0; i < fns.length; i++) {
        fns[i](data);
    }

};

Database.prototype = Object.create(EventEmitter.prototype);
Database.prototype.constructor = Database;

function Database(url) {

    EventEmitter.call(this);

    this.url = url;

}

Database.prototype.connect = function () {

    // fikcyjne podłączenie do bazy

    this.emit("connect", this.url);

}

Database.prototype.disconnect = function () {

    // fikcyjne zakończenie połączenia z bazą

    this.emit("disconnect", this.url);

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