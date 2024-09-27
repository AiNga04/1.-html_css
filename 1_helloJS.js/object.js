let arr = [];

console.log(typeof arr); // "object"

const student = {
  id: null,
  fullName: null,
  mssv: null,
  birthYear: null,
  address: {
    city: null,
    country: null,
  },

  getId: function () {
    return 2024 - this.id;
  },
  getFullName: function () {
    return this.fullName;
  },
  getMssv: function () {
    return this.mssv;
  },
  getBirthYear: function () {
    return this.birthYear;
  },
  getAddress: function () {
    return "City: " + this.address.city + " Country: " + this.address.country;
  },

  //   setId: function () {
  //     this.id = parseInt(prompt("Nhập id: "));
  //   },
  //   setFullName: function () {
  //     this.fullName = prompt("Nhập tên đầy đủ: ");
  //   },
  //   setMssv: function () {
  //     this.mssv = prompt("Nhập MSSV: ");
  //   },
  //   setBirthYear: function () {
  //     this.birthYear = parseInt(prompt("Nhập năm sinh: "));
  //   },
  //   setAddress: function () {
  //     this.address.city = prompt("Nhập thành phố: ");
  //     this.address.country = prompt("Nhập quốc gia: ");
  //   },

  // Các phương thức set trực tiếp giá trị mà không cần nhập từ prompt
  setId: function (id) {
    this.id = id;
  },
  setFullName: function (fullName) {
    this.fullName = fullName;
  },
  setMssv: function (mssv) {
    this.mssv = mssv;
  },
  setBirthYear: function (birthYear) {
    this.birthYear = birthYear;
  },
  setAddress: function (city, country) {
    this.address.city = city;
    this.address.country = country;
  },

  displayInfo: function () {
    console.log(`ID: ${this.id}`);
    console.log(`Full Name: ${this.fullName}`);
    console.log(`MSSV: ${this.mssv}`);
    console.log(`Birth Year: ${this.birthYear}`);
    console.log(`Address: ${this.getAddress()}`);
  },
};

// Sử dụng các phương thức để nhập thông tin sinh viên
// student.setId();
// student.setFullName();
// student.setMssv();
// student.setBirthYear();
// student.setAddress();

student.setId(1234);
student.setFullName("Nguyễn Văn A");
student.setMssv("MSSV123");
student.setBirthYear(2000);
student.setAddress("Hà Nội", "Việt Nam");

// Hiển thị thông tin sinh viên
student.displayInfo();
console.log(typeof student); // "object"
console.log(typeof student.id); // "number"
console.log(typeof student.address); // "object"
console.log(student);

console.log(student["fullName"]); // In ra giá trị thuộc tính fullName

// let inputKey = prompt(
//   "Nhập vào thông tin muốn truy xuất: (address, id, fullName, mssv,...)"
// );

let inputKey = "address";

if (inputKey in student) {
  console.log(student[inputKey]);
} else {
  console.log("inputKey không tồn tại");
}

// Thêm thuộc tính vào student
student.email = "Nga@dev.cc";
student["vip"] = "VIP10";
console.log(student);

delete student.vip;
console.log(student);

console.log("Keys:", Object.keys(student));
console.log("Values:", Object.values(student));
console.log("Entries:", Object.entries(student));

let target = { name: "Nga" };
let s1 = { num1: 1 };
let s2 = { num2: 2 };
Object.assign(target, s1, s2);
console.log(target);

let target2 = { ...s1, ...s2 };
console.log(target2);

if (target.hasOwnProperty("name")) {
  console.log(target.name); // "Nga"
} else {
  console.log("Không có name");
}

//không cho thêm xoá sửa
console.log(target);
Object.freeze(target);
delete target.num1;
console.log(target);

let a = { a: 1, b: 2 };
console.log(a);
Object.seal(a);
delete a.a;
console.log(a);
a.a = 3;
console.log(a);

// Nên dùng const thay cho let để khai báo object
const ob = { name: "Nga", birthYear: 2004 };
console.log(ob);
ob.name = "NgaNga";
console.log(ob);
