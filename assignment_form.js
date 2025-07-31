window.addEventListener('DOMContentLoaded', () => {
  // Set current year on load
  const yearInput = document.getElementById('year');
  const semesterSelect = document.getElementById('semester');
  yearInput.value = new Date().getFullYear();

  semesterSelect.addEventListener('change', () => {
    yearInput.value = new Date().getFullYear();
  });

  // Back button
  document.getElementById('backBtn').addEventListener('click', () => {
    window.history.back();
  });

  // Initialize flatpickr on submissionDate with professional date format
  flatpickr("#submissionDate", {
    dateFormat: "d/m/Y",
    altInput: true,
    altFormat: "d/m/Y",
    allowInput: true,
    disableMobile: "true",
  });

  // Handle form submission
  document.getElementById('assignmentForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const data = {
      department: document.getElementById('department').value,
      faculty: document.getElementById('faculty').value,
      courseCode: document.getElementById('courseCode').value,
      courseTitle: document.getElementById('courseTitle').value,
      topic: document.getElementById('topic').value,
      submittedBy: {
        name: document.getElementById('studentName').value,
        studentId: document.getElementById('studentId').value,
        section: document.getElementById('section').value,
        semester: semesterSelect.value,
        year: yearInput.value,
        department: document.getElementById('submittedDepartment').value,
        university: document.getElementById('university').value,
      },
      submittedTo: {
        name: document.getElementById('submittedToName').value,
        designation: document.getElementById('designation').value,
        department: document.getElementById('submittedToDepartment').value,
        university: document.getElementById('submittedToUniversity').value,
      },
      submissionDate: document.getElementById('submissionDate').value,
    };

    sessionStorage.setItem('assignmentData', JSON.stringify(data));
    window.location.href = 'assignment_preview.html';
  });
});
