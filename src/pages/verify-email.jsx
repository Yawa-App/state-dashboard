import { Helmet } from 'react-helmet-async';

import { VerifyEmailView } from 'src/sections/verify-email';

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Verify Email </title>
      </Helmet>

      <VerifyEmailView />
    </>
  );
}
