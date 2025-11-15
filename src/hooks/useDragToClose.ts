import { useState, useRef, useCallback } from 'react';
import { UseDragToCloseProps, DragState } from '../types/modal';

export const useDragToClose = ({ dismissable, threshold, onClose }: UseDragToCloseProps) => {
  const [dragState, setDragState] = useState<DragState>({
    dragY: 0,
    isDragging: false,
    startY: 0
  });

  const dragStartYRef = useRef(0);
  const lastYRef = useRef(0);
  const velocityRef = useRef(0);

  const handleDragStart = useCallback((clientY: number) => {
    if (!dismissable) return;
    
    setDragState({
      dragY: 0,
      isDragging: true,
      startY: clientY
    });
    dragStartYRef.current = clientY;
    lastYRef.current = clientY;
    velocityRef.current = 0;
  }, [dismissable]);

  const handleDragMove = useCallback((clientY: number) => {
    if (!dragState.isDragging || !dismissable) return;
    
    const deltaY = clientY - dragState.startY;
    const timeDelta = 16;
    velocityRef.current = (clientY - lastYRef.current) / timeDelta;
    lastYRef.current = clientY;
    
    if (deltaY > 0) {
      const resistance = Math.min(1, 1 - deltaY / 1000);
      setDragState(prev => ({ ...prev, dragY: deltaY * resistance }));
    }
  }, [dragState.isDragging, dragState.startY, dismissable]);

  const handleDragEnd = useCallback(() => {
    if (!dragState.isDragging || !dismissable) return;
    
    const shouldClose = dragState.dragY > threshold || velocityRef.current > 0.5;
    
    if (shouldClose) {
      onClose?.();
    }
    
    setDragState({
      dragY: 0,
      isDragging: false,
      startY: 0
    });
  }, [dragState.isDragging, dragState.dragY, dismissable, threshold, onClose]);

  // Touch handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    handleDragStart(touch.clientY);
  }, [handleDragStart]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    handleDragMove(touch.clientY);
  }, [handleDragMove]);

  const handleTouchEnd = useCallback(() => {
    handleDragEnd();
  }, [handleDragEnd]);

  // Mouse handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    handleDragStart(e.clientY);
  }, [handleDragStart]);

  useEffect(() => {
    if (dragState.isDragging) {
      const handleMouseMove = (e: MouseEvent) => handleDragMove(e.clientY);
      const handleMouseUp = () => handleDragEnd();

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [dragState.isDragging, handleDragMove, handleDragEnd]);

  return {
    dragY: dragState.dragY,
    isDragging: dragState.isDragging,
    bind: {
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
      onMouseDown: handleMouseDown,
    }
  };
};
