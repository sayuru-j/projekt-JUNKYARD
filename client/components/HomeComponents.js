import { Fab } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const HomeComponents = () => {
    const homeBanner = () => (
        <div className='welcome-container vh'>
          <div className='welcome-text'>
          <h2>Zero Waste</h2>
          <h5>Sustainable living starts with Zero Waste. Let's keep Sri Lanka clean and green.</h5>
          </div>
        </div>
    )

      const sampleCard = () => (
        <div className='our-serv-container vh'>
        <div className='our-services-container'>
          <h2 className="text-os">Our Services</h2>
        <div className='our-services-container-card container'>
                  <Card sx={{ maxWidth: 220, maxHeight: 420}}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="/static/images/waste-collection.jpg"
                />
                <div className="card-content">
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Waste Collection
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  We offer waste collection services throughout Sri Lanka, keeping the environment clean and healthy for 20M+ people.
                  </Typography>
                </CardContent>
                </div>
              </Card>

              <Card sx={{ maxWidth: 220, maxHeight: 420}}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="/static/images/recycling-centers.jpg"
                />
                <div className="card-content">
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Recycling Centers
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Our goal is to establish recycling centers, creating jobs and promoting a cleaner world by conserving resources.
                  </Typography>
                </CardContent>
                </div>
              </Card>

              <Card sx={{ maxWidth: 220, minHeight: 420}}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="/static/images/recycled-products.jpg"
                />
                <div className="card-content">
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Recycled Products
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Recycling is a growing trend that conserves resources and helps us stay on this earth longer.
                  </Typography>
                </CardContent>
                </div>
              </Card>

              <Card sx={{ maxWidth: 220, maxHeight: 420}}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="/static/images/waste-vehicles.jpg"
                />
                <div className="card-content">
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Garbage Trucks
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  We provide customized waste collection vehicles for efficient and effective garbage collection.
                  </Typography>
                </CardContent>
                </div>
              </Card>
              

              </div>
              </div>
              </div>

              
      )
        
      

      return <div className='container-home'>
        {homeBanner()}
        {sampleCard()}
        
      </div>
}

export default HomeComponents;