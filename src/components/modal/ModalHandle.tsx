type ModalHandleProps = {
  visible: boolean;
};

export const ModalHandle = ({ visible }: ModalHandleProps) =>
  visible ? (
    <div className="flex justify-center py-3">
      <div className="w-12 h-1 bg-gray-300 rounded-full" />
    </div>
  ) : null;
