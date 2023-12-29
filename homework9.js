function Student(firstName, lastName, birthYear, courses) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.courses = courses;
}

Student.prototype = {
    addGrade: function (courseName, grade) {
        const course = this.getCourse(courseName);
        if (course) {
            course.grades.push(grade);
        }
    },
    addAttendance: function (courseName, attended) {
        const course = this.getCourse(courseName);
        if (course) {
            course.attendance.push(attended);
        }
    },
    getAverageGrade: function (courseName) {
        const course = this.getCourse(courseName);
        if (course && course.grades.length > 0) {
            const sum = course.grades.reduce((total, grade) => total + grade, 0);
            return sum / course.grades.length;
        }
        return 0;
    },
    getAttendanceAverage: function (courseName) {
        const course = this.getCourse(courseName);
        if (course && course.attendance.length > 0) {
            const attendedClasses = course.attendance.filter(attended => attended).length;
            return attendedClasses / course.attendance.length;
        }
        return 0;
    },
    getNumberOfClasses: function (courseName) {
        const course = this.getCourse(courseName);
        return course ? course.attendance.length : 0;
    },
    changeCourse: function (newCourse) {
        if (!this.isEnrolledInCourse(newCourse.name)) {
            this.courses.push(newCourse);
        }
    },
    isEnrolledInCourse: function (courseName) {
        return this.courses.some(course => course.name === courseName);
    },
    getCourse: function (courseName) {
        return this.courses.find(course => course.name === courseName);
    },
    getInfo: function () {
        return `Student: ${this.firstName} ${this.lastName}, Birth Year: ${this.birthYear}`;
    },
    getRating: function(courseName) {
        const course = this.getCourse(courseName);
        if (course && course.attendance.length > 0) {
            return this.getAverageGrade * this.getAttendanceAverage;
        }
        return 0;
    }
};

function Course(name, numberOfClasses) {
    this.name = name;
    this.numberOfClasses = numberOfClasses;
    this.grades = [];
    this.attendance = [];
}

function Group() {
    this.students = [];
}

Group.prototype = {
    addStudent: function (student) {
        this.students.push(student);
    },
    removeStudent: function (student) {
        const index = this.students.indexOf(student);
        if (index !== -1) {
            this.students.splice(index, 1);
        }
    },
    getRating: function (courseName) {
        const sortedByRatingStudents = this.students
          .map(student => ({ student, rating: student.getAverageGrade(courseName) * student.getAttendanceAverage(courseName) }))
          .sort((a, b) => b.rating - a.rating);
      
        console.log(sortedByRatingStudents.map(({ student, rating }) => `Student: ${student.firstName} ${student.lastName}, Course: ${courseName}, Rating: ${rating}`));
      
        return sortedByRatingStudents;
      },
};


const jsCourse = new Course('Java Script', 10);
const pythonCourse = new Course('Python', 8);
const javaCourse = new Course('Java', 12);

console.log(jsCourse);

const student1 = new Student('Микола', 'Бондаренко', 1990, [jsCourse, pythonCourse]);
const student2 = new Student('Василь', 'Марченко', 1991, [pythonCourse]);
const student3 = new Student('Петро', 'Непийпиво', 1989, [javaCourse]);

const group = new Group();
group.addStudent(student1);
group.addStudent(student2);
group.addStudent(student3);

student1.addGrade('Java Script', 85);
student1.addAttendance('Java Script', true);
student2.addGrade('Python', 90);
student2.addAttendance('Python', false);
student3.addGrade('Java', 78);
student3.addAttendance('Java', true);

console.log(student1.getAverageGrade('Java Script'));
console.log(student2.getAttendanceAverage('Python'));

console.log(group.getRating('Java Script'));