import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: true,
         isLoggedIn: false,
      }
    }
    render() {
    return (
      <div>
        <h1>{this.state.isLoaded ? 'Data loaded!' : 'loading..'}</h1>
        {this.state.isLoggedIn ? ( 
            <div>
                <p>Welcome to the site! Please complete the steps below:</p>
                <ol>
                    <li>Confirm your email</li>
                    <li>Complete your Profile</li>
                    <li>Subscribe to the newsletter!</li>
                </ol>
            </div>

        ): (<p>
            Please sign In!
        </p>) }
      </div>
    )
  }
}

export default ConditionalRenderingClass