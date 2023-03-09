var quantities = ["80%", "80%", "70%", "60%", "70%", "60%"]

function observerCallback(entries, observer) {
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
    })
}

let options = {
    root: null, // Default root -> browser viewport
    rootMargin: "0px",
    threshold: 0.5  // Invoke callback when 100% of target is visible
}

let observer = new IntersectionObserver(observerCallback, options);

let targets = document.getElementsByClassName("progress-value");
console.log(targets.length);
for (i = 0; i < targets.length; i++) {
    console.log(targets.item(i));
    observer.observe(targets.item(i));
}