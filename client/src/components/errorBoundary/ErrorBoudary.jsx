import React, { Component } from 'react';
import styles from "./ErrorBoundary.module.css";
export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
     
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
      
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {

            return (
                <>

                    <h1>Something went wrong.</h1>
                    <img className={styles.errorStyle} src="/img/404DontCry.jpeg" alt="" />
                    <h1>Check your internet connection and try again.</h1>
                </>
            )
        }

        return this.props.children;
    }
}

