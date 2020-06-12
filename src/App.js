import React from 'react';
import './App.css';
import {Layout , Header , Navigation , Drawer , Content} from 'react-mdl';
import {Link} from 'react-router-dom';

import Main from './components/main';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className='header-color' title="pkSocket" scroll>
            <Navigation>
                <Link to="/home">Home</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/contact">Contact</Link> 
                <Link to="/privacypolicy">Privacy Policy</Link> 

          
            </Navigation>
        </Header>
        <Drawer title= "Content">
            <Navigation>
                <Link to="/home">Home</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/contact">Contact</Link> 
                <Link to="/privacypolicy">Privacy Policy</Link> 

            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
           <Main /> 
        </Content>
    </Layout>
</div>
  );
}

export default App;
