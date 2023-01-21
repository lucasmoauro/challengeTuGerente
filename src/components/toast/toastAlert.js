import { toast } from "react-hot-toast";

export const toastSuccess = (message) => {
	return toast.success(message);
};
export const toastError = (message) => {
	return toast.error(message);
};