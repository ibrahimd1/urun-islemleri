import Vue from "vue"

const state = {
	products: []
}
const getters = {
	getProducts(state) {
		return state.products
	},
	getProduct(state) {}
}
const mutations = {
	updateProductList(state, payload) {
		state.products.push(payload)
	}
}
const actions = {
	initApp({ commit }) {},
	saveProduct({ commit }, payload) {
		Vue.http.post(
			"https://urun-islemleri-1a6a3.firebaseio.com/products.json",
			payload
		)
	},
	sellProduct({ commit }, payload) {}
}

export default {
	state,
	getters,
	mutations,
	actions
}
