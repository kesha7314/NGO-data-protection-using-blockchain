import React, { Component } from 'react'
import { Link } from 'react-router-dom';



export class Home extends Component {
    render(){
        return(
            <div>
  {/* header
   ================================================== */}
  <header>
    <div className="row">
      <div className="logo">
        <a href="index.html">NGO eXchange</a>
      </div>
      <div className="social-links">
        <ul>
          <li><a href target="_blank"><i className="fa fa-facebook" /></a></li>
          <li><a href="https://twitter.com/home" target="_blank"><i className="fa fa-twitter" /></a></li>
          <li><a href="https://www.linkedin.com/in/kesha-shah-6522aa169/" target="_blank"><i className="fa fa-linkedin" /></a></li>
          <li><a href="mailto:ngo.blockchain@gmail.com" target="_blank"><i className="fa fa-mail-reply" /></a></li>
        </ul>
      </div>
    </div>
  </header> {/* /header */}
  {/* home
   ================================================== */}
  <section id="home" className="home-particles">
  <canvas className="pg-canvas" style={{display: 'block'}} width={1440} height={800} />

    <div className="shadow-overlay" />
    <div className="content-wrap-table">
      <div className="main-content-tablecell">
        <div className="row">
          <div className="col-twelve">
            <br /> <br /> <br /> <br /> <br /> <br />
            &lt;<br /><br/><br /><br /><br /><br /><br /><br /> <h1 align="right">Block-Chain for NGO </h1><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
           </div>
           <div className="col-thirteen"> <h1 align="right">
              <Link to="/login"> LOGIN </Link>
            </h1>
            <div className="bottom-text">
              {/* <h1>Click <a href="https://meet.google.com/khi-uhuf-pqm" target="_blank">here</a> to join our live Q/A sesstion with the Founder, Cameron Nelson.</h1> ––>

			  			</div>

			   	</div> <!-- /twelve */}
              <div className="scroll-icon">
                <p className="scroll-text">Scroll For More Info</p>
                <a href="#info" className="smoothscroll">
                  <div className="mouse" />
                </a>
                <div className="end-top" />
              </div> {/* /scroll-icon */}
            </div> {/* /row */}
          </div> {/* /main-content */}
        </div> {/* /content-wrap */}
      </div></div></section> {/* /home */}
  {/* info
   ================================================== */}
  <section id="info">
    <div className="info-overlay" />
    <div className="row">
      <div className="col-twelve tabs-wrap">
        <ul className="tabs" style ={{marginLeft : "300px"}}>
          <li className="active" data-id="tab-about"><i className="icon-blank" /><span>About</span></li>
         
          <li><i className="icon-newspaper" /><a href="s1.html">White Paper</a><span /></li>
        </ul> {/* /tabs */}
        <div className="tab-container" style ={{marginLeft : "20px"}}>
          {/* tab content - about
   				================================================== */}
          <div >
            <div className="tab-entry">
              <div className="row tab-entry-intro">
                <div className="col-twelve with-bottom-line">
                  <h1>Multiplying Nonprofit</h1>
                  <p className="lead"> NGO Xchange is a blockchain platform that solves the major compliance issues of fund tractability, security, and fraud, while offering cost savings on the transactions.</p>
                </div>
              </div> {/* /tab-content-intro */}
              <br />
              <br />
              <div className="row about-content tab-entry-content" style = {{marginLeft: "200px"}}>
                <div className="about-list block-1-3 block-s-1-2 block-tab-full">
                  <div className="bgrid item">
                    <span className="icon"><img src="images/icons8-receive-cash-80.png" alt="" /></span>
                    <div className="item-content">
                      <h2 className="h05">LACK OF TRANSPARENCY</h2>
                      <p>   
                          <h4 style ={{color : "gray"}}> Utilizing smart contracts, NGO Xchange creates transparent records and real time fund tractability of donations. </h4>
                      </p>
                    </div>
                  </div> {/* /bgrid */}



                  <div className="bgrid item">
                    <span className="icon"><img src="images/icons8-protect-100.png" alt="" /></span>
                    <div className="item-content">
                      <h3 className="h05">SECURITY AND RISK</h3>
                      <p>
                        <h4 style ={{color : "gray" , align : "center"}}> NGO Xchange provides instant transfer of fund between two party this avoids local government corruption and risk to employees carrying large amount of cash.</h4>
                      </p>
                    </div>
                  </div> {/* /bgrid */}
                  <div className="bgrid item">
                    <span className="icon"><img src="images/icons8-exercise-80.png" alt="" /></span>
                    <div className="item-content">
                      <h3 className="h05">SPEED AND FEES</h3>
                      <p>
                        <h4 style ={{color : "gray"}}> Uses Ether for transfering between two users provide speed and some charges are applies.</h4>
                      </p>
                    </div>
                  </div> {/* /bgrid */}
                </div> {/* /about-list */}
              </div> {/* /row about-content */}
            </div> {/* /tab-entry */}
            <br />
            <br />
            <br />
            <br />
            <h1 className="h05" style={{marginLeft:"200px" , fontSize: "20px"}}>Watch our Video</h1>

          </div> {/* /tab-about */}
 
 <br />
 <br />         <iframe  style={{marginLeft: "250px"}} allowFullScreen="allowFullScreen" width="70%" height={455} src="https://www.youtube.com/embed/OoEmKRp9HL4?rel=0" frameBorder={0} gesture="media" allow="encrypted-media" />
          <br /><br />
          {/* tab content contact
   				================================================== */}
          <div id="tab-contact" className="tab-content">
            <div className="tab-entry">
              <div className="row tab-entry-intro">
                <div className="col-twelve with-bottom-line">
                  <h1>Get In Touch.</h1>
                  <p className="lead" href="mailto:keshsashah@gmail.com" target="_top">Please email the founder to show your support</p>
                  <p />
                  <p className="lead" href="mailto:keshsashah@gmail.com">contact@ngoxchange.com</p>
                </div>
              </div> {/* /tab-content-intro */}
              <div className="row form-wrap tab-entry-content">
                <div className="col-twelve">
                  {/* contact-warning */}
                  <div id="message-warning">
                  </div>
                  {/* contact-success */}
                  <div id="message-success">
                    <i className="fa fa-check" />Your message was sent, thank you!<br />
                  </div>
                </div> {/* /col-twelve */}
              </div> {/* /row contact-form */}
            </div> {/* /tab-entry */}
          </div> {/* /tab-contact */}
          {/* tab content - subscribe
   				================================================== */}
          &lt;
          <div >
            <div className="tab-entry">
              <div className="row tab-entry-intro">
                <div className="col-twelve with-bottom-line">
                  <div >
                    <div >
                      <div className="bgrid item">
                        <div className="item-content">
                          <h3 className="h05"> <br /><a href target="_blank" /> </h3>
                        </div>
                      </div> {/* /bgrid */}
                      
    <div className="row">
      <div className="col-twelve tabs-wrap">
      <ul className="tabs" style ={{marginRight: "50px"}}>
          <li className="active" data-id="tab-about"><i className="icon-blank" /><span>The Team</span></li>
          </ul>
                    </div>
                    </div>
                      <div className="bgrid item" style={{marginLeft:"275px"}}>
                        <span className="icon"><img src="images/hemang.png" height={250} width={250} alt="" /></span>
                        <div className="item-content">
                          <h3 className="h05">Project Guide <br /><a href target="_blank">Prof. Hemang J. Shah</a></h3>
                          <p ><br />
                          </p>
                        </div>
                      </div> {/* /bgrid */}
                    </div> {/* /about-list */}
                  </div> {/* /row about-content */}
                </div> {/* /tab-entry */}
                <div  style={{marginLeft:"350px" }}>
                  <div className="about-list block-1-3 block-s-1-2 block-tab-full">
                    <div className="bgrid item">
                      <span className="icon"><img src="images/kesha.png" height={225} width={225} alt="" /></span>
                      <div className="item-content">
                        <h3 className="h05">Group Leader <br /><a href="https://www.linkedin.com/in/kesha-shah-6522aa169/" target="_blank">Miss. Kesha K. Shah</a></h3>
                        <p align="left">
                          <br />
                          <br />
                        </p>
                      </div>
                    </div> {/* /bgrid */}
                    <div className="bgrid item">
                      <div className="item-content">
                        <h3 className="h05"> <br /><a href target="_blank" /></h3>
                        <p align="left"><br />
                        </p>
                      </div>
                    </div> {/* /bgrid */}
                    <div className="bgrid item">
                      <span className="icon"><img src="images/Raj.png" height={225} width={225} alt="" /></span>
                      <div className="item-content">
                        <h3 className="h05">Group Member <br /><a href="https://www.linkedin.com/in/raj-timba-477658139/" target="_blank">Mr. Raj B. Valand</a></h3>
                        <p align="left">
                          <br />
                          <br />
                          <br />
                        </p>
                      </div>
                    </div> {/* /bgrid */}
                    <div className="bgrid item">
                      <span className="icon"><img src="images/dharmin.png" height={200} width={200} alt="" /></span>
                      <div className="item-content">
                        <h3 className="h05">Group Member <br /><a href="https://www.linkedin.com/in/dharminsinh-pankajsinh-rathod-b31070141/" target="_blank">Mr. Dharminsinh P. Rathod </a></h3>
                        <p align="left">
                          <br />
                          <br />
                        </p>
                      </div>
                    </div> {/* /bgrid */}
                    <div className="bgrid item">
                      <div className="item-content">
                        <h3 className="h05"> <br /><a href target="_blank" /> </h3>
                        <p align="left">
                          <br />
                          <br />
                        </p>
                      </div>
                    </div> {/* /bgrid */}
                    <div className="bgrid item">
                      <span className="icon"><img src="images/vashi.png" height={200} width={200} alt="" /></span>
                      <div className="item-content">
                        <h3 className="h05">Group Member <br /><a href="https://www.linkedin.com/in/yash-vashi-39422219b/" target="_blank">Mr. Yash R. Vashi</a> </h3>
                        <p align="left">
                          <br />
                        </p>
                      </div>
                    </div> {/* /bgrid */}
                  </div> {/* /about-list */}
                </div> {/* /row about-content */}
              </div> {/* /tab-entry */}
            </div>
          </div> {/* /tab-content-intro */}
        </div> {/* /tab-entry */}
      </div> {/* /tab-subscribe */}
    </div> {/* /tab-container */}
    {/* twelve */}
    {/* row */}
  </section> {/* /info */}
  {/* footer
   ================================================== */}
  <footer>
    <div className="social-wrap">
      <div className="row">
        <ul className="footer-social-list" style={{marginLeft:"500px"}}>
          <li><a href target="_blank">
              <i className="fa fa-facebook" /><span>Facebook</span>
            </a></li>
          <li><a href target="_blank">
              <i className="fa fa-twitter" /><span>Twitter</span>
            </a></li>
          <li><a href target="_blank">
              <i className="fa fa-linkedin" /><span>LinkedIn</span>
            </a></li>
          <li><a href="mailto:ngo.blockchain@gmail.com" target="_blank">
              <i className="fa fa-mail-reply" /><span>Email</span>
            </a></li>
        </ul>
      </div> {/* /row */}
    </div> {/* /social-wrap */}
    <div className="footer-bottom">
      <div className="footer-logo">
        <img src="images/footer-logo.png" alt="" />
      </div>
      <div className="copyright">
        <span>Contact: keshsashah@gmail.com</span><br />
      </div>
    </div> {/* /footer-bottom */}
  </footer>
</div>

        )
    }
}
export default Home