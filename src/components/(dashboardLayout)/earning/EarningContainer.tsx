"use client";
import { Table, TableProps } from "antd";
import { useState } from "react";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import EaringDetaisModal from "./EarningDetailsModal";

const EarningContainer = () => {
  const [open, setOpen] = useState(false);
  type TDataType = {
    key: number;
    name: string;
    email: string;
    date: string;
    amount: string;
  };
  const data: TDataType[] = Array.from({ length: 12 }).map((_, inx) => ({
    key: inx + 1,
    name: "Opu",
    email: "info@gmail.com",
    date: "11 oct 24, 11.10PM",
    amount: "$152",
  }));

  const columns: TableProps<TDataType>["columns"] = [
    {
      title: "Serial",
      dataIndex: "key",
      render: (value) => `#${value}`,
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: " Email",
      dataIndex: "email",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <div className="ml-4">
          <IoEyeOutline
            className="cursor-pointer"
            size={20}
            onClick={() => setOpen(!open)}
          />
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-y-3 items-center py-4 gap-x-10">
        <h1 className="text-2xl font-bold text-primary-white">Earnings</h1>
        <>
          <div className="flex items-center gap-x-6 p-3 bg-primary-orange rounded-lg text-white">
            <div className="flex items-center gap-x-3">
              <FaArrowRightArrowLeft size={20} color="white" />
              <p className="text-white">Today’s Earning</p>
            </div>
            <p className="font-semibold text-base"> $1520 </p>
          </div>
        </>
        <>
          <div className="flex items-center gap-x-3 p-3 bg-primary-orange rounded-lg text-white">
            <FaArrowRightArrowLeft size={20} color="white" />
            <p className="text-white">Total Earning</p>
            <p className="font-semibold text-base"> $5520 </p>
          </div>
        </>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{ x: "max-content" }}
        pagination={{ pageSize: 10, responsive: true }}
      ></Table>
      <EaringDetaisModal open={open} setOpen={setOpen}></EaringDetaisModal>
    </div>
  );
};

export default EarningContainer;
