import { useState, useCallback } from 'react';

export function useAnimation(initialState = true) {
  const [isPlaying, setIsPlaying] = useState(initialState);
  const [speed, setSpeed] = useState(1);

  const toggle = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  const changeSpeed = useCallback((newSpeed) => {
    setSpeed(newSpeed);
  }, []);

  return { isPlaying, toggle, speed, changeSpeed };
}
