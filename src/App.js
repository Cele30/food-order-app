import './App.css';
import Layout from './hoc/Layout/Layout';
import { Grid } from '@material-ui/core'
import Home from './pages/Home/Home';
import { Route } from 'react-router-dom'
import { MenuContextProvider } from './context/menu-context'

function App() {
  return (
    <div>
      <Layout>
        <Grid container spacing={3}>
          <MenuContextProvider>
            <Route path='/' exact component={Home} />
          </MenuContextProvider>
        </Grid>
      </Layout>
    </div>
  );
}

export default App;
