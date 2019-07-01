import React from 'react';
import { Provider } from "react-redux";
import store from './store/storeConfig';
import Name from './components/name';
import Counter from './components/counter';

function App()
{
  return (
    <Provider store={store}>
      <Counter />
      <Name />
    </Provider>
  );
}

export default App;
