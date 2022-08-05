import { useEffect, useState } from "react";
import TimeSlot from "./TimeSlot";

const Counter = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const target = new Date("August 10, 2022 00:00:00");
      const now = new Date();
      const gap = target.getTime() - now.getTime();

      const d = Math.floor(gap / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      setHours(h);

      const m = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((gap % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="text-center font-semibold text-gray-one text-3xl smd:text-4xl">
        Deal of the Week
      </h1>
      <div className="flex flex-row items-center gap-4 smd:gap-6 mt-5">
        <TimeSlot timeValue={days} timeText="Days" />
        <div>
          <span className="text-[28px] font-medium text-gray-three">:</span>
        </div>
        <TimeSlot timeValue={hours} timeText="Hours" />
        <div>
          <span className="text-[28px] font-medium text-gray-three">:</span>
        </div>
        <TimeSlot timeValue={minutes} timeText="Minutes" />
        <div>
          <span className="text-[28px] font-medium text-gray-three">:</span>
        </div>
        <TimeSlot timeValue={seconds} timeText="Seconds" />
      </div>
      <div className="flex justify-center">
        <button className="bg-green-two px-10 smd:px-14 py-3 smd:py-4 text-white text-center font-medium text-lg border-2 rounded-full mt-10 transition hover:transition-all hover:border-2 hover:border-green-two hover:text-green-two hover:bg-white">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Counter;
