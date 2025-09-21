export default function Modal({ handleClose, handleOfferAcceptance }) {
  return (
    <>
      <div className="modal-overlay" onClick={handleClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-header-btn" onClick={handleClose}>
            X
          </button>
          <div className="modal-body">
            Click the button below to accept the amazing offer.
          </div>
          <button className="modal-footer-btn" onClick={handleOfferAcceptance}>
            Accept Offer
          </button>
        </div>
      </div>
    </>
  );
}
