import { useCallback, useRef, useState } from "react";

interface DragOptions {
  dismissable: boolean;
  threshold: number;
  onClose?: () => void;
}

import { useCallback, useRef, useState, useEffect } from "react";

interface DragOptions {
  dismissable: boolean;
  threshold: number;
  onClose?: () => void;
}

export const useDragToClose = ({ dismissable, threshold, onClose }: DragOptions) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragY, setDragY] = useState(0);
  const startYRef = useRef(0);

  const onMove = useCallback((clientY: number) => {
    if (!isDragging || !dismissable) return;
    const deltaY = clientY - startYRef.current;
    if (deltaY > 0) setDragY(deltaY * 0.9);
  }, [isDragging, dismissable]);

  const onEnd = useCallback(() => {
    if (!isDragging || !dismissable) return;
    const shouldClose = dragY > threshold;
    if (shouldClose) onClose?.();
    else setDragY(0);
    setIsDragging(false);
  }, [isDragging, dismissable, dragY, threshold, onClose]);

  const onStart = useCallback((clientY: number) => {
    if (!dismissable) return;
    setIsDragging(true);
    startYRef.current = clientY;
  }, [dismissable]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => onMove(e.clientY);
    const handleMouseUp = () => onEnd();

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, onMove, onEnd]);

  return {
    dragY,
    isDragging,
    bind: {
      onTouchStart: (e: React.TouchEvent) => onStart(e.touches[0].clientY),
      onTouchMove: (e: React.TouchEvent) => onMove(e.touches[0].clientY),
      onTouchEnd: onEnd,
      onMouseDown: (e: React.MouseEvent) => onStart(e.clientY),
    }
  };
};
