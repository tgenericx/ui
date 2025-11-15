export interface ModalProps {
isOpen: boolean;
onClose: () => void;
isDismissable?: boolean;
size?: "small" | "medium" | "large" | "full";
scrollBehavior?: "inside" | "outside";
showCloseButton?: boolean;
preventBackdropScroll?: boolean;
dragThreshold?: number;
animationDuration?: number;
backdropClassName?: string;
modalClassName?: string;
children?: React.ReactNode;
}
