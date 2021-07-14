import React, { useState } from "react";
import styled from "styled-components";
import PageContext from "./constants/page";
import { ProgressBar } from "./components/shared";
import { GlobalStyles } from "./styles";
import { statusList } from "./variables";
import Page from "./Pages";
import BackdropImg from "./contents/startBackdrop.jpg";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-image: url(${BackdropImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    opacity: 0.95;
`;

const Main = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 500px;
    height: 620px;
    background-color: #ffad33;
    border-radius: 30px;
    padding: 20px;
`;

const SmallContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
`;

function App() {
    const [ page, setPage ] = useState("start");
    const [ data, setData ] = useState({
        mbti: ""
    });
    const onClick = () => setPage(statusList[statusList.indexOf(page) + 1 >= 22 ? 0 : statusList.indexOf(page) + 1]);
    return (
        <PageContext.Provider value={{ status: page, data, onClick, setData }}>
            <GlobalStyles />
            <PageContext.Consumer>
                {({ status }) => <Container>
                    <Main>
                        <SmallContainer>
                            {status !== statusList[0] && status !== statusList[statusList.length - 1] ? (
                                <ProgressBar count={statusList.findIndex(element => element === status) - 1} />
                            ) : null}
                            <Page />
                        </SmallContainer>
                    </Main>
                </Container>}
            </PageContext.Consumer>
        </PageContext.Provider>
    );
}

export default App;
