import React, {Component} from 'react'
import './App.css';
import './style.css';
import Fruits1 from './Fruits1.png';
import Fruits3 from './Fruits3.png';
import Fruits4 from './Fruits4.png';
import {displayText} from './DisplayText'
import {displaySection} from './DisplaySection'

class App extends Component {
  render(){
  return (
    <div>
    <div className="section1">
      <div>
      <h1 className="Head1">Lorem lpsum</h1>
      {displayText}
      </div>
      <div>
         <img className="imgAlign" src={Fruits4} alt="Fruits1" />
      </div>
    </div>

    <div className="section2">
      <div>
         <img className="imgAlign2" src={Fruits1} alt="Fruits1" />
      </div>
      {displaySection} 
    </div>

    <div className="section3">
      <div >
        <h1 className="Head3">Lorem lpsum</h1>
        {displayText}
      </div> 
      <div>
         <img className="imgAlign3" src={Fruits3} alt="Fruits1" />
      </div>  
    </div>

    <div className="tble">
    <h2>Nutrition Fact</h2>
      <div className="Flexadjust">
      <h3 className="inline">Serving Size</h3>
      <h3 className="value"> 100 g</h3>
      </div>
      <div className="Flexadjust">
        <div className="inline">
        
        <h1  >Calories</h1>
        </div>
        <div className="value"><h3 > 89</h3></div>
      </div>
   

    <p className="spvalue"> % Daily Value*</p>

    <div className= "Flexadjustthin">
    <h3 className="inline">Total fat 0.3g</h3>
    <p className="value">0%</p>
    </div>


    <div className="Flexadjustthin">
    <p className="inline">saturated fat 0.1g</p>
    <p className="value">0%</p>
    </div>
    <div className="Flexadjustthin">
    <h3 className="inline">Sodium 1mg</h3>
    <p className="value"> 0%</p>
    </div>
    <div className="Flexadjustthin">
    <h3 className="inline">Tata carbohydrate 23g</h3>
    <p className="value">8%</p>
    </div>
    <div className="Flexadjustthin">
    <p className="inline">Dietarty Fiber 2.6g</p>
    <p className="value">9%</p>
    </div>  
    <p className="Flexadjustthin">Sugar 12g</p>
    <div className="Flexadjust">
    <h3 className="inline">Protein 1.1g</h3>
    <p className="value">2%</p>
    </div>
    <div className="Flexadjustthin">
    <p className="inline">Vitamin D 0.00mcg</p>
    <p className="value">0%</p>
    </div>
    <div className="Flexadjustthin">
    <p className="inline">Calcium 5.00mg</p>
    <p className="value">0%</p>
    </div>
    <div className="Flexadjustthin">
    <p className="inline">Iron 0.26mg</p>
    <p className="value">1%</p>
    </div>
    <div className="Flexadjust">
    <p className="inline">Potassium 358mg</p>
    <p className="value">8%</p>
    </div>
    <p>The %Daily value tells you how much a nutrition in a serving of food contribute to  a daily diet . 2000 calories per day is used for geneal nutrition advice.</p>

     </div>

     <div className="tble2">
      <ul>
        <li> <h1 className="Thickborder">Delivering with love and care for you to relish</h1></li>
      </ul>
      <h3 >About Demo Group</h3>
      <p>Leading the crops devision for Demo Group is indias best branded fruit company and a market leader in controlled cultivation
          and marketing of high quality fruits to domestic and international customers in a socially resoponsible manner </p>
      <p className="Thickborder">we are happy to serve fresh & delious fruits.</p>
     </div>
    </div>
  );
}
}
export default App;
