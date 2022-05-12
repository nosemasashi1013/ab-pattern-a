/**
 * tabの表示切替
 */
export const changeTabStatus = () => {
	$("button[role='tab']").on("click", function () {
		const $this = $(this);
		$this.parent().find("button[role='tab']").attr("aria-selected", "false");

		$this.attr("aria-selected") === "false"
			? $this.attr("aria-selected", "true")
			: $this.attr("aria-selected", "false");

		const $tabPanel = $this.parents(".tabs").find("div[role='tabpanel']");

		$tabPanel.each(function (i, el) {
			$(el).attr("id") === $this.attr("aria-controls")
				? $(el).attr("aria-hidden", "false")
				: $(el).attr("aria-hidden", "true");
		});
	});
};
