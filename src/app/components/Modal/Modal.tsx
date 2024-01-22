"use client";

import React from "react";

interface ModalProps {
  children?: React.ReactNode;
  closeButton?: boolean;
  openModal?: any;
}

export const Modal = ({ children, closeButton, openModal }: ModalProps) => {
  return (
    <div className="fixed left-0 top-0 z-[999] h-full w-full overflow-y-auto overflow-x-hidden flex items-center justify-center bg-black bg-opacity-40 ">
      <div className="flex relative overflow-hidden shadow-[0px_0px_16px_0px_rgba(0,0,0,0.06)] font mr-6 bg-[#525252] rounded-sm border-2 border-violet-400">
        {children}

        {closeButton && (
          <div
            className={"font-bold cursor-pointer p-2"}
            onClick={() => openModal(false)}
          >
            X
          </div>
        )}
      </div>
    </div>
  );
};
