"use client";
import { ConfigProvider } from "antd";
import { Form, Input, Button } from "antd";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";

const EditProfileForm = () => {
  const [phone, setPhone] = useState("");
  // @ts-expect-error: Ignoring TypeScript error due to inferred 'any' type for 'values' which is handled in the form submit logic
  const onFinishEditProfile = (values) => {
    console.log("Edit Profile values:", values);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            colorBgContainer: "transparent",
            activeBorderColor: "#243A40",
            colorTextPlaceholder: "rgb(192, 199, 202)",
            colorIcon: "rgba(255,255,255,0.45)",
            colorBorder: "#D9D9D9",
            colorText: "white",
          },
          Form: {
            labelColor: "white",
          },
          Button: {
            colorBgContainer: "rgb(248,250,252)",
            colorText: "rgb(35,35,35)",
          },
        },
      }}
    >
      <Form
        layout="vertical"
        onFinish={onFinishEditProfile}
        initialValues={{
          userName: "Akash Sharif",
          email: "akash@gmail.com",
          contactNo: "99007007007",
        }}
      >
        <Form.Item label="User Name" name="userName">
          <Input size="large" />
        </Form.Item>

        <Form.Item label="Email" name="email">
          <Input size="large" />
        </Form.Item>

        <Form.Item name="mobile" label="Contact no">
          <PhoneInput
            country={"bd"}
            specialLabel=""
            value={phone}
            onChange={setPhone}
            inputClass="bg-transparent text-primary-white border border-[#fff] py-1  w-full rounded-md"
          />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" block size="large">
            Save Changes
          </Button>
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
};

export default EditProfileForm;
