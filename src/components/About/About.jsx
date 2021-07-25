import './About.scss'



export default function About() {
    return (
        <div style={{justifyContent:'center',alignItems:'center'}}>
            <div style={{textAlign:'center'}} >

                <div className="head p-5 " xs={12}  style={{background:'#43d9b8',color:'white'}}>
                    <h3 style={{fontFamily:'verdana'}}>We design world-class</h3>
                </div>

                <div xs={12} lg={12} className="aboutPage p-5 " style={{justifyContent:'center',textAlign:'center',margin:'10px auto 10px auto'}}>
                    <h1 style={{fontSize:60,marginBottom:50}}>Digital products</h1>
                    <p>We are a remote design agency based in Montreal, working with clients around the world. As passionate designers, we love building products that are easy to use, accessible, engaging, and delightful.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo nihil quod, repellat doloribus, ducimus distinctio commodi ad consequuntur rerum ut voluptates dolorum magnam expedita. Optio magnam asperiores distinctio, harum maxime modi voluptates. Odit harum doloribus sequi, ab velit consequuntur ex consectetur dolores facere libero necessitatibus animi facilis tempora illo blanditiis.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum omnis iste id, nobis quam nulla accusamus! Error ex esse qui cum quam quas, dolor laboriosam culpa nostrum officiis in veritatis quisquam debitis suscipit corrupti rerum voluptatem est praesentium ab? Fugiat omnis veniam iure adipisci repellat, sint hic quod quam eaque?
                    </p>
                </div>

                <div className="para" >
                    <div className='col s12 x6 m-2 ' xs={12} sm={12} lg={6}>
                        <img  src="https://justin-tippr.netlify.app/img/3establish_reputation_content.png" alt="aboutImage" width='350'/>
                    </div> 
                    <div className='col s12 x6 m-5 'xs={12} sm={12} lg={6} style={{justifyContent:'center',alignItems:'center'}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quas.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt pariatur voluptatibus, eum obcaecati aperiam sed consequatur cum placeat minima corporis explicabo accusantium, labore, officiis enim quasi eveniet. Repellendus amet laudantium, autem illo, hic soluta excepturi accusantium labore totam nam error iure sunt accusamus ab velit obcaecati maxime deleniti iusto! Modi?
                    </div> 
                </div>
                <div className="para m-5" style={{justifyContent:'center',alignItems:'center'}}>
                    <div className="col s12 m-4" >
                        We are a remote design agency based in Montreal, working with clients around the world. As passionate designers, we love building products that are easy to use, accessible, engaging, and delightful.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo nihil quod, repellat doloribus, ducimus distinctio commodi ad consequuntur rerum ut voluptates dolorum magnam expedita. Optio magnam asperiores distinctio, harum maxime modi voluptates. Odit harum doloribus sequi, ab velit consequuntur ex consectetur dolores facere libero necessitatibus animi facilis tempora illo blanditiis.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum omnis iste id, nobis quam nulla accusamus! Error ex esse qui cum quam quas, dolor laboriosam culpa nostrum officiis in veritatis quisquam debitis suscipit corrupti rerum voluptatem est praesentium ab? Fugiat omnis veniam iure adipisci repellat, sint hic quod quam eaque?
                        
                    </div>

                    <div className="col s12 m-4" >
                        <img className='aboutImg' src="https://justin-tippr.netlify.app/img/1benefit_service_content.png" alt="aboutImage" width='350' />
                    </div>
                </div>
            </div>
        </div>
    )
}
