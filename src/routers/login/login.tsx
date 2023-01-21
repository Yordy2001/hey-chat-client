import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { IUser } from '../../interfaces/user.interface'
import FetchAuth from '../../helpers/api/fetchAuth';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


type Props = {}

const authService = new FetchAuth()
export const Login = (props: Props) => {
    const theme = createTheme();
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm<IUser>()

    const onSubmit = async (data: IUser, e: any) => {
        e.preventDefault()
        try {
            await authService.logIn(data)
            localStorage.setItem('hey-chat', JSON.stringify({ isAuthtenicate: true }))
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }
    return (

        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        {/* <LockOutlinedIcon />/ */}
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Phone number"
                            {...register('tel')}
                            type="text"
                            placeholder="8**-****-****"
                            // autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            {...register('password', { maxLength: 80 })}
                            margin="normal"
                            required
                            fullWidth
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}