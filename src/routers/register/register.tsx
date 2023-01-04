import React, { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { IUser } from '../../interfaces/user.interface'
import FetchAuth from '../../utils/fetchAuth';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';



type Props = {

}
type formValues = {
    name: string;
    tel: string;
    password: string;
    info: string;
}

const authService = new FetchAuth()

const Register = (props: Props) => {
    const theme = createTheme();
    const navigate = useNavigate()
    const initialValues = {
        name: "",
        tel: "",
        password: "",
        info: ""
    }
    const { register, handleSubmit, reset } = useForm<IUser>({ defaultValues: initialValues })
    const [file, setFile] = useState<File>()

    const onSubmit = async (data: formValues, e: any) => {
        e.preventDefault()
        const formData = new FormData();
        try {
            // join image and dato in form data and sent to backend
            formData.set('portada', file!)
            for (let [key, value] of Object.entries(data)) {
                formData.set(key, value);
            }

            await authService.register(formData)
            navigate('/login')
            reset(initialValues)
        } catch (error) {
            console.log(error);
        }
    }

    const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files?.[0]);
    };

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
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
                        <Button
                            variant="contained"
                            component="label"
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            </Avatar>
                        <input
                            onChange={handleFile}
                            type="file"
                            name="portada"
                            hidden
                        />
                        </Button>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            {...register('name')}
                            type="text"
                            placeholder="Jhon Doe"
                            // autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="tel"
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
                        <TextField
                            id="standard-multiline-flexible"
                            multiline
                            maxRows={4}
                            variant="standard"
                            margin="normal"
                            fullWidth
                            label="Description"
                            {...register('info')}
                            type="text"
                            placeholder="I am strong"
                            // autoComplete="email"
                            autoFocus
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Register