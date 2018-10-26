import {EventEmitter} from "./EventEmitter.js";

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

export { Database };