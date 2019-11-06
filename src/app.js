import React from 'react'
import Navigation from './components/navigation'
import PrivateRoutes from './components/privateRoutes'
import Login from './components/login'

const App = () => (
    <Navigation>
        <Router>
            <PrivateRoutes path="/pages/blog-list" component={BlogList}></PrivateRoutes>
            <Login path="/login"></Login>
        </Router>
    </Navigation>
)

export default App