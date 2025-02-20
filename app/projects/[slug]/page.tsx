"use client";

import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import Image from "next/image";
import NoiseBackground from "@/components/NoiseBackground";

const ProjectPage = ({ params }: { params: { slug: string } }) => {
  const router = useRouter();
  const { slug } = params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return <p className="text-center text-white mt-20">Project not found!</p>;
  }

  return (
    <NoiseBackground mode="dark" intensity={0.1}>
      <section className=" text-white px-5 py-10 md:px-20 md:py-20">
        <div className="container mx-auto">
          <div className="mb-10">
            <h1 className="heading md:text-lgHeading">{project.title}</h1>
            <p className="content md:text-lgContent text-gray text-sm">(by {project.author})</p>
          </div>

          <Image
            src={project.mainImage}
            alt={project.title}
            width={1600}
            height={1200}
            className="rounded-md pb-8"
          />

          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 md:gap-8">
            <div>
              <h2 className="heading md:text-lgHeading font-bold mb-4">About The Project</h2>
            </div>
            <div>
              <p className="content md:text-lgContent text-gray text-lg leading-relaxed my-2">
                {project.description}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="font-bold content md:text-lgContent">Project Role</p>
                <p className="text-gray">{project.role}</p>
              </div>
              <div>
                <p className="font-bold content md:text-lgContent">Duration</p>
                <p className="text-gray">{project.duration}</p>
              </div>
              <div>
                <p className="font-bold content md:text-lgContent">Category</p>
                <p className="text-gray">{project.category}</p>
              </div>
            </div>
          </div>

          <div className="mb-16 grid grid-cols-2 md:grid-cols-2 gap-4">
            {project.gallery.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                width={400}
                height={300}
                className="rounded-md w-full"
              />
            ))}
          </div>

          <div className="mb-16">
            <h2 className="heading md:text-lgHeading mb-4">Technologies Used</h2>
            <p className="content md:text-lgContent text-gray leading-relaxed">
              {project.technologies}
            </p>
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={() => router.push(project.previousSlug || "/projects")}
              className="text-gray hover:text-white heading md:text-lgHeading font-bold"
            >
              &lt; LAST
            </button>
            <button
              onClick={() => router.push(project.nextSlug || "/projects")}
              className="text-gray hover:text-white heading md:text-lgHeading font-bold"
            >
              NEXT &gt;
            </button>
          </div>
        </div>
      </section>
    </NoiseBackground>
  );
};

export default ProjectPage;
