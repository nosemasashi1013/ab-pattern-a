import "../stylesheets/main.scss";
import { dom, library } from "@fortawesome/fontawesome-svg-core";
import {
	faCheck,
	faAngleRight,
	faAngleDown,
	faAngleUp,
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
import {
	faQuestionCircle,
	faComments,
} from "@fortawesome/free-regular-svg-icons";
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
import { incrementalSearch } from "./incrementalSearch";
import { showScrollTop } from "./scrollTop";
import { scrollTop } from "./scrollTop";
import { keywordSearch } from "./keywordSearch";

$(function () {
	library.add(
		faCheck,
		faAngleRight,
		faAngleDown,
		faAngleUp,
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
		faQuestionCircle,
		faComments
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
	incrementalSearch();
	showScrollTop();
	scrollTop();
	keywordSearch();
	dom.i2svg();
});
