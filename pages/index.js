import Layout from '../components/Layout'

const HomePage = () => {

  const homeBanner = () => (
    <div className='welcome-container'>
      <div className='welcome-text'>
      <h2>Zero Waste</h2>
      <h5>Sustainable living starts with Zero Waste. Let's keep Sri Lanka clean and green.</h5>
      </div>
    </div>
  )
  
    return <Layout><div className='container-home'>
      {homeBanner()}
      </div></Layout>
  }
  
  export default HomePage;