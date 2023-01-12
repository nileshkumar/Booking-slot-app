import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {render} from 'react-dom'
import Booking from './Booking'
import 'bootstrap/dist/css/bootstrap.css'
import "react-datepicker/dist/react-datepicker.css"

class Welcome extends React.Component {
  render() {
    return(
      <div className="container">
        <h1>Booking App</h1>
        <hr/>
        <Booking/>
      </div>
    )
  }
}

document.addEventListener("DOMContentLoaded", () => {
  render(<Welcome />, document.getElementById('welcome'));
});


export default Welcome