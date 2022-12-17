import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';

import styled from "styled-components";
import { keyframes } from "styled-components";
import styledEngine from '@mui/styled-engine';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ display: 'flex', justifyContent: 'flex-start', backgroundClip: '#161d2d' }}>
        <AnimatedGradientBanner>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <AnimatedGradientText>Hello There,</AnimatedGradientText>
            <h1>I'm Ricky</h1>
          </div>

        </AnimatedGradientBanner>
        <div style={{ background: "#161d2d", height: '50rem', width: '100%' }}>

        </div>
      </header>
    </div>
  );
}

const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(0deg);
 }
 to {
   -webkit-filter: hue-rotate(-360deg);
 }
`;

const gradient = keyframes`
0% {
  background-position: 0% 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0% 50%;
}
`;

const AnimatedGradientBanner = styled.div`
width: 100%;
height: 40vh;
display: flex;
justify-content: center;

background-image: 
-webkit-linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
-webkit-animation: ${gradient} 15s ease infinite;
textAlign: center;
padding: 5rem;
borderRadius: 12rem;
`

const AnimatedGradientText = styled.h1`
  color: #f35626;
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 10s infinite linear;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-feature-settings: "kern";
  font-size: 48px;
  font-weight: 700;
  line-height: 48px;
  overflow-wrap: break-word;
  text-align: center;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
`;
export default App;
