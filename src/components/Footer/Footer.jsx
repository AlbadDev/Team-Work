import { Grid } from "@material-ui/core";


export default function Footer() {
    return (
        <div className=' bg-lightGray' style={{background:'#f1f1f1df',height:150,justifyContent:'flex-end'}}>
            <div className="row">
                <div className='p-1 d-flex ' style={{margin:'30px auto 30px auto'}}>
                <Grid xs={6} item className='mx-5' style={{float:'left'}}>
                    FaceBook  Intagram  GitHub
                </Grid>
                <Grid xs={6}  item style={{float:'right',marginRight:20}}>
                    <img src='https://justin-tippr.netlify.app/img/apple-store-logo.bmp' />
                </Grid>
                </div>
            </div>
        </div>
    )
}
