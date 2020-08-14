import React, {Component} from 'react';

import { Route , Redirect} from 'react-router-dom';

const Protectedrouter = ({component,...some}) => {
    let token = JSON.parse(localStorage.getItem('auth'))
    var RenderComponents = component ;
    return (
        <Route
            {...some}
            render = {
            
                props => {
                   return token != null ? (
                        <RenderComponents {...props} />
                     ) : (
                        <Redirect to  = {{
                            pathname: "/adminlogin"
                        }}
                        />
                     )
                    }
                    

            }
        
        />
    )
}

export default Protectedrouter;