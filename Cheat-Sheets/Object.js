

//# OBJECT

var student = {
  firstName: "Ankit",
  lastName: "Yadav",
  age: 18,
  fullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

student.age;
student.fullName;
