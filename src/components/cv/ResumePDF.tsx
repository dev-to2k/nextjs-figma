import { CONTACT, PERSONAL } from "@/constants/contact";
import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import React from "react";

// ==================== CV TAILORED FOR THIS JOB (React/Next + Node/NestJS) ====================
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    fontFamily: "Helvetica",
    fontSize: 9,
    padding: 30,
    paddingBottom: 20,
  },

  // ================ HEADER SECTION (Dark Background) ================
  header: {
    backgroundColor: "#2D3748",
    padding: 30,
    paddingBottom: 25,
    marginTop: -30,
    marginHorizontal: -30,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 6,
    overflow: "hidden",
    marginRight: 20,
    backgroundColor: "#4A5568",
  },
  avatar: {
    width: 80,
    height: 80,
    objectFit: "cover",
  },
  headerInfo: {
    flex: 1,
    flexDirection: "column",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 6,
    fontFamily: "Helvetica-Bold",
  },
  jobTitle: {
    fontSize: 12,
    color: "#A0AEC0",
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: 15,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  contactItem: {
    fontSize: 9,
    color: "#ffffff",
    marginRight: 15,
    marginBottom: 4,
  },
  contactSeparator: {
    fontSize: 9,
    color: "#4A5568",
    marginRight: 15,
  },

  // ================ BODY SECTION ================
  body: {
    paddingTop: 10,
  },

  // Section Container
  section: {
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#1A202C",
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    letterSpacing: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
    paddingBottom: 6,
    marginBottom: 12,
  },

  // About Me
  aboutText: {
    fontSize: 9,
    color: "#4A5568",
    lineHeight: 1.5,
    textAlign: "justify",
  },

  // Education
  educationItem: {
    marginBottom: 6,
  },
  schoolName: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#1A202C",
    fontFamily: "Helvetica-Bold",
  },
  educationDetails: {
    fontSize: 9,
    color: "#718096",
    marginTop: 2,
    lineHeight: 1.4,
  },

  // Skills
  skillRow: {
    flexDirection: "row",
    marginBottom: 6,
    alignItems: "flex-start",
  },
  skillLevel: {
    width: 90, // Slightly wider to fit "Database & Others"
    fontSize: 9,
    color: "#1A202C",
    fontWeight: "bold",
    fontFamily: "Helvetica-Bold",
  },
  skillTags: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skillTag: {
    backgroundColor: "#F7FAFC",
    paddingVertical: 2,
    paddingHorizontal: 6,
    marginRight: 4,
    marginBottom: 3,
    fontSize: 8,
    color: "#2D3748",
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  // Work Experience
  workHeader: {
    marginBottom: 8,
  },
  workDateRange: {
    fontSize: 9,
    color: "#718096",
    marginBottom: 2,
    fontStyle: "italic",
  },
  workTitleRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  workTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#1A202C",
    fontFamily: "Helvetica-Bold",
  },
  workCompany: {
    fontSize: 11,
    color: "#4A5568",
    marginLeft: 6,
  },
  coreResponsibility: {
    fontSize: 9,
    color: "#4A5568",
    marginTop: 4,
    marginBottom: 10,
    fontStyle: "italic",
    lineHeight: 1.4,
  },

  // Project Items
  projectItem: {
    marginBottom: 12,
    marginTop: 10,
    paddingLeft: 10,
    borderLeftWidth: 2,
    borderLeftColor: "#E2E8F0",
  },
  projectHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  projectNumber: {
    fontSize: 9,
    color: "#2D3748",
    fontFamily: "Helvetica-Bold",
    marginRight: 4,
  },
  projectTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#1A202C",
    fontFamily: "Helvetica-Bold",
  },
  roleText: {
    fontSize: 8,
    color: "#718096",
    marginBottom: 4,
    fontStyle: "italic",
  },
  bulletItem: {
    flexDirection: "row",
    marginBottom: 3,
  },
  bulletPoint: {
    width: 10,
    fontSize: 8,
    color: "#4A5568",
  },
  bulletText: {
    flex: 1,
    fontSize: 9,
    color: "#4A5568",
    lineHeight: 1.4,
  },
  boldText: {
    fontFamily: "Helvetica-Bold",
    color: "#1A202C",
  },

  // Footer
  footer: {
    position: "absolute",
    bottom: 15,
    right: 30,
    fontSize: 7,
    color: "#A0AEC0",
  },
});

const ResumePDF: React.FC = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatar}
              src="/images/z7443709003327_edeaf99e34baf546895785d8554f3e83.jpg"
            />
          </View>
          {/* Header Info */}
          <View style={styles.headerInfo}>
            <Text style={styles.name}>{PERSONAL.fullName}</Text>
            <Text style={styles.jobTitle}>{PERSONAL.jobTitle}</Text>
            <View style={styles.contactRow}>
              <Text style={styles.contactItem}>{CONTACT.phone}</Text>
              <Text style={styles.contactSeparator}>|</Text>
              <Text style={styles.contactItem}>{CONTACT.email}</Text>
              <Text style={styles.contactSeparator}>|</Text>
              <Text style={styles.contactItem}>{CONTACT.location}</Text>
            </View>
            <View style={styles.contactRow}>
              <Text style={styles.contactItem}>{CONTACT.linkedinDisplay}</Text>
              <Text style={styles.contactSeparator}>|</Text>
              <Text style={styles.contactItem}>{CONTACT.githubDisplay}</Text>
            </View>
          </View>
        </View>

        {/* BODY */}
        <View style={styles.body}>
          {/* ABOUT ME */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>ABOUT ME</Text>
            <Text style={styles.aboutText}>
              Full-stack Developer with 3+ years building scalable web
              applications (CRM, dashboard, management systems). Strong
              expertise in{" "}
              <Text style={styles.boldText}>
                React.js, Next.js and TypeScript
              </Text>
              , specializing in performance optimization, lazy loading and
              delivering excellent UI/UX across devices. Gained practical
              backend experience with RESTful APIs and relational databases
              through full-stack projects using Java Spring Boot. Quick learner,
              ready to apply Node.js and NestJS to develop maintainable,
              high-performance systems.
            </Text>
          </View>

          {/* EDUCATION - ĐÃ CHỈNH HOÀN CHỈNH */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>EDUCATION</Text>
            <View style={styles.educationItem}>
              <Text style={styles.schoolName}>Nguyen Tat Thanh University</Text>
              <Text style={styles.educationDetails}>
                2018 – 2023 | Bachelor of Information Technology
              </Text>
              <Text style={styles.educationDetails}>
                Relevant Coursework: Object-Oriented Programming (Java),
                Advanced Database Systems (SQL), Data Structures & Algorithms,
                Advanced Web Technologies.
              </Text>
              <Text style={styles.educationDetails}>
                Self-taught React.js, Next.js and event-driven architectures
                while working on real freelance projects during and after
                university, enabling rapid transition from academic Java
                foundation to production full-stack development.
              </Text>
            </View>
          </View>

          {/* SKILLS */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>SKILLS</Text>
            <View style={styles.skillRow}>
              <Text style={styles.skillLevel}>Frontend</Text>
              <View style={styles.skillTags}>
                <Text style={styles.skillTag}>React.js / Next.js</Text>
                <Text style={styles.skillTag}>TypeScript</Text>
                <Text style={styles.skillTag}>Performance Optimization</Text>
                <Text style={styles.skillTag}>
                  Lazy Loading & Code Splitting
                </Text>
                <Text style={styles.skillTag}>UI/UX Implementation</Text>
              </View>
            </View>
            <View style={styles.skillRow}>
              <Text style={styles.skillLevel}>Backend & API</Text>
              <View style={styles.skillTags}>
                <Text style={styles.skillTag}>
                  Node.js & NestJS (ready to apply)
                </Text>
                <Text style={styles.skillTag}>Java Spring Boot</Text>
                <Text style={styles.skillTag}>RESTful API / GraphQL</Text>
                <Text style={styles.skillTag}>JWT / OAuth2</Text>
              </View>
            </View>
            <View style={styles.skillRow}>
              <Text style={styles.skillLevel}>Database & Others</Text>
              <View style={styles.skillTags}>
                <Text style={styles.skillTag}>PostgreSQL / MySQL</Text>
                <Text style={styles.skillTag}>SQL Server / Oracle</Text>
                <Text style={styles.skillTag}>Git / CI-CD</Text>
                <Text style={styles.skillTag}>Docker (basic)</Text>
                <Text style={styles.skillTag}>Scrum / Agile</Text>
              </View>
            </View>
            <View style={styles.skillRow}>
              <Text style={styles.skillLevel}>AI Tools</Text>
              <View style={styles.skillTags}>
                <Text style={styles.skillTag}>Cursor AI</Text>
                <Text style={styles.skillTag}>GitHub Copilot</Text>
                <Text style={styles.skillTag}>AI-Assisted Development</Text>
              </View>
            </View>
          </View>

          {/* LANGUAGES */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>LANGUAGES</Text>
            <Text style={styles.aboutText}>
              English: Reading & Writing (technical documents, chat) - Good |
              Speaking & Listening - Basic
            </Text>
          </View>

          {/* WORK EXPERIENCE */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>WORK EXPERIENCE</Text>

            {/* 1. JOB HIỆN TẠI - HERO SOLUTION INTERNAL */}
            <View style={styles.workHeader}>
              <Text style={styles.workDateRange}>02/2026 - Present</Text>
              <View style={styles.workTitleRow}>
                <Text style={styles.workTitle}>REACT DEVELOPER</Text>
                <Text style={styles.workCompany}>
                  | Internal Team – Hero Solution (HESO)
                </Text>
              </View>
            </View>

            <Text style={styles.coreResponsibility}>
              Developing new features and maintaining the POS (Point of Sale)
              system to support retail operations and improve user experience.
            </Text>

            <View style={styles.projectItem}>
              <View style={styles.projectHeader}>
                <Text style={styles.projectNumber}>•</Text>
                <Text style={styles.projectTitle}>
                  POS System (Point of Sale)
                </Text>
              </View>
              <Text style={styles.roleText}>Role: React Developer</Text>

              <View style={styles.bulletItem} wrap={false}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  Building and optimizing responsive UI/UX for retail staff and
                  customers using{" "}
                  <Text style={styles.boldText}>
                    React.js + TypeScript + Next.js
                  </Text>
                  , focusing on performance and usability.
                </Text>
              </View>

              <View style={styles.bulletItem} wrap={false}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  Collaborating closely with design team to deliver
                  pixel-perfect interfaces and implement new features that
                  streamline sales processes.
                </Text>
              </View>

              <View style={styles.bulletItem} wrap={false}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  Ensuring system stability through maintenance, bug fixing, and
                  continuous improvement of frontend architecture.
                </Text>
              </View>
            </View>

            {/* 2. GENERALI */}
            <View style={styles.workHeader} break>
              <Text style={styles.workDateRange}>03/2025 – 01/2026</Text>
              <View style={styles.workTitleRow}>
                <Text style={styles.workTitle}>FULL-STACK DEVELOPER</Text>
                <Text style={styles.workCompany}>
                  | Onsite Contractor – Generali Vietnam (via Hero Solution)
                </Text>
              </View>
            </View>

            <Text style={styles.coreResponsibility}>
              Key member in the onsite team delivering greenfield enterprise web
              applications (CRM-style management systems).
            </Text>

            {/* Project 1: EDM (dự án chính) */}
            <View style={styles.projectItem}>
              <View style={styles.projectHeader}>
                <Text style={styles.projectNumber}>1.</Text>
                <Text style={styles.projectTitle}>
                  Enterprise Document Management (EDM)
                </Text>
              </View>
              <Text style={styles.roleText}>Role: Full-stack Developer</Text>

              <View style={styles.bulletItem} wrap={false}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  Delivered core CRM/ERP modules{" "}
                  <Text style={styles.boldText}>
                    5 months ahead of schedule
                  </Text>{" "}
                  with zero critical defects at launch.
                </Text>
              </View>

              <View style={styles.bulletItem} wrap={false}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  Designed and implemented{" "}
                  <Text style={styles.boldText}>
                    agent lifecycle management
                  </Text>{" "}
                  (promote, demote, suspend, ...) including bulk upload and
                  metadata management features.
                </Text>
              </View>

              <View style={styles.bulletItem} wrap={false}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  Optimized complex business logic by moving heavy rules to{" "}
                  <Text style={styles.boldText}>Stored Procedures</Text> in
                  relational database, improving performance and data integrity.
                </Text>
              </View>

              <View style={styles.bulletItem} wrap={false}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  Technologies: Angular, Java Spring Boot, SQL Server (T-SQL).
                </Text>
              </View>
            </View>

            {/* Project 2: Sales Activity (sole full-stack + team nhỏ) */}
            <View style={styles.projectItem}>
              <View style={styles.projectHeader}>
                <Text style={styles.projectNumber}>2.</Text>
                <Text style={styles.projectTitle}>
                  Sales Activity Management System
                </Text>
              </View>
              <Text style={styles.roleText}>Role: Full-stack Developer</Text>

              <View style={styles.bulletItem} wrap={false}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  Acted as the only Full-stack Developer in a compact team of 3
                  (Solution Architect + Backend Java + Frontend) to build and
                  maintain the Sales Activity system.
                </Text>
              </View>

              <View style={styles.bulletItem} wrap={false}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  Developed event-driven notification system using Apache Kafka
                  to handle bulk notifications and cron jobs efficiently.
                </Text>
              </View>

              <View style={styles.bulletItem} wrap={false}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  Implemented high-performance frontend with{" "}
                  <Text style={styles.boldText}>Next.js & React</Text>, applying
                  Route-level Code Splitting and Lazy Loading to reduce bundle
                  size by 40%.
                </Text>
              </View>

              <View style={styles.bulletItem} wrap={false}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  Technologies: Next.js, React, Java Spring Boot, Kafka, Oracle.
                </Text>
              </View>
            </View>

            {/* Freelance */}
            <View style={styles.workHeader}>
              <Text style={styles.workDateRange}>04/2022 – 02/2025</Text>
              <View style={styles.workTitleRow}>
                <Text style={styles.workTitle}>FRONTEND DEVELOPER</Text>
                <Text style={styles.workCompany}>
                  | Remote – International Clients
                </Text>
              </View>
            </View>

            <Text style={styles.coreResponsibility}>
              Built and optimized high-performance web applications for
              international clients in a compact team of 3.
            </Text>

            {/* Project 1: Co-hoot (E-commerce) */}
            <View style={styles.projectItem}>
              <View style={styles.projectHeader}>
                <Text style={styles.projectNumber}>1.</Text>
                <Text style={styles.projectTitle}>
                  Co-hoot – E-commerce Platform
                </Text>
              </View>
              <Text style={styles.roleText}>
                Role: Frontend Developer (React + Redux)
              </Text>

              <View style={styles.bulletItem} wrap={false}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  Developed core e-commerce features including product listing,
                  cart, and integration with Lazada API.
                </Text>
              </View>

              <View style={styles.bulletItem} wrap={false}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  Built responsive, pixel-perfect UI/UX using{" "}
                  <Text style={styles.boldText}>React.js + Redux</Text>,
                  ensuring seamless experience across devices.
                </Text>
              </View>

              <View style={styles.bulletItem} wrap={false}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  Maintained staging environment with clean architecture and
                  RESTful API integration.
                </Text>
              </View>
            </View>

            {/* Project 2: Co-bee (Group Buy) */}
            <View style={styles.projectItem}>
              <View style={styles.projectHeader}>
                <Text style={styles.projectNumber}>2.</Text>
                <Text style={styles.projectTitle}>
                  Co-bee – Group Buying Platform
                </Text>
              </View>
              <Text style={styles.roleText}>
                Role: Frontend Developer (React + Redux)
              </Text>

              <View style={styles.bulletItem} wrap={false}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  Developed event-based group buying features (host events,
                  member joining).
                </Text>
              </View>

              <View style={styles.bulletItem} wrap={false}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  Implemented scalable frontend architecture with React and
                  Redux for smooth user interaction during high-traffic events.
                </Text>
              </View>

              <View style={styles.bulletItem} wrap={false}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  Technologies: React.js, Redux, TypeScript, RESTful API.
                </Text>
              </View>
            </View>
          </View>
        </View>

        <Text style={styles.footer}>Page 1/1</Text>
      </Page>
    </Document>
  );
};

export default ResumePDF;
