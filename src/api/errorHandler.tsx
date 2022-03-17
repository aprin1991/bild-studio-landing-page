import toast from "components/toast";

const errorHandler = async (err: any) => {
  return new Promise(() => {
    toast("error", "Error! Please try again");
    throw err;
  });
};
export default errorHandler;
