import { Helmet } from 'react-helmet-async';
import { GetOtpView } from 'src/sections/get-otp';

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Verify Email </title>
      </Helmet>

      <GetOtpView />
    </>
  );
}
