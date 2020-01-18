import Vuex from "vuex"

const store = new Vuex.store({
	state: {
		products: {
			productName: null,
			productCount: null,
			productPrice: null,
			productDescription: null
		}
	}
})
