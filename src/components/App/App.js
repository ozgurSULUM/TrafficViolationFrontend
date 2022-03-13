import Tabs from '../Tabs/Tabs';
import theme from '../../services/theme';
import { ThemeProvider } from '@mui/material/styles';
import { useViolations } from './hooks';



function App() {
  const [violations1, violations2, violations3] = useViolations();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Tabs violations1={violations1} violations2={violations2} violations3={violations3} />
      </ThemeProvider>
    </>
  );
}

export default App;
