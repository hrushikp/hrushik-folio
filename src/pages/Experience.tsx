import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, TrendingUp, Award, Download, ExternalLink } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Senior Data Analyst",
    company: "HealthTech Solutions",
    location: "Remote",
    duration: "2022 - Present",
    type: "Full-time",
    description: "Leading healthcare quality analytics initiatives, developing automated reporting systems, and implementing data-driven process improvements across multiple clinical departments.",
    achievements: [
      "Reduced incident triage time by 42% through automated dashboard development",
      "Implemented real-time quality monitoring system serving 50+ healthcare facilities",
      "Led cross-functional team of 8 analysts to standardize reporting processes",
      "Achieved 94% accuracy in predictive models for patient safety indicators"
    ],
    technologies: ["Tableau", "Alteryx", "SQL", "Python", "Salesforce Health Cloud", "PowerBI"],
    metrics: [
      { label: "Triage Time Reduction", value: "42%" },
      { label: "Facilities Served", value: "50+" },
      { label: "Model Accuracy", value: "94%" },
    ]
  },
  {
    id: 2,
    title: "Business Systems Analyst",
    company: "Energy Grid Dynamics",
    location: "Houston, TX",
    duration: "2020 - 2022",
    type: "Full-time",
    description: "Specialized in protection and automation systems analysis for power grid operations, developing predictive maintenance models and optimizing operational workflows.",
    achievements: [
      "Designed automated fault detection system reducing downtime by 35%",
      "Streamlined regulatory compliance reporting, saving 120 hours monthly",
      "Developed real-time monitoring dashboard for 25+ substations",
      "Implemented data integration solution connecting 15+ legacy systems"
    ],
    technologies: ["Power BI", "SCADA Systems", "SQL Server", "Python", "Excel VBA", "PI System"],
    metrics: [
      { label: "Downtime Reduction", value: "35%" },
      { label: "Monthly Hours Saved", value: "120" },
      { label: "Systems Integrated", value: "15+" },
    ]
  },
  {
    id: 3,
    title: "Data Analyst",
    company: "Pharma Analytics Corp",
    location: "Philadelphia, PA",
    duration: "2019 - 2020",
    type: "Full-time",
    description: "Focused on pharmaceutical manufacturing analytics, quality control processes, and regulatory compliance reporting for FDA submissions.",
    achievements: [
      "Automated quality control reporting reducing manual effort by 60%",
      "Implemented statistical process control monitoring for 12 production lines",
      "Led data validation initiatives ensuring 99.8% accuracy in FDA submissions",
      "Developed training program for 25+ quality analysts on data visualization best practices"
    ],
    technologies: ["Tableau", "R", "SQL", "Minitab", "SAP", "LIMS"],
    metrics: [
      { label: "Manual Effort Reduction", value: "60%" },
      { label: "Production Lines", value: "12" },
      { label: "FDA Accuracy", value: "99.8%" },
    ]
  }
];

const skills = [
  "Advanced Analytics", "Business Intelligence", "Process Automation", "Data Visualization",
  "Statistical Analysis", "Predictive Modeling", "ETL Development", "Dashboard Design",
  "Quality Management", "Regulatory Compliance", "Cross-functional Leadership", "Stakeholder Management"
];

const certifications = [
  { name: "Tableau Desktop Specialist", issuer: "Tableau", year: "2023" },
  { name: "Alteryx Designer Advanced", issuer: "Alteryx", year: "2022" },
  { name: "Salesforce Administrator", issuer: "Salesforce", year: "2022" },
  { name: "AWS Cloud Practitioner", issuer: "Amazon", year: "2021" },
];

export default function Experience() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container-custom mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-sora font-bold gradient-text mb-6">
                Professional Experience
              </h1>
              <p className="text-xl text-text-medium max-w-3xl mx-auto leading-relaxed">
                A proven track record of delivering data-driven solutions across healthcare, 
                energy, and pharmaceutical industries with measurable business impact.
              </p>
            </motion.div>

            {/* Key Metrics */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {[
                { value: "5+", label: "Years Experience" },
                { value: "3", label: "Industries" },
                { value: "50+", label: "Projects Delivered" },
                { value: "42%", label: "Avg. Efficiency Gain" },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-sora font-bold gradient-ember mb-2">
                    {stat.value}
                  </div>
                  <div className="text-text-medium text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="py-20">
          <div className="container-custom mx-auto px-6">
            <div className="space-y-16">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  className="relative"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="glass-card rounded-2xl p-8 hover:shadow-glow transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-sora font-bold text-text-high mb-2">
                          {experience.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-aurora-primary font-medium">
                          <span className="text-lg">{experience.company}</span>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{experience.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 lg:mt-0 flex items-center space-x-4">
                        <div className="flex items-center space-x-1 text-text-medium">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-medium">{experience.duration}</span>
                        </div>
                        <span className="px-3 py-1 bg-aurora-primary/10 text-aurora-primary text-xs font-medium rounded-full border border-aurora-primary/20">
                          {experience.type}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-text-medium leading-relaxed mb-6">
                      {experience.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-sora font-semibold text-text-high mb-4 flex items-center">
                        <Award className="w-5 h-5 text-aurora-secondary mr-2" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-text-medium">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-6 mb-6">
                      {experience.metrics.map((metric) => (
                        <div key={metric.label} className="text-center">
                          <div className="text-2xl font-sora font-bold gradient-text mb-1">
                            {metric.value}
                          </div>
                          <div className="text-text-medium text-xs font-medium">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-text-high mb-3">Technologies & Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium bg-surface-elevated text-text-medium rounded-lg border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills & Certifications */}
        <section className="py-20 bg-surface/30">
          <div className="container-custom mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Core Skills */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-sora font-bold text-text-high mb-8">
                  Core Skills
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      className="flex items-center space-x-3 p-4 glass-card rounded-xl"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <TrendingUp className="w-5 h-5 text-aurora-primary" />
                      <span className="text-text-medium font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-sora font-bold text-text-high mb-8">
                  Certifications
                </h2>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert.name}
                      className="glass-card rounded-xl p-6 flex items-center justify-between"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div>
                        <h3 className="font-sora font-semibold text-text-high mb-1">
                          {cert.name}
                        </h3>
                        <p className="text-text-medium text-sm">
                          {cert.issuer} • {cert.year}
                        </p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container-custom mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-sora font-bold text-text-high mb-6">
                Ready to discuss your next project?
              </h2>
              <p className="text-text-medium mb-8 max-w-2xl mx-auto">
                Let's explore how my experience in data analytics and business systems 
                can drive measurable results for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Download Resume
                  <Download className="w-5 h-5" />
                </Button>
                <Button variant="glass" size="lg">
                  Get In Touch
                  <ExternalLink className="w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}