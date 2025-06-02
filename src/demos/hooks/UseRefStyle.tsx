import { useRef } from 'react';

const App = () => {
  const ref = useRef();

  const handleClick = () => {
    const e = ref.current! as HTMLElement;
    if (e.style.backgroundColor) {
      e.style.backgroundColor = '';
      e.style.color = '';
    } else {
      e.style.backgroundColor = 'salmon';
      e.style.color = 'white';
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Change styles</button>

      <br />
      <br />

      <div ref={ref}>Some content here</div>
    </div>
  );
};

export default App;
