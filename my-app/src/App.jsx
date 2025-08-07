import companyLogo from './assets/logo.svg';
import './styles/LogoStyles.css';
import LoginForm from './LoginForm';

function App() {

  return (
    <>
    <div className="glass-box">
      <LoginForm/>
      <div className="center">
        <hr className="divider"/>
      </div>
      <div className="forgot">
        <button>forgot password?</button>
      </div>
    </div>
    </>
  )
}

export default App
