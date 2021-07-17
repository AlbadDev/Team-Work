import {Col, Row, Container } from 'reactstrap'

export default function About() {
    return (
        <div className=''>
            <div className="row">
                <div className="head p-5" style={{background:'#43d9b8',justifyContent:'center',textAlign:'center',color:'white'}}>
                    <h3 style={{fontFamily:'verdana'}}>Collecting and managing tips shouldn’t be so difficult</h3>
                </div>
                <Container className="aboutPage p-5" style={{justifyContent:'center',textAlign:'center',margin:'10px auto 10px auto'}}>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, dolor fugit. Quibusdam dicta facere magnam.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel dolore commodi in eos impedit! Cum tempore, fugiat qui obcaecati sunt eaque, minima nesciunt at quidem suscipit repudiandae assumenda aperiam harum quibusdam ipsam libero dolorem dolore nulla laudantium voluptas voluptatum quo esse molestiae reiciendis! Sapiente voluptates beatae necessitatibus. Ipsum, id sint.</p>
                </Container>
            </div>
        </div>
    )
}
