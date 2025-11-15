import { useScrollLock } from "../../hooks/useScrollLock";
import { useEscapeKey } from "../../hooks/useEscapeKey";
import { useModalVisibility } from "../../hooks/useModalVisibility";
import { useDragToClose } from "../../hooks/useDragToClose";
import { ModalBackdrop } from "./ModalBackdrop";
import { ModalContainer } from "./ModalContainer";
import { ModalCloseButton } from "./ModalCloseButton";
import { ModalHandle } from "./ModalHandle";
import type { ModalProps } from "../../types/modal";

export const Modal = ({
  isOpen,
  onClose,
  isDismissable = true,
  size = "medium",
  scrollBehavior = "inside",
  showCloseButton = true,
  preventBackdropScroll = true,
  dragThreshold = 100,
  animationDuration = 300,
  backdropClassName,
  modalClassName,
  children,
}: ModalProps) => {
  const { isVisible, isAnimating } = useModalVisibility(
    isOpen,
    animationDuration,
  );
  useScrollLock(isOpen && preventBackdropScroll);
  useEscapeKey(isOpen && isDismissable, onClose);

  const { dragY, isDragging, bind } = useDragToClose({
    dismissable: isDismissable,
    threshold: dragThreshold,
    onClose,
  });

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end justify-center ${backdropClassName}`}
      onClick={(e) => {
        if (e.target === e.currentTarget && isDismissable) onClose();
      }}
    >
      <ModalBackdrop
        visible={isOpen}
        opacity={0.5}
        duration={animationDuration}
      />

      <ModalContainer
        isOpen={isOpen}
        isAnimating={isAnimating}
        dragY={dragY}
        isDragging={isDragging}
        duration={animationDuration}
        size={size}
        className={modalClassName}
        {...bind}
      >
        {isDismissable && size !== "full" && <ModalHandle visible />}

        {showCloseButton && isDismissable && (
          <ModalCloseButton onClick={onClose} />
        )}

        <div
          className={
            scrollBehavior === "inside" ? "overflow-y-auto flex-1 p-6" : "p-6"
          }
        >
          {children}
        </div>
      </ModalContainer>
    </div>
  );
};
