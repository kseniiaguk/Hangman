import React from 'react';
import './DrawingHangman.css'

interface IDrawingHangman {
    wrongLettersNum: number
}

const DrawingHangman: React.FC<IDrawingHangman> = ({ wrongLettersNum }) => {
    const HEAD = <div className='head'></div>
    const BODY = <div className='body balk'></div>
    const LEFT_ARM = <div className='left arm balk'></div>
    const RIGHT_ARM = <div className='right arm balk'></div>
    const LEFT_LEG = <div className='left leg balk'></div>
    const RIGHT_LEG = <div className='right leg balk'></div>
    const hangman = [HEAD, BODY, LEFT_ARM, RIGHT_ARM, LEFT_LEG, RIGHT_LEG]
    // console.log(wrongLettersNum)
    return (
        <div className='gallows'>
            <div className='right-part'>
                <div className='vertical balk'></div>
                <div className='right-bottom-part'>
                    <div className='top balk'></div>
                    <div className='rope balk'></div>
                    {hangman.slice(0, wrongLettersNum)}
                </div>
            </div>
            <div className='bottom balk'></div>
        </div>
    );
};

export default DrawingHangman;