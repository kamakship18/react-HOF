// progression 1

import React, {Component} from "react";

class HigherOrderFunctions extends Component{
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }

// Progression 2 

renderItems = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => (
        <React.Fragment key={item.id}>
            <li className="list-elements">
                {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
                <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
           </li>
        </React.Fragment>
    ));
    return mapRows;
};

// progression 3// list of data on the basis of user type 

renderBasedOnUserType = () => {
    const data = this.state.userData;
    const filterData = data.filter((item)=>{
      return item.user_type == "Designer";
    }).map((item)=>(
      <React.Fragment key={item.id}>
          <li className="list-elements">
              <span>Id: {item.id}</span>
              <span>Name : {item.name}</span>
              <span>User Type: {item.user_type}</span>
          </li>
      </React.Fragment>
      )
    );
    return filterData;
  }

//   progression 4

  renderBasedOnLetterJ = () => {
    const data = this.state.userData;
    const filterData = data.filter((item)=>{
      return item.name[0] == "J";
    }).map((item)=>(
      <React.Fragment key={item.id}>
          <li className="list-elements">
              <span>Id: {item.id}</span>
              <span>Name : {item.name}</span>
              <span>User Type: {item.user_type}</span>
          </li>
      </React.Fragment>)
  
    );
    return filterData;
  }

//   progression 5

  renderBasedOnAge = () => {
    const data = this.state.userData;
    const filterData = data.filter((item)=>{
      if(item.age<=50 && item.age>28){
        return item
      }
    }).map((item)=>(
      <React.Fragment key={item.id}>
          <li className="list-elements">
              <span>Id: {item.id}</span>
              <span>Name : {item.name}</span>
              <span>User Type: {item.user_type}</span>
          </li>
      </React.Fragment>)
  
    );
    return filterData;
  }

//   progression 6 

  renderTotalAgeOfDesigners = () => {
    const data = this.state.userData;
    const reducedData = data.reduce((accumilator, currentValue)=>{
      if(currentValue.user_type=="Designer"){
        accumilator+=currentValue.years;
      }
      return accumilator;
    },0)
    return reducedData;
  }
  render() {
    return (
      <>
      <React.Fragment>
        <h1>Display all items</h1>
        <div className="display-box">
        <ul>{this.renderItems()} </ul>
        </div>
      </React.Fragment>
  
      <React.Fragment>
        <h1>Display based on user type</h1>
        <div className="display-box">
        <ul>{this.renderBasedOnUserType()} </ul>
        </div>
      </React.Fragment>
  
      <React.Fragment>
        <h1>Filter all data starting with letter J </h1>
        <div className="display-box">
        <ul>{this.renderBasedOnLetterJ()} </ul>
        </div>
      </React.Fragment>
  
      <React.Fragment>
        <h1>Filter all data based on age greater than 28 and age less than or equal to 50 </h1>
        <div className="display-box">
        <ul>{this.renderBasedOnAge()} </ul>
        </div>
      </React.Fragment>
  
      <React.Fragment>
        <h1>Find the total years of the designers </h1>
        <div className="display-box">
        <ul>{this.renderTotalAgeOfDesigners()} </ul>
        </div>
      </React.Fragment>
  
    </>
    )};
}
  export default HigherOrderFunctions;
  