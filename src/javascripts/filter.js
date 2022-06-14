export const categoryFilter = () => {
	$(".no-result-text").hide();
	$(
		".search-result-condition__form .checkbox__input, .search-result-condition__form .radio__input"
	).on("change", function () {
		const $searchResultItem = $(".search-result-list__item");
		const selectedRequirements = $(".radio-list__item")
			.find("input:checked")[0]
			.getAttribute("value");
		const selectedTags = $(".checkbox-list__item")
			.find("input:checked")
			.map(function (i, el) {
				return $(el).attr("value");
			})
			.get();

		$searchResultItem.hide();

		const $filteredResults = $searchResultItem
			.filter(function (i, el) {
				return selectedRequirements
					? $(el).data("requirements").includes(selectedRequirements)
					: true;
			})
			.filter(function (i, el) {
				return selectedTags.length > 0
					? $(el)
							.data("tags")
							.some((r) => selectedTags.includes(r))
					: true;
			});
		$filteredResults.show();

		$filteredResults.length === 0
			? $(".no-result-text").show()
			: $(".no-result-text").hide();
		$(".result-count").text(String($filteredResults.length));
	});
};
