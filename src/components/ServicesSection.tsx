import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
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
    gradient: "from-emerald-500/20 via-primary/10 to-transparent",
  },
  {
    icon: FileCheck,
    title: "Audit & Assurance",
    description: "Professional audit services ensuring compliance and building stakeholder confidence.",
    gradient: "from-blue-500/20 via-primary/10 to-transparent",
  },
  {
    icon: Building2,
    title: "Corporate & Legal Advisory",
    description: "Expert guidance on corporate governance, compliance, and legal matters.",
    gradient: "from-purple-500/20 via-primary/10 to-transparent",
  },
  {
    icon: Briefcase,
    title: "Finance & CFO Services",
    description: "Strategic financial planning and virtual CFO services for growing businesses.",
    gradient: "from-amber-500/20 via-primary/10 to-transparent",
  },
  {
    icon: Laptop,
    title: "IT-Enabled Business Solutions",
    description: "Digital transformation and IT solutions to modernize your business processes.",
    gradient: "from-cyan-500/20 via-primary/10 to-transparent",
  },
  {
    icon: Home,
    title: "Property & Registration",
    description: "Complete property registration and real estate documentation services.",
    gradient: "from-rose-500/20 via-primary/10 to-transparent",
  },
  {
    icon: Receipt,
    title: "Taxation & Advisory",
    description: "Expert tax planning, compliance, and advisory services for businesses and individuals.",
    gradient: "from-orange-500/20 via-primary/10 to-transparent",
  },
  {
    icon: Code,
    title: "Full-Stack Web Development",
    description: "Custom web applications built with modern technologies for optimal performance.",
    gradient: "from-indigo-500/20 via-primary/10 to-transparent",
  },
  {
    icon: Palette,
    title: "Graphic Design & Branding",
    description: "Professional logo design, branding, and visual identity solutions.",
    gradient: "from-pink-500/20 via-primary/10 to-transparent",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-50px", amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <section id="services" ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background Gradient with animation */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
      />

      {/* Animated background dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.7,
            }}
            className="absolute w-3 h-3 bg-primary/30 rounded-full blur-sm"
            style={{
              left: `${10 + i * 20}%`,
              top: `${20 + (i % 2) * 40}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span 
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
            }}
            className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
          >
            Our Services
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Comprehensive{" "}
            <span className="text-gradient text-shadow-glow">Business Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From traditional accounting to cutting-edge technology services, we offer a complete suite 
            of solutions tailored to your business needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden">
                {/* Gradient overlay on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} pointer-events-none`}
                />

                {/* Shimmer effect */}
                <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Icon */}
                <motion.div 
                  whileHover={{ rotate: 5, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6"
                >
                  <service.icon className="w-7 h-7 text-primary" />
                  
                  {/* Pulse ring */}
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-xl border border-primary/30"
                  />
                </motion.div>

                {/* Content */}
                <h3 className="relative font-display text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="relative text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom accent with scale animation */}
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent origin-left"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
