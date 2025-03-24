const printName = (username, times) => {
  if (times <= 0) {
    return;
  }
  console.log(username);
  return printName(username, times - 1);
};

printName("name",5)