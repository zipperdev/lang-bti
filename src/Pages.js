import React from "react";
import Layout from "./components/Layout";
import Result from "./components/Result";
import Start from "./components/Start";
import PageContext from "./constants/page";

function Pages() {
    return (
        <PageContext.Consumer>
            {({ status, onClick, data, setData }) => {
                switch (status) {
                    // Start Stack
                    case "start":
                        return <Start onClick={onClick} data={data} setData={setData} />;

                    // EI Stack
                    case "EI1":
                        return <Layout status={status} data={data} title="프로젝트를 진행할 때" onClick={onClick} setData={setData} first={{
                            type: "initP", 
                            content: {
                                title: "같이 진행한다"
                            }
                        }} second={{
                            type: "initN", 
                            content: {
                                title: "나 혼자서 진행한다"
                            }
                        }} />;

                    case "EI2":
                        return <Layout status={status} data={data} title="강의를 들을 때" onClick={onClick} setData={setData} first={{
                            type: "P", 
                            content: {
                                title: "한번에 빠르게 듣는다"
                            }
                        }} second={{
                            type: "N", 
                            content: {
                                title: "천천히 차근차근 듣는다"
                            }
                        }} />;
                    
                    case "EI3":
                        return <Layout status={status} data={data} title="여행을 할 때" onClick={onClick} setData={setData} first={{
                            type: "P", 
                            content: {
                                title: "내가 원하는 대로 여행한다"
                            }
                        }} second={{
                            type: "N", 
                            content: {
                                title: "계획에 맞추어서 여행한다"
                            }
                        }} />;

                    case "EI4":
                        return <Layout status={status} data={data} title="처음 만난 사람과 대화할 때" onClick={onClick} setData={setData} first={{
                            type: "P", 
                            content: {
                                title: "나의 주장을 바로 전달한다"
                            }
                        }} second={{
                            type: "N", 
                            content: {
                                title: "나의 주장을 약하게 전달한다"
                            }
                        }} />;

                    case "EI5":
                        return <Layout status={status} data={data} title="여유있는 시간일 때" onClick={onClick} setData={setData} first={{
                            type: "calcP", 
                            content: {
                                title: "밖에 나간다"
                            }
                        }} second={{
                            type: "calcN", 
                            content: {
                                title: "집콕을 한다"
                            }
                        }} />;

                    // SN Stack
                    case "SN1":
                        return <Layout status={status} data={data} title="문제를 풀 때" onClick={onClick} setData={setData} first={{
                            type: "initP", 
                            content: {
                                title: "생각을 한 후 답을 적는다"
                            }
                        }} second={{
                            type: "initN", 
                            content: {
                                title: "바로 적는다"
                            }
                        }} />;

                    case "SN2":
                        return <Layout status={status} data={data} title="내가 할 일을 적을 때" onClick={onClick} setData={setData} first={{
                            type: "P", 
                            content: {
                                title: "자세히 적는다"
                            }
                        }} second={{
                            type: "N", 
                            content: {
                                title: "간략히 적는다"
                            }
                        }} />;
                    
                    case "SN3":
                        return <Layout status={status} data={data} title="독서를 할 때" onClick={onClick} setData={setData} first={{
                            type: "P", 
                            content: {
                                title: "내 경험을 빗대어 읽는다"
                            }
                        }} second={{
                            type: "N", 
                            content: {
                                title: "주인공의 입장으로 읽는다"
                            }
                        }} />;

                    case "SN4":
                        return <Layout status={status} data={data} title="내 인생의 계획을 생각할 때" onClick={onClick} setData={setData} first={{
                            type: "P", 
                            content: {
                                title: "현재에 초점을 두고 한다"
                            }
                        }} second={{
                            type: "N", 
                            content: {
                                title: "미래에 초점을 두고 한다"
                            }
                        }} />;

                    case "SN5":
                        return <Layout status={status} data={data} title="문서를 작성할 때" onClick={onClick} setData={setData} first={{
                            type: "calcP", 
                            content: {
                                title: "철저히 작성한다"
                            }
                        }} second={{
                            type: "calcN", 
                            content: {
                                title: "간단히 작성한다"
                            }
                        }} />;

                    // TF Stack
                    case "TF1":
                        return <Layout status={status} data={data} title="시간이 없을 때" onClick={onClick} setData={setData} first={{
                            type: "initP", 
                            content: {
                                title: "조급하게 행동한다"
                            }
                        }} second={{
                            type: "initN", 
                            content: {
                                title: "차분히 행동한다"
                            }
                        }} />;

                    case "TF2":
                        return <Layout status={status} data={data} title="그래프를 관찰할 때" onClick={onClick} setData={setData} first={{
                            type: "P", 
                            content: {
                                title: "각 구간마다 분석한다"
                            }
                        }} second={{
                            type: "N", 
                            content: {
                                title: "두루두루 살펴본다"
                            }
                        }} />;
                    
                    case "TF3":
                        return <Layout status={status} data={data} title="친구를 사귈 때" onClick={onClick} setData={setData} first={{
                            type: "P", 
                            content: {
                                title: "많이 사귀어 관계를 적당히 맺는다"
                            }
                        }} second={{
                            type: "N", 
                            content: {
                                title: "적당히 사귀어 관계를 돈독히 맺는다"
                            }
                        }} />;

                    case "TF4":
                        return <Layout status={status} data={data} title="친구가 신기한 일을 얘기할 때" onClick={onClick} setData={setData} first={{
                            type: "P", 
                            content: {
                                title: "그 이야기의 사실 여부에 대해 확인한다"
                            }
                        }} second={{
                            type: "N", 
                            content: {
                                title: "이야기에 공감한다"
                            }
                        }} />;

                    case "TF5":
                        return <Layout status={status} data={data} title="친구들에게 선물할 때" onClick={onClick} setData={setData} first={{
                            type: "calcP", 
                            content: {
                                title: "모두에세 선물한다"
                            }
                        }} second={{
                            type: "calcN", 
                            content: {
                                title: "친근한 사람에게 가져다 준다"
                            }
                        }} />;

                    // JP Stack
                    case "JP1":
                        return <Layout status={status} data={data} title="새로운 해가 시작되었을 때" onClick={onClick} setData={setData} first={{
                            type: "initP", 
                            content: {
                                title: "앞으로의 계획을 짠다"
                            }
                        }} second={{
                            type: "initN", 
                            content: {
                                title: "나중에 내가 원하는대로 한다"
                            }
                        }} />;

                    case "JP2":
                        return <Layout status={status} data={data} title="원하는 수업이 취소되었을 때" onClick={onClick} setData={setData} first={{
                            type: "P", 
                            content: {
                                title: "그 수업과 흡사한 수업을 찾는다"
                            }
                        }} second={{
                            type: "N", 
                            content: {
                                title: "다른 수업을 듣는다"
                            }
                        }} />;
                    
                    case "JP3":
                        return <Layout status={status} data={data} title="나홀로 프로젝트를 진행할 때" onClick={onClick} setData={setData} first={{
                            type: "P", 
                            content: {
                                title: "체계적으로 설계한다"
                            }
                        }} second={{
                            type: "N", 
                            content: {
                                title: "여유있게 설계한다"
                            }
                        }} />;

                    case "JP4":
                        return <Layout status={status} data={data} title="내가 원하던 것을 이루었을 때" onClick={onClick} setData={setData} first={{
                            type: "P", 
                            content: {
                                title: "이 결과에 대해 만족한다"
                            }
                        }} second={{
                            type: "N", 
                            content: {
                                title: "이 과정에 대해 만족한다"
                            }
                        }} />;

                    case "JP5":
                        return <Layout status={status} data={data} title="여행을 가는 날에 비가 올 때" onClick={onClick} setData={setData} first={{
                            type: "calcP", 
                            content: {
                                title: "바로 여행을 떠난다"
                            }
                        }} second={{
                            type: "calcN", 
                            content: {
                                title: "일정을 변경한다"
                            }
                        }} />;

                    // Result Stack
                    case "result":
                        return <Result data={data} onClick={onClick} />

                    default:
                        return JSON.stringify(data);
                };
            }}
        </PageContext.Consumer>
    );
};

export default Pages;