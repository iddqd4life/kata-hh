import ThemeProvider from './providers/ThemeProvider';
import Main from './pages/Main/Main';

const App = () => (
  <ThemeProvider>
    <Main />
  </ThemeProvider>
);

export default App;
