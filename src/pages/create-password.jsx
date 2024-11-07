import { Helmet } from 'react-helmet-async';

import { CreatePasswordView } from 'src/sections/create-password';

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Create Password </title>
      </Helmet>

      <CreatePasswordView />
    </>
  );
}
