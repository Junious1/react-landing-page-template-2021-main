import React from 'react';

import config from '../config/index.json';

const Aboutus = () => {
  const { aboutUs } = config;
  const { title, description } = aboutUs;

  return (
    <section className={`bg-background py-8`} id="pricing">
      <div className={`container mx-auto px-1 pt-4 pb-8 text-primary`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          {description}
          {description}
        </p>
      </div>
    </section>
  );
};

export default Aboutus;
