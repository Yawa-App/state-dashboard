// InviteResponderModal.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Modal, TextField, Button, Typography, Stack } from '@mui/material';
import { useResponder } from 'src/hooks/useResponder';
import { useApp } from 'src/context';

const InviteResponderModal = () => {
  const { open } = useApp();
  const { handleInviteResponder, responderLoading } = useResponder();
  const [form, setForm] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleInviteResponder(form.name, form.email);
    // onClose();
  };

  return (
    <Modal
      open={open}
      aria-labelledby="invite-responder-modal"
      aria-describedby="invite-responder-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography id="invite-responder-modal" variant="h6" component="h2" mb={2}>
          Invite New Responder
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              required
              name="name"
              label="Responder Name"
              value={form.name}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              required
              name="email"
              label="Email Address"
              type="email"
              value={form.email}
              onChange={handleChange}
              fullWidth
            />

            <Button
              onClick={handleSubmit}
              type="submit"
              variant="contained"
              color="inherit"
              disabled={responderLoading}
              fullWidth
            >
              {responderLoading ? 'Inviting...' : 'Invite Responder'}
            </Button>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
};

// InviteResponderModal.propTypes = {
//   open: PropTypes.bool.isRequired,
// };

export default InviteResponderModal;
