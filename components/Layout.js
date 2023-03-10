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
           </header>
           </React.Fragment>
    )

    const brand = () => (
        <div className="brand-black-bg">
            <img className="brand-logo" src="/static/images/junkyard-logo.png" alt="jy-logo"/>
        </div>
    )
    
            
    
            

    const nav = () => (
                    <ul className="nav nav-tabs bg-dark">
            <li className="nav-item">
                <Link className="nav-link text-light" href="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-light" href="/collect">Collect</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-light" href="/center">Centers</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-light" href="/product">Products</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-light" href="/fleet">Fleet</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-light" href="/aboutus">About Us</Link>
            </li>
            <div className="search-bar-nav">
            <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            </div>
            </ul>
            
            
    )

    const footer = () => (
        <div className="container-footer">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><Link href="/" className="nav-link px-2 text-muted">Home</Link></li>
                <li className="nav-item"><Link href="#" className="nav-link px-2 text-muted">Features</Link></li>
                <li className="nav-item"><Link href="#" className="nav-link px-2 text-muted">Pricing</Link></li>
                <li className="nav-item"><Link href="#" className="nav-link px-2 text-muted">FAQs</Link></li>
                <li className="nav-item"><Link href="#" className="nav-link px-2 text-muted">About</Link></li>
                </ul>
                <p className="text-center text-muted">&copy; 2021 Company, Inc</p>
            </footer>
        </div>
    )

    return <React.Fragment>
        {head()} 
        {brand()}
        {nav()} 
        
        {children} 

        {footer()}
    </React.Fragment>
}

export default Layout;