import Layout from './components/Layout';
import DancingCat from './components/DancingCat';
import AnimationControls from './components/AnimationControls';
import { useAnimation } from './hooks/useAnimation';
import './styles/global.css';
import './styles/app.css';

function App() {
  const { isPlaying, toggle, danceStyle, cycleDanceStyle } = useAnimation(true);

  return (
    <Layout>
      <div className="stage">
        <DancingCat isPlaying={isPlaying} danceStyle={danceStyle} />
      </div>
      <AnimationControls
        isPlaying={isPlaying}
        onToggle={toggle}
        danceStyle={danceStyle}
        onCycleDanceStyle={cycleDanceStyle}
      />
    </Layout>
  );
}

export default App;
