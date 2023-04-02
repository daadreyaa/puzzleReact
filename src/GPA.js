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
        default: return <Temp />;
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
            <Button variant="outlined" onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {renderSwitch(props.puzzleId, props.userId, props.onSuccess, props.onFailure)}
                    {/* <PatternPuzzle /> */}
                </Box>
            </Modal>
        </div>
    );
}

export default GPA

