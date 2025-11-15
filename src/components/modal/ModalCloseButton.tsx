interface ModalCloseButtonProps {
  onClick: () => void;
}

export const ModalCloseButton = ({ onClick }: ModalCloseButtonProps) => (
  <button
    className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-gray-100 transition-colors"
    onClick={onClick}
    aria-label="Close modal"
  >
    <svg
      className="w-5 h-5 text-gray-500"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
);
