import { Fragment } from 'react';
import Auth from './components/Auth';
import Counter from './components/Counter';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import {useAppSelector, useAppDispatch} from './app/hooks'

function App() {
  const {isAuthenticated} = useAppSelector(state => state.auth)
  return (
    <Fragment>
      <Header />
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
