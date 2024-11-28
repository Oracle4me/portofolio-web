import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

export const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 mt-3 h-[2.8rem] w-[8rem] dark:bg-black/90 hover:dark:bg-black/80 text-white font-medium outline-none rounded-xl transition-all focus:scale-110 active:scale-110 hover:scale-105 disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}>
      {pending ? (
        <div className="h-5 w-5 rounded-full animate-spin border-b-2 border-white" />
      ) : (
        <>
          Submit
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 text-white" />
          {""}
        </>
      )}
    </button>
  );
};
