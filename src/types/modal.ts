export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  isDismissable?: boolean;
  size?: 'small' | 'medium' | 'large' | 'full';
  scrollBehavior?: 'inside' | 'outside';
  showCloseButton?: boolean;
  preventBackdropScroll?: boolean;
  dragThreshold?: number;
  animationDuration?: number;
  backdropClassName?: string;
  modalClassName?: string;
}

export interface UseDragToCloseProps {
  dismissable: boolean;
  threshold: number;
  onClose?: () => void;
}

export interface DragState {
  dragY: number;
  isDragging: boolean;
  startY: number;
}
