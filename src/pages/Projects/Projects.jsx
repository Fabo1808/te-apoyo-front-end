import React,{useContext} from 'react';
import { Context } from '../../store/appContext';
import {ProjectSearchBar, ProjectCard} from './components'

export function Projects() {
    const {store,actions} = useContext(Context )
    return (
        <div>
	    		<ProjectSearchBar/>
                {store.dataONG.map((ong)=>(
                    <ProjectCard key={ong.id} ong={ong}/>
                )) }

	    </div>
    )
}