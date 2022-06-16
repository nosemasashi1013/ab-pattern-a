export const incrementalSearch = () => {
	$(".organization-search .input-form__input").on("keyup", function (e) {
		if (e.key.match(/\s/)) return false;
		const valArr = String($(this).val()).split(/\s/);
		const $breadcrumbItem = $(".department-breadcrumb");
		const $contactsItem = $(".contacts-list-item");
		const $section = $(".department-breadcrumb, .contacts").parents(".section");

		if (!$(this).val()) {
			$breadcrumbItem.show();
			$contactsItem.show();
			$section.show();
		} else {
			$breadcrumbItem.hide();
			$contactsItem.hide();
			$section.hide();

			$contactsItem.each(function () {
				if ($(this).text().match(valArr.join("|"))) {
					$(this).show();
					$(this).parents(".section").find(".department-breadcrumb").show();
					$(this).parents(".section").show();
				}
			});
			$breadcrumbItem.each(function () {
				if ($(this).text().match(valArr.join("|"))) {
					$(this).show();
					$(this).parents(".section").show();
					if (
						!$(this)
							.parents(".section")
							.find(".contacts-list-item")
							.text()
							.match(valArr.join("|"))
					) {
						$(this).parents(".section").find(".contacts-list-item").show();
					}
				}
			});
		}
	});
};
