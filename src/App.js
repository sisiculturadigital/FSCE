import './styles/App.scss';
import { UserProvider } from './context/UserProvider';
import Router from './Router/Router';

function App() {  

  return (

    <UserProvider>
      <Router />
    </UserProvider>

  );
}

export default App;
