import React from 'react';
import Button,{ButtonType, ButtonSize} from './components/Button/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button>
          hello
        </Button>
        <Button
          onClick={() => {alert("danger")}}
          btnType={ButtonType.Danger}
          btnSize={ButtonSize.Small}
        >
          hello2
        </Button>
        <Button
          btnType={ButtonType.Link}
          href="https://www.baidu.com"
          target="_blank"
        >
          hello3
        </Button>
        <Button
          btnType={ButtonType.Primary}
          btnSize={ButtonSize.Large}
          disabled
        >
          hello3
        </Button>
      </header>
    </div>
  );
}

export default App;
