import React,{useContext} from 'react';
import { Context } from '../../store/appContext';
import {ProjectSearchBar, ProjectCard} from './components'
import img6 from '../../images/logo1.png'

export function Projects() {
    const {store} = useContext(Context )
    return (
        <div className='container p-5'>
	    		<ProjectSearchBar/>

                <div className='mt-5 d-flex align-items-center flex-column'>
                    {store.dataONG.map((ong)=>(
                        <ProjectCard key={ong.id} ong={ong}/>
                    )) }
                </div>

	    </div>
    )
}