import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

// Register fonts if needed
// Font.register({
//   family: "Roboto",
//   src: "https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxP.ttf",
// });

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 40,
    fontFamily: "Helvetica",
    fontSize: 10,
  },
  header: {
    marginBottom: 25,
    borderBottomWidth: 2,
    borderBottomColor: "#9333ea",
    borderBottomStyle: "solid",
    paddingBottom: 15,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 5,
    fontFamily: "Helvetica-Bold",
  },
  title: {
    fontSize: 16,
    color: "#9333ea",
    marginBottom: 10,
  },
  contactInfo: {
    flexDirection: "row",
    flexWrap: "wrap",
    fontSize: 10,
    color: "#6b7280",
    marginTop: 5,
  },
  contactItem: {
    marginRight: 15,
    marginBottom: 5,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#9333ea",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    borderBottomStyle: "solid",
    paddingBottom: 5,
    fontFamily: "Helvetica-Bold",
  },
  experienceItem: {
    marginBottom: 15,
  },
  experienceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  companyName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1f2937",
    fontFamily: "Helvetica-Bold",
  },
  date: {
    fontSize: 10,
    color: "#6b7280",
  },
  role: {
    fontSize: 12,
    color: "#4b5563",
    marginBottom: 5,
    fontStyle: "italic",
  },
  description: {
    fontSize: 10,
    color: "#374151",
    lineHeight: 1.4,
    marginTop: 5,
    textAlign: "left",
  },
  skillsList: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
  },
  skillTag: {
    backgroundColor: "#f3f4f6",
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    marginRight: 5,
    marginBottom: 5,
    fontSize: 9,
    color: "#1f2937",
  },
  projectItem: {
    marginBottom: 12,
  },
  projectTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 3,
    fontFamily: "Helvetica-Bold",
  },
  techStack: {
    fontSize: 9,
    color: "#6b7280",
    marginTop: 3,
  },
});

interface ResumePDFProps {
  locale?: "en" | "vi";
}

const ResumePDF: React.FC<ResumePDFProps> = ({ locale = "en" }) => {
  // CV content is always in English regardless of website language
  const translations = require("../../../public/locales/en.json");

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{translations.name?.fullName || "Thanh Trung Truong"}</Text>
          <Text style={styles.title}>Full Stack Developer</Text>
          <View style={styles.contactInfo}>
            <Text style={styles.contactItem}>Email: thanhtrung.1010.2k@gmail.com</Text>
            <Text style={styles.contactItem}>Phone: 0948 868 324</Text>
            <Text style={styles.contactItem}>GitHub: github.com/dev-to2k</Text>
            <Text style={styles.contactItem}>LinkedIn: linkedin.com/in/dev-to2k</Text>
          </View>
        </View>

        {/* Professional Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <Text style={styles.description}>
            Results-driven Full Stack Developer with 3+ years of experience building scalable web applications and enterprise systems. 
            Specialized in ReactJS, Next.js, Java Spring Boot, and modern JavaScript frameworks. Proven expertise in developing 
            high-performance e-commerce platforms and complex business management systems. Proficient in leveraging AI-powered 
            development tools (Cursor, Windsurf, GitHub Copilot) to accelerate development cycles and deliver robust solutions. 
            Strong background in microservices architecture, RESTful APIs, and cloud-based deployments.
          </Text>
        </View>

        {/* Work Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Work Experience</Text>
          
          {/* Generali */}
          <View style={styles.experienceItem}>
            <View style={styles.experienceHeader}>
              <Text style={styles.companyName}>Generali</Text>
              <Text style={styles.date}>Mar 2024 - Present</Text>
            </View>
            <Text style={styles.role}>Full Stack Developer</Text>
            <View style={{ marginTop: 5 }}>
              <Text style={styles.description}>• Architected and developed a comprehensive agent lifecycle management system, handling profile registration, status transitions, and automated workflow processes</Text>
              <Text style={styles.description}>• Implemented robust security measures using JWT authentication and role-based access control (RBAC) to ensure data integrity and compliance</Text>
              <Text style={styles.description}>• Designed and optimized bulk data processing functionality, enabling efficient handling of large-scale data imports with validation and error handling</Text>
              <Text style={styles.description}>• Engineered a scalable email notification service with dynamic template engine, supporting multi-language and personalized communications</Text>
              <Text style={styles.description}>• Containerized applications using Docker, streamlining deployment processes and ensuring consistent environments across development and production</Text>
              <Text style={styles.description}>• Collaborated with cross-functional teams to deliver high-quality software solutions, following Agile methodologies and best practices</Text>
            </View>
            <View style={styles.skillsList}>
              <Text style={styles.skillTag}>Java Spring Boot</Text>
              <Text style={styles.skillTag}>Angular</Text>
              <Text style={styles.skillTag}>Kafka</Text>
              <Text style={styles.skillTag}>MSSQL SP</Text>
              <Text style={styles.skillTag}>Oracle</Text>
            </View>
          </View>

          {/* Portal Craft */}
          <View style={styles.experienceItem}>
            <View style={styles.experienceHeader}>
              <Text style={styles.companyName}>Portal Craft</Text>
              <Text style={styles.date}>May 2022 - Feb 2024</Text>
            </View>
            <Text style={styles.role}>Frontend Developer (Remote)</Text>
            <View style={{ marginTop: 5 }}>
              <Text style={styles.description}>• Developed and maintained Co-bee e-commerce application with seamless Lazada marketplace integration, enabling real-time product synchronization and order management</Text>
              <Text style={styles.description}>• Built responsive Co-hoot e-commerce platform with advanced shopping cart features, payment gateway integration, and user-friendly checkout experience</Text>
              <Text style={styles.description}>• Designed and implemented innovative "Buy Together" group purchasing feature, increasing user engagement and sales conversion rates</Text>
              <Text style={styles.description}>• Optimized application performance through code refactoring, lazy loading, and efficient state management, improving page load times by 40%</Text>
              <Text style={styles.description}>• Collaborated effectively in a fully remote, distributed team environment, utilizing modern communication tools and version control systems</Text>
            </View>
            <View style={styles.skillsList}>
              <Text style={styles.skillTag}>ReactJS</Text>
              <Text style={styles.skillTag}>Node.js</Text>
              <Text style={styles.skillTag}>Lazada API</Text>
            </View>
          </View>
        </View>

        {/* Projects */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Projects</Text>
          
          <View style={styles.projectItem}>
            <Text style={styles.projectTitle}>EDM Agent Management System</Text>
            <Text style={styles.description}>
              Comprehensive system for managing agent profile movements and lifecycles with high-performance and security.
            </Text>
            <Text style={styles.techStack}>Tech: Spring Boot, Angular, Kafka, MSSQL SP, Oracle</Text>
          </View>

          <View style={styles.projectItem}>
            <Text style={styles.projectTitle}>Co-bee / Co-hoot E-commerce Platform</Text>
            <Text style={styles.description}>
              E-commerce applications with Lazada integration, focusing on group buying features.
            </Text>
            <Text style={styles.techStack}>Tech: ReactJS, Node.js, Lazada API</Text>
          </View>
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technical Skills</Text>
          <View style={styles.skillsList}>
            <Text style={styles.skillTag}>ReactJS</Text>
            <Text style={styles.skillTag}>Next.js</Text>
            <Text style={styles.skillTag}>TypeScript</Text>
            <Text style={styles.skillTag}>Java Spring Boot</Text>
            <Text style={styles.skillTag}>Angular</Text>
            <Text style={styles.skillTag}>Node.js</Text>
            <Text style={styles.skillTag}>Kafka</Text>
            <Text style={styles.skillTag}>Oracle</Text>
            <Text style={styles.skillTag}>Docker</Text>
            <Text style={styles.skillTag}>Tailwind CSS</Text>
            <Text style={styles.skillTag}>Git</Text>
            <Text style={styles.skillTag}>AI DevTools</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default ResumePDF;

