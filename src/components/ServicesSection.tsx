import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Calculator, 
  FileCheck, 
  Building2, 
  Briefcase, 
  Laptop, 
  Home,
  Receipt,
  Code,
  Palette
} from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Accounting & ERP Solutions",
    description: "Comprehensive accounting services and ERP implementation to streamline your financial operations.",
  },
  {
    icon: FileCheck,
    title: "Audit & Assurance",
    description: "Professional audit services ensuring compliance and building stakeholder confidence.",
  },
  {
    icon: Building2,
    title: "Corporate & Legal Advisory",
    description: "Expert guidance on corporate governance, compliance, and legal matters.",
  },
  {
    icon: Briefcase,
    title: "Finance & CFO Services",
    description: "Strategic financial planning and virtual CFO services for growing businesses.",
  },
  {
    icon: Laptop,
    title: "IT-Enabled Business Solutions",
    description: "Digital transformation and IT solutions to modernize your business processes.",
  },
  {
    icon: Home,
    title: "Property & Registration",
    description: "Complete property registration and real estate documentation services.",
  },
  {
    icon: Receipt,
    title: "Taxation & Advisory",
    description: "Expert tax planning, compliance, and advisory services for businesses and individuals.",
  },
  {
    icon: Code,
    title: "Full-Stack Web Development",
    description: "Custom web applications built with modern technologies for optimal performance.",
  },
  {
    icon: Palette,
    title: "Graphic Design & Branding",
    description: "Professional logo design, branding, and visual identity solutions.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Comprehensive Business Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From traditional accounting to cutting-edge technology services, we offer a complete suite 
            of solutions tailored to your business needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
