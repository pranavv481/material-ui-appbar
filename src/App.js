import './App.css';
import {Container, Box, Paper, AppBar, Typography, Toolbar, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './component/layout/Navbar';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom'
import Home from './component/Page/Home';
import About from './component/Page/About';
import Contact from './component/Page/Contact';



const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[200],
    width:"100vw",
    height:"100vh",
    paddingTop:theme.spacing(5)
  },
}));


function App() {
  const classes = useStyles();
  return (
    <Router>
    <Container className={classes.root}>
       <Paper component={Box} width="30%" mx="auto" p={4}>
         <Navbar/>
         <Switch>
         <Route path="/" exact component={Home} />
         <Route path="/about" exact component={About} />
         <Route path="/contact" exact component={Contact} />
         </Switch>
       
       </Paper>
    </Container>
    </Router>
  );
}

export default App;
