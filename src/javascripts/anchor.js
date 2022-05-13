/**
 * 詳細ページのアンカーリンク
 */
export const detailPageAnchor = () => {
	$('a[href^="#"]').on("click", function () {
		const adjust = 0;
		const speed = 400;
		const href = $(this).attr("href");
		const target = $(href === "#" || href === "" ? "html" : href);
		const position = target.offset().top + adjust;
		$("body,html").animate({ scrollTop: position }, speed, "swing");
		return false;
	});
};
