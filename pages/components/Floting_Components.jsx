import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Float = () => {
  return (
    <div>
      <a
        href="#"
        class="flex gap-4 right-6 fixed bg-[#b64c4c] bottom-12 z-50 p-3 rounded-xl max-md:p-1 my-6"
      >
        <img src="/wa.png" alt="" />
        <div class="text-white underline max-md:hidden">
          Text us on WhatsApp
        </div>
      </a>
      <a
        href="#"
        class="flex gap-4 right-6 fixed bottom-2 z-50 bg-[#b64c4c] p-3 rounded-xl max-md:p-1"
      >
        <div class="bg-orange-400 p-1 rounded-xl">
          <img class="w-[25px]" src="/phone.png" alt="" />
        </div>
        <div class="text-white underline max-md:hidden">Give us a call</div>
      </a>
    </div>
  );
};

export default Float;
