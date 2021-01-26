import { CircularProgress } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
// import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { sessionLogin } from '../Services/Services'

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="http://itc.nida.ac.th">
                สำนักเทคโนโลยีสารสนเทศ | สถาบันบัณฑิตพัฒนบริหารศาสตร์ ชั้น 9-11
                อาคารสยามบรมราชกุมารี
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#ffffff',
            border: '0.25px solid gray',
            padding: '2em',
            borderRadius: '5px',
        },
        avatar: {
            margin: theme.spacing(2),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(1),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    })
)

interface User {
    email: string
    password: string
}

const init: User = {
    email: '',
    password: '',
}

const LoginPage: React.FC = () => {
    const classes = useStyles()
    const [auth, setAuth] = useState(init)
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const Login = () => {
        setLoading(true)
        setTimeout(() => {
            sessionLogin(auth.email)
            setLoading(false)
            history.push('/page')
        }, 2000)
    }

    return (
        <Container component="main" maxWidth="xs">
            {/* <CssBaseline /> */}
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form
                    className={classes.form}
                    noValidate
                    onSubmit={(e) => {
                        e.preventDefault()
                        Login()
                        
                    }}
                >
                    <TextField
                        variant="outlined"
                        type="email"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        // size="small"
                        autoFocus
                        onChange={(e) => {
                            setAuth({
                                ...auth,
                                email: e.target.value,
                            })
                        }}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        // size="small"
                        autoComplete="current-password"
                        onChange={(e) => {
                            setAuth({
                                ...auth,
                                password: e.target.value,
                            })
                        }}
                    />
                    {/* <Typography>
                        #debug { JSON.stringify(auth)}
                    </Typography> */}


                    { !loading && 
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    }

                    { loading && 
                    <Grid container justify='center' alignContent='center' style={{ padding: '1em'}}>
                        <Grid item>
                            <CircularProgress size={35} />
                        </Grid>

                    </Grid>
                    }


                    <Grid container justify="center">
                        <Grid item>
                            <Link
                                href="https://accmgmt.nida.ac.th:8080/forgotpwd"
                                variant="body2"
                            >
                                Forgot password?
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
                <Typography>
                    <Grid container  justify="center">
                        <Grid item>
                        #debug { JSON.stringify(auth)}
                        </Grid>

                    </Grid>
                </Typography>
            </Box>
        </Container>
    )
}

export default LoginPage
