import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Weather App",
    desc: "Getting current weather with search. Background changing with respect to the weather",
    img: "/static/projects/weatherApp.png",
    link: "https://weatherapp.adarshraveendran.in",
    github: "https://github.com/adarshleet/weatherApp",
    tags: ["React", "TailwindCSS"],
  },
  
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects
