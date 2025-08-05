import companyLogo from './assets/logo.svg';
import './styles/LogoStyles.css';

function App() {

  return (
    <>
    <div className="glass-box">
      <div>
        <img src={companyLogo} className="logo center-wrapper" alt="Company Logo" />
        <h1>Signal</h1>
      </div>
      <div className="center">
        <label>username: </label>
        <input></input>
      </div>
      <div className="center">
        <label>password: </label>
        <input></input>
      </div>
      <div className="center">
        <button>submit</button>
      </div>
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
