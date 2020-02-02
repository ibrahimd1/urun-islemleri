export const ProductMixin = {
	computed: {
		isLoading() {
			if (this.saveButtonClicked) {
				return { display: "block" }
			} else {
				return { display: "none" }
			}
		}
	}
}
