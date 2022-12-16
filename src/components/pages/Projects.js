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
//import { red } from '@mui/material/colors';
import { BsChevronDown} from 'react-icons/bs';

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

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className = 'container banana'>
        <br></br>
        <h1 className='centered'>My Projects</h1>
        <br></br>

        <p>Here is a list of my most recent projects. Click the picture above each label to be directed to the deployed application (if applicable). Click on the label to be directed to the application's Github repository.</p>

        <Card sx={{ maxWidth: 345 }} style = {{backgroundColor: "#a3320b"}}>
        <CardHeader
            title="Swift Bank"
        />
        <CardMedia
            component="img"
            height="194"
            width="300"
            image={require("../../images/swift.png")}
            alt="swiftbank landing"
            sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
        />
        <CardContent >
            <Typography variant="body2" color="text.secondary">
                Web application for a online bank
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            >
            <BsChevronDown />
            </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
            <Typography paragraph>Summary:</Typography>
            <Typography paragraph>This application is a sample web application for a online bank that allows users to view their accounts, make transactions, and open accounts. 
            </Typography>
            <Typography paragraph>Tools Used:</Typography>
            <Typography paragraph>
                Materials UI, MongoDB, ExpressJS, REACT, NodeJS, Apollo GraphQL, JWT Webtoken
            </Typography>
            </CardContent>
        </Collapse>
        </Card>
        <br></br>
        <br></br>
        <br></br>
    </div>
  );
}