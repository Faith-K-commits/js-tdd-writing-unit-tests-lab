export function isPalindrome(word) {
    if (word === "") {
        return false;
    }
    let reversedWord = "";
    for(let i = word.length - 1; i >= 0; i--){
        reversedWord += word[i];
    }
    return reversedWord === word;
}
