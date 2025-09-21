import { useState } from "react";

import "./styles.css";
import Modal from "./modal";

export default function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOfferAccepted, setIsOfferAccepted] = useState(false);

  const handleClose = () => {
    setIsOpenModal(false);
  };

  const handleOfferAcceptance = () => {
    setIsOfferAccepted(true);
    setIsOpenModal(false);
  };

  return (
    <div className="App">
      <div className="show-offer">
        {isOfferAccepted ? (
          <div>"Offer Accepted"</div>
        ) : (
          <button className="offer-btn" onClick={() => setIsOpenModal(true)}>
            Show Offer
          </button>
        )}
      </div>
      {isOpenModal && (
        <Modal
          handleClose={handleClose}
          handleOfferAcceptance={handleOfferAcceptance}
        />
      )}
    </div>
  );
}
