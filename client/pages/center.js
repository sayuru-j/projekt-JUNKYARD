import Layout from "../components/Layout";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Pie } from 'react-chartjs-2';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

const CenterPage = () => {


    const intro = () => (
        <div className="container text-os">
            <h5 className="text-center">Why we do this?</h5>
        </div>
    )

    const ourCenters = () => (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col- card-pad">
                <Card sx={{ maxWidth: 220, minHeight: 350}}>
                <CardMedia
                  component="img"
                  alt=""
                  height="140"
                  image="https://picsum.photos/200/300"
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
                <div className="card-btn">
                <Button color="warning">Visit</Button>
                </div>
              </Card>
                </div>



                <div className="col- card-pad">
                    <Card sx={{ maxWidth: 220, minHeight: 350}}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="https://picsum.photos/200/300?grayscale"
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
                <div className="card-btn">
                <Button color="warning">Visit</Button>
                </div>
              </Card>
                </div>



                <div className="col- card-pad">
                    <Card sx={{ maxWidth: 220, minHeight: 350}}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="https://picsum.photos/200/300"
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
                <div className="card-btn">
                <Button color="warning">Visit</Button>
                </div>
              </Card>
                </div>



                <div className="col- card-pad">
                    <Card sx={{ maxWidth: 220, minHeight: 350}}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="https://picsum.photos/200/300?grayscale"
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
                <div className="card-btn">
                <Button color="warning">Visit</Button>
                </div>
              </Card>
                </div>
            </div>
        </div>
    )


    const statistics = () => {
        return <div className="container ">
            <h5 className="text-os text-center">Stats</h5>
        <div className="row justify-content-center">
            <div className="col- card-size">
                <Pie data={data}/>
            </div>
            <div className="col- card-size">
                <Pie data={data}/>
            </div>
      </div>
      </div>
    }
        
        
    
    
    return <Layout>
        {intro()}
        {ourCenters()}
        {statistics()}
    </Layout>
}

export default CenterPage;