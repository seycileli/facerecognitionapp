import React from "react"
import Tilt from 'react-tilt'
import './Logo.css'
import brain from './brain.png'

const Logo = () => {
    return (
        <div className='ma3 mt0'>
            <Tilt className="Tilt center white br2 shadow-1"
                  options={{
                      reverse:        false,
                      max:            50,
                      perspective:    150,
                      scale:          1,
                      speed:          300,
                      transition:     true,
                      axis:           null,
                      reset:          true,
                      easing:         "cubic-bezier(.03,.98,.52,.99)",
                  }}
                  style={{ height: 150, width: 150 }}>
                <div className="Tilt-inner pa3">
                    {'Magic Brain'}
                    <img style={{paddingTop: '5px'}} alt='brain' src={brain}/>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo
