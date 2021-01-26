import { Redirect, Route, RouteProps } from "react-router-dom"
import { isLogin } from "../Services/Services"

interface PrivateRouteProps extends RouteProps {
    component: any
}

const ProtectRoute = (props: PrivateRouteProps) => {
    const { component: Component, ...rest} = props

    return (
        <Route
            {...rest}    
            render={(routeProps) =>  isLogin() ? (
                <Component {...routeProps} />
            ) : (
                <Redirect to={{
                    pathname: '/login',
                    state: {
                        from: routeProps.location
                    }
                }}
                />
            )}
            />
    )
}

const LoginProtectRoute = (props: PrivateRouteProps) => {
    const { component: Component, ...rest} = props

    return (
        <Route
            {...rest}    
            render={(routeProps) =>  !isLogin() ? (
                <Component {...routeProps} />
            ) : (
                <Redirect to={{
                    pathname: '/page',
                    state: {
                        from: routeProps.location
                    }
                }}
                />
            )}
            />
    )
}


export {
    ProtectRoute,
    LoginProtectRoute

} 
