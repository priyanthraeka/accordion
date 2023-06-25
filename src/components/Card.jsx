/* eslint-disable react/prop-types */
const Card = (props) => {
  const { children } = props;

  return (
    <div className="w-[800px] h-auto flex flex-col gap-5 items-center justify-start bg-white p-10 mt-36 shadow-md shadow-gray-400">
      {children}
    </div>
  );
};

export default Card;
