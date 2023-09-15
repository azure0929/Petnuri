import toast from "react-hot-toast";

export const createToast = (type:'success'|'error', message:string) => {
  const toastFunc = type === 'success' ? toast.success : toast.error;
  return toastFunc(message, {
    style: {
      background: '#B0B0B0',
      color: '#fff',
      height: '48px',
      position: 'relative',
      bottom: '100px',
      fontSize: '16px',
      fontWeight: '600',
    },
    position: "bottom-center",
  });
};

export const simpleToast = (message:string) => {
  return toast(message, {
    style: {
      background: '#B0B0B0',
      color: '#fff',
      height: '48px',
      position: 'relative',
      bottom: '100px',
      fontSize: '16px',
      fontWeight: '600',
    },
    position: "bottom-center",
  });
};