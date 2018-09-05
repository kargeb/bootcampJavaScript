function toBoolean(value){
    return Boolean(value);
}

var obj = {};

console.log( toBoolean(20), toBoolean(""), toBoolean(NaN), toBoolean("tekst"), toBoolean(0), toBoolean("false"), toBoolean(false), toBoolean(obj));  

