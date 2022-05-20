/**
 * slickを初期化する
 */
export const initializeSlick = () => {
	$(".section-content__carousel").slick({
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		pauseOnDotsHover: false,
		infinite: true,
		waitForAnimate: false,
		customPaging: function (slider, i) {
			let label = $(slider.$slides[i]).find("img").attr("alt");
			let img = $(slider.$slides[i]).find("img").addClass("btn-img").clone();
			let wrappedImg = $("<div>", {
				addClass: "img-wrapper",
			}).append(img);

			return $('<button type="button" />')
				.append(wrappedImg)
				.append(`<p class="btn-label">${label}</p>`);
		},
	});
};

/**
 * slick dotsホバー時に表示スライドを変える
 */
export const changeSlideOnHover = () => {
	$(".slick-dots li").on("mouseenter", function () {
		const index = $(this).index();
		$(this)
			.parents(".section-content__carousel")
			.slick("slickGoTo", index, false);
	});
};
