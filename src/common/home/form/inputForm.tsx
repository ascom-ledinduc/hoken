import { Button, Form, Input, Select, Space, Tooltip, Typography } from "antd";
import { useForm } from "antd/es/form/Form";
const { Option } = Select;

const InputForm = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  const form = useForm();
  console.log(form);
  return (
    <Form
      name="complex-form"
      onFinish={onFinish}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
    >
      {/* Giới tính */}
      <Form.Item label="Giới tính">
        <Space.Compact>
          <Form.Item
            name="gioiTinh"
            noStyle
            rules={[{ required: true, message: "Giới tính là bắt buộc" }]}
          >
            <Select placeholder="Chọn giới tính">
              <Option value="Zhejiang">Nam</Option>
              <Option value="Jiangsu">Nữ</Option>
            </Select>
          </Form.Item>
        </Space.Compact>
      </Form.Item>
      {/* Tuổi */}
      <Form.Item label="Tuổi">
        <Space>
          <Form.Item
            name="tuoi"
            noStyle
            rules={[{ required: true, message: "Tuổi is required" }]}
          >
            <Input style={{ width: 160 }} placeholder="Nhập tuổi" />
          </Form.Item>
        </Space>
      </Form.Item>
      {/* Tiền nhận khi xuất viện */}
      <Form.Item label="Áp dụng cho 3 bệnh lớn">
        <Space.Compact>
          <Form.Item
            name="baBenhLon"
            noStyle
            rules={[{ required: true, message: "Giới tính là bắt buộc" }]}
          >
            <Select placeholder="Chọn">
              <Option value="Zhejiang">Có</Option>
              <Option value="Jiangsu">Không</Option>
            </Select>
          </Form.Item>
        </Space.Compact>
      </Form.Item>
      <Form.Item label="Gói bảo hiểm">
        <Space>
          <Form.Item
            name="goiBaoHiem"
            noStyle
            rules={[{ required: true, message: "Tuổi is required" }]}
          >
            <Input style={{ width: 160 }} placeholder="Chọn gói bảo hiểm" />
          </Form.Item>
        </Space>
      </Form.Item>
      <Form.Item label=" " colon={false}>
        <Button type="primary" htmlType="submit">
          Tra cứu
        </Button>
      </Form.Item>
    </Form>
  );
};

export default InputForm;
