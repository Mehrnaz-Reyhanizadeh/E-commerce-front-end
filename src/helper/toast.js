import { toast } from "react-toastify";

export const notify = (text, type) => {
  if (type === "success") {
    toast.success(text);
  } else if (type === "error") {
    toast.error(text);
  } else if (type === "warn") {
    toast.warn(text);
  }
};
