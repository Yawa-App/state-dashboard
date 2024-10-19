import { useRouter } from 'src/routes/hooks';
// import { useDispatch } from 'react-redux';
import {useForgetPasswordMutation } from 'src/features/app/forgetPasswordSlide';


export const useForgetPassword = () => {

    // const dispatch = useDispatch();
    const router = useRouter();
    const [forgetPassword] = useForgetPasswordMutation();


    const handleForgetPassword = async (email, setLoading, setError ) => {

        try {
            const data = await forgetPassword({ email }).unwrap();
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
        handleForgetPassword
    }
}

