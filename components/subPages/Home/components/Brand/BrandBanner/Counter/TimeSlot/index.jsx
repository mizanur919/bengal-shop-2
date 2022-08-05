const TimeSlot = ({ timeValue, timeText }) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-3xl smd:text-[46px] text-red-orange font-bold">
        {timeValue}
      </p>
      <p className="text-base smd:text-xl text-gray-three font-medium uppercase">
        {timeText}
      </p>
    </div>
  );
};

export default TimeSlot;
