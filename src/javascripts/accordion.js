/**
 * アコーディオンを開閉する
 */
export const changeAccordionStatus = () => {
	$(".accordion-trigger").on("click", function () {
		if ($(this).attr("aria-expanded") === "true") {
			$(this).attr("aria-expanded", "false");
			$(this)
				.parents(".accordion__list")
				.find(".accordion-panel")
				.attr("aria-hidden", "true");
			$(this).parents(".accordion__header").css("border-radius", "8px");
		} else {
			$(this).attr("aria-expanded", "true");
			$(this)
				.parents(".accordion__list")
				.find(".accordion-panel")
				.attr("aria-hidden", "false");
			$(this).parents(".accordion__header").css("border-radius", "8px 8px 0 0");
		}
	});
};
