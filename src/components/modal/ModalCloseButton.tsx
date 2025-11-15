type ModalCloseButtonProps = {
  onClick: () => void;
};

export const ModalCloseButton = ({ onClick }: ModalCloseButtonProps) => (
  <button
    className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
    onClick={onClick}
  >
    <svg
      className="w-5 h-5 text-gray-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
);
