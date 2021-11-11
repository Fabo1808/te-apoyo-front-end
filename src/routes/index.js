import React,{useEffect, useContext} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { About, Home, SignIn, SignUp, Contact, HowItWorks, Projects} from '../pages'
import { NavBar } from '../components'
import Profile from '../pages/profile/profile';
import CreateEvent from '../pages/CreteEvent/CreateEvent';
import { Context } from '../store/appContext';

export function Routes() {

	const {store, actions}= useContext(Context)

  useEffect(
  () => {
    actions.getONG();
    actions.getActivities()
    actions.setToken();
  },
  []
)
	
		return (
			<div id="app-container">
				<NavBar />
				<main>
					<div className="container-fluid">
						<Switch>
							<Route exact path='/' component={Home} />
							<Route path='/about' component={About} />
							<Route path='/signIn' component={SignIn} />
                            <Route path='/signUp' component={SignUp} />
							<Route path='/contact' component={Contact} />
                            <Route path='/howItWorks' component={HowItWorks} />
                            <Route path='/projects' component={Projects} />
							<Route path='/profile/:id' component={Profile} />
							<Route path='/createEvent' component={CreateEvent} />
                            <Redirect to="/error" />
						</Switch>
					</div>
				</main>
			</div>
		);
	}