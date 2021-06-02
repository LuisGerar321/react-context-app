
import './App.css';
import { AppUser } from './components/AppUser';
import { ThemeProvider } from './context/ThemeContext';


function App() {
  return (


    <ThemeProvider>
      <div className="App">
        <AppUser/>
      </div>
    </ThemeProvider>



    
    
    
  

  );
}

export default App;
