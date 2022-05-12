/**
 * 詳細ページのアンカーリンク
 */
export const detailPageAnchor = () => {
	$('a[href^="#"]').on("click", function () {
		$(".anchor-nav-list__item").css("border-bottom", "2px solid transparent");
		$(this)
			.parent(".anchor-nav-list__item")
			.css("border-bottom", "2px solid #008660");

		const adjust = 0;
		const speed = 400;
		const href = $(this).attr("href");
		const target = $(href === "#" || href === "" ? "html" : href);
		const position = target.offset().top + adjust;
		$("body,html").animate({ scrollTop: position }, speed, "swing");
		return false;
	});
	$(".anchor-nav-list__item:first").css("border-bottom", "2px solid #008660");
};
