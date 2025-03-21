import { useState } from "react";
import Marksheet from "../components/Marksheet";

const StudentPage = () => {
  const [prn, setPrn] = useState("");
  const [studentData, setStudentData] = useState(null);

  const fetchMarksheet = () => {
    const data = localStorage.getItem(prn);
    if (data) {
      setStudentData(JSON.parse(data));
    } else {
      alert("No marksheet found!");
    }
  };

  // Calculate totals and grades when student data is available
  const processedStudentData = studentData ? calculateResults(studentData) : null;

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">Student - View Marksheet</h2>
      <div className="flex gap-2 mb-4">
        <input 
          type="text" 
          placeholder="Enter PRN" 
          className="flex-1 p-2 border rounded" 
          value={prn}
          onChange={(e) => setPrn(e.target.value)} 
        />
        <button 
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
          onClick={fetchMarksheet}
        >
          View Marksheet
        </button>
      </div>

      {processedStudentData && <Marksheet student={processedStudentData} />}
    </div>
  );
};

// Function to calculate total marks, SGPA, CGPA, etc.
function calculateResults(student) {
  console.log(student)
  let totalMarksObtained = 0;
  let totalCredits = 0;
  let totalGradePoints = 0;

  // Process each subject
  student.subjects.forEach(subject => {
    // Calculate total marks for this subject
    const theoryTotal = parseInt(subject.theoryObt) + parseInt(subject.internalObt);
    const practicalTotal = parseInt(subject.practicalObt) + parseInt(subject.practicalInternalObt);
    const subjectTotal = theoryTotal + practicalTotal;
    
    // Add to total marks
    totalMarksObtained += subjectTotal;
    
    // Calculate grade points (simple calculation - can be adjusted as needed)
    const maxMarks = subject.theoryMax + subject.internalMax + subject.practicalMax + subject.practicalInternalMax;
    const percentage = (subjectTotal / maxMarks) * 100;
    
    // Simple grade point calculation (adjust according to your institution's grading system)
    let gradePoint = 0;
    if (percentage >= 90) gradePoint = 10;
    else if (percentage >= 80) gradePoint = 9;
    else if (percentage >= 70) gradePoint = 8;
    else if (percentage >= 60) gradePoint = 7;
    else if (percentage >= 50) gradePoint = 6;
    else if (percentage >= 40) gradePoint = 5;
    else gradePoint = 0;
    
    // Add to total grade points
    totalGradePoints += gradePoint * subject.credits;
    totalCredits += subject.credits;
  });

  // Calculate SGPA
  const sgpa = totalCredits > 0 ? (totalGradePoints / totalCredits).toFixed(2) : 0;
  
  // Set result status
  const allPassed = student.subjects.every(subject => 
    parseInt(subject.theoryObt) >= parseInt(subject.theoryMin) && 
    parseInt(subject.internalObt) >= parseInt(subject.internalMin) &&
    parseInt(subject.practicalObt) >= parseInt(subject.practicalMin) &&
    parseInt(subject.practicalInternalObt) >= parseInt(subject.practicalInternalMin)
  );
  console.log(allPassed)
  const remarks = allPassed ? "PASS" : "FAIL";

  // Return updated student data
  return {
    ...student,
    totalMarksObtained,
    sgpa: parseFloat(sgpa),
    cgpa: parseFloat(sgpa), // For simplicity, using SGPA as CGPA (in a real app, this would come from historical data)
    creditEarned: allPassed ? totalCredits : 0,
    remarks
  };
}

export default StudentPage;