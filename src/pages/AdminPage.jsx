import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const navigate = useNavigate();

  // All semesters data
  const semestersData = {
    I: {
      programme: "BACHELOR OF SCIENCE – INFORMATION TECHNOLOGY",
      semester: "I",
      subjects: [
        {
          code: "BIT101",
          title: "COMPUTER ORGANIZATION AND ARCHITECTURE",
          theoryMax: 60,
          theoryMin: 24,
          theoryObt: "",
          internalMax: 40,
          internalMin: 16,
          internalObt: "",
          practicalCode: "BIT1P1",
          practicalTitle: "COMPUTER ORGANIZATION AND ARCHITECTURE-PRACTICAL",
          practicalMax: 30,
          practicalMin: 12,
          practicalObt: "",
          practicalInternalMax: 20,
          practicalInternalMin: 8,
          practicalInternalObt: "",
          credits: 2,
        },
        {
          code: "BIT102",
          title: "PROGRAMMING IN C",
          theoryMax: 60,
          theoryMin: 24,
          theoryObt: "",
          internalMax: 40,
          internalMin: 16,
          internalObt: "",
          practicalCode: "BIT1P2",
          practicalTitle: "PROGRAMMING IN C-PRACTICAL",
          practicalMax: 30,
          practicalMin: 12,
          practicalObt: "",
          practicalInternalMax: 20,
          practicalInternalMin: 8,
          practicalInternalObt: "",
          credits: 2,
        },
        {
          code: "BIT103",
          title: "DATABASE MANAGEMENT SYSTEMS",
          theoryMax: 60,
          theoryMin: 24,
          theoryObt: "",
          internalMax: 40,
          internalMin: 16,
          internalObt: "",
          practicalCode: "BIT1P3",
          practicalTitle: "DATABASE MANAGEMENT SYSTEMS-PRACTICAL",
          practicalMax: 30,
          practicalMin: 12,
          practicalObt: "",
          practicalInternalMax: 20,
          practicalInternalMin: 8,
          practicalInternalObt: "",
          credits: 2,
        },
        {
          code: "BIT104",
          title: "MATHEMATICS FOR COMPUTING",
          theoryMax: 60,
          theoryMin: 24,
          theoryObt: "",
          internalMax: 40,
          internalMin: 16,
          internalObt: "",
          practicalCode: "BIT1P4",
          practicalTitle: "MATHEMATICS FOR COMPUTING-PRACTICAL",
          practicalMax: 30,
          practicalMin: 12,
          practicalObt: "",
          practicalInternalMax: 20,
          practicalInternalMin: 8,
          practicalInternalObt: "",
          credits: 2,
        },
        {
          code: "BIT105",
          title: "DIGITAL SYSTEMS",
          theoryMax: 60,
          theoryMin: 24,
          theoryObt: "",
          internalMax: 40,
          internalMin: 16,
          internalObt: "",
          practicalCode: "BIT1P5",
          practicalTitle: "DIGITAL SYSTEMS-PRACTICAL",
          practicalMax: 30,
          practicalMin: 12,
          practicalObt: "",
          practicalInternalMax: 20,
          practicalInternalMin: 8,
          practicalInternalObt: "",
          credits: 2,
        },
      ],
    },
    II: {
      programme: "BACHELOR OF SCIENCE – INFORMATION TECHNOLOGY",
      semester: "II",
      subjects: [
        {
          code: "BIT201",
          title: "OBJECT ORIENTED PROGRAMMING WITH C++",
          theoryMax: 60,
          theoryMin: 24,
          theoryObt: "",
          internalMax: 40,
          internalMin: 16,
          internalObt: "",
          practicalCode: "BIT2P1",
          practicalTitle: "OBJECT ORIENTED PROGRAMMING WITH C++-PRACTICAL",
          practicalMax: 30,
          practicalMin: 12,
          practicalObt: "",
          practicalInternalMax: 20,
          practicalInternalMin: 8,
          practicalInternalObt: "",
          credits: 2,
        },
        {
          code: "BIT202",
          title: "MICROPROCESSOR ARCHITECTURE",
          theoryMax: 60,
          theoryMin: 24,
          theoryObt: "",
          internalMax: 40,
          internalMin: 16,
          internalObt: "",
          practicalCode: "BIT2P2",
          practicalTitle: "MICROPROCESSOR ARCHITECTURE-PRACTICAL",
          practicalMax: 30,
          practicalMin: 12,
          practicalObt: "",
          practicalInternalMax: 20,
          practicalInternalMin: 8,
          practicalInternalObt: "",
          credits: 2,
        },
        {
          code: "BIT203",
          title: "WEB PROGRAMMING",
          theoryMax: 60,
          theoryMin: 24,
          theoryObt: "",
          internalMax: 40,
          internalMin: 16,
          internalObt: "",
          practicalCode: "BIT2P3",
          practicalTitle: "WEB PROGRAMMING-PRACTICAL",
          practicalMax: 30,
          practicalMin: 12,
          practicalObt: "",
          practicalInternalMax: 20,
          practicalInternalMin: 8,
          practicalInternalObt: "",
          credits: 2,
        },
        {
          code: "BIT204",
          title: "DISCRETE MATHEMATICS",
          theoryMax: 60,
          theoryMin: 24,
          theoryObt: "",
          internalMax: 40,
          internalMin: 16,
          internalObt: "",
          practicalCode: "BIT2P4",
          practicalTitle: "DISCRETE MATHEMATICS-PRACTICAL",
          practicalMax: 30,
          practicalMin: 12,
          practicalObt: "",
          practicalInternalMax: 20,
          practicalInternalMin: 8,
          practicalInternalObt: "",
          credits: 2,
        },
        {
          code: "BIT205",
          title: "GREEN COMPUTING",
          theoryMax: 60,
          theoryMin: 24,
          theoryObt: "",
          internalMax: 40,
          internalMin: 16,
          internalObt: "",
          practicalCode: "BIT2P5",
          practicalTitle: "GREEN COMPUTING-PRACTICAL",
          practicalMax: 30,
          practicalMin: 12,
          practicalObt: "",
          practicalInternalMax: 20,
          practicalInternalMin: 8,
          practicalInternalObt: "",
          credits: 2,
        },
      ],
    },
    III: {
      programme: "BACHELOR OF SCIENCE – INFORMATION TECHNOLOGY",
      semester: "III",
      subjects: [
        {
          code: "BIT301",
          title: "DATA STRUCTURES AND ALGORITHMS",
          theoryMax: 60,
          theoryMin: 24,
          theoryObt: "",
          internalMax: 40,
          internalMin: 16,
          internalObt: "",
          practicalCode: "BIT3P1",
          practicalTitle: "DATA STRUCTURES AND ALGORITHMS-PRACTICAL",
          practicalMax: 30,
          practicalMin: 12,
          practicalObt: "",
          practicalInternalMax: 20,
          practicalInternalMin: 8,
          practicalInternalObt: "",
          credits: 2,
        },
        {
          code: "BIT302",
          title: "COMPUTER NETWORKS",
          theoryMax: 60,
          theoryMin: 24,
          theoryObt: "",
          internalMax: 40,
          internalMin: 16,
          internalObt: "",
          practicalCode: "BIT3P2",
          practicalTitle: "COMPUTER NETWORKS-PRACTICAL",
          practicalMax: 30,
          practicalMin: 12,
          practicalObt: "",
          practicalInternalMax: 20,
          practicalInternalMin: 8,
          practicalInternalObt: "",
          credits: 2,
        },
        {
          code: "BIT303",
          title: "OPERATING SYSTEMS",
          theoryMax: 60,
          theoryMin: 24,
          theoryObt: "",
          internalMax: 40,
          internalMin: 16,
          internalObt: "",
          practicalCode: "BIT3P3",
          practicalTitle: "OPERATING SYSTEMS-PRACTICAL",
          practicalMax: 30,
          practicalMin: 12,
          practicalObt: "",
          practicalInternalMax: 20,
          practicalInternalMin: 8,
          practicalInternalObt: "",
          credits: 2,
        },
        {
          code: "BIT304",
          title: "JAVA PROGRAMMING",
          theoryMax: 60,
          theoryMin: 24,
          theoryObt: "",
          internalMax: 40,
          internalMin: 16,
          internalObt: "",
          practicalCode: "BIT3P4",
          practicalTitle: "JAVA PROGRAMMING-PRACTICAL",
          practicalMax: 30,
          practicalMin: 12,
          practicalObt: "",
          practicalInternalMax: 20,
          practicalInternalMin: 8,
          practicalInternalObt: "",
          credits: 2,
        },
        {
          code: "BIT305",
          title: "SOFTWARE ENGINEERING",
          theoryMax: 60,
          theoryMin: 24,
          theoryObt: "",
          internalMax: 40,
          internalMin: 16,
          internalObt: "",
          practicalCode: "BIT3P5",
          practicalTitle: "SOFTWARE ENGINEERING-PRACTICAL",
          practicalMax: 30,
          practicalMin: 12,
          practicalObt: "",
          practicalInternalMax: 20,
          practicalInternalMin: 8,
          practicalInternalObt: "",
          credits: 2,
        },
      ],
    },
    IV: {
      programme: "BACHELOR OF SCIENCE – INFORMATION TECHNOLOGY",
      semester: "IV",
      subjects: [
        {
          code: "BIT401",
          title: "PYTHON PROGRAMMING",
          theoryMax: 60,
          theoryMin: 24,
          theoryObt: "",
          internalMax: 40,
          internalMin: 16,
          internalObt: "",
          practicalCode: "BIT4P1",
          practicalTitle: "PYTHON PROGRAMMING-PRACTICAL",
          practicalMax: 30,
          practicalMin: 12,
          practicalObt: "",
          practicalInternalMax: 20,
          practicalInternalMin: 8,
          practicalInternalObt: "",
          credits: 2,
        },
        {
          code: "BIT402",
          title: "COMPUTER GRAPHICS",
          theoryMax: 60,
          theoryMin: 24,
          theoryObt: "",
          internalMax: 40,
          internalMin: 16,
          internalObt: "",
          practicalCode: "BIT4P2",
          practicalTitle: "COMPUTER GRAPHICS-PRACTICAL",
          practicalMax: 30,
          practicalMin: 12,
          practicalObt: "",
          practicalInternalMax: 20,
          practicalInternalMin: 8,
          practicalInternalObt: "",
          credits: 2,
        },
        {
          code: "BIT403",
          title: "ADVANCED DATABASE CONCEPTS",
          theoryMax: 60,
          theoryMin: 24,
          theoryObt: "",
          internalMax: 40,
          internalMin: 16,
          internalObt: "",
          practicalCode: "BIT4P3",
          practicalTitle: "ADVANCED DATABASE CONCEPTS-PRACTICAL",
          practicalMax: 30,
          practicalMin: 12,
          practicalObt: "",
          practicalInternalMax: 20,
          practicalInternalMin: 8,
          practicalInternalObt: "",
          credits: 2,
        },
        {
          code: "BIT404",
          title: "MOBILE APPLICATION DEVELOPMENT",
          theoryMax: 60,
          theoryMin: 24,
          theoryObt: "",
          internalMax: 40,
          internalMin: 16,
          internalObt: "",
          practicalCode: "BIT4P4",
          practicalTitle: "MOBILE APPLICATION DEVELOPMENT-PRACTICAL",
          practicalMax: 30,
          practicalMin: 12,
          practicalObt: "",
          practicalInternalMax: 20,
          practicalInternalMin: 8,
          practicalInternalObt: "",
          credits: 2,
        },
        {
          code: "BIT405",
          title: "IT SECURITY AND MANAGEMENT",
          theoryMax: 60,
          theoryMin: 24,
          theoryObt: "",
          internalMax: 40,
          internalMin: 16,
          internalObt: "",
          practicalCode: "BIT4P5",
          practicalTitle: "IT SECURITY AND MANAGEMENT-PRACTICAL",
          practicalMax: 30,
          practicalMin: 12,
          practicalObt: "",
          practicalInternalMax: 20,
          practicalInternalMin: 8,
          practicalInternalObt: "",
          credits: 2,
        },
      ],
    },
    V: {
      programme: "BACHELOR OF SCIENCE – INFORMATION TECHNOLOGY",
      semester: "V",
      subjects: [
        {
          code: "BIT501",
          title: "ARTIFICIAL INTELLIGENCE",
          theoryMax: 60,
          theoryMin: 24,
          theoryObt: "",
          internalMax: 40,
          internalMin: 16,
          internalObt: "",
          practicalCode: "BIT5P1",
          practicalTitle: "ARTIFICIAL INTELLIGENCE-PRACTICAL",
          practicalMax: 30,
          practicalMin: 12,
          practicalObt: "",
          practicalInternalMax: 20,
          practicalInternalMin: 8,
          practicalInternalObt: "",
          credits: 2,
        },
        {
          code: "BIT502",
          title: "WEB TECHNOLOGIES",
          theoryMax: 60,
          theoryMin: 24,
          theoryObt: "",
          internalMax: 40,
          internalMin: 16,
          internalObt: "",
          practicalCode: "BIT5P2",
          practicalTitle: "WEB TECHNOLOGIES-PRACTICAL",
          practicalMax: 30,
          practicalMin: 12,
          practicalObt: "",
          practicalInternalMax: 20,
          practicalInternalMin: 8,
          practicalInternalObt: "",
          credits: 2,
        },
        {
          code: "BIT503",
          title: "INTERNET OF THINGS",
          theoryMax: 60,
          theoryMin: 24,
          theoryObt: "",
          internalMax: 40,
          internalMin: 16,
          internalObt: "",
          practicalCode: "BIT5P3",
          practicalTitle: "INTERNET OF THINGS-PRACTICAL",
          practicalMax: 30,
          practicalMin: 12,
          practicalObt: "",
          practicalInternalMax: 20,
          practicalInternalMin: 8,
          practicalInternalObt: "",
          credits: 2,
        },
        {
          code: "BIT504",
          title: "DATA SCIENCE",
          theoryMax: 60,
          theoryMin: 24,
          theoryObt: "",
          internalMax: 40,
          internalMin: 16,
          internalObt: "",
          practicalCode: "BIT5P4",
          practicalTitle: "DATA SCIENCE-PRACTICAL",
          practicalMax: 30,
          practicalMin: 12,
          practicalObt: "",
          practicalInternalMax: 20,
          practicalInternalMin: 8,
          practicalInternalObt: "",
          credits: 2,
        },
        {
          code: "BIT505",
          title: "CLOUD COMPUTING",
          theoryMax: 60,
          theoryMin: 24,
          theoryObt: "",
          internalMax: 40,
          internalMin: 16,
          internalObt: "",
          practicalCode: "BIT5P5",
          practicalTitle: "CLOUD COMPUTING-PRACTICAL",
          practicalMax: 30,
          practicalMin: 12,
          practicalObt: "",
          practicalInternalMax: 20,
          practicalInternalMin: 8,
          practicalInternalObt: "",
          credits: 2,
        },
      ],
    },
    VI: {
      programme: "BACHELOR OF SCIENCE – INFORMATION TECHNOLOGY",
      semester: "VI",
      subjects: [
        {
          code: "BIT601",
          title: "DISTRIBUTED SYSTEMS",
          theoryMax: 60,
          theoryMin: 24,
          theoryObt: "",
          internalMax: 40,
          internalMin: 16,
          internalObt: "",
          practicalCode: "BIT6P1",
          practicalTitle: "DISTRIBUTED SYSTEMS-PRACTICAL",
          practicalMax: 30,
          practicalMin: 12,
          practicalObt: "",
          practicalInternalMax: 20,
          practicalInternalMin: 8,
          practicalInternalObt: "",
          credits: 2,
        },
        {
          code: "BIT602",
          title: "MACHINE LEARNING",
          theoryMax: 60,
          theoryMin: 24,
          theoryObt: "",
          internalMax: 40,
          internalMin: 16,
          internalObt: "",
          practicalCode: "BIT6P2",
          practicalTitle: "MACHINE LEARNING-PRACTICAL",
          practicalMax: 30,
          practicalMin: 12,
          practicalObt: "",
          practicalInternalMax: 20,
          practicalInternalMin: 8,
          practicalInternalObt: "",
          credits: 2,
        },
        {
          code: "BIT603",
          title: "BLOCKCHAIN TECHNOLOGY",
          theoryMax: 60,
          theoryMin: 24,
          theoryObt: "",
          internalMax: 40,
          internalMin: 16,
          internalObt: "",
          practicalCode: "BIT6P3",
          practicalTitle: "BLOCKCHAIN TECHNOLOGY-PRACTICAL",
          practicalMax: 30,
          practicalMin: 12,
          practicalObt: "",
          practicalInternalMax: 20,
          practicalInternalMin: 8,
          practicalInternalObt: "",
          credits: 2,
        },
        {
          code: "BIT604",
          title: "INFORMATION SECURITY",
          theoryMax: 60,
          theoryMin: 24,
          theoryObt: "",
          internalMax: 40,
          internalMin: 16,
          internalObt: "",
          practicalCode: "BIT6P4",
          practicalTitle: "INFORMATION SECURITY-PRACTICAL",
          practicalMax: 30,
          practicalMin: 12,
          practicalObt: "",
          practicalInternalMax: 20,
          practicalInternalMin: 8,
          practicalInternalObt: "",
          credits: 2,
        },
        {
          code: "BIT605",
          title: "PROJECT WORK",
          theoryMax: 60,
          theoryMin: 24,
          theoryObt: "",
          internalMax: 40,
          internalMin: 16,
          internalObt: "",
          practicalCode: "BIT6P5",
          practicalTitle: "PROJECT WORK-IMPLEMENTATION",
          practicalMax: 30,
          practicalMin: 12,
          practicalObt: "",
          practicalInternalMax: 20,
          practicalInternalMin: 8,
          practicalInternalObt: "",
          credits: 2,
        },
      ],
    },
  };

  // State for selected semester
  const [selectedSemester, setSelectedSemester] = useState("II");

  // Initialize student data with the default semester (II)
  const [studentData, setStudentData] = useState({
    name: "",
    prn: "",
    studentPin: "",
    seatNo: "",
    programme: semestersData[selectedSemester].programme,
    semester: semestersData[selectedSemester].semester,
    monthYear: "",
    subjects: [...semestersData[selectedSemester].subjects],
    sgpa: 0,
    cgpa: 0,
    totalMarksMax: 750,
    totalMarksObtained: 0,
    icg: 0,
    creditEarned: 0,
    remarks: "",
  });

  // Handle semester change
  const handleSemesterChange = (e) => {
    const newSemester = e.target.value;
    setSelectedSemester(newSemester);

    setStudentData({
      ...studentData,
      programme: semestersData[newSemester].programme,
      semester: semestersData[newSemester].semester,
      subjects: [...semestersData[newSemester].subjects],
      sgpa: 0,
      cgpa: 0,
      totalMarksObtained: 0,
      icg: 0,
      creditEarned: 0,
      remarks: "",
    });
  };

  const handleInputChange = (e, index, field, isPractical = false) => {
    const value = parseFloat(e.target.value);
    
    // Early return if value is negative or NaN
    if (isNaN(value) || value < 0) {
      e.target.value = "";
      return;
    }
    
    // Get the maximum allowed marks for this field
    let maxMarks;
    if (field === "internalObt") maxMarks = studentData.subjects[index].internalMax;
    else if (field === "theoryObt") maxMarks = studentData.subjects[index].theoryMax;
    else if (field === "practicalInternalObt") maxMarks = studentData.subjects[index].practicalInternalMax;
    else if (field === "practicalObt") maxMarks = studentData.subjects[index].practicalMax;
    
    // Ensure value doesn't exceed maximum
    if (value > maxMarks) {
      e.target.value = maxMarks;
      return;
    }
    
    // Update the studentData state if validation passes
    const updatedSubjects = [...studentData.subjects];
    updatedSubjects[index][field] = value;
    setStudentData({
      ...studentData,
      subjects: updatedSubjects
    });
  };

  const getGradeAndPoints = (totalMarks, maxMarks) => {
    const percentage = (totalMarks / maxMarks) * 100;

    if (percentage >= 75) return { grade: "A+", points: 9 };
    if (percentage >= 70) return { grade: "A", points: 8 };
    if (percentage >= 65) return { grade: "B+", points: 7 };
    if (percentage >= 60) return { grade: "B", points: 6 };
    if (percentage >= 55) return { grade: "C+", points: 5 };
    if (percentage >= 50) return { grade: "C", points: 4 };
    if (percentage >= 45) return { grade: "D", points: 3 };
    if (percentage >= 40) return { grade: "E", points: 2 };
    return { grade: "F", points: 0 };
  };

  // Function to calculate SGPA and other metrics
  const calculateResults = () => {
    let totalCredits = 0;
    let totalCG = 0;
    let totalICG = 0;
    let totalMarksObtained = 0;
    let allPassed = true;

    const newSubjects = studentData.subjects.map((subject) => {
      // Theory calculations
      const theoryTotal = Number(subject.theoryObt) || 0;
      const internalTotal = Number(subject.internalObt) || 0;
      const theoryResult = theoryTotal + internalTotal;
      const theoryGradeInfo = getGradeAndPoints(
        theoryResult,
        subject.theoryMax + subject.internalMax
      );

      // Practical calculations
      const practicalTotal = Number(subject.practicalObt) || 0;
      const practicalInternalTotal = Number(subject.practicalInternalObt) || 0;
      const practicalResult = practicalTotal + practicalInternalTotal;
      const practicalGradeInfo = getGradeAndPoints(
        practicalResult,
        subject.practicalMax + subject.practicalInternalMax
      );

      // Check if passed both theory and practical
      const theoryPassed =
        theoryTotal >= subject.theoryMin &&
        internalTotal >= subject.internalMin;
      const practicalPassed =
        practicalTotal >= subject.practicalMin &&
        practicalInternalTotal >= subject.practicalInternalMin;

      if (!theoryPassed || !practicalPassed) {
        allPassed = false;
      }

      // Credits calculation
      const gradePoints =
        (theoryGradeInfo.points + practicalGradeInfo.points) / 2;
      const creditPoints = gradePoints * subject.credits;
      totalCG += creditPoints;
      totalICG += subject.credits * 10; // Maximum possible CG
      totalCredits += subject.credits;

      // Add to total marks obtained
      totalMarksObtained += theoryResult + practicalResult;

      return {
        ...subject,
        theoryGrade: theoryGradeInfo.grade,
        theoryPoints: theoryGradeInfo.points,
        practicalGrade: practicalGradeInfo.grade,
        practicalPoints: practicalGradeInfo.points,
        creditPoints: creditPoints,
        theoryResult,
        practicalResult,
      };
    });

    const sgpa = totalCredits > 0 ? (totalCG / totalCredits).toFixed(2) : 0;
    const cgpa = sgpa; // For simplicity, CGPA = SGPA for this semester
    const icg = totalICG;
    const remarks = allPassed ? "SUCCESSFUL" : "UNSUCCESSFUL";
    const percentageObtained = (
      (totalMarksObtained / studentData.totalMarksMax) *
      100
    ).toFixed(2);

    setStudentData({
      ...studentData,
      subjects: newSubjects,
      sgpa,
      cgpa,
      icg,
      creditEarned: totalCredits * 2, // Each subject has 2 credits x 5 subjects = 10, and theory+practical = 20
      totalMarksObtained,
      remarks,
      percentageObtained,
    });
  };

  const handleSubmit = () => {
    calculateResults();
    setTimeout(() => {
      localStorage.setItem(studentData.prn, JSON.stringify(studentData));
      alert("Marksheet saved successfully!");
      navigate("/student");
    }, 100);
  };

  const validateMarks = (e, maxMarks) => {
    const value = parseFloat(e.target.value);
    
    // Check for negative values
    if (value < 0) {
      e.target.value = 0;
      return;
    }
    
    // Check for exceeding maximum marks
    if (value > maxMarks) {
      e.target.value = maxMarks;
      return;
    }
  };

  return <>
  <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4 text-center">Admin - Generate Marksheet</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <div>
        <label className="block text-sm font-medium mb-1">Programme</label>
        <input
          type="text"
          value={studentData.programme}
          className="w-full p-2 border rounded"
          onChange={(e) => setStudentData({ ...studentData, programme: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Semester</label>
        <select
          value={selectedSemester}
          onChange={handleSemesterChange}
          className="w-full p-2 border rounded"
        >
          <option value="I">Semester I</option>
          <option value="II">Semester II</option>
          <option value="III">Semester III</option>
          <option value="IV">Semester IV</option>
          <option value="V">Semester V</option>
          <option value="VI">Semester VI</option>
        </select>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      <div>
        <label className="block text-sm font-medium mb-1">Student Name</label>
        <input
          type="text"
          placeholder="Student Name"
          className="w-full p-2 border rounded"
          onChange={(e) => setStudentData({ ...studentData, name: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">PRN</label>
        <input
          type="text"
          placeholder="PRN"
          className="w-full p-2 border rounded"
          onChange={(e) => setStudentData({ ...studentData, prn: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Student PIN</label>
        <input
          type="text"
          placeholder="Student PIN"
          className="w-full p-2 border rounded"
          onChange={(e) => setStudentData({ ...studentData, studentPin: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Seat No.</label>
        <input
          type="text"
          placeholder="Seat No."
          className="w-full p-2 border rounded"
          onChange={(e) => setStudentData({ ...studentData, seatNo: e.target.value })}
        />
      </div>
    </div>
    
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">Month & Year of Exam</label>
      <input
        type="text"
        placeholder="e.g. MAR-23"
        className="w-full p-2 border rounded"
        onChange={(e) => setStudentData({ ...studentData, monthYear: e.target.value })}
      />
    </div>
    
    <h3 className="text-lg font-semibold mb-2">Course Marks</h3>
    
    <div className="overflow-x-auto">
      <table className="w-full border text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-2 py-1" rowSpan="2">Course Code</th>
            <th className="border px-2 py-1" rowSpan="2">Course Title</th>
            <th className="border px-2 py-1" colSpan="3">Internal Assessment</th>
            <th className="border px-2 py-1" colSpan="3">Semester End Examination</th>
          </tr>
          <tr className="bg-gray-200">
            <th className="border px-2 py-1">Max</th>
            <th className="border px-2 py-1">Min</th>
            <th className="border px-2 py-1">Obt</th>
            <th className="border px-2 py-1">Max</th>
            <th className="border px-2 py-1">Min</th>
            <th className="border px-2 py-1">Obt</th>
          </tr>
        </thead>
        <tbody>
          {studentData.subjects.map((subject, index) => (
            <>
              <tr key={`theory-${index}`}>
                <td className="border px-2 py-1">{subject.code}</td>
                <td className="border px-2 py-1">{subject.title}</td>
                <td className="border px-2 py-1 text-center">{subject.internalMax}</td>
                <td className="border px-2 py-1 text-center">{subject.internalMin}</td>
                <td className="border px-2 py-1">
                  <input
                    type="number"
                    className="w-full p-1 border"
                    min="0"
                    max={subject.internalMax}
                    onChange={(e) => handleInputChange(e, index, "internalObt")}
                    onBlur={(e) => validateMarks(e, subject.internalMax)}
                    onKeyPress={(e) => {
                      if (e.key === '-') e.preventDefault();
                    }}
                  />
                </td>
                <td className="border px-2 py-1 text-center">{subject.theoryMax}</td>
                <td className="border px-2 py-1 text-center">{subject.theoryMin}</td>
                <td className="border px-2 py-1">
                  <input
                    type="number"
                    className="w-full p-1 border"
                    min="0"
                    max={subject.theoryMax}
                    onChange={(e) => handleInputChange(e, index, "theoryObt")}
                    onBlur={(e) => validateMarks(e, subject.theoryMax)}
                    onKeyPress={(e) => {
                      if (e.key === '-') e.preventDefault();
                    }}
                  />
                </td>
              </tr>
              <tr key={`practical-${index}`}>
                <td className="border px-2 py-1">{subject.practicalCode}</td>
                <td className="border px-2 py-1">{subject.practicalTitle}</td>
                <td className="border px-2 py-1 text-center">{subject.practicalInternalMax}</td>
                <td className="border px-2 py-1 text-center">{subject.practicalInternalMin}</td>
                <td className="border px-2 py-1">
                  <input
                    type="number"
                    className="w-full p-1 border"
                    min="0"
                    max={subject.practicalInternalMax}
                    onChange={(e) => handleInputChange(e, index, "practicalInternalObt")}
                    onBlur={(e) => validateMarks(e, subject.practicalInternalMax)}
                    onKeyPress={(e) => {
                      if (e.key === '-') e.preventDefault();
                    }}
                  />
                </td>
                <td className="border px-2 py-1 text-center">{subject.practicalMax}</td>
                <td className="border px-2 py-1 text-center">{subject.practicalMin}</td>
                <td className="border px-2 py-1">
                  <input
                    type="number"
                    className="w-full p-1 border"
                    min="0" 
                    max={subject.practicalMax}
                    onChange={(e) => handleInputChange(e, index, "practicalObt")}
                    onBlur={(e) => validateMarks(e, subject.practicalMax)}
                    onKeyPress={(e) => {
                      if (e.key === '-') e.preventDefault();
                    }}
                  />
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
    
    <div className="mt-4">
      <button
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-medium"
        onClick={handleSubmit}
      >
        Generate Marksheet
      </button>
    </div>
    
    {studentData.totalMarksObtained > 0 && (
      <div className="mt-6 p-4 border rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Results Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p><strong>Total Marks:</strong> {studentData.totalMarksObtained}/{studentData.totalMarksMax}</p>
            <p><strong>Percentage:</strong> {studentData.percentageObtained}%</p>
          </div>
          <div>
            <p><strong>SGPA:</strong> {studentData.sgpa}</p>
            <p><strong>CGPA:</strong> {studentData.cgpa}</p>
          </div>
          <div>
            <p><strong>Credit Earned:</strong> {studentData.creditEarned}</p>
            <p><strong>Remarks:</strong> {studentData.remarks}</p>
          </div>
        </div>
      </div>
    )}
  </div>
</>;
};

export default AdminPage;