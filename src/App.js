import React from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import ReactDOM from "react-dom";
import { Redirect } from 'react-router';
import { BrowserRouter  as Router} from "react-router-dom";
import Route from 'react-router-dom/Route';



Amplify.configure(awsconfig);



function App() {
    return (
        <div className="App">

            <header className="App-header">
             
                <h2>My App Content</h2>


                <Router>
                <div className="App">
   
                <Route exact path="/" render={() => (window.location = "http://ec2co-ecsel-svkd4fe72915-1113855036.us-east-2.elb.amazonaws.com:8501/")} />

   </div>
   
   </Router >

  <div>
   
  </div>



            </header>
        </div>
    );
}

export default withAuthenticator(App);