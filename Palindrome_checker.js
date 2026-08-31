const text = prompt("Enter a word or sentence:");

const cleanedText = text
  .toLowerCase()
  .replace(/[^a-z0-9]/g, "");

const reversedText = cleanedText
  .split("")
  .reverse()
  .join("");

if (cleanedText === reversedText) {
  console.log(`${text} is a Palindrome`);
} else {
  console.log(`${text} is not a Palindrome`);
}
