import './App.css';
import Layout from './hoc/Layout/Layout';
import Toolbar from './components/Toolbar/Toolbar'
import CategoryList from './components/CategoryList/CategoryList';
import FoodBuilder from './containers/FoodBuilder/FoodBuilder';
import MenuItems from './components/MenuItems/MenuItems';
import ArticleList from './components/ArticleList/ArticleList';
import { Grid } from '@material-ui/core'


function App() {
  return (
    <div>
      <Layout>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Toolbar />
          </Grid>
          <Grid item xs={8}>
            <CategoryList />
          </Grid>
          <Grid item xs={4}>
            <FoodBuilder />
          </Grid>
          <Grid item xs={8}>
            <MenuItems />
          </Grid>
          <Grid item xs={4}>
            <ArticleList />
          </Grid>
        </Grid>
      </Layout>
    </div>
  );
}

export default App;
