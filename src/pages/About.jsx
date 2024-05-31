import React from "react";

export default function About() {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-900">
        About <span className="text-slate-700">Ironhack Estate</span>
      </h1>
      <div className="text-slate-700 text-xs sm:text-sm mt-4">
        Ironhack Estate is committed to helping you find the perfect place to
        call home.
        <br />
        With a diverse selection of properties, we ensure that you have a
        variety of options to suit your unique preferences and needs.
        <br />
        Our dedicated team of experts is here to guide you every step of the
        way, making the process of finding your dream home seamless and
        enjoyable.
      </div>
    </div>
  );
}
