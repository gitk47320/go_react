import './App.css';
import { useState } from 'react';
import ApiClient from "./ApiClient";

const App = () => {
  const [ message, getMessage ] = useState('');
  
  const getApiResponse = (response: any) => {
    getMessage(response);
  };

  return (
    <div>
      <ApiClient getApiResponse={getApiResponse} />
      <h1>Vite + React</h1>   
      <p>
        {message}
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
