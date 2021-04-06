import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-* navbar-dark bg-dark">
                        <div>
                            <a href="https://google.com" className="navbar-brand">Customer Company Addition App</a>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;