import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Pages/Home";
import Destinations from "./Pages/Destination";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Footer from "./Components/Footer";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { ToastContainer } from "react-toastify";
import AddBlog from "./Pages/AddBlog";
import ProtectedRoute from "./utils/ProtectedRoute";
import FullBlog from "./Pages/FullBlog";
import YourBlog from "./Pages/YourBlog";
import Profile from "./Pages/Profile";
import UserList from "./admin/Pages/UserList";
import EditBlog from "./Pages/EditBlog";

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <ToastContainer autoClose={1000} position="top-right" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<ProtectedRoute requiredRole={['user', 'blogger','admin']} ><Destinations /></ProtectedRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/addblog" element={<ProtectedRoute requiredRole={['blogger','admin']} ><AddBlog /></ProtectedRoute>} />

            <Route path="/yourblog" element={<ProtectedRoute requiredRole={['blogger','admin']} ><YourBlog /></ProtectedRoute>} />
            <Route path="/editblog/:id" element={<ProtectedRoute requiredRole={['blogger','admin']} ><EditBlog /></ProtectedRoute>} />
            <Route path="/blog/:id" element={<ProtectedRoute requiredRole={['user', 'blogger','admin']} ><FullBlog /></ProtectedRoute>} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin/userlist" element={<ProtectedRoute requiredRole={['admin']}><UserList /></ProtectedRoute>}/>




          </Routes>


          <Footer />
        </BrowserRouter>
      </Provider>


    </div>
  );
}

export default App;
