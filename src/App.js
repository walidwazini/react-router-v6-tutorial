import { Route, Switch, 
  Routes,
  Navigate,
} from 'react-router-dom';

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path='/' element={<Navigate to='/welcome' />} />
            {/* <Navigate to='/welcome' />  */}
          <Route path='/welcome/*' element={<Welcome />} >
            {/* <Welcome /> */}
            <Route path='new-user' element={<p>Welsome new user</p>} />
          </Route>
          <Route path='/products' element={<Products />} >
            {/* <Products /> */}
          </Route>
          <Route path='/products/:productId' element={<ProductDetail />} >
            {/* <ProductDetail /> */}
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book
