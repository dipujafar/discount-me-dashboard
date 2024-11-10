"use client";
import { Button } from "antd";
import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import CouponCard from "./CouponCard";
import AddCouponModal from "./AddCouponModal";

const couponData = {
  id: 1,
  price: "100.00",
  title: "Single Discount",
  description: "with 5% off each payment",
};
const CouponContainer = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button
        className="w-full bg-primary-orange text-primary-white border-none font-semibold !py-6 uppercase"
        icon={<CiCirclePlus size={20} color="#fff" />}
        onClick={() => setOpen(true)}
      >
        ADD NEW COUPON
      </Button>

      {/* role base coupon  */}
      <div className="mt-10 flex justify-between gap-x-5">
        <div className="flex-1">
          <h2 className=" text-primary-white text-xl font-bold">User Coupon</h2>
          {/* coupon card */}
          <div className="mt-5 space-y-2">
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <CouponCard key={index} data={couponData}></CouponCard>
              ))}
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-primary-white text-xl font-bold">Rider Coupon</h2>
          {/* coupon card */}
          <div className="mt-5 space-y-2">
            {Array(1)
              .fill(0)
              .map((_, index) => (
                <CouponCard key={index} data={couponData}></CouponCard>
              ))}
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-primary-white  text-xl font-bold">
            Vendor Coupon
          </h2>
          {/* coupon card */}
          <div className="mt-5 space-y-2">
            {Array(2)
              .fill(0)
              .map((_, index) => (
                <CouponCard key={index} data={couponData}></CouponCard>
              ))}
          </div>
        </div>
      </div>
      <AddCouponModal open={open} setOpen={setOpen}></AddCouponModal>
    </div>
  );
};

export default CouponContainer;
