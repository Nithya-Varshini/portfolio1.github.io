import Nav from './nav';
import dimond from './me_img2.png';
import Carousel from 'react-bootstrap/Carousel';

function Home() {

    return (
        <><header className='row jumbotron' style={{ backgroundColor: 'goldenrod' }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 col-sm-12 align-content-center'>
                            <img id="me" src={dimond} style={{ maxWidth: "100%", transform: "translate(5px,12px)" }} alt="" />
                        </div>
                        <div className='col-lg col-sm'>
                            <div className='container'>
                                <div className='row'>
                                    <br></br>
                                    <div className='app'>
                                        <h1>Hello! I'm Nithya</h1>
                                        <h2>Information Technology Major</h2>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-3 col-sm-12 allign-content-right'>
                                        <br></br><br></br><hr style={{
                                            background: "floralwhite",
                                            height: "5px",
                                            border: "none",
                                        }} />
                                    </div>
                                    <div className='col-lg col-sm-12'>
                                        <br></br>
                                        <br></br>
                                        <h4><em><small>I'm a college student pursuing my 3rd year of B. Tech specialid in Information technology from
                                            St. Joseph's College of Engineering, Chennai. Since my school days learned programming languages
                                            such as C++, Python, Java and ended up working with web development projects useing HTML, CSS,
                                            Javascript and frameworks such as React and Bootatrap. Good at team work and an active member
                                            of various clubs from our college.
                                        </small></em>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <a class="btn btn-social-icon btn-linkedin"
                            href="https://www.linkedin.com/in/nithya-varshini-m-4200b31bb/"><i
                                class="fa fa-linkedin"></i></a>
                        <div style={{ color: "goldenrod" }}>{"--"}</div>

                        <a class="btn btn-social-icon btn-github" style={{ backgroundColor: "#333333" }}
                            href="https://github.com/Nithya-Varshini" role="button"><i
                                class="fa fa-github"></i></a>
                        <div style={{ color: "goldenrod" }}>{"--"}</div>
                        <a class="btn btn-social-icon btn-instagram" style={{ background: "radial-gradient(circle at 33% 100%, #fed373 4%, #f15245 30%, #d92e7f 62%, #9b36b7 85%, #515ecf)" }}
                            href="https://github.com/Nithya-Varshini" role="button"><i
                                class="fa fa-instagram"></i></a>
                        <div style={{ color: "goldenrod" }}>{"--"}</div>

                    </div>
                </div>
            </header>
            <div style={{ display: 'block', width: "100%",height:"400px", padding: 30 }}>
                <Carousel>
                    <Carousel.Item interval={2000}>
                        <div className='container' style={{ backgroundColor: "palegoldenrod", height: "350px" }}>
                            <div className='row'>
                                <div className='col-12' style={{ textAlign: "center" }}>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <h2>“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”
</h2>
                                </div>
                            </div>
                        </div>
                        <Carousel.Caption>
                            <h5>― Ralph Waldo Emerson</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <div className='container' style={{ backgroundColor: "palegoldenrod", height: "350px" }}>
                            <div className='row'>
                                <div className='col-12' style={{ textAlign: "center" }}>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <h2>“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
</h2>
                                </div>
                            </div>
                        </div>
                        <Carousel.Caption>
                            <h5>― Marilyn Monroe</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
  

            <footer className='container' style={{ backgroundColor: "palegold" }}>
                <div className='row'>
                    <div class=" offset-md-5">
                        <div className='col-12 align-self-center'>
                            <br></br>
                            <br></br>
                            <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mail Me</h3>
                        </div>
                        <div className='col-12 align-self-center'>
                            <p>nithyavarshini23@gmail.com</p>
                        </div>
                    </div>
                </div>

            </footer></>
    )

}

export default Home;