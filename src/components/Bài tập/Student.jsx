import React from 'react';
function Student({ keyStudent, inforStudent, handleUpdate, formInput }) {
    const handleEditStudent = (index) => {
        handleUpdate(index, true, "UPDATE");
    };
    console.log(inforStudent);
    const handleDeleteStudent = (e, index) => {
        const deleteStudent = keyStudent;
        const deleteStudent2 = inforStudent
        console.log(deleteStudent);
        console.log(deleteStudent2);
        console.log(index);
    }
    return (
        <tr key={keyStudent}>
            <td>{keyStudent + 1}</td>
            <td>{inforStudent.studentId}</td>
            <td>{inforStudent.studentName}</td>
            <td>{inforStudent.age}</td>
            <td>{inforStudent.gender ? "Nam" : "Nữ"}</td>
            <td>
                <div className="template-demo">
                    <button
                        type="button"
                        className="btn btn-danger btn-icon-text"
                    >
                        Xem
                    </button>
                    <button
                        type="button"
                        className="btn btn-warning btn-icon-text"
                        onClick={() => handleEditStudent(inforStudent)}
                    >
                        Sửa
                    </button>
                    <button
                        type="button"
                        className="btn btn-success btn-icon-text"
                        onClick={() => handleDeleteStudent(inforStudent)}
                    >
                        Xóa
                    </button>
                </div>
            </td>
        </tr>

    )
}

export default Student