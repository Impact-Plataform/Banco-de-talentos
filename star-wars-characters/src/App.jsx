import { AppRouter } from './AppRouter';
import { CharacterProvider } from './context/CharacterProvider';

const App = () => {
  return (
    <CharacterProvider>
      <AppRouter />
    </CharacterProvider>
  );
};

export default App;
