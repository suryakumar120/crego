import React from "react";
import './intro.css';
import ios_intro_img from './assets/ios_intro_img.png';
class Intro extends React.Component{
    render(){
        return (
            <div className="introduction">
            <nav class="navbar navbar-expand-lg navbar-light bg-light intro_nav">
              <div class="container-fluid">
                <a class="navbar-brand" href="#"><img className="company_logo"/></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        {/* <li><hr class="dropdown-divider"></li> */}
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                  </ul>
                  <form class="d-flex">
                    {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
                    <button class="btn btn-outline-success" type="submit">Search</button>
                  </form>
                </div>
            </div>
            </nav>
            <div className='intro_main'>
           
                <div className='intro'>
                    <div className='intro_text'>
                      <p className='intro_head'>Earn upto 14% p.a. <br/>with Lendbox</p>
                      <p className='intro_subhead'>High quality debt investments with consistent returns - now available for the Indian retail investor. Curated options for every risk appetite, minimum investment ₹10,000.</p>
                      <button className='intro_invest_btn'>Start investing</button>
                    </div>
                   
                    <div className='intro_animation' >
                     
                      <img   className='intro_img' src={ios_intro_img}  alt='...'/>
                      
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