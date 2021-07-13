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
                        return <Start onClick={onClick} data={data} />;

                    // EI Stack
                    case "EI1":
                        return <Layout status={status} data={data} title="첫번째 문제!!" onClick={onClick} setData={setData} first={{
                            type: "initP", 
                            content: "A"
                        }} second={{
                            type: "initN", 
                            content: "B"
                        }} />;

                    case "EI2":
                        return <Layout status={status} data={data} title="두번째 문제!!" onClick={onClick} setData={setData} first={{
                            type: "P", 
                            content: "A"
                        }} second={{
                            type: "N", 
                            content: "B"
                        }} />;
                    
                    case "EI3":
                        return <Layout status={status} data={data} title="세번째 문제!!" onClick={onClick} setData={setData} first={{
                            type: "P", 
                            content: "A"
                        }} second={{
                            type: "N", 
                            content: "B"
                        }} />;

                    case "EI4":
                        return <Layout status={status} data={data} title="네번째 문제!!" onClick={onClick} setData={setData} first={{
                            type: "P", 
                            content: "A"
                        }} second={{
                            type: "N", 
                            content: "B"
                        }} />;

                    case "EI5":
                        return <Layout status={status} data={data} title="다섯번째 문제!!" onClick={onClick} setData={setData} first={{
                            type: "calcP", 
                            content: "A"
                        }} second={{
                            type: "calcN", 
                            content: "B"
                        }} />;

                    // SN Stack
                    case "SN1":
                        return <Layout status={status} data={data} title="여섯번째 문제!!" onClick={onClick} setData={setData} first={{
                            type: "initP", 
                            content: "A"
                        }} second={{
                            type: "initN", 
                            content: "B"
                        }} />;

                    case "SN2":
                        return <Layout status={status} data={data} title="일곱번째 문제!!" onClick={onClick} setData={setData} first={{
                            type: "P", 
                            content: "A"
                        }} second={{
                            type: "N", 
                            content: "B"
                        }} />;
                    
                    case "SN3":
                        return <Layout status={status} data={data} title="여덟번째 문제!!" onClick={onClick} setData={setData} first={{
                            type: "P", 
                            content: "A"
                        }} second={{
                            type: "N", 
                            content: "B"
                        }} />;

                    case "SN4":
                        return <Layout status={status} data={data} title="아홉번째 문제!!" onClick={onClick} setData={setData} first={{
                            type: "P", 
                            content: "A"
                        }} second={{
                            type: "N", 
                            content: "B"
                        }} />;

                    case "SN5":
                        return <Layout status={status} data={data} title="열번째 문제!!" onClick={onClick} setData={setData} first={{
                            type: "calcP", 
                            content: "A"
                        }} second={{
                            type: "calcN", 
                            content: "B"
                        }} />;

                    // TF Stack
                    case "TF1":
                        return <Layout status={status} data={data} title="열한번째 문제!!" onClick={onClick} setData={setData} first={{
                            type: "initP", 
                            content: "A"
                        }} second={{
                            type: "initN", 
                            content: "B"
                        }} />;

                    case "TF2":
                        return <Layout status={status} data={data} title="열두번째 문제!!" onClick={onClick} setData={setData} first={{
                            type: "P", 
                            content: "A"
                        }} second={{
                            type: "N", 
                            content: "B"
                        }} />;
                    
                    case "TF3":
                        return <Layout status={status} data={data} title="열세번째 문제!!" onClick={onClick} setData={setData} first={{
                            type: "P", 
                            content: "A"
                        }} second={{
                            type: "N", 
                            content: "B"
                        }} />;

                    case "TF4":
                        return <Layout status={status} data={data} title="열네번째 문제!!" onClick={onClick} setData={setData} first={{
                            type: "P", 
                            content: "A"
                        }} second={{
                            type: "N", 
                            content: "B"
                        }} />;

                    case "TF5":
                        return <Layout status={status} data={data} title="열다섯번째 문제!!" onClick={onClick} setData={setData} first={{
                            type: "calcP", 
                            content: "A"
                        }} second={{
                            type: "calcN", 
                            content: "B"
                        }} />;

                    // JP Stack
                    case "JP1":
                        return <Layout status={status} data={data} title="열여섯번째 문제!!" onClick={onClick} setData={setData} first={{
                            type: "initP", 
                            content: "A"
                        }} second={{
                            type: "initN", 
                            content: "B"
                        }} />;

                    case "JP2":
                        return <Layout status={status} data={data} title="열일곱번째 문제!!" onClick={onClick} setData={setData} first={{
                            type: "P", 
                            content: "A"
                        }} second={{
                            type: "N", 
                            content: "B"
                        }} />;
                    
                    case "JP3":
                        return <Layout status={status} data={data} title="열여덟번째 문제!!" onClick={onClick} setData={setData} first={{
                            type: "P", 
                            content: "A"
                        }} second={{
                            type: "N", 
                            content: "B"
                        }} />;

                    case "JP4":
                        return <Layout status={status} data={data} title="열아홉번째 문제!!" onClick={onClick} setData={setData} first={{
                            type: "P", 
                            content: "A"
                        }} second={{
                            type: "N", 
                            content: "B"
                        }} />;

                    case "JP5":
                        return <Layout status={status} data={data} title="마지막 문제!!" onClick={onClick} setData={setData} first={{
                            type: "calcP", 
                            content: "A"
                        }} second={{
                            type: "calcN", 
                            content: "B"
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