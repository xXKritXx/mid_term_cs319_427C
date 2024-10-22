$(document).ready(function () {
    $('#studentForm').on('submit', function (event) {
        event.preventDefault(); 
        const studentName = $('#studentName').val(); 
        $('#studentList').append(`<li>${studentName}</li>`); 
        alert(`New student added: ${studentName}`); 
        $('#studentName').val(''); 
    });
});
