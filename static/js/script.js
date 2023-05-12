// -------- Observer for skills container -------- //

var quantities = ["80%", "80%", "70%", "60%", "70%", "60%"]

function skillsObserverCallback(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            let elmt = entry.target;
            switch (elmt.id) {
                case "python-progress":
                    elmt.style.width = quantities[0];
                    break;

                case "c-progress":
                    elmt.style.width = quantities[1];
                    break;

                case "web-progress":
                    elmt.style.width = quantities[2];
                    break;

                case "android-progress":
                    elmt.style.width = quantities[3];
                    break;

                case "linux-progress":
                    elmt.style.width = quantities[4];
                    break;

                case "office-progress":
                    elmt.style.width = quantities[5];
                    break;

                default:
                    break;
            }
        }
    });
}

let options = {
    root: null, // Default root -> browser viewport
    rootMargin: "0px",
    threshold: 0.5  // Invoke callback when 50% of target is visible
}

let observer = new IntersectionObserver(skillsObserverCallback, options);

let targets = document.getElementsByClassName("progress-value");
for (i = 0; i < targets.length; i++) {
    observer.observe(targets.item(i));
}

// -------- Listener for links container -------- //

const elScrollable = document.querySelector("html")
const elNav = document.querySelector("#links-container");
const threshold = window.innerHeight - 76 - 0.05*window.innerHeight;
console.log(window.innerHeight, threshold);
const handleNav = () => {
  const scrollTop = elScrollable.scrollTop;
  elNav.classList.toggle("top-fixed", scrollTop > threshold);
};

addEventListener("scroll", handleNav)
addEventListener("resize", handleNav)
handleNav();