import { useProgress } from '@react-three/drei';
import { useEffect } from 'react';

export const LoadingScreen = (props) => {
  const { started, setStarted } = props;
  const { progress, total, loaded, item } = useProgress();

  useEffect(() => {
    console.log(progress, total, loaded, item);
    if (progress === 100) {
      setTimeout(() => {
        setStarted(true);
      }, 800);
    }
  }, [progress, total, loaded, item]);

  return (
    <div
      className={`pointer-events-none fixed left-0 top-0 z-[10000] flex h-full w-full items-center
  justify-center bg-indigo-50 transition-opacity duration-1000
  ${started ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="md:text-9xl relative text-4xl font-bold text-indigo-900">
        <div
          className="absolute left-0 top-0  overflow-hidden truncate text-clip transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        >
          Melo-Emo! Touch the Heartstrings
        </div>
        <div className="opacity-40">Melo-Emo! Touch the Heartstrings</div>
      </div>
    </div>
  );
};
