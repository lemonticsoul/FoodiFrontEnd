import "./HeaderPage.css";
import { useNavigate } from "react-router-dom";

const HeaderPage = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/main`);
  };
  return (
    <>
      <div className="header">
        <img
          src="/img/pdlogo.png"
          alt="프디푸디"
          className="logo"
          onClick={handleCardClick}
        />
        <span className="user_info">환영하니다 --님</span>
      </div>
      <div className="line"></div>
    </>
  );
};
export default HeaderPage;
