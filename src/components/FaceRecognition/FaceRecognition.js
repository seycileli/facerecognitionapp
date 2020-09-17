import React from "react";

const FaceRecognition = ({imageUrl}) => {
    return (
        <div className='center ma'>
            <div className='absolute mt'>
            <img width='500px' height='auto'
                alt='' src={imageUrl}/>
            </div>
        </div>
    )
}

export default FaceRecognition;
