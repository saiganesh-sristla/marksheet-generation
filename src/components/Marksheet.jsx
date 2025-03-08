import { useRef } from "react";

const Marksheet = ({ student }) => {
  const marksheetRef = useRef(null);
  
  // Manual print function
  const handlePrint = () => {
    if (!marksheetRef.current) {
      console.error("Nothing to print - marksheetRef is null");
      return;
    }
    
    try {
      const printContent = marksheetRef.current;
      const printWindow = window.open('', '_blank');
      
      if (!printWindow) {
        alert("Please allow pop-ups to download the marksheet");
        return;
      }
      
      printWindow.document.write(`
        <html>
          <head>
            <title>Marksheet - ${student.name}</title>
            <style>
              body { font-family: Arial, sans-serif; padding: 20px; }
              table { border-collapse: collapse; width: 100%; margin-top: 15px; }
              table, th, td { border: 1px solid #ddd; }
              th, td { padding: 8px; text-align: left; }
              th { background-color: #f2f2f2; }
              .header { text-align: center; margin-bottom: 20px; }
              .student-info { margin-bottom: 15px; }
              .student-info p { margin: 5px 0; }
              .footer { margin-top: 30px; }
            </style>
          </head>
          <body>
            ${printContent.innerHTML}
          </body>
        </html>
      `);
      
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    } catch (error) {
      console.error("Print error:", error);
      alert("There was an error generating the PDF. Please try again.");
    }
  };
  
  return (
    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      {/* Marksheet content for printing */}
      <div ref={marksheetRef} className="bg-white p-4">
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold">Mulund College of commerce</h2>
        </div>
        
        <div className="mb-4">
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>PRN:</strong> {student.prn}</p>
          <p><strong>Seat No:</strong> {student.seatNo}</p>
          <p><strong>Programme:</strong> {student.programme}</p>
          <p><strong>Semester:</strong> {student.semester}</p>
          <p><strong>Month & Year:</strong> {student.monthYear}</p>
        </div>
        
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
              {student.subjects.map((subject, index) => (
                <>
                  <tr key={`theory-${index}`}>
                    <td className="border px-2 py-1">{subject.code}</td>
                    <td className="border px-2 py-1">{subject.title}</td>
                    <td className="border px-2 py-1 text-center">{subject.internalMax}</td>
                    <td className="border px-2 py-1 text-center">{subject.internalMin}</td>
                    <td className="border px-2 py-1 text-center">{subject.internalObt}</td>
                    <td className="border px-2 py-1 text-center">{subject.theoryMax}</td>
                    <td className="border px-2 py-1 text-center">{subject.theoryMin}</td>
                    <td className="border px-2 py-1 text-center">{subject.theoryObt}</td>
                  </tr>
                  <tr key={`practical-${index}`}>
                    <td className="border px-2 py-1">{subject.practicalCode}</td>
                    <td className="border px-2 py-1">{subject.practicalTitle}</td>
                    <td className="border px-2 py-1 text-center">{subject.practicalInternalMax}</td>
                    <td className="border px-2 py-1 text-center">{subject.practicalInternalMin}</td>
                    <td className="border px-2 py-1 text-center">{subject.practicalInternalObt}</td>
                    <td className="border px-2 py-1 text-center">{subject.practicalMax}</td>
                    <td className="border px-2 py-1 text-center">{subject.practicalMin}</td>
                    <td className="border px-2 py-1 text-center">{subject.practicalObt}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-4">
          <p><strong>Total Marks:</strong> {student.totalMarksObtained} / {student.totalMarksMax}</p>
          <p><strong>SGPA:</strong> {student.sgpa}</p>
          <p><strong>CGPA:</strong> {student.cgpa}</p>
          <p><strong>Remarks:</strong> {student.remarks || "N/A"}</p>
        </div>
      </div>
      
      {/* Download button - outside the ref */}
      <div className="mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handlePrint}
        >
          Download Marksheet
        </button>
      </div>
    </div>
  );
};

export default Marksheet;