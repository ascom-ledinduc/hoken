import { Alert, Button, Card, Col, Divider, Row } from "antd";
type Prop = {
  searchValue: any;
};
const Result = ({ searchValue }: Prop) => {
  return (
    <>
      <Alert message="Kết quả phù hợp với bạn nhất" type="success" showIcon />
      <Row gutter={16}>
        <Col span={12}>
          <Card
            title={`Gói ngắn hạn 10 năm - ${searchValue.muoiNam}円/Tháng`}
            bordered={false}
          >
            <p>Trợ cấp nhập viện : {searchValue.hoTroKhiNhapVien}/ngay</p>
            <p>Phụ cấp tái khám : 1000円/ngay</p>
            <p>Trợ cấp nhập viện : {searchValue.nhanKhiXuatVien}/ngay</p>
          </Card>
        </Col>
        <Col span={12}>
          <Card
            title={`Gói ngắn hạn 10 năm - ${searchValue.tronDoi}円/Tháng`}
            bordered={false}
          >
            <p>Trợ cấp nhập viện : {searchValue.hoTroKhiNhapVien}/ngay</p>
            <p>Phụ cấp tái khám : 1000円/ngay</p>
            <p>Trợ cấp nhập viện : {searchValue.nhanKhiXuatVien}/ngay</p>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Result;
