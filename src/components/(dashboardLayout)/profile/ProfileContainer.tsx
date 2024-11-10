"use client";
import { Tabs, Upload, UploadFile } from "antd";
import Image from "next/image";
import { CiEdit } from "react-icons/ci";
import userImg from "@/assets/image/userImage.png";
import EditProfileForm from "./EditProfileForm";
import ChangePasswordForm from "./ChangePasswordForm";
import { Camera } from "lucide-react";

const ProfileContainer = () => {
  return (
    <div className="bg-primary-green py-8 rounded font-urbanist">
      <div className="bg-[#1D242D] flex items-center justify-center h-[200px]">
        <div className="flex items-center gap-x-5">
          <div className="max-w-[112px] max-h-[112px]">
            <Image
              src={userImg}
              alt="user image"
              className="size-28 rounded-full "
            />
            <Upload
              listType="picture"
              maxCount={1}
              className="!w-[50px]"
              style={{ width: "50px", overflow: "hidden" }}
            >
              <div className="bg-white text-black text-lg p-1 rounded-full flex items-center justify-center -translate-y-8 translate-x-20 ">
                <Camera size={16} />
              </div>
            </Upload>
          </div>

          <div className="text-white">
            <h2 className="font-bold text-2xl">Minhaz Sharif Akas </h2>
            <p className="text-xl mt-1">Admin</p>
          </div>
        </div>
      </div>

      {/* forms */}
      <div className="w-1/2 mx-auto mt-16 mb-10">
        <Tabs defaultActiveKey="1" centered>
          <Tabs.TabPane
            tab="Edit Profile"
            key="1"
            className="text-primary-white"
          >
            <EditProfileForm />
          </Tabs.TabPane>
          <Tabs.TabPane
            tab="Change Password"
            key="2"
            className="text-primary-white"
          >
            <ChangePasswordForm />
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfileContainer;
