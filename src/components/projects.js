import React, { Component } from 'react';
import styled from 'styled-components';

// STYLES
const Wrapper = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
const Project = styled.div`
    width: 50vw;
    background-color: rgba(0,0,0,1.03);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 10px 0px 10px 0px;
`
const TopWrapper = styled.div`
    display: flex;
    justify-content: space-around;
`
const Head = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 10px;

    img {
        height: 200px;
        width: 200px;
    }
    h2 {
        font-family: 'VT323', monospace;
        font-size: 25px;
        letter-spacing: 5px;
    }
    .hangmanIMG {
        margin: -16px 0px 0px 0px;
    }
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h3 {
        font-family: 'VT323', monospace;
        font-size: 15px;
        letter-spacing: 2px;
    }
`
const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-family: 'VT323', monospace;

    .button {
        margin: 0px 10px 10px 0px;
        background-color: white;
    }
    a {
        text-decoration: none;
        color: black;
        margin: 10px;
        padding: 2px;
        font-size: 15px;
    }
    a:hover {
        text-decoration: underline;
    }
`

class Projects extends Component {
    state = {
        dilettante: {
            name: "Dilettante",
            imgURL: "https://i.imgur.com/6ZmsZos.png",
            link: "https://project-four.herokuapp.com/",
            description: "Dilettante is an art fusion application designed to allow users to create vision/mood boards that pair visual and audio art pieces. The user can also create an entry for each collection that can be used for research, self-expression or just for fun. Built primarily using React on Rails and PostgreSQL, this application has powerful functionality. Using additional tools such as iTunes Search API and Axios allowed me to incorporate large amounts of data without weighing down my server."
        },
        hangman: {
            name: "Hangman",
            imgURL: "https://i.imgur.com/8WZPVls.png",
            link: "http://styx-hangman.bitballoon.com",
            description: "This interactive hangman application was built using HTML, CSS and vanilla JavaScript. It is themed around the rock anthem 'Renegade' by Styx. Abiding by the simple rules of hangman, the player guesses, letter by letter, what the hidden word is for each round. All of the game's graphics were designed by hand and then illustrated using 'Affinity Photo', an iPad application. The biggest struggles with this project were the logic and the hangman animation. I used several if statements to compare the player's guess to each letter in the hidden word chosen for the round. I used if statements for the animation as well, telling the application to render certain images according to the player's incorrect guesses."
        }
    }

    render() {
        return (
            <Wrapper>

                <Project className="Dilettante">
                    <TopWrapper>
                        <Head>
                            <img src={this.state.dilettante.imgURL} alt="Project: Dilettante" />
                            <h2>DILETTANTE</h2>
                        </Head>

                        <Content>
                            <h3>CONCEPT</h3>
                            <p>{this.state.dilettante.description}</p>
                            <h3>TECHNOLOGIES USED</h3>
                            <ul>
                                <li>Ruby on Rails</li>
                                <li>ReactJS</li>
                                <li>PostgreSQL</li>
                                <li>Axios</li>
                                <li>Styled-Components</li>
                                <li>iTunes Search API</li>
                            </ul>
                        </Content>
                    </TopWrapper>

                    <Buttons>
                        <div className="button">
                            <a href="https://project-four.herokuapp.com/" target="_blank" >PUBLISHED</a>
                        </div>
                        <div className="button">
                            <a href="https://github.com/grantspell/project-four" target="_blank" >GITHUB</a>
                        </div>
                    </Buttons>
                </Project>

                <Project className="hangman">
                    <TopWrapper>
                        <Head>
                            <img className="hangmanIMG" src={this.state.hangman.imgURL} alt="Project: Hangman" />
                            <h2>HANGMAN</h2>
                        </Head>

                        <Content>
                            <h3>CONCEPT</h3>
                            <p>{this.state.hangman.description}</p>
                            <h3>TECHNOLOGIES USED</h3>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>JavaScript</li>
                                <li>jQuery</li>
                            </ul>
                        </Content>
                    </TopWrapper>

                    <Buttons>
                        <div className="button">
                            <a href="http://styx-hangman.bitballoon.com" target="_blank" >PUBLISHED</a>
                        </div>
                        <div className="button">
                            <a href="https://github.com/grantspell/project_one" target="_blank" >GITHUB</a>
                        </div>
                    </Buttons>
                </Project>

            </Wrapper>
        );
    }
}

export default Projects;