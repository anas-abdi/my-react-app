import './App.css'
import Greetings from "./assets/component/Greetings";
import Header from "./assets/component/Header";
import Counter from "./assets/component/Counter";
import ThemeToggle from "./assets/component/ThemeSwitcher";
import ButtonClick from './assets/component/ButtonClick';
import Inputer from './assets/component/Inputer';
import WelcomeMessage from './assets/component/WelcomeMessage';
import Notification from './assets/component/Notification';
function App() {
  

  return (
    <>
      <ThemeToggle />
      <Inputer />
      < Notification />
      <Greetings name="Anas" />
      <ButtonClick />
      <Greetings name="Anas" />
      <WelcomeMessage />
        <Header />
 
      
    
      <Counter/>
      
    </>
  )
}

export default App
