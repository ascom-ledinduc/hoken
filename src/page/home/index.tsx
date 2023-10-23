import {
  Button,
  Divider,
  Form,
  Input,
  Select,
  Space,
  Tooltip,
  Typography,
} from "antd";
import InputForm from "../../common/home/form/inputForm";
import Result from "../../common/home/result/Result";
const { Option } = Select;

const Home = () => {
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
        <div>
          <div className="khuyen-mai">
            <button className="title" id="add-employee-btn">
              Nhập thông tin của bạn
            </button>
            <InputForm />
          </div>
        </div>
        <Result />
      </div>
    </>
  );
};
export default Home;
