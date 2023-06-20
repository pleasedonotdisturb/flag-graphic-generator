let container = document.querySelector(".container");

// create 16 blocks inside the container
for (var i = 0; i <= 15; i++) {
	let blocks = document.createElement("div");
	blocks.classList.add("block");
	container.appendChild(blocks);
}

// generate function (gsap's version)
function generate() {
	gsap.to(".block", {
		x: "random(-20, 20)",
		rotate: "random(-24, 24)",
		scaleX: "random(.2,1.2)",
		zIndex: "random(1,100)",
		ease: "power2.out"
	});
}
generate();