import { useRouter } from 'src/routes/hooks';
// import { useDispatch } from 'react-redux';
import {useVerifyEmailMutation } from 'src/features/app/verifyEmailSlide';


export const useVerifyEmail = () => {

    // const dispatch = useDispatch();
    const router = useRouter();
    const [verifyEmail] = useVerifyEmailMutation();


    const handleVerifyEmail = async (email, otp, setLoading, setError ) => {

        try {
            const data = await verifyEmail({ email, otp }).unwrap();
            // localStorage.setItem('accessToken', data.token);
            router.push('/reset-password');
        } catch (error) {
            setError(error.data)
            console.log(error)
        }finally{
            setLoading(false)
        }

        // dispatch(setCredentials({ ...userData, user: email }));
    }



    return {
        handleVerifyEmail
    }
}

