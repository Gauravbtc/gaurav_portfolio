import React, { Component } from 'react';
import advowire from '../images/portfolio/Advowire_LOGO_021.jpg';
import vitaminocean from '../images/portfolio/vitaminocean.png';
import righton from '../images/portfolio/right-on_logo.png';

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row section-intro">
          <div className="col-twelve">
            <h5>Portfolio</h5>
            <h1>Check Out Some of My Works.</h1>
            <p className="lead">I Worked on below projects</p>
          </div>
        </div> 
        <div className="row portfolio-content">
          <div className="col-twelve">
            <div id="folio-wrapper" className="block-1-2 block-mob-full stack">
              <div className="bgrid folio-item">
                <div className="item-wrap">
                  <img src= {vitaminocean} alt="VitaminOcean"/>
                    <a href="https://vitaminocean.com/" className="overlay">
                      <div className="folio-item-table">
                        <div className="folio-item-cell">
                          <h3 className="folio-title">VitaminOcean</h3>
                            <span className="folio-types">
                            Web Development
                          </span>
                        </div>
                      </div>
                    </a>
                </div>
              </div> 
              <div className="bgrid folio-item">
                <div className="item-wrap">
                  <img src= {advowire} alt="Advowire" className="advowire-img" />
                    <a href="https://www.advowire.com/" className="overlay">
                      <div className="folio-item-table">
                        <div className="folio-item-cell">
                          <h3 className="folio-title">Advowire</h3>
                          <span className="folio-types">
                            Web Development
                          </span>
                        </div>
                      </div>
                    </a>
                </div>
              </div>   
              <div className="bgrid folio-item">
                <div className="item-wrap">
                    <img src= {righton} alt="Right-on"/>
                      <a href="https://right-on.co.jp/" className="overlay">
                        <div className="folio-item-table">
                          <div className="folio-item-cell">
                            <h3 className="folio-title">Right-On</h3>
                            <span className="folio-types">
                              Web Development
                            </span>
                          </div>
                        </div>
                      </a>
                  </div>
              </div>

              <div className="bgrid folio-item">
                <div className="item-wrap">
                    <img src= {righton} alt="Rakuten Right-on"/>
                      <a href="https://www.rakuten.co.jp/right-on/" className="overlay">
                        <div className="folio-item-table">
                          <div className="folio-item-cell">
                            <h3 className="folio-title">Rakuten Right-On</h3>
                            <span className="folio-types">
                              Web Development
                            </span>
                          </div>
                        </div>
                      </a>
                  </div>
              </div>

            </div>
          </div> 
        </div> 
	    </section> 
    )
  }
}
export default Portfolio;