import React from 'react';
import Button from './components/Button/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          learn react Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button>
          hello
        </Button>
        <Button
          onClick={() => {alert("danger")}}
          btnType='danger'
          btnSize='sm'
        >
          hello2
        </Button>
        <Button
          btnType='link'
          href="https://www.baidu.com"
          target="_blank"
        >
          hello3
        </Button>
        <Button
          btnType='primary'
          btnSize='lg'
        >
          hello3
        </Button>
      </header>
    </div>
  );
}

export default App;
