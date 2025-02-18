"use client";

import React from "react";
import Button from "./common/Button";
import dotshor from "../assets/images/dots-horizontal.png"
import dotsver from "../assets/images/dots-vertical.png"
import Image from "next/image";
import ticket1 from "../assets/images/ticket1.png"
import ticket2 from "../assets/images/ticket2.png"
import ticket3 from "../assets/images/ticket3.png"

const Mint = () => {

  const ticketOptions = [
    {
        icon: <Image src={ticket1} alt="" />,
        amount: "1 Ticket",
        price: "Free"
    },
    {
        icon: <Image src={ticket2} alt="" />,
        amount: "10 Tickets",
        price: "$2/Tickets"
    },
    {
        icon: <Image src={ticket3} alt="" />,
        amount: "100 Tickets",
        price: "$20/Ticket"
    },
    
  ]

  return (
    <section className="h-[70vh] w-full flex items-center justify-center z-50 relative overflow-x-hidden">
      <div className="mintform relative p-2 sm:p-5 lg:p-14 text-center flex flex-col gap-3 bg-red-50">
      <Image src={dotshor} alt="" className="absolute left-1/2 -translate-x-1/2 top-3" />
      <Image src={dotshor} alt="" className="absolute left-1/2 -translate-x-1/2 bottom-3" />
      <Image src={dotsver} alt="" className="absolute left-3 -translate-y-1/2 bottom-1/2" />
      <Image src={dotsver} alt="" className="absolute right-3 -translate-y-1/2 bottom-1/2" />
        <h1>Golden Ticket Mint</h1>
        <div className="flex justify-center">
          {" "}
          <div className="w-full lg:w-[70%] max-w-md">
            <div className="w-full bg-gray-800 rounded-full h-1 relative overflow-hidden">
              <div
                className="h-full bg-gradient-to-r progress from-yellow-700 via-yellow-600 to-yellow-400 transition-all duration-300"
                style={{ width: `${40}%` }}
              />
            </div>
          </div>
        </div>
        <div className="text-sm">Remaining Ticketes: 40,000/100,000</div>
        <div className="pt-5 grid md:grid-cols-3 gap-5">
            {
                ticketOptions.map((ticket) => {
                    return (
                        <button key={ticket.price} className="mintOptions w-full h-full p-3 px-5 flex flex-col justify-between items-center">
                            <div>
                              {ticket.icon}
                            </div>
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
