function vowelLinks(str) {
    const words = str.split(" ");
    for (let i = 0; i < words.length - 1; i++) {
      const lastChar = words[i].slice(-1);
      const firstChar = words[i + 1].charAt(0);
      if (isVowel(lastChar) && isVowel(firstChar)) {
        return true;
      }
    }
    return false;
  }
  
  function isVowel(char) {
    return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
  }
  
  // Test cases
  console.log(vowelLinks("a very large appliance")); // ➞ true
  console.log(vowelLinks("go to edabit")); // ➞ true
  console.log(vowelLinks("an open fire")); // ➞ false
  console.log(vowelLinks("a sudden applause")); // ➞ false