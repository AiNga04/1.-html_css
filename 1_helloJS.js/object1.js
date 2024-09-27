// Đối tượng student
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

// Hàm tạo Student
function Student(id, fullName, mssv, birthYear, city, country) {
  this.id = id;
  this.fullName = fullName;
  this.mssv = mssv;
  this.birthYear = birthYear;
  this.address = {
    city: city,
    country: country,
  };

  this.showInfo = function () {
    return `${this.id} ${this.fullName}`;
  };

  // Phương thức hiển thị thông tin
  this.displayInfo = function () {
    console.log(`ID: ${this.id}`);
    console.log(`Full Name: ${this.fullName}`);
    console.log(`MSSV: ${this.mssv}`);
    console.log(`Birth Year: ${this.birthYear}`);
    console.log(
      `Address: City: ${this.address.city}, Country: ${this.address.country}`
    );
  };
}

// Tạo đối tượng sinh viên mới bằng hàm tạo
const newStudent = new Student(
  1234,
  "Nguyễn Văn A",
  "MSSV123",
  2000,
  "Hà Nội",
  "Việt Nam"
);

// Hiển thị thông tin sinh viên mới
newStudent.displayInfo();

console.log(newStudent instanceof Student);

let arr = new Array();
console.log(arr);

console.log(Student.prototype);

// Định nghĩa phương thức calcAge trong prototype của Student
Student.prototype.calcAge = function () {
  let currentYear = new Date();
  return currentYear.getFullYear() - this.birthYear;
};

const sv = new Student(
  1234,
  "Nguyễn Văn A",
  "MSSV123",
  2000,
  "Hà Nội",
  "Việt Nam"
);

const age = sv.calcAge();
console.log(`Tuổi của sinh viên ${sv.fullName} là: ${age}`);
