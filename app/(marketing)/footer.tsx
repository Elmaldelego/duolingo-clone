import Image from "next/image";

import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <div className="hidden h-20 w-full border-t-2 border-slate-200 p-2 lg:block">
      <div className="mx-auto flex h-full max-w-screen-lg items-center justify-evenly">
        <Button size="lg" variant="ghost" className="w-full cursor-default">
          <Image
            src="/hr.svg"
            alt="Cabelleria"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Croatian
        </Button>

        <Button size="lg" variant="ghost" className="w-full cursor-default">
          <Image
            src="/es.svg"
            alt="Blindada"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Spanish
        </Button>

        <Button size="lg" variant="ghost" className="w-full cursor-default">
          <Image
            src="/fr.svg"
            alt="Infanteria"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          French
        </Button>

        <Button size="lg" variant="ghost" className="w-full cursor-default">
          <Image
            src="/it.svg"
            alt="Caballería"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Italian
        </Button>

        <Button size="lg" variant="ghost" className="w-full cursor-default">
          <Image
            src="/jp.svg"
            alt="Ingenieros"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Japanese
        </Button>
      </div>
    </div>
  );
};
