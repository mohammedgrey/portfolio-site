import Projects from "./components/Projects/Projects";
import { projects } from "./data/projects";

export default function ProjectsPage() {
  return <Projects projects={projects} />;
}
