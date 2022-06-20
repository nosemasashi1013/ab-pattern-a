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

	dom.i2svg();
});
