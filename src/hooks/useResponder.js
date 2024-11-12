import { toast } from 'react-toastify';
import { useApp } from 'src/context';
import { useCreateResponderMutation, useGetResponderQuery } from 'src/features/app/responderSlide';

export const useResponder = () => {
  const { setOpen } = useApp();
  const [createResponder, { isLoading: responderLoading }] = useCreateResponderMutation();
  const { refetch: refetchResponder } = useGetResponderQuery();

  const handleInviteResponder = async (name, email) => {
    const credentials = { name, email };

    try {
      const response = await createResponder(credentials).unwrap();
      toast.success(response?.message || 'Responder created successfully!');
      refetchResponder();
      setOpen(false);
    } catch (error) {
      toast.error(error?.data || 'An error occurred');
      console.error(error);
    }
  };

  return {
    handleInviteResponder,
    responderLoading,
  };
};
