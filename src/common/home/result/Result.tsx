import { Button, Card, Col, Divider, Row } from "antd";

const Result = () => {
  return (
    <>
      Kết quả phù hợp với bạn nhất
      <Row gutter={16}>
        <Col span={12}>
          <Card title="Gói ngắn hạn - Gói 7病気" bordered={false}>
            <p>Trợ cấp nhập viện : 5000円/ngay</p>
            <p>Phụ cấp tái khám : 1000円/ngay</p>
            <p>Trợ cấp xuất viện : 15000円/ngay</p>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Gói trọn đời - Gói 7病気" bordered={false}>
            <p>Trợ cấp khi mắc ung thư : 5000円/ngay</p>
            <p>Phụ cấp tái khám : 1000円/ngay</p>
            <p>Trợ cấp xuất viện : 15000円/ngay</p>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Result;
