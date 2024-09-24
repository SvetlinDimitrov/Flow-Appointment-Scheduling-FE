import {useEffect, useState} from "react";
import ConfirmationModal from '../../../shared/core/confirm-model/ConfirmationModal.tsx';
import {useConfirmationModal} from "../../context/ConfirmationModalContext.tsx";
import FullScreenLoader from "../loading/full-screen-loader/FullScreenLoader.tsx";

const ConfirmationModalWrapper = () => {
  const {modalData, closeModal} = useConfirmationModal();
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirm = async () => {
    setIsLoading(true);
    modalData.onConfirm();
  };

  useEffect(() => {
    setIsLoading(false);
  }, [closeModal]);

  return (
    <>
      <FullScreenLoader isLoading={isLoading}/>
      <ConfirmationModal
        open={modalData.isOpen}
        title={modalData.title}
        message={modalData.message}
        onConfirm={handleConfirm}
        onCancel={closeModal}
      />
    </>
  );
};

export default ConfirmationModalWrapper;