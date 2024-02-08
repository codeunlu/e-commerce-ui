type Props = {
  text: string;
};

const ErrorMessage = ({ text }: Props) => {
  return (
    <div className="flex justify-center items-center text-lg ">{text}</div>
  );
};

export default ErrorMessage;
