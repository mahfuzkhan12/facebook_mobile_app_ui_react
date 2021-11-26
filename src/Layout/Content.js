import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import Spinner from '../Components/Loaders/Spinner/Spinner'

// routes
import routes from '../Routes/Routes'

const PageContent = () => {
  return ( 
    <Suspense fallback={<Spinner />}>
        <Routes>
            {routes.map((route, idx) => {
            return (
                <Route
                    key={idx}
                    path={route.path}
                    element={<route.component />}
                />
            )
            })}
        </Routes>
    </Suspense>
  )
}

export default React.memo(PageContent)
