import {
  Alert,
  Button,
  Form,
  Input,
  Radio,
  Select,
  Space,
  Tooltip,
  Typography,
} from "antd";
import { AgeCount } from "../../../utils/AgeCount";
import { useState } from "react";
import {
  BayBenh,
  HoTroKhiChuanDoanUngThu,
  HoTroKhiNhapVien,
  HoTroKhiXuatVien,
  HoTroNgayKhiNhapVien,
} from "../../../constans/HoTroKhiNhapVien";
import { TinhToanGoiBaoHiem } from "../../../utils/TinhToanGoiBaoHiem";
const { Option } = Select;

type Prop = {
  setSearchValue: (e?: any) => void;
};
const InputForm = ({ setSearchValue }: Prop) => {
  const [inputAge, setInputAge] = useState<number>(0);
  const [invalidAge, setInvalidAge] = useState<boolean>(false);

  const onFinish = (values: any) => {
    if (inputAge >= 20) {
      setInvalidAge(true);
    } else {
      values.tuoi = inputAge;
      const ketQua = TinhToanGoiBaoHiem(values);
      values.tronDoi = ketQua?.tronDoi;
      values.muoiNam = ketQua?.muoiNam;
      setSearchValue(values);
    }
  };

  const initialValues = {
    gioiTinh: "nam",
    tuoi: "",
    coBenhHayKhong: "initialUsernameValue",
    nhanNgayKhiNhapVien: "20万円",
    hoTroKhiNhapVien: "5000円",
    nhanKhiXuatVien: "1万5000円",
    chuanDoanUngThu: "50万円",
    bayBenh: "",
    baoVeChoBaBenhLon: "co",
  };

  const handleChangeAge = (e: string) => {
    const age = AgeCount(e);
    setInputAge(age);
  };

  const onclickLamMoi = () => {
    setSearchValue();
    setInputAge(0);
    setInvalidAge(false);
  };
  return (
    <div className="form-label-custom ant-select-single">
      <Form
        name="complex-form"
        onFinish={onFinish}
        style={{ maxWidth: "none" }}
        layout="horizontal"
        initialValues={initialValues}
      >
        {/* Giới tính */}
        <Form.Item label="1. Giới tính">
          <Space.Compact>
            <Form.Item name="gioiTinh" noStyle>
              <Select
                placeholder="Chọn giới tính"
                options={[
                  { label: "Nam", value: "nam" },
                  { label: "Nữ", value: "nu" },
                ]}
              />
            </Form.Item>
          </Space.Compact>
        </Form.Item>
        {/* Tuổi */}
        <Form.Item label="2. Ngày tháng năm sinh">
          <Space>
            <Form.Item
              name="tuoi"
              noStyle
              rules={[
                {
                  required: true,
                  message: "Bắt buộc nhập ngày tháng năm sinh",
                },
              ]}
            >
              <Input
                style={{ width: 160 }}
                type="date"
                placeholder="Nhập tuổi"
                onChange={(e) => handleChangeAge(e.target.value)}
              />
            </Form.Item>
            {inputAge !== 0 && (
              <Tooltip title="Tuổi">
                <Typography.Link>{inputAge} Tuổi</Typography.Link>
              </Tooltip>
            )}
          </Space>
        </Form.Item>
        {/* Hiện đang điều trị bênh hoặc có bệnh hay không */}
        <Form.Item
          name="coBenhHayKhong"
          label="3. Hiện đang điều trị bênh hoặc có bệnh hay không"
        >
          <Radio.Group>
            <Radio.Button value="a">Có</Radio.Button>
            <Radio.Button value="b">Không</Radio.Button>
          </Radio.Group>
        </Form.Item>
        {/* Khi nhập viện được hỗ trợ */}
        <Form.Item label="4. Khi nhập viện được hỗ trợ">
          <Space.Compact>
            <Form.Item name="nhanNgayKhiNhapVien" noStyle>
              <Select style={{ width: 160 }} options={HoTroNgayKhiNhapVien} />
            </Form.Item>
          </Space.Compact>
        </Form.Item>
        <div style={{ marginBottom: "20px" }}>
          <Alert
            message={
              <>※Lưu ý : Hỗ trợ 20万円 chỉ áp dụng cho gói bảo hiểm trọn đời.</>
            }
          />
        </div>
        {/* Mức hỗ trợ nhận khi nhập viện */}
        <Form.Item label="5. Mức hỗ trợ khi nhập viện">
          <Space.Compact>
            <Form.Item name="hoTroKhiNhapVien" noStyle>
              <Select
                placeholder="Chọn"
                style={{ width: 160 }}
                options={HoTroKhiNhapVien}
              />
            </Form.Item>
          </Space.Compact>
          <Tooltip title="Tuổi">
            <Typography.Text> / Ngày</Typography.Text>
          </Tooltip>
        </Form.Item>
        {/* Tiền nhận khi xuất viện */}
        <Form.Item label="6. Tiền nhận khi xuất viện (Điều trị nằm viện trên 5 ngày)">
          <Space.Compact>
            <Form.Item name="nhanKhiXuatVien" noStyle>
              <Select
                placeholder="Chọn"
                style={{ width: 160 }}
                options={HoTroKhiXuatVien}
              />
            </Form.Item>
          </Space.Compact>
        </Form.Item>
        <div style={{ marginBottom: "20px" }}>
          <Alert
            message={
              <>
                ※Lưu ý
                <br />
                Gói 1万5000円, 3万円 chỉ áp dụng khi nhập viện 5000円/ngày (chọn
                ở mục số 5)
                <br />
                Gói 3万円, 6万円 chỉ áp dụng khi nhập viện 10000円/ngày (chọn ở
                mục số 5)
              </>
            }
          />
        </div>
        {/* Hỗ trợ khi bị chuẩn đoán ung thư */}
        <Form.Item label="7. Hỗ trợ khi phát hiện ung thư">
          <Space.Compact>
            <Form.Item name="chuanDoanUngThu" noStyle>
              <Select placeholder="Chọn" style={{ width: 160 }}>
                {HoTroKhiChuanDoanUngThu.map((item) => {
                  return (
                    <Option value={item.id} key={item.id}>
                      {item.label}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
          </Space.Compact>
        </Form.Item>
        {/* Hỗ trợ khi bị chuẩn đoán ung thư */}
        <Form.Item label="8. Nguyện vọng khi mắc 7 bệnh lớn">
          <Space.Compact>
            <Form.Item name="bayBenh" noStyle>
              <Select placeholder="Chọn" style={{ width: 160 }}>
                {BayBenh.map((item) => {
                  return (
                    <Option value={item.id} key={item.id}>
                      {item.label}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
          </Space.Compact>
        </Form.Item>
        <div style={{ marginBottom: "20px" }}>
          <Alert
            message={
              <>
                ※7 bệnh lớn: Tim, huyết áp, bệnh thận, tuyến tụy, tiểu đường,
                mạch máu não, bệnh gan
              </>
            }
          />
        </div>
        <Form.Item
          name="baoVeChoBaBenhLon"
          label="9. Nguyện vọng được bảo vệ suốt đời khi mắc 3 bệnh lớn"
        >
          <Radio.Group>
            <Radio.Button value="co">Có</Radio.Button>
            <Radio.Button value="khong">Không</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <div style={{ marginBottom: "20px" }}>
          <Alert
            message={
              <>※3 bệnh lớn : Ung thư, đột quỵ, nhồi máu cơ tim cấp tính</>
            }
          />
          <Alert
            message={
              <>
                ※ Mặc định gói xạ trị 2018 khi phát hiện bệnh hiểm nghèo
                50円/Tháng khi không áp dụng cho 3 bệnh lớn.
                <br />
                70円/Tháng khi áp dụng cho 3 bệnh lớn.
              </>
            }
          />
        </div>
        <Form.Item label=" " colon={false}>
          <Button type="primary" htmlType="submit">
            Tra cứu
          </Button>
          <Button
            htmlType="reset"
            style={{ marginLeft: "10px" }}
            onClick={onclickLamMoi}
          >
            Làm mới
          </Button>
        </Form.Item>
      </Form>
      {invalidAge && (
        <Alert message="Độ tuổi hợp lệ là dưới 20 tuổi" type="error" showIcon />
      )}
    </div>
  );
};

export default InputForm;
