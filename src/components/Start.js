import React from "react";
import { Button } from './shared';

function Start({ onClick }) {
    return (
        <div>
            <h1>시작하자!!</h1>
            <Button onClick={onClick}>시작하기</Button>
        </div>
    );
};

export default Start;