"use client";

import styled from "styled-components";
import { useEffect } from "react";
import AOS from 'aos';
import ContentBox1 from "./components/ContentBox1";

export default function Home() {
    useEffect(()=>{
        AOS.init();
    },[])
    return (
        <Container>
            {/* <Header/> */}
            <ContentBox1/>

        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #000000;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    padding-bottom: 300px;
`