import React from 'react';
import styled from 'styled-components';

// STYLES
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: yellow;

    img {
        height: auto;
        width: 40vw;
    }
`

const Stationary = () => {
    return (
        <Wrapper>
            <img src="https://i.imgur.com/9fxpuyI.png" alt="tis the beach" />
        </Wrapper>
    );
};

export default Stationary;