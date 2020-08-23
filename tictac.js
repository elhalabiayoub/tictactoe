var name = "x";
var o = [];
var x = [];
var winPos = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[1, 4, 7],
	[2, 5, 8],
	[3, 6, 9],
	[1, 5, 9],
	[3, 5, 7],
];
var game = null;

const cell = document.querySelector(".tiktak");
cell.addEventListener("click", (e) => {
	const el = e.target;
	const classname = el.getAttribute("class").split(" ");
	pos = Array.prototype.indexOf.call(cell.children, el);

	if (classname[1] !== "x" && classname[1] !== "cercle") {
		game += 1;
		el.setAttribute("class", "tiktak__cell" + " " + name);
		checkIsWin(name, pos + 1, game)
			? (document.querySelector(".blockMessage").style.display = "grid")
			: "";
		name === "x" ? (name = "cercle") : (name = "x");
	}
});

cell.addEventListener("mouseover", (e) => {
	const el = e.target;
	const classname = el.getAttribute("class").split(" ");

	if (classname.length === 1) {
		name === "x"
			? el.setAttribute("class", classname + " " + "xhover")
			: el.setAttribute("class", classname + " " + "cerclehover");
	}
});

cell.addEventListener("mouseout", (e) => {
	const el = e.target;
	const classname = el.getAttribute("class").split(" ");

	if (classname[1] === "xhover" || classname[1] === "cerclehover") {
		classname.pop();
		el.setAttribute("class", classname);
	}
});

const button = document.querySelector(".blockMessage__content > button");
button.addEventListener("click", (e) => {
	const block = document.querySelector(".blockMessage");
	block.style.display = "none";
	clean();
});

const checkIsWin = (player, position, game) => {
	player === "cercle" ? o.push(position) : x.push(position);
	var isfounded;
	if (game > 4) {
		if (player === "cercle") {
			for (i = 0; i < winPos.length; i++) {
				isfounded = winPos[i].every((el) => o.includes(el));
				if (isfounded) break;
			}
			console.log(o);
		} else {
			for (i = 0; i < winPos.length; i++) {
				isfounded = winPos[i].every((el) => x.includes(el));
				console.log(isfounded);
				if (isfounded) break;
			}
		}
	}
	return isfounded;
};

const clean = () => {
	const tiktak = document.querySelector(".tiktak").children;
	console.log(tiktak);
	[...tiktak].forEach((element) => {
		element.setAttribute("class", "tiktak__cell");
	});
	name = "x";
	o = [];
	x = [];
	game = null;
};
