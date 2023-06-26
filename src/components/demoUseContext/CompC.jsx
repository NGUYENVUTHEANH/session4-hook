import React, { useContext } from 'react'
import "./ParentContext.css"
import { themeContext } from "./ParentContext"
function CompC() {
    const theme = useContext(themeContext)
    return (
        <div>
            <p className={theme}>
                Văn bản bao gồm các tài liệu, tư liệu, giấy tờ có giá trị pháp lý nhất định, được sử dụng trong hoạt động của các cơ quan Nhà nước, các tổ chức chính trị, chính ...
            </p>
        </div>
    )
}

export default CompC