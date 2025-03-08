import React from 'react';
import BackButton from './components/BackButton';
import Logo from './components/Logo';
import WelcomeText from './components/WelcomeText';
import InfoText from './components/InfoText';
import NextButton from './components/NextButton';

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex", alignItems: "center", width: "100%", position: "relative", top: "43px" }}>
        <BackButton />
        <div style={{
          position: "absolute",
          top: "43px",
          left: "50%", // Center the logo horizontally
          transform: "translateX(-50%)",
        }}>
          <Logo />
        </div>
      </div>

      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "226px",
      }}>
        <WelcomeText />
      </div>

      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "41px",
        left: "55px",
        textAlign: "center",
      }}>
        <InfoText />
      </div>

      <div className="button-container">
        <NextButton />
      </div>

    </div>
  );
}

export default App;
