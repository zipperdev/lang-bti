import React from "react";
import styled from "styled-components";
import { Button } from "./shared";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Image = styled.img`
    width: 140px;
    height: 140px;
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 210px;
    height: 210px;
    margin-top: 50px;
    background-color: #ffffff;
    border-radius: 50%;
`;

const MbtiCode = styled.h1`
    font-size: 12px;
    margin-top: 10px;
`;

const Title = styled.h1`
    font-size: 24px;
    margin-top: 6px;
`;

const RetryButton = styled(Button)`
    margin-top: 100px;
`;

function Result({ data, onClick }) {
    const mbtiCodeResult = {
        ISTJ: "perl", 
        ISFJ: "go", 
        INFJ: "php", 
        INTJ: "rust", 
        ISTP: "javascript", 
        ISFP: "haskell", 
        INFP: "python", 
        INTP: "css", 
        ESTP: "java", 
        ESFP: "cacpp", 
        ENFP: "swift", 
        ENTP: "html", 
        ESTJ: "typescript", 
        ESFJ: "ruby", 
        ENFJ: "kotiln", 
        ENTJ: "cs", 
    };
    const title = {
        go: "Go", 
        python: "Python", 
        javascript: "Javascript", 
        typescript: "Typescript", 
        html: "HTML", 
        css: "CSS", 
        perl: "Perl", 
        rust: "Rust", 
        ruby: "Ruby", 
        java: "Java", 
        kotiln: "Kotlin", 
        swift: "Swift", 
        haskell: "Haskell", 
        cacpp: "C / C++", 
        cs: "C#", 
        php: "PHP", 
    };
    const image = require(`../contents/private/${String(data.mbti)}.svg`).default;
    return (
        <Container>
            <ImageContainer>
                <Image src={image} alt="" />
            </ImageContainer>
            <MbtiCode>{data.mbti}</MbtiCode>
            <Title>{title[mbtiCodeResult[data.mbti]]}</Title>
            <RetryButton onClick={onClick}>다시 하기</RetryButton>
        </Container>
    );
};

export default Result;