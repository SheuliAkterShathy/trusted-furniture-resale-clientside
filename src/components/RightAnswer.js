import React from 'react';
import Lottie from 'react-lottie';
import rightAnswer from '../assets/right-answer.json';

const RightAnswer = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: rightAnswer,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    return (
        <div>
            <Lottie className="text-red-700"
                options={defaultOptions}
                // height={}
                width={'100%'}
            ></Lottie>
        </div>
    );
};

export default RightAnswer;