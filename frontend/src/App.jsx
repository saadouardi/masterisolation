import React, { useState, useEffect, lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import './App.css';

// Lazy-loaded pages
const LoginPage = lazy(() => import('./pages/Authentication/Login/Login'));
const RegisterPage = lazy(() => import('./pages/Authentication/Register/Register'));
const ForgotPasswordPage = lazy(() => import('./pages/Authentication/ResetPassword/ForgotPassword'));
const ProfilePage = lazy(() => import('./pages/Member/Profile/Profile'));
const Home = lazy(() => import('./pages/Public/Home/Home'));
const Store = lazy(() => import('./pages/Public/Store/Store/Store'));
const ProductDetailsPage = lazy(() => import('./pages/Public/Store/ProductDetails/ProductDetailsPage'));
const WishlistPage = lazy(() => import('./pages/Public/Store/Wishlist/Wishlist'));
const CheckoutPage = lazy(() => import('./pages/Public/Store/Checkout/Checkout'));
const BlogPage = lazy(() => import('./pages/Public/Blog/Blog'));
const About = lazy(() => import('./pages/Public/About/About'));
const Contact = lazy(() => import('./pages/Public/Contact/Contact'));
const Dashboard = lazy(() => import('./pages/Admin/Dashboard/Dashboard'));
const Page404 = lazy(() => import('./pages/Error/Page404/Page404'));

// Loading component (fallback while lazy components load)
const Loading = () => (
  <div className="Loading">
    <div className="Loading-Content">
      <div className="spinner"></div>
    </div>
  </div>
);

const AppContent = () => {
  const [loading, setLoading] = useState(false); // Optional: route-level loading
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // Reduced to 500ms for UX
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loading />}

      <Suspense fallback={<Loading />}>
        <Switch>
          {/* AUTHENTICATION */}
          <Route path="/login" exact component={LoginPage} />
          <Route path="/register" exact component={RegisterPage} />
          <Route path="/resetpassword" exact component={ForgotPasswordPage} />

          {/* MEMBER */}
          <Route path="/profile" exact component={ProfilePage} />

          {/* PUBLIC */}
          <Route path="/" exact component={Home} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />

          {/* STORE */}
          <Route path="/store" component={Store} />
          <Route path="/product" component={ProductDetailsPage} />
          <Route path="/wishlist" component={WishlistPage} />
          <Route path="/checkout" component={CheckoutPage} />

          {/* ADMIN */}
          <Route path="/dashboard" exact component={Dashboard} />

          {/* ERROR */}
          <Route component={Page404} />
        </Switch>
      </Suspense>
    </>
  );
};

function App() {
  return (
    <Router basename="/masterisolation">
      <AppContent />
    </Router>
  );
}

export default App;
