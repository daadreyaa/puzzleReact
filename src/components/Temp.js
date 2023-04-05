import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from '@mui/material'

import screen1 from '../assets/img/screenshots/1.png'
import screen2 from '../assets/img/screenshots/2.png'
import screen3 from '../assets/img/screenshots/3.png'
import screen4 from '../assets/img/screenshots/4.png'
import screen5 from '../assets/img/screenshots/5.jpeg'
import GPA from '../GPA'

const Temp = () => {



    function showPuzzle(puzzleId) {
        console.log(puzzleId);
        <ChildModal />
        // ReactDOM.render(<GPA puzzleId={puzzleId} />);
    }


    return (
        <>
            <div className='container p-3'><Button variant='outlined' color='success' onClick={() => showPuzzle(1)}>Pattern Puzzle</Button></div >
            <div className='container p-3'><Button variant='outlined' color='success' onClick={() => showPuzzle(1)}>Polygon Puzzle</Button></div>
            <div className='container p-3'><Button variant='outlined' color='success' onClick={() => showPuzzle(1)}>Language Puzzle</Button></div>
            <div className='container p-3'><Button variant='outlined' color='success' onClick={() => showPuzzle(1)}>Image Puzzle</Button></div>

        </>
    )
}


export default Temp