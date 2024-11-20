import Image from "next/image";
import userIcon from "@/assets/Icons/usersIcon.png";
import earingIcon from "@/assets/Icons/EarningIcon.png";

const StatisticBar = () => {
  return (
    <div className="lg:h-32 flex flex-col lg:flex-row gap-y-2  font-roboto text-primary-white">
      <div className="lg:w-1/2 h-full lg:mr-4 bg-primary-green rounded-xl flex gap-x-6 px-12 items-center ">
        <div className="bg-primary-black p-4 rounded-full">
          <Image src={userIcon} alt="user" width={40} height={40} />
        </div>
        <div className="flex flex-col ">
          <p className="xl:text-3xl text-xl ">Total User</p>
          <h4 className="xl:text-3xl text-xl font-bold">518</h4>
        </div>
      </div>
      <div className="lg:w-1/2 h-full lg:ml-4 bg-primary-green rounded-xl flex gap-6  px-12 items-center  ">
        <div className="bg-primary-black p-4 rounded-full">
          <Image src={earingIcon} alt="user" width={40} height={40} />
        </div>
        <div className="flex flex-col ">
          <p className="xl:text-3xl text-xl">Total Earning</p>
          <h4 className="xl:text-3xl text-xl font-bold">$78464</h4>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default StatisticBar;
