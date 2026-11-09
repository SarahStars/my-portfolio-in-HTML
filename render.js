import { projects, skills } from "./data.js";

export function renderProjects() {
    const projectsBody = document.getElementById("projectsBody");

    const rows = projects.map(project => `
        <tr>
            <td>${project.name}</td>
            <td>${project.description}</td>
        </tr>
    `);

    projectsBody.innerHTML = rows.join("");
}

export function renderSkills() {
    const skillsBody = document.getElementById("skillsBody");

    const rows = skills.map(({ name, level, percent }) => `
        <tr>
            <td>${name}</td>
            <td>
                ${level}
                <div class="bar">
                    <div class="fill" style="width: ${percent}%"></div>
                </div>
            </td>
        </tr>
    `);

    skillsBody.innerHTML = rows.join("");
}