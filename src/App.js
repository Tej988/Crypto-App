import React from "react";
import { Routes, Route, Link } from 'react-router-dom'
import { Typography, Layout, Space } from 'antd'

import { Navbar, Homepage, News, CryptoDetails, Cryptocurrencies, Exchange } from "./components";
import './App.css'
import Loader from "./components/Loader";

const App = () => {
  return (
    //app start from hare
    <div className="app">

    {/* //navbar */}
      <div className="navbar">
        <Navbar />
      </div>

      {/* //main content start hare */}
      <div className="main">
        <Layout>
          <div className="routes">

            <Routes>
              <Route path="/" element={<Homepage/>} />
              <Route path="/exchange/*" element={<Exchange/>} />
              <Route path="/cryptocurrencies/*" element={<Cryptocurrencies/>} />
              <Route path="/news/*" element={<News/>} />
              <Route path="/crypto/:coinId/*" element={<CryptoDetails/>} />

            </Routes>

          </div>
        </Layout>
{/* footer content start hare */}
          <div className="footer">
            <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
              Cryptoverse <br/>
              All rights reserverd <br />
              <Space>
                <Link to='/'>Home</Link>
                <Link to='/exchange'>Exchange</Link>
                <Link to='/news'>News</Link>
              </Space>
            </Typography.Title>
          </div>
      </div>
    </div>
  );
}

export default App;
