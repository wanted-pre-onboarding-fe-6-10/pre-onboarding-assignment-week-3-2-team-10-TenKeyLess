import React from 'react';
import { Provider } from 'react-redux';
import Comments from './pages/Comments';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Comments />
    </Provider>
  );
}

export default App;
