"use strict";
const allSections = document.querySelectorAll("section");
console.log(allSections);

const options = {
  root: null,
  threshold: 0.3,
};

const sectionObserver = new IntersectionObserver(callback, options);

allSections.forEach((section) => {
  sectionObserver.observe(section);
});

document.querySelectorAll(".left-column").forEach((column) => {
  column.classList.add("hidden-left");
});
document.querySelectorAll(".right-column").forEach((column) => {
  column.classList.add("hidden-right");
});

function callback(entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  //   get the class name of current section that is in view
  const curSectionsName = entry.target.getAttribute("class");
  //   Now select that specific target section
  const curSection = document.querySelector(`.${curSectionsName}`);
  curSection.lastElementChild.firstElementChild.classList.remove("hidden-left");
  curSection.lastElementChild.lastElementChild.classList.remove("hidden-right");

  observer.unobserve(entry.target);
}
