import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './redux/store';
import App from './components/App/App';

const root = document.getElementById('root');

const render = () => {
  createRoot(root).render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./components/App/App', render);
}

render();
