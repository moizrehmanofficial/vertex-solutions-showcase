import { motion } from "framer-motion";
import { CheckCircle2, Target, Lightbulb, Handshake, ArrowUpRight } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Result-Driven Approach",
    description: "We focus on delivering measurable outcomes that drive your business forward.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description: "Leveraging cutting-edge technology and expertise to solve complex challenges.",
  },
  {
    icon: Handshake,
    title: "Trusted Partnership",
    description: "Building long-term relationships based on transparency and mutual success.",
  },
];

const highlights = [
  "Expert team of qualified professionals",
  "Tailored solutions for every business",
  "Proven track record of success",
  "24/7 dedicated client support",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} 
        />
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-32 h-32 border border-primary/20 rounded-2xl hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-20 w-24 h-24 bg-primary/5 rounded-full blur-xl hidden lg:block"
      />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block text-primary font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              About Us
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-6 mb-6"
            >
              Building Business{" "}
              <span className="text-gradient text-shadow-glow">Excellence</span>{" "}
              Since Day One
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed mb-8"
            >
              <strong className="text-foreground">Vertex Solutions Private Limited</strong> is a premier business consulting firm 
              dedicated to empowering organizations with comprehensive taxation, advisory, and technology solutions. 
              Our team of seasoned professionals brings together decades of combined experience across diverse industries.
            </motion.p>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 group cursor-default"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  </motion.div>
                  <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Learn more link */}
            <motion.a
              href="#services"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-primary font-semibold group"
            >
              Explore Our Services
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.div>
            </motion.a>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } },
            }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, x: 30 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.3 + index * 0.15,
                }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 relative overflow-hidden"
              >
                {/* Shimmer overlay */}
                <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="flex items-start gap-5 relative">
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors relative"
                  >
                    <feature.icon className="w-7 h-7 text-primary" />
                    
                    {/* Pulse effect */}
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      className="absolute inset-0 rounded-xl border border-primary/40"
                    />
                  </motion.div>
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>

                {/* Bottom accent */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent origin-left"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
