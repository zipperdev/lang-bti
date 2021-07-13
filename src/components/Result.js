import React from "react";
import { Button } from "./shared";

function Result({ data, onClick }) {
    const mbtiCodeResult = {ISTJ: "go", ISFJ: "python", INFJ: "javascript", INTJ: "typescript", ISTP: "html", ISFP: "css", INFP: "perl", INTP: "rust", ESTP: "ruby", ESFP: "java", ENFP: "kotiln", ENTP: "swift", ESTJ: "haskell", ESFJ: "cacpp", ENFJ: "cs", ENTJ: "php"};
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
    const image = require(`../contents/${String(data.mbti)}.svg`).default;
    return (
        <div>
            <h1>{data.mbti}</h1>
            <h1>{title[mbtiCodeResult[data.mbti]]}</h1>
            <img src={image} alt="" />
            <Button onClick={onClick}>홈으로 돌아가기!!!</Button>
        </div>
    );
};

export default Result;