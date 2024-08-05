import { useState } from "react";

import LessonCard from "../components/Payment/LessonCard";
import LessonListView from "../components/Payment/LessonListView";
import ReceiptModal from "../components/Payment/ReceiptModal";
import Page from "./Page";

import image from "/image.png";

function PaymentPage() {
  const [latest, ...others] = [
    {
      title: "오타니 쇼헤이 트레이너의 레슨",
      image,
      startDate: new Date(),
      trainer: "오타니 쇼헤이",
      place: "대구광역시 라이온즈파크",
      contact: "010-1234-5678",
    },
    {
      title: "오타니 쇼헤이 트레이너의 레슨",
      image,
      startDate: new Date(),
      trainer: "오타니 쇼헤이",
      place: "대구광역시 라이온즈파크",
      contact: "010-1234-5678",
    },
    {
      title: "오타니 쇼헤이 트레이너의 레슨",
      image,
      startDate: new Date(),
      trainer: "오타니 쇼헤이",
      place: "대구광역시 라이온즈파크",
      contact: "010-1234-5678",
    },
    {
      title: "오타니 쇼헤이 트레이너의 레슨",
      image,
      startDate: new Date(),
      trainer: "오타니 쇼헤이",
      place: "대구광역시 라이온즈파크",
      contact: "010-1234-5678",
    },
  ];

  const [modalState, setModalState] = useState({ lesson: null, isOpen: false });
  const openModal = (lesson) => {
    setModalState({ lesson, isOpen: true });
  };
  const closeModal = () => {
    setModalState({ lesson: null, isOpen: false });
  };

  return (
    <Page title="결제 및 내역" prev="/profile">
      <LessonCard lesson={latest} openModal={openModal} />
      <LessonListView lessons={others} openModal={openModal} />
      {modalState.isOpen && (
        <ReceiptModal lesson={modalState.lesson} closeModal={closeModal} />
      )}
    </Page>
  );
}

export default PaymentPage;
