import { Divider } from "antd";
import InputForm from "../../components/home/form/inputForm";
import Result from "../../components/home/result/Result";
import { useState } from "react";

const Home = () => {
  const [searchValue, setSearchValue] = useState();

  return (
    <>
      <div className="hnh-em py-5 profile-section">
        <div className="container">
          <Divider plain>
            {" "}
            <h1>
              Bảo hiểm Rakuten - dõi theo từng bước chân của bạn và gia đình
            </h1>
          </Divider>
        </div>
        <div style={{ paddingLeft: "5%", paddingRight: "5%" }}>
          <div className="khuyen-mai">
            <button className="title" id="add-employee-btn">
              Nhập thông tin của bạn
            </button>
            <InputForm setSearchValue={setSearchValue} />
          </div>
          {searchValue && <Result searchValue={searchValue} />}
        </div>
      </div>
    </>
  );
};
export default Home;
