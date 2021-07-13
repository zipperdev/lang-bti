import React from "react";
import { Button } from "./shared";

// Type: "initP", "initN", "P", "N", "calcP", "calcN";

function Layout({ status, title, data, first: { type: firstType, content: firstContent }, second: { type: secondType, content: secondContent }, onClick, setData }) {
    const statusList = [data?.ei, data?.sn, data?.tf, data?.jp];
    const statusNameList = ["ei", "sn", "tf", "jp"];
    let currentStateVar = null;
    let listStatusName = null;
    switch (status.slice(0, 2)) {
        case "EI":
            currentStateVar = statusList[0];
            listStatusName = statusNameList[0];
            break;
        case "SN":
            currentStateVar = statusList[1];
            listStatusName = statusNameList[1];
            break;
        case "TF":
            currentStateVar = statusList[2];
            listStatusName = statusNameList[2];
            break;
        case "JP":
            currentStateVar = statusList[3];
            listStatusName = statusNameList[3];
            break;
        default:
            break;
    };
    const firstWay = () => {
        setStateData(firstType);
        onClick();
    };
    const secondWay = () => {
        setStateData(secondType);
        onClick();
    };
    const setStateData = (type) => {
        console.log(type);
        switch (type) {
            case "initP":
                setData({
                    mbti: data.mbti, 
                    [listStatusName]: 1
                });
                break;
            case "initN":
                setData({
                    mbti: data.mbti, 
                    [listStatusName]: -1
                });
                break;
            case "P":
                setData({
                    mbti: data.mbti, 
                    [listStatusName]: currentStateVar + 1
                });
                break;
            case "N":
                setData({
                    mbti: data.mbti, 
                    [listStatusName]: currentStateVar - 1
                });
                break;
            case "calcP":
                setData({
                    mbti: data.mbti + (currentStateVar + 1 >= 1 ? status.slice(0, 1) : status.slice(1, 2))
                });
                break;
            case "calcN":
                setData({
                    mbti: data.mbti + (currentStateVar - 1 >= 1 ? status.slice(0, 1) : status.slice(1, 2))
                });
                break;
            default:
                break;
        };
        console.log(data.mbti);
    };
    return (
        <div>
            <h1>{title}</h1>
            <Button onClick={firstWay}>{firstContent}</Button>
            <Button onClick={secondWay}>{secondContent}</Button>
        </div>
    );
};

export default Layout;