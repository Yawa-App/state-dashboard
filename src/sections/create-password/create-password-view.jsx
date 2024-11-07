import React, { useState } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import { Box, Card, Stack, Typography, IconButton, InputAdornment, InputLabel, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useRouter } from 'src/routes/hooks';
import { bgGradient } from 'src/theme/css';
import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';
import { useCreatePassword } from 'src/hooks/useCreatePassword';
import { useApp } from 'src/context';

export default function CreatePasswordView() {
  const theme = useTheme();
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const { email } = useApp();
  const { handleCreatePassword } = useCreatePassword();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
    }

    setLoading(true);
    setError(null);

    await handleCreatePassword(password, setLoading, setError); // Pass setLoading and setError as functions
};


  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      ...bgGradient({
        color: alpha(theme.palette.background.default, 0.9),
        imgUrl: '/assets/background/overlay_4.jpg',
      }),
    }}>
      <Stack sx={{
        width: '45%',
        height: '100%',
        p: 5,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Logo sx={{ mb: 6 }} />
        <Typography variant='h4' sx={{ mb: 4, textAlign: 'center' }}>Create Password</Typography>

        {success ? (
          <Card sx={{
            p: 4,
            width: '100%',
            maxWidth: 659,
            borderRadius: 1,
            textAlign: 'center',
          }}>
            <img src='/assets/icons/success.svg' alt='' />
            <Typography variant='h4' sx={{ mb: 4 }}>Password Creation Successful</Typography>
            <Typography variant='body1' sx={{ mb: 4 }}>
              Your password has been successfully created. You can now log in with your new password.
            </Typography>
            <LoadingButton
              fullWidth
              variant='contained'
              size='medium'
              sx={{ py: 1, backgroundColor: '#03BDE9', color: '#FFF', '&:hover': { backgroundColor: '#02A8D1' } }}
              onClick={() => router.push('/login')}
            >
              Go to Login
            </LoadingButton>
          </Card>
        ) : (
          <Card sx={{
            p: 4,
            width: '100%',
            maxWidth: 659,
            borderRadius: 1,
          }}>
            <form onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <InputLabel htmlFor='password'>Password</InputLabel>
                <TextField
                  id='password'
                  name='password'
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Enter your password'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton onClick={() => setShowPassword(!showPassword)} edge='end'>
                          <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                  size='small'
                  sx={{ boxSizing: 'border-box' }}
                />

                <InputLabel htmlFor='confirm-password'>Confirm Password</InputLabel>
                <TextField
                  id='confirm-password'
                  name='confirm-password'
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder='Confirm your password'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton onClick={() => setShowPassword(!showPassword)} edge='end'>
                          <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                  size='small'
                  sx={{ boxSizing: 'border-box' }}
                />

                {error && (
                  <Typography color='error' sx={{ mt: 2 }}>
                    {error}
                  </Typography>
                )}
              </Stack>

              <LoadingButton
                fullWidth
                type='submit'
                variant='contained'
                size='medium'
                sx={{
                  py: 1,
                  mt: 3,
                  backgroundColor: '#03BDE9',
                  color: '#FFF',
                  '&:hover': {
                    backgroundColor: '#02A8D1',
                  },
                }}
                loading={loading} // Ensure loading is a boolean
                disabled={loading} // Set disabled as a boolean directly
              >
                Confirm
              </LoadingButton>
            </form>
          </Card>
        )}
      </Stack>
    </Box>
  );
}
