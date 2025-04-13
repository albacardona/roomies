import { useModal } from '@/context/modal-context';
import { forwardRef } from 'react';
import { Button } from '../../../components/ui/button';
import { X } from '@untitled-ui/icons-react';

interface ModalProps {
  hasFooter?: boolean;
  onCancel?: () => void;
  onConfirm?: () => void;
}

export const ModalTemplate = forwardRef<HTMLDivElement, ModalProps>(
  ({ hasFooter = false, onCancel, onConfirm }, ref) => {
    const { modalIsOpen, closeModal, modalData } = useModal();

    if (!modalIsOpen) {
      return null;
    }

    const handleClickCancel = () => {
      if (onCancel) {
        onCancel();
      }
      closeModal();
    };

    return (
      <div className="absolute top-0 h-screen w-screen z-10 flex items-center justify-center bg-modal-overlay">
        <div
          ref={ref}
          className="w-1/2 h-fit max-w-3xl max-h-[calc(100%-150px)] bg-bg-primary rounded-2xl py-6 px-12 overflow-auto flex flex-col gap-4"
        >
          <div className="relative flex items-start justify-between">
            <div className="flex flex-col items-center justify-between gap-6">
              <h4 className="text-fg-primary text-xl">{modalData?.title}</h4>
              {modalData?.description && (
                <p className="text-fg-primary text-sm">{modalData?.description}</p>
              )}
            </div>
            <Button
              variant="ghost"
              size="raw"
              className="absolute -top-4 -right-8"
              onClick={closeModal}
            >
              <X className="text-fg-primary" />
            </Button>
          </div>
          {modalData?.content}
          {hasFooter && (
            <div>
              <Button variant="secondary" onClick={handleClickCancel} />
              <Button onClick={onConfirm} />
            </div>
          )}
        </div>
      </div>
    );
  },
);
