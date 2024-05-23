import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Tools from './components/Tools';
import Projects from './components/Projects';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <About />
                <Projects />
                {/* <Contact /> */}
            </main>
            <Tools></Tools>
            <Footer />
        </div>
    );
}

export default App;
