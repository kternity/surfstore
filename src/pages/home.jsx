import "./home.css";
import {Link} from 'react-router-dom';

function Home() {

   return ( 
   <div className="home">
      <h1>Welcome to Ken & Lea's Surfboard Store</h1>
      <h4>Your perfect surfboards 1 l click away!</h4>
      
      <Link className='btn btn-primary' to="/catalog">Check our amazing surfboards</Link>
   </div>
   );
}

export default Home;
