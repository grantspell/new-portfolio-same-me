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
            link: "http://project-four.heroku.com",
            description: "Et quinta decima eodem modo typi qui nunc nobis videntur parum clari fiant sollemnes. Adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Erat volutpat ut wisi enim ad minim, veniam quis nostrud exerci. In iis qui facit eorum claritatem Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Dignissim qui blandit praesent luptatum zzril delenit augue duis dolore, te feugait nulla facilisi nam."
        },
        hangman: {
            name: "Hangman",
            imgURL: "https://i.imgur.com/8WZPVls.png",
            link: "http://gspell.com",
            description: "Et quinta decima eodem modo typi qui nunc nobis videntur parum clari fiant sollemnes. Adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Erat volutpat ut wisi enim ad minim, veniam quis nostrud exerci. In iis qui facit eorum claritatem Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Dignissim qui blandit praesent luptatum zzril delenit augue duis dolore, te feugait nulla facilisi nam."
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
                            <a href="http://project-four.heroku.com">PUBLISHED</a>
                        </div>
                        <div className="button">
                            <a href="">GITHUB</a>
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
                            <a href="">PUBLISHED</a>
                        </div>
                        <div className="button">
                            <a href="">GITHUB</a>
                        </div>
                    </Buttons>
                </Project>

            </Wrapper>
        );
    }
}

export default Projects;