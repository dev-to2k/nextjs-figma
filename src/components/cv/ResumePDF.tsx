import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import React from "react";
import { CONTACT, PERSONAL } from "@/constants/contact";

// Modern Professional CV - ITViec Style
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
    // Padding is now handled by Page
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
  },

  // Skills
  skillRow: {
    flexDirection: "row",
    marginBottom: 6,
    alignItems: "flex-start",
  },
  skillLevel: {
    width: 75,
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
    marginBottom: 10,
  },
  workDateRange: {
    fontSize: 9,
    color: "#718096",
    marginBottom: 3,
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
    color: "#718096",
    marginLeft: 6,
  },
  coreResponsibility: {
    fontSize: 9,
    color: "#4A5568",
    marginTop: 8,
    marginBottom: 12,
    fontStyle: "italic",
    lineHeight: 1.4,
  },

  // Project Items
  projectItem: {
    marginBottom: 12,
    marginTop: 15,
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
    marginBottom: 2,
  },
  bulletPoint: {
    width: 10,
    fontSize: 8,
    color: "#4A5568",
  },
  bulletText: {
    flex: 1,
    fontSize: 8,
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
            <Image
              style={styles.avatar}
              src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/480703369_1486149359007485_633522227972454199_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHNfu4K7v_6e84GRYVzofUyoyaSlxRrKfejJpKXFGsp90foxMDSnM3xMKSqrMi5VEaWFpEGmoeEK-zzzBF9eBpY&_nc_ohc=VBYEzxLmM-QQ7kNvwFEHwII&_nc_oc=AdlBqbkYwpRneD4FY0ubbyHxzC_HFeFY38FhjhbNV35-zPoeMflt1KaMZW0CzlylkEc&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=ntbKkCmn7O6toc-p2Yuaiw&oh=00_Afq27AQ_QBPQytXvgJQT5VzHP6nRU09cScXEUCJL0BJjhA&oe=695FD392"
            />
          </View>
          {/* Header Info */}
          <View style={styles.headerInfo}>
            <Text style={styles.name}>{PERSONAL.fullName}</Text>
            <Text style={styles.jobTitle}>
              {PERSONAL.jobTitle}
            </Text>
            <View style={styles.contactRow}>
              <Text style={styles.contactItem}>{CONTACT.phone}</Text>
              <Text style={styles.contactSeparator}>|</Text>
              <Text style={styles.contactItem}>
                {CONTACT.email}
              </Text>
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
              Versatile{" "}
              <Text style={styles.boldText}>Full-stack Developer</Text> with a
              strong <Text style={styles.boldText}>product mindset</Text>.
              Proven ability to adapt rapidly to new technologies (rapidly
              attained proficiency in{" "}
              <Text style={styles.boldText}>Angular/Kafka</Text> from scratch
              within months). Passionate about{" "}
              <Text style={styles.boldText}>Performance Optimization</Text> and
              delivering{" "}
              <Text style={styles.boldText}>high-quality user experiences</Text>
              . Expert in leveraging{" "}
              <Text style={styles.boldText}>AI tools (Cursor, Copilot)</Text> to
              accelerate development speed by{" "}
              <Text style={styles.boldText}>40-60%</Text> while maintaining code
              quality and{" "}
              <Text style={styles.boldText}>security standards</Text>.
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
                Relevant Coursework: Object-Oriented Programming (Java),
                Advanced Database Systems (SQL/Stored Procedures), Data
                Structures & Algorithms, Advanced Web Technologies.
              </Text>
            </View>
          </View>

          {/* Skills */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>SKILLS</Text>
            <View style={styles.skillRow}>
              <Text style={styles.skillLevel}>Excellent</Text>
              <View style={styles.skillTags}>
                <Text style={styles.skillTag}>React (ReactJS)</Text>
                <Text style={styles.skillTag}>Angular</Text>
                <Text style={styles.skillTag}>Next.js</Text>
                <Text style={styles.skillTag}>TypeScript</Text>
                <Text style={styles.skillTag}>Lazy Loading</Text>
                <Text style={styles.skillTag}>Performance Optimization</Text>
                <Text style={styles.skillTag}>Front-End Best Practices</Text>
                <Text style={styles.skillTag}>UI/UX Implementation</Text>
                <Text style={styles.skillTag}>Rapid Prototyping</Text>
              </View>
            </View>
            <View style={styles.skillRow}>
              <Text style={styles.skillLevel}>Intermediate</Text>
              <View style={styles.skillTags}>
                <Text style={styles.skillTag}>Java</Text>
                <Text style={styles.skillTag}>Spring Boot</Text>
                <Text style={styles.skillTag}>Spring MVC</Text>
                <Text style={styles.skillTag}>Spring Security</Text>
                <Text style={styles.skillTag}>Spring Data</Text>
                <Text style={styles.skillTag}>ORM (Hibernate, JPA)</Text>
                <Text style={styles.skillTag}>REST API</Text>
                <Text style={styles.skillTag}>SQL</Text>
                <Text style={styles.skillTag}>T-SQL</Text>
              </View>
            </View>
            <View style={styles.skillRow}>
              <Text style={styles.skillLevel}>Process & Tools</Text>
              <View style={styles.skillTags}>
                <Text style={styles.skillTag}>Unit Testing (JUnit)</Text>
                <Text style={styles.skillTag}>Git</Text>
                <Text style={styles.skillTag}>CI/CD</Text>
                <Text style={styles.skillTag}>Scrum/Agile</Text>
                <Text style={styles.skillTag}>GitHub Copilot</Text>
                <Text style={styles.skillTag}>Cursor IDE</Text>
              </View>
            </View>
            <View style={styles.skillRow}>
              <Text style={styles.skillLevel}>Basic Knowledge</Text>
              <View style={styles.skillTags}>
                <Text style={styles.skillTag}>Microservices</Text>
                <Text style={styles.skillTag}>Docker</Text>
              </View>
            </View>
          </View>

          {/* Work Experience */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>WORK EXPERIENCE</Text>

            <View style={styles.workHeader}>
              <Text style={styles.workDateRange}>01/2025 - PRESENT</Text>
              <View style={styles.workTitleRow}>
                <Text style={styles.workTitle}>FULL-STACK DEVELOPER</Text>
                <Text style={styles.workCompany}>
                  | Generali Vietnam (Via Partner)
                </Text>
              </View>
            </View>

            <Text style={styles.coreResponsibility}>
              Core Responsibility: Key Member in the onsite development team,
              participating in delivery of Greenfield Enterprise Applications.
              Collaborated with the Solution Architect to implement solutions
              following team standards.
            </Text>
            <View style={styles.bulletItem} wrap={false}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.bulletText}>
                <Text style={styles.boldText}>AI-Driven Optimization:</Text>{" "}
                Implemented an AI-assisted development workflow using{" "}
                <Text style={styles.boldText}>Cursor & Copilot</Text>, which{" "}
                <Text style={styles.boldText}>
                  reduced average coding time per task by 40%,
                </Text>{" "}
                allowing the team to focus on complex architecture logic.
              </Text>
            </View>
            <View style={styles.bulletItem} wrap={false}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.bulletText}>
                <Text style={styles.boldText}>Quality & Process:</Text> Follow{" "}
                <Text style={styles.boldText}>Secure Coding</Text> principles to
                prevent <Text style={styles.boldText}>Web Security</Text>{" "}
                vulnerabilities.
              </Text>
            </View>

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
                  <Text style={styles.boldText}>Performance Optimization:</Text>{" "}
                  Implemented{" "}
                  <Text style={styles.boldText}>
                    Route-level Code Splitting
                  </Text>{" "}
                  and <Text style={styles.boldText}>Lazy Loading</Text> for the
                  Notification List component to significantly reduce the
                  initial bundle size and improve page load speed.
                </Text>
              </View>
              <View style={styles.bulletItem} wrap={false}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  <Text style={styles.boldText}>Quality Assurance:</Text>{" "}
                  Applied{" "}
                  <Text style={styles.boldText}>
                    Production Build Best Practices
                  </Text>{" "}
                  (Tree-shaking, Minification) and resolved{" "}
                  <Text style={styles.boldText}>Render-blocking resources</Text>{" "}
                  identified via Lighthouse analysis.
                </Text>
              </View>
              <View style={styles.bulletItem} wrap={false}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  <Text style={styles.boldText}>
                    Event-Driven Notification System:
                  </Text>{" "}
                  Designed a{" "}
                  <Text style={styles.boldText}>decoupling architecture</Text>{" "}
                  using Apache Kafka to handle bulk internal notifications.
                </Text>
              </View>
              <View style={styles.bulletItem} wrap={false}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  <Text style={styles.boldText}>Mechanism:</Text> Offloaded
                  heavy batch processing from the Job Scheduler by pushing{" "}
                  <Text style={styles.boldText}>10,000+ events</Text> to Kafka
                  topics instantly.
                </Text>
              </View>
              <View style={styles.bulletItem} wrap={false}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  <Text style={styles.boldText}>Reliability:</Text> Implemented
                  Consumers to process messages{" "}
                  <Text style={styles.boldText}>asynchronously</Text> (template
                  rendering & SQL persistence), preventing database congestion
                  during peak broadcast times.
                </Text>
              </View>
              <View style={styles.bulletItem} wrap={false}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  <Text style={styles.boldText}>Technologies:</Text> Java,
                  Spring Boot (MVC, Security), Next.js, Kafka, Oracle.
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
              <Text style={styles.roleText}>
                Role: Full-stack Developer
              </Text>
              <View style={styles.bulletItem} wrap={false}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  <Text style={styles.boldText}>Rapid Delivery:</Text> Delivered
                  the core module{" "}
                  <Text style={styles.boldText}>
                    5 months ahead of schedule
                  </Text>{" "}
                  (3 months actual vs. 8 months planned) by utilizing{" "}
                  <Text style={styles.boldText}>
                    AI-driven development workflows
                  </Text>
                  , ensuring stability and zero critical defects at launch.
                </Text>
              </View>
              <View style={styles.bulletItem} wrap={false}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  <Text style={styles.boldText}>End-to-End Delivery:</Text>{" "}
                  Leveraged AI tools to rapidly prototype complex{" "}
                  <Text style={styles.boldText}>Angular</Text> UI and automate{" "}
                  <Text style={styles.boldText}>Java Spring Boot</Text>{" "}
                  persistence layers, ensuring seamless integration with{" "}
                  <Text style={styles.boldText}>SQL Server</Text>.
                </Text>
              </View>
              <View style={styles.bulletItem} wrap={false}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  <Text style={styles.boldText}>Outcome:</Text> The system was
                  highly stable upon launch, handling large-scale data
                  validation and bulk uploads with zero critical defects during
                  the early delivery phase.
                </Text>
              </View>
              <View style={styles.bulletItem} wrap={false}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  <Text style={styles.boldText}>Technologies:</Text> Java,
                  Spring Data JPA, Angular, SQL Server (T-SQL).
                </Text>
              </View>
            </View>

            {/* Project 3: Quotation */}
            <View style={styles.projectItem}>
              <View style={styles.projectHeader}>
                <Text style={styles.projectNumber}>3.</Text>
                <Text style={styles.projectTitle}>Quotation System</Text>
              </View>
              <Text style={styles.roleText}>Role: Full-stack Developer</Text>
              <View style={styles.bulletItem} wrap={false}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  <Text style={styles.boldText}>Responsibility:</Text> Developed
                  Dynamic Form Interfaces using Angular & RxJS. Applied{" "}
                  <Text style={styles.boldText}>Strict Typing</Text> and{" "}
                  <Text style={styles.boldText}>Reactive Programming</Text>{" "}
                  principles to handle complex async validations and guarantee
                  real-time data consistency.
                </Text>
              </View>
              <View style={styles.bulletItem} wrap={false}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  <Text style={styles.boldText}>Technologies:</Text> Angular,
                  RxJS, HTML5/CSS3, Figma.
                </Text>
              </View>
            </View>

            {/* Previous Job: Remote Frontend */}
            <View style={styles.workHeader}>
              <Text style={styles.workDateRange}>04/2022 - 12/2024</Text>
              <View style={styles.workTitleRow}>
                <Text style={styles.workTitle}>FRONTEND DEVELOPER</Text>
                <Text style={styles.workCompany}>
                  | Remote / Freelance Projects
                </Text>
              </View>
            </View>

            <View style={styles.projectItem}>
              <View style={styles.bulletItem} wrap={false}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  Developed responsive web applications for international
                  clients using ReactJS ecosystem. Collaborated with remote
                  teams via Git/Jira to deliver pixel-perfect UI from Figma
                  designs.
                </Text>
              </View>
              <View style={styles.bulletItem} wrap={false}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  Optimized frontend performance and built reusable component
                  libraries.
                </Text>
              </View>
              <View style={styles.bulletItem} wrap={false}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  <Text style={styles.boldText}>Technologies:</Text> ReactJS,
                  Redux, HTML5, CSS3, RESTful APIs, Git.
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
