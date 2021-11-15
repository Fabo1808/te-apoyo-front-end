const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: undefined,
			url_cloudinary: "https://api.cloudinary.com/v1_1/teapoyo/image/upload",
			url_api:"http://10.62.1.136:8000",
			ONG: "",
			id:undefined,
			dataONG:[],
			activities:[]
		},
	
	actions: {
		setToken: () => {
			setStore(
				{
					token: localStorage.getItem("token"),
					ONG: localStorage.getItem("ONG"),
					id:localStorage.getItem('id')
				});
		},
	
		deleteToken: () => {
			localStorage.removeItem("token");
			localStorage.removeItem("ONG");
			localStorage.removeItem("id");
			
			setStore({ token: undefined,ONG:"" ,id:undefined});
		},
	
		getONG: async () => {
			const store= getStore()
			let response = await fetch(`${store.url_api}/ong`);
			let body = await response.json();
			if(response.ok){
				setStore({dataONG:body})
			}
	
		},
		getActivities: async () => {
			const store= getStore()
			let response = await fetch(`${store.url_api}/activities`);
			let body = await response.json();
			if(response.ok){
				setStore({activities:body})
			}
	
		},

	}
};
};
	
export default getState;
	