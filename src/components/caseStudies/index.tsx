import CaseStudy from "./CaseStudy";

import { type ICaseStudy } from "./CaseStudy";

export default function CaseStudies({
  caseStudies,
}: {
  caseStudies: ICaseStudy[];
}) {
  return (
    <>
      <h2 className="py-2 text-3xl">Show Cases</h2>
      <div className="mb-12 grid gap-4 md:grid-cols-2">
        {caseStudies.map((project) => (
          <CaseStudy
            key={project.id}
            title={project.title}
            imagePath={project.imagePath}
            link={project.link}
            isResponsive={project.isResponsive}
            description={project.description}
            mainTechs={project.mainTechs}
            misc={project.misc}
            credentials={project.credentials}
          />
        ))}
      </div>
    </>
  );
}
