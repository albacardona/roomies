import { useOnBlur } from '@/lib/useOnBlur';
import {
  type ReactElement,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useRef,
} from 'react';
import { ModalTemplate } from '@/app/components/Modals/ModalTemplate';

interface ContextTypes {
  modalIsOpen: boolean;
  showModal: (data: ModalData) => void;
  closeModal: () => void;
  modalData: ModalData | null;
}

interface ModalData {
  title?: string;
  description?: string;
  content: ReactElement;
}

const ModalContext = createContext<ContextTypes | undefined>(undefined);

export const ModalProvider = ({ children }: React.PropsWithChildren) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<ModalData | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);

  const showModal = useCallback((data: ModalData) => {
    setModalIsOpen(true);
    setModalData(data);
  }, []);

  const closeModal = useCallback(() => {
    setModalIsOpen(false);
    setModalData(null);
  }, []);

  useOnBlur(modalRef, closeModal);

  const value = useMemo(
    () => ({ modalIsOpen, showModal, closeModal, modalData }),
    [modalIsOpen, showModal, closeModal, modalData],
  );

  return (
    <ModalContext.Provider value={value}>
      {children}
      <ModalTemplate ref={modalRef} />
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used in a ModalProvider');
  }
  return context;
};
