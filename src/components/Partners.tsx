import React from "react";
import Image from "next/image";
import {partners}  from "@/data/partners";

const Partners: React.FC = () => {
  return (
    <div className="grid gap-14 max-w-lg w-full mx-auto lg:gap-8 lg:grid-cols-3 lg:max-w-full">
      {partners.map((partner, index) => (
        <div key={index} className="">
          <div className="flex items-center mb-4 w-full justify-center lg:justify-start">
            <Image
              src={partner.avatar}
              alt={`${partner.name} avatar`}
              width={50}
              height={50}
              className="rounded-full shadow-md"
            />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-secondary">
                {partner.name}
              </h3>
              <p className="text-sm text-foreground-accent">{partner.role}</p>
            </div>
          </div>
          <p className="text-foreground-accent text-center lg:text-left">
            &quot;{partner.message}&quot;
          </p>
        </div>
      ))}
    </div>
  );
};

export default Partners;
