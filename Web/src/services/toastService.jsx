import { toast } from 'react-toastify';

export const showRemovedFromCartToast = () => {
  toast(
    <div className="custom-toast">
      <p>The game was removed from your cart.</p>
      <small>You can add it back from the store.</small>
    </div>,
    {
      style: {
        background: '#7d287d',
        color: '#fff',
      },
      hideProgressBar: true,
      autoClose: 1500,
    },
  );
};