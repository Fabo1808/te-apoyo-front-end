import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { About, Home, SignIn, SignUp, Contact, HowItWorks, Projects} from '../pages'
import { NavBar } from '../components'

export function Routes() {
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
                            <Redirect to="/error" />
						</Switch>
					</div>
				</main>
			</div>
		);
	}