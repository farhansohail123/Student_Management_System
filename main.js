class school {
    addstudents(stdobj) {
        this.students.push(stdobj);
    }
    addsTeacher(techobj) {
        this.Teachers.push(techobj);
    }
    constructor(name) {
        this.students = [];
        this.Teachers = [];
        this.name = name;
    }
}
class student {
    constructor(name, age, schoolname) {
        this.name = name;
        this.age = age;
        this.schoolname = schoolname;
    }
}
class Teacher {
    constructor(name, age, schoolname) {
        this.name = name;
        this.age = age;
        this.schoolname = schoolname;
    }
}
class Teachers extends student {
}
let school1 = new school("Alpha");
let school2 = new school("Saint");
let s1 = new student("Bilal", 30, school1.name);
let s2 = new student("Farhan", 40, school1.name);
let s3 = new student("Ammar", 20, school2.name);
let t1 = new Teacher("Arahad", 50, school2.name);
let t2 = new Teacher("Ali", 60, school1.name);
let t3 = new Teacher("Ratan", 70, school1.name);
school1.addstudents(s1);
school1.addstudents(s2);
school2.addstudents(s3);
school2.addsTeacher(t1);
school1.addsTeacher(t2);
school1.addsTeacher(t3);
console.log(school1);
console.log(school2);
export {};
