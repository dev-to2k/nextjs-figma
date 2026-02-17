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

// Modern Professional CV - 2026 HR Standard
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
    width: 85, // Slightly wider to fit "Tools & Others"
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
    color: "#4A5568", // Darker gray for better readability
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
    fontSize: 9, // Increased slightly for readability
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

interface ResumePDFProps {
  locale?: "en" | "vi";
}

const ResumePDF: React.FC<ResumePDFProps> = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* ==================== HEADER (Dark Background) ==================== */}
        <View style={styles.header}>
          {/* Avatar */}
          <View style={styles.avatarContainer}>
            {/* 
                IMPORTANT: Replace the source below with your permanent image link (Imgur/Cloudinary/etc).
                Do NOT use Facebook links as they expire quickly.
             */}
            <Image
              style={styles.avatar}
              src="https://via.placeholder.com/150" // <-- REPLACE THIS LINK!
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

        {/* ==================== BODY ==================== */}
        <View style={styles.body}>
          {/* About Me */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>ABOUT ME</Text>
            <Text style={styles.aboutText}>
              Full-stack Developer with 3+ years of experience delivering
              scalable enterprise applications. Proven track record in building
              high-performance web systems using modern frameworks (React,
              Angular, Next.js) and robust backends (Java Spring Boot).
              Specialized in optimizing system performance, event-driven
              architecture, and delivering complex features ahead of schedule
              with zero critical defects.
            </Text>
          </View>

          {/* Education */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>EDUCATION</Text>
            <View style={styles.educationItem}>
              <Text style={styles.schoolName}>Nguyen Tat Thanh University</Text>
              <Text style={styles.educationDetails}>
                2018 - 2023 | Bachelor of Information Technology
              </Text>
              <Text style={styles.educationDetails}>
                <Text style={styles.boldText}>
                  Self-taught Angular & Apache Kafka
                </Text>{" "}
                within 3 months while balancing university studies and freelance
                projects. Focus on Advanced Web Technologies and Enterprise
                System Architecture.
              </Text>
            </View>
          </View>

          {/* Skills */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>SKILLS</Text>

            <View style={styles.skillRow}>
              <Text style={styles.skillLevel}>Frontend</Text>
              <View style={styles.skillTags}>
                <Text style={styles.skillTag}>React / Next.js</Text>
                <Text style={styles.skillTag}>Angular (v17+)</Text>
                <Text style={styles.skillTag}>TypeScript</Text>
                <Text style={styles.skillTag}>RxJS</Text>
                <Text style={styles.skillTag}>Tailwind CSS</Text>
                <Text style={styles.skillTag}>Performance Optimization</Text>
              </View>
            </View>

            <View style={styles.skillRow}>
              <Text style={styles.skillLevel}>Backend</Text>
              <View style={styles.skillTags}>
                <Text style={styles.skillTag}>Java</Text>
                <Text style={styles.skillTag}>Spring Boot</Text>
                <Text style={styles.skillTag}>Spring Security</Text>
                <Text style={styles.skillTag}>JPA / Hibernate</Text>
                <Text style={styles.skillTag}>REST API Design</Text>
                <Text style={styles.skillTag}>SQL Server / Oracle</Text>
              </View>
            </View>

            <View style={styles.skillRow}>
              <Text style={styles.skillLevel}>Tools & Others</Text>
              <View style={styles.skillTags}>
                <Text style={styles.skillTag}>Apache Kafka</Text>
                <Text style={styles.skillTag}>Git / CI/CD</Text>
                <Text style={styles.skillTag}>Docker</Text>
                <Text style={styles.skillTag}>Scrum / Agile</Text>
                <Text style={styles.skillTag}>Unit Testing</Text>
              </View>
            </View>

            <View style={styles.skillRow}>
              <Text style={styles.skillLevel}>Languages</Text>
              <View style={styles.skillTags}>
                <Text style={styles.skillTag}>Vietnamese (Native)</Text>
                <Text style={styles.skillTag}>
                  English (Professional Working Proficiency)
                </Text>
              </View>
            </View>
          </View>

          {/* Work Experience */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>WORK EXPERIENCE</Text>

            {/* Generali */}
            <View style={styles.workHeader}>
              <Text style={styles.workDateRange}>01/2025 - Present</Text>
              <View style={styles.workTitleRow}>
                <Text style={styles.workTitle}>FULL-STACK DEVELOPER</Text>
                <Text style={styles.workCompany}>
                  | Generali Vietnam (Onsite Contractor)
                </Text>
              </View>
            </View>

            <Text style={styles.coreResponsibility}>
              Key member of the onsite development team, responsible for
              delivering greenfield enterprise applications and ensuring system
              stability.
            </Text>

            {/* Project 1: Sales Activity */}
            <View style={styles.projectItem}>
              <View style={styles.projectHeader}>
                <Text style={styles.projectNumber}>1.</Text>
                <Text style={styles.projectTitle}>
                  Sales Activity Management System
                </Text>
              </View>
              <Text style={styles.roleText}>Role: Full-stack Developer</Text>

              <View style={styles.bulletItem} wrap={false}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  <Text style={styles.boldText}>
                    Event-Driven Architecture:
                  </Text>{" "}
                  Designed a decoupled notification system using{" "}
                  <Text style={styles.boldText}>Apache Kafka</Text>, handling
                  over <Text style={styles.boldText}>10,000+ events</Text>{" "}
                  instantly to offload heavy processing from the core scheduler.
                </Text>
              </View>

              <View style={styles.bulletItem} wrap={false}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  <Text style={styles.boldText}>Performance:</Text> implemented{" "}
                  <Text style={styles.boldText}>
                    Route-level Code Splitting
                  </Text>{" "}
                  and <Text style={styles.boldText}>Lazy Loading</Text>,
                  reducing initial bundle size by{" "}
                  <Text style={styles.boldText}>40%</Text> and significantly
                  improving load times.
                </Text>
              </View>

              <View style={styles.bulletItem} wrap={false}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  <Text style={styles.boldText}>Tech Stack:</Text> Java Spring
                  Boot, Kafka, Next.js, Oracle.
                </Text>
              </View>
            </View>

            {/* Project 2: EDM */}
            <View style={styles.projectItem}>
              <View style={styles.projectHeader}>
                <Text style={styles.projectNumber}>2.</Text>
                <Text style={styles.projectTitle}>
                  Enterprise Document Management (EDM)
                </Text>
              </View>
              <Text style={styles.roleText}>Role: Full-stack Developer</Text>

              <View style={styles.bulletItem} wrap={false}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  <Text style={styles.boldText}>Accelerated Delivery:</Text>{" "}
                  Completed core modules{" "}
                  <Text style={styles.boldText}>
                    5 months ahead of schedule
                  </Text>{" "}
                  (3 months vs. 8 months planned) through efficient workflow
                  optimization and rapid prototyping.
                </Text>
              </View>

              <View style={styles.bulletItem} wrap={false}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  <Text style={styles.boldText}>Quality:</Text> Achieved{" "}
                  <Text style={styles.boldText}>zero critical defects</Text>{" "}
                  during the initial launch phase by implementing rigorous
                  validation logic and clean architecture patterns.
                </Text>
              </View>

              <View style={styles.bulletItem} wrap={false}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  <Text style={styles.boldText}>Tech Stack:</Text> Angular, Java
                  Spring Data JPA, SQL Server, Oracle.
                </Text>
              </View>
            </View>

            {/* Previous Job: Remote Frontend */}
            <View style={styles.workHeader}>
              <Text style={styles.workDateRange}>04/2022 - 12/2024</Text>
              <View style={styles.workTitleRow}>
                <Text style={styles.workTitle}>FRONTEND DEVELOPER</Text>
                <Text style={styles.workCompany}>
                  | Remote International Clients
                </Text>
              </View>
            </View>

            <View style={styles.projectItem}>
              <View style={styles.bulletItem} wrap={false}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  Built high-performance, responsive web applications for
                  international clients using the React ecosystem.
                </Text>
              </View>
              <View style={styles.bulletItem} wrap={false}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  Collaborated with global teams to translate Figma designs into
                  pixel-perfect, interactive UI components.
                </Text>
              </View>
              <View style={styles.bulletItem} wrap={false}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  Developed reusable component libraries to standardize design
                  systems across multiple projects.
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>Page 1/1</Text>
      </Page>
    </Document>
  );
};

export default ResumePDF;
