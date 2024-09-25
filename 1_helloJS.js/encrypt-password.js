// Viết chương trình chuyển tin nhắn sang mật mã theo bảng :
// const a="abcdefghijklmnopqrstuvwxyz"
// const b="zxcvbnmasdfghjklqwertyuiop"

function encryprPassword(password) {
  const a = "abcdefghijklmnopqrstuvwxyz";
  const b = "zxcvbnmasdfghjklqwertyuiop";

  let result = "";
  let char = password.toLowerCase();

  for (let i = 0; i < char.length; i++) {
    if (a.includes(char[i])) {
      let index = a.indexOf(char[i]);
      result += b[index];
    } else {
      result += char[i];
    }
  }
  return result;
}

let password = prompt(`Enter Password: `).trim();
let encryptResult = encryprPassword(password);

alert(`Password: ${password}
    Encrypt: ${encryptResult}`);
