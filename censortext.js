/**
 * Created by steve_davis01 on 09/02/2016.
 */
var censoredWords = ["sad", "bad", "mad"];
var customCensorWords = [];
function censor(inStr) {
    for (idx in censoredWords) {
        inStr = inStr.replace(censoredWords[idx], "****");
    }
    for (idx in customCensorWords) {
        inStr = inStr.replace(customCensorWords[idx], "****");
    }
    return inStr;
}
function addCensoredWord(word) {
    customCensorWords.push(word);
}
function getCensoredWords() {
    return censoredWords.concat(customCensorWords);
}
exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;
