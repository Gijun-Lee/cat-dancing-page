export default function AnimationControls({ isPlaying, onToggle, speed, onSpeedChange }) {
  return (
    <div className="controls" role="region" aria-label="애니메이션 컨트롤">
      <button
        className={`btn-toggle ${isPlaying ? 'btn-pause' : 'btn-play'}`}
        onClick={onToggle}
        aria-label={isPlaying ? '애니메이션 정지' : '애니메이션 재생'}
      >
        {isPlaying ? '⏸ 정지' : '▶ 재생'}
      </button>

      <div className="speed-control">
        <span className="speed-label">속도</span>
        <div className="speed-buttons" role="group" aria-label="재생 속도 선택">
          {[0.5, 1, 1.5, 2].map((s) => (
            <button
              key={s}
              className={`btn-speed ${speed === s ? 'active' : ''}`}
              onClick={() => onSpeedChange(s)}
              aria-pressed={speed === s}
              aria-label={`속도 ${s}배`}
            >
              {s}x
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
