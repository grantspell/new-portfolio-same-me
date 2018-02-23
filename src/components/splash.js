import React, { Component } from 'react';
import styled from 'styled-components';

// COMPONENTS
import Toolbar from './toolbar'
import Stationary from './stationary'
import Projects from './projects'
import Resume from './resume'
import Contact from './contact'

// STYLES
const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
const ContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const DisplayContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
const Header = styled.div`

    .header {
        transform: rotate(90deg);
        padding: 0px 0px 0px 20px;
        font-family: 'UnifrakturCook', cursive;
        font-size: 50px;
        letter-spacing: 20px;
        text-align: center;
    }
    .header:hover {
        background-color: yellow;
    }
`

class Splash extends Component {

    state = {
        resumeVisable: false,
        projectsVisable: true,
        contactVisable: false,
    }

    showResume = () => {
        this.setState({
            resumeVisable: !this.state.resumeVisable,
            projectsVisable: false,
            contactVisable: false
        })
        console.log(this.state)
    }

    showProjects = () => {
        this.setState({
            projectsVisable: !this.state.projectsVisable,
            resumeVisable: false,
            contactVisable: false
        })
        console.log(this.state)
    }

    showContact = () => {
        this.setState({
            contactVisable: !this.state.contactVisable,
            resumeVisable: false,
            projectsVisable: false
        })
    }

    render() {
        return (
            <Wrapper>

                <ContentWrapper>

                    <DisplayContainer>

                        {this.state.resumeVisable ? <Resume /> : this.state.projectsVisable ? <Projects /> : this.state.contactVisable ? <Contact /> : <Stationary />}

                    </DisplayContainer>

                    <Header>
                        <h1 className="header">grant<br />spell</h1>
                    </Header>

                </ContentWrapper>

                <Toolbar
                    showResume={this.showResume}
                    showProjects={this.showProjects}
                    showContact={this.showContact}
                />

            </Wrapper>
        );
    }
}

export default Splash;