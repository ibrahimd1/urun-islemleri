import Vue from "vue"
import { router } from "../../router"

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
	saveProduct({ dispatch, commit }, payload) {
		Vue.http
			.post(
				"https://urun-islemleri-1a6a3.firebaseio.com/products.json",
				payload
			)
			.then((response) => {
				payload.key = response.body.name
				commit("updateProductList", payload)
				debugger
				let tradeResult = {
					purchase: payload.price,
					sale: 0,
					count: payload.count
				}

				dispatch("setTradeResult", tradeResult)
				router.replace("/")
			})
	},
	sellProduct({ commit }, payload) {}
}

export default {
	state,
	getters,
	mutations,
	actions
}
