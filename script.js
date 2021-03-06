window.onload = function () {
  // Fix the height of sections
  const setHeights = () => {
    let sections = document.getElementsByTagName("section");
    let height;
    if (window.innerWidth < 600) {
      height = window.innerHeight * 0.55;
    } else if (window.innerWidth < 900) {
      height = window.innerHeight * 0.66;
    } else {
      height = window.innerHeight * 0.85;
    }
    height += "px";
    for (let i = 1; i < sections.length; i++) {
      sections[i].style.height = height;
    }

    // let background = document.getElementsByClassName("background")[0];
    // background.style.height = window.innerHeight + "px"
  };

  setHeights();

  // Set click event on 'check out my stuff' div
  document.getElementById("innerWrapper").addEventListener('click', () => {
    document
      .getElementById("section_2")
      .scrollIntoView({ behavior: "smooth", block: "center" });
  })

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
    let size = Math.random() * (7 - 0.5) + 0.5;
    star.style.width = size + "px";
    star.style.height = size + "px";

    // Set color of half the stars
    if (i % 2 == 0) {
      star.style.background = "#FFFEF8";
      star.className += " animate__animated animate__infinite ";
      
      if (i % 3 == 0) {
        star.className += " animate__flash animate__slower ";
      }
      else {
        star.className += " animate__tada animate__fast ";
      }
    }

    // Set lax attribute - alternate between two groups that fade in and out
    if (Math.random() >= 0.5) {
      // First, cause some to be shooting stars
      star.setAttribute("data-lax-preset", "leftToRight eager");
      if (Math.random() >= 0.5) {
        star.setAttribute("data-lax-anchor", "#section_3");
      }
      let random = Math.random() * (1.2 - 0.5) + 0.5;
      star.setAttribute(
        "data-lax-opacity",
        "0 1, (vh*" + random + ") 0, (vh*1.5) 1 | loop=(vh*1.5)"
      );
    } else {
      let random = Math.random() * (1.8 - 0.5) + 0.5;
      star.setAttribute(
        "data-lax-opacity",
        "0 1, (vh*.8) 0, (vh*1.5) 1 | loop=(vh*1.5) offset=(vh*" + random + ")"
      );
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

  let interval;
  function addAnimations(i, skillh2s) {
    if (i != skillh2s.length - 1) {
      skillh2s[i].classList.add("animate__flipOutX");
      setTimeout(() => {
        skillh2s[i].classList.add("hidden");
        skillh2s[i + 1].classList.remove("hidden");
        skillh2s[i + 1].classList.add("animate__flipInX");
      }, 500);
    }
  }

  // Set up typeit
  let header = new TypeIt(".header", {
    deleteSpeed: 0,
    lifeLike: true,
    afterComplete: async (step, instance) => {
      header.destroy();
      let skills = new TypeIt(".skills", {
        afterComplete: async () => {
          skills.destroy();

          let skillh2s = document.getElementsByClassName("skills");
          let i = 0;
          interval = setInterval(() => {
            if (i == skillh2s.length - 1) {
              // Stop the recursive call
              clearInterval(interval);

              document
                .getElementById("signalDown")
                .classList.remove("invisible");
              let checkout = new TypeIt(".checkoutMyStuff", {
                afterComplete: async () => {
                  checkout.destroy();
                },
              })
                .type("check out my work!")
                .go();
            }

            addAnimations(i, skillh2s);
            i++;
          }, 1500);
        },
      })
        .type("a software developer.")
        .go();
    },
  })
    .type("hello.")
    .pause(500)
    .break()
    .type("welcome to my site!")
    .pause(2000)
    .break()
    .break()
    .type("i'm")
    // .break()
    // .type("software developer...")
    // .pause(1000)
    // .delete(21)
    // .type("designer...")
    // .pause(1000)
    // .delete(11)
    // .type("frontend engineer...")
    // .pause(1000)
    // .delete(20)
    // .type("CSS ninja...")
    // .pause(400)
    // .delete(12)
    // .type("musician...")
    // .pause(400)
    // .delete(11)
    // .type("ginger...")
    // .pause(300)
    // .delete(9)
    // .pause(1600)
    // .delete(2)
    // .break()
    // .pause(500)
    // .type("Seth.")
    .go();
};

