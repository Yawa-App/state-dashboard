// import { useCreatePasswordMutation } from 'src/features/app/createPasswordSlide';
import { useGetOtpMutation } from 'src/features/app/getOtpSlide';
import { useRouter } from 'src/routes/hooks';
// import { useApp } from 'src/context';

export const useGetOtp = () => {

    const router = useRouter();
    const [getOtp] = useGetOtpMutation();
    // const { email } = useApp(); // Access the email from context

    const handleGetOtp = async (email, setLoading, setError ) => {

        // console.log('Creating password with:', { email, password });  // Log email and password for debugging

        try {
            const data = await getOtp({ email }).unwrap();
            router.push('/verify-email'); // Navigate to verify-email on success
        } catch (error) {
            setError(error.data)
            console.log(error)
        }finally{
            setLoading(false)
        }

    }



    return {
        handleGetOtp
    }
}

