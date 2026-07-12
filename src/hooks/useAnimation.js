import { useCallback, useState } from 'react';

const DANCE_STYLES = ['bounce', 'twist', 'wiggle'];

export function useAnimation(initialPlaying = true) {
  const [isPlaying, setIsPlaying] = useState(initialPlaying);
  const [danceStyle, setDanceStyle] = useState(DANCE_STYLES[0]);

  const toggle = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  const cycleDanceStyle = useCallback(() => {
    setDanceStyle((prev) => {
      const nextIndex = (DANCE_STYLES.indexOf(prev) + 1) % DANCE_STYLES.length;
      return DANCE_STYLES[nextIndex];
    });
  }, []);

  return { isPlaying, toggle, danceStyle, cycleDanceStyle, danceStyles: DANCE_STYLES };
}
