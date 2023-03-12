const HomeComponents = () => {
    const homeBanner = () => (
        <div className='welcome-container'>
          <div className='welcome-text'>
          <h2>Zero Waste</h2>
          <h5>Sustainable living starts with Zero Waste. Let's keep Sri Lanka clean and green.</h5>
          </div>
        </div>
      )
    
      const ourServices = () => {
        return  <div className='our-services-container'>
                <h2 className="text-os">Our Services</h2>
                <div className='our-services-container-card'>
                <div className="card">
                <img className="card-img-top card-img" src="/static/images/waste-collection.png" alt="Card image cap"/>
                <center>
                <h5 className='card-text'>Waste Collection</h5>
                </center>
                <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>

                <div className="card">
                <img className="card-img-top card-img" src="/static/images/recycling-centers.png" alt="Card image cap"/>
                <center>
                <h5 className='card-text'>Waste Recycling Centers</h5>
                </center>
                <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>

                <div className="card">
                <img className="card-img-top card-img" src="/static/images/recycled-products.png" alt="Card image cap"/>
                <center>
                <h5 className='card-text'>Recycled Products</h5>
                </center>
                <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>

                <div className="card">
                <img className="card-img-top card-img" src="/static/images/waste-vehicles.png" alt="Card image cap"/>
                <center>
                <h5 className='card-text'>Waste Collection Vehicles</h5>
                </center>
                <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
                </div>
                </div>
      }
        


      return <div className='container-home'>
        {homeBanner()}
        {ourServices()}
      </div>
}

export default HomeComponents;