const features = [
  {
    title: "Unmatched Reliability",
    description: "Proven track record of delivering projects on time with zero downtime and exceptional service quality."
  },
  {
    title: "Industry-Leading Safety Standards",
    description: "Certified safety protocols and trained operators ensuring the highest level of workplace safety."
  },
  {
    title: "Expert Technical Team",
    description: "Skilled professionals with extensive experience in complex construction and industrial projects."
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical support and emergency response to keep your project moving forward."
  }
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-industrial-dark text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <img
              src="/assets/safety-team.jpg"
              alt="Professional construction safety team meeting"
              className="rounded-lg shadow-xl w-full h-[500px] object-cover"
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Why Choose <span className="text-accent">Aarohi Enterprises</span>
            </h2>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                    <p className="text-white/80 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
