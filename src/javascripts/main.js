import "../stylesheets/main.scss";
import { dom, library } from "@fortawesome/fontawesome-svg-core";
import {
	faCheck,
	faAngleRight,
	faAngleDown,
	faSearch,
	faExclamationCircle,
	faArrowLeft,
	faArrowRight,
	faArrowDown,
	faTimes,
	faPhoneAlt,
	faExclamationTriangle,
	faRss,
	faArrowCircleUp,
	faInfoCircle,
	faChevronCircleRight,
	faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import "@accessible360/accessible-slick";
import { initializeSlick, changeSlideOnHover } from "./slider";
import { changeAccordionStatus } from "./accordion";
import { showAlert } from "./alert";
import { changeTabStatus } from "./tab";
import { setFontColor, setFontSize, selectLanguage } from "./accessibility";
import { detailPageAnchor } from "./anchor";
import { getCurrentUrl } from "./globalNavi";
import { toggleMenu } from "./header";
import { moveFocus } from "./header";
import { createPagination } from "./pagination";
import { categoryFilter } from "./filter";

$(function () {
	library.add(
		faCheck,
		faAngleRight,
		faAngleDown,
		faSearch,
		faExclamationCircle,
		faArrowLeft,
		faArrowRight,
		faArrowDown,
		faTimes,
		faPhoneAlt,
		faExclamationTriangle,
		faRss,
		faArrowCircleUp,
		faInfoCircle,
		faChevronCircleRight,
		faCaretDown,
		faQuestionCircle
	);

	setFontColor();
	setFontSize();
	selectLanguage();
	changeAccordionStatus();
	changeTabStatus();
	detailPageAnchor();
	showAlert();
	initializeSlick();
	changeSlideOnHover();
	getCurrentUrl();
	toggleMenu();
	moveFocus();
	createPagination();
	categoryFilter();
	dom.i2svg();
});
