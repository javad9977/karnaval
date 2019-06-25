import React from 'react';
import reactdom from 'react-dom';
import Header from './components/header';
import Topmenu from './components/topmenu';
import Slide from './components/slide';
import Tileare from './components/tileare';
import Mainarea from './components/mainarea';
import Sidearea from './components/sidearea';
import Footer from './components/footer';

    const App=()=>{
        
        return (
          <div>
                <Header/>
           <Topmenu/>
           <Slide/>
           <Tileare/>
           <Mainarea/>
           <Sidearea/>
           <Footer/>
           
          </div>
        )
        
        
    }

reactdom.render(<App/>,document.querySelector('#root'));