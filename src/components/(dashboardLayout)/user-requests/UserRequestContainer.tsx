import { Button, Dropdown, Input, MenuProps } from "antd";
import { ArrowDownWideNarrowIcon } from "lucide-react";

import { IoIosSearch } from "react-icons/io";
import UserCard from "./UserCard";

const UserRequestContainer = () => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "Vendor",
    },
    {
      key: "2",
      label: "Rider",
    },
    {
      key: "3",
      label: "Broker",
    },
  ];
  const userData = {
    name: "Dianne Russell",
    type: "Broker",
  };
  return (
    <div className="min-h-[80vh] bg-primary-green px-4 py-2 rounded-md">
      <div className="flex items-center justify-between py-4">
        <h1 className="text-2xl font-bold w-full text-primary-white">
          User Requests
        </h1>
        <div className="flex gap-x-2 justify-center items-center">
          <Input
            type="search"
            size="large"
            placeholder="Search..."
            prefix={<IoIosSearch size={20} />}
            className="max-w-md xl:min-w-[300px] w-full"
          />
          <Dropdown menu={{ items }} placement="bottomLeft" arrow>
            <Button className="text-primary-white bg-primary-orange py-4">
              <ArrowDownWideNarrowIcon size={16} /> Filter
            </Button>
          </Dropdown>
        </div>
      </div>
      {/* show request users data */}
      <div className="mt-10 grid  md:grid-cols-3 grid-cols-1 gap-4">
        {Array(10)
          .fill(0)
          .map((_, inx) => (
            <UserCard key={inx} data={userData} />
          ))}
      </div>
    </div>
  );
};

export default UserRequestContainer;
