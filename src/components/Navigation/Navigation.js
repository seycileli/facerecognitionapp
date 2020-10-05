import React from "react";

const Navigation = ({onRouteChange, isSignedIn}) => {
    if (isSignedIn) {
    return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChange('signout')}
            className='tc white br2 b--solid b--black-20
            f4 pa2 ma4 shadow-1 hover-bg-black-50 pointer'>Sign Out</p>
        </nav>
    );
    } else {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>

                <p onClick={() => onRouteChange('signin')}
                   className='tc white br2 b--solid b--black-20
            f4 pa2 ma4 shadow-1 hover-bg-black-50 pointer'>Sign In</p>

                <p onClick={() => onRouteChange('register')}
                   className='tc white br2 b--solid b--black-20
            f4 pa2 ma4 shadow-1 hover-bg-black-50 pointer'>Register</p>
            </nav>
        )
    }
}

export default Navigation;
