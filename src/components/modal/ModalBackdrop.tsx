interface ModalBackdropProps {
  visible: boolean;
  opacity: number;
  duration: number;
  className?: string;
}

export const ModalBackdrop = ({
  visible,
  opacity,
  duration,
  className = ''
}: ModalBackdropProps) => (
  <div
    className={`absolute inset-0 bg-black ${className}`}
    style={{
      opacity: visible ? opacity : 0,
      transition: `opacity ${duration}ms ease-out`,
    }}
  />
);
