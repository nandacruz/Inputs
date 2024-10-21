import './App.css';
import TypeFloatingTransparent from './components/TypeFloatingTransparent';

function App() {

  return (
    <div className="inputs">
      <h2>Transparent Floating Input</h2>
      <TypeFloatingTransparent type="text" name="Name" id="nameUser" minLength={3} maxLength={50}/>     
      <TypeFloatingTransparent type="email" name="Email" id="emailUser" minLength={10} maxLength={30}/>
      <TypeFloatingTransparent type="password" name="Password" id="passwordUser" minLength={8} maxLength={20}/>

      <h2>Filled Floating Input</h2>

    </div>
  )
}

export default App;
