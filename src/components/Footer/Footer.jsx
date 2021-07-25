import { Grid } from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import './Footer.scss'

export default function Footer() {
    return (
        <div className=' bg-lightGray mt-5' style={{background:'#f1f1f1df',height:150,justifyContent:'flex-end'}}>
            <div className="row">
                <div className='p-1 d-flex ' style={{margin:'30px auto 30px auto'}}>
                <Grid xs={6} item className='mx-5' style={{float:'left', display:'flex',flexDirection:'row',alignItems:'flex-start'}}>
                    <a href='https:www.facebook.com' target='_blank' style={{marginRight:5}}><FacebookIcon/></a>
                    <a href='https:www.github.com/albaddev' target='_blank' style={{marginRight:5}}><GitHubIcon/></a>
                    <a href='https:www.instagram.com' target='_blank' style={{marginRight:5}}><InstagramIcon/></a> 
                </Grid>
                <Grid xs={6}  item className='image' style={{float:'right'}}>
                    <img className='footerImg' src='https://justin-tippr.netlify.app/img/apple-store-logo.bmp' />
                </Grid>
                </div>
            </div>
        </div>
    )
}
