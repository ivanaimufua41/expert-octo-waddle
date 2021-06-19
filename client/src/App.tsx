import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Routes from './Routes/Routes'

const App: React.FC = () => {
    // TODO add material ui theme provider over routes
    return (
        <Router>
            <Route component={Routes} />
        </Router>
    )
}

export default App
