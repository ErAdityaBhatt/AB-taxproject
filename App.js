import Header from './mycomponents/header'
import Crumb from './mycomponents/crumb'
import Logo from './mycomponents/images/Taxcertificate.7a8c7f5a.svg'
import Popup from './mycomponents/Popup';
import { useState } from 'react'
import { Button } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Arrow from './mycomponents/images/back-arrow.svg'
import Footer from './mycomponents/Footer';

function App() {
  const [btnPopup, setBtnPopup] = useState(false);

  return (
    <div className="App">
      <Header />
      <Crumb />
      <p className="container style-tax"><img src={Arrow} /> Tax Statements</p>
      <hr className="container" />
      <br />
      <div className="box container shadow bg-body rounded box-size" onClick={() => setBtnPopup(true)}>
        <div className="content">
          <img src={Logo} />
          <span className="line">Tds Certificate</span>
        </div>
      </div>
      <Popup trigger={btnPopup} settrigger={setBtnPopup}></Popup>
      <Footer />
    </div>
  );
}

export default App;

