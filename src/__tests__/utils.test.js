import { isPalindrome } from "../utils";

describe('isPalindrome', () => {
    it("should return true if a word is a palindrome", () => {
        const word = "civic";
        const isTrue = isPalindrome(word);
        expect(isTrue).toEqual(true);
    });

    it("should return false if a word is not a palindrome", () => {
        const word = "hello";
        const isTrue = isPalindrome(word);
        expect(isTrue).toEqual(false);
    });

    it("should return false for an empty string", () => {
        const word = "";
        const isTrue = isPalindrome(word);
        expect(isTrue).toEqual(false);
    });
});
