import React, { Component } from 'react'
import { FaApple, FaBirthdayCake  } from "react-icons/fa";


class Card2 extends Component{

    render() {
        return (
            <div>
                    <h1>{this.props.Name}</h1>
                    <span>
                    <FaApple />
                    <FaBirthdayCake />
                    </span>
                
            </div>
            
            )
    }
}
export default Card2;