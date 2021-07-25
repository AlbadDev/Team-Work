import {Col, Row, Container } from 'reactstrap'
import './Home.scss'
import {Typography} from '@material-ui/core'




export default function Home() {
    return (
       <div className='container' style={{paddingLeft:50,justifyContent:'center',alignItems:'center',flexWrap:'wrap'}} >
           <div className="header" >
           <Typography className='headerText' style={{margin:50,fontSize:25,fontFamily:'Raleway '}}>YOUR HOME FOR TIPPING </Typography>
           </div>
           <hr />
           <Row  xs='1' md='2' lg='2' >
               <Row className='p-2'>
                   
                    <Col className='' style={{}}>
                            <Typography className='px-4' style={{fontFamily:' Raleway',fontSize:25,marginBottom:15}}>
                                TIP
                            </Typography>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde necessitatibus illo aliquam obcaecati, facere beatae assumenda fugit eaque consequuntur consectetur, quas id at natus cum dolorem eos, esse ab a!
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, delectus.
                            <button style={{margin:20,
                                marginBottom:15,
                                width:130,
                                border:'none',
                                borderRadius: 3,
                                background:'#43d9b8',padding:5}}>
                                Team Member
                            </button>
                    </Col>
                    <Col >
                    <Typography style={{fontFamily:'Raleway',fontSize:25,marginBottom:15}}>Review Code</Typography>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere mollitia voluptatem corporis, rem est nulla ad maxime cupiditate commodi ratione rerum at laborum, amet tenetur deserunt accusamus. Odit, nemo repellat!
                            <button style={{margin:20,
                                width:130,
                                border:'none',
                                borderRadius: 3,
                                background:'#0dcaf0',padding:5}}>
                                Team Member
                            </button>
                    </Col>
               </Row>
               <Container className='' >
                   {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nam sit culpa. Aliquam minima alias enim illum repellat dolorem odio aut, hic dicta, fugiat in officia aspernatur cum blanditiis ipsam numquam doloremque esse exercitationem dolor facere soluta libero maxime voluptate repudiandae? Ducimus sit, voluptatem fugiat libero ut neque molestiae, laborum obcaecati unde sed fugit repellat doloremque deserunt earum id. Necessitatibus culpa illo cupiditate perspiciatis nostrum laborum, accusamus aperiam optio animi quibusdam asperiores enim consequuntur laboriosam! Impedit in amet, aspernatur labore, quasi quia totam itaque aliquid magni ex sequi ad obcaecati ipsa error dolor culpa eos tenetur magnam architecto, earum molestiae. Incidunt, culpa rerum libero tempora aliquid rem est suscipit placeat sint? Blanditiis, magnam nam. Necessitatibus, quod consequatur obcaecati quas dignissimos id. Reiciendis magnam soluta eum exercitationem! Consectetur sunt sequi necessitatibus! Impedit nihil voluptatem repudiandae accusantium in eum, ad obcaecati, ducimus consectetur dolor culpa eligendi? Commodi unde porro eum in id repellendus corrupti suscipit molestias illo vitae sapiente, ipsum voluptas voluptatum perferendis labore dolorem quasi distinctio eveniet ad soluta nihil similique recusandae fugit. Quibusdam dolore laudantium mollitia, modi dolores magni beatae sit illo obcaecati aspernatur nemo dicta repellat explicabo porro iure eaque alias impedit quis enim similique veniam ad facere. Ad magnam asperiores nulla quo debitis numquam, inventore ipsum nobis esse blanditiis accusamus exercitationem minima delectus possimus. Rem dolorem magni nemo aperiam quisquam dolor suscipit quibusdam repellat ipsam id, omnis facilis eum laborum iure asperiores aliquam odio eaque iste quas. Quidem porro inventore recusandae consequuntur sed? */}
                   <img className='homeImg' src='https://intercamp.herokuapp.com/images/join-us.png' stype={{marginRight:10}}/>
               </Container>
           </Row>
           
       </div>
    )
}
