import React from 'react';
import styled from 'styled-components';

// STYLES
const ToolbarWrapper = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`
const Button = styled.div`
    margin: 20px;
    border: double 5px blue;
    border-radius: 2px;
    
    h3 {
        font-family: 'VT323', monospace;
        margin: 10px;
        font-size: 18px;
        letter-spacing: 2px;
    }
    h3:hover {
        text-decoration: underline;
    }
    // .projects {
    //     transform: rotate(-90deg);
    //     margin: 0px 0px 0px -5px;
    // }
`

const Toolbar = (props) => {

    const showProjects = (e) => {
        e.preventDefault();
        props.showProjects();
        console.log('hit on `toolbar`');
    }

    const showResume = (e) => {
        e.preventDefault();
        props.showResume();
        console.log('hit on `toolbar`');
    }

    const showContact = (e) => {
        e.preventDefault();
        props.showContact();
        console.log('hit on `toolbar`');
    }

    return (
        <ToolbarWrapper>

            <Button>
                <h3 className="resume" onClick={showResume}>RESUME</h3>
            </Button>

            <Button>
                <h3 className="projects" onClick={showProjects}>PROJECTS</h3>
            </Button>

            <Button>
                <h3 className="contact" onClick={showContact}>CONTACT</h3>
            </Button>

        </ToolbarWrapper>
    );
};

export default Toolbar;