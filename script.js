
window.onload = function () {
	// Fix the height of sections
	const setHeights = () => {
		let sections = document.getElementsByTagName("section");
		for (let i = 0; i < sections.length; i++) {
			sections[i].style.height = window.innerHeight + "px";
		}
	
		// let background = document.getElementsByClassName("background")[0];
		// background.style.height = window.innerHeight + "px"
	}

	setHeights();
	// window.addEventListener("resize", setHeights);

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

    // Set lax attribute - alternate between two groups that fade in and out
    if (Math.random() >= 0.5) {
      let random = Math.random() * (1.2 - .5) + .5;
      star.setAttribute(
        "data-lax-opacity",
        "0 1, (vh*" + random + ") 0, (vh*1.5) 1 | loop=(vh*1.5)"
      );
    }
    else {
      let random = Math.random() * (1.8 - .5) + .5;
			star.setAttribute(
        "data-lax-opacity",
        "0 1, (vh*.8) 0, (vh*1.5) 1 | loop=(vh*1.5) offset=(vh*" + random  + ")"
      );
    }
    
    // Cause some to be shooting stars
    if (i % 4 == 0) {
      star.setAttribute("data-lax-preset", "driftRight eager");
      if (i % 8 == 0) {
        star.setAttribute("data-lax-anchor", "#section_3")
      }
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
  let header = new TypeIt(".header", {
    deleteSpeed: 0,
    afterComplete: async (step, instance) => {
      document.getElementById("signalDown").classList.remove("invisible");
      // document
      //   .getElementById("innerWrapper")
      //   .classList.add("animate__animated", "animate__fadeInUpBig");
      new TypeIt(".checkoutMyStuff").type("check out my stuff!").go();
    },
  })
    .type("hello.")
    .pause(500)
    .break()
    .type("welcome to my site!")
      .pause(2000)
      .break()
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
      .pause(400)
      .delete(12)
      .type("musician...")
      .pause(400)
      .delete(11)
      .type("ginger...")
      .pause(300)
      .delete(9)
      .pause(1600)
      .delete(2)
      .break()
      .pause(500)
      .type("Seth.")
    .go();
}