import React from "react";

interface CTAButtonProps {
  Btntext?: string;
}

const CTAButton = ({ Btntext = "" }: CTAButtonProps) => {
  return (
    <a
      href="#"
      className="inline-block mt-3 bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded transition"
      target="_blank"
      rel="noopener noreferrer"
    >
      {Btntext}
    </a>
  );
};

export default CTAButton;
