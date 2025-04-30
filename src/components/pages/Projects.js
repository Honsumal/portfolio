import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AiFillGithub } from 'react-icons/ai'
import { HiDesktopComputer } from 'react-icons/hi'
import { BsChevronDown } from 'react-icons/bs';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


export default function Projects() {
  const [expanded1, setExpanded1] = React.useState(false);

  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };

  const [expanded2, setExpanded2] = React.useState(false);

  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };

  const [expanded3, setExpanded3] = React.useState(false);

  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };

  const [expanded4, setExpanded4] = React.useState(false);

  const handleExpandClick4 = () => {
    setExpanded4(!expanded4);
  };

  const [expanded5, setExpanded5] = React.useState(false);

  const handleExpandClick5 = () => {
    setExpanded5(!expanded5);
  };

  const [expanded6, setExpanded6] = React.useState(false);

  const handleExpandClick6 = () => {
    setExpanded6(!expanded6);
  };

  return (
    <div className = 'container'>
        <br></br>
        <h1 className='centered'>My Projects</h1>
        <br></br>

        <p>Here are some of my most recent projects. Click on the chevron to see a longer description of each project, or use the links to be directed to either the project's deployed page, a demo of its use, or its github repository</p>

        <Box 
            sx={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                flexDirection: 'row',
                justifyContent: 'space-evenly'}}>
        
        <Card sx={{ maxWidth: 345, m: 1 }} style = {{backgroundColor: "#e6af2e"}} className = 'project'>
            <CardHeader
                title="The Plunge Game"
            />
            <CardMedia
                component="img"
                height="150"
                image={require("../../images/plunge.png")}
                alt="employee tracker demo"
                sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
            />
            <CardContent >
                <Typography variant="body2" color="#001514">
                    Turn-based combat game made using Javascript
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label='demo'>
                    <a href = "https://honsumal.github.io/plunge-game/"><HiDesktopComputer /> Link </a>
                </IconButton>
                <IconButton aria-label='github'>
                    <a href = "https://github.com/Honsumal/plunge-game"><AiFillGithub /> Github </a>
                </IconButton>
                <ExpandMore
                expand={expanded4}
                onClick={handleExpandClick4}
                aria-expanded={expanded4}
                aria-label="show more"
                >
                <BsChevronDown />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded4} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography paragraph>Summary:</Typography>
                <Typography paragraph>This application is a turn-based combat game built using javascript, where a user controls three characters to fight a set of ten opponents of increasing difficulty.
                </Typography>
                <Typography paragraph>Tools Used:</Typography>
                <Typography paragraph>
                Javascript, React, MUI, Object Oriented Programming
                </Typography>
                </CardContent>
            </Collapse>
            </Card>

        <Card sx={{ maxWidth: 345, m: 1 }} style = {{backgroundColor: "#e6af2e"}} className = 'project'>
            <CardHeader
                title="Gacha Probability Calculator"
            />
            <CardMedia
                component="img"
                height="150"
                image={require("../../images/gpc.png")}
                alt="builder demo"
                sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
            />
            <CardContent >
                <Typography variant="body2" color="#001514">
                    Simple Probability Calculator
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label='demo'>
                    <a href = "https://honsumal.github.io/probability-calculator/"><HiDesktopComputer /> Link </a>
                </IconButton>
                <IconButton aria-label='github'>
                    <a href = "https://github.com/Honsumal/probability-calculator"><AiFillGithub /> Github </a>
                </IconButton>
                <ExpandMore
                expand={expanded5}
                onClick={handleExpandClick5}
                aria-expanded={expanded5}
                aria-label="show more"
                >
                <BsChevronDown />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded5} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography paragraph>Summary:</Typography>
                <Typography paragraph>This application is an easy-to-use probability calculator that simulates large iterations of independent events with the same probability.
                </Typography>
                <Typography paragraph>Tools Used:</Typography>
                <Typography paragraph>
                    Material UI, REACT, JavaScript, BootStrap
                </Typography>
                </CardContent>
            </Collapse>
            </Card>

            <Card sx={{ maxWidth: 345, m: 1 }} style = {{backgroundColor: "#e6af2e"}} className = 'project'>
            <CardHeader
                title="Swift Bank"
            />
            <CardMedia
                component="img"
                height="150"
                image={require("../../images/swift.png")}
                alt="swiftbank landing"
                sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
            />
            <CardContent >
                <Typography variant="body2" color="#001514">
                    Web application for a online bank
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label='demo'>
                    <a href = "http://swiftbank.herokuapp.com/"><HiDesktopComputer /> Link </a>
                </IconButton>
                <IconButton aria-label='github'>
                    <a href = "https://github.com/pav1593/swift-bank"><AiFillGithub /> Github </a>
                </IconButton>
                <ExpandMore
                expand={expanded1}
                onClick={handleExpandClick1}
                aria-expanded={expanded1}
                aria-label="show more"
                >
                <BsChevronDown />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded1} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography paragraph>Summary:</Typography>
                <Typography paragraph>This application is a sample web application for a online bank that allows users to view their accounts, make transactions, and open accounts. 
                </Typography>
                <Typography paragraph>Tools Used:</Typography>
                <Typography paragraph>
                    Material UI, MongoDB, ExpressJS, REACT, NodeJS, Apollo GraphQL, BootStrap, JWT Webtoken
                </Typography>
                </CardContent>
            </Collapse>
            </Card>

            <Card sx={{ maxWidth: 345, m: 1 }} style = {{backgroundColor: "#e6af2e"}} className = 'project'>
            <CardHeader
                title="Social Networking API"
            />
            <CardMedia
                component="img"
                height="150"
                image={require("../../images/socnet-api.png")}
                alt="SNA"
                sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
            />
            <CardContent >
                <Typography variant="body2" color="#001514">
                    Backend API for Social Networking Site
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label='demo'>
                    <a href = "https://watch.screencastify.com/v/H8Hq5nLSojeYsKOQESST"><HiDesktopComputer /> Demo </a>
                </IconButton>
                <IconButton aria-label='github'>
                    <a href = "https://github.com/Honsumal/social-network-api"><AiFillGithub /> Github </a>
                </IconButton>
                <ExpandMore
                expand={expanded2}
                onClick={handleExpandClick2}
                aria-expanded={expanded2}
                aria-label="show more"
                >
                <BsChevronDown />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded2} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography paragraph>Summary:</Typography>
                <Typography paragraph>This is a social networking API designed for an easy-to-navigate system between users, their thoughts, and reactions.
                </Typography>
                <Typography paragraph>Tools Used:</Typography>
                <Typography paragraph>
                JavaScript, NodeJS, ExpressJS, MongoDB
                </Typography>
                </CardContent>
            </Collapse>
            </Card>
                    
            <Card sx={{ maxWidth: 345, m: 1 }} style = {{backgroundColor: "#e6af2e"}} className = 'project'>
            <CardHeader
                title="The Lending Station"
            />
            <CardMedia
                component="img"
                height="150"
                image={require("../../images/the-lending-station.png")}
                alt="lending station landing"
                sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
            />
            <CardContent >
                <Typography variant="body2" color="#001514">
                    Web application for a library
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label='demo'>
                    <a href = "https://the-lending-station.herokuapp.com/"><HiDesktopComputer /> Link </a>
                </IconButton>
                <IconButton aria-label='github'>
                    <a href = "https://github.com/sashdc/the-lending-station"><AiFillGithub /> Github </a>
                </IconButton>
                <ExpandMore
                expand={expanded3}
                onClick={handleExpandClick3}
                aria-expanded={expanded3}
                aria-label="show more"
                >
                <BsChevronDown />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded3} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography paragraph>Summary:</Typography>
                <Typography paragraph>This application is a database for a library that allows librarians to keep track of, add, update, and delete books, users, and reviews from their database.
                </Typography>
                <Typography paragraph>Tools Used:</Typography>
                <Typography paragraph>
                    JavaScript, NodeJS, ExpressJS, MySQL, Handlebars, Bootstrap
                </Typography>
                </CardContent>
            </Collapse>
            </Card>

            <Card sx={{ maxWidth: 345, m: 1 }} style = {{backgroundColor: "#e6af2e"}} className = 'project'>
            <CardHeader
                title="News Headline Aggregator"
            />
            <CardMedia
                component="img"
                height="150"
                image={require("../../images/news-aggregator.png")}
                alt="aggregator landing"
                sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
            />
            <CardContent >
                <Typography variant="body2" color="#001514">
                    Web application for aggregating news and statistics
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label='link'>
                    <a href = "https://honsumal.github.io/news-headline-aggregator/"><HiDesktopComputer /> Link </a>
                </IconButton>
                <IconButton aria-label='github'>
                    <a href = "https://github.com/Honsumal/news-headline-aggregator"><AiFillGithub /> Github </a>
                </IconButton>
                <ExpandMore
                expand={expanded6}
                onClick={handleExpandClick6}
                aria-expanded={expanded6}
                aria-label="show more"
                >
                <BsChevronDown />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded6} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography paragraph>Summary:</Typography>
                <Typography paragraph>This application aggregates top news stories and statistical metrics from StatsCAN based on user query.
                </Typography>
                <Typography paragraph>Tools Used:</Typography>
                <Typography paragraph>
                HTML, CSS, JavaScript, jQuery, Materializecss
                </Typography>
                </CardContent>
            </Collapse>
            </Card>
        </Box>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    </div>
  );
}