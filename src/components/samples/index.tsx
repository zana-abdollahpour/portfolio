import Sample from "./Sample";
import type { ISample } from "./Sample";

export default function Samples({ samplesData }: { samplesData: ISample[] }) {
  console.log(samplesData);

  return (
    <>
      <h2 className="py-2 text-3xl">Samples</h2>
      <div className="grid grid-flow-row items-stretch justify-stretch gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {samplesData.map((project) => (
          <Sample
            key={project.id}
            title={project.title}
            imagePath={project.imagePath}
            description={project.description}
            techs={project.techs}
            link={project.link}
            isResponsive={project.isResponsive}
          />
        ))}
      </div>
    </>
  );
}
