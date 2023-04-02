import React from "react";
import ReactDOM from "react-dom";
import ImgShuffle from "./components/ImgPuzzle";
import LanguageSelect from "./components/LanguagePuzzle";
import PatternPuzzle from "./components/PatternPuzzle";
import PolygonPuzzle from "./components/PolygonPuzzle";
import Puzzles from "./components/Puzzles";
import GPA from "./GPA";

import './index.css';

function graphicalPasswordAuthentication(api, userId, puzzleId, onSuccess, onFailure) {

    if (!api) return;

    const gpaElement = document.getElementById('gpa');

    // let puzzleComponent;

    // switch (puzzleId) {
    //     case 1: puzzleComponent = <PatternPuzzle />
    //         break;
    //     case 2: puzzleComponent = <PolygonPuzzle />
    //         break;
    //     case 3: puzzleComponent = <LanguageSelect />
    //         break;
    //     case 4: puzzleComponent = <ImgShuffle />;
    //         break;
    //     default: ReactDOM.render(<GPA />, gpaElement);
    //         break;
    // }

    // if (puzzleId)
    //     ReactDOM.render(<GPA puzzleId={puzzleId} />, gpaElement)
    // else
    //     ReactDOM.render(<Puzzles puzzles_selected={[1, 2, 3, 4, 5]} />, gpaElement);

    ReactDOM.render(<GPA puzzleId={puzzleId} userId={userId} onSuccess={onSuccess} onFailure={onFailure} />, gpaElement)
}

window.graphicalPasswordAuthentication = graphicalPasswordAuthentication;

graphicalPasswordAuthentication(1, 1)

