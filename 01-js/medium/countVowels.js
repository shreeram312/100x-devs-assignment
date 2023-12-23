/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Convert the string to lowercase to consider both uppercase and lowercase vowels
  const lowercaseStr = str.toLowerCase();

  // Define a set of vowels
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  // Initialize a counter for vowels
  let vowelCount = 0;

  // Iterate through each character in the string
  for (let i = 0; i < lowercaseStr.length; i++) {
    const char = lowercaseStr[i];

    // Check if the character is a vowel
    if (vowels.has(char)) {
      vowelCount++;
    }
  }

  return vowelCount;
}

module.exports = countVowels;
