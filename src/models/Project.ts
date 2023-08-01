interface Project {
  name: string;
  description: string;
  image: string;
  tags: string[];
  externalUrl: string;
  github?: string;
}

export default Project;
