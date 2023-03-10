import React from "react";
import Head from 'next/head';
import Link from 'next/link'
import Router from 'next/router'
import nProgress from "nprogress";
import "nprogress/nprogress.css"



Router.onRouteChangeStart = url => nProgress.start()
Router.onRouteChangeComplete = url => nProgress.done()
Router.onRouteChangeError = url => nProgress.done();

const Layout = ({children}) => {
    const head = () => (
           <React.Fragment>
           <header>
            <link 
            rel="stylesheet" 
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" 
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" 
            crossOrigin="anonymous"/>
            <link rel="stylesheet" href="/static/css/styles.css"/>
            <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
           </header>
           </React.Fragment>
    )

    
    
            
    
            

    const nav = () => (
                    <ul className="nav nav-custom">
                            <a href="/"><img className="brand-logo" src="/static/images/junkyard-logo.png" alt="jy-logo"/></a>
                        
            <li className="nav-item">
                <Link className="nav-link text-dark nav-items-align" href="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-dark nav-items-align" href="/collect">Collect</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-dark nav-items-align" href="/center">Recycling Centers</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-dark nav-items-align" href="/product">Products</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-dark nav-items-align" href="/fleet">Fleet</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-dark nav-items-align" href="/aboutus">About Us</Link>
            </li>
            <div className="sign-up-btn">
            <button type="button" class="btn btn-primary btn-sm nav-items-align"><Link className="sign-up-btn-size" href="/signup">Sign Up For Services</Link></button>
            </div>
            </ul>
            
            
    )

    const footer = () => (
            <footer className="py-3 my-4 container-footer">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><Link href="/" className="nav-link px-2 text-muted">Home</Link></li>
                <li className="nav-item"><Link href="#" className="nav-link px-2 text-muted">Features</Link></li>
                <li className="nav-item"><Link href="#" className="nav-link px-2 text-muted">Pricing</Link></li>
                <li className="nav-item"><Link href="#" className="nav-link px-2 text-muted">FAQs</Link></li>
                <li className="nav-item"><Link href="#" className="nav-link px-2 text-muted">About</Link></li>
                </ul>
                <p className="text-center text-muted">&copy; 2021 Company, Inc</p>
            </footer>
    )

    return <React.Fragment>
        {head()} 
        {nav()} 
        
        {children} 

        {footer()}
    </React.Fragment>
}

export default Layout;