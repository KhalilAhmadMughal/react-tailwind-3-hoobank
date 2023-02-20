import React from "react";
import { clients } from "../constants/data";

const Clients = () => {
  return (
    <section className="flex gap-4 items-center sm:gap-6 md:gap-8 lg:gap-20 justify-center">
      {clients.map((client) => (
        <div key={client.id} className="h-[80px] w-[190px] flex items-center">
          <img
            src={client.logo}
            key={client.id}
            id={client.id}
            className="h-full w-full object-contain"
            alt=""
          />
        </div>
      ))}
    </section>
  );
};

export default Clients;
