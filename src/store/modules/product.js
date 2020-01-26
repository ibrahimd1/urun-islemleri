import Vue from "vue"
import { router } from "../../router"

const state = {
	products: []
}
const getters = {
	getProducts(state) {
		return state.products
	},
	getProduct(state) {
		return (key) =>
			state.products.filter((element) => {
				return element.key == key
			})
	}
}
const mutations = {
	updateProductList(state, payload) {
		state.products.push(payload)
	}
}
const actions = {
	initApp({ commit }) {
		Vue.http
			.get("https://urun-islemleri-1a6a3.firebaseio.com/products.json")
			.then((response) => {
				let data = response.body
				for (let key in data) {
					data[key].key = key
					commit("updateProductList", data[key])
				}
			})
	},
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
