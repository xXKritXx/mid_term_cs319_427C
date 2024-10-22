async function fetchStudentData(): Promise<void> {
    try {
        const response = await fetch('https://api.example.com/students'); 
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching student data:', error); 
    }
}
