import React from 'react';

import "./styles/Badge.css"

import banner from '../images/badge-header.svg'

class Badge extends React.Component {
    render() {
        return(
            <div className="Badge">
                <div className="Badge-header">
                    <img src={banner} alt="Banner"/>                
                </div>
                <div className="Badge-person">
                    <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="Logo"/>    
                    <h1>Charlie <br/> Galdamez</h1>
                </div>
                <div className="Badge-info">
                    <p>Frontend</p>
                    <p>@blah</p>
                </div>
                <div class="Badge-hashtag">
                    #Platzi
                </div>
            </div>
        );
    }
}

export default Badge;