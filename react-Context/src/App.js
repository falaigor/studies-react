import { GlobalStorage } from './GlobalContext';
import Produto from './Produto';

function App() {
  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  );
}

export default App;
