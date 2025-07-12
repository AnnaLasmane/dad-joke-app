import { useState } from 'react';
import './App.css';

function App() {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);

  const getJoke = async () => {
    setLoading(true);
    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' },
    });
    const data = await response.json();
    setJoke(data.joke);
    setLoading(false);
  };

  return (
<div className="app">
  <h1>Dad Joke Generator 😄</h1>
  <button onClick={getJoke} disabled={loading}>
    {loading ? 'Loading...' : 'Get a joke'}
  </button>
  <p className="joke-box">
  {loading ? 'Loading your daily dad wisdom...' : joke || 'Click the button to get a joke!'}
</p>

</div>
  );
}

export default App;
