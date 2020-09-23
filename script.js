
window.onload = function () {
	// Fix the height of sections
	const setHeights = () => {
		let sections = document.getElementsByTagName("section");
		for (let i = 0; i < sections.length; i++) {
			sections[i].style.height = window.innerHeight + "px";
		}
	
		let background = document.getElementsByClassName("background")[0];
		background.style.height = window.innerHeight + "px"
	}

	setHeights();
	// window.onresize = setHeights();
	window.addEventListener("resize", setHeights);

  // Position stars on screen
  let firstStar = document.getElementsByClassName("star_container")[0];
  for (let i = 0; i < 40; i++) {
    let clone = firstStar.cloneNode(true);
    firstStar.after(clone);
  }

  let starChildren = document.getElementsByClassName("star_container");
  for (let i = 0; i < starChildren.length; i++) {
    // Set the position on screen
    let star = starChildren[i].firstElementChild;
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";

    // Set width
    let size = Math.random() * (5 - 0.5) + 0.5;
    star.style.width = size + "px";
    star.style.height = size + "px";

		// Set color of half the stars
		if (i % 2 == 0) {
			star.style.background = "#FFFEF8";
		}

    // Set lax attribute
		if (Math.random() >= 0.5) {
			star.setAttribute("data-lax-anchor", "#section_2");
		}
		else {
			star.setAttribute("data-lax-anchor", "#section_1");
		}
			

    // Set the parallax depth
    starChildren[i].setAttribute("data-depth", Math.random());
  }

  // Set up parallax
  var scene = document.getElementById("scene");
  var parallaxInstance = new Parallax(scene);

  // Setup lax
  lax.setup();
  const updateLax = () => {
    lax.update(window.scrollY);
    window.requestAnimationFrame(updateLax);
  };
  window.requestAnimationFrame(updateLax);

  // Set up typeit
  new TypeIt(".header", {
    deleteSpeed: 0,
    afterComplete: async (step, instance) => {
      document.getElementById("signalDown").classList.remove("hidden");
      document
        .getElementById("innerWrapper")
        .classList.add("animate__animated", "animate__fadeInUpBig");
    },
  })
    .type("hello.")
    .pause(500)
    .break()
    .type("welcome to my site!")
      .pause(2000)
      .delete(19)
      .pause(500)
      .break()
      .type("i'm a")
      .break()
      .type("software developer...")
      .pause(1000)
      .delete(21)
      .type("designer...")
      .pause(1000)
      .delete(11)
      .type("frontend engineer...")
      .pause(1000)
      .delete(20)
      .type("CSS ninja...")
      .pause(600)
      .delete(12)
      .type("musician...")
      .pause(500)
      .delete(11)
      .type("ginger...")
      .pause(400)
      .delete(9)
      .pause(1600)
      .delete(2)
      .break()
      .pause(500)
      .type("Seth")
    .go();
}