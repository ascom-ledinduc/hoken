import { Alert, Card, Col, Row } from "antd";
import { HoTroNgayKhiNhapVien } from "../../../constans/HoTroKhiNhapVien";
type Prop = {
  searchValue: any;
};
const Result = ({ searchValue }: Prop) => {
  return (
    <>
      <Alert message="Kết quả phù hợp với bạn nhất" type="success" showIcon />
      <Row gutter={16}>
        {searchValue.nhanNgayKhiNhapVien === HoTroNgayKhiNhapVien[0].value ? (
          <Col span={12}>
            <Card title={`Gói ngắn hạn 10 năm`} bordered={false}>
              <p>Trợ cấp nhập viện : </p>
              <p>NHẬN NGAY khi nhập viện : </p>
              <p>Trợ cấp nhập viện : </p>
            </Card>
          </Col>
        ) : (
          <Col span={12}>
            <Card
              title={`Gói ngắn hạn 10 năm - ${searchValue.muoiNam}円/Tháng`}
              bordered={false}
            >
              <p>Trợ cấp nhập viện : {searchValue.hoTroKhiNhapVien}/ngay</p>
              <p>NHẬN NGAY khi nhập viện : {searchValue.nhanNgayKhiNhapVien}</p>
              <p>Trợ cấp nhập viện : {searchValue.nhanKhiXuatVien}/ngay</p>
            </Card>
          </Col>
        )}
        <Col span={12}>
          <Card
            title={`Gói trọn đời - ${searchValue.tronDoi}円/Tháng`}
            bordered={false}
          >
            <p>Trợ cấp nhập viện : {searchValue.hoTroKhiNhapVien}/ngay</p>
            <p>NHẬN NGAY khi nhập viện : {searchValue.nhanNgayKhiNhapVien}</p>
            <p>Trợ cấp nhập viện : {searchValue.nhanKhiXuatVien}/ngay</p>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Result;
