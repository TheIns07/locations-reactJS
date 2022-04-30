import {Routes ,Route} from 'react-router-dom'
import AllMeetupsPage from './pages/AllMeetUps'
import NewMeetupsPage from './pages/NewMeetUps'
import FavoritesPage from './pages/Favorites'
import Layout from './components/Layout'

function App() {
  return (
    <Layout>
      <Routes>
      <Route path='/' element={<AllMeetupsPage/>} />
      <Route path='/new' element={<NewMeetupsPage/>} />
      <Route path='/favorites' element={<FavoritesPage/>} />
      </Routes>
    </Layout>
  );
}

export default App;
