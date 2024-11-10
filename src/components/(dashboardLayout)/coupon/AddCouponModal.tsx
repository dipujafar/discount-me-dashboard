import {
  Button,
  ConfigProvider,
  Form,
  FormProps,
  Input,
  InputNumber,
  Modal,
  Select,
} from "antd";
import TextArea from "antd/es/input/TextArea";
type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
};

type FieldType = {
  price: number;
  category: string;
  tagline: string;
  couponDescription: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const AddCouponModal = ({ open, setOpen }: TPropsType) => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <ConfigProvider
      theme={{
        components: {
          Form: { labelFontSize: 16, labelColor: "#00B047" },
          Select: {
            colorBorder: "#00B047",
          },
        },
      }}
    >
      <Modal
        open={open}
        footer={null}
        centered={true}
        onCancel={() => setOpen(false)}
        style={{
          minWidth: "max-content",
          position: "relative",
        }}
      >
        <div className="pb-2">
          <div className="">
            <Form layout="vertical" onFinish={onFinish}>
              {/* input price */}
              <Form.Item<FieldType>
                label="Coupon Price"
                name="price"
                rules={[
                  {
                    required: true,
                    message: "Please input your coupon price",
                  },
                ]}
              >
                <InputNumber
                  placeholder=""
                  className="w-full py-1 rounded-full border-primary-green "
                />
              </Form.Item>
              {/* input tagline */}
              <Form.Item<FieldType>
                label="Coupon Tagline"
                name="tagline"
                rules={[
                  {
                    required: true,
                    message: "Please input your coupon tagline",
                  },
                ]}
              >
                <Input className="border-primary-green py-2 rounded-full"></Input>
              </Form.Item>

              {/* input coupon description */}
              <Form.Item<FieldType>
                label="Coupon Short Details "
                name="couponDescription"
              >
                <TextArea rows={3} className="border-primary-green "></TextArea>
              </Form.Item>

              {/* select banner */}
              <Form.Item label="User" name="couponUser">
                <Select
                  defaultValue="User"
                  size="large"
                  style={{ border: "none" }}
                  className="!border-primary-green"
                  onChange={handleChange}
                  options={[
                    { value: "user", label: "User" },
                    { value: "vendor", label: "Vendor" },
                    { value: "Rider ", label: "Rider" },
                  ]}
                />
              </Form.Item>
              <Button
                htmlType="submit"
                block
                size="large"
                className="bg-primary-green text-primary-white"
              >
                Add Category
              </Button>
            </Form>
          </div>
        </div>
      </Modal>
    </ConfigProvider>
  );
};

export default AddCouponModal;
