import React, {Component} from 'react'
import styled from 'styled-components'

const Section = styled.section`
    background-color: #d9a88f;
    min-height: 550px;
    padding: 100px 0;
    color: #fff
`
const Header = styled.h1`
    color:#fff;
    font-weight: 700;
    font-size: 40px;
    line-height: 52px;
`
const Subhead = styled.p`
    font-size:18px;
    font-weight:500;
`
const Button = styled.a`
    display: inline-block;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0;
    background: #fff;
    padding: 10px 20px;
    font-size: 18px;
    box-shadow: 0px 0px 0px 3px #473228,
        -6px 6px #b99c6b,
        -6px 6px 0px 3px #473228;
`
const Jumbotron = () => {
    return (
        <Section className = "home-section--1">
            <div className="container">
                <div className="row">
                    <div className="col col-sm-12 col-md-5">
                        <div className="pt-4 mt-4">
                            <Header>React for Rails Developers</Header>
                            <Subhead>Supercharge your Ruby</Subhead>
                            <div className="cta--wrapper">
                                <Button className="btn fancy-btn"> Get Started </Button>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-12 col-md-7">
                        <div className="pt-4 mt-4 text-center">
                            <iframe src="https://player.vimeo.com/video/425544530" width="560" height="315" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}
export default Jumbotron