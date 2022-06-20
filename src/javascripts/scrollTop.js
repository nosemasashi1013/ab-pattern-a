export const showScrollTop = () => {
	const $pagetop = $(".scroll-top");

	$(window).on("scroll", function () {
		$(this).scrollTop() < 1400
			? $pagetop.attr("aria-hidden", "true")
			: $pagetop.attr("aria-hidden", "false");
	});
};

export const scrollTop = () => {
	$('a[href^="#"]').on("click", function () {
		const href = $(this).attr("href");
		const target = $(href == "#" || href == "" ? "html" : href);
		const position = target.offset().top;
		$("html, body").animate({ scrollTop: position }, 600, "swing");
		return false;
	});
};
