const repeatString = function(word, numTimes) {

let wordsTogether = "";

    for(let i = 0; i < numTimes; i++){
        wordsTogether += word;
    }

    return wordsTogether;
};

// Do not edit below this line
module.exports = repeatString;
