import { Fab } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const HomeComponents = () => {
    const homeBanner = () => (
        <div className='welcome-container'>
          <div className='welcome-text'>
          <h2>Zero Waste</h2>
          <h5>Sustainable living starts with Zero Waste. Let's keep Sri Lanka clean and green.</h5>
          </div>
        </div>
    )

      const sampleCard = () => (
        <div className='our-services-container'>
          <h2 className="text-os">Our Services</h2>
        <div className='our-services-container-card'>
                  <Card sx={{ maxWidth: 200}}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="/static/images/waste-collection.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Waste Collection
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>

              <Card sx={{ maxWidth: 200}}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="/static/images/recycling-centers.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Recycling Centers
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>

              <Card sx={{ maxWidth: 200}}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="/static/images/recycled-products.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Recycled Products
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a 
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>

              <Card sx={{ maxWidth: 200}}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="/static/images/waste-vehicles.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Garbage Trucks
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a 
                  </Typography>
                </CardContent>
                <div>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
                </div>
              </Card>
              

              </div>
              </div>

              
      )
        
      

      return <div className='container-home'>
        {homeBanner()}
        {sampleCard()}
        
      </div>
}

export default HomeComponents;