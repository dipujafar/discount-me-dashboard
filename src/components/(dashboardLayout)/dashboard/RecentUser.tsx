"use client";
import { Table, TableProps } from "antd";
import { useState } from "react";
import { ArrowDownWideNarrowIcon, ChevronDown } from "lucide-react";

type TDataType = {
  key: number;
  name: string;
  email: string;
  date: string;
  accountType: string;
};
const data: TDataType[] = Array.from({ length: 12 }).map((_, inx) => ({
  key: inx + 1,
  name: "name",
  email: "info@gmail.com",
  date: "11 oct 24, 11.10PM",
  accountType: "User",
}));

const RecentUser = () => {
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
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Account Type",
      dataIndex: "accountType",

      filters: [
        {
          text: "User",
          value: "User",
        },
        {
          text: "Vendor",
          value: "vendor",
        },
        {
          text: "Rider",
          value: "rider",
        },
        {
          text: "Broker",
          value: "broker",
        },
      ],
      filterIcon: () => (
        <ArrowDownWideNarrowIcon
          color="#fff"
          className="flex justify-start items-start"
        />
      ),
      onFilter: (value, record) =>
        record.accountType.indexOf(value as string) === 0,
    },
  ];

  return (
    <>
      <div>
        <Table
          style={{ overflowX: "auto" }}
          columns={columns}
          dataSource={data}
          scroll={{ x: "max-content" }}
        ></Table>
      </div>
    </>
  );
};

export default RecentUser;
