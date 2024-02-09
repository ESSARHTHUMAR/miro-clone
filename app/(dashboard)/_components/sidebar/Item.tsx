"use client"

import { cn } from "@/lib/utils";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import Image from "next/image";

interface ItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

function Item({ id, name, imageUrl }: ItemProps) {

    const { organization } = useOrganization();
    const { setActive } = useOrganizationList();

    const isActive = organization?.id === id;

    const onClick = () => {
        if(!setActive) return;

        setActive({ organization: id });
    }

  return (
    <div className="aspect-square relative">
      <Image
        fill
        src={imageUrl}
        alt={name}
        onClick={onClick}
        className={cn("rounded-md cursor-pointer opacity-75 hover:opacity-90")}
      />
    </div>
  );
}

export default Item;