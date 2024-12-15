import { Card, CardBody, Image, Progress } from "@nextui-org/react";

interface dataProps {
  id: number;
  title: string;
  date: React.ReactNode;
  category: string;
  image: string;
  alt: string;
  progressLabel: string;
  progressValue: number;
  description: string;
}

interface card {
  cardData: dataProps[];
}

const ProjectCard: React.FC<card> = ({ cardData }) => {
  return (
    <>
      <div className="md:grid grid-cols-2 gap-6">
        {cardData.map((card) => (
          <Card
            key={card.id}
            className="border-none bg-background/60 dark:bg-default-100/50 max-w-[600px] my-4 dark:text-white"
            shadow="sm"
          >
            <CardBody>
              <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                <div className="relative col-span-6 lg:col-span-4 md:col-span-12">
                  <Image
                    alt={card.alt}
                    className="object-cover"
                    height={220}
                    shadow="md"
                    src={card.image}
                    width="100%"
                  />
                </div>
                <div className="flex flex-col col-span-6 md:col-span-8">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <p className=" text-tiny dark:bg-slate-950 bg-gray-200 w-20 text-center p-1 rounded-md">
                          {card.category}
                        </p>
                        <p className="text-xs text-gray-500">{card.date}</p>
                      </div>

                      <h1 className="md:text-2xl text-text-xl font-bold">
                        {card.title}
                      </h1>

                      <p className=" text-small">{card.description}</p>

                      <Progress
                        classNames={{
                          base: "max-w-md",
                          track: "drop-shadow-md border border-default",
                          indicator:
                            "bg-gradient-to-r from-pink-500 to-yellow-500",
                          label:
                            "tracking-wider font-medium text-default-600 text-tiny",
                          value: "text-foreground/50",
                        }}
                        label={card.progressLabel}
                        radius="sm"
                        showValueLabel={true}
                        size="sm"
                        value={card.progressValue}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ProjectCard;
