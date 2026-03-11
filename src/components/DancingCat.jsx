import catSvg from '../assets/images/cat.svg';
import '../styles/animations.css';

export default function DancingCat({ isPlaying, speed }) {
  const animationStyle = {
    animationPlayState: isPlaying ? 'running' : 'paused',
    animationDuration: `${2 / speed}s`,
  };

  const bodyStyle = {
    ...animationStyle,
    animationDuration: `${1.5 / speed}s`,
  };

  const tailStyle = {
    ...animationStyle,
    animationDuration: `${0.8 / speed}s`,
  };

  return (
    <div className="cat-scene">
      <div className="music-notes" aria-hidden="true">
        {isPlaying && (
          <>
            <span className="note note-1" style={animationStyle}>♪</span>
            <span className="note note-2" style={{ ...animationStyle, animationDuration: `${1.2 / speed}s` }}>♫</span>
            <span className="note note-3" style={{ ...animationStyle, animationDuration: `${0.9 / speed}s` }}>♩</span>
            <span className="note note-4" style={{ ...animationStyle, animationDuration: `${1.5 / speed}s` }}>♬</span>
          </>
        )}
      </div>

      <div className="cat-wrapper">
        <div className="cat-container dance-bounce" style={animationStyle}>
          <div className="cat-body-group">
            <div className="cat-swing" style={bodyStyle}>
              <img
                src={catSvg}
                alt="춤추는 고양이"
                className="cat-image"
                draggable={false}
              />
            </div>
            <div className="cat-shadow" style={animationStyle} />
          </div>
        </div>
      </div>

      <div className="disco-lights" aria-hidden="true">
        <div className="light light-1" style={tailStyle} />
        <div className="light light-2" style={{ ...tailStyle, animationDuration: `${1.1 / speed}s` }} />
        <div className="light light-3" style={{ ...tailStyle, animationDuration: `${0.7 / speed}s` }} />
      </div>
    </div>
  );
}
