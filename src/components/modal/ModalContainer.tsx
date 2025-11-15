interface ModalContainerProps {
  isOpen: boolean;
  dragY: number;
  isAnimating: boolean;
  isDragging: boolean;
  duration: number;
  className?: string;
  size: 'small' | 'medium' | 'large' | 'full';
  children: React.ReactNode;
  onTouchStart?: React.TouchEventHandler<HTMLDivElement>;
  onTouchMove?: React.TouchEventHandler<HTMLDivElement>;
  onTouchEnd?: React.TouchEventHandler<HTMLDivElement>;
  onMouseDown?: React.MouseEventHandler<HTMLDivElement>;
}

export const ModalContainer = ({
  isOpen,
  dragY,
  isAnimating,
  isDragging,
  duration,
  className = '',
  size,
  children,
  ...bind
}: ModalContainerProps) => {
  const sizeClasses = {
    small: 'max-h-[40vh] max-w-lg',
    medium: 'max-h-[60vh] max-w-2xl',
    large: 'max-h-[80vh] max-w-4xl',
    full: 'h-screen w-screen rounded-none',
  };

  const modalTransform = isOpen && !isAnimating
    ? `translateY(${dragY}px)`
    : isOpen
    ? 'translateY(0)'
    : 'translateY(100%)';

  const modalOpacity = dragY > 0 ? Math.max(0.3, 1 - dragY / 500) : 1;

  return (
    <div
      className={`relative w-full bg-white rounded-t-2xl shadow-2xl flex flex-col transition-transform ${sizeClasses[size]} ${className}`}
      style={{
        transform: modalTransform,
        opacity: modalOpacity,
        transition: isDragging 
          ? 'none' 
          : `transform ${duration}ms ease-out, opacity ${duration}ms ease-out`,
      }}
      {...bind}
    >
      {children}
    </div>
  );
};
