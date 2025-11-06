import React from "react";
import Image from "next/image";
import {partners}  from "@/data/partners";

const Partners: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {partners.map((partner, index) => (
        <div 
          key={index} 
          className="bg-white rounded-lg shadow-md p-6 max-w-sm w-full"
        >
          <div className="flex items-center mb-4">
            <Image
              src={partner.avatar}
              alt={`${partner.name} avatar`}
              width={90}
              height={90}
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
            {partner.message}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Partners;
