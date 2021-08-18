import './App.css';
import Layout from './hoc/Layout/Layout';
import { Grid } from '@material-ui/core'
import Home from './pages/Home/Home';
import { Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <Layout>
        <Grid container spacing={3}>
          <Route path='/' exact component={Home} />
        </Grid>
      </Layout>
    </div>
  );
}

export default App;
