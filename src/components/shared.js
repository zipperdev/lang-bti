import React from "react";
import styled from "styled-components";

export const Title = styled.h1`
    text-align: center;
    font-size: 36px;
    font-weight: 100;
`;

export const Button = styled.button`
    padding-top: 3px;
    width: 70%;
    height: 40px;
    color: #343434;
    background-color: #ffffff;
    cursor: pointer;
    border-radius: 6px;
`;


const StyledWayButton = styled.button`
    position: relative;
    width: 90%;
    height: 150px;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: 100%;
    border-radius: 10px;
    margin-top: 30px;
    overflow: hidden;
    cursor: pointer;
`;
const StyledWayButtonTitle = styled.h1`
    display: block;
    width: 100%;
    height: 24px;
    text-align: left;
    text-justify: center;
    position: absolute;
    padding-left: 4px;
    bottom: 0;
    color: #343434;
    background-color: #ffffff;
`;


export const WayButton = ({ onClick, title, image }) => <StyledWayButton onClick={onClick} image={image} key={title}>
    <StyledWayButtonTitle>{title}</StyledWayButtonTitle>
</StyledWayButton>;


const StyledProgress = styled.div`
    width: calc(100/20*${props => props.count}%);
    height: 100%;
    background-color: #ff9900;
    transition: 0.3s;
`;
const StyledProgressBar = styled.div`
    position: absolute;
    top: 40px;
    width: 90%;
    height: 20px;
    background-color: #f6f6f6;
    border-radius: 10px;
    overflow: hidden;
`;
export const ProgressBar = ({ count }) => <StyledProgressBar>
    <StyledProgress count={count} />
</StyledProgressBar>