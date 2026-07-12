const DANCE_LABELS = {
  bounce: '통통 튀기',
  twist: '빙글빙글',
  wiggle: '흔들흔들',
};

function AnimationControls({ isPlaying, onToggle, danceStyle, onCycleDanceStyle }) {
  return (
    <div className="animation-controls">
      <button
        type="button"
        className="control-button control-button--primary"
        onClick={onToggle}
        aria-pressed={isPlaying}
      >
        {isPlaying ? '⏸ 정지' : '▶ 재생'}
      </button>
      <button
        type="button"
        className="control-button"
        onClick={onCycleDanceStyle}
        disabled={!isPlaying}
      >
        🎵 춤 스타일: {DANCE_LABELS[danceStyle]}
      </button>
    </div>
  );
}

export default AnimationControls;
