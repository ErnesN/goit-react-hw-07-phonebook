import { Provider } from 'react-redux';
import Phonebooks from './modules/Phonebooks/Phonebooks';
import styles from './modules/Phonebooks/phonebooks.module.scss';

import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className={styles.phonebook}>
        <Phonebooks />
      </div>
    </Provider>
  );
}

export default App;
