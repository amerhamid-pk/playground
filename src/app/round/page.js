export default function Page() {

  const padding = `p-2`;
  const borderClass = `border border-gray-800`;
  const round = `xl`;
  const roundClass = `rounded-` + round;
  const roundClassT = `rounded-t-` + round;
  const roundclassB = `rounded-b-` + round;

  return (
    <div className={`mt-16 w-96 h-96  mx-auto my-auto flex flex-col ${borderClass} ${roundClass} overflow-hidden`}>
      <div className={` w-full ${padding} bg-gray-400 ${roundClassT} `}>
        Header
      </div>
      <div className="flex-grow p-2  rounded-">
        roundClassT: {roundClassT} <br />
        roundclassB: {roundclassB}
      </div>
      <div className={`w-full ${padding} bg-gray-400 overflow-hidden`}>
        Footer
      </div>
    </div>
  );
}



