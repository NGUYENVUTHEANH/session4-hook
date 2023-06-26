import React, { useState } from 'react'
import './Baitap1.css'
import Control from './Control'
import ListStudent from './ListStudent'
import Form from './Form'
function Baitap1() {
    const [students, setStudents] = useState([
        {
            studentId: "SV001",
            studentName: "Nguyễn Văn A",
            age: 20,
            gender: true,
            birthDate: "12/02/2003",
            birthPlace: "DN",
            address: "DN",
        },
        {
            studentId: "SV002",
            studentName: "Nguyễn Thị B",
            age: 27,
            gender: false,
            birthDate: "13/02/1996",
            birthPlace: "HN",
            address: "HN",
        },
        {
            studentId: "SV003",
            studentName: "Nguyễn Văn C",
            age: 24,
            gender: true,
            birthDate: "14/02/1999",
            birthPlace: "HCM",
            address: "HCM",
        },
    ]);
    //c1:làm động tác toggle
    const [actionName, setActionName] = useState("ADD");
    const [toggle, setToggle] = useState(false);
    // c2: khai báo hàm truyền xuống con
    const handleToggleAction = (toggle, action) => {
        setActionName(action);
        setToggle(toggle);
    }
    const handleSumbmitAdd = (newStudent, toggle) => {
        setStudents([...students, newStudent]);
        setToggle(toggle);
    }
    const [selectStudent, setSelectStudent] = useState({});
    const handleUpdateStudent = (selectStudent, toggle, actionName) => {
        setSelectStudent(selectStudent);
        setToggle(toggle);
        setActionName(actionName);
    }
    //u10 khai báo hàm submit update để truyền xuônsg form
    const handleSubmitUpdate = (studentUpdate, toggle) => {
        const update = students.map((e) =>
            e.studentId == studentUpdate.studentId ? studentUpdate : e
        );
        setStudents(update);
        setToggle(toggle);
    };
    return (
        <div>
            <div className="row">
                <div className="col-lg-7 grid-margin stretch-card">
                    <div className="card">
                        {/* START CONTROL */}
                        <Control toggle={toggle} actionToggle={handleToggleAction} />
                        {/* END CONTROL */}
                        {/* START LIST STUDENT */}
                        {/* truyền xuống  */}
                        <ListStudent ListStudentProps={students} handleUpdateStudent={handleUpdateStudent} />
                        {/* END LIST STUDENT */}
                    </div>
                </div>
                {/* START FORM SINH VIEN */}
                {toggle ? (<Form
                    submitForm={handleSumbmitAdd}
                    actionName={actionName}
                    handleSubmitUpdate={handleSubmitUpdate}
                    selectStudent={selectStudent}
                />
                ) : (
                    <></>
                )}
                {/* END FORM SINH VIÊN */}
            </div>

        </div>
    )
}

export default Baitap1