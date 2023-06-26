import React, { useState, createContext } from "react";
import CompB from "./CompB";

// Khai báo ngữ cảnh ở bên ngoài
export const themeContext = createContext();
function ParentContext() {
    // useText là  1 hook cung cấp context để giúp đơn giản hóc việc chia sẻ giữ liệu cho cây DOM mà không cần phải trùng phần cấp
    // TH1 là truyền propa bình thường
    // ParentContext đến CompB đến CompC
    const [theme, setTheme] = useState("light");

    const handleChangeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    return (
        <div>
            <h2>Demon useContext</h2>
            {/* <button onClick={handleChangeTheme}>Change theme</button>
      <CompB theme={theme}/> */}

            <themeContext.Provider value={theme}>
                <button onClick={handleChangeTheme}>Change theme</button>
                <CompB />
            </themeContext.Provider>
        </div>
    );
}

export default ParentContext;
