import {Col, Row, Container } from 'reactstrap'

export default function About() {
    return (
        <div className=''>
            <div className="row">
                <div className="d-grid" >
                    <Row className="head p-5 " style={{background:'#43d9b8',justifyContent:'center',textAlign:'center',color:'white'}}>
                        <h3 style={{fontFamily:'verdana'}}>We design world-class</h3>
                    </Row>
                    <div className="container">
                        
                        <Container xs={12} lg={6} className="aboutPage p-5 " style={{justifyContent:'center',textAlign:'center',margin:'10px auto 10px auto',}}>
                            <h1 className='relative m-5' style={{fontSize:60}}>Digital products</h1>
                            <p>We are a remote design agency based in Montreal, working with clients around the world. As passionate designers, we love building products that are easy to use, accessible, engaging, and delightful.</p>
                        </Container>
                        <Container xs={12} lg={6} className="aboutPage p-5 ">
                            <img src='https://assets.website-files.com/5d27763c46ba9e561dc5b972/5d5027d73691c92e7ce27422_0%201%20lvl%20Illustration.svg' />
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    )
}
