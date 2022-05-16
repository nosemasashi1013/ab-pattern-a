import "../stylesheets/main.scss";
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
	faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import "@accessible360/accessible-slick";
import { initializeSlick, changeSlideOnHover } from "./slider";
import { changeAccordionStatus } from "./accordion";
import { showAlert } from "./alert";
import { changeTabStatus } from "./tab";
import { setFontColor, setFontSize, selectLanguage } from "./accessibility";
import { detailPageAnchor } from "./anchor";
import { getCurrentUrl } from "./globalNavi";

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
		faChevronCircleRight,
		faCaretDown
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
	dom.i2svg();
});
