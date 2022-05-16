export const getCurrentUrl = () => {
	const currentLink = location.pathname;
	const $navLinks = $(".nav-list__link");
	$navLinks.each(function (index, element) {
		const linkPath = element.href.split("/")[3];
		if (currentLink === `/${linkPath}`) {
			$(this).parent().addClass("current");
		}
	});
};
