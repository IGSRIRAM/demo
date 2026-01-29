import React from "react";

function Services() {
  const servicesData = [
    {
      icon: "fas fa-code",
      title: "Custom Web Development",
      desc: "Tailor-made websites built with React.js. I focus on clean code, API integration, and performance optimization for scalable applications.",
      tags: ["React.js", "HTML5/CSS3", "JavaScript"],
    },
    {
      icon: "fas fa-pen-nib",
      title: "UI/UX Design",
      desc: "Transforming complex requirements into intuitive user interfaces. I use Figma to create mockups that are both beautiful and functional.",
      tags: ["Figma", "Wireframing", "Prototyping"],
    },
    {
      icon: "fas fa-rocket",
      title: "Rapid Site Launch",
      desc: "Need a website quickly? I utilize WordPress and Wix Studio to build professional, easily manageable websites for small businesses.",
      tags: ["Wix Studio", "WordPress", "Shopify"],
    },
  ];

  return (
    <main className="services" id="services">
      <section >
        <div className="container">
          {/* Heading */}
          <div className="services__heading">
            <h2 className="services__title">What I Do</h2>
            {/* <span className="services__line"></span> */}
            <p className="services__subtitle">
              I provide full-cycle web services, from the initial design in Figma
              to the final deployed React, WordPress, or Shopify site.
            </p>
          </div>

          {/* Cards */}
          <div className="services__grid">
            {servicesData.map((service, index) => (
              <article className="services__card" key={index}>
                {/* <div className="services__icon">{service.icon}</div> */}
                <div className="service-icon"><i className={service.icon}></i></div>
                <h3 className="services__cardTitle">{service.title}</h3>
                <p className="services__cardDesc">{service.desc}</p>

                <div className="services__tags">
                  {service.tags.map((tag, i) => (
                    <span className="services__tag" key={i}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
