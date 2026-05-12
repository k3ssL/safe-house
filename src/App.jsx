import {
    Routes,
    Route,
    useLocation,
    Navigate,
    HashRouter
} from 'react-router-dom';
import Header from './components/Header/Header';
import Chat from './components/Chat/Chat';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';
import './styles/global.css';
import About from "./pages/About/About";
import Catalog from "./pages/Catalog/Catalog";
import Footer from "./components/Footer/Footer";
import UnderConstruction from "./pages/UnderConstruction/UnderConstruction";
import {useEffect} from "react";

const AppRouter = () => {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname]);

    useEffect(() => {
        const redirectPath = localStorage.getItem('redirectPath');
        if (redirectPath) {
            localStorage.removeItem('redirectPath');
            setTimeout(() => {
                window.location.replace(`/${redirectPath}`);
            }, 100);
        }
    }, []);
    return (
        <>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/about" element={<About />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />
                <Route path="/register" element={<Login />} />
                <Route path="/delivery" element={<UnderConstruction />} />
                <Route path="/returns" element={<UnderConstruction />} />
                <Route path="/faq" element={<UnderConstruction />} />
                <Route path="/privacy" element={<UnderConstruction />} />
                <Route path="/terms" element={<UnderConstruction />} />
                <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>

            </>
    )
}

function App() {
    return (
        <>
            <Header />
            <AppRouter/>
            <Footer />
            <Chat />
        </>
    )
}

export default App;