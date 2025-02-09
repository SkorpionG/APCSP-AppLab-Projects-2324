import { projects } from "./projectInfo.js";

const toggleSwitch = document.getElementById("toggle-new-tab");

function createProjectCard(project) {
  const card = document.createElement("div");
  card.className = "project-card";
  card.onclick = () => {
    if (toggleSwitch.checked) {
      window.open(project.url, "_blank");
    } else {
      window.location.href = project.url;
    }
  };

  const img = document.createElement("img");
  img.src = project.image;
  card.appendChild(img);

  const content = document.createElement("div");
  content.className = "content";

  const title = document.createElement("h2");
  title.textContent = project.title;
  content.appendChild(title);

  const desc = document.createElement("p");
  desc.textContent = project.description;
  content.appendChild(desc);

  card.appendChild(content);

  return card;
}

function loadSitePreference() {
  const openInNewTab = localStorage.getItem("openInNewTab");
  toggleSwitch.checked = openInNewTab === "true";
}

function saveSitePreference() {
  localStorage.setItem("openInNewTab", toggleSwitch.checked);
}

function loadProjects() {
  const container = document.getElementById("projects-container");
  projects.forEach((project) => {
    const card = createProjectCard(project);
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadSitePreference();
  loadProjects();

  toggleSwitch.addEventListener("change", () => {
    saveSitePreference();
  });
});
