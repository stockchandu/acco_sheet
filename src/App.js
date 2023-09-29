import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Link } from "react-router-dom";
import { Modal } from "./components/common/Modal";
function App() {
  const { t, i18n } = useTranslation();
  const handleChange = (value) => {
    i18n.changeLanguage(value);
  };
  return (
    <>
      {/* <Modal /> */}
      <Header />
      <div className="flex w-full h-[48rem] ">
        <div className="w-1/12 h-full border">
          <div className="w-10/12 p-1">
            <p>Home</p>
            <p>
              <Link to="/create-sheet">Create Sheet</Link>
            </p>
          </div>
        </div>
        <div className="w-9/12 border ml-1 p-2">
          <Outlet />
        </div>
        <div className="border w-2/12 ml-1">Right sidebar</div>
      </div>
      <div className="w-12/12 border h-[5rem]  flex justify-center items-center">
        AccoSheet. All rights reserved, Built with ❤️ in India
      </div>
    </>
  );
}

export default App;
