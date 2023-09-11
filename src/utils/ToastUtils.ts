import toast from "react-hot-toast";

export const createToast = (type:'success'|'error', message:string) => {
  const toastFunc = type === 'success' ? toast.success : toast.error;
  return toastFunc(message, {
    style: {
      background: '#B0B0B0',
      color: '#424242',
      height: '48px',
      position: 'relative',
      bottom: '100px',
    },
    position: "bottom-center",
  });
};
