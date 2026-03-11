import './styles/global.css';
import './styles/animations.css';
import DancingCat from './components/DancingCat';
import AnimationControls from './components/AnimationControls';
import { useAnimation } from './hooks/useAnimation';

export default function App() {
  const { isPlaying, toggle, speed, changeSpeed } = useAnimation(true);

  return (
    <main className="app">
      <h1 className="title">
        춤추는 고양이
      </h1>
      <p className="subtitle">{isPlaying ? '야옹~ 신나게 춤을 춥니다!' : '쉬는 중... 클릭하면 다시 춰요!'}</p>

      <div className="stage">
        <DancingCat isPlaying={isPlaying} speed={speed} />
      </div>

      <AnimationControls
        isPlaying={isPlaying}
        onToggle={toggle}
        speed={speed}
        onSpeedChange={changeSpeed}
      />

      <style>{`
        .app {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          padding: 40px 20px;
          width: 100%;
          max-width: 600px;
        }

        .title {
          font-size: clamp(2rem, 6vw, 3.5rem);
          font-weight: 900;
          background: linear-gradient(90deg, #FF6B9D, #FFD93D, #6BCB77, #4D96FF);
          background-size: 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: bg-pulse 3s ease infinite, title-shake 1s ease-in-out infinite;
          letter-spacing: -1px;
          text-align: center;
        }

        .subtitle {
          font-size: clamp(0.9rem, 2.5vw, 1.1rem);
          color: rgba(255,255,255,0.7);
          text-align: center;
          min-height: 1.5em;
          transition: all 0.3s ease;
        }

        .stage {
          position: relative;
          width: 100%;
          max-width: 420px;
          height: 360px;
          background: rgba(255,255,255,0.07);
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1);
        }

        .stage::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 200px;
          height: 60px;
          background: radial-gradient(ellipse, rgba(255,215,0,0.2) 0%, transparent 70%);
          pointer-events: none;
        }

        .cat-scene {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }

        .cat-wrapper {
          padding-bottom: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .cat-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .cat-body-group {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .cat-image {
          width: clamp(140px, 35vw, 200px);
          height: auto;
          display: block;
          user-select: none;
        }

        .music-notes {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .controls {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          width: 100%;
          max-width: 420px;
          background: rgba(255,255,255,0.07);
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          padding: 20px 24px;
        }

        .btn-toggle {
          font-size: 1.2rem;
          font-weight: 700;
          padding: 14px 40px;
          border-radius: 50px;
          transition: all 0.2s ease;
          letter-spacing: 0.5px;
          width: 100%;
          max-width: 240px;
        }

        .btn-play {
          background: linear-gradient(135deg, #6BCB77, #4D96FF);
          color: white;
          box-shadow: 0 4px 20px rgba(107,203,119,0.4);
        }

        .btn-play:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(107,203,119,0.5);
        }

        .btn-pause {
          background: linear-gradient(135deg, #FF6B9D, #e94560);
          color: white;
          box-shadow: 0 4px 20px rgba(233,69,96,0.4);
        }

        .btn-pause:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(233,69,96,0.5);
        }

        .btn-toggle:active {
          transform: translateY(0) scale(0.97);
        }

        .speed-control {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          justify-content: center;
        }

        .speed-label {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.6);
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .speed-buttons {
          display: flex;
          gap: 8px;
        }

        .btn-speed {
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          background: rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.7);
          border: 1px solid rgba(255,255,255,0.15);
          transition: all 0.2s ease;
        }

        .btn-speed:hover {
          background: rgba(255,255,255,0.15);
          color: white;
        }

        .btn-speed.active {
          background: linear-gradient(135deg, #FFD93D, #FF6B9D);
          color: #1a1a2e;
          border-color: transparent;
          box-shadow: 0 2px 12px rgba(255,217,61,0.4);
        }

        @media (max-width: 480px) {
          .app { padding: 24px 16px; gap: 16px; }
          .stage { height: 300px; }
          .controls { padding: 16px; }
          .btn-toggle { font-size: 1rem; padding: 12px 32px; }
        }

        @media (min-width: 768px) {
          .stage { height: 400px; }
        }
      `}</style>
    </main>
  );
}
