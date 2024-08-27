import ConfirmationModal from '../../../shared/core/confirm-model/ConfirmationModal.tsx';
import {useConfirmationModal} from "../../context/ConfirmationModalContext.tsx";

const ConfirmationModalWrapper = () => {
  const {modalData, closeModal} = useConfirmationModal();

  return (
    <ConfirmationModal
      open={modalData.isOpen}
      title={modalData.title}
      message={modalData.message}
      onConfirm={modalData.onConfirm}
      onCancel={closeModal}
    />
  );
};

export default ConfirmationModalWrapper;