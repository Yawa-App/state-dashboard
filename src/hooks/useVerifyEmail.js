import { useRouter } from 'src/routes/hooks';
import {useVerifyEmailMutation } from 'src/features/app/verifyEmailSlide';
import { useApp } from 'src/context';


export const useVerifyEmail = () => {

    const router = useRouter();
    const [verifyEmail] = useVerifyEmailMutation();
    const {setEmail} = useApp();


    const handleVerifyEmail = async (email, otp, setLoading, setError ) => {

        try {
            const data = await verifyEmail({ email, otp }).unwrap();
            setEmail(email); // Set the verified email in context
            router.push('/create-password'); // Navigate to the password creation page
        } catch (error) {
            setError(error.data)
            console.log(error)
            setEmail(email);
            // router.push('/create-password');
        }finally{
            setLoading(false)
        }
    }

    return {
        handleVerifyEmail
    }
}

