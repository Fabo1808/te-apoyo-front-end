const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: undefined,
			url_cloudinary: "https://api.cloudinary.com/v1_1/teapoyo/image/upload",
			url_api:"http://192.168.0.6:8000",
			ONG: "",
			id:'',
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

				setStore({ token: undefined,ONG:"" });
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
			// saveFavorites: async (name, url, img) => {
			// 	const prevStore = getStore();

			// 	let data = {
			// 		url: url,
			// 		name_favorite: name
			// 	};

			// 	if (prevStore.token) {
			// 		let response = await fetch(`${prevStore.url}/favorites/add`, {
			// 			method: "POST",
			// 			headers: {
			// 				Authorization: `Bearer ${prevStore.token}`,
			// 				"content-type": "application/json"
			// 			},
			// 			body: JSON.stringify(data)
			// 		});
			// 		let body = await response.json();
			// 		if (body) setStore({ favorites: [...prevStore.favorites, body] });
			// 	}
			// },

			// getFavorites: async () => {
			// 	const prevStore = getStore();

			// 	if (prevStore.token) {
			// 		let response = await fetch(`${prevStore.url}/favorites`, {
			// 			method: "GET",
			// 			headers: { Authorization: `Bearer ${prevStore.token}` }
			// 		});
			// 		let body = await response.json();
			// 		setStore({ favorites: body });
			// 	}
			// },

			// deleteFavorite: async id => {
			// 	const prevStore = getStore();
			// 	const actions = getActions();

			// 	if (prevStore.token) {
			// 		let response = await fetch(`${prevStore.url}/favorites/delete/${id}`, {
			// 			method: "DELETE",
			// 			headers: { Authorization: `Bearer ${prevStore.token}` }
			// 		});

			// 		let body = await response.json();
			// 		if (response.ok) {
			// 			actions.getFavorites();
			// 		} else alert(body.message);
			// 	}
			// },

			// createDescription: async (url, img) => {
			// 	let response = await fetch(url);
			// 	let data = await response.json();
			// 	setStore({ description: { data: data.result } });
			// },
		
		}
	};
};

export default getState;
