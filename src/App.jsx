
import './App.css';
import Navbar from './components/Navbar';
import Principal from './components/Principal';
import HolaProvider  from './context/HolaProvider';
import ThemeProvider from './context/ThemeProvider';

function App() {

  return (
    <HolaProvider>
      <ThemeProvider>
        {/* Lo importante que nuestros componentes esten dentro de los providers */}
        <Navbar />
        <Principal />

      </ThemeProvider>
    </HolaProvider>
  );
}

export default App;
