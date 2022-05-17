const $contents = $(".search-result-list");
const $rerenderingContents = $(".search-result-list > li");
const $pageCounter = $(".pagination__counter");
const $prev = $(".prev");
const $next = $(".next");
const count = 10;

let currentPage;
let indexStart;
let indexEnd;
let totalPage;

const splitPage = (currentPageUpdate) => {
	totalPage = Math.ceil($rerenderingContents.length / count);

	if (currentPageUpdate === undefined || currentPage === 1) {
		currentPage = 1;
		disableNext();
		disablePrev();
	} else if (currentPageUpdate === totalPage) {
		disableNext();
		activePrev();
	} else {
		currentPage = currentPageUpdate;
		activeNext();
		activePrev();
	}
	rerender(currentPage, count);
};

const setCurrentClass = (currentPage) => {
	const $pageNumber = $(".pagination__number");
	$pageCounter.find(".current").removeClass("current");
	$($pageNumber[currentPage - 1]).addClass("current");
};

const rerender = (currentPage, count) => {
	indexStart = currentPage * count - count;
	indexEnd = currentPage * count - 1;
	let indexArray = [];

	for (let i = indexStart; i < indexEnd + 1; i++) {
		indexArray.push(i);
	}

	while ($contents.children()) {
		$contents.children().remove();
		break;
	}

	$rerenderingContents.each(function (i, el) {
		if (indexArray.includes(i)) {
			$contents.append(el);
		}
	});
};

const createPageCounter = () => {
	for (let i = 1; i < Math.ceil($rerenderingContents.length / count) + 1; i++) {
		let countList = $("<li>", {
			"data-counter-id": i,
			class: "pagination__number",
		}).text(i);
		$pageCounter.append(countList);
	}
	setCurrentClass(currentPage);
};

$next.on("click", function () {
	splitPage((currentPage += 1));
});
$prev.on("click", function () {
	splitPage((currentPage -= 1));
});

const disablePrev = () => {
	$prev.attr("disabled", true);
};
const disableNext = () => {
	$next.attr("disabled", true);
};

const activePrev = () => {
	$prev.attr("disabled", false);
};
const activeNext = () => {
	$next.attr("disabled", false);
};

export const createPagination = () => {
	splitPage();
	createPageCounter();
	$(".pagination__number").each(function (i, el) {
		$(el).on("click", function () {
			currentPage = Number($(el).attr("data-counter-id"));
			splitPage(currentPage);
			setCurrentClass(currentPage);
		});
	});
};
