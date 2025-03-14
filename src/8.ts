function getRandomTsCode() {
  const codes = ["0123456789", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  let code = "";
  for (let i = 0; i < 5; i++) {
    code += codes[Math.floor(Math.random() * 2)];
  }
  return code;
}
