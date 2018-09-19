
(function(){
    
    if (typeof String.prototype.repeat) {
        console.log('Function named \"repeat\" already exist in JavaScript, use \"iterate\" function instead.');
    
        String.prototype.iterate = function (times) {
    
            try {
                if (typeof times === "number" && times >= 0) {
    
                    var text = "";
    
                    while (times) {
                        text += this;
                        times--;
                    }
    
                    return text;
    
                } else {
                    throw new Error("Wrong value! Only positive numbers are allowed.");
                }
    
            } catch (e) {
                console.log(e.message);
            }
    
        }
    
    } else {
        console.log("Function named \"repeat\" doesn't exist in JavaScript, so that you can use polyfill with the same name");
    
        String.prototype.repeat = function (times) {
    
            try {
    
                if (typeof times === "number" && times >= 0) {
    
                    var text = "";
    
                    while (times) {
                        text += this;
                        times--;
                    }
    
                    return text;
    
                } else {
                    throw new Error("Wrong value! Only positive numbers are allowed.");
                }
    
    
            } catch (e) {
                console.log(e.message);
            }
    
        }
    }
    
})();




