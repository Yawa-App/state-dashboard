import React, { useState } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import { Box, Link, Card, Stack, Typography, IconButton, InputLabel, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useRouter } from 'src/routes/hooks';
import { bgGradient } from 'src/theme/css';
import Logo from 'src/components/logo';
import { useGetOtp } from 'src/hooks/useGetOtp';
// import { useAuth } from 'src/hooks/useAuth';
// import { useVerifyEmail } from 'src/hooks/useVerifyEmail';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Optional: Uncomment if you need an icon for navigation

// ----------------------------------------------------------------------

export default function GetOtpView() {
  // Retrieve the current theme and router instance
  const theme = useTheme();
  const router = useRouter();

  // State variables for managing form input, loading, and error states
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const { handleGetOtp,
    isError,
    isLoading,
    errors } = useGetOtp();

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    await handleGetOtp(email, setError)

  };

  // Validate email format
  const isEmailValid = (emailAddress) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
      }}
    >
      <Stack
        sx={{
          width: '45%',
          height: '104%',
          p: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Logo sx={{ mb: 6 }} />

        <Typography variant='h4' style={{ marginBottom: 30, textAlign: 'center' }}>
          Verify Email
        </Typography>

        <Card
          sx={{
            p: 4, // Padding around the card content
            width: '100%', // Full width of the card
            maxWidth: 659,
            borderRadius: 1,
            boxSizing: 'border-box', // Ensures padding is included in width and height calculations
          }}
        >
          <form onSubmit={handleSubmit}>
            <Stack spacing={2} sx={{ display: 'grid', width: '100%' }}>
              <InputLabel htmlFor='email'>
                Email
              </InputLabel>
              <TextField
                id='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!email && !isEmailValid(email)}
                helperText={!!email && !isEmailValid(email) ? 'Enter a valid email' : ''}
                placeholder='Enter your email address'
                inputProps={{
                  'aria-label': 'Email',
                }}
                fullWidth
                size='small'
                sx={{
                  '& .MuiInputBase-root': {
                    boxSizing: 'border-box', // Ensures padding is included in width and height calculations
                  },
                  py: 0,
                }}
              />

              {/* <InputLabel htmlFor='otp'>
                otp
              </InputLabel>
              <TextField
                id='otp'
                name='otp'
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                error={!!otp}
                placeholder='Enter otp'
                inputProps={{
                  'aria-label': 'otp',
                }}
                fullWidth
                size='small'
                sx={{
                  '& .MuiInputBase-root': {
                    boxSizing: 'border-box', // Ensures padding is included in width and height calculations
                  },
                  py: 0,
                }}
              /> */}
            </Stack>

            {error && (
              <Typography color='error' sx={{ mb: 3 }}>
                {error}
              </Typography>
            )}

            <LoadingButton
              fullWidth
              type='submit'
              variant='contained'
              size='medium'
              sx={{
                mt: 5,
                py: 1,
                backgroundColor: '#03BDE9',
                color: '#FFF',
                '&:hover': {
                  backgroundColor: '#02A8D1',
                },
                boxSizing: 'border-box', // Ensures padding is included in width and height calculations
              }}
              loading={isLoading}
            >
              get OTP
            </LoadingButton>
          </form>
        </Card>

        {/* <Stack direction='row' alignItems='center' justifyContent='center' sx={{ my: 3 }}>
          <IconButton onClick={() => router.push('/login')}>
            <img src='assets/icons/Feather_Icons.svg' alt=''/>
          </IconButton>
          <Link 
            variant='subtitle2' 
            underline='hover' 
            onClick={() => router.push('/login')}
            sx={{
              color: '#204D88'
            }}
          >
            Return to Log in
          </Link>
        </Stack> */}
      </Stack>
    </Box>
  );
}
