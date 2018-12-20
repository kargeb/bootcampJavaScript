
(function () {

    if (typeof String.prototype.repeat == "function") {

        String.prototype.repeatt = function (times) {

            try {
                if (typeof times === "number" && times >= 0) {

                    var text = "";
                    while (times) {
                        text += this;
                        times--;
                    }
                    return text;

                } else {
                    throw new RangeError("Invalid value");
                }
            } catch (e) {
                console.log(e.message);
            }
        }
    } else {

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
                    throw new RangeError("Invalid value");
                }
            } catch (e) {
                console.log(e.message);
            }
        }
    }
})();




