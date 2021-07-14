import React from "react";
import styled from "styled-components";
import { Button, Title } from "./shared";

const Small = styled.span`
    display: block;
    font-size: 18px;
    margin-top: 20px;
`;

function Start({ onClick, setData }) {
    const buttonClick = () => {
        setData({ mbti: "" });
        onClick();
    };
    return <>
        <Title>
            LangBTI<br />
            <Small>나에게 딱맞는 프로그래밍 언어 찾기!</Small>
        </Title>
        <Button onClick={buttonClick}>시작하기</Button>
    </>;
};

export default Start;