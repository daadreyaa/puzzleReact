import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Puzzles from './components/Puzzles';
import ImgShuffle from "./components/ImgPuzzle";
import LanguageSelect from "./components/LanguagePuzzle";
import PatternPuzzle from "./components/PatternPuzzle";
import PolygonPuzzle from "./components/PolygonPuzzle";
import Temp from './components/Temp';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 2,
    p: 4,
    borderRadius: '25px'
};


function renderSwitch(puzzleId, userId, onSuccess, onFailure) {
    console.log(puzzleId);
    console.log(userId)
    switch (puzzleId) {
        case 1:
            return <PatternPuzzle userId={userId} onSuccess={onSuccess} onFailure={onFailure} />;
        case 2:
            return <PolygonPuzzle />;
        case 3:
            return <LanguageSelect />;
        case 4:
            return <ImgShuffle />;
        // default: return <PatternPuzzle userId={userId} onSuccess={onSuccess} onFailure={onFailure} newUser={true} />;
        default: <Temp />
        // return <Puzzles puzzles_selected={[1, 2, 3, 4, 5]} />;
    }
}

const GPA = (props) => {
    console.log(props)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button variant="outlined" onClick={handleOpen}>Authenticate</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {/* {renderSwitch(props.puzzleId, props.userId, props.onSuccess, props.onFailure)} */}
                    {/* <PatternPuzzle /> */}
                    <ImgShuffle />
                </Box>
            </Modal>
        </div>
    );
}


function ChildModal() {
    const [open, setOpen] = React.useState(false);
    let id = 0;
    let y;
    const handleOpen = (event) => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    function onpress() {
        let x = event.target.id;
        if (x == 1) {
            return <LanguageSelect />
        }

        else if (x == 2) {
            return <PolygonPuzzle />
        }
        else if (x == 3) {
            return <PatternPuzzle />
        }
        else {
            return <ImgShuffle />
        }

    }

    return (
        <>
            <Button onClick={handleOpen} id={1}>Language Puzzle</Button>
            <br />
            <Button onClick={handleOpen} id={2}>Polygon Puzzle</Button>
            <br />
            <Button onClick={handleOpen} id={3}>Pattern Puzzle</Button>
            <br />
            <Button onClick={handleOpen} id={4}>Image Shuffle</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: 200 }}>
                    {onpress()}
                </Box>
            </Modal>
        </>
    );
}


export default GPA

