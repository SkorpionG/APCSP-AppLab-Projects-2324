import { projects } from "./projectInfo.js";

let openInNewTab = false;

function createProjectCard(project) {
  const card = document.createElement("div");
  card.className = "project-card";
  card.onclick = () => {
    if (openInNewTab) {
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

function loadProjects() {
  const container = document.getElementById("projects-container");
  projects.forEach((project) => {
    const card = createProjectCard(project);
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadProjects();

  const toggleSwitch = document.getElementById("toggle-new-tab");
  toggleSwitch.addEventListener("change", (event) => {
    openInNewTab = event.target.checked;
  });
});
