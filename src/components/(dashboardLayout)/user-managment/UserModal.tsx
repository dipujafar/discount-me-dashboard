import { Card, Modal } from "antd";
import userImage from "@/assets/image/user.png";
import Image from "next/image";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
};
const UserModal = ({ open, setOpen }: TPropsType) => {
  return (
    <Modal centered footer={null} open={open} onCancel={() => setOpen(false)}>
      <div className=" bg-primary-green rounded-md py-6 mt-8">
        <div className="flex justify-center items-center">
          <div className="relative w-[140px] h-[140px] ">
            <Image
              className="rounded-full border-4 border-white"
              src={userImage}
              alt="account image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <h2 className=" text-3xl text-center text-white mt-3 font-bold">
          Akash Sharif
        </h2>
      </div>
      <div className=" grid grid-cols-2 justify-center px-16 gap-8 py-6">
        <div>
          <p className=" text-lg font-bold">Name</p>
          <p className=" text-lg mt-[-4px]">Akash Sharif</p>
        </div>
        <div>
          <p className=" text-lg font-bold">Email</p>
          <p className=" text-lg mt-[-4px]">info@gmail.com</p>
        </div>
        <div>
          <p className=" text-lg font-bold">User Type</p>
          <p className=" text-lg mt-[-4px]">Broker</p>
        </div>
        <div>
          <p className=" text-lg font-bold">Location</p>
          <p className=" text-lg mt-[-4px]"> New York</p>
        </div>
      </div>
      {/* <Card title="PDF Viewer" style={{ width: "100%", height: "500px" }}>
        <iframe
          src="path/to/your/pdf-file.pdf" // Replace with the path to your PDF
          width="100%"
          height="100%"
          style={{ border: "none" }}
        />
      </Card> */}
    </Modal>
  );
};

export default UserModal;
