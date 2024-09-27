class School {
  constructor(id, name, year) {
    this.id = id;
    this.name = name;
    this.year = year;
  }

  calcAge(crYear) {
    return crYear - this.year;
  }

  showInfo() {
    return `${this.id} - ${this.name} - Established in ${this.year}`;
  }
}

let spkt = new School(1, "SPKT", 1962);
console.log(spkt.showInfo());
console.log(`Age of School: ${spkt.calcAge(2024)} years`);

class Student extends School {
  constructor(id, name, year, section, major) {
    super(id, name, year);
    this.major = major;
    this.section = section;
  }

  showInfo() {
    return `Student ID: ${this.id}, Name: ${this.name}, Section: ${this.section}, Year: ${this.year}, Major: ${this.major}`;
  }

  calcAge(crYear) {
    return crYear - this.year;
  }
}

let sv = new Student(1, "Nga", 2004, 2023, "ATTT");
console.log(sv.showInfo());
console.log(`Student Age: ${sv.calcAge(2024)} years`);

class Teacher extends School {
  constructor(id, name, year, subject, experience) {
    super(id, name, year);
    this.subject = subject;
    this.experience = experience;
  }

  showInfo() {
    return `Teacher ID: ${this.id}, Name: ${this.name}, Subject: ${this.subject}, Experience: ${this.experience} years`;
  }

  calcSalary() {
    return 2000 + this.experience * 1000;
  }
}

let teacher = new Teacher(2, "John", 2000, "Mathematics", 10);
console.log(teacher.showInfo());
console.log(`Salary: $${teacher.calcSalary()}`);
