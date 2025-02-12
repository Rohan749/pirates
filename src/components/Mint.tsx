"use client";

import React, { useState } from "react";
import Button from "./common/Button";

const Mint = () => {
  const [progress, setProgress] = useState(40);

  const ticketOptions = [
    {
        icon: "",
        amount: "1 Ticket",
        price: "Free"
    },
    {
        icon: "",
        amount: "10 Tickets",
        price: "$2/Tickets"
    },
    {
        icon: "",
        amount: "100 Tickets",
        price: "$20/Ticket"
    },
    
  ]

  return (
    <section className="h-[70vh] w-full flex items-center justify-center z-50 relative overflow-x-hidden">
      <div className="mintform p-2 sm:p-5 lg:p-10 text-center flex flex-col gap-3">
        <h1>Golden Ticket Mint</h1>
        <div className="">
          {" "}
          <div className="w-full max-w-md">
            <div className="w-full bg-gray-800 rounded-full h-1 relative overflow-hidden">
              <div
                className="h-full bg-gradient-to-r progress from-yellow-700 via-yellow-600 to-yellow-400 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
        <div className="text-sm">Remaining Ticketes: 40,000/100,000</div>
        <div className="pt-5 grid grid-cols-3 gap-5">
            {
                ticketOptions.map((ticket) => {
                    return (
                        <button key={ticket.price} className="mintOptions w-full h-full p-3 flex flex-col justify-between items-center">
                            <div>h</div>
                            <div className="text-sm">{ticket.amount}</div>
                            <div className="text-sm">{ticket.price}</div>
                        </button>
                    )
                })
            }
        </div>

        <Button variant="full" className={"w-full"}>
            Mint Now
        </Button>
      </div>
    </section>
  );
};

export default Mint;
