import { motion, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  Award, 
  HeadphonesIcon, 
  Shield, 
  TrendingUp, 
  Users,
  Zap,
  Globe
} from "lucide-react";

const stats = [
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Expert Professionals" },
  { value: 99, suffix: "%", label: "Client Retention" },
];

const reasons = [
  {
    icon: Award,
    title: "Industry Expertise",
    description: "Our team consists of certified professionals with deep industry knowledge and credentials.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock dedicated support to address your queries and concerns promptly.",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    icon: Shield,
    title: "100% Confidential",
    description: "Your data and business information are protected with enterprise-grade security.",
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Track record of delivering measurable outcomes and business growth for our clients.",
    color: "from-amber-500/20 to-amber-500/5",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Efficient processes ensure quick delivery without compromising on quality.",
    color: "from-red-500/20 to-red-500/5",
  },
  {
    icon: Globe,
    title: "Global Standards",
    description: "We follow international best practices and compliance standards in all our services.",
    color: "from-teal-500/20 to-teal-500/5",
  },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <motion.span 
      className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground"
      onViewportEnter={() => {
        if (!hasAnimated) {
          setHasAnimated(true);
          const controls = animate(0, value, {
            duration: 2,
            ease: "easeOut",
            onUpdate: (latest) => setDisplayValue(Math.round(latest)),
          });
          return () => controls.stop();
        }
      }}
      viewport={{ once: true }}
    >
      {displayValue}
      <span className="text-primary">{suffix}</span>
    </motion.span>
  );
};

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
  hidden: { opacity: 0, y: 40, scale: 0.95 },
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

const WhyChooseUsSection = () => {
  return (
    <section id="why-choose-us" className="section-padding relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-border/10 rounded-full animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-border/5 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
          >
            Why Choose Us
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Your Success Is Our{" "}
            <span className="text-gradient text-shadow-glow">Priority</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We combine expertise, innovation, and dedication to deliver exceptional 
            value and drive your business towards sustainable growth.
          </p>
        </motion.div>

        {/* Animated Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="p-6 lg:p-8 rounded-2xl bg-card border border-border text-center hover:border-primary/50 transition-all duration-500 hover-lift">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="text-muted-foreground mt-2 text-sm lg:text-base">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500">
                {/* Shimmer overlay on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer-effect pointer-events-none" />
                
                {/* Icon with gradient background */}
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-6`}
                >
                  <reason.icon className="w-8 h-8 text-primary" />
                </motion.div>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>

                {/* Bottom accent line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent origin-left"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-secondary/50 border border-border">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-background flex items-center justify-center"
                >
                  <Users className="w-4 h-4 text-primary" />
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">Trusted by 500+ Businesses</p>
              <p className="text-sm text-muted-foreground">Across multiple industries</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
