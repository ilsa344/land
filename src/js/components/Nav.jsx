import React from 'react';

const Nav=(props)=>{
    return(
        <div>
            <nav class="navbar navbar-light bg-light static-top">
                <div class="container">
                <a class="navbar-brand" href="#">{props.nav[0].brand}</a>
                <a class="btn btn-primary" href="#">{props.nav[0].btn}</a>
                </div>
            </nav>
        </div>
    )
}
export default Nav;