import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import CustomHeader from "./header";
const LayoutMain = () => {
  return (
    <Layout>
      <CustomHeader />
      <Content>
        <Outlet />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Mysempai ©2023 Created by Le Dinh Duc
      </Footer>
    </Layout>
  );
};
export default LayoutMain;
