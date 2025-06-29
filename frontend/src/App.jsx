import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import { LoginPage } from './pages/Authentication/Login/Login';
import { RegisterPage } from './pages/Authentication/Register/Register';
import { ProfilePage } from './pages/Member/Profile/Profile';
import { ForgotPasswordPage } from './pages/Authentication/ResetPassword/ForgotPassword';
import { Home } from './pages/Public/Home/Home';
import { Store } from './pages/Public/Store/Store/Store';
import { ProductDetailsPage } from './pages/Public/Store/ProductDetails/ProductDetailsPage';
import { WishlistPage } from './pages/Public/Store/Wishlist/Wishlist';
import { CheckoutPage } from './pages/Public/Store/Checkout/Checkout';
import { BlogPage } from './pages/Public/Blog/Blog';
import { About } from './pages/Public/About/About';
import { Contact } from './pages/Public/Contact/Contact';
import { Page404 } from './pages/Error/Page404/Page404';
import { Dashboard } from './pages/Admin/Dashboard/Dashboard';
import './App.css';

const Loading = () => {
    return(
        <>
            <div className="Loading">
                <div className='Loading-Content'>
                    <div className='spinner'></div>
                </div>
            </div>
        </>
    )
}

// Define a component that uses useLocation and performs loading logic
const AppContent = () => {
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2500);

        return () => clearTimeout(timer)
    }, [location])

    return (
        <>
            {/* {loading && <Loading />} */}

            <Switch>
                {/*--------AUTHENTICATION--------*/}
                <Route path="/login" exact component={LoginPage} />
                <Route path="/register" exact component={RegisterPage} />
                <Route path="/resetpassword" exact component={ForgotPasswordPage} />

                {/*--------MEMBER--------*/}
                <Route path="/profile" exact component={ProfilePage} />

                {/*--------PUBLIC--------*/}
                <Route path="/" exact component={Home} />
                <Route path="/blog" component={BlogPage} />
                <Route path="/about" exact component={About} />
                <Route path="/contact" exact component={Contact} />

                {/*--------STORE--------*/}
                <Route path="/store" component={Store} />
                <Route path="/product" component={ProductDetailsPage} />
                <Route path="/wishlist" component={WishlistPage} />
                <Route path="/checkout" component={CheckoutPage} />

                {/*--------ADMIN--------*/}
                <Route path='/dashboard' exact component={Dashboard} />

                {/*--------ERROR--------*/}
                <Route component={Page404} />
            </Switch>
        </>
    );
}

function App() {
    return (
        <Router basename='/masterisolation'>
            <AppContent />
        </Router>
    );
}

export default App;
