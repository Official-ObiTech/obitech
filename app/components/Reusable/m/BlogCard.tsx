import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
// import Link from "next/link";

interface dataProps {
  id: string;
  title: string;
  date: React.ReactNode;
  avatar: string;
  image: string;
  alt: string;
  tag: string;

  description: string;
}

interface card {
  cardData: dataProps[];
}

const BlogCard: React.FC<card> = ({ cardData }) => {
  return (
    <>
      <div className="md:grid grid-cols-2 gap-6">
        {cardData.map((card) => (
          <Card key={card.id} isFooterBlurred className="w-full h-[300px] text-gray-800 dark:text-white my-4 bg-gray-400">
            {/* <Link href={`/blog/${card.id}`} prefetch> */}
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">
                  {card.date}
                </p>
                <h2 className="text-white/90 font-medium text-xl">
                  {card.title}
                </h2>
              </CardHeader>
              <Image
                removeWrapper
                alt={card.alt}
                className="z-0 w-full h-full object-cover"
                src={card.image}
              />
              <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                <div className="flex flex-grow gap-2 items-center">
                  <Image
                    alt="Breathing app icon"
                    className="rounded-full w-10 h-11 bg-black"
                    src={card.avatar}
                  />
                  <div className="">
                    <p className="text-xs text-white/60">
                      {card.description}
                    </p>
                  </div>
                </div>
                <Button radius="full" size="sm">
                  {card.tag}
                </Button>
              </CardFooter>
            {/* </Link> */}
          </Card>
        ))}
      </div>
    </>
  );
};

export default BlogCard;

