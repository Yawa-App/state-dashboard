import { useCreatePasswordMutation } from 'src/features/app/createPasswordSlide';
import { useRouter } from 'src/routes/hooks';
import { useApp } from 'src/context';

export const useCreatePassword = () => {

    const router = useRouter();
    const [createPassword] = useCreatePasswordMutation();
    const { email } = useApp(); // Access the email from context

    const handleCreatePassword = async (password, setLoading, setError ) => {

        console.log('Creating password with:', { email, password });  // Log email and password for debugging

        try {
            const data = await createPassword({ email, password }).unwrap();
            router.push('/login'); // Navigate to login on success
        } catch (error) {
            setError(error.data)
            console.log(error)
        }finally{
            setLoading(false)
        }

    }



    return {
        handleCreatePassword
    }
}

