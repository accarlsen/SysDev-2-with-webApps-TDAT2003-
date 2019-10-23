import React from 'react';
import './App.css';
import landscape1 from './landscape1.png';
import landscape2 from './landscape2.jpg';
import landscape3 from './landscape3.jpeg';
import landscape4 from './landscape4.jpg';
import landscape5 from './landscape5.jpeg';
import landscape6 from './landscape6.jpg';

function App() {
  return (
    <div className="App">
      <div className="grid-container">
            <div className="header">
                <div className="headergridV">
                    <div className="logo">
                        <h3>Syst News</h3>
                    </div>
                    <div className="headerEmpty">
                        <br></br>
                    </div>
                    <div className="headergridH">
                        <div className="slope">
                            <br></br>
                        </div>
                        
                        <a href="#">
                            <div className="news">
                                <p1>News</p1>
                            </div>
                        </a>
                        <a href="#">
                            <div className="sports">
                                <p1>Sports</p1>
                            </div>
                        </a>
                        <a href="#">
                            <div className="culture">
                                <p1>Culture</p1>
                            </div>
                        </a>
                        <a href="#">
                            <div className="economy">
                                <p1>Economy</p1>
                            </div>
                        </a>
                        <a href="#">
                            <div className="write">
                                <p1>Write</p1>
                            </div>
                        </a>
                        <div className="moreOptions">
                            <div className="dropdown">
                                <button className="dropbtn"><p1>More</p1></button>
                                <div className="dropdown-content">
                                    <a href="#"><p>Profile</p></a>
                                    <a href="#"><p>Sign out</p></a>
                                    <a href="#"><p>Settings</p></a>
                                    <a href="https://www.youtube.com/watch?v=aQkPcPqTq4M"><p>Vaporwave</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="scroll-left">
                    <p> Yeeeeeeeeeeeeeeeeeeeeeeeeeet </p>
                </div>
            </div>
            <div className="articlesCol1">
                <a href="article.html">
                    <div className="article">
                        <div className="title">
                                <p className="nfArticleTitle">Article title</p>
                        </div>
                        <div className="img">
                            <img src={landscape1} alt="logo" width="100%" height="100%"></img>
                        </div>
                    </div>
                </a>
                
                <br></br>
                <a href="https://uu.difi.no/krav-og-regelverk/losningsforslag-web/fokusmarkering-navigasjon">
                    <div className="article">
                        <div className="title">
                                <p className="nfArticleTitle">Article title</p>
                        </div>
                        <div className="img">
                            <img src={landscape2} width="100%" height="100%"></img>
                        </div>
                    </div>
                </a>
                
            </div>
            <div className="articlesCol2">

                <a href="https://uu.difi.no/krav-og-regelverk/losningsforslag-web/fokusmarkering-navigasjon">
                    <div className="article">
                        <div className="title">
                                <p className="nfArticleTitle">Article title</p>
                        </div>
                        <div className="img">
                            <img src={landscape3} width="100%" height="100%"></img>
                        </div>
                    </div>
                </a>
                <br></br>
                <a href="https://uu.difi.no/krav-og-regelverk/losningsforslag-web/fokusmarkering-navigasjon">
                    <div className="article">
                        <div className="title">
                                <p className="nfArticleTitle">Article title</p>
                        </div>
                        <div className="img">
                            <img src={landscape4} width="100%" height="100%"></img>
                        </div>
                    </div>
                </a>

            </div>
            <div className="articlesCol3">

                <a href="https://uu.difi.no/krav-og-regelverk/losningsforslag-web/fokusmarkering-navigasjon">
                    <div className="article">
                        <div className="title">
                                <p className="nfArticleTitle">Article title</p>
                        </div>
                        <div className="img">
                            <img src={landscape5} width="100%" height="100%"></img>
                        </div>
                    </div>
                </a>
                <br></br>
                <a href="https://uu.difi.no/krav-og-regelverk/losningsforslag-web/fokusmarkering-navigasjon">
                    <div className="article">
                        <div className="title">
                                <p className="nfArticleTitle">Article title</p>
                        </div>
                        <div className="img">
                            <img src={landscape6} width="100%" height="100%"></img>
                        </div>
                    </div>
                </a>

            </div>
            <div className="footer">
                <p>Footer</p>
            </div>
        </div>
    </div>
  );
}

export default App;
