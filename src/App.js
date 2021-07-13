import React, { useState } from "react";
import PageContext from "./constants/page";
import { GlobalStyles } from "./styles";
import Page from "./Pages";

function App() {
    const [ page, setPage ] = useState("start");
    const [ data, setData ] = useState({
        mbti: ""
    });
    const statusList = ["start", "EI1", "EI2", "EI3", "EI4", "EI5", "SN1", "SN2", "SN3", "SN4", "SN5", "TF1", "TF2", "TF3", "TF4", "TF5", "JP1", "JP2", "JP3", "JP4", "JP5", "result"];
    const onClick = () => setPage(statusList[statusList.indexOf(page) + 1 >= 22 ? 0 : statusList.indexOf(page) + 1]);
    return (
        <PageContext.Provider value={{ status: page, data, onClick, setData }}>
            <GlobalStyles />
            <PageContext.Consumer>
                {() => <Page />}
            </PageContext.Consumer>
        </PageContext.Provider>
    );
}

export default App;
