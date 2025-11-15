type ModalBackdropProps = {
  visible: boolean;
  opacity: number;
  duration: number;
};

export const ModalBackdrop = ({
  visible,
  opacity,
  duration,
}: ModalBackdropProps) => (
  <div
    className="absolute inset-0 bg-black"
    style={{
      opacity: visible ? opacity : 0,
      transition: `opacity ${duration}ms ease-out`,
    }}
  />
);
