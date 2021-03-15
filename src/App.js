import {useState} from 'react';

import Welcome from './Welcome';

import './App.css';

function App() {
  const [displayText, setDisplayText] = useState(false);
  const [displayText2, setDisplayText2] = useState(false);

  const onDisplayButtonClick = () => {
    setDisplayText(displayText => !displayText);
  };
  
  const onDisplayButtonClick2 = () => {
    setDisplayText2(displayText => !displayText);
  };

  return (
    <div className="App">
      <button onClick={onDisplayButtonClick}>Faire apparaitre du texte</button>
      {displayText && <div>{'Le texte s\'affiche'}</div>}
      
      <button onClick={onDisplayButtonClick2}>Faire apparaitre du texte 2</button>
      {displayText2 && <div>{'Le texte s\'affiche'}</div>}

      <Welcome />
    </div>
  );
} 

export default App;
