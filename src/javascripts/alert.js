/**
 * 防災緊急情報の表示切替
 */
export const showAlert = () => {
	$(".alert-trigger__btn").on("click", function () {
		if ($(".section-content__alert").attr("aria-hidden") === "true") {
			$(".section-content__alert").attr("aria-hidden", "false");
			$(".alert-trigger__btn").attr("aria-expanded", "true");
		} else {
			$(".section-content__alert").attr("aria-hidden", "true");
			$(".alert-trigger__btn").attr("aria-expanded", "false");
		}
	});
};
