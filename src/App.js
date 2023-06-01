// React Router
import { Outlet } from 'react-router-dom';

// Components
import Navbar from './components/layout/Navbar';

// MUI
import { ThemeProvider } from '@emotion/react';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
