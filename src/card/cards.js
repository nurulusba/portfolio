import React , {Component} from 'react';
import Card from './cardUi';

import img1 from "../assets/table.jpg";
import img2 from "../assets/coffee.jpg";
import img3 from "../assets/table.jpg";


class Cards extends Component {
    render(){
        return(
           
           <div className="container-fluid d-flex justify-content-center">
               
                <div className="row">
               
                    <div className="col-md-4">
                      <Card 
                      imgsrc={img1} 
                      title = "Table"
                      para = "In today’s economy, digital nomads,freelancers, students and travellers can get by for hours worth of work with a Wi-Fi connection, a laptop and a hot cup of coffee."
                      />
                    </div>
               
                    <div className="col-md-4">
                     <Card 
                     imgsrc={img2} 
                     title = "Playground"
                     para = "In today’s economy, digital nomads,freelancers, students and travellers can get by for hours worth of work with a Wi-Fi connection, a laptop and a hot cup of coffee."

                     />
                    </div>

                    <div className="col-md-4">
                        <Card 
                        imgsrc={img3} 
                        title = "Coffee"
                        para = "In today’s economy, digital nomads,freelancers, students and travellers can get by for hours worth of work with a Wi-Fi connection, a laptop and a hot cup of coffee."

                        />
                    </div>
               
                </div>
            
            </div>
        )
    }
}

export default Cards;