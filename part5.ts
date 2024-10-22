function createBonusAdder(bonus: number): (grade: number) => number {
    return (grade: number) => grade + bonus; 
}


const bonusAdder = createBonusAdder(5);
const student = new Student("Alice", 20);
student.addGrade(80);
const updatedGrades = student.grades.map(bonusAdder); 
student.grades = updatedGrades;
