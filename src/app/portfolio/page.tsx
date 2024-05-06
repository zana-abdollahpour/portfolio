import Samples from "@/components/samples";

import { samplesData } from "@/data/samples-data.json";

export default function PortfolioPage() {
  return (
    <div className="mt-4 w-full p-8">
      <h1 className="pb-6 text-4xl font-medium">Portfolio</h1>
      <Samples samplesData={samplesData} />
    </div>
  );
}
