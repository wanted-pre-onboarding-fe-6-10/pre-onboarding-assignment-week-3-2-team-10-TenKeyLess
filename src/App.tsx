import CommentListContainer from './containers/CommentListContainer';
import PageListContainer from './containers/PageListContainer';
import FormContainer from './containers/FormContainer';
import GlobalStyle from 'styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from 'styles/theme';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from 'reducers/index';
import logger from 'redux-logger';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <CommentListContainer />
        <PageListContainer />
        <FormContainer />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
