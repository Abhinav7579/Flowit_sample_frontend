
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Welcome from './pages/Welcome'
import Dashboard from './pages/Dashboard'
import { Route } from 'react-router-dom'
import { Status } from './pages/Status'
import { BrowserRouter,Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome/>} />
          
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
            <Route path="/dashboard" element={
          <ProtectedRoute><Dashboard /></ProtectedRoute>
        } />
           <Route path="/ticket/status" element={
          <ProtectedRoute><Status /></ProtectedRoute>
        } />

        </Routes>
      </BrowserRouter>
 
    </>
  )
}

export default App