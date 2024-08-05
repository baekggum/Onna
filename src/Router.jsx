import { Route, Routes } from "react-router-dom";
import Product from "./Trainer/pages/Product";
import ProductDetail from "./Trainer/pages/ProductDetail";
import ProductReservation from "./Trainer/pages/ProductReservation";
import ProductReview from "./Trainer/pages/ProductReview";
import ProductCheckout from "./Trainer/pages/Checkout";
import MyPage from "./Mypage/pages/MyPage";
import PersonalInfoPage from "./Mypage/pages/PersonalInfoPage";
import PaymentPage from "./Mypage/pages/PaymentPage";
import AppointmentPage from "./Mypage/pages/AppointmentPage";
import SettingPage from "./Mypage/pages/SettingPage";
import ReviewPage from "./Mypage/pages/ReviewPage";

import MainPage from "./Home/pages/mainpage";
import Search from "./Home/pages/Search";
import Product_reg from "./Home/pages/reg_category/Product_reg";
import Menu_reg from "./Home/pages/Menu_reg";
import Fee from "./Home/pages/Fee";
import Map from "./Home/pages/Map";
import RegInfo from "./Home/pages/RegInfo";
import Sports from "./Home/pages/reg_category/Sports";
import Ballsports from "./Home/pages/reg_category/Ballsports";
import Seasonsports from "./Home/pages/reg_category/Seasonsports";
import Combatsports from "./Home/pages/reg_category/Combatsports";
import Fitness from "./Home/pages/reg_category/Fitness";
import AddressSearch from "./Home/pages/AddressSearch";
import AddressVerification from "./Home/pages/AddressVerification";
import RegisterPage from "./User/pages/RegisterPage";
import CompletePage from "./User/pages/CompletePage";
import LoginPage from "./User/pages/LoginPage";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/complete" element={<CompletePage />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/productdetail" element={<ProductDetail />}></Route>
        <Route
          path="/productdetail/reservation"
          element={<ProductReservation />}
        ></Route>
        <Route path="/productdetail/review" element={<ProductReview />}></Route>
        <Route
          path="/productdetail/checkout"
          element={<ProductCheckout />}
        ></Route>
        <Route path="/profile" element={<MyPage />}></Route>
        <Route path="/personal" element={<PersonalInfoPage />}></Route>
        <Route path="/payment" element={<PaymentPage />}></Route>
        <Route path="/appointment" element={<AppointmentPage />}></Route>
        <Route path="/setting" element={<SettingPage />}></Route>
        <Route path="/review" element={<ReviewPage />}></Route>
        <Route path="/mainpage" element={<MainPage />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/productreg" element={<Product_reg />}></Route>
        <Route path="/Menureg" element={<Menu_reg />}></Route>
        <Route path="/fee" element={<Fee />}></Route>
        <Route path="/map" element={<Map />}></Route>
        <Route path="/reginfo" element={<RegInfo />}></Route>
        <Route path="/sportsreg" element={<Sports />}></Route>
        <Route path="/ballreg" element={<Ballsports />}></Route>
        <Route path="/seasonreg" element={<Seasonsports />}></Route>
        <Route path="/combatreg" element={<Combatsports />}></Route>
        <Route path="/fitnessreg" element={<Fitness />}></Route>
        <Route path="/addresssearch" element={<AddressSearch />}></Route>
        <Route path="/addressver" element={<AddressVerification />}></Route>
      </Routes>
    </>
  );
}
