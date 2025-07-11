const repeatString = function(str, x) {
    newstr = "";
    if(x < 0) return "ERROR";
    for(let i = 0; i < x; i++){
        newstr += str;
    }
    return newstr;
};

// Do not edit below this line
module.exports = repeatString;
