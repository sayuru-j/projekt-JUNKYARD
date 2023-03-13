import React from "react";
import Link from 'next/link';
import Router from 'next/router';
import Button from '@mui/material/Button'
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
            <link href='http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900italic,900' rel='stylesheet' type='text/css'></link>
            <link rel="shortcut icon" href="#"></link>
           </header>
           </React.Fragment>
    ) 
            

    const nav = () => (
                    <ul className="nav nav-custom">
                            <a href="/"><img className="brand-logo" src="/static/images/junkyard-logo.png" alt="jy-logo"/></a>
                        
            <li className="nav-item">
                <Link className="nav-link text-dark" href="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-dark" href="/collect">Collect</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-dark" href="/center">Recycling Centers</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-dark" href="/product">Products</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-dark" href="/fleet">Fleet</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-dark" href="/aboutus">About Us</Link>
            </li>
            <div className="sign-up-btn">
            <Link href="/signup">
            <Button variant="contained" color="success">Sign Up For Services</Button>
            </Link>
            </div>
            </ul>
            
            
    )

    const footer = () => (
            <footer className="py-3 container-footer">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><Link href="/" as="/" className="nav-link px-2 text-muted">Home</Link></li>
                <li className="nav-item"><Link href="#" as="#" className="nav-link px-2 text-muted">Features</Link></li>
                <li className="nav-item"><Link href="#" as="#" className="nav-link px-2 text-muted">Pricing</Link></li>
                <li className="nav-item"><Link href="#" as="#" className="nav-link px-2 text-muted">FAQs</Link></li>
                <li className="nav-item"><Link href="#" as="#" className="nav-link px-2 text-muted">About</Link></li>
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