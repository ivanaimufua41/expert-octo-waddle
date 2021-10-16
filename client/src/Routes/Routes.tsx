import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ProductListPage from '../Product/ProductListPage'

const Routes = (): JSX.Element => {
    return (
        <Switch>
            <Route exact path="/" component={ProductListPage} />
        </Switch>
    )
}

export default Routes
