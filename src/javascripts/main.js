import "../stylesheets/main.scss";
import Cookies from "js-cookie";
import { dom, library } from "@fortawesome/fontawesome-svg-core";
import {
	faCheck,
	faAngleRight,
	faAngleDown,
	faSearch,
	faExclamationCircle,
	faArrowRight,
	faArrowDown,
	faTimes,
	faPhoneAlt,
	faExclamationTriangle,
	faRss,
	faArrowCircleUp,
	faInfoCircle,
	faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

$(function () {
	library.add(
		faCheck,
		faAngleRight,
		faAngleDown,
		faSearch,
		faExclamationCircle,
		faArrowRight,
		faArrowDown,
		faTimes,
		faPhoneAlt,
		faExclamationTriangle,
		faRss,
		faArrowCircleUp,
		faInfoCircle,
		faChevronCircleRight
	);

	var colorName = Cookies.get("font-color")
		? Cookies.get("font-color")
		: "black";
	var fontSize = Cookies.get("font-size")
		? Cookies.get("font-size")
		: "regular";

	if (!Cookies.get("font-size")) {
		Cookies.set("font-size", "regular", { expires: 1, path: "/" });
	}

	if (!Cookies.get("font-color")) {
		Cookies.set("font-color", "black", { expires: 1, path: "/" });
	}
	$("body").attr("data-color", Cookies.get("font-color"));
	$("body").attr("data-size", Cookies.get("font-size"));

	$(".x-color-trigger[data-color=" + Cookies.get("font-color") + "]")
		.find("input")
		.map(function (index, dom) {
			$(dom).prop("checked", true);
		});

	$(".x-size-trigger[data-size=" + Cookies.get("font-size") + "]")
		.find("input")
		.map(function (index, dom) {
			$(dom).prop("checked", true);
		});

	$(".x-color-trigger").on("click", function () {
		var color = $(this).data("color");
		$("body").attr("data-color", color);
		Cookies.set("font-color", color, { expires: 1, path: "/" });
	});

	$(".x-size-trigger").on("click", function () {
		var size = $(this).data("size");
		$("body").attr("data-size", size);
		Cookies.set("font-size", size, { expires: 1, path: "/" });
		resetFixedPosition();
	});

	$(".x-language-trigger").on("change", function (e) {
		var link = $(e.target).find("option:selected").first().val();

		if (link) {
			e.preventDefault();
			window.location.href = link;
		}
	});

	$(".x-show-all").on("click", function () {
		$(this).remove();
	});

	$(".checkbox__input, .radio__input")
		.filter(":checked")
		.parent()
		.css("background-color", "#008660");

	$("input[name=target]").on("change", function () {
		changeFilterColor("target");
	});

	$("input[name=category]").on("change", function () {
		changeFilterColor("category");
	});
	$("input[name=life-scene]").on("change", function () {
		changeFilterColor("life-scene");
	});
	$("input[name=status]").on("change", function () {
		changeFilterColor("status");
	});
	$("input[name=matters]").on("change", function () {
		changeFilterColor("matters");
	});

	$(".new-info-filter").on("change", function () {
		searchFilter();
	});

	$(".accordion-trigger").on("click", function () {
		if ($(this).attr("aria-expanded") === "true") {
			$(this).attr("aria-expanded", "false");
			$(this)
				.parents(".accordion__list")
				.find(".accordion-panel")
				.attr("aria-hidden", "true");
		} else {
			$(this).attr("aria-expanded", "true");
			$(this)
				.parents(".accordion__list")
				.find(".accordion-panel")
				.attr("aria-hidden", "false");
		}
	});

	$("button[role='tab']").on("click", function () {
		const $this = $(this);
		$this.parent().find("button[role='tab']").attr("aria-selected", "false");
		// $(this)
		// 	.parents(".tabs")
		// 	.find("div[role='tabpanel']")
		// 	.attr("aria-hidden", "true");

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

	dom.i2svg();
});

const hideClass = "is-hide";

/**
 * 新着情報リストの絞り込みを行う
 */
function searchFilter() {
	const $newInfoItems = $(".new-info-item");
	const selectedTarget = $(".target-item")
		.find("input:checked")[0]
		.getAttribute("value");
	const selectedCategories = $(".category-item")
		.find("input:checked")
		.map((_, i) => i.getAttribute("value"));

	$newInfoItems.addClass(hideClass);
	$(".no-info-text").toggleClass(hideClass, selectedCategories.length !== 0);
	$newInfoItems
		.filter((_, item) =>
			selectedTarget === "general" || selectedTarget === "business"
				? $(item).data(`target-${selectedTarget}`)
				: true
		)
		.filter((_, item) =>
			[...selectedCategories].includes($(item).data("category"))
		)
		.removeClass(hideClass);
}

/**
 * 新着フィルターの色を変える
 * @param {string} name 対象にするinputのname属性の値
 */
function changeFilterColor(name) {
	$("input[name=" + name + "]").each(function (i, el) {
		$(el).prop("checked")
			? $(this).parent().css("background-color", "#008660")
			: $(this).parent().removeAttr("style");
	});
}

// (function () {
// 	const tablist = document.querySelectorAll('[role="tablist"]')[0];
// 	let tabs;
// 	let panels;
// 	let delay = determineDelay();

// 	generateArrays();

// 	function generateArrays() {
// 		tabs = document.querySelectorAll('[role="tab"]');
// 		panels = document.querySelectorAll('[role="tabpanel"]');
// 	}

// 	// For easy reference
// 	var keys = {
// 		end: 35,
// 		home: 36,
// 		left: 37,
// 		up: 38,
// 		right: 39,
// 		down: 40,
// 		delete: 46,
// 	};

// 	// Add or subtract depending on key pressed
// 	var direction = {
// 		37: -1,
// 		38: -1,
// 		39: 1,
// 		40: 1,
// 	};

// 	// Bind listeners
// 	for (var i = 0; i < tabs.length; ++i) {
// 		addListeners(i);
// 	}

// 	function addListeners(index) {
// 		tabs[index].addEventListener("click", clickEventListener);
// 		tabs[index].addEventListener("keydown", keydownEventListener);
// 		tabs[index].addEventListener("keyup", keyupEventListener);

// 		// Build an array with all tabs (<button>s) in it
// 		tabs[index].index = index;
// 	}

// 	// When a tab is clicked, activateTab is fired to activate it
// 	function clickEventListener(event) {
// 		var tab = event.target;
// 		activateTab(tab, false);
// 	}

// 	// Handle keydown on tabs
// 	function keydownEventListener(event) {
// 		var key = event.keyCode;

// 		switch (key) {
// 			case keys.end:
// 				event.preventDefault();
// 				// Activate last tab
// 				activateTab(tabs[tabs.length - 1]);
// 				break;
// 			case keys.home:
// 				event.preventDefault();
// 				// Activate first tab
// 				activateTab(tabs[0]);
// 				break;

// 			// Up and down are in keydown
// 			// because we need to prevent page scroll >:)
// 			case keys.up:
// 			case keys.down:
// 				determineOrientation(event);
// 				break;
// 		}
// 	}

// 	// Handle keyup on tabs
// 	function keyupEventListener(event) {
// 		var key = event.keyCode;

// 		switch (key) {
// 			case keys.left:
// 			case keys.right:
// 				determineOrientation(event);
// 				break;
// 			case keys.delete:
// 				determineDeletable(event);
// 				break;
// 		}
// 	}

// 	// When a tablist’s aria-orientation is set to vertical,
// 	// only up and down arrow should function.
// 	// In all other cases only left and right arrow function.
// 	function determineOrientation(event) {
// 		var key = event.keyCode;
// 		var vertical = tablist.getAttribute("aria-orientation") == "vertical";
// 		var proceed = false;

// 		if (vertical) {
// 			if (key === keys.up || key === keys.down) {
// 				event.preventDefault();
// 				proceed = true;
// 			}
// 		} else {
// 			if (key === keys.left || key === keys.right) {
// 				proceed = true;
// 			}
// 		}

// 		if (proceed) {
// 			switchTabOnArrowPress(event);
// 		}
// 	}

// 	// Either focus the next, previous, first, or last tab
// 	// depending on key pressed
// 	function switchTabOnArrowPress(event) {
// 		var pressed = event.keyCode;

// 		for (var x = 0; x < tabs.length; x++) {
// 			tabs[x].addEventListener("focus", focusEventHandler);
// 		}

// 		if (direction[pressed]) {
// 			var target = event.target;
// 			if (target.index !== undefined) {
// 				if (tabs[target.index + direction[pressed]]) {
// 					tabs[target.index + direction[pressed]].focus();
// 				} else if (pressed === keys.left || pressed === keys.up) {
// 					focusLastTab();
// 				} else if (pressed === keys.right || pressed == keys.down) {
// 					focusFirstTab();
// 				}
// 			}
// 		}
// 	}

// 	// Activates any given tab panel
// 	function activateTab(tab, setFocus) {
// 		setFocus = setFocus || true;
// 		// Deactivate all other tabs
// 		deactivateTabs();

// 		// Remove tabindex attribute
// 		tab.removeAttribute("tabindex");

// 		// Set the tab as selected
// 		tab.setAttribute("aria-selected", "true");

// 		// Get the value of aria-controls (which is an ID)
// 		var controls = tab.getAttribute("aria-controls");

// 		// Remove is-hidden class from tab panel to make it visible
// 		document.getElementById(controls).classList.remove("is-hidden");

// 		// Set focus when required
// 		if (setFocus) {
// 			tab.focus();
// 		}
// 	}

// 	// Deactivate all tabs and tab panels
// 	function deactivateTabs() {
// 		for (var t = 0; t < tabs.length; t++) {
// 			tabs[t].setAttribute("tabindex", "-1");
// 			tabs[t].setAttribute("aria-selected", "false");
// 			tabs[t].removeEventListener("focus", focusEventHandler);
// 		}

// 		for (var p = 0; p < panels.length; p++) {
// 			panels[p].classList.add("is-hidden");
// 		}
// 	}

// 	// Make a guess
// 	function focusFirstTab() {
// 		tabs[0].focus();
// 	}

// 	// Make a guess
// 	function focusLastTab() {
// 		tabs[tabs.length - 1].focus();
// 	}

// 	// Detect if a tab is deletable
// 	function determineDeletable(event) {
// 		var target = event.target;

// 		if (target.getAttribute("data-deletable") !== null) {
// 			// Delete target tab
// 			deleteTab(event, target);

// 			// Update arrays related to tabs widget
// 			generateArrays();

// 			// Activate the closest tab to the one that was just deleted
// 			if (target.index - 1 < 0) {
// 				activateTab(tabs[0]);
// 			} else {
// 				activateTab(tabs[target.index - 1]);
// 			}
// 		}
// 	}

// 	// Deletes a tab and its panel
// 	function deleteTab(event) {
// 		var target = event.target;
// 		var panel = document.getElementById(target.getAttribute("aria-controls"));

// 		target.parentElement.removeChild(target);
// 		panel.parentElement.removeChild(panel);
// 	}

// 	// Determine whether there should be a delay
// 	// when user navigates with the arrow keys
// 	function determineDelay() {
// 		var hasDelay = tablist.hasAttribute("data-delay");
// 		var delay = 0;

// 		if (hasDelay) {
// 			var delayValue = tablist.getAttribute("data-delay");
// 			if (delayValue) {
// 				delay = delayValue;
// 			} else {
// 				// If no value is specified, default to 300ms
// 				delay = 300;
// 			}
// 		}

// 		return delay;
// 	}

// 	//
// 	function focusEventHandler(event) {
// 		var target = event.target;

// 		setTimeout(checkTabFocus, delay, target);
// 	}

// 	// Only activate tab on focus if it still has focus after the delay
// 	function checkTabFocus(target) {
// 		var focused = document.activeElement;

// 		if (target === focused) {
// 			activateTab(target, false);
// 		}
// 	}
// })();
