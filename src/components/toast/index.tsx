import { toast } from "react-toastify";
type TypeProps = "error" | "success" | "warning";
const ToastMessage = (type: TypeProps, message: string = "") =>
  toast[type](
    <div style={{ display: "flex", color: "white" }}>
      <div style={{ flexGrow: 1, fontSize: 15, padding: "8px 12px" }}>
        {message}
      </div>
    </div>
  );

ToastMessage.dismiss = toast.dismiss;

export default ToastMessage;
