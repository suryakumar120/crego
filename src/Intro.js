import React from "react";
import './intro.css';
import ios_intro_img from './assets/ios_intro_img.png';
import company_logo from './assets/company_logo.svg';
import intro_img from './assets/intro_img.png';
class Intro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavbarOpen: false,
        };
    }

    handleNavbarToggle = () => {
        this.setState((prevState) => ({ isNavbarOpen: !prevState.isNavbarOpen }));
    };
    render() {
        const { isNavbarOpen } = this.state;
        return (
            <div className="introduction">
                <nav class="navbar navbar-expand-lg navbar-dark  intro_nav">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"><img className="company_logo" src={company_logo} /></a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            onClick={this.handleNavbarToggle}
                            aria-controls="navbarSupportedContent"
                            aria-expanded={isNavbarOpen}
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse navbar_container${isNavbarOpen ? ' show' : ''}`} id="navbarSupportedContent">
                            <ul class="navbar-nav  mb-2 mb-lg-0 navbar_options">
                                <li class="nav-item">
                                    <a class="nav-link" href="#expression_engine">Go to expression engine</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="mailto:gsuryakumar2to2.5@gmail.com">Contact me</a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link" aria-current="page" href="https://github.com/suryakumar120/crego.git/" target="_blank">Github repo</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
                <div className='intro_main'>

                    <div className='intro'>
                        <div className='intro_text'>
                            <p className="intro_title">Leading <br />Infrastructure for<br /> Distributed supply of<br /> Capital</p>
                            <p className="intro_sub_title">We provide supply chain demand along with necessary infrastructure for local lenders to deploy their capital</p>
                            <button className='intro_contact_us'>Contact us</button>
                        </div>

                        <div className='intro_animation' >

                            <img className='intro_img' src={intro_img} alt='...' />

                        </div>
                    </div>

                    <div className='style_block'>
                        <div className='style_block_start'>

                        </div>
                        <div className='style_block_end'>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Intro;