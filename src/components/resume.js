import React from 'react';
import styled from 'styled-components';

// STYLES
const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .iframe {
        margin: 0;
        padding: 0;
        border: none;
        width: 50vw; //450px
        height: 70%; //600px
    }
`

const Resume = () => {
    return (
        <Wrapper>
            <iframe className="iframe" src="https://drive.google.com/file/d/1Kl7Eex8_srwgSYDspyKkdRtiHNkXSVWA/preview" title="Grant Spell Resumé"></iframe>
        </Wrapper>
    );
};

export default Resume;