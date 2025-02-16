import { useState } from 'react';

export default () => {
  const [state, setState] = useState({ a: 1, b: 2 });
  return (
    <div>
      <h1>{JSON.stringify(state)}</h1>
      <button onClick={() => setState((state) => ({ a: state.a + 1, b: state.b }))}>
        setState
      </button>
      <button onClick={() => setState({ a: 1, b: 2 })}>setState</button>
    </div>
  );
};
