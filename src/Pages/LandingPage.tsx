import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { AccountCircle } from '@material-ui/icons';
import React from 'react';
import { useHistory } from 'react-router-dom';
import DialogBtn from '../Components/DialogBtn';
import { Model } from '../Models/Model';
import { sessionLogout } from '../Services/Services';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="http://itc.nida.ac.th">
                สำนักเทคโนโลยีสารสนเทศ | สถาบันบัณฑิตพัฒนบริหารศาสตร์ ชั้น 9-11 อาคารสยามบรมราชกุมารี
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        border: '0.25px solid gray',
        padding: '2em',
        borderRadius: '5px'

    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        // margin: theme.spacing(3, 0, 2),
        // margin: theme.spacing(2, 0, 1, 0)
    },
}));

const LandingPage: React.FC = () => {
    const classes = useStyles()
    const history = useHistory()
    let objUser: Model = JSON.parse(localStorage.getItem('token') || '{}')

    const Logout = () => {
        sessionLogout()
        history.push('/login')
    }

    return (
        <Container component="main" maxWidth="xs">
            {/* <CssBaseline /> */}
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <AccountCircle />
                </Avatar>

                <Typography component="h1" variant="h5">
                    User Information
                </Typography>

                <form className={classes.form} noValidate onSubmit={(e) => {
                    e.preventDefault()
                }}>
                    <TextField
                        label="Email Address"
                        value={objUser.email}
                        variant="outlined"
                        margin="normal"
                        size="small"
                        fullWidth
                    />
                    <TextField
                        label="IP Address"
                        value={objUser.ipaddress}
                        variant="outlined"
                        margin="normal"
                        size="small"
                        fullWidth
                    />
                    <TextField
                        label="Session Timeout"
                        value={objUser.timeout}
                        variant="outlined"
                        margin="normal"
                        size="small"
                        fullWidth
                    />
                    <TextField
                        label="Login Types"
                        value={objUser.logintypes}
                        variant="outlined"
                        margin="normal"
                        size="small"
                        fullWidth
                    />
                    <Grid container spacing={2} style={{ marginTop: "1em"}}>
                        <Grid item xs={12} md={6}>
                            <DialogBtn username={objUser.email} />
                        </Grid>

                        <Grid item xs={12} md={6} >
                            <Button
                                fullWidth
                                variant="outlined"
                                color="primary"
                                onClick={() => {
                                    alert("Button 2")
                                }}
                            >Button 2</Button>
                        </Grid>

                        <Grid item  xs={12} md={12}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="secondary"
                                className={classes.submit}
                                onClick={() => {
                                    Logout()
                                }}
                            >
                                Logout
                            </Button>
                        </Grid>

                    </Grid>

                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    )
}

export default LandingPage