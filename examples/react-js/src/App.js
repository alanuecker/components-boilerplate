import './App.css';
import { useRef } from 'react';

import { Header, useHeaderEvents } from 'components-boilerplate';

const App = () => {
  const wrapperRef = useRef(null);
  const { handleKeyDown, handleBlur } = useHeaderEvents(wrapperRef);

  return (
    <header ref={wrapperRef} onKeyDown={handleKeyDown} onBlur={handleBlur}>
      <Header />
    </header>
  );
};

export default App;
