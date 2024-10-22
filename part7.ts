function processStudentArray(students: Student[]): void {
    const topStudents = students.filter(student => student.getAverageGrade() > 75);
    console.log('Top Students:', topStudents.map(s => s.name));

    const studentNames = students.map(student => student.name);
    console.log('Student Names:', studentNames);

    const totalGrades = students.reduce((total, student) => total + student.grades.length, 0);
    console.log('Total Grades:', totalGrades);
}
