import React from "react";
import { Button } from './shared';

function Start({ onClick, setData }) {
    const buttonClick = () => {
        setData({ mbti: "" });
        onClick();
    };
    return (
        <div>
            <h1>시작하자!!</h1>
            <Button onClick={buttonClick}>시작하기</Button>
        </div>
    );
};

export default Start;