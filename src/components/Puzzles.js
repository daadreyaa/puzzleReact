
import * as React from 'react';
import { Button, Box, Card, CardActions, CardContent, CardMedia, colors, Grid, Typography } from '@mui/material';

// import '../../assets/css/otp.css'
import screen1 from '../assets/img/screenshots/1.png'
import screen2 from '../assets/img/screenshots/2.png'
import screen3 from '../assets/img/screenshots/3.png'
import screen4 from '../assets/img/screenshots/4.png'
import screen5 from '../assets/img/screenshots/5.jpeg'
import { useParams } from 'react-router-dom';
import PatternPuzzle from './PatternPuzzle';
import ReactDOM from "react-dom";

const Boxx = (props) => {
    return (
        <div style={{ padding: "40px", marginLeft: "60px" }}>
            <Box sx={{
                width: '100%',
                marginTop: 8,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <Card sx={{ height: 345, width: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={props.img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.body}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="outlined" onClick={props.fn}>View</Button>
                    </CardActions>
                </Card>

            </Box>
        </div>
    )
}

const Puzzles = (props) => {

    // const navigate = useNavigate();
    const { userId } = useParams();

    const puzzles_selected = props.puzzles_selected
    var comp = []

    var buttons = []
    function OnPress(y) {
        if (y === 1) {
            console.log("1");
            ReactDOM.render(<PatternPuzzle />, "gpa")
        }
        else if (y === 2) {
            console.log("2");
        }
        else if (y === 3) {
            console.log("3");
        }
        else if (y === 4) {
            console.log("4");
        }
        else if (y === 5) {
            console.log("5");
        }
    }
    puzzles_selected.forEach(function (x) {
        if (x === 1) {
            buttons.push(
                <Grid>
                    <Boxx name="Pattern Puzzle" fn={() => OnPress(1)} img={screen1} body="Join the dots in any pattern.
                    Jumping can also be used to connect dots without using intermediate ones."></Boxx>
                </Grid>
            )

        }
        if (x === 2) {
            buttons.push(
                <Grid>
                    <Boxx name="Polygon Puzzle" fn={() => OnPress(2)} img={screen2} body="Create unique patterns by assigning colors to each quadrants. Quadrants color assignment can be for single portion or for all."></Boxx>
                </Grid>
            )
        }
        if (x === 3) {
            buttons.push(
                <Grid>
                    <Boxx name="Language Puzzle" fn={() => OnPress(3)} img={screen3} body="
                    User can create their own pattern by combination of multiple language for higher level of security."></Boxx>
                </Grid>
            )
        }
        if (x === 4) {
            buttons.push(
                <Grid>
                    <Boxx name="Image Shuffle" fn={() => OnPress(4)} img={screen4} body="Create custom patterns by choosing any combination of tiles .
Each tiles can also be  clicked any number of times."></Boxx>
                </Grid>
            )
        }
        if (x === 5) {
            buttons.push(
                <Grid>
                    <Boxx name="Concentric circle Puzzle" fn={() => OnPress(5)} img={screen5} body="create patterns by selecting same or different  colors in each layer of the circle"></Boxx>
                </Grid>)
        }

    })

    return (
        <div className='full-screen bg-home4' style={{ height: "1000px" }}>
            <Grid container spacing={1}>
                {buttons}
            </Grid>
        </div>
    );
}

export default Puzzles;