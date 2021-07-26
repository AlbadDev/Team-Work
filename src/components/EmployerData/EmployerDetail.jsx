import { useState, useEffect } from 'react'
import axios from 'axios'
import {Col, Row, Container } from 'reactstrap'
import {Grid, Typography} from '@material-ui/core'
import EmployerCard from './EmployerCard'
import './EmployerDetail.scss'

export default function EmployerDetail() {
    
    const [employer, setEmployer] = useState([])
    useEffect(() => FetchEmployerDetail(), [])

    const FetchEmployerDetail = () => {
        axios.get("https://api.github.com/users")
             .then( res => {
                     setEmployer(res.data);
                    //  console.log(employer)
                    })
            .catch(error => console.log(error))
    
    }

    
    return (
        <div className="container p-4" style={{justifyContent:'center',alignItems:'center'}}>
            <div className="row">
                <Container className='m-2 p-4' >
                    <h2 className='p-4'>Our Team </h2>
                    <p style={{marginRight:15}}>Here at eztip we are all about that satisfaction. We are the faction of stais. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt earum fugit ipsum, reprehenderit accusamus, ad, amet consequuntur illo totam voluptate ea. Eius quis illum consequuntur deleniti facilis repellendus quo officia!</p>
                </Container>
                {employer.map((emp) => 
                    <div className="col s12 my-4 " style={{justifyContent:'center',textAlign:'center', alignItems:'center'}}>
                        <div  >
                            <div className="card-image image"> 
                                <img src={emp.avatar_url} alt={emp.login} width='200' style={{borderRadius:50}}/>
                            </div>
                            <div className="card m-2">
                                <div className="card-content">
                                    <p style={{fontWeight:'bold',fontSize:20,letterSpacing:2}}>{emp.login}</p>
                                </div>
                                <div className="description m-4">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sed quis facilis tempore, molestias earum?
                                </div>
                            </div>
                        </div> 
                    </div>
                            
                ) } 
            </div>
            
        </div>
    )
}
