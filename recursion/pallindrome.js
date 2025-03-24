const palindrome = (string) => {
  if (string.length === 0) {
    return true;
  }
  return (
    string[0] === string[string.length - 1] &&
    palindrome(string.slice(1, string.length - 1))
  );
};

console.log(palindrome("ABCCBAB"));
