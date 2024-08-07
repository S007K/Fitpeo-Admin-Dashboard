import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Layout from './components/shared/Layout'
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/Fitpeo-Admin-Dashboard" element={<Layout />}>
                     <Route index element={<Dashboard />} />  {/*this dashboard will render at outine in Layout component */}
                </Route>
            </Routes>
        </Router>
    )
}

export default App
