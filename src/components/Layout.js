import React, { useState } from "react";
import styled from "styled-components";
import { Title, WayButton } from "./shared";

const QuestionTitle = styled(Title)`
    width: 100%;
    font-size: 30px;
    margin-top: 90px;
`;

const Container = styled.div`
    width: 100%;
    margin-top: -10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    & > button {
        transition: 0.1s opacity;
    }
    & > button.fadeIn {
        opacity: 1;
    }
    & > button.fadeOut {
        opacity: 0;
    }
`;

// Type: "initP", "initN", "P", "N", "calcP", "calcN";

function Layout({ status, title, data, first: { type: firstType, content: { title: firstTitle } }, second: { type: secondType, content: { title: secondTitle } }, onClick, setData }) {
    const [ classes, setClasses ] = useState("fadeIn");
    const statusNameList = ["ei", "sn", "tf", "jp"];
    let statusData = null;
    let statusName = null;
    switch (status.slice(0, 2)) {
        case "EI":
            statusName = statusNameList[0];
            break;
        case "SN":
            statusName = statusNameList[1];
            break;
        case "TF":
            statusName = statusNameList[2];
            break;
        case "JP":
            statusName = statusNameList[3];
            break;
        default:
            break;
    };
    statusData = data[statusName];
    const firstWay = () => {
        setStateData(firstType);
        onClick();
    };
    const secondWay = () => {
        setStateData(secondType);
        onClick();
    };
    const setStateData = (type) => {
        switch (type) {
            case "initP":
                setData({
                    mbti: data.mbti, 
                    [statusName]: 1
                });
                break;
            case "initN":
                setData({
                    mbti: data.mbti, 
                    [statusName]: -1
                });
                break;
            case "P":
                setData({
                    mbti: data.mbti, 
                    [statusName]: statusData + 1
                });
                break;
            case "N":
                setData({
                    mbti: data.mbti, 
                    [statusName]: statusData - 1
                });
                break;
            case "calcP":
                setData({
                    mbti: data.mbti + (statusData + 1 >= 1 ? status.slice(0, 1) : status.slice(1, 2))
                });
                break;
            case "calcN":
                setData({
                    mbti: data.mbti + (statusData - 1 >= 1 ? status.slice(0, 1) : status.slice(1, 2))
                });
                break;
            default:
                break;
        };
        setClasses("fadeOut");
        setTimeout(() => {
            setClasses("fadeIn");
        }, 50);
    };
    return (
        <>
            <QuestionTitle>{title}</QuestionTitle>
            <Container>
                <WayButton className={classes} onClick={firstWay} title={firstTitle} image={require(`../contents/public/${status}-1.jpg`).default} />
                <WayButton className={classes} onClick={secondWay} title={secondTitle} image={require(`../contents/public/${status}-2.jpg`).default} />
            </Container>
        </>
    );
};

export default Layout;