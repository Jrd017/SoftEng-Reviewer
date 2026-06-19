window.REVIEWER_DATA = {
  "generatedAt": "2026-06-17",
  "title": "Software Engineering Final Reviewer",
  "techniqueTitle": "Software Engineering Decision Clues",
  "sources": [
    {
      "label": "Software Engineering prelim exam live page",
      "url": "https://jrd017.github.io/ccs308-software-engineering-reviewer/"
    },
    {
      "label": "Advanced Software Engineering last quiz live page",
      "url": "https://jrd017.github.io/ccs308-software-engineering-reviewer/advanced-software-security-reviewer/"
    },
    {
      "label": "combinedSE2 (1).md",
      "url": "local upload"
    }
  ],
  "overview": {
    "stats": [
      [
        "Prelim exam",
        50
      ],
      [
        "Week 3-4",
        40
      ],
      [
        "Last quiz",
        76
      ],
      [
        "Everything bank",
        208
      ]
    ],
    "coverage": [
      [
        "Prelim reviewer",
        "Software process, requirements, design and implementation, UML, testing, evolution, maintenance, and version control."
      ],
      [
        "Last quiz reviewer",
        "Software reuse, advanced software engineering, cloud-native systems, microservices, AI, big data, blockchain, IoT, and security engineering."
      ],
      [
        "Uploaded final notes",
        "Component-based software, dependability and security, service-oriented architecture, security engineering, software evolution, and software management."
      ],
      [
        "Quiz split",
        "Prelim and last quiz banks are separated into Set A and Set B, with combined modes kept available."
      ]
    ]
  },
  "comparisonTables": [
    {
      "title": "Software Engineering Decision Grid",
      "columns": [
        "Topic",
        "Best Use",
        "Exam Cue"
      ],
      "rows": [
        [
          "Waterfall",
          "Stable, well-defined requirements",
          "Sequential phases; hard to change late"
        ],
        [
          "Agile",
          "Changing requirements and frequent feedback",
          "Sprints, iteration, collaboration"
        ],
        [
          "Spiral",
          "Large, high-risk systems",
          "Risk analysis in each loop"
        ],
        [
          "CBSE",
          "Systems where suitable reusable components exist",
          "Interfaces, integration, component selection"
        ],
        [
          "SOA",
          "Distributed business services",
          "Loose coupling, service contracts, composition"
        ],
        [
          "DevOps",
          "Faster and safer release flow",
          "CI/CD, automation, operations collaboration"
        ],
        [
          "DevSecOps",
          "Continuous delivery with security built in",
          "Security checks inside the pipeline"
        ]
      ]
    },
    {
      "title": "Dependability and Security Contrast",
      "columns": [
        "Concept",
        "Meaning",
        "Watch For"
      ],
      "rows": [
        [
          "Availability",
          "Service is accessible when needed",
          "Downtime, redundancy, recovery"
        ],
        [
          "Reliability",
          "Service performs correctly over time",
          "Failures and failure rate"
        ],
        [
          "Safety",
          "System avoids harm",
          "Safety-critical hazards"
        ],
        [
          "Security",
          "System resists attacks and misuse",
          "CIA triad, threats, vulnerabilities"
        ],
        [
          "Maintainability",
          "System can be repaired and evolved",
          "Technical debt, documentation, modularity"
        ]
      ]
    }
  ],
  "studySections": [
    {
      "group": "Software Process",
      "title": "Major Activities",
      "summary": "A software process is a structured set of activities, methods, practices, and transformations used to develop and maintain software systems.",
      "points": [
        "Requirements Analysis: Identify what users and stakeholders need. Activities include gathering requirements, interviews, surveys, requirement specifications, and functional/non-functional requirements. Main deliverable: Software Requirements Specification (SRS).",
        "System Design: Transforms requirements into a blueprint for implementation. It covers architecture, database structure, interface behavior, and component/module responsibilities.",
        "Implementation: Developers translate designs into source code using languages and frameworks such as Java, Python, C#, JavaScript, and PHP.",
        "Testing and Debugging: Unit tests check modules independently, integration tests check modules together, and debugging fixes syntax, logic, and runtime errors.",
        "Deployment and Maintenance: The completed system is released on servers, app stores, or internal platforms, then maintained as user needs and environments change."
      ]
    },
    {
      "group": "Software Process",
      "title": "Process Models",
      "summary": "A software process is a structured set of activities, methods, practices, and transformations used to develop and maintain software systems.",
      "points": [
        "Waterfall Model: Sequential and phase-by-phase. Each phase must be completed before the next begins. Best for stable, well-defined requirements.",
        "Agile Model: Iterative and flexible. Work is broken into sprints, feedback is continuous, and working software is delivered frequently.",
        "Spiral Model: Risk-driven and iterative. Each loop involves refinement and risk analysis, making it useful for large, complex, high-risk systems."
      ]
    },
    {
      "group": "Software Process",
      "title": "Modern Development Trends",
      "summary": "A software process is a structured set of activities, methods, practices, and transformations used to develop and maintain software systems.",
      "points": [
        "DevOps: Combines development and operations to support continuous delivery and tighter release coordination.",
        "CI/CD: Automates testing and deployment so changes can be integrated and released more safely.",
        "Cloud-Based Development: Uses platforms such as AWS, Microsoft Azure, and Google Cloud for scalable development and deployment.",
        "AI-Assisted Development: Uses AI for code suggestions, automated testing support, and bug detection."
      ]
    },
    {
      "group": "Design and Implementation",
      "title": "Types of System Design",
      "summary": "Software design converts requirements into detailed representations that guide coding. Implementation turns those designs into operational software.",
      "points": [
        "Architectural Design: Defines the overall structure of the system, such as client-server, three-tier, or microservices architecture.",
        "Database Design: Defines tables, relationships, and data storage, such as Students, Courses, Faculty, and Enrollment tables.",
        "Interface Design: Defines how users interact with the system visually, including login forms, dashboards, and navigation menus.",
        "Component Design: Defines internal modules and classes, such as Authentication, Payment, and Report Generation modules."
      ]
    },
    {
      "group": "Design and Implementation",
      "title": "Design Principles",
      "summary": "Software design converts requirements into detailed representations that guide coding. Implementation turns those designs into operational software.",
      "points": [
        "Abstraction: Hide unnecessary implementation details. Example: ATM users do not need to know the internal banking algorithms.",
        "Encapsulation: Combine data and methods into one unit. Example: a Student class stores student data and enrollment methods.",
        "Modularity: Divide software into smaller independent modules, such as Inventory, Payment, and Shipping.",
        "Low Coupling: Keep module dependencies minimal so changes in one part do not heavily affect others.",
        "High Cohesion: Keep each module focused on one clear responsibility."
      ]
    },
    {
      "group": "Design and Implementation",
      "title": "UML and Reviews",
      "summary": "Software design converts requirements into detailed representations that guide coding. Implementation turns those designs into operational software.",
      "points": [
        "Use Case Diagram: Shows user interactions with the system.",
        "Class Diagram: Shows classes, attributes, and relationships.",
        "Sequence Diagram: Shows the interaction flow between objects.",
        "Activity Diagram: Shows workflow and business processes.",
        "ER Diagram: Shows database entity relationships.",
        "Code Review: Examines source code to detect bugs early, improve quality, share knowledge, and enforce coding standards."
      ]
    },
    {
      "group": "Software Evolution",
      "title": "Why Software Evolves",
      "summary": "Software evolution is the continuous process of modifying and updating deployed software to meet changing requirements, technologies, and user needs.",
      "points": [
        "User Needs Change: Users request new features, better workflows, or improved usability.",
        "Business Rules Change: Organizations update policies, pricing, compliance rules, or operating models.",
        "Technology Changes: New platforms, operating systems, APIs, and devices require adaptation.",
        "Security Threats Emerge: Unpatched vulnerabilities can expose data and systems to attacks.",
        "Performance Needs Grow: Software must be optimized as user traffic, data volume, and expectations increase."
      ]
    },
    {
      "group": "Software Evolution",
      "title": "Maintenance Types",
      "summary": "Software evolution is the continuous process of modifying and updating deployed software to meet changing requirements, technologies, and user needs.",
      "points": [
        "Corrective Maintenance: Fixes defects and errors, such as a login bug.",
        "Adaptive Maintenance: Modifies software for new environments, such as Windows 11 or Android 15.",
        "Perfective Maintenance: Improves performance or usability, such as redesigning a website interface.",
        "Preventive Maintenance: Improves maintainability and prevents future problems, such as refactoring old code."
      ]
    },
    {
      "group": "Software Evolution",
      "title": "Managing Evolution",
      "summary": "Software evolution is the continuous process of modifying and updating deployed software to meet changing requirements, technologies, and user needs.",
      "points": [
        "Lehman's Laws: Software must continue changing, tends to grow in complexity, expands in functionality, and declines in quality without maintenance.",
        "Legacy Systems: Old systems still in use, often critical to operations but difficult and costly to maintain.",
        "Reengineering: Improves an existing system without changing its core functionality.",
        "Refactoring: Restructures code without changing external behavior.",
        "Technical Debt: Development shortcuts that create future maintenance problems.",
        "Version Control: Tracks history, supports collaboration, enables rollback, and allows branching for parallel work."
      ]
    },
    {
      "group": "Week 3-4",
      "title": "Software Reuse",
      "summary": "Week 3-4 covers software reuse plus dependability and security engineering: building systems efficiently while keeping them trustworthy, safe, resilient, and protected.",
      "points": [
        "Software Reuse: The process of using existing software assets to develop new systems instead of building everything from scratch.",
        "Reusable Assets: Source code, components, libraries, frameworks, documentation, test cases, and designs can all be reused.",
        "Types of Reuse: Code reuse, component reuse, framework reuse, service reuse, application system reuse, and object/function reuse.",
        "Reusable Components: Self-contained modules designed for multiple systems. Good components are modular, independent, replaceable, and maintainable.",
        "Software Product Lines: Collections of related software systems that share common features, such as different versions of accounting software.",
        "Reuse Risks: Compatibility issues, maintenance problems, security risks, licensing restrictions, version conflicts, and dependency management problems."
      ]
    },
    {
      "group": "Week 3-4",
      "title": "Dependability and Socio-Technical Systems",
      "summary": "Week 3-4 covers software reuse plus dependability and security engineering: building systems efficiently while keeping them trustworthy, safe, resilient, and protected.",
      "points": [
        "Socio-Technical System: A system combining software, hardware, people, procedures, and organizational rules.",
        "Dependability: The ability of a software system to deliver services that users can trust.",
        "Dependability Attributes: Availability, reliability, safety, security, and maintainability.",
        "Dependability Engineering: Designing, developing, testing, and maintaining systems to ensure reliability, safety, availability, and security.",
        "Fault Techniques: Fault avoidance prevents faults, fault detection finds them, fault tolerance keeps operating despite failures, and fault recovery restores service.",
        "Safety-Critical Systems: Systems where failure can cause injury, loss of life, environmental damage, or major financial loss."
      ]
    },
    {
      "group": "Week 3-4",
      "title": "Security Engineering",
      "summary": "Week 3-4 covers software reuse plus dependability and security engineering: building systems efficiently while keeping them trustworthy, safe, resilient, and protected.",
      "points": [
        "Security Engineering: Designing, developing, testing, and maintaining systems that resist attacks, unauthorized access, and security threats.",
        "CIA Triad: Confidentiality, integrity, and availability are the core pillars of software security.",
        "Common Threats: Malware, phishing, SQL injection, cross-site scripting, DoS attacks, and password attacks.",
        "SSDLC: Security is integrated into requirements, design, implementation, testing, deployment, and maintenance.",
        "Threat Modeling: Identifies assets, attackers, vulnerabilities, and prevention strategies before implementation.",
        "Modern Security Trends: Cloud security, zero trust, AI-based cybersecurity, and DevSecOps."
      ]
    },
    {
      "group": "Software Reuse",
      "title": "Reusable Assets and Importance",
      "summary": "Software reuse is the process of using existing software assets to develop new software systems.",
      "points": [
        "Reusable Assets: Source code, components, libraries, frameworks, documentation, test cases, and designs can all be reused.",
        "Importance: Software reuse saves development time, reduces cost, improves reliability, encourages standardization, and reduces testing effort.",
        "Mobile App Example: Developers commonly reuse login modules, payment systems, notification services, and user interface templates."
      ]
    },
    {
      "group": "Software Reuse",
      "title": "Types and Approaches",
      "summary": "Software reuse is the process of using existing software assets to develop new software systems.",
      "points": [
        "Code Reuse: Reusing existing source code, such as utility functions in multiple projects.",
        "Component Reuse: Reusing independent modules, such as authentication components.",
        "Framework Reuse: Using frameworks such as ReactJS, Angular, Laravel, or Spring Boot.",
        "Service Reuse: Using external services through APIs, such as Google Maps API integration.",
        "Application System Reuse: Reusing entire applications, such as a Content Management System.",
        "Object and Function Reuse: Reusing classes and functions through utility libraries."
      ]
    },
    {
      "group": "Software Reuse",
      "title": "Quality, Risks, and Trends",
      "summary": "Software reuse is the process of using existing software assets to develop new software systems.",
      "points": [
        "Reusable Component: A self-contained module designed for multiple systems; it should be modular, independent, replaceable, and maintainable.",
        "Software Product Line: A collection of related software systems sharing common features, such as versions of accounting software.",
        "Open-Source Reuse: Reuse of open-source software such as Linux, WordPress, and Bootstrap.",
        "Reuse Risks: Hidden bugs, security vulnerabilities, poor documentation, version conflicts, and dependency management issues.",
        "Modern Trends: Microservices, API economy, and cloud services make reusable functionality easier to provide and consume."
      ]
    },
    {
      "group": "Advanced Software Engineering",
      "title": "Modern System Context",
      "summary": "Advanced software engineering applies advanced principles, architectures, methodologies, and technologies to large-scale, complex, intelligent, and enterprise systems.",
      "points": [
        "Focus Areas: Scalability, maintainability, automation, distributed systems, cloud computing, AI integration, and software quality assurance.",
        "Why Organizations Need ASE: Modern systems handle millions of users, real-time data processing, cloud services, global transactions, and critical infrastructures.",
        "System Characteristics: Advanced systems are large-scale, distributed, scalable, secure, maintainable, and fault-tolerant.",
        "Evolution of Software Engineering: Software engineering evolved from procedural programming to object-oriented, web-based, distributed, cloud-native, and AI-driven systems."
      ]
    },
    {
      "group": "Advanced Software Engineering",
      "title": "Methods and Platforms",
      "summary": "Advanced software engineering applies advanced principles, architectures, methodologies, and technologies to large-scale, complex, intelligent, and enterprise systems.",
      "points": [
        "Agile Development: Focuses on iterative development, continuous feedback, collaboration, and rapid delivery.",
        "DevOps: Integrates development, operations, and automation for faster deployment, CI, and CD.",
        "CI/CD: CI means frequent merges into shared repositories. CD means applications are automatically tested and deployed.",
        "Cloud-Native Engineering: Cloud-native applications use elastic scalability, distributed architecture, containerization, and microservices.",
        "Containerization: Packages applications with dependencies. Docker is the popular tool in the source.",
        "Kubernetes: A container orchestration platform for deployment management, scaling containers, load balancing, and fault recovery."
      ]
    },
    {
      "group": "Advanced Software Engineering",
      "title": "Advanced Technologies",
      "summary": "Advanced software engineering applies advanced principles, architectures, methodologies, and technologies to large-scale, complex, intelligent, and enterprise systems.",
      "points": [
        "Microservices: Applications are divided into small independent services such as payment, product, authentication, and delivery services.",
        "AI in Software Engineering: AI supports recommendation systems, chatbots, predictive analytics, automated testing, and intelligent automation.",
        "Big Data Engineering: Processes massive volumes of data using Hadoop, Spark, and NoSQL databases.",
        "Blockchain: A decentralized digital ledger used in cryptocurrency, supply chains, and smart contracts.",
        "IoT: Connects physical devices to the internet, such as smart homes, smart watches, and industrial sensors.",
        "Emerging Trends: Edge computing, quantum computing, low-code/no-code development, and green software engineering."
      ]
    },
    {
      "group": "Security Engineering",
      "title": "Principles and Goals",
      "summary": "Security engineering designs, develops, tests, and maintains systems that resist malicious attacks, unauthorized access, and security threats.",
      "points": [
        "Why It Matters: Software systems manage financial transactions, personal information, government records, medical data, and business operations.",
        "Security Failure Impact: Security failure can lead to data theft, financial loss, identity theft, reputation damage, and legal penalties.",
        "CIA Triad: Confidentiality limits access to authorized users, integrity keeps data accurate and unaltered, and availability keeps systems operational.",
        "Additional Principles: Authentication verifies identity, authorization determines permissions, and non-repudiation prevents denial of performed actions."
      ]
    },
    {
      "group": "Security Engineering",
      "title": "Threats, Vulnerabilities, and SSDLC",
      "summary": "Security engineering designs, develops, tests, and maintains systems that resist malicious attacks, unauthorized access, and security threats.",
      "points": [
        "Common Threats: Malware, phishing, SQL injection, cross-site scripting, and denial-of-service attacks.",
        "Vulnerabilities: Weaknesses attackers can exploit, often caused by weak passwords, poor coding, unpatched software, lack of encryption, or misconfigured servers.",
        "SSDLC: Security should be integrated into requirements, design, implementation, testing, deployment, and maintenance.",
        "Threat Modeling: Identifies assets, attackers, vulnerabilities, and prevention strategies before implementation."
      ]
    },
    {
      "group": "Security Engineering",
      "title": "Protection and Testing",
      "summary": "Security engineering designs, develops, tests, and maintains systems that resist malicious attacks, unauthorized access, and security threats.",
      "points": [
        "Encryption: Converts readable data into unreadable form. Symmetric encryption uses one key; asymmetric encryption uses public and private keys.",
        "Authentication Techniques: Password authentication, two-factor authentication, and biometric authentication.",
        "Secure Coding: Validate input, use parameterized SQL, avoid hardcoded passwords, encrypt sensitive data, handle errors properly, keep software updated, and use secure APIs.",
        "Security Testing: Penetration testing, vulnerability scanning, static testing, and dynamic testing.",
        "Firewalls and IDS: Firewalls control traffic. IDS monitors suspicious activities and attacks.",
        "Human Factors: Weak passwords, phishing clicks, credential sharing, and ignored updates make humans a weak part of security."
      ]
    },
    {
      "group": "Component-Based Software",
      "title": "Component-Based Engineering",
      "summary": "Build systems by selecting, adapting, integrating, and testing reusable components with clear interfaces.",
      "points": [
        "Component: a reusable, self-contained software unit that provides services through an interface.",
        "Interface: a contract describing provided and required operations.",
        "COTS: commercial off-the-shelf software reused when it fits requirements.",
        "Benefits: faster delivery, lower cost, proven functionality, and reuse of tested assets.",
        "Risks: requirements mismatch, version conflicts, integration issues, and vendor dependence."
      ]
    },
    {
      "group": "Dependability",
      "title": "Trustworthy Systems",
      "summary": "Dependability asks whether users can trust software service delivery in real situations.",
      "points": [
        "Core attributes: availability, reliability, safety, security, and maintainability.",
        "Socio-technical systems include software, hardware, people, procedures, and organizational rules.",
        "Fault avoidance prevents faults; fault detection finds faults; fault tolerance keeps service running; fault recovery restores service.",
        "Safety-critical failures may cause injury, loss of life, environmental harm, or major financial loss.",
        "Risk assessment weighs threats, vulnerabilities, likelihood, and impact."
      ]
    },
    {
      "group": "Service-Oriented Architecture",
      "title": "Reusable Services",
      "summary": "SOA organizes functionality as services that communicate through stable contracts.",
      "points": [
        "Service contract: describes operations, inputs, outputs, and expected behavior.",
        "Loose coupling: services minimize direct dependencies on each other.",
        "Service composition: combines services into larger business workflows.",
        "REST and web services are common service communication styles.",
        "SOA supports reuse, interoperability, and distributed business processes."
      ]
    },
    {
      "group": "Software Management",
      "title": "Managing Delivery",
      "summary": "Software management coordinates people, scope, schedule, cost, quality, and risk so projects can be delivered successfully.",
      "points": [
        "Project plan: defines scope, schedule, resources, risks, and deliverables.",
        "Milestones: checkpoints used to monitor progress.",
        "Risk management: identify, analyze, plan responses, and monitor threats to the project.",
        "Quality management: standards, reviews, tests, and process checks.",
        "Leadership: motivate teams, resolve conflicts, manage deadlines, and support collaboration."
      ]
    }
  ],
  "algorithmTechniques": [
    {
      "name": "Waterfall vs Agile",
      "rule": "Stable requirements favor Waterfall; changing requirements favor Agile.",
      "clue": "Look for sequence and complete phases versus sprints and feedback."
    },
    {
      "name": "Reuse vs CBSE",
      "rule": "Reuse is the broad idea; CBSE is building systems from components.",
      "clue": "If the question mentions explicit component interfaces, think CBSE."
    },
    {
      "name": "Reliability vs Availability",
      "rule": "Reliability is correct operation over time; availability is being accessible when needed.",
      "clue": "Failure frequency points to reliability; uptime points to availability."
    },
    {
      "name": "Security Triad",
      "rule": "Confidentiality protects access, integrity protects correctness, availability protects access to service.",
      "clue": "CIA questions usually ask which protection goal is affected."
    },
    {
      "name": "SOA",
      "rule": "Services expose reusable business functions through contracts.",
      "clue": "Loose coupling, contracts, registry, and composition point to SOA."
    },
    {
      "name": "DevOps vs DevSecOps",
      "rule": "DevOps automates delivery; DevSecOps adds continuous security responsibility.",
      "clue": "Security in every pipeline stage means DevSecOps."
    },
    {
      "name": "Microservices",
      "rule": "Small independent services improve deployment flexibility but add distributed complexity.",
      "clue": "Independent services and API communication point to microservices."
    },
    {
      "name": "Software Management",
      "rule": "Management questions focus on people, scope, time, cost, quality, and risk.",
      "clue": "Milestones, project plans, risk logs, and resource allocation are management cues."
    }
  ],
  "sourceNotes": [
    {
      "id": "prelim-exam-live-page-process",
      "source": "Prelim exam live page",
      "title": "Software Process",
      "body": "A software process is a structured set of activities, methods, practices, and transformations used to develop and maintain software systems.\n\nObjective: Produce high-quality software that meets user and business requirements, is delivered on time and within budget, reduces risk, improves maintainability, and enhances team coordination.\n\n## Major Activities\n- Requirements Analysis: Identify what users and stakeholders need. Activities include gathering requirements, interviews, surveys, requirement specifications, and functional/non-functional requirements. Main deliverable: Software Requirements Specification (SRS).\n- System Design: Transforms requirements into a blueprint for implementation. It covers architecture, database structure, interface behavior, and component/module responsibilities.\n- Implementation: Developers translate designs into source code using languages and frameworks such as Java, Python, C#, JavaScript, and PHP.\n- Testing and Debugging: Unit tests check modules independently, integration tests check modules together, and debugging fixes syntax, logic, and runtime errors.\n- Deployment and Maintenance: The completed system is released on servers, app stores, or internal platforms, then maintained as user needs and environments change.\n\n## Process Models\n- Waterfall Model: Sequential and phase-by-phase. Each phase must be completed before the next begins. Best for stable, well-defined requirements.\n- Agile Model: Iterative and flexible. Work is broken into sprints, feedback is continuous, and working software is delivered frequently.\n- Spiral Model: Risk-driven and iterative. Each loop involves refinement and risk analysis, making it useful for large, complex, high-risk systems.\n\n## Modern Development Trends\n- DevOps: Combines development and operations to support continuous delivery and tighter release coordination.\n- CI/CD: Automates testing and deployment so changes can be integrated and released more safely.\n- Cloud-Based Development: Uses platforms such as AWS, Microsoft Azure, and Google Cloud for scalable development and deployment.\n- AI-Assisted Development: Uses AI for code suggestions, automated testing support, and bug detection."
    },
    {
      "id": "prelim-exam-live-page-design",
      "source": "Prelim exam live page",
      "title": "Design and Implementation",
      "body": "Software design converts requirements into detailed representations that guide coding. Implementation turns those designs into operational software.\n\nObjective: Create software that is modular, reusable, scalable, maintainable, efficient, secure, and testable.\n\n## Types of System Design\n- Architectural Design: Defines the overall structure of the system, such as client-server, three-tier, or microservices architecture.\n- Database Design: Defines tables, relationships, and data storage, such as Students, Courses, Faculty, and Enrollment tables.\n- Interface Design: Defines how users interact with the system visually, including login forms, dashboards, and navigation menus.\n- Component Design: Defines internal modules and classes, such as Authentication, Payment, and Report Generation modules.\n\n## Design Principles\n- Abstraction: Hide unnecessary implementation details. Example: ATM users do not need to know the internal banking algorithms.\n- Encapsulation: Combine data and methods into one unit. Example: a Student class stores student data and enrollment methods.\n- Modularity: Divide software into smaller independent modules, such as Inventory, Payment, and Shipping.\n- Low Coupling: Keep module dependencies minimal so changes in one part do not heavily affect others.\n- High Cohesion: Keep each module focused on one clear responsibility.\n\n## UML and Reviews\n- Use Case Diagram: Shows user interactions with the system.\n- Class Diagram: Shows classes, attributes, and relationships.\n- Sequence Diagram: Shows the interaction flow between objects.\n- Activity Diagram: Shows workflow and business processes.\n- ER Diagram: Shows database entity relationships.\n- Code Review: Examines source code to detect bugs early, improve quality, share knowledge, and enforce coding standards.\n- Design Review: Checks whether architecture is scalable, modules are properly designed, and security/performance requirements are addressed."
    },
    {
      "id": "prelim-exam-live-page-evolution",
      "source": "Prelim exam live page",
      "title": "Software Evolution",
      "body": "Software evolution is the continuous process of modifying and updating deployed software to meet changing requirements, technologies, and user needs.\n\nObjective: Keep software useful, secure, efficient, maintainable, and aligned with business and technology changes after deployment.\n\n## Why Software Evolves\n- User Needs Change: Users request new features, better workflows, or improved usability.\n- Business Rules Change: Organizations update policies, pricing, compliance rules, or operating models.\n- Technology Changes: New platforms, operating systems, APIs, and devices require adaptation.\n- Security Threats Emerge: Unpatched vulnerabilities can expose data and systems to attacks.\n- Performance Needs Grow: Software must be optimized as user traffic, data volume, and expectations increase.\n\n## Maintenance Types\n- Corrective Maintenance: Fixes defects and errors, such as a login bug.\n- Adaptive Maintenance: Modifies software for new environments, such as Windows 11 or Android 15.\n- Perfective Maintenance: Improves performance or usability, such as redesigning a website interface.\n- Preventive Maintenance: Improves maintainability and prevents future problems, such as refactoring old code.\n\n## Managing Evolution\n- Lehman's Laws: Software must continue changing, tends to grow in complexity, expands in functionality, and declines in quality without maintenance.\n- Legacy Systems: Old systems still in use, often critical to operations but difficult and costly to maintain.\n- Reengineering: Improves an existing system without changing its core functionality.\n- Refactoring: Restructures code without changing external behavior.\n- Technical Debt: Development shortcuts that create future maintenance problems.\n- Version Control: Tracks history, supports collaboration, enables rollback, and allows branching for parallel work."
    },
    {
      "id": "prelim-exam-live-page-week34",
      "source": "Prelim exam live page",
      "title": "Week 3-4",
      "body": "Week 3-4 covers software reuse plus dependability and security engineering: building systems efficiently while keeping them trustworthy, safe, resilient, and protected.\n\nObjective: Use reusable software assets wisely, evaluate socio-technical systems, apply dependability attributes, and integrate security practices across the software development lifecycle.\n\n## Software Reuse\n- Software Reuse: The process of using existing software assets to develop new systems instead of building everything from scratch.\n- Reusable Assets: Source code, components, libraries, frameworks, documentation, test cases, and designs can all be reused.\n- Types of Reuse: Code reuse, component reuse, framework reuse, service reuse, application system reuse, and object/function reuse.\n- Reusable Components: Self-contained modules designed for multiple systems. Good components are modular, independent, replaceable, and maintainable.\n- Software Product Lines: Collections of related software systems that share common features, such as different versions of accounting software.\n- Reuse Risks: Compatibility issues, maintenance problems, security risks, licensing restrictions, version conflicts, and dependency management problems.\n\n## Dependability and Socio-Technical Systems\n- Socio-Technical System: A system combining software, hardware, people, procedures, and organizational rules.\n- Dependability: The ability of a software system to deliver services that users can trust.\n- Dependability Attributes: Availability, reliability, safety, security, and maintainability.\n- Dependability Engineering: Designing, developing, testing, and maintaining systems to ensure reliability, safety, availability, and security.\n- Fault Techniques: Fault avoidance prevents faults, fault detection finds them, fault tolerance keeps operating despite failures, and fault recovery restores service.\n- Safety-Critical Systems: Systems where failure can cause injury, loss of life, environmental damage, or major financial loss.\n\n## Security Engineering\n- Security Engineering: Designing, developing, testing, and maintaining systems that resist attacks, unauthorized access, and security threats.\n- CIA Triad: Confidentiality, integrity, and availability are the core pillars of software security.\n- Common Threats: Malware, phishing, SQL injection, cross-site scripting, DoS attacks, and password attacks.\n- SSDLC: Security is integrated into requirements, design, implementation, testing, deployment, and maintenance.\n- Threat Modeling: Identifies assets, attackers, vulnerabilities, and prevention strategies before implementation.\n- Modern Security Trends: Cloud security, zero trust, AI-based cybersecurity, and DevSecOps."
    },
    {
      "id": "last-quiz-reviewer-live-page-reuse",
      "source": "Last quiz reviewer live page",
      "title": "Software Reuse",
      "body": "Software reuse is the process of using existing software assets to develop new software systems.\n\nObjective: Improve productivity, reduce development time and cost, improve reliability, encourage standardization, and reduce testing effort.\n\n## Reusable Assets and Importance\n- Reusable Assets: Source code, components, libraries, frameworks, documentation, test cases, and designs can all be reused.\n- Importance: Software reuse saves development time, reduces cost, improves reliability, encourages standardization, and reduces testing effort.\n- Mobile App Example: Developers commonly reuse login modules, payment systems, notification services, and user interface templates.\n\n## Types and Approaches\n- Code Reuse: Reusing existing source code, such as utility functions in multiple projects.\n- Component Reuse: Reusing independent modules, such as authentication components.\n- Framework Reuse: Using frameworks such as ReactJS, Angular, Laravel, or Spring Boot.\n- Service Reuse: Using external services through APIs, such as Google Maps API integration.\n- Application System Reuse: Reusing entire applications, such as a Content Management System.\n- Object and Function Reuse: Reusing classes and functions through utility libraries.\n\n## Quality, Risks, and Trends\n- Reusable Component: A self-contained module designed for multiple systems; it should be modular, independent, replaceable, and maintainable.\n- Software Product Line: A collection of related software systems sharing common features, such as versions of accounting software.\n- Open-Source Reuse: Reuse of open-source software such as Linux, WordPress, and Bootstrap.\n- Reuse Risks: Hidden bugs, security vulnerabilities, poor documentation, version conflicts, and dependency management issues.\n- Modern Trends: Microservices, API economy, and cloud services make reusable functionality easier to provide and consume."
    },
    {
      "id": "last-quiz-reviewer-live-page-advanced",
      "source": "Last quiz reviewer live page",
      "title": "Advanced Software Engineering",
      "body": "Advanced software engineering applies advanced principles, architectures, methodologies, and technologies to large-scale, complex, intelligent, and enterprise systems.\n\nObjective: Design scalable, maintainable, automated, distributed, cloud-based, AI-integrated, high-quality systems.\n\n## Modern System Context\n- Focus Areas: Scalability, maintainability, automation, distributed systems, cloud computing, AI integration, and software quality assurance.\n- Why Organizations Need ASE: Modern systems handle millions of users, real-time data processing, cloud services, global transactions, and critical infrastructures.\n- System Characteristics: Advanced systems are large-scale, distributed, scalable, secure, maintainable, and fault-tolerant.\n- Evolution of Software Engineering: Software engineering evolved from procedural programming to object-oriented, web-based, distributed, cloud-native, and AI-driven systems.\n\n## Methods and Platforms\n- Agile Development: Focuses on iterative development, continuous feedback, collaboration, and rapid delivery.\n- DevOps: Integrates development, operations, and automation for faster deployment, CI, and CD.\n- CI/CD: CI means frequent merges into shared repositories. CD means applications are automatically tested and deployed.\n- Cloud-Native Engineering: Cloud-native applications use elastic scalability, distributed architecture, containerization, and microservices.\n- Containerization: Packages applications with dependencies. Docker is the popular tool in the source.\n- Kubernetes: A container orchestration platform for deployment management, scaling containers, load balancing, and fault recovery.\n\n## Advanced Technologies\n- Microservices: Applications are divided into small independent services such as payment, product, authentication, and delivery services.\n- AI in Software Engineering: AI supports recommendation systems, chatbots, predictive analytics, automated testing, and intelligent automation.\n- Big Data Engineering: Processes massive volumes of data using Hadoop, Spark, and NoSQL databases.\n- Blockchain: A decentralized digital ledger used in cryptocurrency, supply chains, and smart contracts.\n- IoT: Connects physical devices to the internet, such as smart homes, smart watches, and industrial sensors.\n- Emerging Trends: Edge computing, quantum computing, low-code/no-code development, and green software engineering."
    },
    {
      "id": "last-quiz-reviewer-live-page-security",
      "source": "Last quiz reviewer live page",
      "title": "Security Engineering",
      "body": "Security engineering designs, develops, tests, and maintains systems that resist malicious attacks, unauthorized access, and security threats.\n\nObjective: Protect data and systems, prevent unauthorized access, ensure availability, detect and respond to threats, maintain trust, and reduce vulnerabilities.\n\n## Principles and Goals\n- Why It Matters: Software systems manage financial transactions, personal information, government records, medical data, and business operations.\n- Security Failure Impact: Security failure can lead to data theft, financial loss, identity theft, reputation damage, and legal penalties.\n- CIA Triad: Confidentiality limits access to authorized users, integrity keeps data accurate and unaltered, and availability keeps systems operational.\n- Additional Principles: Authentication verifies identity, authorization determines permissions, and non-repudiation prevents denial of performed actions.\n\n## Threats, Vulnerabilities, and SSDLC\n- Common Threats: Malware, phishing, SQL injection, cross-site scripting, and denial-of-service attacks.\n- Vulnerabilities: Weaknesses attackers can exploit, often caused by weak passwords, poor coding, unpatched software, lack of encryption, or misconfigured servers.\n- SSDLC: Security should be integrated into requirements, design, implementation, testing, deployment, and maintenance.\n- Threat Modeling: Identifies assets, attackers, vulnerabilities, and prevention strategies before implementation.\n\n## Protection and Testing\n- Encryption: Converts readable data into unreadable form. Symmetric encryption uses one key; asymmetric encryption uses public and private keys.\n- Authentication Techniques: Password authentication, two-factor authentication, and biometric authentication.\n- Secure Coding: Validate input, use parameterized SQL, avoid hardcoded passwords, encrypt sensitive data, handle errors properly, keep software updated, and use secure APIs.\n- Security Testing: Penetration testing, vulnerability scanning, static testing, and dynamic testing.\n- Firewalls and IDS: Firewalls control traffic. IDS monitors suspicious activities and attacks.\n- Human Factors: Weak passwords, phishing clicks, credential sharing, and ignored updates make humans a weak part of security."
    },
    {
      "id": "advanced-diagram-prompts",
      "source": "Last quiz reviewer live page",
      "title": "Diagram Recall Prompts",
      "body": "Advanced reviewer diagram prompts and expected labels.\n\n- Software Reuse Decision Flow: How to choose and use a reusable asset. Expected: Identify Need, Search Asset, Evaluate Compatibility, Check License and Security, Integrate and Test, Monitor Updates.\n- Software Reuse Approaches: The reuse approaches from the source. Expected: Application System Reuse, Component-Based Reuse, Object and Function Reuse.\n- Software Engineering Evolution: How the field evolved toward advanced systems. Expected: Procedural Programming, Object-Oriented Systems, Web-Based Systems, Distributed Systems, Cloud-Native Systems, AI-Driven Systems.\n- DevOps and CI/CD Flow: The automation path from code change to deployment. Expected: Code Change, Continuous Integration, Automated Testing, Continuous Deployment, Release.\n- Cloud-Native Delivery Flow: How cloud-native applications are packaged and managed. Expected: Microservices, Containerization, Docker Image, Kubernetes Orchestration, Scaling and Load Balancing.\n- Microservices Example: Services that may make up an e-commerce platform. Expected: Authentication Service, Product Service, Payment Service, Delivery Service.\n- SSDLC Flow: Security activities across the software lifecycle. Expected: Requirements: Identify Security Needs, Design: Secure Architecture, Implementation: Secure Coding, Testing: Security Testing, Deployment: Secure Environments, Maintenance: Updates and Patches.\n- Threat Modeling Flow: The questions asked before implementation. Expected: Identify Assets, Identify Attackers, Find Vulnerabilities, Plan Prevention.\n- Security Testing Flow: Common security testing methods. Expected: Static Testing, Dynamic Testing, Vulnerability Scanning, Penetration Testing.\n- Online Banking Security Stack: Security features from the banking example. Expected: Secure Login, OTP Verification, Encryption, Fraud Detection, Session Timeout."
    },
    {
      "id": "upload-1-advanced-software-engineering-part-1",
      "source": "combinedSE2 (1).md",
      "title": "Advanced Software Engineering Part 1",
      "body": "Advanced Software Engineering Part 1: Software Reuse\n\nIntended Learning Outcomes (ILOs)\n\nAt the end of this lesson, the students should be able to:\n\n1.  Explain the concept, advantages, and approaches of software reuse in\n\nsoftware engineering.\n\n2.  Analyze how reusable software components improve software quality and\n\ndevelopment efficiency.\n\n3.  Apply software reuse principles in designing and developing software\n\nsystems.\n\nIntroduction to Software Reuse\n\nDefinition\n\nSoftware reuse is the process of using existing software assets to develop new software systems.\n\nReusable assets may include:\n\n-  Source code\n\n-  Components\n\n-  Libraries\n\n-  Frameworks\n\n-  Documentation\n\n-  Test cases\n\n-  Designs\n\nAccording to Beginning Software Engineering, software reuse improves productivity and reduces development time by avoiding the need to create systems from scratch.\n\nImportance of Software Reuse\n\nSoftware reuse is important because it:\n\n-  Saves development time\n\n-  Reduces cost\n\n-\n\nImproves reliability\n\n-  Encourages standardization\n\n-  Reduces testing effort\n\nExamples of Software Reuse\n\nMobile Application Development\n\nDevelopers commonly reuse:\n\n-  Login modules\n\n-  Payment systems\n\n-  Notification services\n\n-  User interface templates\n\nTypes of Software Reuse\n\n1. Code Reuse\n\nReusing existing source code.\n\nExample:\n\nUsing utility functions in multiple projects.\n\n2. Component Reuse\n\nReusing independent software modules.\n\nExample:\n\nAuthentication components.\n\n3. Framework Reuse\n\nUsing development frameworks.\n\nExamples:\n\n-  ReactJS\n\n-  Angular\n\n-  Laravel\n\n-  Spring Boot\n\n4. Service Reuse\n\nUsing external services through APIs.\n\nExample:\n\nGoogle Maps API integration.\n\nReusable Software Components\n\nA reusable component is a self-contained module designed for use in multiple systems.\n\nCharacteristics:\n\n-  Modular\n\n-\n\nIndependent\n\n-  Replaceable\n\n-  Maintainable\n\nAdvantages of Software Reuse\n\nExplanation\n\nAdvantage Faster Development  Less coding required Reduced Cost Improved Quality Reduced Risk Standardization\n\nLower development expenses Reused components are already tested Proven modules reduce errors Promotes consistency\n\nDisadvantages of Software Reuse\n\nExplanation Components may not fit perfectly\n\nDisadvantage Compatibility Issues Maintenance Problems  Updates may affect systems Security Risks Licensing Issues\n\nVulnerable reused code Legal restrictions\n\nSoftware Reuse Approaches\n\n1. Application System Reuse\n\nEntire applications are reused.\n\nExample:\n\nUsing an existing Content Management System (CMS).\n\n2. Component-Based Reuse\n\nSpecific components are reused.\n\nExample:\n\nPayment gateway integration.\n\n3. Object and Function Reuse\n\nReusing classes and functions.\n\nExample:\n\nUtility libraries.\n\nSoftware Product Lines\n\nDefinition\n\nA software product line is a collection of related software systems sharing common features.\n\nExample:\n\nDifferent versions of accounting software.\n\nOpen-Source Reuse\n\nOrganizations often reuse open-source software.\n\nExamples:\n\n-  Linux\n\n-  WordPress\n\n-  Bootstrap\n\nBenefits:\n\n-  Free usage\n\n-  Community support\n\n-  Rapid development\n\nRisks in Software Reuse\n\n1.  Hidden bugs\n\n2.  Security vulnerabilities\n\n3.  Poor documentation\n\n4.  Version conflicts\n\n5.  Dependency management issues\n\nBest Practices in Software Reuse\n\n1.  Evaluate reusable components carefully\n\n2.  Maintain proper documentation\n\n3.  Use version control\n\n4.  Ensure compatibility\n\n5.  Monitor security updates\n\nModern Trends in Software Reuse\n\nMicroservices\n\nReusable independent services.\n\nAPI Economy\n\nOrganizations provide reusable APIs.\n\nCloud Services\n\nReusable cloud-based infrastructure.\n\nReal-World Example\n\nE-Commerce System\n\nReusable components:\n\n-  Shopping cart\n\n-  Payment gateway\n\n-  User authentication\n\n-  Product catalog\n\nThis significantly reduces development effort.\n\nSoftware reuse allows developers to build software systems more efficiently by reusing existing assets such as code, components, frameworks, and services. Effective reuse improves productivity, software quality, and maintainability while reducing costs and development risks.\n\n---"
    },
    {
      "id": "upload-2-advanced-software-engineering-part-2-2",
      "source": "combinedSE2 (1).md",
      "title": "Advanced Software Engineering Part 2-2",
      "body": "Advanced Software Engineering Part 2\n\nIntended Learning Outcomes (ILOs)\n\nAt the end of this lesson, the students should be able to:\n\n1.  Explain advanced concepts, methodologies, and emerging practices in modern software\n\nengineering.\n\n2.  Analyze advanced software engineering approaches used in developing scalable and enterprise-\n\nlevel systems.\n\n3.  Apply advanced software engineering principles in designing efficient, maintainable, and\n\nmodern software solutions.\n\nIntroduction to Advanced Software Engineering\n\nAdvanced Software Engineering refers to the application of advanced principles, architectures, methodologies, and technologies used in developing large-scale, complex, intelligent, and enterprise- level software systems.\n\nAccording to Software Engineering, advanced software engineering extends beyond traditional programming and focuses on:\n\n-\n\nScalability\n\n-  Maintainability\n\n-  Automation\n\n-  Distributed systems\n\n-  Cloud computing\n\n-  Artificial intelligence integration\n\n-\n\nSoftware quality assurance\n\nModern organizations require advanced software engineering because software systems today handle:\n\n-  Millions of users\n\n-  Real-time data processing\n\n-  Cloud services\n\n-  Global transactions\n\n-  Critical infrastructures\n\nCharacteristics of Advanced Software Systems\n\nAdvanced software systems are typically:\n\nCharacteristic  Description Large-scale Distributed Scalable Secure Maintainable Fault-Tolerant  Continues operating during failures\n\nSupports many users and processes Runs across multiple servers or locations Handles increasing workloads Protects data and operations Easier to update and improve\n\nEvolution of Software Engineering\n\nSoftware engineering evolved from:\n\n-\n\nSimple procedural programming\n\n-  Object-oriented systems\n\n-  Web-based systems\n\n-  Distributed systems\n\n-  Cloud-native systems\n\n-  AI-driven systems\n\nModern Software Engineering Approaches\n\n1. Agile Software Development\n\nAgile focuses on:\n\n-\n\nIterative development\n\n-  Continuous feedback\n\n-  Collaboration\n\n-  Rapid delivery\n\nExample:\n\nMobile app startups release updates every few weeks.\n\n2. DevOps\n\nDevOps integrates:\n\n-  Development\n\n-  Operations\n\n-  Automation\n\nGoals:\n\n-\n\nFaster deployment\n\n-  Continuous integration\n\n-  Continuous delivery\n\nExample Tools:\n\n-\n\nJenkins\n\n-  Docker\n\n-  Kubernetes\n\n-  GitHub Actions\n\nContinuous Integration and Continuous Deployment (CI/CD)\n\nContinuous Integration (CI)\n\nDevelopers frequently merge code changes into shared repositories.\n\nContinuous Deployment (CD)\n\nApplications are automatically tested and deployed.\n\nBenefits:\n\n-\n\nFaster releases\n\n-  Reduced errors\n\n-  Automated workflows\n\nCloud-Native Software Engineering\n\nCloud-native applications are designed specifically for cloud environments.\n\nCharacteristics:\n\n-  Elastic scalability\n\n-  Distributed architecture\n\n-  Containerization\n\n-  Microservices\n\nContainerization\n\nContainerization packages applications with all dependencies.\n\nPopular Tool:\n\n-  Docker\n\nBenefits:\n\n-  Portability\n\n-  Consistency\n\n-  Easier deployment\n\nKubernetes\n\nKubernetes is a container orchestration platform.\n\nFunctions:\n\n-  Deployment management\n\n-\n\n-\n\n-\n\nScaling containers\n\nLoad balancing\n\nFault recovery\n\nMicroservices Architecture\n\nMicroservices divide applications into small independent services.\n\nExample:\n\nAn e-commerce platform may separate:\n\n-  Payment service\n\n-  Product service\n\n-  Authentication service\n\n-  Delivery service\n\nAdvantages of Microservices\n\n1.\n\nIndependent deployment\n\n2.  Easier scalability\n\n3.  Better maintainability\n\n4.  Faster development cycles\n\nChallenges of Microservices\n\n1.  Complex communication\n\n2.  Security concerns\n\n3.  Distributed debugging\n\n4.  Service coordination\n\nArtificial Intelligence in Software Engineering\n\nAI is increasingly integrated into software systems.\n\nApplications:\n\n-  Recommendation systems\n\n-  Chatbots\n\n-  Predictive analytics\n\n-  Automated testing\n\n-\n\nIntelligent automation\n\nExample: AI-Based System\n\nNetflix Recommendation System\n\nUses machine learning to:\n\n-  Analyze user behavior\n\n-  Recommend movies\n\n-\n\nImprove user experience\n\nBig Data Engineering\n\nModern systems process massive volumes of data.\n\nTechnologies:\n\n-  Hadoop\n\n-\n\nSpark\n\n-  NoSQL databases\n\nExample:\n\nSocial media platforms processing millions of posts daily.\n\nBlockchain in Software Engineering\n\nBlockchain is a decentralized digital ledger.\n\nApplications:\n\n-  Cryptocurrency\n\n-\n\n-\n\nSupply chain systems\n\nSmart contracts\n\nInternet of Things (IoT)\n\nDefinition\n\nIoT connects physical devices to the internet.\n\nExamples:\n\n-\n\nSmart homes\n\n-\n\n-\n\nSmart watches\n\nIndustrial sensors\n\nChallenges in Advanced Software Engineering\n\n1.\n\nIncreasing system complexity\n\n2.  Security threats\n\n3.  High infrastructure costs\n\n4.  Rapid technological changes\n\n5.  Scalability management\n\n6.  Data privacy concerns\n\nBest Practices in Advanced Software Engineering\n\n1.  Use modular architectures\n\n2.  Automate testing and deployment\n\n3.  Apply secure coding practices\n\n4.  Monitor system performance\n\n5.  Maintain proper documentation\n\n6.  Use version control systems\n\n7.  Conduct regular code reviews\n\nReal-World Example\n\nAmazon E-Commerce Platform\n\nUses:\n\n-  Cloud computing\n\n-  Distributed systems\n\n-  AI recommendations\n\n-  Microservices\n\n-  Automated deployment\n\nThis enables Amazon to serve millions of users worldwide.\n\nEmerging Trends\n\nEdge Computing\n\nProcessing data closer to users or devices.\n\nQuantum Computing\n\nAdvanced computing using quantum mechanics.\n\nLow-Code/No-Code Development\n\nAllows faster application development with minimal coding.\n\nGreen Software Engineering\n\nFocuses on energy-efficient software systems.\n\nAdvanced software engineering focuses on modern methodologies, architectures, and technologies used in developing scalable, reliable, secure, and intelligent software systems. Technologies such as cloud computing, microservices, DevOps, AI, and distributed systems play critical roles in modern software engineering practices.\n\n---"
    },
    {
      "id": "upload-3-componentsbasedsoftware",
      "source": "combinedSE2 (1).md",
      "title": "ComponentsBasedSoftware",
      "body": "Components-Based Software Engineering; Distributed Software Engineering\n\nIntended Learning Outcomes (ILOs)\n\nAt the end of this lesson, the students should be able to:\n\n1.  Explain the concepts and principles of component-based and distributed software\n\nengineering.\n\n2.  Analyze the advantages, challenges, and applications of distributed and component-\n\nbased systems.\n\n3.  Apply component-based and distributed software engineering concepts in designing\n\nmodern software architectures.\n\nComponents-Based Software Engineering (CBSE)\n\nDefinition\n\nComponent-Based Software Engineering (CBSE) is an approach to software development that focuses on building systems using reusable software components.\n\nAccording to Object Oriented Software Engineering, CBSE promotes modularity, reusability, and maintainability by integrating independent components into larger systems.\n\nSoftware Component\n\nA software component is a modular, reusable, and replaceable part of a system.\n\nCharacteristics:\n\n-\n\nIndependent\n\n-  Encapsulated\n\n-  Reusable\n\n-  Replaceable\n\nExamples of Software Components\n\n-\n\nLogin modules\n\n-  Payment systems\n\n-  Reporting tools\n\n-  Notification services\n\nAdvantages of CBSE\n\nExplanation\n\nAdvantage Faster Development  Components already exist Reduced Cost Improved Reliability  Reused components are tested Easier Maintenance  Components can be updated independently\n\nLess development effort\n\nChallenges of CBSE\n\n1.  Compatibility issues\n\n2.  Integration complexity\n\n3.  Security concerns\n\n4.  Version conflicts\n\nCBSE Architecture\n\nSystems are divided into:\n\n-  Front-end components\n\n-  Business logic components\n\n-  Database components\n\n-  Service components\n\nExample of CBSE\n\nOnline Learning System\n\nComponents:\n\n-  User authentication\n\n-  Video streaming\n\n-  Quiz module\n\n-  Payment integration\n\nEach component can be developed or updated separately.\n\nDistributed Software Engineering\n\nDefinition\n\nDistributed software engineering focuses on developing systems whose components operate across multiple computers or networked environments.\n\nDistributed systems communicate through networks to perform tasks collaboratively.\n\nExamples of Distributed Systems\n\n-  Cloud computing systems\n\n-  Online multiplayer games\n\n-  Banking networks\n\n-  Social media platforms\n\nCharacteristics of Distributed Systems\n\n1. Resource Sharing\n\nResources are shared among multiple users.\n\n2. Scalability\n\nSystems can grow by adding more machines.\n\n3. Concurrency\n\nMultiple users access systems simultaneously.\n\n4. Fault Tolerance\n\nSystems continue operating despite failures.\n\nDistributed System Architecture\n\nClient-Server Architecture\n\nClients request services from servers.\n\nExample:\n\nWeb browsers accessing websites.\n\nPeer-to-Peer Architecture\n\nEach node acts as both client and server.\n\nExample:\n\nFile-sharing systems.\n\nCloud Architecture\n\nServices hosted on distributed cloud infrastructure.\n\nExamples:\n\n-  AWS\n\n-  Microsoft Azure\n\n-  Google Cloud\n\nAdvantages of Distributed Systems\n\nAdvantage Scalability Resource Sharing Reliability Improved Performance  Tasks distributed across systems\n\nExplanation Easily supports growth Shared services and storage Failure in one node may not stop the system\n\nChallenges of Distributed Systems\n\n1.  Network failures\n\n2.  Security risks\n\n3.  Synchronization issues\n\n4.  Data consistency problems\n\n5.  Complex debugging\n\nMiddleware in Distributed Systems\n\nDefinition\n\nMiddleware is software that enables communication between distributed components.\n\nExamples:\n\n-  Message brokers\n\n-  API gateways\n\n-  Remote Procedure Calls (RPC)\n\nDistributed Databases\n\nDistributed systems often use distributed databases.\n\nExamples:\n\n-  MongoDB\n\n-  Cassandra\n\n-  Google Spanner\n\nCloud Computing and Distributed Engineering\n\nCloud computing heavily relies on distributed systems.\n\nCloud Service Models:\n\n-\n\nInfrastructure as a Service (IaaS)\n\n-  Platform as a Service (PaaS)\n\n-  Software as a Service (SaaS)\n\nMicroservices Architecture\n\nDefinition\n\nMicroservices divide applications into small independent services.\n\nBenefits:\n\n-\n\nIndependent deployment\n\n-  Scalability\n\n-  Easier maintenance\n\nExample:\n\nNetflix architecture.\n\nReal-World Example\n\nE-Commerce Platform\n\nDistributed components:\n\n-  Web servers\n\n-  Payment services\n\n-\n\nInventory databases\n\n-  Recommendation systems\n\nUsers worldwide can access services simultaneously.\n\nSecurity in Distributed Systems\n\nSecurity measures include:\n\n-  Encryption\n\n-  Secure APIs\n\n-  Authentication\n\n-  Access control\n\n-  Firewalls\n\nBest Practices in Distributed Software Engineering\n\n1.  Design scalable architectures\n\n2.  Use secure communication protocols\n\n3.  Implement fault tolerance\n\n4.  Monitor distributed services\n\n5.  Use automated deployment tools\n\nComponent-Based Software Engineering focuses on building systems from reusable and modular components, while Distributed Software Engineering focuses on systems operating across multiple networked computers. These approaches support scalability, maintainability, reliability, and flexibility in modern software development.\n\n---"
    },
    {
      "id": "upload-4-dependability-and-security",
      "source": "combinedSE2 (1).md",
      "title": "Dependability and Security",
      "body": "Dependability & Security\n\nIntended Learning Outcomes (ILOs)\n\nAt the end of this lesson, the students should be able to:\n\n1.  Explain the concepts of socio-technical systems, dependability, and software security in modern\n\ncomputing environments.\n\n2.  Analyze the importance of dependability engineering in ensuring reliable and secure software\n\nsystems.\n\n3.  Apply basic dependability and security principles in evaluating and designing software systems.\n\nIntroduction to Dependability and Security\n\nModern software systems are deeply integrated into society and are used in critical environments such as:\n\n-  Banking systems\n\n-  Healthcare systems\n\n-  Transportation systems\n\n-  E-commerce platforms\n\n-  Government systems\n\n-  Cloud services\n\nBecause software systems now handle sensitive data and mission-critical operations, they must be both dependable and secure.\n\nAccording to Software Engineering, dependable software systems are systems that users can trust to operate correctly, safely, and securely even under unexpected conditions.\n\nSecurity and dependability are closely related because users cannot trust a system that is vulnerable to failures, attacks, or unauthorized access.\n\nSocio-Technical Systems\n\nDefinition\n\nA socio-technical system is a system that combines:\n\n-\n\nSoftware\n\n-  Hardware\n\n-  Human users\n\n-  Organizational procedures\n\n-  Policies and regulations\n\nThe performance of the system depends not only on technology but also on human and organizational interactions.\n\nAccording to Introduction to Software Engineering, socio-technical systems emphasize that software systems operate within social and organizational environments.\n\nComponents of a Socio-Technical System\n\n1. Hardware\n\nPhysical devices used in the system.\n\nExamples:\n\n-\n\nServers\n\n-  Computers\n\n-  Mobile devices\n\n-  Routers\n\n2. Software\n\nPrograms and applications used by the organization.\n\nExamples:\n\n-  Payroll systems\n\n-\n\nInventory systems\n\n-  Mobile applications\n\n3. People\n\nUsers, developers, administrators, and stakeholders.\n\nExamples:\n\n-  Customers\n\n-\n\nIT personnel\n\n-  Managers\n\n-\n\nSoftware engineers\n\n4. Procedures\n\nPolicies and operational processes.\n\nExamples:\n\n-  Backup procedures\n\n-\n\n-\n\nLogin protocols\n\nSecurity policies\n\n5. Organizational Rules\n\nStandards and regulations governing the system.\n\nExamples:\n\n-  Data privacy laws\n\n-  Company policies\n\n-  Ethical standards\n\nExample of a Socio-Technical System\n\nHospital Information System\n\nComponents:\n\n-  Doctors and nurses (people)\n\n-  Medical software (software)\n\n-  Medical equipment and servers (hardware)\n\n-  Patient privacy policies (procedures)\n\n-  Government healthcare regulations (organizational rules)\n\nThe system succeeds only if all components work together properly.\n\nDependability\n\nDefinition\n\nDependability refers to the ability of a software system to deliver services that users can trust.\n\nA dependable system performs correctly, consistently, safely, and securely.\n\nAccording to What Every Engineer Should Know About Software Engineering, dependability is one of the most important quality attributes of software systems, especially for critical applications.\n\nAttributes of Dependability\n\n1. Availability\n\nThe system is operational and accessible when needed.\n\nExample:\n\nAn online banking system available 24/7.\n\n2. Reliability\n\nThe system performs correctly without failure over time.\n\nExample:\n\nAn ATM consistently processes transactions accurately.\n\n3. Safety\n\nThe system avoids causing harm or damage.\n\nExample:\n\nAn aircraft control system preventing dangerous operations.\n\n4. Security\n\nThe system protects against unauthorized access and attacks.\n\nExample:\n\nA system using encryption and authentication.\n\n5. Maintainability\n\nThe system can be repaired or updated efficiently.\n\nExample:\n\nDevelopers can quickly fix bugs in the software.\n\nSecurity in Software Engineering\n\nDefinition\n\nSoftware security refers to the protection of software systems and data against unauthorized access, misuse, attacks, and damage.\n\nSecurity ensures:\n\n-  Confidentiality\n\n-\n\nIntegrity\n\n-  Availability\n\nThese are commonly known as the CIA Triad.\n\nCIA Triad\n\n1. Confidentiality\n\nEnsures that only authorized users can access information.\n\nExample:\n\nPassword-protected accounts.\n\n2. Integrity\n\nEnsures that data is accurate and unaltered.\n\nExample:\n\nBank transaction records cannot be modified illegally.\n\n3. Availability\n\nEnsures that systems and data are accessible when needed.\n\nExample:\n\nCloud services remaining operational during peak usage.\n\nCommon Security Threats\n\n1. Malware\n\nMalicious software designed to damage systems.\n\nTypes:\n\n-  Viruses\n\n-  Worms\n\n-  Ransomware\n\n-\n\nSpyware\n\n2. Phishing\n\nFraudulent attempts to steal sensitive information.\n\nExample:\n\nFake banking emails requesting passwords.\n\n3. SQL Injection\n\nAttackers insert malicious SQL commands into forms.\n\nExample:\n\nManipulating a login form to bypass authentication.\n\n4. Denial-of-Service (DoS) Attack\n\nOverwhelms a server to make services unavailable.\n\n5. Password Attacks\n\nAttempts to guess or steal passwords.\n\nExamples:\n\n-  Brute-force attacks\n\n-  Credential theft\n\nReal-World Example of Security Failure\n\nFacebook Data Breach\n\nMillions of user accounts were compromised due to security vulnerabilities.\n\nEffects:\n\n-\n\n-\n\nLoss of user trust\n\nFinancial penalties\n\n-  Privacy concerns\n\nThis demonstrates the importance of secure software engineering practices.\n\nDependability Engineering\n\nDefinition\n\nDependability engineering is the process of designing, developing, testing, and maintaining systems to ensure reliability, safety, availability, and security.\n\nAccording to The Essence of Software Engineering, dependability engineering aims to minimize system failures and reduce risks.\n\nGoals of Dependability Engineering\n\n1.  Prevent software failures\n\n2.  Reduce system downtime\n\n3.  Protect sensitive information\n\n4.  Ensure system safety\n\n5.\n\nImprove software reliability\n\n6.\n\nIncrease user trust\n\nTechniques in Dependability Engineering\n\n1. Fault Avoidance\n\nPreventing faults during development.\n\nMethods:\n\n-  Good design practices\n\n-  Coding standards\n\n-  Developer training\n\n2. Fault Detection\n\nIdentifying faults before deployment.\n\nMethods:\n\n-  Testing\n\n-  Code reviews\n\n-\n\nStatic analysis\n\n3. Fault Tolerance\n\nAllowing systems to continue operating despite failures.\n\nExample:\n\nBackup servers automatically replacing failed servers.\n\n4. Fault Recovery\n\nRestoring systems after failure.\n\nExample:\n\nDatabase backup restoration.\n\nReliability Engineering\n\nReliability engineering focuses on reducing failures and improving operational performance.\n\nCommon Techniques:\n\n-  Redundant systems\n\n-  Error detection\n\n-  Automated monitoring\n\n-  Preventive maintenance\n\nSafety-Critical Systems\n\nDefinition\n\nSafety-critical systems are systems where failure may result in:\n\n-\n\nInjury\n\n-\n\nLoss of life\n\n-  Environmental damage\n\n-\n\nFinancial loss\n\nExamples of Safety-Critical Systems\n\nSystem Aircraft Control System Hospital Monitoring System Nuclear Power Plant System  Environmental disaster Autonomous Vehicle System  Road accidents\n\nPossible Consequence of Failure Plane crash Incorrect patient treatment\n\nSecurity Engineering Practices\n\n1. Authentication\n\nVerifying user identity.\n\nExamples:\n\n-  Passwords\n\n-  Biometrics\n\n-  Two-factor authentication (2FA)\n\n2. Authorization\n\nDetermining user permissions.\n\nExample:\n\nOnly administrators can delete records.\n\n3. Encryption\n\nProtecting data through encoding.\n\nExample:\n\nHTTPS encryption for websites.\n\n4. Backup and Recovery\n\nProtecting data against loss.\n\nExample:\n\nCloud backups and disaster recovery systems.\n\n5. Secure Coding\n\nWriting code that minimizes vulnerabilities.\n\nExamples:\n\n-\n\nInput validation\n\n-  Parameterized SQL queries\n\n-  Avoiding hardcoded passwords\n\nHuman Factors in Dependability\n\nHuman errors can affect system reliability and security.\n\nExamples:\n\n-  Weak passwords\n\n-  Misconfigured servers\n\n-  Accidental deletion of files\n\n-\n\nIgnoring software updates\n\nThis is why user training and organizational policies are important in socio-technical systems.\n\nRisk Assessment\n\nDefinition\n\nRisk assessment identifies:\n\n-  Potential threats\n\n-  Vulnerabilities\n\n-\n\n-\n\nLikelihood of failure\n\nImpact of attacks\n\nExample of Risk Assessment\n\nThreat Data Breach Server Failure Malware Attack  Data corruption\n\nImpact Mitigation Loss of customer data  Encryption Service downtime\n\nBackup servers Antivirus software\n\nModern Trends in Dependability and Security\n\nCloud Security\n\nProtecting cloud-based applications and services.\n\nZero Trust Security\n\nNo user or device is automatically trusted.\n\nArtificial Intelligence in Cybersecurity\n\nAI detects suspicious activities and threats.\n\nDevSecOps\n\nSecurity integrated into the software development lifecycle.\n\nChallenges in Dependability and Security\n\n1.  Rapidly evolving cyber threats\n\n2.\n\nIncreasing software complexity\n\n3.  Human errors\n\n4.  Limited security awareness\n\n5.  Balancing security with usability\n\n6.  High cost of security implementation\n\nBest Practices for Dependable and Secure Systems\n\n1.  Conduct regular testing\n\n2.  Use strong authentication\n\n3.  Apply software updates regularly\n\n4.  Perform code reviews\n\n5.  Use encrypted communication\n\n6.\n\nImplement backup strategies\n\n7.  Train users on cybersecurity awareness\n\n8.  Monitor systems continuously\n\nCase Study Example\n\nOnline Banking System\n\nDependability Requirements:\n\n-  24/7 availability\n\n-  Accurate transactions\n\n-\n\nFast response time\n\nSecurity Requirements:\n\n-  Encrypted transactions\n\n-  Multi-factor authentication\n\n-\n\nFraud detection systems\n\nDependability Engineering Techniques:\n\n-  Redundant servers\n\n-  Automated backups\n\n-  Continuous monitoring\n\nImportance of Dependability and Security\n\nDependability and security are essential because modern organizations rely heavily on software systems. Failures or attacks may lead to:\n\n-\n\nFinancial loss\n\n-  Reputation damage\n\n-\n\nLegal consequences\n\n-  Operational disruption\n\n-\n\nLoss of human lives in critical systems\n\nDependability and security ensure that software systems remain reliable, safe, and trustworthy. Socio- technical systems highlight the interaction between people, technology, and organizations in modern computing environments. Through dependability engineering, software engineers apply techniques such as fault tolerance, secure coding, testing, and risk assessment to build systems that can operate effectively and securely even in complex and critical situations.\n\n---"
    },
    {
      "id": "upload-5-midterm-1-dependability-security",
      "source": "combinedSE2 (1).md",
      "title": "Midterm 1_dependability_security",
      "body": "Software Engineering Socio-Technical Systems, Dependability & Security Building software systems that are trustworthy, safe, and resilient. Dependability Security CIA Triad Fault Tolerance Khaela Lee, MIT\n\nWhy Dependability & Security Matter Modern software is embedded in society's most critical systems. Failure is not just inconvenient —it can be catastrophic. Critical Environments Where Software Must Be Dependable and Secure: 🏦 Banking Systems 🏥 Healthcare Systems ✈️ Transportation Systems 🛒 E-Commerce Platforms ️ Government Systems ☁️ Cloud Services Dependable and secure software = systems that users can trust to operate correctly, safely, and securely —even under unexpected conditions.\n\nSocio-Technical Systems Definition: A system that combines software, hardware, human users, organizational procedures, and policies — where performance depends on both technology AND human interactions. Five Components | ️        | 💻        | 👥      | 📋          | ⚖️         | | -------- | -------- | ------ | ---------- | ---------- | | Hardware | Software | People | Procedures | Org. Rules | Servers, computers,  Payroll, inventory,  Customers, IT  Backup protocols,  Data privacy laws, routers, mobile  and mobile  personnel, managers,  login policies, security  company standards, | devices | applications | engineers | rules | ethics | | ------- | ------------ | --------- | ----- | ------ | ⚠️ The system succeeds ONLY if ALL five components work together. A failure in any one —including human error —can bring the entire system down.\n\nExample: Hospital Information System A hospital system is a perfect example of a socio-technical system —every component must function together to protect patient lives. 👥 People Doctors, nurses, administrators, IT staff 💊 Software Electronic health records, scheduling systems, diagnostic tools ️ Hardware Medical equipment, servers, workstations, network devices 📋 Procedures Patient privacy protocols, emergency response procedures ⚖️ Org. Rules Government healthcare regulations, data privacy laws (HIPAA/DPA) If any one of these fails —a wrong dosage in the software, a server crash, or a nurse bypassing protocol —the result can be fatal.\n\nDependability & Its Five Attributes Dependability: The ability of a software system to deliver services that users can trust —performing correctly, consistently, safely, and securely. ️ Availability ✅ Reliability ️ Safety Performs correctly without failure System is operational when needed. Avoids causing harm or damage. over time. e.g. ATM consistently processes e.g. Aircraft control prevents dangerous e.g. Online banking available 24/7 transactions operations 🔒 Security 🔧 Maintainability Protects against unauthorized access Can be repaired or updated and attacks. efficiently. e.g. Developers can quickly fix software e.g. Encryption and authentication systems bugs\n\nSoftware Security & the CIA Triad Software security protects systems and data against unauthorized access, misuse, attacks, and damage. The three pillars are the CIA Triad. |                 | C   |           | I   |              | A   | | --------------- | --- | --------- | --- | ------------ | --- | | Confidentiality |     | Integrity |     | Availability |     | Only authorized users can access  Data is accurate, complete, and  Systems and data are accessible | information. |     | unaltered. |     | when needed. |     | | ------------ | --- | ---------- | --- | ------------ | --- | e.g. Password-protected accounts, role- e.g. Bank transaction records cannot be  e.g. Cloud services remain operational | based access control |     | modified illegally |     | during peak usage |     | | -------------------- | --- | ------------------ | --- | ----------------- | --- |\n\nCommon Security Threats | ️ Malware | 🎣 Phishing | 💉 SQL Injection | | --------- | ---------- | --------------- | Malicious software —viruses,  Fraudulent attempts to steal sensitive Attackers insert malicious SQL | worms, ransomware, spyware — | info via fake emails or websites.  |     | | ---------------------------- | ---------------------------------- | --- | commands into input forms to bypass | designed to damage or gain  | Example: fake banking emails  |     | | --------------------------- | ----------------------------- | --- | authentication or steal database data. | unauthorized access to systems. | requesting passwords. |     | | ------------------------------- | --------------------- | --- | 🌊 DoS Attack 🔓 Password Attacks Denial-of-Service attack overwhelms  Brute-force attempts to guess a server with traffic, making services  passwords or credential theft unavailable to legitimate users. through data breaches or keylogging.\n\nReal-World Example: Facebook Data Breach What happens when security fails in a system used by billions of people? What happened: Millions of Facebook user accounts were compromised due to security vulnerabilities in their platform, exposing personal data including names, phone numbers, and email addresses. The Effects: |                    | 😡   |                     | 💸   |                  | 🔓   | | ------------------ | --- | ------------------- | --- | ---------------- | --- | | Loss of User Trust |     | Financial Penalties |     | Privacy Concerns |     | Hundreds of millions of users  Facebook was fined billions of dollars  Exposed the fragility of personal data questioned whether the platform was  by regulatory bodies for failing to  and triggered global data protection |     | safe to use. | protect user data. |     |     | debates. | | --- | ------------ | ------------------ | --- | --- | -------- | This is why secure software engineering practices are not optional —they are essential.\n\nDependability Engineering Definition: The process of designing, developing, testing, and maintaining systems to ensure reliability, safety, availability, and security —minimizing failures and reducing risks. Six Goals Four Techniques Fault Avoidance 1 Prevent software failures Prevent faults during development —good design, coding standards, training. 2 Reduce system downtime Fault Detection Identify faults before deployment —testing, code reviews, 3 Protect sensitive information static analysis. Fault Tolerance 4 Ensure system safety Continue operating despite failures —backup servers replace failed ones. 5 Improve software reliability Fault Recovery 6 Increase user trust Restore systems after failure —database backup restoration.\n\nSafety-Critical Systems Safety-critical systems are systems where failure may result in injury, loss of life, environmental damage, or catastrophic financial loss. ✈️ Aircraft Control System 🏥 Hospital Monitoring System Failure consequence: Plane crash causing mass Failure consequence: Incorrect patient treatment or casualties wrong dosage ☢️ Nuclear Power Plant System 🚗 Autonomous Vehicle System Failure consequence: Environmental disaster / Failure consequence: Road accidents and pedestrian meltdown fatalities In safety-critical systems, dependability engineering is not optional —it is a matter of life and death.\n\nSecurity Engineering Practices 🔐 Authentication 🛂 Authorization Verify user identity before granting access. Determine what each user is permitted to do. e.g. Passwords, biometrics, 2FA e.g. Only admins can delete records 🔒 Encryption 💾 Backup & Recovery Protect data through encoding so only authorized parties Protect data against loss through copies and restoration can read it. plans. e.g. HTTPS, TLS, end-to-end encryption e.g. Cloud backups, disaster recovery 👨💻 Secure Coding Write code that minimizes vulnerabilities from the ground up. e.g. Input validation, parameterized queries, no hardcoded passwords\n\nHuman Factors & Risk Assessment 👤 Human Factors in Dependability ⚠️ Risk Assessment Identifies threats, vulnerabilities, likelihood of failure, Human errors are one of the most common causes of and impact. system failures and security breaches. Threat Impact Mitigation Using weak or repeated passwords Loss of Data Breach Encryption Misconfiguring servers incorrectly customer data Accidentally deleting important files Service Server Failure Backup servers downtime Ignoring critical software updates Malware This is why user training and organizational policies are critical Data corruption Antivirus software Attack in socio-technical systems.\n\nBest Practices for Dependable & Secure Systems 🧪 Conduct regular testing throughout development 🔐 Use strong multi-factor authentication 🔄 Apply software updates and patches regularly 👀 Perform code reviews before every release 🔒 Use encrypted communication (HTTPS/TLS) 💾 Implement automated backup strategies 🎓 Train users on cybersecurity awareness 📊 Monitor systems continuously in production\n\nModern Trends in Dependability & Security ☁️ Cloud Security 🚫 Zero Trust Security As systems migrate to cloud platforms, security must No user or device is automatically trusted —even those follow. Cloud security involves protecting cloud-hosted inside the network. Every access request is verified applications, storage, and services from unauthorized continuously. 'Never trust, always verify' is the guiding access and breaches. principle. ️ AI in Cybersecurity 🔐 DevSecOps Artificial intelligence detects suspicious patterns and Security is integrated into every stage of the development threats in real time —identifying attacks that rule-based pipeline —from coding to deployment. Security testing is systems would miss, faster than any human analyst. automated and continuous, not a final-stage checklist.\n\nCase Study: Online Banking System How do dependability and security requirements come together in one real-world system? Dependability Requirements Security Requirements Engineering Techniques Applied 24/7 availability —customers All transactions encrypted end- Redundant servers to eliminate need access at all times to-end single points of failure Accurate transaction processing Multi-factor authentication for Automated backups every hour —no errors in amounts every login with offsite storage Fast response time — Real-time fraud detection and Continuous performance and transactions complete in seconds transaction monitoring security monitoring This case study shows that dependability and security are not separate concerns —they are two sides of the same coin in critical systems.\n\nSummary & Key Takeaways 1 Socio-technical systems combine hardware, software, people, procedures, and rules —all five must work together. 2 Dependability has five attributes: Availability, Reliability, Safety, Security, and Maintainability. 3 The CIA Triad —Confidentiality, Integrity, Availability —is the foundation of software security. 4 Dependability engineering uses fault avoidance, detection, tolerance, and recovery to minimize failures. Safety-critical system failures can cause injury, death, or environmental disasters —making dependability non- 5 negotiable. Modern threats include malware, phishing, SQL injection, DoS attacks, and password breaches —requiring active 6 defense.\n\n---"
    },
    {
      "id": "upload-6-prelim-1-software-process-v2",
      "source": "combinedSE2 (1).md",
      "title": "Prelim 1_software_process_v2",
      "body": "<!-- Slide number: 1 -->\n\nSoftware Engineering Software Process Review of Design & Implementation A structured framework for building high-quality software systems\n\nRequirements\n\nDesign\n\nImplementation\n\nKhaela Lee, MIT\n\n### Notes:\n\n<!-- Slide number: 2 -->\n\nWhat is a Software Process?\n\nDefinition: A structured set of activities, methods, practices, and transformations used to develop and maintain software systems. Core Objectives\n\nProduce High-Quality Software\n\nMeet User & Business Requirements\n\nDeliver On Time & Within Budget\n\nImprove Maintainability\n\nReduce Development Risks\n\nEnhance Team Coordination\n\n### Notes:\n\n<!-- Slide number: 3 -->\n\nMajor Activities in a Software Process\n\n1\n\n2\n\n3\n\n4\n\n5\n\nRequirements Analysis\n\nSystem Design\n\nImplementation (Coding)\n\nTesting & Debugging\n\nDeployment & Maintenance\n\nGather requirements, create SRS document Architectural, DB, UI, & component design Write source code in Java, Python, PHP, etc. Unit, integration & debugging phases Release on app stores or web servers\n\nSoftware Requirements Specification (SRS) — produced at the end of the Requirements Analysis phase.\n\n### Notes:\n\n<!-- Slide number: 4 -->\n\nSystem Design: Four Types Design transforms requirements into a blueprint for implementation.\n\nArchitectural Design\n\nDatabase Design\n\nDefines the overall structure of the system (e.g., client-server, three-tier, microservices). Defines tables, relationships, and data storage (e.g., Students, Courses, Faculty, Enrollment).\n\nInterface Design\n\nComponent Design\n\nDefines how users interact with the system (e.g., login forms, dashboards, navigation menus). Defines modules and classes (e.g., Authentication, Payment, Report generation).\n\n### Notes:\n\n<!-- Slide number: 5 -->\n\nSystem Design: Architectural Design\n\nDefines the overall structure and organization of the system Key Points:\n\nMicroservices Architecture — Independent services that communicate via APIs Client-Server Architecture — Client sends requests; server processes and responds Three-Tier Architecture — Presentation, Business Logic, and Data layers\n\n![Microservices architecture and design: A complete overview - vFunction](Picture8.jpg)\n\n![](Picture21.jpg)\n\n![](Picture15.jpg)\n\n### Notes:\n\n<!-- Slide number: 6 -->\n\nSystem Design: Architectural Design\n\n![](Picture11.jpg)\n\nExample: A university enrollment system may use a three-tier architecture with a web frontend, application server, and database server. [ Insert Image Here ]\n\n### Notes:\n\n<!-- Slide number: 7 -->\n\nSystem Design: Database Design Defines tables, relationships, and how data is stored\n\n![E-R diagram of student management system | Download Scientific Diagram](Picture4.jpg) Key Points: Students Table — stores student ID, name, and contact information Courses Table — stores course codes, titles, and units Faculty Table — stores instructor details and department assignments Enrollment Table — links students and courses with enrollment status\n\n[ Insert Image Here ]\n\n💡 Example: A student management system uses an ER diagram to map entities and define primary/foreign keys.\n\n### Notes:\n\n<!-- Slide number: 8 -->\n\nSystem Design: Interface Design Defines how users interact with the system visually\n\n![](Picture11.jpg)\n\nKey Points: Login Forms — input fields for username, password, and submit button Dashboard Layout — displays summary information and navigation links Navigation Menus — sidebar or top-bar links to different sections [ Insert Image Here ]\n\n### Notes:\n\n<!-- Slide number: 9 -->\n\nSystem Design: Component Design Defines the internal modules, classes, and responsibilities Key Points: Authentication Module — handles login, logout, session management Payment Module — processes transactions and validates payment data Report Generation Module — compiles and exports data as PDFs or Excel files\n\n### Notes:\n\n<!-- Slide number: 10 -->\n\nSoftware Design Principles\n\nGood design emphasizes: Modularity · Reusability · Scalability · Maintainability · Efficiency\n\nAbstraction\n\nEncapsulation\n\nModularity\n\nHide unnecessary details. Users interact with an ATM without knowing the internal banking algorithms. Combine data & methods in one unit. A Student class holds name, ID, and enrollment methods. Divide software into smaller independent modules: Inventory, Payment, Shipping.\n\nLow Coupling\n\nHigh Cohesion\n\nModules have minimal dependency on one another for flexibility and easier updates. Each module focuses on one specific responsibility for clarity and maintainability.\n\n### Notes:\n\n<!-- Slide number: 11 -->\n\nUnified Modeling Language (UML) UML is used to visualize software designs before coding begins.\n\nUse Case Diagram\n\nShows user interactions with the system\n\nClass Diagram\n\nShows classes, attributes, and relationships\n\nSequence Diagram\n\nShows interaction flow between objects\n\nActivity Diagram\n\nShows workflow and business processes\n\nER Diagram\n\nShows database entity relationships\n\nExample — Online Shopping System Actors: Customer, Admin, Payment Gateway  |  Use Cases: Register, Browse, Add to Cart, Checkout, Pay\n\n### Notes:\n\n<!-- Slide number: 12 -->\n\nSoftware Implementation Translating design documents into executable programs using programming languages, frameworks, and tools.\n\n1\n\nCoding — Java, Python, C#, JavaScript, PHP — e.g. user auth, password hashing, sessions\n\n2\n\nUnit Testing — Each module tested independently — valid logins accepted, invalid rejected\n\n3\n\nIntegration Testing — Multiple modules tested together — payment updates inventory correctly\n\n4\n\nDebugging — Identify and fix syntax errors, logical errors, and runtime errors\n\n### Notes:\n\n<!-- Slide number: 13 -->\n\nSoftware Process Model: Waterfall Model A sequential, phase-by-phase development approach\n\n![Waterfall Methodology. Waterfall Methodology | by Chathmini Jayathilaka | Medium](Picture2.jpg) Characteristics Each phase must be completed before the next begins Progress flows in one direction — like a waterfall Requirements are defined fully at the start Documentation is produced at every phase [ Insert Image Here ]\n\n✔ Advantages\n\n✗ Disadvantages\n\nSimple and structured Easy to manage and understand Clear milestones and deliverables Difficult to accommodate requirement changes Testing happens late in development Not suitable for complex or evolving projects\n\nBest for: Projects with stable, well-defined requirements (e.g., government systems, construction software)\n\n### Notes:\n\n<!-- Slide number: 14 -->\n\nSoftware Process Model: Agile Model An iterative and flexible development approach\n\nCharacteristics Development is broken into short cycles called sprints Continuous feedback from stakeholders throughout Working software is delivered frequently Teams adapt quickly to changing requirements\n\n![Agile Model in SDLC: Phases, Benefits & Real Use cases | Medium](Picture2.jpg)\n\n✔ Advantages\n\n✗ Disadvantages\n\nHighly adaptable to change Faster delivery of working features Encourages collaboration and communication Requires active and continuous stakeholder involvement Less emphasis on documentation Scope can expand uncontrollably (scope creep)\n\nBest for: Mobile app startups, web applications, fast-evolving projects\n\n### Notes:\n\n<!-- Slide number: 15 -->\n\nSoftware Process Model: Spiral Model Risk-driven, iterative refinement approach\n\n![What is Spiral Model in SDLC? |Professionalqa.com](Picture2.jpg) Characteristics Combines iterative development with risk analysis Each spiral loop represents one development phase Risk identification and mitigation at every cycle Allows for prototyping and incremental builds\n\n✔ Advantages\n\n✗ Disadvantages\n\nStrong focus on risk management Flexible for large, complex projects Allows early detection of issues Complex and costly to manage Requires expertise in risk assessment Not suitable for small or low-budget projects\n\nBest for: Large-scale, high-risk projects (e.g., aerospace, defense systems)\n\n### Notes:\n\n<!-- Slide number: 16 -->\n\nCode Review & Design Review\n\nCode Review\n\nDesign Review\n\nDetects bugs early in development Improves overall code quality Encourages knowledge sharing Enforces consistent coding standards Architecture is scalable Modules are properly designed Security requirements addressed Performance requirements met\n\nBest Practices\n\nFollow coding standards  ·  Write reusable code  ·  Use version control (Git)  ·  Document code properly  ·  Conduct regular testing  ·  Apply secure coding practices  ·  Use design patterns\n\n### Notes:\n\n<!-- Slide number: 17 -->\n\nModern Trends & Summary\n\nDevOps  Combines development & operations for continuous delivery\n\nCI/CD  Automates testing and deployment pipelines\n\nCloud Development  AWS, Microsoft Azure, Google Cloud platforms\n\nAI-Assisted Dev  Code suggestions, automated testing, bug detection\n\nKey Takeaways\n\n①  Software processes provide a systematic approach to development ②  Design and implementation transform requirements into working systems ③  Code reviews and design reviews ensure quality and security ④  Agile, Waterfall, and Spiral models serve different project needs\n\n### Notes:\n\n---"
    },
    {
      "id": "upload-7-prelim-2-software-evolution",
      "source": "combinedSE2 (1).md",
      "title": "Prelim 2_software_evolution",
      "body": "<!-- Slide number: 1 -->\n\nSoftware Engineering Software Evolution & Maintenance How software systems survive, grow, and stay relevant over time.\n\nCorrective\n\nAdaptive\n\nPerfective\n\nPreventive Khaela Lee, MIT\n\n### Notes:\n\n<!-- Slide number: 2 -->\n\nWhat is Software Evolution?\n\nDefinition: The continuous process of modifying and updating software systems after deployment to meet changing requirements, technologies, and user needs. Why Software Must Evolve\n\nUser needs change\n\nBusiness rules change 👤 🏢\n\nTechnology changes rapidly\n\nSecurity vulnerabilities emerge ⚡ 🔒\n\nPerformance improvements needed 🚀\n\nMost software spends MORE time in maintenance than in initial development.\n\n### Notes:\n\n<!-- Slide number: 3 -->\n\nReal-World Example: Facebook's Evolution Without evolution, platforms become outdated and lose users.\n\n2004 2008 2016 Basic Profile & Wall Messenger Integration Stories Feature\n\n2018 2020 2023+ Marketplace Reels AI Recommendations\n\n### Notes:\n\n<!-- Slide number: 4 -->\n\nTypes of Software Maintenance\n\n🔧  Corrective Maintenance\n\n⚙️  Adaptive Maintenance Fixes defects and errors. Modifies software to adapt to new environments. Example: Fixing a login bug that prevents users from accessing accounts. Example: Updating an application to support Windows 11 or Android 15.\n\n✨  Perfective Maintenance\n\n🛡  Preventive Maintenance Improves performance or usability. Prevents future problems by improving maintainability. Example: Redesigning a website interface for better user experience. Example: Refactoring old code to reduce complexity.\n\n### Notes:\n\n<!-- Slide number: 5 -->\n\nLehman's Laws of Software Evolution Proposed by computer scientist Manny Lehman — describing how software inevitably evolves.\n\n01 Continuing Change 02 Increasing Complexity\n\nSoftware must continually adapt or it becomes less useful over time. As software evolves, complexity increases unless active effort is made to reduce it.\n\n03 Continuing Growth 04 Declining Quality\n\nThe functionality of software systems continues to expand to satisfy user expectations. Without maintenance, software quality deteriorates over time.\n\n### Notes:\n\n<!-- Slide number: 6 -->\n\nLegacy Systems\n\nLegacy System: An old software system that is still in active use, often running on outdated technology but critical to business operations. Characteristics Common Problems Uses outdated technology Outdated hardware/software\n\nLack of documentation Difficult to maintain\n\nHigh maintenance cost Critical to business operations\n\nSecurity vulnerabilities\n\nShortage of skilled developers\n\n💡 Example: Many banks worldwide still rely on COBOL-based mainframe systems built in the 1970s — they handle billions of transactions daily.\n\n### Notes:\n\n<!-- Slide number: 7 -->\n\nReengineering & Refactoring\n\n🔄  Software Reengineering\n\n✂️  Refactoring\n\nImproves existing systems without changing core functionality. Restructuring code without changing external behavior. Activities: Goals: Code restructuring Improve code readability\n\nDatabase migration Reduce complexity\n\nInterface modernization Improve maintainability\n\nDocumentation improvement\n\nExample: Converting a desktop inventory system into a web-based application. Example: Breaking a very long function into smaller, reusable functions.\n\n### Notes:\n\n<!-- Slide number: 8 -->\n\nThe Software Evolution Process\n\n1\n\n1 Change Request\n\n2\n\n2 Impact Analysis\n\n3\n\n3 Design Modification Users or stakeholders request modifications to the system. Engineers analyze the effects and cost of proposed changes. The system design is updated to accommodate changes.\n\n4\n\n4 Implementation\n\n5\n\n5 Testing\n\n6\n\n6 Deployment Developers modify the codebase accordingly. All changes are carefully tested to ensure correctness. The updated software is released to users.\n\n### Notes:\n\n<!-- Slide number: 9 -->\n\nVersion Control in Software Evolution\n\nVersion control systems track every change to software over time — enabling collaboration, history review, and rollback. Popular Tools Key Benefits\n\nGit Industry standard distributed version control system.\n\n📜  Tracks complete code history\n\nGitHub Cloud platform for hosting Git repositories.\n\n🤝  Supports team collaboration\n\nGitLab DevOps platform with built-in CI/CD pipelines.\n\n⏪  Allows rollback of changes\n\nBitbucket Atlassian's Git solution integrated with Jira.\n\n🌿  Branching for parallel development\n\n### Notes:\n\n<!-- Slide number: 10 -->\n\nContinuous Evolution in Agile Development Agile methodologies are designed to support continuous, incremental software evolution.\n\n🔁  Iterative Releases\n\n📢  Frequent Updates Software is delivered in small, working increments rather than one large release. New features and fixes are released regularly — sometimes every two weeks.\n\n💬  Customer Feedback\n\n🧪  Continuous Testing Stakeholders review working software each sprint and provide direction. Automated and manual tests run throughout the cycle to catch issues early.\n\n### Notes:\n\n<!-- Slide number: 11 -->\n\nSoftware Evolution Lifecycle: E-Learning System Real-world systems evolve version by version — each release adds value and responds to user needs.\n\nVersion 1.0\n\nVersion 2.0\n\nVersion 3.0 Foundation Growth Intelligence Student login & registration Video conferencing integration AI-based course recommendations\n\n→ → Online quizzes & assessments Assignment submission system Mobile application support\n\nGrade tracking dashboard Real-time notifications\n\nEach version builds on the previous — this is continuous software evolution in action.\n\n### Notes:\n\n<!-- Slide number: 12 -->\n\nTechnical Debt\n\nTechnical Debt: Shortcuts taken during development that create future maintenance problems — like borrowing time now but paying it back with interest later. Causes Effects Tight deadlines forcing shortcuts\n\nSlower development speed\n\nPoor design decisions upfront\n\nIncreased number of bugs Lack of proper testing coverage\n\nHigher maintenance costs\n\n💡 Think of technical debt like a credit card — useful in the short term, but the interest accumulates and eventually becomes overwhelming if not managed.\n\n### Notes:\n\n<!-- Slide number: 13 -->\n\nManaging Software Evolution: Best Practices\n\nMaintain thorough documentation\n\nUse modular architecture 📄 🧩\n\nConduct regular testing\n\nRefactor code periodically 🧪 ✂️\n\nUse automated deployment tools\n\nApply consistent coding standards 🚀 📏\n\nMonitor system performance 📊\n\n### Notes:\n\n<!-- Slide number: 14 -->\n\nRisks of Poor Software Evolution When software is not properly maintained and evolved, serious consequences follow:\n\n💀 🔓 💸 Systems Become Obsolete Security Risks Increase Maintenance Costs Rise Outdated software can no longer meet modern user expectations or integrate with new platforms. Unpatched vulnerabilities become entry points for attackers and data breaches. Poorly structured code becomes exponentially more expensive to fix and extend.\n\n😤 🏢 User Satisfaction Drops Business Operations Fail Users abandon slow, buggy, or outdated software for better alternatives. Mission-critical systems that fail can halt an entire organization's operations.\n\n### Notes:\n\n<!-- Slide number: 15 -->\n\nEmerging Trends in Software Evolution\n\n☁️  Cloud Migration\n\n🤖  AI Integration Organizations migrate legacy systems to cloud platforms like AWS, Azure, and Google Cloud for scalability, flexibility, and reduced infrastructure costs. Software evolves with intelligent features — AI-powered recommendations, chatbots, automated decision-making, and predictive analytics.\n\n🔐  DevSecOps\n\n🧩  Microservices Architecture Security is no longer an afterthought — it is integrated directly into the continuous development and deployment pipeline from day one. Large monolithic systems are broken into smaller, independent services — each evolving at its own pace without disrupting the whole system.\n\n### Notes:\n\n<!-- Slide number: 16 -->\n\nSummary & Key Takeaways\n\nSoftware evolution is a continuous, necessary process — not a one-time task.\n\n1\n\nFour types of maintenance: Corrective, Adaptive, Perfective, and Preventive.\n\n2\n\nLehman's Laws describe how software naturally grows in complexity and must be actively managed.\n\n3\n\nLegacy systems, technical debt, and poor evolution lead to costly failures.\n\n4\n\nRefactoring and reengineering are key tools for modernizing aging systems.\n\n5\n\nAgile, DevOps, and cloud technologies enable faster, safer continuous evolution.\n\n6\n\n### Notes:\n\n---"
    },
    {
      "id": "upload-8-review-of-design-and-implementation",
      "source": "combinedSE2 (1).md",
      "title": "Review of Design and Implementation",
      "body": "Review of Design and Implementation\n\nIntended Learning Outcomes (ILOs)\n\nAt the end of this lesson, the students should be able to:\n\n1.  Explain the different phases and activities involved in the software process.\n2.  Analyze software design and implementation practices used in developing\n\nsoftware systems.\n\n3.  Apply appropriate software engineering principles in designing and\n\nimplementing software solutions.\n\nIntroduction to Software Process\n\nA software process refers to the structured set of activities, methods, practices, and transformations used to develop and maintain software systems. It provides a framework that guides software engineers from planning and analysis to deployment and maintenance.\n\nAccording to Software Engineering, software processes help organizations produce high-quality software in a systematic and predictable manner. Without a defined process, software projects often suffer from delays, cost overruns, poor quality, and maintenance difficulties.\n\nSoftware processes are essential because software systems today are increasingly large, complex, and mission-critical. Organizations therefore rely on disciplined development methodologies to ensure reliability, efficiency, and scalability.\n\nObjectives of a Software Process\n\nA software process aims to:\n\n1.  Produce high-quality software\n2.  Meet user and business requirements\n3.  Deliver systems on time and within budget\n4.  Improve software maintainability\n5.  Reduce development risks\n\n6.  Enhance teamwork and project coordination\n\nMajor Activities in a Software Process\n\nMost software engineering models contain the following core activities:\n\n1.  Requirements Analysis\n\nThis phase involves identifying what the users and stakeholders need from the system.\n\nActivities:\n\n-  Gathering user requirements\n-  Conducting interviews and surveys\n-  Creating requirement specifications\n-\n\nIdentifying functional and non-functional requirements\n\nExample:\n\nA university enrollment system may require:\n\n-  Student registration\n-  Subject enrollment\n-  Online payment\n-  Grade viewing\n\nDeliverable:\n\nSoftware Requirements Specification (SRS)\n\n2.  System Design\n\nDesign transforms requirements into a blueprint for implementation.\n\nTypes of Design\n\n1.  Architectural Design\n\nDefines the overall structure of the system.\n\nExample:\n\n-  Client-server architecture\n-  Three-tier architecture\n-  Microservices architecture\n\n2.  Database Design\n\nDefines tables, relationships, and data storage.\n\nExample: A student management system may include tables such as:\n\n-  Students\n-  Courses\n-  Faculty\n-  Enrollment\n\n3.  Interface Design\n\nDefines how users interact with the system.\n\nExample:\n\n-  Login forms\n-  Dashboard layout\n-  Navigation menus\n\n4.  Component Design\n\nDefines modules and classes.\n\nExample:\n\n-  Authentication module\n-  Payment module\n\n-  Report generation module\n\nReview of Software Design\n\nSoftware design is the process of converting software requirements into detailed representations that guide coding and implementation.\n\nAccording to Object Oriented Software Engineering, good software design emphasizes:\n\n-  Modularity\n-  Reusability\n-  Scalability\n-  Maintainability\n-  Efficiency\n\nDesign Principles\n\n1.  Abstraction\n\nHiding unnecessary implementation details.\n\nExample:\n\nUsers interact with an ATM interface without knowing the internal banking algorithms.\n\n2.  Encapsulation\n\nCombining data and methods into one unit.\n\nExample:\n\nA Student class contains:\n\n-  Student name\n\n-  Student ID\n-  Methods for enrollment\n\n3.  Modularity\n\nDividing software into smaller independent modules.\n\nExample:\n\nAn e-commerce system may contain:\n\nInventory module\n-\n-  Payment module\n-  Shipping module\n\n4.  Low Coupling and High Cohesion\n\nLow Coupling\n\nModules should have minimal dependency on one another.\n\nHigh Cohesion\n\nA module should focus on one specific responsibility.\n\nUnified Modeling Language (UML)\n\nUML is commonly used to visualize software designs.\n\nCommon UML Diagrams\n\nPurpose\n\nDiagram Use Case Diagram  Shows user interactions Class Diagram Sequence Diagram  Shows interaction flow Activity Diagram  Shows workflow\n\nShows classes and relationships\n\nER Diagram\n\nShows database relationships\n\nExample: Use Case Scenario\n\nOnline Shopping System\n\nActors:\n\n-  Customer\n-  Admin\n-  Payment Gateway\n\nUse Cases:\n\n-  Register Account\n-  Browse Products\n-  Add to Cart\n-  Checkout\n-  Process Payment\n\n3.  Software Implementation\n\nImplementation is the actual coding phase where developers translate design documents into executable programs.\n\nAccording to Beginning Software Engineering, implementation transforms theoretical designs into operational systems using programming languages, frameworks, and tools.\n\nKey Activities During Implementation\n\n1.  Coding\n\nDevelopers write source code using programming languages such as:\n\n-  Java\n-  Python\n-  C#\n-  JavaScript\n-  PHP\n\nExample:\n\nA login system may include:\n\n-  User authentication\n-  Password hashing\n-  Session management\n\n2.  Unit Testing\n\nEach module is tested independently.\n\nExample:\n\nTesting whether:\n\n-  Login accepts valid credentials\nInvalid passwords are rejected\n-\n\n3.  Integration Testing\n\nMultiple modules are tested together.\n\nExample:\n\nChecking if:\n\n-  Payment module correctly updates inventory\n\n4.  Debugging\n\nDevelopers identify and fix errors.\n\nTypes of Errors:\n\n-  Syntax errors\n-  Logical errors\n-  Runtime errors\n\nExample of Software Process in Real Life\n\nMobile Banking Application\n\nRequirements Phase\n\nUsers request:\n\n-  Fund transfer\n-  Balance inquiry\n-  Bill payment\n\nDesign Phase\n\nEngineers create:\n\n-  Database schema\n-  Mobile UI prototypes\n-  Security architecture\n\nImplementation Phase\n\nDevelopers code:\n\n-  Authentication system\n-  Transaction processing\n-  Notification system\n\nTesting Phase\n\nQA engineers test:\n\n-  Security vulnerabilities\n-  Transaction accuracy\n-  Performance under heavy load\n\nDeployment\n\nThe app is published on:\n\n-  Google Play Store\n-  Apple App Store\n\nSoftware Process Models\n\n1.  Waterfall Model\n\nA sequential approach where each phase must be completed before the next begins.\n\nAdvantages:\n\n-  Simple and structured\n-  Easy to manage\n\nDisadvantages:\n\n-  Difficult to accommodate changes\n-  Late testing\n\nBest Used For:\n\nProjects with stable requirements\n\n2.  Agile Model\n\nAn iterative and flexible development approach.\n\nCharacteristics:\n\n-  Continuous feedback\n\n-  Short iterations called sprints\n-  Frequent releases\n\nAdvantages:\n\n-  Adaptable to change\n-  Faster delivery\n\nDisadvantages:\n\n-  Requires active stakeholder involvement\n\nExample:\n\nMobile app startups frequently use Agile.\n\n3.  Spiral Model\n\nFocuses on risk analysis and iterative refinement.\n\nBest Used For:\n\nLarge and high-risk projects\n\nImportance of Reviewing Design and Implementation\n\nReviewing software design and implementation ensures:\n\n-  Requirements are properly addressed\n-  Code quality standards are followed\n-  Security vulnerabilities are minimized\n-  Software remains maintainable\n\nCode Review\n\nA code review is the examination of source code by other developers.\n\nBenefits:\n\nImproves code quality\n\n-  Detects bugs early\n-\n-  Encourages knowledge sharing\n-  Enforces coding standards\n\nDesign Review\n\nA design review evaluates whether:\n\n-  The architecture is scalable\n-  Modules are properly designed\n-  Security requirements are considered\n-  Performance requirements are met\n\nBest Practices in Design and Implementation\n\n1.  Follow coding standards\n2.  Write reusable code\n3.  Use version control systems (Git)\n4.  Document code properly\n5.  Conduct regular testing\n6.  Apply secure coding practices\n7.  Use design patterns when appropriate\n\nChallenges in Software Process\n\nCommon Problems:\n\n-  Changing requirements\n-  Poor communication\n-  Unrealistic deadlines\nInadequate testing\n-\n-  Lack of documentation\n\nModern Trends in Software Development\n\nDevOps\n\nCombines development and operations for continuous delivery.\n\nContinuous Integration/Continuous Deployment (CI/CD)\n\nAutomates testing and deployment.\n\nCloud-Based Development\n\nUses cloud platforms such as:\n\n-  AWS\n-  Microsoft Azure\n-  Google Cloud\n\nAI-Assisted Development\n\nUses artificial intelligence tools for:\n\n-  Code suggestions\n-  Automated testing\n-  Bug detection\n\nSummary\n\nSoftware processes provide a systematic approach to software development. Design and implementation are critical stages that transform user requirements into working systems. Effective software engineering practices improve software quality, maintainability, and scalability while reducing risks and development costs.\n\n---"
    },
    {
      "id": "upload-9-security-engineering",
      "source": "combinedSE2 (1).md",
      "title": "Security Engineering",
      "body": "Security Engineering\n\nIntended Learning Outcomes (ILOs)\n\nAt the end of this lesson, the students should be able to:\n\n1.  Explain the concepts, principles, and importance of security engineering in\n\nsoftware systems.\n\n2.  Analyze common software vulnerabilities, threats, and security risks in\n\nmodern applications.\n\n3.  Apply fundamental security engineering practices and techniques in\n\nsoftware development.\n\nIntroduction to Security Engineering\n\nDefinition\n\nSecurity engineering is the discipline of designing, developing, testing, and maintaining systems that can resist malicious attacks, unauthorized access, and security threats.\n\nAccording to Software Engineering, security engineering integrates security practices throughout the software development lifecycle to ensure that systems remain protected and trustworthy.\n\nSecurity engineering is important because software systems today manage:\n\n-  Financial transactions\n\n-  Personal information\n\n-  Government records\n\n-  Medical data\n\n-  Business operations\n\nA failure in security may lead to:\n\n-  Data theft\n\n-  Financial loss\n\n-\n\nIdentity theft\n\n-  Reputation damage\n\n-  Legal penalties\n\nGoals of Security Engineering\n\nThe main goals are:\n\n1.  Protect data and systems\n\n2.  Prevent unauthorized access\n\n3.  Ensure system availability\n\n4.  Detect and respond to threats\n\n5.  Maintain user trust\n\n6.  Reduce security vulnerabilities\n\nCore Principles of Security Engineering\n\n1. Confidentiality\n\nInformation should only be accessible to authorized users.\n\nExample:\n\nOnline banking accounts protected by passwords and encryption.\n\n2. Integrity\n\nData must remain accurate and unaltered.\n\nExample:\n\nPreventing unauthorized modification of student grades.\n\n3. Availability\n\nSystems and services must remain operational.\n\nExample:\n\nCloud storage systems available anytime.\n\nAdditional Security Principles\n\nAuthentication\n\nVerifies the identity of users.\n\nExamples:\n\n-  Passwords\n\n-  Fingerprint scanning\n\n-  Face recognition\n\nAuthorization\n\nDetermines what users are allowed to do.\n\nExample:\n\nOnly administrators can delete records.\n\nNon-Repudiation\n\nEnsures users cannot deny actions they performed.\n\nExample:\n\nDigital signatures in online transactions.\n\nCommon Security Threats\n\n1. Malware\n\nMalicious software intended to damage systems.\n\nTypes:\n\n-  Viruses\n\n-  Worms\n\n-  Trojans\n\n-  Ransomware\n\n2. Phishing\n\nFraudulent attempts to steal information.\n\nExample:\n\nFake emails requesting account credentials.\n\n3. SQL Injection\n\nAttackers insert malicious SQL statements into forms.\n\nExample:\n\nManipulating login queries to bypass authentication.\n\n4. Cross-Site Scripting (XSS)\n\nInjecting malicious scripts into websites.\n\nExample:\n\nDisplaying harmful JavaScript code in comment sections.\n\n5. Denial-of-Service (DoS) Attacks\n\nFlooding servers with excessive requests.\n\nEffect:\n\nServices become unavailable to users.\n\nSecurity Vulnerabilities\n\nA vulnerability is a weakness in software that attackers can exploit.\n\nCommon Causes:\n\n-  Weak passwords\n\n-  Poor coding practices\n\n-  Unpatched software\n\n-  Lack of encryption\n\n-  Misconfigured servers\n\nSecure Software Development Lifecycle (SSDLC)\n\nSecurity should be integrated into every phase of software development.\n\nPhases of SSDLC\n\nSecurity Activity Identify security needs Create secure architecture\n\nPhase Requirements Design Implementation  Apply secure coding Testing Deployment Maintenance\n\nConduct security testing Configure secure environments Apply updates and patches\n\nThreat Modeling\n\nDefinition\n\nThreat modeling identifies possible threats and vulnerabilities before implementation.\n\nQuestions Asked:\n\n-  What assets need protection?\n\n-  Who may attack the system?\n\n-  What vulnerabilities exist?\n\n-  How can attacks be prevented?\n\nExample of Threat Modeling\n\nE-Commerce Website\n\nThreats:\n\n-  Credit card theft\n\n-  Unauthorized login\n\n-  Database attacks\n\nSecurity Measures:\n\n-  Encryption\n\n-  Multi-factor authentication\n\n-  Secure payment gateways\n\nEncryption\n\nDefinition\n\nEncryption converts readable data into unreadable form to protect information.\n\nTypes of Encryption\n\n1. Symmetric Encryption\n\nUses one key for encryption and decryption.\n\nExample:\n\nAES (Advanced Encryption Standard)\n\n2. Asymmetric Encryption\n\nUses public and private keys.\n\nExample:\n\nRSA encryption\n\nAuthentication Techniques\n\n1. Password Authentication\n\nUsers log in using usernames and passwords.\n\n2. Two-Factor Authentication (2FA)\n\nRequires additional verification.\n\nExample:\n\nOTP codes sent to mobile devices.\n\n3. Biometric Authentication\n\nUses physical characteristics.\n\nExamples:\n\n-  Fingerprint recognition\n\n-  Facial recognition\n\nSecure Coding Practices\n\nBest Practices\n\n1.  Validate user input\n\n2.  Use parameterized SQL queries\n\n3.  Avoid hardcoded passwords\n\n4.  Encrypt sensitive data\n\n5.  Apply proper error handling\n\n6.  Keep software updated\n\n7.  Use secure APIs\n\nSecurity Testing\n\n1. Penetration Testing\n\nSimulated attacks to identify vulnerabilities.\n\n2. Vulnerability Scanning\n\nAutomated tools detect weaknesses.\n\n3. Static Testing\n\nAnalyzes source code without execution.\n\n4. Dynamic Testing\n\nTests applications while running.\n\nFirewalls and Intrusion Detection Systems\n\nFirewall\n\nControls incoming and outgoing network traffic.\n\nIntrusion Detection System (IDS)\n\nMonitors suspicious activities and attacks.\n\nReal-World Example\n\nOnline Banking System\n\nSecurity Features:\n\n-  Encryption\n\n-  OTP verification\n\n-  Fraud detection\n\n-  Session timeout\n\n-  Secure login\n\nWithout proper security engineering, attackers may steal financial information.\n\nHuman Factors in Security\n\nHumans are often the weakest part of security systems.\n\nExamples:\n\n-  Weak passwords\n\n-  Clicking phishing links\n\n-  Sharing credentials\n\n-\n\nIgnoring updates\n\nOrganizations therefore conduct cybersecurity awareness training.\n\nSecurity Policies\n\nOrganizations establish policies to guide security practices.\n\nExamples:\n\n-  Password policies\n\n-  Data privacy policies\n\n-  Access control policies\n\n-\n\nIncident response procedures\n\nEmerging Trends in Security Engineering\n\nCloud Security\n\nProtecting cloud infrastructure and services.\n\nAI-Based Security\n\nArtificial intelligence detects cyber threats.\n\nZero Trust Architecture\n\nNo user or device is automatically trusted.\n\nDevSecOps\n\nSecurity integrated into DevOps workflows.\n\nChallenges in Security Engineering\n\n1.  Rapidly changing cyber threats\n\n2.  Increasing software complexity\n\n3.  Human errors\n\n4.  High implementation costs\n\n5.  Balancing usability and security\n\nSecurity engineering ensures that software systems remain protected against threats, attacks, and unauthorized access. By integrating security practices throughout the software development lifecycle, organizations can improve system reliability, protect sensitive information, and maintain user trust.\n\n---"
    },
    {
      "id": "upload-10-service-oriented-architecture-software",
      "source": "combinedSE2 (1).md",
      "title": "Service-Oriented Architecture Software",
      "body": "Service-Oriented Architecture Software; Aspect-Oriented Software Engineering\n\nIntended Learning Outcomes (ILOs)\n\nAt the end of this lesson, the students should be able to:\n\n1.  Explain the concepts, principles, and architectures of Service-Oriented Architecture\n\n(SOA) and Aspect-Oriented Software Engineering (AOSE).\n\n2.  Analyze the advantages, challenges, and real-world applications of SOA and AOSE in\n\nenterprise systems.\n\n3.  Apply service-oriented and aspect-oriented principles in designing modular and\n\nmaintainable software systems.\n\nService-Oriented Architecture (SOA)\n\nDefinition\n\nService-Oriented Architecture (SOA) is a software design approach where applications are built as a collection of independent services communicating through networks.\n\nEach service performs a specific business function and can be reused across multiple systems.\n\nAccording to Introduction to Software Engineering, SOA improves flexibility, interoperability, and scalability in enterprise systems.\n\nCharacteristics of SOA\n\nCharacteristic Description Loose Coupling  Services operate independently Reusability Services reused across systems Interoperability  Services communicate across platforms Scalability Modularity\n\nServices scale independently Systems divided into services\n\nComponents of SOA\n\n1. Service Provider\n\nProvides services to clients.\n\n2. Service Consumer\n\nUses or requests services.\n\n3. Service Registry\n\nStores available service information.\n\nExample of SOA\n\nOnline Banking System\n\nServices:\n\n-  Authentication service\n\n-  Payment service\n\n-  Account management service\n\n-  Notification service\n\nEach service can operate independently.\n\nWeb Services in SOA\n\nSOA commonly uses web services.\n\nTypes:\n\n-  SOAP (Simple Object Access Protocol)\n\n-  REST (Representational State Transfer)\n\nRESTful Services\n\nREST APIs are widely used in modern systems.\n\nFeatures:\n\n-\n\nLightweight\n\n-  Faster communication\n\n-  Uses HTTP methods\n\nCommon HTTP Methods:\n\n-  GET\n\n-  POST\n\n-  PUT\n\n-  DELETE\n\nAdvantages of SOA\n\n1.  Reusable services\n\n2.  Easier integration\n\n3.  Scalability\n\n4.  Platform independence\n\n5.  Faster development\n\nChallenges of SOA\n\n1.  Network dependency\n\n2.  Security risks\n\n3.  Service management complexity\n\n4.  Communication overhead\n\nMicroservices vs SOA\n\nSOA Enterprise-wide services Shared databases possible Larger service scope\n\nMicroservices Smaller independent services Independent databases Fine-grained services\n\nReal-World Example of SOA\n\nAirline Reservation System\n\nServices:\n\n-  Ticket booking\n\n-  Payment processing\n\n-  Flight scheduling\n\n-  Customer notifications\n\nDifferent systems communicate using services.\n\nAspect-Oriented Software Engineering (AOSE)\n\nDefinition\n\nAspect-Oriented Software Engineering focuses on separating cross-cutting concerns in software systems.\n\nCross-Cutting Concerns:\n\nFeatures affecting multiple parts of a system.\n\nExamples:\n\n-\n\nLogging\n\n-  Security\n\n-  Error handling\n\n-  Transaction management\n\nProblem with Traditional Programming\n\nIn traditional systems, repetitive code may appear in many modules.\n\nExample:\n\nAdding logging code in every function.\n\nThis creates:\n\n-  Code duplication\n\n-  Poor maintainability\n\n-\n\nIncreased complexity\n\nAspect-Oriented Solution\n\nAOSE separates repetitive concerns into reusable aspects.\n\nCore Concepts in AOSE\n\n1. Aspect\n\nA module containing cross-cutting functionality.\n\nExample:\n\nLogging aspect\n\n2. Join Point\n\nSpecific execution points in a program.\n\nExample:\n\nMethod execution\n\n3. Advice\n\nAction performed at a join point.\n\nTypes:\n\n-  Before advice\n\n-  After advice\n\n-  Around advice\n\n4. Pointcut\n\nDefines where aspects are applied.\n\nExample of AOSE\n\nLogging System\n\nInstead of adding logging code manually to every method:\n\n-  A logging aspect automatically records activities.\n\nAdvantages of AOSE\n\n1.  Reduced code duplication\n\n2.  Better maintainability\n\n3.  Improved modularity\n\n4.  Easier updates\n\nChallenges of AOSE\n\n1.  Increased complexity\n\n2.  Difficult debugging\n\n3.  Learning curve\n\nReal-World Applications of AOSE\n\n-  Security monitoring\n\n-\n\nLogging systems\n\n-  Transaction management\n\n-  Performance monitoring\n\nRelationship Between SOA and AOSE\n\nSOA Focuses on services Improves interoperability Network-oriented\n\nAOSE Focuses on cross-cutting concerns Improves modularity Code-structure-oriented\n\nModern Trends\n\nAPI Economy\n\nOrganizations expose services through APIs.\n\nCloud-Based SOA\n\nSOA implemented in cloud systems.\n\nEvent-Driven Architectures\n\nServices communicate using events and messaging systems.\n\nSOA organizes systems into reusable and interoperable services, while AOSE separates cross- cutting concerns into reusable aspects. Both approaches improve modularity, maintainability, scalability, and flexibility in enterprise software systems.\n\n---"
    },
    {
      "id": "upload-11-software-evolution",
      "source": "combinedSE2 (1).md",
      "title": "Software Evolution",
      "body": "Software Evolution\n\nIntended Learning Outcomes (ILOs)\n\nAt the end of this lesson, the students should be able to:\n\n1.  Explain the concept, importance, and types of software evolution and\n\nmaintenance.\n\n2.  Analyze the challenges and impacts of software evolution in real-world\n\nsystems.\n\n3.  Apply appropriate software evolution and maintenance practices to\n\nimprove software quality and sustainability.\n\nIntroduction to Software Evolution\n\nSoftware evolution refers to the continuous process of modifying and updating software systems after deployment to meet changing requirements, technologies, and user needs.\n\nAccording to The Essence of Software Engineering, software systems are not static products. They evolve over time due to:\n\n-  Business changes\n\n-  Technological advancements\n\n-  Security threats\n\n-  User feedback\n\n-  Regulatory requirements\n\nSoftware evolution is one of the most important concepts in software engineering because most software systems spend more time in maintenance and evolution than in initial development.\n\nWhy Software Evolution is Necessary\n\nSoftware must evolve because:\n\n1.  User needs change\n\n2.  Business rules change\n\n3.  Technology changes rapidly\n\n4.  Security vulnerabilities emerge\n\n5.  Performance improvements are needed\n\nReal-World Example\n\nFacebook Application\n\nOver the years, Facebook evolved by adding:\n\n-  Messenger integration\n\n-  Stories feature\n\n-  Marketplace\n\n-  Reels\n\n-  AI recommendations\n\nWithout evolution, the platform would become outdated and lose users.\n\nTypes of Software Maintenance\n\nSoftware evolution is often implemented through maintenance activities.\n\n1. Corrective Maintenance\n\nFixes defects and errors.\n\nExample:\n\nFixing a login bug that prevents users from accessing accounts.\n\n2. Adaptive Maintenance\n\nModifies software to adapt to new environments.\n\nExample:\n\nUpdating an application to support Windows 11 or Android 15.\n\n3. Perfective Maintenance\n\nImproves performance or usability.\n\nExample:\n\nRedesigning a website interface for better user experience.\n\n4. Preventive Maintenance\n\nImproves maintainability and prevents future problems.\n\nExample:\n\nRefactoring old code to reduce complexity.\n\nLehman’s Laws of Software Evolution\n\nComputer scientist Manny Lehman proposed laws describing how software evolves.\n\n1. Continuing Change\n\nSoftware must continually adapt or become less useful.\n\n2. Increasing Complexity\n\nComplexity increases unless effort is made to reduce it.\n\n3. Continuing Growth\n\nSoftware functionality continues to expand.\n\n4. Declining Quality\n\nWithout maintenance, software quality deteriorates over time.\n\nLegacy Systems\n\nA legacy system is an old software system still in use.\n\nCharacteristics:\n\n-  Uses outdated technology\n\n-  Difficult to maintain\n\n-  Critical to business operations\n\nExample:\n\nBanks still using COBOL-based systems.\n\nProblems with Legacy Systems\n\n1.  Outdated hardware/software\n\n2.  Lack of documentation\n\n3.  High maintenance cost\n\n4.  Security vulnerabilities\n\n5.  Shortage of skilled developers\n\nSoftware Reengineering\n\nSoftware reengineering improves existing systems without changing core functionality.\n\nActivities:\n\n-  Code restructuring\n\n-  Database migration\n\n-\n\nInterface modernization\n\n-  Documentation improvement\n\nExample:\n\nConverting a desktop inventory system into a web-based application.\n\nRefactoring\n\nRefactoring is restructuring code without changing external behavior.\n\nGoals:\n\n-\n\nImprove readability\n\n-  Reduce complexity\n\n-\n\nImprove maintainability\n\nExample:\n\nBreaking a very long method into smaller reusable functions.\n\nSoftware Evolution Process\n\n1. Change Request\n\nUsers or stakeholders request modifications.\n\n2. Impact Analysis\n\nEngineers analyze effects of changes.\n\n3. Design Modification\n\nSystem design is updated.\n\n4. Implementation\n\nDevelopers modify the code.\n\n5. Testing\n\nChanges are tested carefully.\n\n6. Deployment\n\nUpdated software is released.\n\nVersion Control in Software Evolution\n\nVersion control systems help manage software changes.\n\nPopular Tools:\n\n-  Git\n\n-  GitHub\n\n-  GitLab\n\n-  Bitbucket\n\nBenefits:\n\n-  Tracks code history\n\n-  Supports collaboration\n\n-  Allows rollback of changes\n\nContinuous Evolution in Agile Development\n\nAgile methodologies support continuous software evolution through:\n\n-\n\nIterative releases\n\n-  Frequent updates\n\n-  Customer feedback\n\n-  Continuous testing\n\nExample of Software Evolution Lifecycle\n\nE-Learning System\n\nVersion 1\n\n-  Student login\n\n-  Online quizzes\n\nVersion 2\n\n-  Video conferencing\n\n-  Assignment submission\n\nVersion 3\n\n-  AI-based recommendations\n\n-  Mobile application support\n\nTechnical Debt\n\nTechnical debt refers to shortcuts taken during development that create future maintenance problems.\n\nCauses:\n\n-  Tight deadlines\n\n-  Poor design decisions\n\n-  Lack of testing\n\nEffects:\n\n-  Slower development\n\n-\n\nIncreased bugs\n\n-  Higher maintenance costs\n\nManaging Software Evolution\n\nBest Practices\n\n1.  Maintain documentation\n\n2.  Use modular architecture\n\n3.  Conduct regular testing\n\n4.  Refactor code periodically\n\n5.  Use automated deployment tools\n\n6.  Apply coding standards\n\n7.  Monitor system performance\n\nRisks of Poor Software Evolution\n\nIf software is not properly evolved:\n\n-  Systems become obsolete\n\n-  Security risks increase\n\n-  Maintenance costs rise\n\n-  User satisfaction decreases\n\n-  Business operations may fail\n\nEmerging Trends in Software Evolution\n\nCloud Migration\n\nOrganizations migrate systems to cloud platforms.\n\nAI Integration\n\nSoftware evolves with intelligent features.\n\nDevSecOps\n\nSecurity becomes integrated into continuous development.\n\nMicroservices Architecture\n\nLarge systems are broken into smaller services for easier evolution.\n\nConclusion\n\nSoftware evolution ensures that software systems remain useful, secure, and efficient over time. As technologies and user requirements continuously change, software engineers must maintain and improve systems through maintenance, refactoring, reengineering, and modernization practices. Effective software evolution enables organizations to remain competitive and responsive in a rapidly changing technological environment.\n\n---"
    },
    {
      "id": "upload-12-software-management",
      "source": "combinedSE2 (1).md",
      "title": "Software Management",
      "body": "Software Management\n\nIntended Learning Outcomes (ILOs)\n\nAt the end of this lesson, the students should be able to:\n\n1.  Explain the principles, processes, and importance of software management in software\n\nengineering projects.\n\n2.  Analyze software project planning, risk management, quality assurance, and team\n\ncoordination strategies.\n\n3.  Apply software management techniques in managing software development projects\n\neffectively.\n\nIntroduction to Software Management\n\nDefinition\n\nSoftware management involves planning, organizing, monitoring, and controlling software development activities to ensure successful project completion.\n\nAccording to The Essence of Software Engineering, software management ensures that software projects are completed:\n\n-  On time\n\n-  Within budget\n\n-  According to requirements\n\n-  With acceptable quality\n\nImportance of Software Management\n\nSoftware projects are often:\n\n-  Complex\n\n-  Expensive\n\n-  Time-sensitive\n\n-  Team-based\n\nWithout proper management, projects may fail due to:\n\n-  Poor planning\n\n-  Miscommunication\n\n-  Budget overruns\n\n-  Missed deadlines\n\nFunctions of Software Management\n\n1. Planning\n\nDefining:\n\n-  Scope\n\n-  Objectives\n\n-  Resources\n\n-  Schedules\n\n2. Organizing\n\nAssigning responsibilities and structuring teams.\n\n3. Monitoring\n\nTracking project progress.\n\n4. Controlling\n\nManaging risks, changes, and quality.\n\nSoftware Project Management Lifecycle\n\nDescription Define project goals Develop schedules and resources Develop software\n\nPhase Initiation Planning Execution Monitoring  Track progress Closure\n\nFinal delivery and evaluation\n\nSoftware Project Planning\n\nActivities:\n\n-  Requirement analysis\n\n-  Task identification\n\n-  Time estimation\n\n-  Budget estimation\n\n-  Resource allocation\n\nWork Breakdown Structure (WBS)\n\nDefinition\n\nA WBS divides projects into manageable tasks.\n\nExample:\n\nMobile App Project:\n\n-  UI Design\n\n-  Database Setup\n\n-  Authentication Module\n\n-  Testing\n\n-  Deployment\n\nProject Scheduling\n\nCommon Tools:\n\n-  Gantt Charts\n\n-  PERT Charts\n\n-  Agile Boards\n\nAgile Project Management\n\nAgile uses:\n\n-  Sprints\n\n-  Backlogs\n\n-  Daily stand-up meetings\n\n-\n\nIterative releases\n\nPopular Frameworks:\n\n-  Scrum\n\n-  Kanban\n\nSoftware Cost Estimation\n\nFactors Affecting Cost:\n\n-  Project size\n\n-  Complexity\n\n-  Team experience\n\n-  Tools and infrastructure\n\nRisk Management\n\nDefinition\n\nRisk management identifies and minimizes project risks.\n\nCommon Software Risks\n\nExample Risk Technical Risk  New technology failure Schedule Risk  Delayed development Financial Risk  Budget shortage Security Risk  Data breaches\n\nRisk Mitigation Strategies\n\n1.  Backup plans\n\n2.  Staff training\n\n3.  Frequent testing\n\n4.  Incremental development\n\nSoftware Quality Management\n\nDefinition\n\nEnsures software meets quality standards.\n\nActivities:\n\n-  Testing\n\n-  Code reviews\n\n-  Audits\n\n-  Process improvement\n\nTeam Management\n\nSoftware projects involve:\n\n-  Developers\n\n-  Testers\n\n-  Designers\n\n-  Project managers\n\n-  Business analysts\n\nCommunication Management\n\nEffective communication is essential.\n\nTools:\n\n-  Slack\n\n-  Microsoft Teams\n\n-\n\nJira\n\n-  Trello\n\nConfiguration Management\n\nControls software versions and changes.\n\nTools:\n\n-  Git\n\n-  GitHub\n\n-  GitLab\n\nChange Management\n\nSoftware requirements often change.\n\nActivities:\n\n-  Evaluating changes\n\n-  Approving modifications\n\n-  Updating documentation\n\nSoftware Metrics\n\nMetrics help evaluate project performance.\n\nExamples:\n\n-  Defect rate\n\n-  Productivity\n\n-  Code coverage\n\n-  Velocity\n\nEthical and Legal Issues in Software Management\n\nManagers must ensure:\n\n-  Data privacy compliance\n\n-  Ethical software practices\n\n-\n\nIntellectual property protection\n\nLeadership in Software Engineering\n\nEffective leaders:\n\n-  Motivate teams\n\n-  Resolve conflicts\n\n-  Manage deadlines\n\n-  Support collaboration\n\nChallenges in Software Management\n\n1.  Changing requirements\n\n2.  Team coordination problems\n\n3.  Budget constraints\n\n4.  Tight deadlines\n\n5.  Technical complexity\n\nReal-World Example\n\nLarge E-Commerce Project\n\nManagement tasks:\n\n-  Coordinating multiple teams\n\n-  Managing cloud infrastructure\n\n-  Ensuring cybersecurity\n\n-  Handling deployment schedules\n\nEmerging Trends in Software Management\n\nAI-Assisted Project Management\n\nAI predicts project risks and schedules.\n\nRemote Software Teams\n\nGlobal collaboration through online platforms.\n\nDevOps Management\n\nCombining development and operations management.\n\nBest Practices in Software Management\n\n1.  Define clear objectives\n\n2.  Use agile methodologies\n\n3.  Conduct regular meetings\n\n4.  Maintain documentation\n\n5.  Monitor risks continuously\n\n6.  Use automated tools\n\nSoftware management ensures that software projects are successfully planned, executed, monitored, and delivered. Effective management combines technical knowledge, leadership, communication, planning, quality assurance, and risk management to achieve successful software development outcomes.\n\n---"
    }
  ],
  "glossary": [
    {
      "term": "Software Process",
      "definition": "A structured set of activities, methods, practices, and transformations used to develop and maintain software systems.",
      "tags": [
        "Process"
      ]
    },
    {
      "term": "Requirements Analysis",
      "definition": "The phase where user and stakeholder needs are identified, gathered, and specified.",
      "tags": [
        "Process"
      ]
    },
    {
      "term": "Software Requirements Specification (SRS)",
      "definition": "The main requirements document produced at the end of requirements analysis.",
      "tags": [
        "Process"
      ]
    },
    {
      "term": "Functional Requirements",
      "definition": "Requirements that describe what the system should do.",
      "tags": [
        "Process"
      ]
    },
    {
      "term": "Non-Functional Requirements",
      "definition": "Requirements that describe qualities such as performance, security, reliability, or usability.",
      "tags": [
        "Process"
      ]
    },
    {
      "term": "System Design",
      "definition": "The activity that transforms requirements into a blueprint for implementation.",
      "tags": [
        "Process"
      ]
    },
    {
      "term": "Implementation",
      "definition": "The coding phase where design documents are translated into executable programs.",
      "tags": [
        "Design"
      ]
    },
    {
      "term": "Testing",
      "definition": "The activity that checks whether software works correctly and meets requirements.",
      "tags": [
        "Process"
      ]
    },
    {
      "term": "Deployment",
      "definition": "The release of software to users through servers, app stores, or production environments.",
      "tags": [
        "Process"
      ]
    },
    {
      "term": "Maintenance",
      "definition": "Activities performed after deployment to fix, improve, or adapt software.",
      "tags": [
        "Evolution"
      ]
    },
    {
      "term": "Waterfall Model",
      "definition": "A sequential development model where each phase is completed before the next begins.",
      "tags": [
        "Process"
      ]
    },
    {
      "term": "Agile Model",
      "definition": "An iterative and flexible model using sprints, frequent feedback, and regular delivery of working software.",
      "tags": [
        "Process"
      ]
    },
    {
      "term": "Sprint",
      "definition": "A short Agile iteration where a team builds and reviews a working increment.",
      "tags": [
        "Process"
      ]
    },
    {
      "term": "Spiral Model",
      "definition": "A risk-driven iterative model that combines refinement with risk analysis.",
      "tags": [
        "Process"
      ]
    },
    {
      "term": "DevOps",
      "definition": "A practice that combines development and operations to support continuous delivery.",
      "tags": [
        "Process",
        "Advanced SE"
      ]
    },
    {
      "term": "CI/CD",
      "definition": "Continuous Integration and Continuous Deployment; automated pipelines for testing and release.",
      "tags": [
        "Process",
        "Advanced SE"
      ]
    },
    {
      "term": "Cloud-Based Development",
      "definition": "Development and deployment using cloud platforms such as AWS, Azure, and Google Cloud.",
      "tags": [
        "Process"
      ]
    },
    {
      "term": "AI-Assisted Development",
      "definition": "The use of AI tools for code suggestions, automated testing support, and bug detection.",
      "tags": [
        "Process"
      ]
    },
    {
      "term": "Architectural Design",
      "definition": "Defines the system's overall structure, such as client-server, three-tier, or microservices.",
      "tags": [
        "Design"
      ]
    },
    {
      "term": "Client-Server Architecture",
      "definition": "A structure where clients send requests and servers process and respond.",
      "tags": [
        "Design"
      ]
    },
    {
      "term": "Three-Tier Architecture",
      "definition": "An architecture with presentation, business logic, and data layers.",
      "tags": [
        "Design"
      ]
    },
    {
      "term": "Microservices Architecture",
      "definition": "A style where independent services communicate through APIs.",
      "tags": [
        "Design",
        "Advanced SE"
      ]
    },
    {
      "term": "Database Design",
      "definition": "Defines tables, relationships, keys, and data storage.",
      "tags": [
        "Design"
      ]
    },
    {
      "term": "Interface Design",
      "definition": "Defines how users interact with the system visually.",
      "tags": [
        "Design"
      ]
    },
    {
      "term": "Component Design",
      "definition": "Defines internal modules, classes, and responsibilities.",
      "tags": [
        "Design"
      ]
    },
    {
      "term": "Abstraction",
      "definition": "Hiding unnecessary implementation details while exposing useful behavior.",
      "tags": [
        "Design"
      ]
    },
    {
      "term": "Encapsulation",
      "definition": "Combining data and methods into one unit.",
      "tags": [
        "Design"
      ]
    },
    {
      "term": "Modularity",
      "definition": "Dividing software into smaller independent modules.",
      "tags": [
        "Design"
      ]
    },
    {
      "term": "Low Coupling",
      "definition": "A design quality where modules have minimal dependency on each other.",
      "tags": [
        "Design"
      ]
    },
    {
      "term": "High Cohesion",
      "definition": "A design quality where a module focuses on one specific responsibility.",
      "tags": [
        "Design"
      ]
    },
    {
      "term": "UML",
      "definition": "Unified Modeling Language; used to visualize software designs before coding.",
      "tags": [
        "Design"
      ]
    },
    {
      "term": "Use Case Diagram",
      "definition": "A UML diagram that shows user interactions with the system.",
      "tags": [
        "Design"
      ]
    },
    {
      "term": "Class Diagram",
      "definition": "A UML diagram that shows classes, attributes, methods, and relationships.",
      "tags": [
        "Design"
      ]
    },
    {
      "term": "Sequence Diagram",
      "definition": "A UML diagram that shows interaction flow between objects over time.",
      "tags": [
        "Design"
      ]
    },
    {
      "term": "Activity Diagram",
      "definition": "A UML diagram that shows workflow and business processes.",
      "tags": [
        "Design"
      ]
    },
    {
      "term": "ER Diagram",
      "definition": "A diagram that shows database entity relationships.",
      "tags": [
        "Design"
      ]
    },
    {
      "term": "Coding",
      "definition": "Writing source code using programming languages and frameworks.",
      "tags": [
        "Design"
      ]
    },
    {
      "term": "Unit Testing",
      "definition": "Testing each module independently.",
      "tags": [
        "Design"
      ]
    },
    {
      "term": "Integration Testing",
      "definition": "Testing multiple modules together.",
      "tags": [
        "Design"
      ]
    },
    {
      "term": "Debugging",
      "definition": "Identifying and fixing syntax errors, logical errors, and runtime errors.",
      "tags": [
        "Design"
      ]
    },
    {
      "term": "Code Review",
      "definition": "The examination of source code by other developers to improve quality and detect bugs.",
      "tags": [
        "Design"
      ]
    },
    {
      "term": "Design Review",
      "definition": "Evaluation of architecture, modules, security, scalability, and performance before or during implementation.",
      "tags": [
        "Design"
      ]
    },
    {
      "term": "Software Evolution",
      "definition": "The continuous process of modifying and updating software after deployment.",
      "tags": [
        "Evolution"
      ]
    },
    {
      "term": "Corrective Maintenance",
      "definition": "Maintenance that fixes defects and errors.",
      "tags": [
        "Evolution"
      ]
    },
    {
      "term": "Adaptive Maintenance",
      "definition": "Maintenance that adapts software to new environments.",
      "tags": [
        "Evolution"
      ]
    },
    {
      "term": "Perfective Maintenance",
      "definition": "Maintenance that improves performance, usability, or functionality.",
      "tags": [
        "Evolution"
      ]
    },
    {
      "term": "Preventive Maintenance",
      "definition": "Maintenance that improves maintainability and prevents future problems.",
      "tags": [
        "Evolution"
      ]
    },
    {
      "term": "Lehman's Laws",
      "definition": "Principles describing how software continues to change, grow, become complex, and decline without maintenance.",
      "tags": [
        "Evolution"
      ]
    },
    {
      "term": "Continuing Change",
      "definition": "A Lehman law stating that software must continually adapt or become less useful.",
      "tags": [
        "Evolution"
      ]
    },
    {
      "term": "Increasing Complexity",
      "definition": "A Lehman law stating that complexity increases unless effort is made to reduce it.",
      "tags": [
        "Evolution"
      ]
    },
    {
      "term": "Continuing Growth",
      "definition": "A Lehman law stating that software functionality continues to expand to satisfy expectations.",
      "tags": [
        "Evolution"
      ]
    },
    {
      "term": "Declining Quality",
      "definition": "A Lehman law stating that software quality deteriorates without maintenance.",
      "tags": [
        "Evolution"
      ]
    },
    {
      "term": "Legacy System",
      "definition": "An old software system still in active use, often critical but difficult to maintain.",
      "tags": [
        "Evolution"
      ]
    },
    {
      "term": "Software Reengineering",
      "definition": "Improving an existing system without changing its core functionality.",
      "tags": [
        "Evolution"
      ]
    },
    {
      "term": "Refactoring",
      "definition": "Restructuring code without changing external behavior.",
      "tags": [
        "Evolution"
      ]
    },
    {
      "term": "Change Request",
      "definition": "A request from users or stakeholders to modify the system.",
      "tags": [
        "Evolution"
      ]
    },
    {
      "term": "Impact Analysis",
      "definition": "Analysis of the effects, cost, and risk of proposed changes.",
      "tags": [
        "Evolution"
      ]
    },
    {
      "term": "Version Control",
      "definition": "Tools and practices that track code history, support collaboration, rollback, and branching.",
      "tags": [
        "Evolution"
      ]
    },
    {
      "term": "Git",
      "definition": "A distributed version control system widely used in software development.",
      "tags": [
        "Evolution"
      ]
    },
    {
      "term": "Technical Debt",
      "definition": "Shortcuts taken during development that create future maintenance problems.",
      "tags": [
        "Evolution"
      ]
    },
    {
      "term": "Cloud Migration",
      "definition": "Moving systems to cloud platforms for scalability, flexibility, and reduced infrastructure cost.",
      "tags": [
        "Evolution"
      ]
    },
    {
      "term": "DevSecOps",
      "definition": "Integrating security into the continuous development and deployment pipeline.",
      "tags": [
        "Evolution",
        "Security"
      ]
    },
    {
      "term": "Software Reuse",
      "definition": "Using existing software assets to develop new software systems.",
      "tags": [
        "Week 3-4",
        "Reuse"
      ]
    },
    {
      "term": "Reusable Asset",
      "definition": "A reusable source code file, component, library, framework, document, test case, or design.",
      "tags": [
        "Week 3-4"
      ]
    },
    {
      "term": "Code Reuse",
      "definition": "Reusing existing source code such as utility functions in multiple projects.",
      "tags": [
        "Week 3-4",
        "Reuse"
      ]
    },
    {
      "term": "Component Reuse",
      "definition": "Reusing independent software modules such as authentication or payment components.",
      "tags": [
        "Week 3-4",
        "Reuse"
      ]
    },
    {
      "term": "Framework Reuse",
      "definition": "Using development frameworks such as ReactJS, Angular, Laravel, or Spring Boot.",
      "tags": [
        "Week 3-4",
        "Reuse"
      ]
    },
    {
      "term": "Service Reuse",
      "definition": "Using external services through APIs, such as maps, payments, or notification services.",
      "tags": [
        "Week 3-4",
        "Reuse"
      ]
    },
    {
      "term": "Reusable Component",
      "definition": "A self-contained module designed for use in multiple systems.",
      "tags": [
        "Week 3-4"
      ]
    },
    {
      "term": "Software Product Line",
      "definition": "A collection of related software systems that share common features.",
      "tags": [
        "Week 3-4",
        "Reuse"
      ]
    },
    {
      "term": "Open-Source Reuse",
      "definition": "Using open-source software such as Linux, WordPress, or Bootstrap.",
      "tags": [
        "Week 3-4",
        "Reuse"
      ]
    },
    {
      "term": "Dependency Management",
      "definition": "Managing reused libraries, versions, compatibility, and updates.",
      "tags": [
        "Week 3-4",
        "Reuse"
      ]
    },
    {
      "term": "Socio-Technical System",
      "definition": "A system combining software, hardware, people, procedures, and organizational rules.",
      "tags": [
        "Week 3-4"
      ]
    },
    {
      "term": "Dependability",
      "definition": "The ability of a software system to deliver services users can trust.",
      "tags": [
        "Week 3-4"
      ]
    },
    {
      "term": "Availability",
      "definition": "A dependability attribute meaning the system is operational and accessible when needed.",
      "tags": [
        "Week 3-4",
        "Security"
      ]
    },
    {
      "term": "Reliability",
      "definition": "A dependability attribute meaning the system performs correctly without failure over time.",
      "tags": [
        "Week 3-4"
      ]
    },
    {
      "term": "Safety",
      "definition": "A dependability attribute meaning the system avoids causing harm or damage.",
      "tags": [
        "Week 3-4"
      ]
    },
    {
      "term": "Security",
      "definition": "Protection against unauthorized access, misuse, attacks, and damage.",
      "tags": [
        "Week 3-4"
      ]
    },
    {
      "term": "Maintainability",
      "definition": "The ability of a system to be repaired or updated efficiently.",
      "tags": [
        "Week 3-4"
      ]
    },
    {
      "term": "CIA Triad",
      "definition": "Confidentiality, Integrity, and Availability: the core pillars of software security.",
      "tags": [
        "Week 3-4"
      ]
    },
    {
      "term": "Confidentiality",
      "definition": "Ensuring only authorized users can access information.",
      "tags": [
        "Week 3-4",
        "Security"
      ]
    },
    {
      "term": "Integrity",
      "definition": "Ensuring data remains accurate, complete, and unaltered.",
      "tags": [
        "Week 3-4",
        "Security"
      ]
    },
    {
      "term": "Malware",
      "definition": "Malicious software such as viruses, worms, ransomware, spyware, or trojans.",
      "tags": [
        "Week 3-4",
        "Security"
      ]
    },
    {
      "term": "Phishing",
      "definition": "Fraudulent attempts to steal sensitive information through fake messages or websites.",
      "tags": [
        "Week 3-4",
        "Security"
      ]
    },
    {
      "term": "SQL Injection",
      "definition": "An attack that inserts malicious SQL commands into forms or queries.",
      "tags": [
        "Week 3-4",
        "Security"
      ]
    },
    {
      "term": "Cross-Site Scripting (XSS)",
      "definition": "An attack that injects malicious scripts into websites.",
      "tags": [
        "Week 3-4",
        "Security"
      ]
    },
    {
      "term": "Denial-of-Service (DoS)",
      "definition": "An attack that overwhelms a server so legitimate users cannot access it.",
      "tags": [
        "Week 3-4",
        "Security"
      ]
    },
    {
      "term": "Dependability Engineering",
      "definition": "Designing, developing, testing, and maintaining systems for reliability, safety, availability, and security.",
      "tags": [
        "Week 3-4"
      ]
    },
    {
      "term": "Fault Avoidance",
      "definition": "Preventing faults during development through good design, coding standards, and training.",
      "tags": [
        "Week 3-4"
      ]
    },
    {
      "term": "Fault Detection",
      "definition": "Identifying faults before deployment using testing, code reviews, and static analysis.",
      "tags": [
        "Week 3-4"
      ]
    },
    {
      "term": "Fault Tolerance",
      "definition": "Allowing systems to continue operating despite failures.",
      "tags": [
        "Week 3-4"
      ]
    },
    {
      "term": "Fault Recovery",
      "definition": "Restoring systems after failure, such as through database backup restoration.",
      "tags": [
        "Week 3-4"
      ]
    },
    {
      "term": "Safety-Critical System",
      "definition": "A system where failure may cause injury, loss of life, environmental damage, or major financial loss.",
      "tags": [
        "Week 3-4"
      ]
    },
    {
      "term": "Security Engineering",
      "definition": "Designing, developing, testing, and maintaining systems that resist malicious attacks and unauthorized access.",
      "tags": [
        "Week 3-4",
        "Security"
      ]
    },
    {
      "term": "Authentication",
      "definition": "Verifying user identity through passwords, biometrics, or two-factor authentication.",
      "tags": [
        "Week 3-4",
        "Security"
      ]
    },
    {
      "term": "Authorization",
      "definition": "Determining what an authenticated user is allowed to do.",
      "tags": [
        "Week 3-4",
        "Security"
      ]
    },
    {
      "term": "Non-Repudiation",
      "definition": "Ensuring users cannot deny actions they performed, such as signed transactions.",
      "tags": [
        "Week 3-4",
        "Security"
      ]
    },
    {
      "term": "Encryption",
      "definition": "Converting readable data into unreadable form to protect information.",
      "tags": [
        "Week 3-4",
        "Security"
      ]
    },
    {
      "term": "Symmetric Encryption",
      "definition": "Encryption that uses one key for encryption and decryption.",
      "tags": [
        "Week 3-4",
        "Security"
      ]
    },
    {
      "term": "Asymmetric Encryption",
      "definition": "Encryption that uses public and private keys.",
      "tags": [
        "Week 3-4",
        "Security"
      ]
    },
    {
      "term": "Threat Modeling",
      "definition": "Identifying assets, possible attackers, vulnerabilities, and prevention strategies before implementation.",
      "tags": [
        "Week 3-4",
        "Security"
      ]
    },
    {
      "term": "SSDLC",
      "definition": "Secure Software Development Lifecycle: integrating security into every software development phase.",
      "tags": [
        "Week 3-4"
      ]
    },
    {
      "term": "Penetration Testing",
      "definition": "Simulated attacks used to identify vulnerabilities.",
      "tags": [
        "Week 3-4",
        "Security"
      ]
    },
    {
      "term": "Vulnerability Scanning",
      "definition": "Automated detection of known weaknesses.",
      "tags": [
        "Week 3-4",
        "Security"
      ]
    },
    {
      "term": "Static Testing",
      "definition": "Analyzing source code without executing it.",
      "tags": [
        "Week 3-4",
        "Security"
      ]
    },
    {
      "term": "Dynamic Testing",
      "definition": "Testing an application while it is running.",
      "tags": [
        "Week 3-4",
        "Security"
      ]
    },
    {
      "term": "Firewall",
      "definition": "A control that filters incoming and outgoing network traffic.",
      "tags": [
        "Week 3-4",
        "Security"
      ]
    },
    {
      "term": "Intrusion Detection System (IDS)",
      "definition": "A system that monitors suspicious activities and attacks.",
      "tags": [
        "Week 3-4",
        "Security"
      ]
    },
    {
      "term": "Risk Assessment",
      "definition": "Identifying threats, vulnerabilities, likelihood, and impact of failures or attacks.",
      "tags": [
        "Week 3-4"
      ]
    },
    {
      "term": "Zero Trust",
      "definition": "A security approach where no user or device is automatically trusted.",
      "tags": [
        "Week 3-4"
      ]
    },
    {
      "term": "Cloud Security",
      "definition": "Protecting cloud-hosted applications, data, infrastructure, and services.",
      "tags": [
        "Week 3-4",
        "Security"
      ]
    },
    {
      "term": "AI-Based Security",
      "definition": "Using artificial intelligence to detect suspicious activities and threats.",
      "tags": [
        "Week 3-4",
        "Security"
      ]
    },
    {
      "term": "Reusable Assets",
      "definition": "Existing items that can be reused, including source code, components, libraries, frameworks, documentation, test cases, and designs.",
      "tags": [
        "Reuse"
      ]
    },
    {
      "term": "Reusable Software Component",
      "definition": "A self-contained module designed for use in multiple systems.",
      "tags": [
        "Reuse"
      ]
    },
    {
      "term": "Modular",
      "definition": "A component quality meaning it is organized as a separate module.",
      "tags": [
        "Reuse"
      ]
    },
    {
      "term": "Independent",
      "definition": "A component quality meaning it can work without unnecessary dependencies.",
      "tags": [
        "Reuse"
      ]
    },
    {
      "term": "Replaceable",
      "definition": "A component quality meaning it can be swapped or updated without breaking the whole system.",
      "tags": [
        "Reuse"
      ]
    },
    {
      "term": "Maintainable",
      "definition": "A component or system quality meaning it is easier to update and improve.",
      "tags": [
        "Reuse"
      ]
    },
    {
      "term": "Faster Development",
      "definition": "A reuse advantage because less coding is required.",
      "tags": [
        "Reuse"
      ]
    },
    {
      "term": "Reduced Cost",
      "definition": "A reuse advantage because development expenses are lower.",
      "tags": [
        "Reuse"
      ]
    },
    {
      "term": "Improved Quality",
      "definition": "A reuse advantage because reused components may already be tested.",
      "tags": [
        "Reuse"
      ]
    },
    {
      "term": "Reduced Risk",
      "definition": "A reuse advantage because proven modules can reduce errors.",
      "tags": [
        "Reuse"
      ]
    },
    {
      "term": "Standardization",
      "definition": "A reuse advantage where consistency is promoted across systems.",
      "tags": [
        "Reuse"
      ]
    },
    {
      "term": "Compatibility Issues",
      "definition": "A reuse disadvantage where a component may not fit the target system perfectly.",
      "tags": [
        "Reuse"
      ]
    },
    {
      "term": "Licensing Issues",
      "definition": "Legal restrictions or obligations connected with reused software.",
      "tags": [
        "Reuse"
      ]
    },
    {
      "term": "Application System Reuse",
      "definition": "Reusing entire applications, such as an existing CMS.",
      "tags": [
        "Reuse"
      ]
    },
    {
      "term": "Component-Based Reuse",
      "definition": "Reusing specific components, such as payment gateway integration.",
      "tags": [
        "Reuse"
      ]
    },
    {
      "term": "Object and Function Reuse",
      "definition": "Reusing classes and functions, such as utility libraries.",
      "tags": [
        "Reuse"
      ]
    },
    {
      "term": "Microservices Reuse",
      "definition": "Reusable independent services used as a modern software reuse trend.",
      "tags": [
        "Reuse"
      ]
    },
    {
      "term": "API Economy",
      "definition": "A trend where organizations provide reusable APIs.",
      "tags": [
        "Reuse"
      ]
    },
    {
      "term": "Cloud Services",
      "definition": "Reusable cloud-based infrastructure and services.",
      "tags": [
        "Reuse"
      ]
    },
    {
      "term": "Advanced Software Engineering",
      "definition": "Advanced principles, architectures, methodologies, and technologies for large-scale, complex, intelligent, enterprise-level systems.",
      "tags": [
        "Advanced SE"
      ]
    },
    {
      "term": "Scalability",
      "definition": "The ability to handle increasing workloads.",
      "tags": [
        "Advanced SE"
      ]
    },
    {
      "term": "Automation",
      "definition": "Use of automated workflows in development, testing, deployment, and operations.",
      "tags": [
        "Advanced SE"
      ]
    },
    {
      "term": "Distributed Systems",
      "definition": "Systems that run across multiple servers or locations.",
      "tags": [
        "Advanced SE"
      ]
    },
    {
      "term": "Cloud Computing",
      "definition": "Use of cloud services and infrastructure for software systems.",
      "tags": [
        "Advanced SE"
      ]
    },
    {
      "term": "Artificial Intelligence Integration",
      "definition": "Integrating AI capabilities into software systems.",
      "tags": [
        "Advanced SE"
      ]
    },
    {
      "term": "Software Quality Assurance",
      "definition": "Activities focused on ensuring software quality.",
      "tags": [
        "Advanced SE"
      ]
    },
    {
      "term": "Large-Scale System",
      "definition": "A system that supports many users and processes.",
      "tags": [
        "Advanced SE"
      ]
    },
    {
      "term": "Secure System",
      "definition": "A system that protects data and operations.",
      "tags": [
        "Advanced SE"
      ]
    },
    {
      "term": "Fault-Tolerant System",
      "definition": "A system that continues operating during failures.",
      "tags": [
        "Advanced SE"
      ]
    },
    {
      "term": "Agile Software Development",
      "definition": "A modern approach focused on iterative development, feedback, collaboration, and rapid delivery.",
      "tags": [
        "Advanced SE"
      ]
    },
    {
      "term": "Continuous Integration (CI)",
      "definition": "Developers frequently merge code changes into shared repositories.",
      "tags": [
        "Advanced SE"
      ]
    },
    {
      "term": "Continuous Deployment (CD)",
      "definition": "Applications are automatically tested and deployed.",
      "tags": [
        "Advanced SE"
      ]
    },
    {
      "term": "Jenkins",
      "definition": "A DevOps tool listed as an example tool.",
      "tags": [
        "Advanced SE"
      ]
    },
    {
      "term": "Docker",
      "definition": "A containerization tool used to package applications with dependencies.",
      "tags": [
        "Advanced SE"
      ]
    },
    {
      "term": "Kubernetes",
      "definition": "A container orchestration platform for deployment management, scaling, load balancing, and fault recovery.",
      "tags": [
        "Advanced SE"
      ]
    },
    {
      "term": "GitHub Actions",
      "definition": "A DevOps automation tool listed in the source.",
      "tags": [
        "Advanced SE"
      ]
    },
    {
      "term": "Cloud-Native Software Engineering",
      "definition": "Designing applications specifically for cloud environments.",
      "tags": [
        "Advanced SE"
      ]
    },
    {
      "term": "Elastic Scalability",
      "definition": "Cloud-native ability to scale resources based on demand.",
      "tags": [
        "Advanced SE"
      ]
    },
    {
      "term": "Containerization",
      "definition": "Packaging applications with all dependencies.",
      "tags": [
        "Advanced SE"
      ]
    },
    {
      "term": "Independent Deployment",
      "definition": "A microservices advantage where services can be deployed separately.",
      "tags": [
        "Advanced SE"
      ]
    },
    {
      "term": "Distributed Debugging",
      "definition": "A microservices challenge where debugging is harder across services.",
      "tags": [
        "Advanced SE"
      ]
    },
    {
      "term": "Service Coordination",
      "definition": "A microservices challenge involving coordination among independent services.",
      "tags": [
        "Advanced SE"
      ]
    },
    {
      "term": "Recommendation Systems",
      "definition": "AI application that suggests content or items based on data.",
      "tags": [
        "Advanced SE"
      ]
    },
    {
      "term": "Chatbots",
      "definition": "AI software that interacts with users conversationally.",
      "tags": [
        "Advanced SE"
      ]
    },
    {
      "term": "Predictive Analytics",
      "definition": "AI application that predicts future behavior or outcomes from data.",
      "tags": [
        "Advanced SE"
      ]
    },
    {
      "term": "Automated Testing",
      "definition": "Using automation or AI to support testing activities.",
      "tags": [
        "Advanced SE"
      ]
    },
    {
      "term": "Intelligent Automation",
      "definition": "AI-driven automation of tasks or workflows.",
      "tags": [
        "Advanced SE"
      ]
    },
    {
      "term": "Big Data Engineering",
      "definition": "Engineering for systems that process massive volumes of data.",
      "tags": [
        "Advanced SE"
      ]
    },
    {
      "term": "Hadoop",
      "definition": "A big data technology listed in the source.",
      "tags": [
        "Advanced SE"
      ]
    },
    {
      "term": "Spark",
      "definition": "A big data technology listed in the source.",
      "tags": [
        "Advanced SE"
      ]
    },
    {
      "term": "NoSQL Databases",
      "definition": "Databases often used for large-scale or flexible data processing.",
      "tags": [
        "Advanced SE"
      ]
    },
    {
      "term": "Blockchain",
      "definition": "A decentralized digital ledger.",
      "tags": [
        "Advanced SE"
      ]
    },
    {
      "term": "Smart Contracts",
      "definition": "Blockchain-based agreements executed by code.",
      "tags": [
        "Advanced SE"
      ]
    },
    {
      "term": "Internet of Things (IoT)",
      "definition": "Connecting physical devices to the internet.",
      "tags": [
        "Advanced SE"
      ]
    },
    {
      "term": "Edge Computing",
      "definition": "Processing data closer to users or devices.",
      "tags": [
        "Advanced SE"
      ]
    },
    {
      "term": "Quantum Computing",
      "definition": "Advanced computing using quantum mechanics.",
      "tags": [
        "Advanced SE"
      ]
    },
    {
      "term": "Low-Code/No-Code Development",
      "definition": "Faster application development with minimal coding.",
      "tags": [
        "Advanced SE"
      ]
    },
    {
      "term": "Green Software Engineering",
      "definition": "Energy-efficient software engineering.",
      "tags": [
        "Advanced SE",
        "Advanced Se"
      ]
    },
    {
      "term": "Virus",
      "definition": "A type of malware listed in the source.",
      "tags": [
        "Security"
      ]
    },
    {
      "term": "Worm",
      "definition": "A type of malware listed in the source.",
      "tags": [
        "Security"
      ]
    },
    {
      "term": "Trojan",
      "definition": "A type of malware listed in the source.",
      "tags": [
        "Security"
      ]
    },
    {
      "term": "Ransomware",
      "definition": "A type of malware listed in the source.",
      "tags": [
        "Security"
      ]
    },
    {
      "term": "Security Vulnerability",
      "definition": "A weakness in software that attackers can exploit.",
      "tags": [
        "Security"
      ]
    },
    {
      "term": "Weak Passwords",
      "definition": "A common cause of security vulnerabilities.",
      "tags": [
        "Security"
      ]
    },
    {
      "term": "Poor Coding Practices",
      "definition": "A common cause of security vulnerabilities.",
      "tags": [
        "Security"
      ]
    },
    {
      "term": "Unpatched Software",
      "definition": "A common vulnerability cause where updates are missing.",
      "tags": [
        "Security"
      ]
    },
    {
      "term": "Lack of Encryption",
      "definition": "A common cause of security vulnerabilities.",
      "tags": [
        "Security"
      ]
    },
    {
      "term": "Misconfigured Servers",
      "definition": "A common cause of security vulnerabilities.",
      "tags": [
        "Security"
      ]
    },
    {
      "term": "Secure Software Development Lifecycle (SSDLC)",
      "definition": "Integrating security into every phase of software development.",
      "tags": [
        "Security"
      ]
    },
    {
      "term": "Password Authentication",
      "definition": "Users log in using usernames and passwords.",
      "tags": [
        "Security"
      ]
    },
    {
      "term": "Two-Factor Authentication (2FA)",
      "definition": "Requires additional verification such as OTP codes.",
      "tags": [
        "Security"
      ]
    },
    {
      "term": "Biometric Authentication",
      "definition": "Uses physical characteristics such as fingerprint or facial recognition.",
      "tags": [
        "Security"
      ]
    },
    {
      "term": "Secure Coding",
      "definition": "Writing code with security practices such as input validation and parameterized SQL.",
      "tags": [
        "Security"
      ]
    },
    {
      "term": "Input Validation",
      "definition": "Checking user input before processing it.",
      "tags": [
        "Security"
      ]
    },
    {
      "term": "Parameterized SQL Queries",
      "definition": "SQL practice that helps prevent injection attacks.",
      "tags": [
        "Security"
      ]
    },
    {
      "term": "Hardcoded Passwords",
      "definition": "Passwords written directly into code, which should be avoided.",
      "tags": [
        "Security"
      ]
    },
    {
      "term": "Proper Error Handling",
      "definition": "Handling errors without exposing sensitive information.",
      "tags": [
        "Security"
      ]
    },
    {
      "term": "Secure APIs",
      "definition": "APIs designed and used with security controls.",
      "tags": [
        "Security"
      ]
    },
    {
      "term": "OTP Verification",
      "definition": "One-time password verification used as a security feature.",
      "tags": [
        "Security"
      ]
    },
    {
      "term": "Fraud Detection",
      "definition": "Security feature used to detect suspicious financial behavior.",
      "tags": [
        "Security"
      ]
    },
    {
      "term": "Session Timeout",
      "definition": "Security feature that ends inactive sessions.",
      "tags": [
        "Security"
      ]
    },
    {
      "term": "Security Policy",
      "definition": "Organizational rule that guides security practices.",
      "tags": [
        "Security"
      ]
    },
    {
      "term": "Password Policy",
      "definition": "Security policy for password requirements and use.",
      "tags": [
        "Security"
      ]
    },
    {
      "term": "Data Privacy Policy",
      "definition": "Policy guiding protection and handling of data.",
      "tags": [
        "Security"
      ]
    },
    {
      "term": "Access Control Policy",
      "definition": "Policy governing who can access what.",
      "tags": [
        "Security"
      ]
    },
    {
      "term": "Incident Response Procedure",
      "definition": "Procedure for handling security incidents.",
      "tags": [
        "Security"
      ]
    },
    {
      "term": "Zero Trust Architecture",
      "definition": "No user or device is automatically trusted.",
      "tags": [
        "Security"
      ]
    },
    {
      "term": "Component-Based Software Engineering",
      "definition": "Building systems from reusable components with explicit interfaces.",
      "tags": [
        "Component Based Software"
      ]
    },
    {
      "term": "Component Interface",
      "definition": "A contract describing services a component provides or requires.",
      "tags": [
        "Component Based Software"
      ]
    },
    {
      "term": "COTS",
      "definition": "Commercial off-the-shelf software reused instead of custom development.",
      "tags": [
        "Component Based Software"
      ]
    },
    {
      "term": "Service-Oriented Architecture",
      "definition": "Architecture that exposes functionality as reusable services.",
      "tags": [
        "Service Oriented Architecture"
      ]
    },
    {
      "term": "Service Contract",
      "definition": "Description of service operations, inputs, outputs, and behavior.",
      "tags": [
        "Service Oriented Architecture"
      ]
    },
    {
      "term": "Loose Coupling",
      "definition": "A design goal where services or modules depend on each other as little as possible.",
      "tags": [
        "Service Oriented Architecture"
      ]
    },
    {
      "term": "Service Composition",
      "definition": "Combining multiple services to perform a larger business process.",
      "tags": [
        "Service Oriented Architecture"
      ]
    },
    {
      "term": "Software Project Management",
      "definition": "Planning, organizing, monitoring, and controlling software work.",
      "tags": [
        "Software Management"
      ]
    },
    {
      "term": "Project Plan",
      "definition": "Document or baseline describing scope, schedule, resources, risks, and deliverables.",
      "tags": [
        "Software Management"
      ]
    },
    {
      "term": "Milestone",
      "definition": "A significant checkpoint in a project schedule.",
      "tags": [
        "Software Management"
      ]
    },
    {
      "term": "Risk Management",
      "definition": "Identifying, analyzing, controlling, and monitoring project risks.",
      "tags": [
        "Software Management"
      ]
    },
    {
      "term": "Quality Management",
      "definition": "Activities that ensure products and processes meet required standards.",
      "tags": [
        "Software Management"
      ]
    }
  ],
  "quizBanks": {
    "prelimA": [
      {
        "id": "prelim-process-1",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "What is a software process?",
        "answer": "A structured set of activities, methods, practices, and transformations for developing and maintaining software",
        "wrong": [
          "A programming language used only for web applications",
          "A diagram that only shows database relationships",
          "A testing tool that runs after deployment"
        ],
        "explanation": "A software process provides a disciplined framework from planning and analysis through deployment and maintenance."
      },
      {
        "id": "prelim-process-2",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "Which objective is directly associated with a software process?",
        "answer": "Producing high-quality software that meets user and business requirements",
        "wrong": [
          "Avoiding all documentation during development",
          "Replacing testing with deployment",
          "Making software impossible to modify"
        ],
        "explanation": "The process aims to deliver quality software, meet requirements, reduce risks, and improve maintainability."
      },
      {
        "id": "prelim-process-3",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "What is the main deliverable of the requirements analysis phase?",
        "answer": "Software Requirements Specification (SRS)",
        "wrong": [
          "Source code repository",
          "Deployment certificate",
          "Compiled executable only"
        ],
        "explanation": "Requirements analysis ends with the SRS, which documents the system's functional and non-functional requirements."
      },
      {
        "id": "prelim-process-4",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "Which activity identifies what users and stakeholders need from the system?",
        "answer": "Requirements Analysis",
        "wrong": [
          "Deployment",
          "Code Review",
          "Refactoring"
        ],
        "explanation": "Requirements analysis gathers and specifies user and stakeholder needs before design begins."
      },
      {
        "id": "prelim-process-5",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "What does system design do in the software process?",
        "answer": "Transforms requirements into a blueprint for implementation",
        "wrong": [
          "Publishes the app on an app store",
          "Deletes old code after release",
          "Runs only after maintenance"
        ],
        "explanation": "Design converts requirements into architectural, database, interface, and component plans."
      },
      {
        "id": "prelim-process-6",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "Which sequence best matches the core software process flow?",
        "answer": "Requirements, design, implementation, testing, deployment, maintenance",
        "wrong": [
          "Testing, deployment, design, requirements, implementation, maintenance",
          "Deployment, requirements, debugging, design, maintenance, coding",
          "Maintenance, coding, requirements, deployment, testing, design"
        ],
        "explanation": "The standard flow begins by understanding needs, designing a solution, coding it, testing it, deploying it, and maintaining it."
      },
      {
        "id": "prelim-process-7",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "Which model follows a sequential phase-by-phase approach?",
        "answer": "Waterfall Model",
        "wrong": [
          "Agile Model",
          "Spiral Model",
          "DevOps Model"
        ],
        "explanation": "Waterfall moves through phases in order, with each phase completed before the next begins."
      },
      {
        "id": "prelim-process-8",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "When is the Waterfall model most appropriate?",
        "answer": "Projects with stable and well-defined requirements",
        "wrong": [
          "Projects with unclear requirements that change daily",
          "High-risk systems that need repeated risk analysis only",
          "Projects requiring continuous stakeholder feedback every sprint"
        ],
        "explanation": "Waterfall works best when requirements are known early and unlikely to change."
      },
      {
        "id": "prelim-process-9",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "What is a key characteristic of Agile development?",
        "answer": "Short iterations called sprints with continuous feedback",
        "wrong": [
          "All testing delayed until several years after release",
          "No stakeholder involvement after requirements",
          "A one-way sequence with no adaptation"
        ],
        "explanation": "Agile uses short cycles, frequent delivery, feedback, and adaptation to change."
      },
      {
        "id": "prelim-process-10",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "Which software process model focuses strongly on risk analysis?",
        "answer": "Spiral Model",
        "wrong": [
          "Waterfall Model",
          "Pure deployment model",
          "Database-only model"
        ],
        "explanation": "The Spiral model combines iterative development with risk identification and mitigation."
      },
      {
        "id": "prelim-process-11",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "Which disadvantage is associated with Agile?",
        "answer": "It requires active and continuous stakeholder involvement",
        "wrong": [
          "It never delivers working software",
          "It cannot respond to changing requirements",
          "It has no iterations"
        ],
        "explanation": "Agile depends on frequent feedback and collaboration, which requires ongoing stakeholder availability."
      },
      {
        "id": "prelim-process-12",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "Which issue can occur when a project has no defined software process?",
        "answer": "Delays, cost overruns, poor quality, and maintenance difficulties",
        "wrong": [
          "Automatic improvement in reliability",
          "Zero communication requirements",
          "Instant delivery without testing"
        ],
        "explanation": "A defined process helps make development more systematic and predictable."
      },
      {
        "id": "prelim-process-13",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "What does DevOps combine?",
        "answer": "Development and operations for continuous delivery",
        "wrong": [
          "Database tables and entity relationships only",
          "Syntax errors and runtime errors",
          "User interface colors and fonts"
        ],
        "explanation": "DevOps links development and operations practices to make delivery smoother and faster."
      },
      {
        "id": "prelim-process-14",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "What does CI/CD primarily automate?",
        "answer": "Testing and deployment pipelines",
        "wrong": [
          "Manual interviews with users",
          "Choosing programming languages",
          "Writing all requirements without review"
        ],
        "explanation": "Continuous Integration and Continuous Deployment automate checks and release steps."
      },
      {
        "id": "prelim-process-15",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "In the mobile banking example, which activity tests security vulnerabilities, transaction accuracy, and heavy-load performance?",
        "answer": "Testing Phase",
        "wrong": [
          "Requirements Phase",
          "Initial coding only",
          "Interface sketching"
        ],
        "explanation": "QA engineers validate security, correctness, and performance during testing."
      },
      {
        "id": "prelim-process-16",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "Which is a common challenge in the software process?",
        "answer": "Changing requirements",
        "wrong": [
          "Perfect communication at all times",
          "No need for documentation",
          "Guaranteed realistic deadlines"
        ],
        "explanation": "The materials list changing requirements, poor communication, unrealistic deadlines, inadequate testing, and lack of documentation as common problems."
      },
      {
        "id": "prelim-design-1",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "What does architectural design define?",
        "answer": "The overall structure and organization of the system",
        "wrong": [
          "Only the color palette of the interface",
          "Only syntax errors in the code",
          "The final app store listing"
        ],
        "explanation": "Architectural design defines structures such as client-server, three-tier, and microservices."
      },
      {
        "id": "prelim-design-2",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "Which design type defines tables, relationships, and data storage?",
        "answer": "Database Design",
        "wrong": [
          "Interface Design",
          "Code Review",
          "Activity Design"
        ],
        "explanation": "Database design maps entities, relationships, tables, primary keys, and foreign keys."
      },
      {
        "id": "prelim-design-3",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "Which design type focuses on login forms, dashboards, and navigation menus?",
        "answer": "Interface Design",
        "wrong": [
          "Component Design",
          "Spiral Design",
          "Version Control Design"
        ],
        "explanation": "Interface design defines how users interact visually with the system."
      },
      {
        "id": "prelim-design-4",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "Which design type defines modules and classes such as Authentication, Payment, and Report Generation?",
        "answer": "Component Design",
        "wrong": [
          "Database Design",
          "Cloud Design",
          "Requirements Analysis"
        ],
        "explanation": "Component design breaks the system into internal modules, classes, and responsibilities."
      },
      {
        "id": "prelim-design-5",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "Which architecture uses presentation, business logic, and data layers?",
        "answer": "Three-Tier Architecture",
        "wrong": [
          "Single-table architecture",
          "Code review architecture",
          "Legacy-only architecture"
        ],
        "explanation": "A three-tier architecture separates presentation, business logic, and data concerns."
      },
      {
        "id": "prelim-design-6",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "What best describes microservices architecture?",
        "answer": "Independent services that communicate through APIs",
        "wrong": [
          "A single file containing the whole application",
          "A database table with no relationships",
          "A testing phase performed after deployment only"
        ],
        "explanation": "Microservices split the system into small independent services connected through APIs."
      },
      {
        "id": "prelim-design-7",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "Which design principle hides unnecessary implementation details?",
        "answer": "Abstraction",
        "wrong": [
          "Encapsulation",
          "Low Coupling",
          "High Cohesion"
        ],
        "explanation": "Abstraction lets users interact with useful behavior without seeing internal implementation."
      },
      {
        "id": "prelim-design-8",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "Which principle combines data and methods into one unit?",
        "answer": "Encapsulation",
        "wrong": [
          "Abstraction",
          "Deployment",
          "Impact Analysis"
        ],
        "explanation": "Encapsulation keeps related data and behavior together, such as in a Student class."
      },
      {
        "id": "prelim-design-9",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "What does modularity mean?",
        "answer": "Dividing software into smaller independent modules",
        "wrong": [
          "Putting every feature in one long function",
          "Avoiding all class diagrams",
          "Running tests before writing any requirements"
        ],
        "explanation": "Modularity separates responsibilities into manageable parts like Inventory, Payment, and Shipping."
      }
    ],
    "prelimB": [
      {
        "id": "prelim-design-10",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "What does low coupling require?",
        "answer": "Modules should have minimal dependency on one another",
        "wrong": [
          "Modules should all depend on one giant shared function",
          "Every module should handle every responsibility",
          "All code should be merged into one class"
        ],
        "explanation": "Low coupling makes updates easier because modules are not tightly dependent."
      },
      {
        "id": "prelim-design-11",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "What does high cohesion mean?",
        "answer": "A module focuses on one specific responsibility",
        "wrong": [
          "A module handles unrelated tasks at the same time",
          "A module avoids having a purpose",
          "A system has no internal structure"
        ],
        "explanation": "High cohesion keeps each module clear, understandable, and maintainable."
      },
      {
        "id": "prelim-design-12",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "Why is UML used in software engineering?",
        "answer": "To visualize software designs before coding begins",
        "wrong": [
          "To replace all testing activities",
          "To deploy software automatically",
          "To remove the need for requirements"
        ],
        "explanation": "UML diagrams communicate system design before implementation."
      },
      {
        "id": "prelim-design-13",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "Which UML diagram shows user interactions with the system?",
        "answer": "Use Case Diagram",
        "wrong": [
          "Class Diagram",
          "ER Diagram",
          "Sequence Diagram"
        ],
        "explanation": "Use case diagrams show actors and the actions they perform with the system."
      },
      {
        "id": "prelim-design-14",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "Which UML diagram shows classes, attributes, and relationships?",
        "answer": "Class Diagram",
        "wrong": [
          "Activity Diagram",
          "Use Case Diagram",
          "Deployment checklist"
        ],
        "explanation": "Class diagrams model object-oriented structure: classes, attributes, methods, and relationships."
      },
      {
        "id": "prelim-design-15",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "Which diagram shows interaction flow between objects?",
        "answer": "Sequence Diagram",
        "wrong": [
          "ER Diagram",
          "Use Case Diagram",
          "Database schema only"
        ],
        "explanation": "Sequence diagrams show how objects interact over time."
      },
      {
        "id": "prelim-design-16",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "What does unit testing check?",
        "answer": "Each module independently",
        "wrong": [
          "Only final user feedback",
          "Only external marketing pages",
          "The whole organization chart"
        ],
        "explanation": "Unit tests validate one module or unit at a time, such as checking login behavior."
      },
      {
        "id": "prelim-design-17",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "What is the purpose of a design review?",
        "answer": "To evaluate scalability, module design, security, and performance requirements",
        "wrong": [
          "To delete the architecture before coding",
          "To test only spelling in comments",
          "To replace all source code reviews"
        ],
        "explanation": "Design review checks whether the design is sound before or during implementation."
      },
      {
        "id": "prelim-evolution-1",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "What is software evolution?",
        "answer": "The continuous process of modifying and updating software after deployment",
        "wrong": [
          "The first draft of source code before testing",
          "A diagram used only for database tables",
          "A rule that software should never change"
        ],
        "explanation": "Software evolution keeps systems aligned with changing requirements, technologies, and user needs."
      },
      {
        "id": "prelim-evolution-2",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "Why must software evolve?",
        "answer": "User needs, business rules, technology, security, and performance requirements change",
        "wrong": [
          "Software becomes perfect immediately after deployment",
          "Maintenance is never required after release",
          "Old platforms never become outdated"
        ],
        "explanation": "The materials emphasize that deployed systems are not static products."
      },
      {
        "id": "prelim-evolution-3",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "Which set correctly lists the four maintenance types?",
        "answer": "Corrective, adaptive, perfective, preventive",
        "wrong": [
          "Planning, coding, compiling, publishing",
          "Syntax, logic, runtime, deployment",
          "Client, server, database, network"
        ],
        "explanation": "Software maintenance is commonly classified into these four categories."
      },
      {
        "id": "prelim-evolution-4",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "Which maintenance type fixes defects and errors?",
        "answer": "Corrective Maintenance",
        "wrong": [
          "Adaptive Maintenance",
          "Perfective Maintenance",
          "Preventive Maintenance"
        ],
        "explanation": "Corrective maintenance fixes bugs, such as a login defect."
      },
      {
        "id": "prelim-evolution-5",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "Which maintenance type adapts software to new environments?",
        "answer": "Adaptive Maintenance",
        "wrong": [
          "Corrective Maintenance",
          "Perfective Maintenance",
          "Preventive Maintenance"
        ],
        "explanation": "Adaptive maintenance updates software for new operating systems, platforms, hardware, or environments."
      },
      {
        "id": "prelim-evolution-6",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "Which maintenance type improves performance or usability?",
        "answer": "Perfective Maintenance",
        "wrong": [
          "Corrective Maintenance",
          "Adaptive Maintenance",
          "Preventive Maintenance"
        ],
        "explanation": "Perfective maintenance enhances usability, performance, or features."
      },
      {
        "id": "prelim-evolution-7",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "Which maintenance type prevents future problems by improving maintainability?",
        "answer": "Preventive Maintenance",
        "wrong": [
          "Adaptive Maintenance",
          "Corrective Maintenance",
          "Perfective Maintenance"
        ],
        "explanation": "Preventive maintenance includes work such as refactoring to reduce complexity."
      },
      {
        "id": "prelim-evolution-8",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "What does Lehman's law of Continuing Change state?",
        "answer": "Software must continually adapt or become less useful",
        "wrong": [
          "All software should stop changing after release",
          "Testing should happen only once",
          "Software quality always improves without maintenance"
        ],
        "explanation": "Continuing Change means useful software must adapt to its environment."
      },
      {
        "id": "prelim-evolution-9",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "What does Lehman's law of Increasing Complexity warn about?",
        "answer": "Complexity increases unless active effort is made to reduce it",
        "wrong": [
          "Complexity always disappears automatically after deployment",
          "Only brand-new systems can become complex",
          "Documentation causes every system to fail"
        ],
        "explanation": "As systems evolve, complexity tends to grow unless controlled through maintenance practices."
      },
      {
        "id": "prelim-evolution-10",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "What is a legacy system?",
        "answer": "An old software system still in active use, often critical but difficult to maintain",
        "wrong": [
          "A new prototype with no users",
          "A design diagram for future software",
          "A temporary test script"
        ],
        "explanation": "Legacy systems often run on outdated technology but remain important to business operations."
      },
      {
        "id": "prelim-evolution-11",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "Which is a common problem with legacy systems?",
        "answer": "Lack of documentation and high maintenance cost",
        "wrong": [
          "Guaranteed perfect security",
          "No dependency on outdated technology",
          "Unlimited supply of skilled developers"
        ],
        "explanation": "Legacy systems often suffer from outdated technology, poor documentation, security issues, and scarce expertise."
      },
      {
        "id": "prelim-evolution-12",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "What does software reengineering do?",
        "answer": "Improves an existing system without changing its core functionality",
        "wrong": [
          "Deletes an application and forbids replacement",
          "Changes external behavior randomly",
          "Only renames variables without analysis"
        ],
        "explanation": "Reengineering can include code restructuring, database migration, interface modernization, and documentation improvement."
      },
      {
        "id": "prelim-evolution-13",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "What is refactoring?",
        "answer": "Restructuring code without changing external behavior",
        "wrong": [
          "Adding random features without testing",
          "Replacing all users with administrators",
          "Deploying software before coding"
        ],
        "explanation": "Refactoring improves readability, reduces complexity, and improves maintainability while behavior remains the same."
      },
      {
        "id": "prelim-evolution-14",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "Which step comes immediately after a change request in the software evolution process?",
        "answer": "Impact Analysis",
        "wrong": [
          "Deployment",
          "Final user training",
          "Code deletion"
        ],
        "explanation": "After a change request, engineers analyze the effects and cost before modifying the design and code."
      },
      {
        "id": "prelim-evolution-15",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "Which benefit belongs to version control systems?",
        "answer": "Tracking history, supporting collaboration, rollback, and branching",
        "wrong": [
          "Preventing all software changes forever",
          "Removing the need for testing",
          "Guaranteeing there will be no bugs"
        ],
        "explanation": "Git, GitHub, GitLab, and Bitbucket help teams manage change over time."
      },
      {
        "id": "prelim-evolution-16",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "What is technical debt?",
        "answer": "Shortcuts taken during development that create future maintenance problems",
        "wrong": [
          "A formal UML diagram for payment systems",
          "A type of operating system update",
          "An automated deployment pipeline"
        ],
        "explanation": "Technical debt can come from tight deadlines, poor design, and weak testing coverage."
      },
      {
        "id": "prelim-evolution-17",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "What does DevSecOps emphasize?",
        "answer": "Integrating security into the continuous development and deployment pipeline",
        "wrong": [
          "Removing security checks until after release",
          "Keeping all legacy systems unchanged forever",
          "Replacing version control with manual copies"
        ],
        "explanation": "DevSecOps treats security as part of ongoing development rather than an afterthought."
      }
    ],
    "prelimCombined": [
      {
        "id": "prelim-process-1",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "What is a software process?",
        "answer": "A structured set of activities, methods, practices, and transformations for developing and maintaining software",
        "wrong": [
          "A programming language used only for web applications",
          "A diagram that only shows database relationships",
          "A testing tool that runs after deployment"
        ],
        "explanation": "A software process provides a disciplined framework from planning and analysis through deployment and maintenance."
      },
      {
        "id": "prelim-process-2",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "Which objective is directly associated with a software process?",
        "answer": "Producing high-quality software that meets user and business requirements",
        "wrong": [
          "Avoiding all documentation during development",
          "Replacing testing with deployment",
          "Making software impossible to modify"
        ],
        "explanation": "The process aims to deliver quality software, meet requirements, reduce risks, and improve maintainability."
      },
      {
        "id": "prelim-process-3",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "What is the main deliverable of the requirements analysis phase?",
        "answer": "Software Requirements Specification (SRS)",
        "wrong": [
          "Source code repository",
          "Deployment certificate",
          "Compiled executable only"
        ],
        "explanation": "Requirements analysis ends with the SRS, which documents the system's functional and non-functional requirements."
      },
      {
        "id": "prelim-process-4",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "Which activity identifies what users and stakeholders need from the system?",
        "answer": "Requirements Analysis",
        "wrong": [
          "Deployment",
          "Code Review",
          "Refactoring"
        ],
        "explanation": "Requirements analysis gathers and specifies user and stakeholder needs before design begins."
      },
      {
        "id": "prelim-process-5",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "What does system design do in the software process?",
        "answer": "Transforms requirements into a blueprint for implementation",
        "wrong": [
          "Publishes the app on an app store",
          "Deletes old code after release",
          "Runs only after maintenance"
        ],
        "explanation": "Design converts requirements into architectural, database, interface, and component plans."
      },
      {
        "id": "prelim-process-6",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "Which sequence best matches the core software process flow?",
        "answer": "Requirements, design, implementation, testing, deployment, maintenance",
        "wrong": [
          "Testing, deployment, design, requirements, implementation, maintenance",
          "Deployment, requirements, debugging, design, maintenance, coding",
          "Maintenance, coding, requirements, deployment, testing, design"
        ],
        "explanation": "The standard flow begins by understanding needs, designing a solution, coding it, testing it, deploying it, and maintaining it."
      },
      {
        "id": "prelim-process-7",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "Which model follows a sequential phase-by-phase approach?",
        "answer": "Waterfall Model",
        "wrong": [
          "Agile Model",
          "Spiral Model",
          "DevOps Model"
        ],
        "explanation": "Waterfall moves through phases in order, with each phase completed before the next begins."
      },
      {
        "id": "prelim-process-8",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "When is the Waterfall model most appropriate?",
        "answer": "Projects with stable and well-defined requirements",
        "wrong": [
          "Projects with unclear requirements that change daily",
          "High-risk systems that need repeated risk analysis only",
          "Projects requiring continuous stakeholder feedback every sprint"
        ],
        "explanation": "Waterfall works best when requirements are known early and unlikely to change."
      },
      {
        "id": "prelim-process-9",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "What is a key characteristic of Agile development?",
        "answer": "Short iterations called sprints with continuous feedback",
        "wrong": [
          "All testing delayed until several years after release",
          "No stakeholder involvement after requirements",
          "A one-way sequence with no adaptation"
        ],
        "explanation": "Agile uses short cycles, frequent delivery, feedback, and adaptation to change."
      },
      {
        "id": "prelim-process-10",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "Which software process model focuses strongly on risk analysis?",
        "answer": "Spiral Model",
        "wrong": [
          "Waterfall Model",
          "Pure deployment model",
          "Database-only model"
        ],
        "explanation": "The Spiral model combines iterative development with risk identification and mitigation."
      },
      {
        "id": "prelim-process-11",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "Which disadvantage is associated with Agile?",
        "answer": "It requires active and continuous stakeholder involvement",
        "wrong": [
          "It never delivers working software",
          "It cannot respond to changing requirements",
          "It has no iterations"
        ],
        "explanation": "Agile depends on frequent feedback and collaboration, which requires ongoing stakeholder availability."
      },
      {
        "id": "prelim-process-12",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "Which issue can occur when a project has no defined software process?",
        "answer": "Delays, cost overruns, poor quality, and maintenance difficulties",
        "wrong": [
          "Automatic improvement in reliability",
          "Zero communication requirements",
          "Instant delivery without testing"
        ],
        "explanation": "A defined process helps make development more systematic and predictable."
      },
      {
        "id": "prelim-process-13",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "What does DevOps combine?",
        "answer": "Development and operations for continuous delivery",
        "wrong": [
          "Database tables and entity relationships only",
          "Syntax errors and runtime errors",
          "User interface colors and fonts"
        ],
        "explanation": "DevOps links development and operations practices to make delivery smoother and faster."
      },
      {
        "id": "prelim-process-14",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "What does CI/CD primarily automate?",
        "answer": "Testing and deployment pipelines",
        "wrong": [
          "Manual interviews with users",
          "Choosing programming languages",
          "Writing all requirements without review"
        ],
        "explanation": "Continuous Integration and Continuous Deployment automate checks and release steps."
      },
      {
        "id": "prelim-process-15",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "In the mobile banking example, which activity tests security vulnerabilities, transaction accuracy, and heavy-load performance?",
        "answer": "Testing Phase",
        "wrong": [
          "Requirements Phase",
          "Initial coding only",
          "Interface sketching"
        ],
        "explanation": "QA engineers validate security, correctness, and performance during testing."
      },
      {
        "id": "prelim-process-16",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "Which is a common challenge in the software process?",
        "answer": "Changing requirements",
        "wrong": [
          "Perfect communication at all times",
          "No need for documentation",
          "Guaranteed realistic deadlines"
        ],
        "explanation": "The materials list changing requirements, poor communication, unrealistic deadlines, inadequate testing, and lack of documentation as common problems."
      },
      {
        "id": "prelim-design-1",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "What does architectural design define?",
        "answer": "The overall structure and organization of the system",
        "wrong": [
          "Only the color palette of the interface",
          "Only syntax errors in the code",
          "The final app store listing"
        ],
        "explanation": "Architectural design defines structures such as client-server, three-tier, and microservices."
      },
      {
        "id": "prelim-design-2",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "Which design type defines tables, relationships, and data storage?",
        "answer": "Database Design",
        "wrong": [
          "Interface Design",
          "Code Review",
          "Activity Design"
        ],
        "explanation": "Database design maps entities, relationships, tables, primary keys, and foreign keys."
      },
      {
        "id": "prelim-design-3",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "Which design type focuses on login forms, dashboards, and navigation menus?",
        "answer": "Interface Design",
        "wrong": [
          "Component Design",
          "Spiral Design",
          "Version Control Design"
        ],
        "explanation": "Interface design defines how users interact visually with the system."
      },
      {
        "id": "prelim-design-4",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "Which design type defines modules and classes such as Authentication, Payment, and Report Generation?",
        "answer": "Component Design",
        "wrong": [
          "Database Design",
          "Cloud Design",
          "Requirements Analysis"
        ],
        "explanation": "Component design breaks the system into internal modules, classes, and responsibilities."
      },
      {
        "id": "prelim-design-5",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "Which architecture uses presentation, business logic, and data layers?",
        "answer": "Three-Tier Architecture",
        "wrong": [
          "Single-table architecture",
          "Code review architecture",
          "Legacy-only architecture"
        ],
        "explanation": "A three-tier architecture separates presentation, business logic, and data concerns."
      },
      {
        "id": "prelim-design-6",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "What best describes microservices architecture?",
        "answer": "Independent services that communicate through APIs",
        "wrong": [
          "A single file containing the whole application",
          "A database table with no relationships",
          "A testing phase performed after deployment only"
        ],
        "explanation": "Microservices split the system into small independent services connected through APIs."
      },
      {
        "id": "prelim-design-7",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "Which design principle hides unnecessary implementation details?",
        "answer": "Abstraction",
        "wrong": [
          "Encapsulation",
          "Low Coupling",
          "High Cohesion"
        ],
        "explanation": "Abstraction lets users interact with useful behavior without seeing internal implementation."
      },
      {
        "id": "prelim-design-8",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "Which principle combines data and methods into one unit?",
        "answer": "Encapsulation",
        "wrong": [
          "Abstraction",
          "Deployment",
          "Impact Analysis"
        ],
        "explanation": "Encapsulation keeps related data and behavior together, such as in a Student class."
      },
      {
        "id": "prelim-design-9",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "What does modularity mean?",
        "answer": "Dividing software into smaller independent modules",
        "wrong": [
          "Putting every feature in one long function",
          "Avoiding all class diagrams",
          "Running tests before writing any requirements"
        ],
        "explanation": "Modularity separates responsibilities into manageable parts like Inventory, Payment, and Shipping."
      },
      {
        "id": "prelim-design-10",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "What does low coupling require?",
        "answer": "Modules should have minimal dependency on one another",
        "wrong": [
          "Modules should all depend on one giant shared function",
          "Every module should handle every responsibility",
          "All code should be merged into one class"
        ],
        "explanation": "Low coupling makes updates easier because modules are not tightly dependent."
      },
      {
        "id": "prelim-design-11",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "What does high cohesion mean?",
        "answer": "A module focuses on one specific responsibility",
        "wrong": [
          "A module handles unrelated tasks at the same time",
          "A module avoids having a purpose",
          "A system has no internal structure"
        ],
        "explanation": "High cohesion keeps each module clear, understandable, and maintainable."
      },
      {
        "id": "prelim-design-12",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "Why is UML used in software engineering?",
        "answer": "To visualize software designs before coding begins",
        "wrong": [
          "To replace all testing activities",
          "To deploy software automatically",
          "To remove the need for requirements"
        ],
        "explanation": "UML diagrams communicate system design before implementation."
      },
      {
        "id": "prelim-design-13",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "Which UML diagram shows user interactions with the system?",
        "answer": "Use Case Diagram",
        "wrong": [
          "Class Diagram",
          "ER Diagram",
          "Sequence Diagram"
        ],
        "explanation": "Use case diagrams show actors and the actions they perform with the system."
      },
      {
        "id": "prelim-design-14",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "Which UML diagram shows classes, attributes, and relationships?",
        "answer": "Class Diagram",
        "wrong": [
          "Activity Diagram",
          "Use Case Diagram",
          "Deployment checklist"
        ],
        "explanation": "Class diagrams model object-oriented structure: classes, attributes, methods, and relationships."
      },
      {
        "id": "prelim-design-15",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "Which diagram shows interaction flow between objects?",
        "answer": "Sequence Diagram",
        "wrong": [
          "ER Diagram",
          "Use Case Diagram",
          "Database schema only"
        ],
        "explanation": "Sequence diagrams show how objects interact over time."
      },
      {
        "id": "prelim-design-16",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "What does unit testing check?",
        "answer": "Each module independently",
        "wrong": [
          "Only final user feedback",
          "Only external marketing pages",
          "The whole organization chart"
        ],
        "explanation": "Unit tests validate one module or unit at a time, such as checking login behavior."
      },
      {
        "id": "prelim-design-17",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "What is the purpose of a design review?",
        "answer": "To evaluate scalability, module design, security, and performance requirements",
        "wrong": [
          "To delete the architecture before coding",
          "To test only spelling in comments",
          "To replace all source code reviews"
        ],
        "explanation": "Design review checks whether the design is sound before or during implementation."
      },
      {
        "id": "prelim-evolution-1",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "What is software evolution?",
        "answer": "The continuous process of modifying and updating software after deployment",
        "wrong": [
          "The first draft of source code before testing",
          "A diagram used only for database tables",
          "A rule that software should never change"
        ],
        "explanation": "Software evolution keeps systems aligned with changing requirements, technologies, and user needs."
      },
      {
        "id": "prelim-evolution-2",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "Why must software evolve?",
        "answer": "User needs, business rules, technology, security, and performance requirements change",
        "wrong": [
          "Software becomes perfect immediately after deployment",
          "Maintenance is never required after release",
          "Old platforms never become outdated"
        ],
        "explanation": "The materials emphasize that deployed systems are not static products."
      },
      {
        "id": "prelim-evolution-3",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "Which set correctly lists the four maintenance types?",
        "answer": "Corrective, adaptive, perfective, preventive",
        "wrong": [
          "Planning, coding, compiling, publishing",
          "Syntax, logic, runtime, deployment",
          "Client, server, database, network"
        ],
        "explanation": "Software maintenance is commonly classified into these four categories."
      },
      {
        "id": "prelim-evolution-4",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "Which maintenance type fixes defects and errors?",
        "answer": "Corrective Maintenance",
        "wrong": [
          "Adaptive Maintenance",
          "Perfective Maintenance",
          "Preventive Maintenance"
        ],
        "explanation": "Corrective maintenance fixes bugs, such as a login defect."
      },
      {
        "id": "prelim-evolution-5",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "Which maintenance type adapts software to new environments?",
        "answer": "Adaptive Maintenance",
        "wrong": [
          "Corrective Maintenance",
          "Perfective Maintenance",
          "Preventive Maintenance"
        ],
        "explanation": "Adaptive maintenance updates software for new operating systems, platforms, hardware, or environments."
      },
      {
        "id": "prelim-evolution-6",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "Which maintenance type improves performance or usability?",
        "answer": "Perfective Maintenance",
        "wrong": [
          "Corrective Maintenance",
          "Adaptive Maintenance",
          "Preventive Maintenance"
        ],
        "explanation": "Perfective maintenance enhances usability, performance, or features."
      },
      {
        "id": "prelim-evolution-7",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "Which maintenance type prevents future problems by improving maintainability?",
        "answer": "Preventive Maintenance",
        "wrong": [
          "Adaptive Maintenance",
          "Corrective Maintenance",
          "Perfective Maintenance"
        ],
        "explanation": "Preventive maintenance includes work such as refactoring to reduce complexity."
      },
      {
        "id": "prelim-evolution-8",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "What does Lehman's law of Continuing Change state?",
        "answer": "Software must continually adapt or become less useful",
        "wrong": [
          "All software should stop changing after release",
          "Testing should happen only once",
          "Software quality always improves without maintenance"
        ],
        "explanation": "Continuing Change means useful software must adapt to its environment."
      },
      {
        "id": "prelim-evolution-9",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "What does Lehman's law of Increasing Complexity warn about?",
        "answer": "Complexity increases unless active effort is made to reduce it",
        "wrong": [
          "Complexity always disappears automatically after deployment",
          "Only brand-new systems can become complex",
          "Documentation causes every system to fail"
        ],
        "explanation": "As systems evolve, complexity tends to grow unless controlled through maintenance practices."
      },
      {
        "id": "prelim-evolution-10",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "What is a legacy system?",
        "answer": "An old software system still in active use, often critical but difficult to maintain",
        "wrong": [
          "A new prototype with no users",
          "A design diagram for future software",
          "A temporary test script"
        ],
        "explanation": "Legacy systems often run on outdated technology but remain important to business operations."
      },
      {
        "id": "prelim-evolution-11",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "Which is a common problem with legacy systems?",
        "answer": "Lack of documentation and high maintenance cost",
        "wrong": [
          "Guaranteed perfect security",
          "No dependency on outdated technology",
          "Unlimited supply of skilled developers"
        ],
        "explanation": "Legacy systems often suffer from outdated technology, poor documentation, security issues, and scarce expertise."
      },
      {
        "id": "prelim-evolution-12",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "What does software reengineering do?",
        "answer": "Improves an existing system without changing its core functionality",
        "wrong": [
          "Deletes an application and forbids replacement",
          "Changes external behavior randomly",
          "Only renames variables without analysis"
        ],
        "explanation": "Reengineering can include code restructuring, database migration, interface modernization, and documentation improvement."
      },
      {
        "id": "prelim-evolution-13",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "What is refactoring?",
        "answer": "Restructuring code without changing external behavior",
        "wrong": [
          "Adding random features without testing",
          "Replacing all users with administrators",
          "Deploying software before coding"
        ],
        "explanation": "Refactoring improves readability, reduces complexity, and improves maintainability while behavior remains the same."
      },
      {
        "id": "prelim-evolution-14",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "Which step comes immediately after a change request in the software evolution process?",
        "answer": "Impact Analysis",
        "wrong": [
          "Deployment",
          "Final user training",
          "Code deletion"
        ],
        "explanation": "After a change request, engineers analyze the effects and cost before modifying the design and code."
      },
      {
        "id": "prelim-evolution-15",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "Which benefit belongs to version control systems?",
        "answer": "Tracking history, supporting collaboration, rollback, and branching",
        "wrong": [
          "Preventing all software changes forever",
          "Removing the need for testing",
          "Guaranteeing there will be no bugs"
        ],
        "explanation": "Git, GitHub, GitLab, and Bitbucket help teams manage change over time."
      },
      {
        "id": "prelim-evolution-16",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "What is technical debt?",
        "answer": "Shortcuts taken during development that create future maintenance problems",
        "wrong": [
          "A formal UML diagram for payment systems",
          "A type of operating system update",
          "An automated deployment pipeline"
        ],
        "explanation": "Technical debt can come from tight deadlines, poor design, and weak testing coverage."
      },
      {
        "id": "prelim-evolution-17",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "What does DevSecOps emphasize?",
        "answer": "Integrating security into the continuous development and deployment pipeline",
        "wrong": [
          "Removing security checks until after release",
          "Keeping all legacy systems unchanged forever",
          "Replacing version control with manual copies"
        ],
        "explanation": "DevSecOps treats security as part of ongoing development rather than an afterthought."
      }
    ],
    "week34": [
      {
        "id": "week34-1",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "What is software reuse?",
        "answer": "Using existing software assets to develop new systems",
        "wrong": [
          "Deleting old modules before deployment",
          "Testing every program without documentation",
          "Rewriting every component from scratch"
        ],
        "explanation": "Software reuse uses existing code, components, frameworks, services, designs, tests, or documentation to build new systems efficiently."
      },
      {
        "id": "week34-2",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which item can be considered a reusable software asset?",
        "answer": "A tested authentication component",
        "wrong": [
          "A random unresolved bug report only",
          "A failed deployment with no source code",
          "An expired password reset link"
        ],
        "explanation": "Reusable assets include source code, components, libraries, frameworks, documentation, test cases, and designs."
      },
      {
        "id": "week34-3",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Why is software reuse important?",
        "answer": "It saves development time, reduces cost, and can improve reliability",
        "wrong": [
          "It guarantees software has no vulnerabilities",
          "It removes the need for version control",
          "It prevents all future maintenance work"
        ],
        "explanation": "Reuse can improve productivity, lower cost, reduce testing effort, and use already-proven assets, but it still needs evaluation."
      },
      {
        "id": "week34-4",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which example best represents code reuse?",
        "answer": "Using a utility function in multiple projects",
        "wrong": [
          "Using a hospital policy document as source code",
          "Running a DoS attack against a server",
          "Making every module dependent on one file"
        ],
        "explanation": "Code reuse means reusing existing source code, such as utility functions across projects."
      },
      {
        "id": "week34-5",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which example best represents framework reuse?",
        "answer": "Building an app with ReactJS, Laravel, or Spring Boot",
        "wrong": [
          "Recovering a database after server failure",
          "Classifying a system as safety-critical",
          "Checking whether data is confidential"
        ],
        "explanation": "Framework reuse means developing with an existing framework instead of creating the full structure from scratch."
      },
      {
        "id": "week34-6",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "What is service reuse?",
        "answer": "Using external services through APIs",
        "wrong": [
          "Copying hardware routers into source code",
          "Avoiding all third-party services",
          "Sending phishing emails to test users"
        ],
        "explanation": "Service reuse uses services such as Google Maps APIs, payment gateways, or notification services."
      },
      {
        "id": "week34-7",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which characteristic belongs to a reusable software component?",
        "answer": "It is modular, independent, replaceable, and maintainable",
        "wrong": [
          "It only works in one undocumented system",
          "It requires every project to change its architecture completely",
          "It cannot be tested before reuse"
        ],
        "explanation": "Reusable components should be self-contained enough to work across multiple systems."
      },
      {
        "id": "week34-8",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "What is a software product line?",
        "answer": "A collection of related software systems that share common features",
        "wrong": [
          "A single error message printed by every application",
          "An attack that floods servers with requests",
          "A database backup schedule"
        ],
        "explanation": "Software product lines reuse shared features across related products, such as multiple versions of accounting software."
      },
      {
        "id": "week34-9",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which is a risk of software reuse?",
        "answer": "Hidden bugs, security vulnerabilities, licensing issues, or version conflicts",
        "wrong": [
          "Automatic removal of all maintenance costs",
          "Guaranteed compatibility with every project",
          "Total elimination of testing requirements"
        ],
        "explanation": "Reuse helps, but components must be evaluated for security, compatibility, maintenance, and licensing."
      },
      {
        "id": "week34-10",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which practice supports effective software reuse?",
        "answer": "Evaluate reusable components and monitor security updates",
        "wrong": [
          "Ignore documentation for reused components",
          "Use unpatched libraries indefinitely",
          "Reuse code without checking licenses"
        ],
        "explanation": "Best practices include careful evaluation, documentation, version control, compatibility checks, and security monitoring."
      },
      {
        "id": "week34-11",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "What is a socio-technical system?",
        "answer": "A system combining software, hardware, people, procedures, and organizational rules",
        "wrong": [
          "A program that contains only source code and no users",
          "A database table for system logs only",
          "A testing method that ignores human behavior"
        ],
        "explanation": "Socio-technical systems depend on technology plus human and organizational interactions."
      },
      {
        "id": "week34-12",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which group lists the five components of a socio-technical system?",
        "answer": "Hardware, software, people, procedures, organizational rules",
        "wrong": [
          "Code, compiler, syntax, runtime, comments",
          "Confidentiality, integrity, availability, malware, phishing",
          "Testing, coding, payment, shipping, inventory"
        ],
        "explanation": "The materials list hardware, software, people, procedures, and organizational rules."
      },
      {
        "id": "week34-13",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "What is dependability?",
        "answer": "The ability of a software system to deliver services that users can trust",
        "wrong": [
          "The process of adding random features after release",
          "The practice of reusing only user interface templates",
          "The ability to hide all documentation from developers"
        ],
        "explanation": "Dependable systems perform correctly, consistently, safely, and securely."
      },
      {
        "id": "week34-14",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which set correctly lists dependability attributes?",
        "answer": "Availability, reliability, safety, security, maintainability",
        "wrong": [
          "Confidentiality, phishing, malware, SQL injection, XSS",
          "Code reuse, component reuse, framework reuse, service reuse, product lines",
          "Requirements, diagrams, commits, branches, releases"
        ],
        "explanation": "The five attributes are availability, reliability, safety, security, and maintainability."
      },
      {
        "id": "week34-15",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which dependability attribute means the system is operational and accessible when needed?",
        "answer": "Availability",
        "wrong": [
          "Reliability",
          "Safety",
          "Maintainability"
        ],
        "explanation": "Availability focuses on whether the system is up and accessible when users need it."
      },
      {
        "id": "week34-16",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which dependability attribute means the system performs correctly without failure over time?",
        "answer": "Reliability",
        "wrong": [
          "Availability",
          "Authorization",
          "Non-repudiation"
        ],
        "explanation": "Reliability is about correct operation over time, such as an ATM consistently processing transactions."
      },
      {
        "id": "week34-17",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which dependability attribute focuses on avoiding harm or damage?",
        "answer": "Safety",
        "wrong": [
          "Availability",
          "Framework reuse",
          "Threat modeling"
        ],
        "explanation": "Safety is crucial in systems such as aircraft control, hospital monitoring, nuclear plants, and autonomous vehicles."
      },
      {
        "id": "week34-18",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "What is the CIA Triad?",
        "answer": "Confidentiality, Integrity, Availability",
        "wrong": [
          "Coding, Integration, Automation",
          "Components, Interfaces, Architecture",
          "Cloud, Identity, Authorization"
        ],
        "explanation": "The CIA Triad is the foundation of software security."
      },
      {
        "id": "week34-19",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which CIA Triad principle ensures only authorized users can access information?",
        "answer": "Confidentiality",
        "wrong": [
          "Integrity",
          "Availability",
          "Maintainability"
        ],
        "explanation": "Confidentiality protects information from unauthorized access."
      },
      {
        "id": "week34-20",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which CIA Triad principle ensures data remains accurate and unaltered?",
        "answer": "Integrity",
        "wrong": [
          "Confidentiality",
          "Availability",
          "Reliability"
        ],
        "explanation": "Integrity means data remains accurate, complete, and protected from unauthorized modification."
      },
      {
        "id": "week34-21",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which security threat uses fake emails or websites to steal credentials?",
        "answer": "Phishing",
        "wrong": [
          "SQL injection",
          "DoS attack",
          "Static testing"
        ],
        "explanation": "Phishing tricks users into revealing sensitive information, often through fake emails or websites."
      },
      {
        "id": "week34-22",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which attack inserts malicious SQL commands into input forms?",
        "answer": "SQL Injection",
        "wrong": [
          "Phishing",
          "Firewall filtering",
          "Fault recovery"
        ],
        "explanation": "SQL injection manipulates queries, often to bypass authentication or steal database data."
      },
      {
        "id": "week34-23",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which attack injects malicious scripts into websites?",
        "answer": "Cross-Site Scripting (XSS)",
        "wrong": [
          "Symmetric encryption",
          "Version control",
          "Fault avoidance"
        ],
        "explanation": "XSS inserts harmful scripts into web pages, such as malicious JavaScript in comments."
      },
      {
        "id": "week34-24",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "What is the effect of a Denial-of-Service attack?",
        "answer": "A server is overwhelmed so legitimate users cannot access the service",
        "wrong": [
          "A user cannot deny signing a transaction",
          "A reusable component becomes better documented",
          "A class diagram gains new attributes"
        ],
        "explanation": "DoS attacks flood systems with traffic or requests, hurting availability."
      },
      {
        "id": "week34-25",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "What is dependability engineering?",
        "answer": "Designing, developing, testing, and maintaining systems for reliability, safety, availability, and security",
        "wrong": [
          "Choosing color themes for a dashboard",
          "Removing all human users from a system",
          "Using only open-source libraries without checking them"
        ],
        "explanation": "Dependability engineering minimizes failures and reduces risk in critical systems."
      },
      {
        "id": "week34-26",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which fault technique prevents faults during development?",
        "answer": "Fault Avoidance",
        "wrong": [
          "Fault Recovery",
          "Fault Tolerance",
          "Fault Injection"
        ],
        "explanation": "Fault avoidance uses good design practices, coding standards, and developer training to prevent faults."
      },
      {
        "id": "week34-27",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which fault technique identifies faults before deployment?",
        "answer": "Fault Detection",
        "wrong": [
          "Fault Recovery",
          "Cloud Migration",
          "Service Reuse"
        ],
        "explanation": "Fault detection uses testing, code reviews, and static analysis to find problems before release."
      },
      {
        "id": "week34-28",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which fault technique allows a system to continue operating despite failures?",
        "answer": "Fault Tolerance",
        "wrong": [
          "Fault Avoidance",
          "Code Reuse",
          "Threat Modeling"
        ],
        "explanation": "Fault tolerance can use backup servers or redundancy so the system keeps operating after failures."
      },
      {
        "id": "week34-29",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which security practice verifies a user's identity?",
        "answer": "Authentication",
        "wrong": [
          "Authorization",
          "Availability",
          "Refactoring"
        ],
        "explanation": "Authentication checks who the user is, using passwords, biometrics, or 2FA."
      },
      {
        "id": "week34-30",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which security practice determines what a user is allowed to do?",
        "answer": "Authorization",
        "wrong": [
          "Authentication",
          "Encryption",
          "Fault Recovery"
        ],
        "explanation": "Authorization controls permissions, such as allowing only administrators to delete records."
      },
      {
        "id": "week34-31",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "What does encryption do?",
        "answer": "Converts readable data into unreadable form to protect information",
        "wrong": [
          "Deletes data permanently after every login",
          "Makes all code reusable by default",
          "Prevents users from needing passwords"
        ],
        "explanation": "Encryption protects sensitive data in storage or transit, such as HTTPS/TLS for websites."
      },
      {
        "id": "week34-32",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which encryption type uses one key for encryption and decryption?",
        "answer": "Symmetric Encryption",
        "wrong": [
          "Asymmetric Encryption",
          "Static Testing",
          "Zero Trust"
        ],
        "explanation": "Symmetric encryption uses one shared key; AES is a common example."
      },
      {
        "id": "week34-33",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which encryption type uses public and private keys?",
        "answer": "Asymmetric Encryption",
        "wrong": [
          "Symmetric Encryption",
          "Dynamic Testing",
          "Fault Recovery"
        ],
        "explanation": "Asymmetric encryption uses a key pair; RSA is a common example."
      },
      {
        "id": "week34-34",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "What is threat modeling?",
        "answer": "Identifying assets, attackers, vulnerabilities, and prevention measures before implementation",
        "wrong": [
          "Running only the final deployment checklist",
          "Reusing a UI template without checking compatibility",
          "Writing code without security requirements"
        ],
        "explanation": "Threat modeling asks what needs protection, who may attack, what weaknesses exist, and how attacks can be prevented."
      },
      {
        "id": "week34-35",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "What does SSDLC mean in practice?",
        "answer": "Security is integrated into every development phase",
        "wrong": [
          "Security is checked only after users complain",
          "Testing is removed from software development",
          "Reuse replaces all design work"
        ],
        "explanation": "SSDLC adds security needs, secure architecture, secure coding, security testing, secure deployment, and patching across the lifecycle."
      },
      {
        "id": "week34-36",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which testing method uses simulated attacks to identify vulnerabilities?",
        "answer": "Penetration Testing",
        "wrong": [
          "Unit Testing only",
          "Code Reuse Testing",
          "Availability Scheduling"
        ],
        "explanation": "Penetration testing simulates attacker behavior to uncover security weaknesses."
      },
      {
        "id": "week34-37",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which testing method analyzes source code without executing it?",
        "answer": "Static Testing",
        "wrong": [
          "Dynamic Testing",
          "DoS Testing",
          "Service Reuse"
        ],
        "explanation": "Static testing reviews code without running the application."
      },
      {
        "id": "week34-38",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "What does a firewall do?",
        "answer": "Controls incoming and outgoing network traffic",
        "wrong": [
          "Stores all reusable components",
          "Guarantees no human error occurs",
          "Converts requirements into class diagrams"
        ],
        "explanation": "Firewalls help filter network traffic based on security rules."
      },
      {
        "id": "week34-39",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "What does an Intrusion Detection System do?",
        "answer": "Monitors suspicious activities and attacks",
        "wrong": [
          "Builds a software product line automatically",
          "Encrypts data with one shared key only",
          "Deletes old code after deployment"
        ],
        "explanation": "An IDS observes activity and alerts when suspicious behavior appears."
      },
      {
        "id": "week34-40",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "What is Zero Trust security?",
        "answer": "No user or device is automatically trusted",
        "wrong": [
          "Every internal device is trusted forever",
          "Only external users need passwords",
          "Security checks are skipped in cloud systems"
        ],
        "explanation": "Zero Trust follows the idea of verifying every access request continuously."
      }
    ],
    "lastQuizA": [
      {
        "id": "last-quiz-1",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "What is software reuse?",
        "answer": "Using existing software assets to develop new systems",
        "wrong": [
          "Deleting all old modules before release",
          "Writing code without documentation",
          "Testing only after deployment"
        ],
        "explanation": "Software reuse means building new systems with existing assets."
      },
      {
        "id": "last-quiz-2",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "Which is NOT listed as a reusable asset?",
        "answer": "Unrelated hardware cables",
        "wrong": [
          "Source code",
          "Components",
          "Frameworks"
        ],
        "explanation": "Reusable assets include source code, components, libraries, frameworks, docs, tests, and designs."
      },
      {
        "id": "last-quiz-3",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "Which benefit of reuse means fewer new lines of code are needed?",
        "answer": "Faster Development",
        "wrong": [
          "Licensing Issues",
          "Dependency Management",
          "Compatibility Issues"
        ],
        "explanation": "Faster development happens because less coding is required."
      },
      {
        "id": "last-quiz-4",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "Which type of reuse uses existing source code such as utility functions?",
        "answer": "Code Reuse",
        "wrong": [
          "Service Reuse",
          "Framework Reuse",
          "Application System Reuse"
        ],
        "explanation": "Code reuse is reuse of existing source code."
      },
      {
        "id": "last-quiz-5",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "Which type of reuse uses independent modules such as authentication components?",
        "answer": "Component Reuse",
        "wrong": [
          "Code Reuse",
          "Open-Source Reuse",
          "Cloud Security"
        ],
        "explanation": "Component reuse uses independent software modules."
      },
      {
        "id": "last-quiz-6",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "ReactJS, Angular, Laravel, and Spring Boot are examples of what?",
        "answer": "Framework Reuse",
        "wrong": [
          "Service Reuse",
          "Security Testing",
          "Threat Modeling"
        ],
        "explanation": "They are development frameworks."
      },
      {
        "id": "last-quiz-7",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "Google Maps API integration is an example of what?",
        "answer": "Service Reuse",
        "wrong": [
          "Object Reuse",
          "Static Testing",
          "Fault Recovery"
        ],
        "explanation": "Service reuse uses external services through APIs."
      },
      {
        "id": "last-quiz-8",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "A reusable component should be:",
        "answer": "Modular, independent, replaceable, and maintainable",
        "wrong": [
          "Hidden, unstable, untested, and undocumented",
          "Large, tightly coupled, secret, and fixed",
          "Expired, duplicated, and hardcoded"
        ],
        "explanation": "The source lists modular, independent, replaceable, and maintainable."
      },
      {
        "id": "last-quiz-9",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "Which reuse disadvantage involves legal restrictions?",
        "answer": "Licensing Issues",
        "wrong": [
          "Reduced Cost",
          "Standardization",
          "Faster Development"
        ],
        "explanation": "Licensing issues are legal restrictions."
      },
      {
        "id": "last-quiz-10",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "Using an existing CMS is an example of:",
        "answer": "Application System Reuse",
        "wrong": [
          "Code Reuse",
          "Dynamic Testing",
          "Zero Trust"
        ],
        "explanation": "Application system reuse reuses whole applications."
      },
      {
        "id": "last-quiz-11",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "A payment gateway integration best fits which approach?",
        "answer": "Component-Based Reuse",
        "wrong": [
          "Application System Reuse",
          "Quantum Computing",
          "Green Software"
        ],
        "explanation": "Component-based reuse reuses specific components."
      },
      {
        "id": "last-quiz-12",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "A software product line is:",
        "answer": "Related systems sharing common features",
        "wrong": [
          "A firewall rule set",
          "A malware type",
          "A test that runs without execution"
        ],
        "explanation": "Product lines are collections of related systems with shared features."
      },
      {
        "id": "last-quiz-13",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "Linux, WordPress, and Bootstrap are examples of:",
        "answer": "Open-Source Reuse",
        "wrong": [
          "Symmetric Encryption",
          "Kubernetes",
          "NoSQL"
        ],
        "explanation": "They are open-source examples."
      },
      {
        "id": "last-quiz-14",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "Which is a risk in software reuse?",
        "answer": "Version Conflicts",
        "wrong": [
          "Automatic perfect security",
          "No dependency concerns",
          "Guaranteed compatibility"
        ],
        "explanation": "Version conflicts are a listed reuse risk."
      },
      {
        "id": "last-quiz-15",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "Which is a software reuse best practice?",
        "answer": "Monitor security updates",
        "wrong": [
          "Ignore documentation",
          "Never check compatibility",
          "Avoid version control"
        ],
        "explanation": "Monitoring security updates is a best practice."
      },
      {
        "id": "last-quiz-16",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "Microservices, API economy, and cloud services are:",
        "answer": "Modern trends in software reuse",
        "wrong": [
          "Malware types",
          "Encryption types",
          "SSDLC phases"
        ],
        "explanation": "These are modern software reuse trends."
      },
      {
        "id": "last-quiz-17",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Advanced software engineering focuses on all EXCEPT:",
        "answer": "Avoiding software quality assurance",
        "wrong": [
          "Scalability",
          "Automation",
          "Cloud computing"
        ],
        "explanation": "ASE includes software quality assurance."
      },
      {
        "id": "last-quiz-18",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Which characteristic means a system supports many users and processes?",
        "answer": "Large-scale",
        "wrong": [
          "Static",
          "Hardcoded",
          "Unpatched"
        ],
        "explanation": "Large-scale means many users and processes."
      },
      {
        "id": "last-quiz-19",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Which characteristic means a system continues operating during failures?",
        "answer": "Fault-Tolerant",
        "wrong": [
          "Procedural",
          "Low-Code",
          "Green"
        ],
        "explanation": "Fault-tolerant systems continue during failures."
      },
      {
        "id": "last-quiz-20",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Which approach focuses on iterative development, feedback, collaboration, and rapid delivery?",
        "answer": "Agile Software Development",
        "wrong": [
          "Blockchain",
          "Static Testing",
          "Firewalling"
        ],
        "explanation": "Agile focuses on those four items."
      },
      {
        "id": "last-quiz-21",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "DevOps integrates:",
        "answer": "Development, operations, and automation",
        "wrong": [
          "Encryption, hashing, and phishing",
          "Hardware, malware, and Trojans",
          "Only coding and no deployment"
        ],
        "explanation": "DevOps integrates development, operations, and automation."
      },
      {
        "id": "last-quiz-22",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Which is NOT listed as a DevOps tool?",
        "answer": "WordPress",
        "wrong": [
          "Jenkins",
          "Docker",
          "Kubernetes"
        ],
        "explanation": "WordPress is an open-source reuse example, not a DevOps tool in this source."
      },
      {
        "id": "last-quiz-23",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Continuous Integration means developers:",
        "answer": "Frequently merge code into shared repositories",
        "wrong": [
          "Never merge code",
          "Only test manually",
          "Deploy without automation"
        ],
        "explanation": "CI involves frequent merges into shared repositories."
      },
      {
        "id": "last-quiz-24",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Continuous Deployment means applications are:",
        "answer": "Automatically tested and deployed",
        "wrong": [
          "Never deployed",
          "Only designed on paper",
          "Converted into malware"
        ],
        "explanation": "CD automates testing and deployment."
      },
      {
        "id": "last-quiz-25",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Which is a CI/CD benefit?",
        "answer": "Faster releases",
        "wrong": [
          "More manual delays",
          "Guaranteed phishing prevention",
          "No need for repositories"
        ],
        "explanation": "Faster releases are a CI/CD benefit."
      },
      {
        "id": "last-quiz-26",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Cloud-native applications are designed for:",
        "answer": "Cloud environments",
        "wrong": [
          "Only offline devices",
          "Only paper records",
          "Only desktop calculators"
        ],
        "explanation": "Cloud-native apps are designed for cloud environments."
      },
      {
        "id": "last-quiz-27",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Containerization packages applications with:",
        "answer": "All dependencies",
        "wrong": [
          "Only passwords",
          "Only threat models",
          "Only handwritten tests"
        ],
        "explanation": "Containers package apps with dependencies."
      },
      {
        "id": "last-quiz-28",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Docker is associated with:",
        "answer": "Containerization",
        "wrong": [
          "Malware analysis",
          "Non-repudiation",
          "Quantum mechanics"
        ],
        "explanation": "Docker is a popular containerization tool."
      },
      {
        "id": "last-quiz-29",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Kubernetes is used for all EXCEPT:",
        "answer": "Writing phishing emails",
        "wrong": [
          "Deployment management",
          "Scaling containers",
          "Load balancing"
        ],
        "explanation": "Kubernetes manages deployment, scaling, load balancing, and fault recovery."
      },
      {
        "id": "last-quiz-30",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Microservices divide applications into:",
        "answer": "Small independent services",
        "wrong": [
          "One huge tightly coupled file",
          "Only database tables",
          "Malware samples"
        ],
        "explanation": "Microservices are small independent services."
      },
      {
        "id": "last-quiz-31",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Which is a microservices advantage?",
        "answer": "Independent deployment",
        "wrong": [
          "Complex communication",
          "Security concerns",
          "Distributed debugging"
        ],
        "explanation": "Independent deployment is an advantage."
      },
      {
        "id": "last-quiz-32",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Which is a microservices challenge?",
        "answer": "Distributed debugging",
        "wrong": [
          "Better maintainability",
          "Easier scalability",
          "Faster development cycles"
        ],
        "explanation": "Distributed debugging is a challenge."
      },
      {
        "id": "last-quiz-33",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Which is an AI application in software engineering?",
        "answer": "Recommendation systems",
        "wrong": [
          "Firewalls only",
          "Password policies only",
          "CMS reuse only"
        ],
        "explanation": "Recommendation systems are AI applications."
      },
      {
        "id": "last-quiz-34",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Netflix recommendation uses machine learning to:",
        "answer": "Analyze behavior and recommend movies",
        "wrong": [
          "Configure firewalls only",
          "Patch servers only",
          "Write legal policies"
        ],
        "explanation": "The example analyzes user behavior and recommends movies."
      },
      {
        "id": "last-quiz-35",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Hadoop, Spark, and NoSQL databases are associated with:",
        "answer": "Big Data Engineering",
        "wrong": [
          "Authentication",
          "Open-source reuse only",
          "CSS styling"
        ],
        "explanation": "They are big data technologies."
      },
      {
        "id": "last-quiz-36",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Blockchain is best described as:",
        "answer": "A decentralized digital ledger",
        "wrong": [
          "A password policy",
          "A vulnerability scanner",
          "A UI template"
        ],
        "explanation": "Blockchain is a decentralized ledger."
      },
      {
        "id": "last-quiz-37",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Which is an IoT example?",
        "answer": "Smart watch",
        "wrong": [
          "SQL injection",
          "Jenkins pipeline",
          "AES key"
        ],
        "explanation": "Smart watches are IoT devices."
      },
      {
        "id": "last-quiz-38",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Which is an emerging trend from the source?",
        "answer": "Edge Computing",
        "wrong": [
          "Trojan Horses",
          "Hardcoded Passwords",
          "Waterfall-only Development"
        ],
        "explanation": "Edge computing is listed as an emerging trend."
      }
    ],
    "lastQuizB": [
      {
        "id": "last-quiz-39",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Green software engineering focuses on:",
        "answer": "Energy-efficient software systems",
        "wrong": [
          "Phishing prevention only",
          "CMS reuse only",
          "One-key encryption"
        ],
        "explanation": "Green software focuses on energy efficiency."
      },
      {
        "id": "last-quiz-40",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Security engineering designs systems to resist:",
        "answer": "Malicious attacks and unauthorized access",
        "wrong": [
          "All documentation",
          "All software reuse",
          "All automation"
        ],
        "explanation": "Security engineering resists attacks, unauthorized access, and threats."
      },
      {
        "id": "last-quiz-41",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which is NOT a consequence of security failure listed in the source?",
        "answer": "Guaranteed faster release",
        "wrong": [
          "Data theft",
          "Financial loss",
          "Identity theft"
        ],
        "explanation": "Security failure can cause theft, loss, identity theft, damage, and legal penalties."
      },
      {
        "id": "last-quiz-42",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which security goal involves keeping systems usable?",
        "answer": "Ensure system availability",
        "wrong": [
          "Avoid all testing",
          "Remove user trust",
          "Create vulnerabilities"
        ],
        "explanation": "Availability is one security engineering goal."
      },
      {
        "id": "last-quiz-43",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "The CIA Triad stands for:",
        "answer": "Confidentiality, Integrity, Availability",
        "wrong": [
          "Coding, Integration, Automation",
          "Cloud, IoT, AI",
          "Control, Injection, Authentication"
        ],
        "explanation": "CIA means Confidentiality, Integrity, Availability."
      },
      {
        "id": "last-quiz-44",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which principle means only authorized users can access information?",
        "answer": "Confidentiality",
        "wrong": [
          "Integrity",
          "Availability",
          "Automation"
        ],
        "explanation": "Confidentiality limits access."
      },
      {
        "id": "last-quiz-45",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which principle means data remains accurate and unaltered?",
        "answer": "Integrity",
        "wrong": [
          "Confidentiality",
          "Availability",
          "Scalability"
        ],
        "explanation": "Integrity protects accuracy and prevents unauthorized modification."
      },
      {
        "id": "last-quiz-46",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which principle means services remain operational?",
        "answer": "Availability",
        "wrong": [
          "Integrity",
          "Non-repudiation",
          "Code reuse"
        ],
        "explanation": "Availability keeps systems operational."
      },
      {
        "id": "last-quiz-47",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which principle verifies user identity?",
        "answer": "Authentication",
        "wrong": [
          "Authorization",
          "Availability",
          "Containerization"
        ],
        "explanation": "Authentication verifies identity."
      },
      {
        "id": "last-quiz-48",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which principle determines what users are allowed to do?",
        "answer": "Authorization",
        "wrong": [
          "Authentication",
          "Encryption",
          "Docker"
        ],
        "explanation": "Authorization determines permissions."
      },
      {
        "id": "last-quiz-49",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which principle prevents users from denying actions they performed?",
        "answer": "Non-Repudiation",
        "wrong": [
          "Availability",
          "Service Reuse",
          "Elastic Scalability"
        ],
        "explanation": "Non-repudiation prevents denial of actions."
      },
      {
        "id": "last-quiz-50",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Malware includes all EXCEPT:",
        "answer": "Kubernetes",
        "wrong": [
          "Viruses",
          "Worms",
          "Trojans"
        ],
        "explanation": "Kubernetes is a container orchestration platform."
      },
      {
        "id": "last-quiz-51",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Phishing is:",
        "answer": "Fraudulent attempts to steal information",
        "wrong": [
          "Packaging dependencies",
          "A framework reuse type",
          "A big data tool"
        ],
        "explanation": "Phishing uses fake messages or websites to steal information."
      },
      {
        "id": "last-quiz-52",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "SQL injection attacks insert malicious SQL into:",
        "answer": "Forms or queries",
        "wrong": [
          "Docker containers only",
          "Version control comments only",
          "Quantum processors"
        ],
        "explanation": "SQL injection targets inputs used in database queries."
      },
      {
        "id": "last-quiz-53",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "XSS injects malicious:",
        "answer": "Scripts into websites",
        "wrong": [
          "Containers into clusters",
          "Libraries into frameworks",
          "Green energy into software"
        ],
        "explanation": "Cross-site scripting injects scripts."
      },
      {
        "id": "last-quiz-54",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "A DoS attack causes services to become unavailable by:",
        "answer": "Flooding servers with excessive requests",
        "wrong": [
          "Encrypting data with AES",
          "Improving documentation",
          "Creating reusable APIs"
        ],
        "explanation": "DoS floods systems to hurt availability."
      },
      {
        "id": "last-quiz-55",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which is a vulnerability cause?",
        "answer": "Misconfigured servers",
        "wrong": [
          "Parameterized SQL",
          "Proper error handling",
          "Secure APIs"
        ],
        "explanation": "Misconfigured servers are a vulnerability cause."
      },
      {
        "id": "last-quiz-56",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "SSDLC means security is integrated into:",
        "answer": "Every phase of software development",
        "wrong": [
          "Only after deployment",
          "Only user training",
          "Only UI templates"
        ],
        "explanation": "SSDLC integrates security across the lifecycle."
      },
      {
        "id": "last-quiz-57",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which SSDLC activity belongs to requirements?",
        "answer": "Identify security needs",
        "wrong": [
          "Apply updates and patches",
          "Configure secure environments",
          "Conduct security testing"
        ],
        "explanation": "Requirements phase identifies security needs."
      },
      {
        "id": "last-quiz-58",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Threat modeling happens:",
        "answer": "Before implementation",
        "wrong": [
          "Only after legal penalties",
          "Only after deleting logs",
          "Only during UI design"
        ],
        "explanation": "Threat modeling identifies threats and vulnerabilities before implementation."
      },
      {
        "id": "last-quiz-59",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which question belongs to threat modeling?",
        "answer": "What assets need protection?",
        "wrong": [
          "What color should buttons be?",
          "What CMS theme is prettiest?",
          "Which user dislikes documentation?"
        ],
        "explanation": "Threat modeling asks what assets need protection."
      },
      {
        "id": "last-quiz-60",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Encryption converts readable data into:",
        "answer": "Unreadable form",
        "wrong": [
          "A reusable component",
          "A Kubernetes pod",
          "A user interface"
        ],
        "explanation": "Encryption protects information by making it unreadable."
      },
      {
        "id": "last-quiz-61",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Symmetric encryption uses:",
        "answer": "One key for encryption and decryption",
        "wrong": [
          "Public and private keys",
          "No keys",
          "Only fingerprints"
        ],
        "explanation": "Symmetric encryption uses one shared key."
      },
      {
        "id": "last-quiz-62",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Asymmetric encryption uses:",
        "answer": "Public and private keys",
        "wrong": [
          "One shared key only",
          "No encryption",
          "Only OTP codes"
        ],
        "explanation": "Asymmetric encryption uses a key pair."
      },
      {
        "id": "last-quiz-63",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "2FA requires:",
        "answer": "Additional verification",
        "wrong": [
          "No passwords",
          "Only SQL queries",
          "Only public keys"
        ],
        "explanation": "2FA requires additional verification such as OTP."
      },
      {
        "id": "last-quiz-64",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which is a biometric authentication example?",
        "answer": "Fingerprint recognition",
        "wrong": [
          "GitHub Actions",
          "Hadoop",
          "CMS"
        ],
        "explanation": "Fingerprint and facial recognition are biometric examples."
      },
      {
        "id": "last-quiz-65",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which secure coding practice helps prevent SQL injection?",
        "answer": "Use parameterized SQL queries",
        "wrong": [
          "Use hardcoded passwords",
          "Ignore updates",
          "Disable input validation"
        ],
        "explanation": "Parameterized queries help stop SQL injection."
      },
      {
        "id": "last-quiz-66",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Static testing analyzes code:",
        "answer": "Without execution",
        "wrong": [
          "Only while running",
          "Only after deployment",
          "Only by flooding servers"
        ],
        "explanation": "Static testing reviews source code without running it."
      },
      {
        "id": "last-quiz-67",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Dynamic testing tests applications:",
        "answer": "While running",
        "wrong": [
          "Without execution",
          "Only on paper",
          "Only in threat models"
        ],
        "explanation": "Dynamic testing tests running applications."
      },
      {
        "id": "last-quiz-68",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Penetration testing uses:",
        "answer": "Simulated attacks",
        "wrong": [
          "Only documentation review",
          "Only CMS reuse",
          "Only Docker packaging"
        ],
        "explanation": "Penetration testing simulates attacks."
      },
      {
        "id": "last-quiz-69",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "A firewall controls:",
        "answer": "Incoming and outgoing network traffic",
        "wrong": [
          "All agile sprints",
          "All reusable templates",
          "All AI recommendations"
        ],
        "explanation": "Firewalls filter traffic."
      },
      {
        "id": "last-quiz-70",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "An IDS monitors:",
        "answer": "Suspicious activities and attacks",
        "wrong": [
          "Only user interface colors",
          "Only code reuse",
          "Only cloud costs"
        ],
        "explanation": "IDS monitors suspicious activity."
      },
      {
        "id": "last-quiz-71",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which online banking security feature ends inactive sessions?",
        "answer": "Session timeout",
        "wrong": [
          "Product catalog",
          "Spark",
          "Low-code"
        ],
        "explanation": "Session timeout ends inactive sessions."
      },
      {
        "id": "last-quiz-72",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Why are humans often the weakest part of security systems?",
        "answer": "They may use weak passwords or click phishing links",
        "wrong": [
          "They always prevent every attack",
          "They remove all vulnerabilities",
          "They are Kubernetes clusters"
        ],
        "explanation": "Human errors include weak passwords and phishing clicks."
      },
      {
        "id": "last-quiz-73",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which is a security policy example?",
        "answer": "Access control policy",
        "wrong": [
          "Shopping cart",
          "Product service",
          "Object reuse"
        ],
        "explanation": "Access control policies guide access permissions."
      },
      {
        "id": "last-quiz-74",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Zero Trust Architecture means:",
        "answer": "No user or device is automatically trusted",
        "wrong": [
          "Every device is always trusted",
          "Passwords are never needed",
          "Cloud services are never secured"
        ],
        "explanation": "Zero Trust verifies access rather than trusting by default."
      },
      {
        "id": "last-quiz-75",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "DevSecOps means:",
        "answer": "Security integrated into DevOps workflows",
        "wrong": [
          "Security removed from deployment",
          "Only manual testing",
          "Only open-source reuse"
        ],
        "explanation": "DevSecOps integrates security into DevOps."
      },
      {
        "id": "last-quiz-76",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which is a challenge in security engineering?",
        "answer": "Balancing usability and security",
        "wrong": [
          "No human errors ever",
          "Stable unchanging cyber threats",
          "Zero implementation cost"
        ],
        "explanation": "Balancing usability and security is a listed challenge."
      }
    ],
    "lastQuizCombined": [
      {
        "id": "last-quiz-1",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "What is software reuse?",
        "answer": "Using existing software assets to develop new systems",
        "wrong": [
          "Deleting all old modules before release",
          "Writing code without documentation",
          "Testing only after deployment"
        ],
        "explanation": "Software reuse means building new systems with existing assets."
      },
      {
        "id": "last-quiz-2",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "Which is NOT listed as a reusable asset?",
        "answer": "Unrelated hardware cables",
        "wrong": [
          "Source code",
          "Components",
          "Frameworks"
        ],
        "explanation": "Reusable assets include source code, components, libraries, frameworks, docs, tests, and designs."
      },
      {
        "id": "last-quiz-3",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "Which benefit of reuse means fewer new lines of code are needed?",
        "answer": "Faster Development",
        "wrong": [
          "Licensing Issues",
          "Dependency Management",
          "Compatibility Issues"
        ],
        "explanation": "Faster development happens because less coding is required."
      },
      {
        "id": "last-quiz-4",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "Which type of reuse uses existing source code such as utility functions?",
        "answer": "Code Reuse",
        "wrong": [
          "Service Reuse",
          "Framework Reuse",
          "Application System Reuse"
        ],
        "explanation": "Code reuse is reuse of existing source code."
      },
      {
        "id": "last-quiz-5",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "Which type of reuse uses independent modules such as authentication components?",
        "answer": "Component Reuse",
        "wrong": [
          "Code Reuse",
          "Open-Source Reuse",
          "Cloud Security"
        ],
        "explanation": "Component reuse uses independent software modules."
      },
      {
        "id": "last-quiz-6",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "ReactJS, Angular, Laravel, and Spring Boot are examples of what?",
        "answer": "Framework Reuse",
        "wrong": [
          "Service Reuse",
          "Security Testing",
          "Threat Modeling"
        ],
        "explanation": "They are development frameworks."
      },
      {
        "id": "last-quiz-7",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "Google Maps API integration is an example of what?",
        "answer": "Service Reuse",
        "wrong": [
          "Object Reuse",
          "Static Testing",
          "Fault Recovery"
        ],
        "explanation": "Service reuse uses external services through APIs."
      },
      {
        "id": "last-quiz-8",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "A reusable component should be:",
        "answer": "Modular, independent, replaceable, and maintainable",
        "wrong": [
          "Hidden, unstable, untested, and undocumented",
          "Large, tightly coupled, secret, and fixed",
          "Expired, duplicated, and hardcoded"
        ],
        "explanation": "The source lists modular, independent, replaceable, and maintainable."
      },
      {
        "id": "last-quiz-9",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "Which reuse disadvantage involves legal restrictions?",
        "answer": "Licensing Issues",
        "wrong": [
          "Reduced Cost",
          "Standardization",
          "Faster Development"
        ],
        "explanation": "Licensing issues are legal restrictions."
      },
      {
        "id": "last-quiz-10",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "Using an existing CMS is an example of:",
        "answer": "Application System Reuse",
        "wrong": [
          "Code Reuse",
          "Dynamic Testing",
          "Zero Trust"
        ],
        "explanation": "Application system reuse reuses whole applications."
      },
      {
        "id": "last-quiz-11",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "A payment gateway integration best fits which approach?",
        "answer": "Component-Based Reuse",
        "wrong": [
          "Application System Reuse",
          "Quantum Computing",
          "Green Software"
        ],
        "explanation": "Component-based reuse reuses specific components."
      },
      {
        "id": "last-quiz-12",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "A software product line is:",
        "answer": "Related systems sharing common features",
        "wrong": [
          "A firewall rule set",
          "A malware type",
          "A test that runs without execution"
        ],
        "explanation": "Product lines are collections of related systems with shared features."
      },
      {
        "id": "last-quiz-13",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "Linux, WordPress, and Bootstrap are examples of:",
        "answer": "Open-Source Reuse",
        "wrong": [
          "Symmetric Encryption",
          "Kubernetes",
          "NoSQL"
        ],
        "explanation": "They are open-source examples."
      },
      {
        "id": "last-quiz-14",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "Which is a risk in software reuse?",
        "answer": "Version Conflicts",
        "wrong": [
          "Automatic perfect security",
          "No dependency concerns",
          "Guaranteed compatibility"
        ],
        "explanation": "Version conflicts are a listed reuse risk."
      },
      {
        "id": "last-quiz-15",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "Which is a software reuse best practice?",
        "answer": "Monitor security updates",
        "wrong": [
          "Ignore documentation",
          "Never check compatibility",
          "Avoid version control"
        ],
        "explanation": "Monitoring security updates is a best practice."
      },
      {
        "id": "last-quiz-16",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "Microservices, API economy, and cloud services are:",
        "answer": "Modern trends in software reuse",
        "wrong": [
          "Malware types",
          "Encryption types",
          "SSDLC phases"
        ],
        "explanation": "These are modern software reuse trends."
      },
      {
        "id": "last-quiz-17",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Advanced software engineering focuses on all EXCEPT:",
        "answer": "Avoiding software quality assurance",
        "wrong": [
          "Scalability",
          "Automation",
          "Cloud computing"
        ],
        "explanation": "ASE includes software quality assurance."
      },
      {
        "id": "last-quiz-18",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Which characteristic means a system supports many users and processes?",
        "answer": "Large-scale",
        "wrong": [
          "Static",
          "Hardcoded",
          "Unpatched"
        ],
        "explanation": "Large-scale means many users and processes."
      },
      {
        "id": "last-quiz-19",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Which characteristic means a system continues operating during failures?",
        "answer": "Fault-Tolerant",
        "wrong": [
          "Procedural",
          "Low-Code",
          "Green"
        ],
        "explanation": "Fault-tolerant systems continue during failures."
      },
      {
        "id": "last-quiz-20",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Which approach focuses on iterative development, feedback, collaboration, and rapid delivery?",
        "answer": "Agile Software Development",
        "wrong": [
          "Blockchain",
          "Static Testing",
          "Firewalling"
        ],
        "explanation": "Agile focuses on those four items."
      },
      {
        "id": "last-quiz-21",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "DevOps integrates:",
        "answer": "Development, operations, and automation",
        "wrong": [
          "Encryption, hashing, and phishing",
          "Hardware, malware, and Trojans",
          "Only coding and no deployment"
        ],
        "explanation": "DevOps integrates development, operations, and automation."
      },
      {
        "id": "last-quiz-22",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Which is NOT listed as a DevOps tool?",
        "answer": "WordPress",
        "wrong": [
          "Jenkins",
          "Docker",
          "Kubernetes"
        ],
        "explanation": "WordPress is an open-source reuse example, not a DevOps tool in this source."
      },
      {
        "id": "last-quiz-23",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Continuous Integration means developers:",
        "answer": "Frequently merge code into shared repositories",
        "wrong": [
          "Never merge code",
          "Only test manually",
          "Deploy without automation"
        ],
        "explanation": "CI involves frequent merges into shared repositories."
      },
      {
        "id": "last-quiz-24",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Continuous Deployment means applications are:",
        "answer": "Automatically tested and deployed",
        "wrong": [
          "Never deployed",
          "Only designed on paper",
          "Converted into malware"
        ],
        "explanation": "CD automates testing and deployment."
      },
      {
        "id": "last-quiz-25",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Which is a CI/CD benefit?",
        "answer": "Faster releases",
        "wrong": [
          "More manual delays",
          "Guaranteed phishing prevention",
          "No need for repositories"
        ],
        "explanation": "Faster releases are a CI/CD benefit."
      },
      {
        "id": "last-quiz-26",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Cloud-native applications are designed for:",
        "answer": "Cloud environments",
        "wrong": [
          "Only offline devices",
          "Only paper records",
          "Only desktop calculators"
        ],
        "explanation": "Cloud-native apps are designed for cloud environments."
      },
      {
        "id": "last-quiz-27",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Containerization packages applications with:",
        "answer": "All dependencies",
        "wrong": [
          "Only passwords",
          "Only threat models",
          "Only handwritten tests"
        ],
        "explanation": "Containers package apps with dependencies."
      },
      {
        "id": "last-quiz-28",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Docker is associated with:",
        "answer": "Containerization",
        "wrong": [
          "Malware analysis",
          "Non-repudiation",
          "Quantum mechanics"
        ],
        "explanation": "Docker is a popular containerization tool."
      },
      {
        "id": "last-quiz-29",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Kubernetes is used for all EXCEPT:",
        "answer": "Writing phishing emails",
        "wrong": [
          "Deployment management",
          "Scaling containers",
          "Load balancing"
        ],
        "explanation": "Kubernetes manages deployment, scaling, load balancing, and fault recovery."
      },
      {
        "id": "last-quiz-30",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Microservices divide applications into:",
        "answer": "Small independent services",
        "wrong": [
          "One huge tightly coupled file",
          "Only database tables",
          "Malware samples"
        ],
        "explanation": "Microservices are small independent services."
      },
      {
        "id": "last-quiz-31",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Which is a microservices advantage?",
        "answer": "Independent deployment",
        "wrong": [
          "Complex communication",
          "Security concerns",
          "Distributed debugging"
        ],
        "explanation": "Independent deployment is an advantage."
      },
      {
        "id": "last-quiz-32",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Which is a microservices challenge?",
        "answer": "Distributed debugging",
        "wrong": [
          "Better maintainability",
          "Easier scalability",
          "Faster development cycles"
        ],
        "explanation": "Distributed debugging is a challenge."
      },
      {
        "id": "last-quiz-33",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Which is an AI application in software engineering?",
        "answer": "Recommendation systems",
        "wrong": [
          "Firewalls only",
          "Password policies only",
          "CMS reuse only"
        ],
        "explanation": "Recommendation systems are AI applications."
      },
      {
        "id": "last-quiz-34",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Netflix recommendation uses machine learning to:",
        "answer": "Analyze behavior and recommend movies",
        "wrong": [
          "Configure firewalls only",
          "Patch servers only",
          "Write legal policies"
        ],
        "explanation": "The example analyzes user behavior and recommends movies."
      },
      {
        "id": "last-quiz-35",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Hadoop, Spark, and NoSQL databases are associated with:",
        "answer": "Big Data Engineering",
        "wrong": [
          "Authentication",
          "Open-source reuse only",
          "CSS styling"
        ],
        "explanation": "They are big data technologies."
      },
      {
        "id": "last-quiz-36",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Blockchain is best described as:",
        "answer": "A decentralized digital ledger",
        "wrong": [
          "A password policy",
          "A vulnerability scanner",
          "A UI template"
        ],
        "explanation": "Blockchain is a decentralized ledger."
      },
      {
        "id": "last-quiz-37",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Which is an IoT example?",
        "answer": "Smart watch",
        "wrong": [
          "SQL injection",
          "Jenkins pipeline",
          "AES key"
        ],
        "explanation": "Smart watches are IoT devices."
      },
      {
        "id": "last-quiz-38",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Which is an emerging trend from the source?",
        "answer": "Edge Computing",
        "wrong": [
          "Trojan Horses",
          "Hardcoded Passwords",
          "Waterfall-only Development"
        ],
        "explanation": "Edge computing is listed as an emerging trend."
      },
      {
        "id": "last-quiz-39",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Green software engineering focuses on:",
        "answer": "Energy-efficient software systems",
        "wrong": [
          "Phishing prevention only",
          "CMS reuse only",
          "One-key encryption"
        ],
        "explanation": "Green software focuses on energy efficiency."
      },
      {
        "id": "last-quiz-40",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Security engineering designs systems to resist:",
        "answer": "Malicious attacks and unauthorized access",
        "wrong": [
          "All documentation",
          "All software reuse",
          "All automation"
        ],
        "explanation": "Security engineering resists attacks, unauthorized access, and threats."
      },
      {
        "id": "last-quiz-41",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which is NOT a consequence of security failure listed in the source?",
        "answer": "Guaranteed faster release",
        "wrong": [
          "Data theft",
          "Financial loss",
          "Identity theft"
        ],
        "explanation": "Security failure can cause theft, loss, identity theft, damage, and legal penalties."
      },
      {
        "id": "last-quiz-42",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which security goal involves keeping systems usable?",
        "answer": "Ensure system availability",
        "wrong": [
          "Avoid all testing",
          "Remove user trust",
          "Create vulnerabilities"
        ],
        "explanation": "Availability is one security engineering goal."
      },
      {
        "id": "last-quiz-43",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "The CIA Triad stands for:",
        "answer": "Confidentiality, Integrity, Availability",
        "wrong": [
          "Coding, Integration, Automation",
          "Cloud, IoT, AI",
          "Control, Injection, Authentication"
        ],
        "explanation": "CIA means Confidentiality, Integrity, Availability."
      },
      {
        "id": "last-quiz-44",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which principle means only authorized users can access information?",
        "answer": "Confidentiality",
        "wrong": [
          "Integrity",
          "Availability",
          "Automation"
        ],
        "explanation": "Confidentiality limits access."
      },
      {
        "id": "last-quiz-45",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which principle means data remains accurate and unaltered?",
        "answer": "Integrity",
        "wrong": [
          "Confidentiality",
          "Availability",
          "Scalability"
        ],
        "explanation": "Integrity protects accuracy and prevents unauthorized modification."
      },
      {
        "id": "last-quiz-46",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which principle means services remain operational?",
        "answer": "Availability",
        "wrong": [
          "Integrity",
          "Non-repudiation",
          "Code reuse"
        ],
        "explanation": "Availability keeps systems operational."
      },
      {
        "id": "last-quiz-47",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which principle verifies user identity?",
        "answer": "Authentication",
        "wrong": [
          "Authorization",
          "Availability",
          "Containerization"
        ],
        "explanation": "Authentication verifies identity."
      },
      {
        "id": "last-quiz-48",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which principle determines what users are allowed to do?",
        "answer": "Authorization",
        "wrong": [
          "Authentication",
          "Encryption",
          "Docker"
        ],
        "explanation": "Authorization determines permissions."
      },
      {
        "id": "last-quiz-49",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which principle prevents users from denying actions they performed?",
        "answer": "Non-Repudiation",
        "wrong": [
          "Availability",
          "Service Reuse",
          "Elastic Scalability"
        ],
        "explanation": "Non-repudiation prevents denial of actions."
      },
      {
        "id": "last-quiz-50",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Malware includes all EXCEPT:",
        "answer": "Kubernetes",
        "wrong": [
          "Viruses",
          "Worms",
          "Trojans"
        ],
        "explanation": "Kubernetes is a container orchestration platform."
      },
      {
        "id": "last-quiz-51",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Phishing is:",
        "answer": "Fraudulent attempts to steal information",
        "wrong": [
          "Packaging dependencies",
          "A framework reuse type",
          "A big data tool"
        ],
        "explanation": "Phishing uses fake messages or websites to steal information."
      },
      {
        "id": "last-quiz-52",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "SQL injection attacks insert malicious SQL into:",
        "answer": "Forms or queries",
        "wrong": [
          "Docker containers only",
          "Version control comments only",
          "Quantum processors"
        ],
        "explanation": "SQL injection targets inputs used in database queries."
      },
      {
        "id": "last-quiz-53",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "XSS injects malicious:",
        "answer": "Scripts into websites",
        "wrong": [
          "Containers into clusters",
          "Libraries into frameworks",
          "Green energy into software"
        ],
        "explanation": "Cross-site scripting injects scripts."
      },
      {
        "id": "last-quiz-54",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "A DoS attack causes services to become unavailable by:",
        "answer": "Flooding servers with excessive requests",
        "wrong": [
          "Encrypting data with AES",
          "Improving documentation",
          "Creating reusable APIs"
        ],
        "explanation": "DoS floods systems to hurt availability."
      },
      {
        "id": "last-quiz-55",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which is a vulnerability cause?",
        "answer": "Misconfigured servers",
        "wrong": [
          "Parameterized SQL",
          "Proper error handling",
          "Secure APIs"
        ],
        "explanation": "Misconfigured servers are a vulnerability cause."
      },
      {
        "id": "last-quiz-56",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "SSDLC means security is integrated into:",
        "answer": "Every phase of software development",
        "wrong": [
          "Only after deployment",
          "Only user training",
          "Only UI templates"
        ],
        "explanation": "SSDLC integrates security across the lifecycle."
      },
      {
        "id": "last-quiz-57",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which SSDLC activity belongs to requirements?",
        "answer": "Identify security needs",
        "wrong": [
          "Apply updates and patches",
          "Configure secure environments",
          "Conduct security testing"
        ],
        "explanation": "Requirements phase identifies security needs."
      },
      {
        "id": "last-quiz-58",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Threat modeling happens:",
        "answer": "Before implementation",
        "wrong": [
          "Only after legal penalties",
          "Only after deleting logs",
          "Only during UI design"
        ],
        "explanation": "Threat modeling identifies threats and vulnerabilities before implementation."
      },
      {
        "id": "last-quiz-59",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which question belongs to threat modeling?",
        "answer": "What assets need protection?",
        "wrong": [
          "What color should buttons be?",
          "What CMS theme is prettiest?",
          "Which user dislikes documentation?"
        ],
        "explanation": "Threat modeling asks what assets need protection."
      },
      {
        "id": "last-quiz-60",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Encryption converts readable data into:",
        "answer": "Unreadable form",
        "wrong": [
          "A reusable component",
          "A Kubernetes pod",
          "A user interface"
        ],
        "explanation": "Encryption protects information by making it unreadable."
      },
      {
        "id": "last-quiz-61",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Symmetric encryption uses:",
        "answer": "One key for encryption and decryption",
        "wrong": [
          "Public and private keys",
          "No keys",
          "Only fingerprints"
        ],
        "explanation": "Symmetric encryption uses one shared key."
      },
      {
        "id": "last-quiz-62",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Asymmetric encryption uses:",
        "answer": "Public and private keys",
        "wrong": [
          "One shared key only",
          "No encryption",
          "Only OTP codes"
        ],
        "explanation": "Asymmetric encryption uses a key pair."
      },
      {
        "id": "last-quiz-63",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "2FA requires:",
        "answer": "Additional verification",
        "wrong": [
          "No passwords",
          "Only SQL queries",
          "Only public keys"
        ],
        "explanation": "2FA requires additional verification such as OTP."
      },
      {
        "id": "last-quiz-64",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which is a biometric authentication example?",
        "answer": "Fingerprint recognition",
        "wrong": [
          "GitHub Actions",
          "Hadoop",
          "CMS"
        ],
        "explanation": "Fingerprint and facial recognition are biometric examples."
      },
      {
        "id": "last-quiz-65",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which secure coding practice helps prevent SQL injection?",
        "answer": "Use parameterized SQL queries",
        "wrong": [
          "Use hardcoded passwords",
          "Ignore updates",
          "Disable input validation"
        ],
        "explanation": "Parameterized queries help stop SQL injection."
      },
      {
        "id": "last-quiz-66",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Static testing analyzes code:",
        "answer": "Without execution",
        "wrong": [
          "Only while running",
          "Only after deployment",
          "Only by flooding servers"
        ],
        "explanation": "Static testing reviews source code without running it."
      },
      {
        "id": "last-quiz-67",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Dynamic testing tests applications:",
        "answer": "While running",
        "wrong": [
          "Without execution",
          "Only on paper",
          "Only in threat models"
        ],
        "explanation": "Dynamic testing tests running applications."
      },
      {
        "id": "last-quiz-68",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Penetration testing uses:",
        "answer": "Simulated attacks",
        "wrong": [
          "Only documentation review",
          "Only CMS reuse",
          "Only Docker packaging"
        ],
        "explanation": "Penetration testing simulates attacks."
      },
      {
        "id": "last-quiz-69",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "A firewall controls:",
        "answer": "Incoming and outgoing network traffic",
        "wrong": [
          "All agile sprints",
          "All reusable templates",
          "All AI recommendations"
        ],
        "explanation": "Firewalls filter traffic."
      },
      {
        "id": "last-quiz-70",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "An IDS monitors:",
        "answer": "Suspicious activities and attacks",
        "wrong": [
          "Only user interface colors",
          "Only code reuse",
          "Only cloud costs"
        ],
        "explanation": "IDS monitors suspicious activity."
      },
      {
        "id": "last-quiz-71",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which online banking security feature ends inactive sessions?",
        "answer": "Session timeout",
        "wrong": [
          "Product catalog",
          "Spark",
          "Low-code"
        ],
        "explanation": "Session timeout ends inactive sessions."
      },
      {
        "id": "last-quiz-72",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Why are humans often the weakest part of security systems?",
        "answer": "They may use weak passwords or click phishing links",
        "wrong": [
          "They always prevent every attack",
          "They remove all vulnerabilities",
          "They are Kubernetes clusters"
        ],
        "explanation": "Human errors include weak passwords and phishing clicks."
      },
      {
        "id": "last-quiz-73",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which is a security policy example?",
        "answer": "Access control policy",
        "wrong": [
          "Shopping cart",
          "Product service",
          "Object reuse"
        ],
        "explanation": "Access control policies guide access permissions."
      },
      {
        "id": "last-quiz-74",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Zero Trust Architecture means:",
        "answer": "No user or device is automatically trusted",
        "wrong": [
          "Every device is always trusted",
          "Passwords are never needed",
          "Cloud services are never secured"
        ],
        "explanation": "Zero Trust verifies access rather than trusting by default."
      },
      {
        "id": "last-quiz-75",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "DevSecOps means:",
        "answer": "Security integrated into DevOps workflows",
        "wrong": [
          "Security removed from deployment",
          "Only manual testing",
          "Only open-source reuse"
        ],
        "explanation": "DevSecOps integrates security into DevOps."
      },
      {
        "id": "last-quiz-76",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which is a challenge in security engineering?",
        "answer": "Balancing usability and security",
        "wrong": [
          "No human errors ever",
          "Stable unchanging cyber threats",
          "Zero implementation cost"
        ],
        "explanation": "Balancing usability and security is a listed challenge."
      }
    ],
    "finalTopics": [
      {
        "id": "final-topic-1",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Component-Based Software",
        "prompt": "What is the main idea of component-based software engineering?",
        "answer": "Building systems by assembling reusable components with defined interfaces",
        "wrong": [
          "Writing every feature from scratch",
          "Avoiding interfaces between modules",
          "Testing only the final executable"
        ],
        "explanation": "CBSE emphasizes reusable components and explicit interfaces."
      },
      {
        "id": "final-topic-2",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Component-Based Software",
        "prompt": "What does a component interface specify?",
        "answer": "The services provided or required by a component",
        "wrong": [
          "Only the color of the user interface",
          "The project budget",
          "A user's personal password"
        ],
        "explanation": "Interfaces describe how other parts of the system interact with a component."
      },
      {
        "id": "final-topic-3",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Component-Based Software",
        "prompt": "Which quality is important for reusable components?",
        "answer": "They should be modular, replaceable, and maintainable",
        "wrong": [
          "They should be tightly coupled to one project",
          "They should hide all documentation",
          "They should require manual copying only"
        ],
        "explanation": "Reusable components need clean boundaries and maintainability."
      },
      {
        "id": "final-topic-4",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Component-Based Software",
        "prompt": "What is COTS software?",
        "answer": "Commercial off-the-shelf software reused instead of custom-built code",
        "wrong": [
          "A defect classification method",
          "A password hashing format",
          "A UML relationship type"
        ],
        "explanation": "COTS products can reduce development effort when they fit requirements."
      },
      {
        "id": "final-topic-5",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Component-Based Software",
        "prompt": "Which is a common risk in component-based development?",
        "answer": "The selected component may not fully match system requirements",
        "wrong": [
          "Every component is automatically secure",
          "Interfaces are never needed",
          "Testing becomes illegal"
        ],
        "explanation": "Integration, mismatch, version, and vendor risks must be checked."
      },
      {
        "id": "final-topic-6",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Dependability",
        "prompt": "What is a socio-technical system?",
        "answer": "A system that includes software, hardware, people, procedures, and organizational rules",
        "wrong": [
          "Only source code and no users",
          "Only network cables",
          "A diagram with no process"
        ],
        "explanation": "Dependability often depends on both technical and human parts of the system."
      },
      {
        "id": "final-topic-7",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Dependability",
        "prompt": "What does software dependability mean?",
        "answer": "The ability of a system to deliver services that users can trust",
        "wrong": [
          "The ability to avoid all documentation",
          "The use of one programming language",
          "The number of developers on a team"
        ],
        "explanation": "A dependable system behaves reliably, safely, securely, and maintainably."
      },
      {
        "id": "final-topic-8",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Dependability",
        "prompt": "Which set lists major dependability attributes?",
        "answer": "Availability, reliability, safety, security, and maintainability",
        "wrong": [
          "Syntax, color, font, layout, and branding",
          "Planning, drawing, copying, deleting, and posting",
          "Storage, marketing, pricing, sales, and support"
        ],
        "explanation": "These attributes describe whether users can trust the service."
      },
      {
        "id": "final-topic-9",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Dependability",
        "prompt": "How is availability usually understood?",
        "answer": "The system is up and accessible when needed",
        "wrong": [
          "The system always has the newest UI",
          "The system contains no requirements",
          "The system uses only one server"
        ],
        "explanation": "Availability focuses on service uptime and access."
      },
      {
        "id": "final-topic-10",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Dependability",
        "prompt": "How is reliability usually understood?",
        "answer": "The system performs correctly over time without failure",
        "wrong": [
          "The system looks modern",
          "The team avoids version control",
          "All features are optional"
        ],
        "explanation": "Reliability focuses on correct service delivery across operation."
      },
      {
        "id": "final-topic-11",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Dependability",
        "prompt": "Which technique keeps a system operating even when faults occur?",
        "answer": "Fault tolerance",
        "wrong": [
          "Fault deletion from documentation",
          "Interface sketching",
          "Color refactoring"
        ],
        "explanation": "Fault tolerance lets a system continue service despite faults."
      },
      {
        "id": "final-topic-12",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Dependability",
        "prompt": "What is a safety-critical system?",
        "answer": "A system whose failure can cause injury, death, environmental damage, or major loss",
        "wrong": [
          "A system that stores only sample data",
          "A system used only for color selection",
          "A system with no users"
        ],
        "explanation": "Safety-critical systems require stronger analysis and controls."
      },
      {
        "id": "final-topic-13",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Service-Oriented Architecture",
        "prompt": "What is service-oriented architecture?",
        "answer": "An architecture where software functionality is provided as reusable services",
        "wrong": [
          "A method for drawing only class diagrams",
          "A rule that forbids network communication",
          "A testing phase after retirement"
        ],
        "explanation": "SOA organizes functionality around services with defined contracts."
      },
      {
        "id": "final-topic-14",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Service-Oriented Architecture",
        "prompt": "What does loose coupling mean in SOA?",
        "answer": "Services depend on each other as little as possible through stable contracts",
        "wrong": [
          "Every service shares the same database table directly",
          "Services cannot communicate",
          "All services must be in one file"
        ],
        "explanation": "Loose coupling improves flexibility and replacement."
      },
      {
        "id": "final-topic-15",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Service-Oriented Architecture",
        "prompt": "Which technology style is commonly used for service APIs?",
        "answer": "REST",
        "wrong": [
          "A spreadsheet chart",
          "A syntax error",
          "A project budget"
        ],
        "explanation": "REST is commonly used for web APIs and services."
      },
      {
        "id": "final-topic-16",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Service-Oriented Architecture",
        "prompt": "What is service composition?",
        "answer": "Combining multiple services to support a larger business process",
        "wrong": [
          "Deleting all services before release",
          "Changing fonts in a dashboard",
          "Removing requirements from a project"
        ],
        "explanation": "Complex workflows can be built by coordinating services."
      },
      {
        "id": "final-topic-17",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Service-Oriented Architecture",
        "prompt": "What is the role of a service contract?",
        "answer": "It describes how a service can be used, including operations and data expectations",
        "wrong": [
          "It lists only team attendance",
          "It hides every interface",
          "It replaces all testing"
        ],
        "explanation": "Contracts let service consumers use services predictably."
      },
      {
        "id": "final-topic-18",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Software Management",
        "prompt": "What is software project management concerned with?",
        "answer": "Planning, organizing, monitoring, and controlling software work",
        "wrong": [
          "Only writing source code",
          "Only choosing brand colors",
          "Only deleting old files"
        ],
        "explanation": "Management coordinates people, time, budget, scope, quality, and risk."
      },
      {
        "id": "final-topic-19",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Software Management",
        "prompt": "What is a software project plan used for?",
        "answer": "It defines scope, schedule, resources, risks, and deliverables",
        "wrong": [
          "It replaces user requirements",
          "It stores passwords",
          "It removes communication"
        ],
        "explanation": "A project plan gives the team a baseline for execution and tracking."
      },
      {
        "id": "final-topic-20",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Software Management",
        "prompt": "What does risk management do in software projects?",
        "answer": "Identifies, analyzes, and controls possible project problems",
        "wrong": [
          "Guarantees no change will happen",
          "Deletes all documentation",
          "Avoids testing until release"
        ],
        "explanation": "Risk management makes uncertainty visible before it becomes damage."
      },
      {
        "id": "final-topic-21",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Software Management",
        "prompt": "What is a project milestone?",
        "answer": "A significant checkpoint or event in the project schedule",
        "wrong": [
          "A random variable name",
          "A code indentation style",
          "A network password"
        ],
        "explanation": "Milestones help track progress against the plan."
      },
      {
        "id": "final-topic-22",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Software Management",
        "prompt": "Why is quality management important?",
        "answer": "It helps ensure the product meets requirements and standards",
        "wrong": [
          "It eliminates the need for reviews",
          "It makes cost tracking impossible",
          "It avoids user feedback"
        ],
        "explanation": "Quality management includes standards, reviews, testing, and process checks."
      },
      {
        "id": "final-topic-23",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Software Management",
        "prompt": "Which leadership action supports software teams?",
        "answer": "Resolving conflicts and supporting collaboration",
        "wrong": [
          "Hiding deadlines from the team",
          "Avoiding communication",
          "Ignoring risks"
        ],
        "explanation": "Good leadership keeps team work coordinated and realistic."
      },
      {
        "id": "final-topic-24",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Security Engineering",
        "prompt": "What is security engineering?",
        "answer": "Designing, developing, testing, and maintaining systems that resist attacks",
        "wrong": [
          "Only adding logos to a website",
          "Only writing user stories",
          "Only compiling a program"
        ],
        "explanation": "Security engineering applies protection throughout the lifecycle."
      },
      {
        "id": "final-topic-25",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Security Engineering",
        "prompt": "What does confidentiality protect?",
        "answer": "Data access so only authorized users can view information",
        "wrong": [
          "The speed of animations",
          "The number of branches in Git",
          "The color of a dashboard"
        ],
        "explanation": "Confidentiality is one pillar of the CIA triad."
      },
      {
        "id": "final-topic-26",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Security Engineering",
        "prompt": "What does integrity protect?",
        "answer": "Data accuracy and protection against unauthorized modification",
        "wrong": [
          "User interface spacing",
          "Server room temperature only",
          "The number of comments in code"
        ],
        "explanation": "Integrity keeps information correct and trustworthy."
      },
      {
        "id": "final-topic-27",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Security Engineering",
        "prompt": "What does availability protect?",
        "answer": "Access to systems and data when needed",
        "wrong": [
          "The application's font family",
          "Only the database schema name",
          "All unused features"
        ],
        "explanation": "Availability is both a security and dependability concern."
      },
      {
        "id": "final-topic-28",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Security Engineering",
        "prompt": "What is threat modeling used for?",
        "answer": "Identifying assets, attackers, vulnerabilities, and prevention strategies",
        "wrong": [
          "Choosing a color palette",
          "Counting only code lines",
          "Skipping security requirements"
        ],
        "explanation": "Threat modeling helps teams reason about attacks before implementation."
      },
      {
        "id": "final-topic-29",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Security Engineering",
        "prompt": "Which practice helps prevent SQL injection?",
        "answer": "Using parameterized SQL queries",
        "wrong": [
          "Concatenating raw user input into SQL",
          "Disabling all validation",
          "Storing passwords in comments"
        ],
        "explanation": "Parameterized queries separate code from user data."
      },
      {
        "id": "final-topic-30",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Security Engineering",
        "prompt": "What is penetration testing?",
        "answer": "A simulated attack used to find vulnerabilities",
        "wrong": [
          "A diagram of team roles",
          "A deployment schedule",
          "A UI prototype"
        ],
        "explanation": "Pen tests reveal practical weaknesses attackers might exploit."
      },
      {
        "id": "final-topic-31",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Security Engineering",
        "prompt": "What is vulnerability scanning?",
        "answer": "Automated detection of known security weaknesses",
        "wrong": [
          "A manual only for database design",
          "A way to avoid updates",
          "A refactoring pattern"
        ],
        "explanation": "Scanners help detect known issues, but they do not replace deeper review."
      },
      {
        "id": "final-topic-32",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Security Engineering",
        "prompt": "What is DevSecOps?",
        "answer": "Integrating security into DevOps and continuous delivery practices",
        "wrong": [
          "Removing security from deployment",
          "Replacing version control",
          "Making all users administrators"
        ],
        "explanation": "DevSecOps treats security as part of everyday delivery."
      },
      {
        "id": "final-topic-33",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Advanced Software Engineering",
        "prompt": "What does CI usually mean?",
        "answer": "Frequent integration of code changes into a shared repository with automated checks",
        "wrong": [
          "Manual deployment only once per year",
          "No testing until after retirement",
          "Only documenting passwords"
        ],
        "explanation": "Continuous integration helps expose problems early."
      },
      {
        "id": "final-topic-34",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Advanced Software Engineering",
        "prompt": "What does CD usually mean in a DevOps pipeline?",
        "answer": "Automated delivery or deployment after tests pass",
        "wrong": [
          "A class diagram",
          "A database-only activity",
          "A password reset policy"
        ],
        "explanation": "CD moves validated changes toward release faster and more reliably."
      },
      {
        "id": "final-topic-35",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Advanced Software Engineering",
        "prompt": "Why are containers useful?",
        "answer": "They package applications with dependencies for consistent deployment",
        "wrong": [
          "They remove all security needs",
          "They prevent teamwork",
          "They replace requirements analysis"
        ],
        "explanation": "Containers reduce environment mismatch between development and production."
      },
      {
        "id": "final-topic-36",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Advanced Software Engineering",
        "prompt": "What does Kubernetes primarily help manage?",
        "answer": "Deployment, scaling, load balancing, and recovery for containers",
        "wrong": [
          "Grammar checking",
          "Manual budget approvals",
          "Entity relationship drawing only"
        ],
        "explanation": "Kubernetes orchestrates containerized applications."
      },
      {
        "id": "final-topic-37",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Advanced Software Engineering",
        "prompt": "What is a microservices architecture?",
        "answer": "A system split into small independent services that communicate through APIs",
        "wrong": [
          "A single huge executable with no boundaries",
          "A database with no relationships",
          "A project with no deployment"
        ],
        "explanation": "Microservices improve independent deployment but add distributed complexity."
      },
      {
        "id": "final-topic-38",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Advanced Software Engineering",
        "prompt": "Which challenge is common in microservices?",
        "answer": "Distributed debugging and service coordination",
        "wrong": [
          "No communication between services ever",
          "Zero infrastructure cost",
          "No security concerns"
        ],
        "explanation": "Microservices need careful observability, coordination, and security."
      },
      {
        "id": "final-topic-39",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Advanced Software Engineering",
        "prompt": "How can AI support software engineering?",
        "answer": "Through recommendations, chatbots, predictive analytics, automated testing, and intelligent automation",
        "wrong": [
          "By removing all human decisions",
          "By replacing every requirement with code comments",
          "By preventing all project risks automatically"
        ],
        "explanation": "The notes connect AI to automation and smarter engineering workflows."
      },
      {
        "id": "final-topic-40",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Advanced Software Engineering",
        "prompt": "What is big data engineering concerned with?",
        "answer": "Processing massive volumes of data using tools such as Hadoop, Spark, and NoSQL databases",
        "wrong": [
          "Only formatting small documents",
          "Only drawing UML diagrams",
          "Only setting passwords"
        ],
        "explanation": "Big data engineering designs systems for volume, velocity, and variety."
      },
      {
        "id": "final-topic-41",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Advanced Software Engineering",
        "prompt": "What is blockchain in the software engineering notes?",
        "answer": "A decentralized digital ledger used for cryptocurrency, supply chains, and smart contracts",
        "wrong": [
          "A CSS layout method",
          "A UML-only diagram",
          "A testing delay"
        ],
        "explanation": "Blockchain provides distributed, tamper-resistant records."
      },
      {
        "id": "final-topic-42",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Advanced Software Engineering",
        "prompt": "What is IoT?",
        "answer": "Connecting physical devices such as smart homes, smart watches, and sensors to the internet",
        "wrong": [
          "Deleting all connected devices",
          "Only running code offline",
          "A code review checklist"
        ],
        "explanation": "IoT systems combine devices, connectivity, data, and software services."
      },
      {
        "id": "final-topic-43",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Advanced Software Engineering",
        "prompt": "What is green software engineering concerned with?",
        "answer": "Designing software that uses energy and computing resources efficiently",
        "wrong": [
          "Using only green colors in the UI",
          "Removing documentation",
          "Blocking all updates"
        ],
        "explanation": "Green software engineering is an emerging trend focused on sustainability."
      }
    ],
    "everything": [
      {
        "id": "prelim-process-1",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "What is a software process?",
        "answer": "A structured set of activities, methods, practices, and transformations for developing and maintaining software",
        "wrong": [
          "A programming language used only for web applications",
          "A diagram that only shows database relationships",
          "A testing tool that runs after deployment"
        ],
        "explanation": "A software process provides a disciplined framework from planning and analysis through deployment and maintenance."
      },
      {
        "id": "prelim-process-2",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "Which objective is directly associated with a software process?",
        "answer": "Producing high-quality software that meets user and business requirements",
        "wrong": [
          "Avoiding all documentation during development",
          "Replacing testing with deployment",
          "Making software impossible to modify"
        ],
        "explanation": "The process aims to deliver quality software, meet requirements, reduce risks, and improve maintainability."
      },
      {
        "id": "prelim-process-3",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "What is the main deliverable of the requirements analysis phase?",
        "answer": "Software Requirements Specification (SRS)",
        "wrong": [
          "Source code repository",
          "Deployment certificate",
          "Compiled executable only"
        ],
        "explanation": "Requirements analysis ends with the SRS, which documents the system's functional and non-functional requirements."
      },
      {
        "id": "prelim-process-4",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "Which activity identifies what users and stakeholders need from the system?",
        "answer": "Requirements Analysis",
        "wrong": [
          "Deployment",
          "Code Review",
          "Refactoring"
        ],
        "explanation": "Requirements analysis gathers and specifies user and stakeholder needs before design begins."
      },
      {
        "id": "prelim-process-5",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "What does system design do in the software process?",
        "answer": "Transforms requirements into a blueprint for implementation",
        "wrong": [
          "Publishes the app on an app store",
          "Deletes old code after release",
          "Runs only after maintenance"
        ],
        "explanation": "Design converts requirements into architectural, database, interface, and component plans."
      },
      {
        "id": "prelim-process-6",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "Which sequence best matches the core software process flow?",
        "answer": "Requirements, design, implementation, testing, deployment, maintenance",
        "wrong": [
          "Testing, deployment, design, requirements, implementation, maintenance",
          "Deployment, requirements, debugging, design, maintenance, coding",
          "Maintenance, coding, requirements, deployment, testing, design"
        ],
        "explanation": "The standard flow begins by understanding needs, designing a solution, coding it, testing it, deploying it, and maintaining it."
      },
      {
        "id": "prelim-process-7",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "Which model follows a sequential phase-by-phase approach?",
        "answer": "Waterfall Model",
        "wrong": [
          "Agile Model",
          "Spiral Model",
          "DevOps Model"
        ],
        "explanation": "Waterfall moves through phases in order, with each phase completed before the next begins."
      },
      {
        "id": "prelim-process-8",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "When is the Waterfall model most appropriate?",
        "answer": "Projects with stable and well-defined requirements",
        "wrong": [
          "Projects with unclear requirements that change daily",
          "High-risk systems that need repeated risk analysis only",
          "Projects requiring continuous stakeholder feedback every sprint"
        ],
        "explanation": "Waterfall works best when requirements are known early and unlikely to change."
      },
      {
        "id": "prelim-process-9",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "What is a key characteristic of Agile development?",
        "answer": "Short iterations called sprints with continuous feedback",
        "wrong": [
          "All testing delayed until several years after release",
          "No stakeholder involvement after requirements",
          "A one-way sequence with no adaptation"
        ],
        "explanation": "Agile uses short cycles, frequent delivery, feedback, and adaptation to change."
      },
      {
        "id": "prelim-process-10",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "Which software process model focuses strongly on risk analysis?",
        "answer": "Spiral Model",
        "wrong": [
          "Waterfall Model",
          "Pure deployment model",
          "Database-only model"
        ],
        "explanation": "The Spiral model combines iterative development with risk identification and mitigation."
      },
      {
        "id": "prelim-process-11",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "Which disadvantage is associated with Agile?",
        "answer": "It requires active and continuous stakeholder involvement",
        "wrong": [
          "It never delivers working software",
          "It cannot respond to changing requirements",
          "It has no iterations"
        ],
        "explanation": "Agile depends on frequent feedback and collaboration, which requires ongoing stakeholder availability."
      },
      {
        "id": "prelim-process-12",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "Which issue can occur when a project has no defined software process?",
        "answer": "Delays, cost overruns, poor quality, and maintenance difficulties",
        "wrong": [
          "Automatic improvement in reliability",
          "Zero communication requirements",
          "Instant delivery without testing"
        ],
        "explanation": "A defined process helps make development more systematic and predictable."
      },
      {
        "id": "prelim-process-13",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "What does DevOps combine?",
        "answer": "Development and operations for continuous delivery",
        "wrong": [
          "Database tables and entity relationships only",
          "Syntax errors and runtime errors",
          "User interface colors and fonts"
        ],
        "explanation": "DevOps links development and operations practices to make delivery smoother and faster."
      },
      {
        "id": "prelim-process-14",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "What does CI/CD primarily automate?",
        "answer": "Testing and deployment pipelines",
        "wrong": [
          "Manual interviews with users",
          "Choosing programming languages",
          "Writing all requirements without review"
        ],
        "explanation": "Continuous Integration and Continuous Deployment automate checks and release steps."
      },
      {
        "id": "prelim-process-15",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "In the mobile banking example, which activity tests security vulnerabilities, transaction accuracy, and heavy-load performance?",
        "answer": "Testing Phase",
        "wrong": [
          "Requirements Phase",
          "Initial coding only",
          "Interface sketching"
        ],
        "explanation": "QA engineers validate security, correctness, and performance during testing."
      },
      {
        "id": "prelim-process-16",
        "source": "Prelim Exam",
        "set": "prelim-process",
        "tag": "Software Process",
        "prompt": "Which is a common challenge in the software process?",
        "answer": "Changing requirements",
        "wrong": [
          "Perfect communication at all times",
          "No need for documentation",
          "Guaranteed realistic deadlines"
        ],
        "explanation": "The materials list changing requirements, poor communication, unrealistic deadlines, inadequate testing, and lack of documentation as common problems."
      },
      {
        "id": "prelim-design-1",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "What does architectural design define?",
        "answer": "The overall structure and organization of the system",
        "wrong": [
          "Only the color palette of the interface",
          "Only syntax errors in the code",
          "The final app store listing"
        ],
        "explanation": "Architectural design defines structures such as client-server, three-tier, and microservices."
      },
      {
        "id": "prelim-design-2",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "Which design type defines tables, relationships, and data storage?",
        "answer": "Database Design",
        "wrong": [
          "Interface Design",
          "Code Review",
          "Activity Design"
        ],
        "explanation": "Database design maps entities, relationships, tables, primary keys, and foreign keys."
      },
      {
        "id": "prelim-design-3",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "Which design type focuses on login forms, dashboards, and navigation menus?",
        "answer": "Interface Design",
        "wrong": [
          "Component Design",
          "Spiral Design",
          "Version Control Design"
        ],
        "explanation": "Interface design defines how users interact visually with the system."
      },
      {
        "id": "prelim-design-4",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "Which design type defines modules and classes such as Authentication, Payment, and Report Generation?",
        "answer": "Component Design",
        "wrong": [
          "Database Design",
          "Cloud Design",
          "Requirements Analysis"
        ],
        "explanation": "Component design breaks the system into internal modules, classes, and responsibilities."
      },
      {
        "id": "prelim-design-5",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "Which architecture uses presentation, business logic, and data layers?",
        "answer": "Three-Tier Architecture",
        "wrong": [
          "Single-table architecture",
          "Code review architecture",
          "Legacy-only architecture"
        ],
        "explanation": "A three-tier architecture separates presentation, business logic, and data concerns."
      },
      {
        "id": "prelim-design-6",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "What best describes microservices architecture?",
        "answer": "Independent services that communicate through APIs",
        "wrong": [
          "A single file containing the whole application",
          "A database table with no relationships",
          "A testing phase performed after deployment only"
        ],
        "explanation": "Microservices split the system into small independent services connected through APIs."
      },
      {
        "id": "prelim-design-7",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "Which design principle hides unnecessary implementation details?",
        "answer": "Abstraction",
        "wrong": [
          "Encapsulation",
          "Low Coupling",
          "High Cohesion"
        ],
        "explanation": "Abstraction lets users interact with useful behavior without seeing internal implementation."
      },
      {
        "id": "prelim-design-8",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "Which principle combines data and methods into one unit?",
        "answer": "Encapsulation",
        "wrong": [
          "Abstraction",
          "Deployment",
          "Impact Analysis"
        ],
        "explanation": "Encapsulation keeps related data and behavior together, such as in a Student class."
      },
      {
        "id": "prelim-design-9",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "What does modularity mean?",
        "answer": "Dividing software into smaller independent modules",
        "wrong": [
          "Putting every feature in one long function",
          "Avoiding all class diagrams",
          "Running tests before writing any requirements"
        ],
        "explanation": "Modularity separates responsibilities into manageable parts like Inventory, Payment, and Shipping."
      },
      {
        "id": "prelim-design-10",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "What does low coupling require?",
        "answer": "Modules should have minimal dependency on one another",
        "wrong": [
          "Modules should all depend on one giant shared function",
          "Every module should handle every responsibility",
          "All code should be merged into one class"
        ],
        "explanation": "Low coupling makes updates easier because modules are not tightly dependent."
      },
      {
        "id": "prelim-design-11",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "What does high cohesion mean?",
        "answer": "A module focuses on one specific responsibility",
        "wrong": [
          "A module handles unrelated tasks at the same time",
          "A module avoids having a purpose",
          "A system has no internal structure"
        ],
        "explanation": "High cohesion keeps each module clear, understandable, and maintainable."
      },
      {
        "id": "prelim-design-12",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "Why is UML used in software engineering?",
        "answer": "To visualize software designs before coding begins",
        "wrong": [
          "To replace all testing activities",
          "To deploy software automatically",
          "To remove the need for requirements"
        ],
        "explanation": "UML diagrams communicate system design before implementation."
      },
      {
        "id": "prelim-design-13",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "Which UML diagram shows user interactions with the system?",
        "answer": "Use Case Diagram",
        "wrong": [
          "Class Diagram",
          "ER Diagram",
          "Sequence Diagram"
        ],
        "explanation": "Use case diagrams show actors and the actions they perform with the system."
      },
      {
        "id": "prelim-design-14",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "Which UML diagram shows classes, attributes, and relationships?",
        "answer": "Class Diagram",
        "wrong": [
          "Activity Diagram",
          "Use Case Diagram",
          "Deployment checklist"
        ],
        "explanation": "Class diagrams model object-oriented structure: classes, attributes, methods, and relationships."
      },
      {
        "id": "prelim-design-15",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "Which diagram shows interaction flow between objects?",
        "answer": "Sequence Diagram",
        "wrong": [
          "ER Diagram",
          "Use Case Diagram",
          "Database schema only"
        ],
        "explanation": "Sequence diagrams show how objects interact over time."
      },
      {
        "id": "prelim-design-16",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "What does unit testing check?",
        "answer": "Each module independently",
        "wrong": [
          "Only final user feedback",
          "Only external marketing pages",
          "The whole organization chart"
        ],
        "explanation": "Unit tests validate one module or unit at a time, such as checking login behavior."
      },
      {
        "id": "prelim-design-17",
        "source": "Prelim Exam",
        "set": "prelim-design",
        "tag": "Design and Implementation",
        "prompt": "What is the purpose of a design review?",
        "answer": "To evaluate scalability, module design, security, and performance requirements",
        "wrong": [
          "To delete the architecture before coding",
          "To test only spelling in comments",
          "To replace all source code reviews"
        ],
        "explanation": "Design review checks whether the design is sound before or during implementation."
      },
      {
        "id": "prelim-evolution-1",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "What is software evolution?",
        "answer": "The continuous process of modifying and updating software after deployment",
        "wrong": [
          "The first draft of source code before testing",
          "A diagram used only for database tables",
          "A rule that software should never change"
        ],
        "explanation": "Software evolution keeps systems aligned with changing requirements, technologies, and user needs."
      },
      {
        "id": "prelim-evolution-2",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "Why must software evolve?",
        "answer": "User needs, business rules, technology, security, and performance requirements change",
        "wrong": [
          "Software becomes perfect immediately after deployment",
          "Maintenance is never required after release",
          "Old platforms never become outdated"
        ],
        "explanation": "The materials emphasize that deployed systems are not static products."
      },
      {
        "id": "prelim-evolution-3",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "Which set correctly lists the four maintenance types?",
        "answer": "Corrective, adaptive, perfective, preventive",
        "wrong": [
          "Planning, coding, compiling, publishing",
          "Syntax, logic, runtime, deployment",
          "Client, server, database, network"
        ],
        "explanation": "Software maintenance is commonly classified into these four categories."
      },
      {
        "id": "prelim-evolution-4",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "Which maintenance type fixes defects and errors?",
        "answer": "Corrective Maintenance",
        "wrong": [
          "Adaptive Maintenance",
          "Perfective Maintenance",
          "Preventive Maintenance"
        ],
        "explanation": "Corrective maintenance fixes bugs, such as a login defect."
      },
      {
        "id": "prelim-evolution-5",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "Which maintenance type adapts software to new environments?",
        "answer": "Adaptive Maintenance",
        "wrong": [
          "Corrective Maintenance",
          "Perfective Maintenance",
          "Preventive Maintenance"
        ],
        "explanation": "Adaptive maintenance updates software for new operating systems, platforms, hardware, or environments."
      },
      {
        "id": "prelim-evolution-6",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "Which maintenance type improves performance or usability?",
        "answer": "Perfective Maintenance",
        "wrong": [
          "Corrective Maintenance",
          "Adaptive Maintenance",
          "Preventive Maintenance"
        ],
        "explanation": "Perfective maintenance enhances usability, performance, or features."
      },
      {
        "id": "prelim-evolution-7",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "Which maintenance type prevents future problems by improving maintainability?",
        "answer": "Preventive Maintenance",
        "wrong": [
          "Adaptive Maintenance",
          "Corrective Maintenance",
          "Perfective Maintenance"
        ],
        "explanation": "Preventive maintenance includes work such as refactoring to reduce complexity."
      },
      {
        "id": "prelim-evolution-8",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "What does Lehman's law of Continuing Change state?",
        "answer": "Software must continually adapt or become less useful",
        "wrong": [
          "All software should stop changing after release",
          "Testing should happen only once",
          "Software quality always improves without maintenance"
        ],
        "explanation": "Continuing Change means useful software must adapt to its environment."
      },
      {
        "id": "prelim-evolution-9",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "What does Lehman's law of Increasing Complexity warn about?",
        "answer": "Complexity increases unless active effort is made to reduce it",
        "wrong": [
          "Complexity always disappears automatically after deployment",
          "Only brand-new systems can become complex",
          "Documentation causes every system to fail"
        ],
        "explanation": "As systems evolve, complexity tends to grow unless controlled through maintenance practices."
      },
      {
        "id": "prelim-evolution-10",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "What is a legacy system?",
        "answer": "An old software system still in active use, often critical but difficult to maintain",
        "wrong": [
          "A new prototype with no users",
          "A design diagram for future software",
          "A temporary test script"
        ],
        "explanation": "Legacy systems often run on outdated technology but remain important to business operations."
      },
      {
        "id": "prelim-evolution-11",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "Which is a common problem with legacy systems?",
        "answer": "Lack of documentation and high maintenance cost",
        "wrong": [
          "Guaranteed perfect security",
          "No dependency on outdated technology",
          "Unlimited supply of skilled developers"
        ],
        "explanation": "Legacy systems often suffer from outdated technology, poor documentation, security issues, and scarce expertise."
      },
      {
        "id": "prelim-evolution-12",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "What does software reengineering do?",
        "answer": "Improves an existing system without changing its core functionality",
        "wrong": [
          "Deletes an application and forbids replacement",
          "Changes external behavior randomly",
          "Only renames variables without analysis"
        ],
        "explanation": "Reengineering can include code restructuring, database migration, interface modernization, and documentation improvement."
      },
      {
        "id": "prelim-evolution-13",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "What is refactoring?",
        "answer": "Restructuring code without changing external behavior",
        "wrong": [
          "Adding random features without testing",
          "Replacing all users with administrators",
          "Deploying software before coding"
        ],
        "explanation": "Refactoring improves readability, reduces complexity, and improves maintainability while behavior remains the same."
      },
      {
        "id": "prelim-evolution-14",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "Which step comes immediately after a change request in the software evolution process?",
        "answer": "Impact Analysis",
        "wrong": [
          "Deployment",
          "Final user training",
          "Code deletion"
        ],
        "explanation": "After a change request, engineers analyze the effects and cost before modifying the design and code."
      },
      {
        "id": "prelim-evolution-15",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "Which benefit belongs to version control systems?",
        "answer": "Tracking history, supporting collaboration, rollback, and branching",
        "wrong": [
          "Preventing all software changes forever",
          "Removing the need for testing",
          "Guaranteeing there will be no bugs"
        ],
        "explanation": "Git, GitHub, GitLab, and Bitbucket help teams manage change over time."
      },
      {
        "id": "prelim-evolution-16",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "What is technical debt?",
        "answer": "Shortcuts taken during development that create future maintenance problems",
        "wrong": [
          "A formal UML diagram for payment systems",
          "A type of operating system update",
          "An automated deployment pipeline"
        ],
        "explanation": "Technical debt can come from tight deadlines, poor design, and weak testing coverage."
      },
      {
        "id": "prelim-evolution-17",
        "source": "Prelim Exam",
        "set": "prelim-evolution",
        "tag": "Software Evolution",
        "prompt": "What does DevSecOps emphasize?",
        "answer": "Integrating security into the continuous development and deployment pipeline",
        "wrong": [
          "Removing security checks until after release",
          "Keeping all legacy systems unchanged forever",
          "Replacing version control with manual copies"
        ],
        "explanation": "DevSecOps treats security as part of ongoing development rather than an afterthought."
      },
      {
        "id": "week34-1",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "What is software reuse?",
        "answer": "Using existing software assets to develop new systems",
        "wrong": [
          "Deleting old modules before deployment",
          "Testing every program without documentation",
          "Rewriting every component from scratch"
        ],
        "explanation": "Software reuse uses existing code, components, frameworks, services, designs, tests, or documentation to build new systems efficiently."
      },
      {
        "id": "week34-2",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which item can be considered a reusable software asset?",
        "answer": "A tested authentication component",
        "wrong": [
          "A random unresolved bug report only",
          "A failed deployment with no source code",
          "An expired password reset link"
        ],
        "explanation": "Reusable assets include source code, components, libraries, frameworks, documentation, test cases, and designs."
      },
      {
        "id": "week34-3",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Why is software reuse important?",
        "answer": "It saves development time, reduces cost, and can improve reliability",
        "wrong": [
          "It guarantees software has no vulnerabilities",
          "It removes the need for version control",
          "It prevents all future maintenance work"
        ],
        "explanation": "Reuse can improve productivity, lower cost, reduce testing effort, and use already-proven assets, but it still needs evaluation."
      },
      {
        "id": "week34-4",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which example best represents code reuse?",
        "answer": "Using a utility function in multiple projects",
        "wrong": [
          "Using a hospital policy document as source code",
          "Running a DoS attack against a server",
          "Making every module dependent on one file"
        ],
        "explanation": "Code reuse means reusing existing source code, such as utility functions across projects."
      },
      {
        "id": "week34-5",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which example best represents framework reuse?",
        "answer": "Building an app with ReactJS, Laravel, or Spring Boot",
        "wrong": [
          "Recovering a database after server failure",
          "Classifying a system as safety-critical",
          "Checking whether data is confidential"
        ],
        "explanation": "Framework reuse means developing with an existing framework instead of creating the full structure from scratch."
      },
      {
        "id": "week34-6",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "What is service reuse?",
        "answer": "Using external services through APIs",
        "wrong": [
          "Copying hardware routers into source code",
          "Avoiding all third-party services",
          "Sending phishing emails to test users"
        ],
        "explanation": "Service reuse uses services such as Google Maps APIs, payment gateways, or notification services."
      },
      {
        "id": "week34-7",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which characteristic belongs to a reusable software component?",
        "answer": "It is modular, independent, replaceable, and maintainable",
        "wrong": [
          "It only works in one undocumented system",
          "It requires every project to change its architecture completely",
          "It cannot be tested before reuse"
        ],
        "explanation": "Reusable components should be self-contained enough to work across multiple systems."
      },
      {
        "id": "week34-8",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "What is a software product line?",
        "answer": "A collection of related software systems that share common features",
        "wrong": [
          "A single error message printed by every application",
          "An attack that floods servers with requests",
          "A database backup schedule"
        ],
        "explanation": "Software product lines reuse shared features across related products, such as multiple versions of accounting software."
      },
      {
        "id": "week34-9",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which is a risk of software reuse?",
        "answer": "Hidden bugs, security vulnerabilities, licensing issues, or version conflicts",
        "wrong": [
          "Automatic removal of all maintenance costs",
          "Guaranteed compatibility with every project",
          "Total elimination of testing requirements"
        ],
        "explanation": "Reuse helps, but components must be evaluated for security, compatibility, maintenance, and licensing."
      },
      {
        "id": "week34-10",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which practice supports effective software reuse?",
        "answer": "Evaluate reusable components and monitor security updates",
        "wrong": [
          "Ignore documentation for reused components",
          "Use unpatched libraries indefinitely",
          "Reuse code without checking licenses"
        ],
        "explanation": "Best practices include careful evaluation, documentation, version control, compatibility checks, and security monitoring."
      },
      {
        "id": "week34-11",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "What is a socio-technical system?",
        "answer": "A system combining software, hardware, people, procedures, and organizational rules",
        "wrong": [
          "A program that contains only source code and no users",
          "A database table for system logs only",
          "A testing method that ignores human behavior"
        ],
        "explanation": "Socio-technical systems depend on technology plus human and organizational interactions."
      },
      {
        "id": "week34-12",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which group lists the five components of a socio-technical system?",
        "answer": "Hardware, software, people, procedures, organizational rules",
        "wrong": [
          "Code, compiler, syntax, runtime, comments",
          "Confidentiality, integrity, availability, malware, phishing",
          "Testing, coding, payment, shipping, inventory"
        ],
        "explanation": "The materials list hardware, software, people, procedures, and organizational rules."
      },
      {
        "id": "week34-13",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "What is dependability?",
        "answer": "The ability of a software system to deliver services that users can trust",
        "wrong": [
          "The process of adding random features after release",
          "The practice of reusing only user interface templates",
          "The ability to hide all documentation from developers"
        ],
        "explanation": "Dependable systems perform correctly, consistently, safely, and securely."
      },
      {
        "id": "week34-14",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which set correctly lists dependability attributes?",
        "answer": "Availability, reliability, safety, security, maintainability",
        "wrong": [
          "Confidentiality, phishing, malware, SQL injection, XSS",
          "Code reuse, component reuse, framework reuse, service reuse, product lines",
          "Requirements, diagrams, commits, branches, releases"
        ],
        "explanation": "The five attributes are availability, reliability, safety, security, and maintainability."
      },
      {
        "id": "week34-15",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which dependability attribute means the system is operational and accessible when needed?",
        "answer": "Availability",
        "wrong": [
          "Reliability",
          "Safety",
          "Maintainability"
        ],
        "explanation": "Availability focuses on whether the system is up and accessible when users need it."
      },
      {
        "id": "week34-16",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which dependability attribute means the system performs correctly without failure over time?",
        "answer": "Reliability",
        "wrong": [
          "Availability",
          "Authorization",
          "Non-repudiation"
        ],
        "explanation": "Reliability is about correct operation over time, such as an ATM consistently processing transactions."
      },
      {
        "id": "week34-17",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which dependability attribute focuses on avoiding harm or damage?",
        "answer": "Safety",
        "wrong": [
          "Availability",
          "Framework reuse",
          "Threat modeling"
        ],
        "explanation": "Safety is crucial in systems such as aircraft control, hospital monitoring, nuclear plants, and autonomous vehicles."
      },
      {
        "id": "week34-18",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "What is the CIA Triad?",
        "answer": "Confidentiality, Integrity, Availability",
        "wrong": [
          "Coding, Integration, Automation",
          "Components, Interfaces, Architecture",
          "Cloud, Identity, Authorization"
        ],
        "explanation": "The CIA Triad is the foundation of software security."
      },
      {
        "id": "week34-19",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which CIA Triad principle ensures only authorized users can access information?",
        "answer": "Confidentiality",
        "wrong": [
          "Integrity",
          "Availability",
          "Maintainability"
        ],
        "explanation": "Confidentiality protects information from unauthorized access."
      },
      {
        "id": "week34-20",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which CIA Triad principle ensures data remains accurate and unaltered?",
        "answer": "Integrity",
        "wrong": [
          "Confidentiality",
          "Availability",
          "Reliability"
        ],
        "explanation": "Integrity means data remains accurate, complete, and protected from unauthorized modification."
      },
      {
        "id": "week34-21",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which security threat uses fake emails or websites to steal credentials?",
        "answer": "Phishing",
        "wrong": [
          "SQL injection",
          "DoS attack",
          "Static testing"
        ],
        "explanation": "Phishing tricks users into revealing sensitive information, often through fake emails or websites."
      },
      {
        "id": "week34-22",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which attack inserts malicious SQL commands into input forms?",
        "answer": "SQL Injection",
        "wrong": [
          "Phishing",
          "Firewall filtering",
          "Fault recovery"
        ],
        "explanation": "SQL injection manipulates queries, often to bypass authentication or steal database data."
      },
      {
        "id": "week34-23",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which attack injects malicious scripts into websites?",
        "answer": "Cross-Site Scripting (XSS)",
        "wrong": [
          "Symmetric encryption",
          "Version control",
          "Fault avoidance"
        ],
        "explanation": "XSS inserts harmful scripts into web pages, such as malicious JavaScript in comments."
      },
      {
        "id": "week34-24",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "What is the effect of a Denial-of-Service attack?",
        "answer": "A server is overwhelmed so legitimate users cannot access the service",
        "wrong": [
          "A user cannot deny signing a transaction",
          "A reusable component becomes better documented",
          "A class diagram gains new attributes"
        ],
        "explanation": "DoS attacks flood systems with traffic or requests, hurting availability."
      },
      {
        "id": "week34-25",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "What is dependability engineering?",
        "answer": "Designing, developing, testing, and maintaining systems for reliability, safety, availability, and security",
        "wrong": [
          "Choosing color themes for a dashboard",
          "Removing all human users from a system",
          "Using only open-source libraries without checking them"
        ],
        "explanation": "Dependability engineering minimizes failures and reduces risk in critical systems."
      },
      {
        "id": "week34-26",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which fault technique prevents faults during development?",
        "answer": "Fault Avoidance",
        "wrong": [
          "Fault Recovery",
          "Fault Tolerance",
          "Fault Injection"
        ],
        "explanation": "Fault avoidance uses good design practices, coding standards, and developer training to prevent faults."
      },
      {
        "id": "week34-27",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which fault technique identifies faults before deployment?",
        "answer": "Fault Detection",
        "wrong": [
          "Fault Recovery",
          "Cloud Migration",
          "Service Reuse"
        ],
        "explanation": "Fault detection uses testing, code reviews, and static analysis to find problems before release."
      },
      {
        "id": "week34-28",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which fault technique allows a system to continue operating despite failures?",
        "answer": "Fault Tolerance",
        "wrong": [
          "Fault Avoidance",
          "Code Reuse",
          "Threat Modeling"
        ],
        "explanation": "Fault tolerance can use backup servers or redundancy so the system keeps operating after failures."
      },
      {
        "id": "week34-29",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which security practice verifies a user's identity?",
        "answer": "Authentication",
        "wrong": [
          "Authorization",
          "Availability",
          "Refactoring"
        ],
        "explanation": "Authentication checks who the user is, using passwords, biometrics, or 2FA."
      },
      {
        "id": "week34-30",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which security practice determines what a user is allowed to do?",
        "answer": "Authorization",
        "wrong": [
          "Authentication",
          "Encryption",
          "Fault Recovery"
        ],
        "explanation": "Authorization controls permissions, such as allowing only administrators to delete records."
      },
      {
        "id": "week34-31",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "What does encryption do?",
        "answer": "Converts readable data into unreadable form to protect information",
        "wrong": [
          "Deletes data permanently after every login",
          "Makes all code reusable by default",
          "Prevents users from needing passwords"
        ],
        "explanation": "Encryption protects sensitive data in storage or transit, such as HTTPS/TLS for websites."
      },
      {
        "id": "week34-32",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which encryption type uses one key for encryption and decryption?",
        "answer": "Symmetric Encryption",
        "wrong": [
          "Asymmetric Encryption",
          "Static Testing",
          "Zero Trust"
        ],
        "explanation": "Symmetric encryption uses one shared key; AES is a common example."
      },
      {
        "id": "week34-33",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which encryption type uses public and private keys?",
        "answer": "Asymmetric Encryption",
        "wrong": [
          "Symmetric Encryption",
          "Dynamic Testing",
          "Fault Recovery"
        ],
        "explanation": "Asymmetric encryption uses a key pair; RSA is a common example."
      },
      {
        "id": "week34-34",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "What is threat modeling?",
        "answer": "Identifying assets, attackers, vulnerabilities, and prevention measures before implementation",
        "wrong": [
          "Running only the final deployment checklist",
          "Reusing a UI template without checking compatibility",
          "Writing code without security requirements"
        ],
        "explanation": "Threat modeling asks what needs protection, who may attack, what weaknesses exist, and how attacks can be prevented."
      },
      {
        "id": "week34-35",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "What does SSDLC mean in practice?",
        "answer": "Security is integrated into every development phase",
        "wrong": [
          "Security is checked only after users complain",
          "Testing is removed from software development",
          "Reuse replaces all design work"
        ],
        "explanation": "SSDLC adds security needs, secure architecture, secure coding, security testing, secure deployment, and patching across the lifecycle."
      },
      {
        "id": "week34-36",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which testing method uses simulated attacks to identify vulnerabilities?",
        "answer": "Penetration Testing",
        "wrong": [
          "Unit Testing only",
          "Code Reuse Testing",
          "Availability Scheduling"
        ],
        "explanation": "Penetration testing simulates attacker behavior to uncover security weaknesses."
      },
      {
        "id": "week34-37",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "Which testing method analyzes source code without executing it?",
        "answer": "Static Testing",
        "wrong": [
          "Dynamic Testing",
          "DoS Testing",
          "Service Reuse"
        ],
        "explanation": "Static testing reviews code without running the application."
      },
      {
        "id": "week34-38",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "What does a firewall do?",
        "answer": "Controls incoming and outgoing network traffic",
        "wrong": [
          "Stores all reusable components",
          "Guarantees no human error occurs",
          "Converts requirements into class diagrams"
        ],
        "explanation": "Firewalls help filter network traffic based on security rules."
      },
      {
        "id": "week34-39",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "What does an Intrusion Detection System do?",
        "answer": "Monitors suspicious activities and attacks",
        "wrong": [
          "Builds a software product line automatically",
          "Encrypts data with one shared key only",
          "Deletes old code after deployment"
        ],
        "explanation": "An IDS observes activity and alerts when suspicious behavior appears."
      },
      {
        "id": "week34-40",
        "source": "Week 3-4 Reviewer",
        "set": "week34",
        "tag": "Week 3-4",
        "prompt": "What is Zero Trust security?",
        "answer": "No user or device is automatically trusted",
        "wrong": [
          "Every internal device is trusted forever",
          "Only external users need passwords",
          "Security checks are skipped in cloud systems"
        ],
        "explanation": "Zero Trust follows the idea of verifying every access request continuously."
      },
      {
        "id": "last-quiz-2",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "Which is NOT listed as a reusable asset?",
        "answer": "Unrelated hardware cables",
        "wrong": [
          "Source code",
          "Components",
          "Frameworks"
        ],
        "explanation": "Reusable assets include source code, components, libraries, frameworks, docs, tests, and designs."
      },
      {
        "id": "last-quiz-3",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "Which benefit of reuse means fewer new lines of code are needed?",
        "answer": "Faster Development",
        "wrong": [
          "Licensing Issues",
          "Dependency Management",
          "Compatibility Issues"
        ],
        "explanation": "Faster development happens because less coding is required."
      },
      {
        "id": "last-quiz-4",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "Which type of reuse uses existing source code such as utility functions?",
        "answer": "Code Reuse",
        "wrong": [
          "Service Reuse",
          "Framework Reuse",
          "Application System Reuse"
        ],
        "explanation": "Code reuse is reuse of existing source code."
      },
      {
        "id": "last-quiz-5",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "Which type of reuse uses independent modules such as authentication components?",
        "answer": "Component Reuse",
        "wrong": [
          "Code Reuse",
          "Open-Source Reuse",
          "Cloud Security"
        ],
        "explanation": "Component reuse uses independent software modules."
      },
      {
        "id": "last-quiz-6",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "ReactJS, Angular, Laravel, and Spring Boot are examples of what?",
        "answer": "Framework Reuse",
        "wrong": [
          "Service Reuse",
          "Security Testing",
          "Threat Modeling"
        ],
        "explanation": "They are development frameworks."
      },
      {
        "id": "last-quiz-7",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "Google Maps API integration is an example of what?",
        "answer": "Service Reuse",
        "wrong": [
          "Object Reuse",
          "Static Testing",
          "Fault Recovery"
        ],
        "explanation": "Service reuse uses external services through APIs."
      },
      {
        "id": "last-quiz-8",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "A reusable component should be:",
        "answer": "Modular, independent, replaceable, and maintainable",
        "wrong": [
          "Hidden, unstable, untested, and undocumented",
          "Large, tightly coupled, secret, and fixed",
          "Expired, duplicated, and hardcoded"
        ],
        "explanation": "The source lists modular, independent, replaceable, and maintainable."
      },
      {
        "id": "last-quiz-9",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "Which reuse disadvantage involves legal restrictions?",
        "answer": "Licensing Issues",
        "wrong": [
          "Reduced Cost",
          "Standardization",
          "Faster Development"
        ],
        "explanation": "Licensing issues are legal restrictions."
      },
      {
        "id": "last-quiz-10",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "Using an existing CMS is an example of:",
        "answer": "Application System Reuse",
        "wrong": [
          "Code Reuse",
          "Dynamic Testing",
          "Zero Trust"
        ],
        "explanation": "Application system reuse reuses whole applications."
      },
      {
        "id": "last-quiz-11",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "A payment gateway integration best fits which approach?",
        "answer": "Component-Based Reuse",
        "wrong": [
          "Application System Reuse",
          "Quantum Computing",
          "Green Software"
        ],
        "explanation": "Component-based reuse reuses specific components."
      },
      {
        "id": "last-quiz-12",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "A software product line is:",
        "answer": "Related systems sharing common features",
        "wrong": [
          "A firewall rule set",
          "A malware type",
          "A test that runs without execution"
        ],
        "explanation": "Product lines are collections of related systems with shared features."
      },
      {
        "id": "last-quiz-13",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "Linux, WordPress, and Bootstrap are examples of:",
        "answer": "Open-Source Reuse",
        "wrong": [
          "Symmetric Encryption",
          "Kubernetes",
          "NoSQL"
        ],
        "explanation": "They are open-source examples."
      },
      {
        "id": "last-quiz-14",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "Which is a risk in software reuse?",
        "answer": "Version Conflicts",
        "wrong": [
          "Automatic perfect security",
          "No dependency concerns",
          "Guaranteed compatibility"
        ],
        "explanation": "Version conflicts are a listed reuse risk."
      },
      {
        "id": "last-quiz-15",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "Which is a software reuse best practice?",
        "answer": "Monitor security updates",
        "wrong": [
          "Ignore documentation",
          "Never check compatibility",
          "Avoid version control"
        ],
        "explanation": "Monitoring security updates is a best practice."
      },
      {
        "id": "last-quiz-16",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Reuse",
        "prompt": "Microservices, API economy, and cloud services are:",
        "answer": "Modern trends in software reuse",
        "wrong": [
          "Malware types",
          "Encryption types",
          "SSDLC phases"
        ],
        "explanation": "These are modern software reuse trends."
      },
      {
        "id": "last-quiz-17",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Advanced software engineering focuses on all EXCEPT:",
        "answer": "Avoiding software quality assurance",
        "wrong": [
          "Scalability",
          "Automation",
          "Cloud computing"
        ],
        "explanation": "ASE includes software quality assurance."
      },
      {
        "id": "last-quiz-18",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Which characteristic means a system supports many users and processes?",
        "answer": "Large-scale",
        "wrong": [
          "Static",
          "Hardcoded",
          "Unpatched"
        ],
        "explanation": "Large-scale means many users and processes."
      },
      {
        "id": "last-quiz-19",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Which characteristic means a system continues operating during failures?",
        "answer": "Fault-Tolerant",
        "wrong": [
          "Procedural",
          "Low-Code",
          "Green"
        ],
        "explanation": "Fault-tolerant systems continue during failures."
      },
      {
        "id": "last-quiz-20",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Which approach focuses on iterative development, feedback, collaboration, and rapid delivery?",
        "answer": "Agile Software Development",
        "wrong": [
          "Blockchain",
          "Static Testing",
          "Firewalling"
        ],
        "explanation": "Agile focuses on those four items."
      },
      {
        "id": "last-quiz-21",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "DevOps integrates:",
        "answer": "Development, operations, and automation",
        "wrong": [
          "Encryption, hashing, and phishing",
          "Hardware, malware, and Trojans",
          "Only coding and no deployment"
        ],
        "explanation": "DevOps integrates development, operations, and automation."
      },
      {
        "id": "last-quiz-22",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Which is NOT listed as a DevOps tool?",
        "answer": "WordPress",
        "wrong": [
          "Jenkins",
          "Docker",
          "Kubernetes"
        ],
        "explanation": "WordPress is an open-source reuse example, not a DevOps tool in this source."
      },
      {
        "id": "last-quiz-23",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Continuous Integration means developers:",
        "answer": "Frequently merge code into shared repositories",
        "wrong": [
          "Never merge code",
          "Only test manually",
          "Deploy without automation"
        ],
        "explanation": "CI involves frequent merges into shared repositories."
      },
      {
        "id": "last-quiz-24",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Continuous Deployment means applications are:",
        "answer": "Automatically tested and deployed",
        "wrong": [
          "Never deployed",
          "Only designed on paper",
          "Converted into malware"
        ],
        "explanation": "CD automates testing and deployment."
      },
      {
        "id": "last-quiz-25",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Which is a CI/CD benefit?",
        "answer": "Faster releases",
        "wrong": [
          "More manual delays",
          "Guaranteed phishing prevention",
          "No need for repositories"
        ],
        "explanation": "Faster releases are a CI/CD benefit."
      },
      {
        "id": "last-quiz-26",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Cloud-native applications are designed for:",
        "answer": "Cloud environments",
        "wrong": [
          "Only offline devices",
          "Only paper records",
          "Only desktop calculators"
        ],
        "explanation": "Cloud-native apps are designed for cloud environments."
      },
      {
        "id": "last-quiz-27",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Containerization packages applications with:",
        "answer": "All dependencies",
        "wrong": [
          "Only passwords",
          "Only threat models",
          "Only handwritten tests"
        ],
        "explanation": "Containers package apps with dependencies."
      },
      {
        "id": "last-quiz-28",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Docker is associated with:",
        "answer": "Containerization",
        "wrong": [
          "Malware analysis",
          "Non-repudiation",
          "Quantum mechanics"
        ],
        "explanation": "Docker is a popular containerization tool."
      },
      {
        "id": "last-quiz-29",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Kubernetes is used for all EXCEPT:",
        "answer": "Writing phishing emails",
        "wrong": [
          "Deployment management",
          "Scaling containers",
          "Load balancing"
        ],
        "explanation": "Kubernetes manages deployment, scaling, load balancing, and fault recovery."
      },
      {
        "id": "last-quiz-30",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Microservices divide applications into:",
        "answer": "Small independent services",
        "wrong": [
          "One huge tightly coupled file",
          "Only database tables",
          "Malware samples"
        ],
        "explanation": "Microservices are small independent services."
      },
      {
        "id": "last-quiz-31",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Which is a microservices advantage?",
        "answer": "Independent deployment",
        "wrong": [
          "Complex communication",
          "Security concerns",
          "Distributed debugging"
        ],
        "explanation": "Independent deployment is an advantage."
      },
      {
        "id": "last-quiz-32",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Which is a microservices challenge?",
        "answer": "Distributed debugging",
        "wrong": [
          "Better maintainability",
          "Easier scalability",
          "Faster development cycles"
        ],
        "explanation": "Distributed debugging is a challenge."
      },
      {
        "id": "last-quiz-33",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Which is an AI application in software engineering?",
        "answer": "Recommendation systems",
        "wrong": [
          "Firewalls only",
          "Password policies only",
          "CMS reuse only"
        ],
        "explanation": "Recommendation systems are AI applications."
      },
      {
        "id": "last-quiz-34",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Netflix recommendation uses machine learning to:",
        "answer": "Analyze behavior and recommend movies",
        "wrong": [
          "Configure firewalls only",
          "Patch servers only",
          "Write legal policies"
        ],
        "explanation": "The example analyzes user behavior and recommends movies."
      },
      {
        "id": "last-quiz-35",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Hadoop, Spark, and NoSQL databases are associated with:",
        "answer": "Big Data Engineering",
        "wrong": [
          "Authentication",
          "Open-source reuse only",
          "CSS styling"
        ],
        "explanation": "They are big data technologies."
      },
      {
        "id": "last-quiz-36",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Blockchain is best described as:",
        "answer": "A decentralized digital ledger",
        "wrong": [
          "A password policy",
          "A vulnerability scanner",
          "A UI template"
        ],
        "explanation": "Blockchain is a decentralized ledger."
      },
      {
        "id": "last-quiz-37",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Which is an IoT example?",
        "answer": "Smart watch",
        "wrong": [
          "SQL injection",
          "Jenkins pipeline",
          "AES key"
        ],
        "explanation": "Smart watches are IoT devices."
      },
      {
        "id": "last-quiz-38",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Which is an emerging trend from the source?",
        "answer": "Edge Computing",
        "wrong": [
          "Trojan Horses",
          "Hardcoded Passwords",
          "Waterfall-only Development"
        ],
        "explanation": "Edge computing is listed as an emerging trend."
      },
      {
        "id": "last-quiz-39",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Advanced SE",
        "prompt": "Green software engineering focuses on:",
        "answer": "Energy-efficient software systems",
        "wrong": [
          "Phishing prevention only",
          "CMS reuse only",
          "One-key encryption"
        ],
        "explanation": "Green software focuses on energy efficiency."
      },
      {
        "id": "last-quiz-40",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Security engineering designs systems to resist:",
        "answer": "Malicious attacks and unauthorized access",
        "wrong": [
          "All documentation",
          "All software reuse",
          "All automation"
        ],
        "explanation": "Security engineering resists attacks, unauthorized access, and threats."
      },
      {
        "id": "last-quiz-41",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which is NOT a consequence of security failure listed in the source?",
        "answer": "Guaranteed faster release",
        "wrong": [
          "Data theft",
          "Financial loss",
          "Identity theft"
        ],
        "explanation": "Security failure can cause theft, loss, identity theft, damage, and legal penalties."
      },
      {
        "id": "last-quiz-42",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which security goal involves keeping systems usable?",
        "answer": "Ensure system availability",
        "wrong": [
          "Avoid all testing",
          "Remove user trust",
          "Create vulnerabilities"
        ],
        "explanation": "Availability is one security engineering goal."
      },
      {
        "id": "last-quiz-43",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "The CIA Triad stands for:",
        "answer": "Confidentiality, Integrity, Availability",
        "wrong": [
          "Coding, Integration, Automation",
          "Cloud, IoT, AI",
          "Control, Injection, Authentication"
        ],
        "explanation": "CIA means Confidentiality, Integrity, Availability."
      },
      {
        "id": "last-quiz-44",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which principle means only authorized users can access information?",
        "answer": "Confidentiality",
        "wrong": [
          "Integrity",
          "Availability",
          "Automation"
        ],
        "explanation": "Confidentiality limits access."
      },
      {
        "id": "last-quiz-45",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which principle means data remains accurate and unaltered?",
        "answer": "Integrity",
        "wrong": [
          "Confidentiality",
          "Availability",
          "Scalability"
        ],
        "explanation": "Integrity protects accuracy and prevents unauthorized modification."
      },
      {
        "id": "last-quiz-46",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which principle means services remain operational?",
        "answer": "Availability",
        "wrong": [
          "Integrity",
          "Non-repudiation",
          "Code reuse"
        ],
        "explanation": "Availability keeps systems operational."
      },
      {
        "id": "last-quiz-47",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which principle verifies user identity?",
        "answer": "Authentication",
        "wrong": [
          "Authorization",
          "Availability",
          "Containerization"
        ],
        "explanation": "Authentication verifies identity."
      },
      {
        "id": "last-quiz-48",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which principle determines what users are allowed to do?",
        "answer": "Authorization",
        "wrong": [
          "Authentication",
          "Encryption",
          "Docker"
        ],
        "explanation": "Authorization determines permissions."
      },
      {
        "id": "last-quiz-49",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which principle prevents users from denying actions they performed?",
        "answer": "Non-Repudiation",
        "wrong": [
          "Availability",
          "Service Reuse",
          "Elastic Scalability"
        ],
        "explanation": "Non-repudiation prevents denial of actions."
      },
      {
        "id": "last-quiz-50",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Malware includes all EXCEPT:",
        "answer": "Kubernetes",
        "wrong": [
          "Viruses",
          "Worms",
          "Trojans"
        ],
        "explanation": "Kubernetes is a container orchestration platform."
      },
      {
        "id": "last-quiz-51",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Phishing is:",
        "answer": "Fraudulent attempts to steal information",
        "wrong": [
          "Packaging dependencies",
          "A framework reuse type",
          "A big data tool"
        ],
        "explanation": "Phishing uses fake messages or websites to steal information."
      },
      {
        "id": "last-quiz-52",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "SQL injection attacks insert malicious SQL into:",
        "answer": "Forms or queries",
        "wrong": [
          "Docker containers only",
          "Version control comments only",
          "Quantum processors"
        ],
        "explanation": "SQL injection targets inputs used in database queries."
      },
      {
        "id": "last-quiz-53",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "XSS injects malicious:",
        "answer": "Scripts into websites",
        "wrong": [
          "Containers into clusters",
          "Libraries into frameworks",
          "Green energy into software"
        ],
        "explanation": "Cross-site scripting injects scripts."
      },
      {
        "id": "last-quiz-54",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "A DoS attack causes services to become unavailable by:",
        "answer": "Flooding servers with excessive requests",
        "wrong": [
          "Encrypting data with AES",
          "Improving documentation",
          "Creating reusable APIs"
        ],
        "explanation": "DoS floods systems to hurt availability."
      },
      {
        "id": "last-quiz-55",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which is a vulnerability cause?",
        "answer": "Misconfigured servers",
        "wrong": [
          "Parameterized SQL",
          "Proper error handling",
          "Secure APIs"
        ],
        "explanation": "Misconfigured servers are a vulnerability cause."
      },
      {
        "id": "last-quiz-56",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "SSDLC means security is integrated into:",
        "answer": "Every phase of software development",
        "wrong": [
          "Only after deployment",
          "Only user training",
          "Only UI templates"
        ],
        "explanation": "SSDLC integrates security across the lifecycle."
      },
      {
        "id": "last-quiz-57",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which SSDLC activity belongs to requirements?",
        "answer": "Identify security needs",
        "wrong": [
          "Apply updates and patches",
          "Configure secure environments",
          "Conduct security testing"
        ],
        "explanation": "Requirements phase identifies security needs."
      },
      {
        "id": "last-quiz-58",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Threat modeling happens:",
        "answer": "Before implementation",
        "wrong": [
          "Only after legal penalties",
          "Only after deleting logs",
          "Only during UI design"
        ],
        "explanation": "Threat modeling identifies threats and vulnerabilities before implementation."
      },
      {
        "id": "last-quiz-59",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which question belongs to threat modeling?",
        "answer": "What assets need protection?",
        "wrong": [
          "What color should buttons be?",
          "What CMS theme is prettiest?",
          "Which user dislikes documentation?"
        ],
        "explanation": "Threat modeling asks what assets need protection."
      },
      {
        "id": "last-quiz-60",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Encryption converts readable data into:",
        "answer": "Unreadable form",
        "wrong": [
          "A reusable component",
          "A Kubernetes pod",
          "A user interface"
        ],
        "explanation": "Encryption protects information by making it unreadable."
      },
      {
        "id": "last-quiz-61",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Symmetric encryption uses:",
        "answer": "One key for encryption and decryption",
        "wrong": [
          "Public and private keys",
          "No keys",
          "Only fingerprints"
        ],
        "explanation": "Symmetric encryption uses one shared key."
      },
      {
        "id": "last-quiz-62",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Asymmetric encryption uses:",
        "answer": "Public and private keys",
        "wrong": [
          "One shared key only",
          "No encryption",
          "Only OTP codes"
        ],
        "explanation": "Asymmetric encryption uses a key pair."
      },
      {
        "id": "last-quiz-63",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "2FA requires:",
        "answer": "Additional verification",
        "wrong": [
          "No passwords",
          "Only SQL queries",
          "Only public keys"
        ],
        "explanation": "2FA requires additional verification such as OTP."
      },
      {
        "id": "last-quiz-64",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which is a biometric authentication example?",
        "answer": "Fingerprint recognition",
        "wrong": [
          "GitHub Actions",
          "Hadoop",
          "CMS"
        ],
        "explanation": "Fingerprint and facial recognition are biometric examples."
      },
      {
        "id": "last-quiz-65",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which secure coding practice helps prevent SQL injection?",
        "answer": "Use parameterized SQL queries",
        "wrong": [
          "Use hardcoded passwords",
          "Ignore updates",
          "Disable input validation"
        ],
        "explanation": "Parameterized queries help stop SQL injection."
      },
      {
        "id": "last-quiz-66",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Static testing analyzes code:",
        "answer": "Without execution",
        "wrong": [
          "Only while running",
          "Only after deployment",
          "Only by flooding servers"
        ],
        "explanation": "Static testing reviews source code without running it."
      },
      {
        "id": "last-quiz-67",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Dynamic testing tests applications:",
        "answer": "While running",
        "wrong": [
          "Without execution",
          "Only on paper",
          "Only in threat models"
        ],
        "explanation": "Dynamic testing tests running applications."
      },
      {
        "id": "last-quiz-68",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Penetration testing uses:",
        "answer": "Simulated attacks",
        "wrong": [
          "Only documentation review",
          "Only CMS reuse",
          "Only Docker packaging"
        ],
        "explanation": "Penetration testing simulates attacks."
      },
      {
        "id": "last-quiz-69",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "A firewall controls:",
        "answer": "Incoming and outgoing network traffic",
        "wrong": [
          "All agile sprints",
          "All reusable templates",
          "All AI recommendations"
        ],
        "explanation": "Firewalls filter traffic."
      },
      {
        "id": "last-quiz-70",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "An IDS monitors:",
        "answer": "Suspicious activities and attacks",
        "wrong": [
          "Only user interface colors",
          "Only code reuse",
          "Only cloud costs"
        ],
        "explanation": "IDS monitors suspicious activity."
      },
      {
        "id": "last-quiz-71",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which online banking security feature ends inactive sessions?",
        "answer": "Session timeout",
        "wrong": [
          "Product catalog",
          "Spark",
          "Low-code"
        ],
        "explanation": "Session timeout ends inactive sessions."
      },
      {
        "id": "last-quiz-72",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Why are humans often the weakest part of security systems?",
        "answer": "They may use weak passwords or click phishing links",
        "wrong": [
          "They always prevent every attack",
          "They remove all vulnerabilities",
          "They are Kubernetes clusters"
        ],
        "explanation": "Human errors include weak passwords and phishing clicks."
      },
      {
        "id": "last-quiz-73",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which is a security policy example?",
        "answer": "Access control policy",
        "wrong": [
          "Shopping cart",
          "Product service",
          "Object reuse"
        ],
        "explanation": "Access control policies guide access permissions."
      },
      {
        "id": "last-quiz-74",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Zero Trust Architecture means:",
        "answer": "No user or device is automatically trusted",
        "wrong": [
          "Every device is always trusted",
          "Passwords are never needed",
          "Cloud services are never secured"
        ],
        "explanation": "Zero Trust verifies access rather than trusting by default."
      },
      {
        "id": "last-quiz-75",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "DevSecOps means:",
        "answer": "Security integrated into DevOps workflows",
        "wrong": [
          "Security removed from deployment",
          "Only manual testing",
          "Only open-source reuse"
        ],
        "explanation": "DevSecOps integrates security into DevOps."
      },
      {
        "id": "last-quiz-76",
        "source": "Last Quiz Reviewer",
        "set": "last-quiz",
        "tag": "Security",
        "prompt": "Which is a challenge in security engineering?",
        "answer": "Balancing usability and security",
        "wrong": [
          "No human errors ever",
          "Stable unchanging cyber threats",
          "Zero implementation cost"
        ],
        "explanation": "Balancing usability and security is a listed challenge."
      },
      {
        "id": "final-topic-1",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Component-Based Software",
        "prompt": "What is the main idea of component-based software engineering?",
        "answer": "Building systems by assembling reusable components with defined interfaces",
        "wrong": [
          "Writing every feature from scratch",
          "Avoiding interfaces between modules",
          "Testing only the final executable"
        ],
        "explanation": "CBSE emphasizes reusable components and explicit interfaces."
      },
      {
        "id": "final-topic-2",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Component-Based Software",
        "prompt": "What does a component interface specify?",
        "answer": "The services provided or required by a component",
        "wrong": [
          "Only the color of the user interface",
          "The project budget",
          "A user's personal password"
        ],
        "explanation": "Interfaces describe how other parts of the system interact with a component."
      },
      {
        "id": "final-topic-3",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Component-Based Software",
        "prompt": "Which quality is important for reusable components?",
        "answer": "They should be modular, replaceable, and maintainable",
        "wrong": [
          "They should be tightly coupled to one project",
          "They should hide all documentation",
          "They should require manual copying only"
        ],
        "explanation": "Reusable components need clean boundaries and maintainability."
      },
      {
        "id": "final-topic-4",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Component-Based Software",
        "prompt": "What is COTS software?",
        "answer": "Commercial off-the-shelf software reused instead of custom-built code",
        "wrong": [
          "A defect classification method",
          "A password hashing format",
          "A UML relationship type"
        ],
        "explanation": "COTS products can reduce development effort when they fit requirements."
      },
      {
        "id": "final-topic-5",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Component-Based Software",
        "prompt": "Which is a common risk in component-based development?",
        "answer": "The selected component may not fully match system requirements",
        "wrong": [
          "Every component is automatically secure",
          "Interfaces are never needed",
          "Testing becomes illegal"
        ],
        "explanation": "Integration, mismatch, version, and vendor risks must be checked."
      },
      {
        "id": "final-topic-6",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Dependability",
        "prompt": "What is a socio-technical system?",
        "answer": "A system that includes software, hardware, people, procedures, and organizational rules",
        "wrong": [
          "Only source code and no users",
          "Only network cables",
          "A diagram with no process"
        ],
        "explanation": "Dependability often depends on both technical and human parts of the system."
      },
      {
        "id": "final-topic-7",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Dependability",
        "prompt": "What does software dependability mean?",
        "answer": "The ability of a system to deliver services that users can trust",
        "wrong": [
          "The ability to avoid all documentation",
          "The use of one programming language",
          "The number of developers on a team"
        ],
        "explanation": "A dependable system behaves reliably, safely, securely, and maintainably."
      },
      {
        "id": "final-topic-8",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Dependability",
        "prompt": "Which set lists major dependability attributes?",
        "answer": "Availability, reliability, safety, security, and maintainability",
        "wrong": [
          "Syntax, color, font, layout, and branding",
          "Planning, drawing, copying, deleting, and posting",
          "Storage, marketing, pricing, sales, and support"
        ],
        "explanation": "These attributes describe whether users can trust the service."
      },
      {
        "id": "final-topic-9",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Dependability",
        "prompt": "How is availability usually understood?",
        "answer": "The system is up and accessible when needed",
        "wrong": [
          "The system always has the newest UI",
          "The system contains no requirements",
          "The system uses only one server"
        ],
        "explanation": "Availability focuses on service uptime and access."
      },
      {
        "id": "final-topic-10",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Dependability",
        "prompt": "How is reliability usually understood?",
        "answer": "The system performs correctly over time without failure",
        "wrong": [
          "The system looks modern",
          "The team avoids version control",
          "All features are optional"
        ],
        "explanation": "Reliability focuses on correct service delivery across operation."
      },
      {
        "id": "final-topic-11",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Dependability",
        "prompt": "Which technique keeps a system operating even when faults occur?",
        "answer": "Fault tolerance",
        "wrong": [
          "Fault deletion from documentation",
          "Interface sketching",
          "Color refactoring"
        ],
        "explanation": "Fault tolerance lets a system continue service despite faults."
      },
      {
        "id": "final-topic-12",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Dependability",
        "prompt": "What is a safety-critical system?",
        "answer": "A system whose failure can cause injury, death, environmental damage, or major loss",
        "wrong": [
          "A system that stores only sample data",
          "A system used only for color selection",
          "A system with no users"
        ],
        "explanation": "Safety-critical systems require stronger analysis and controls."
      },
      {
        "id": "final-topic-13",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Service-Oriented Architecture",
        "prompt": "What is service-oriented architecture?",
        "answer": "An architecture where software functionality is provided as reusable services",
        "wrong": [
          "A method for drawing only class diagrams",
          "A rule that forbids network communication",
          "A testing phase after retirement"
        ],
        "explanation": "SOA organizes functionality around services with defined contracts."
      },
      {
        "id": "final-topic-14",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Service-Oriented Architecture",
        "prompt": "What does loose coupling mean in SOA?",
        "answer": "Services depend on each other as little as possible through stable contracts",
        "wrong": [
          "Every service shares the same database table directly",
          "Services cannot communicate",
          "All services must be in one file"
        ],
        "explanation": "Loose coupling improves flexibility and replacement."
      },
      {
        "id": "final-topic-15",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Service-Oriented Architecture",
        "prompt": "Which technology style is commonly used for service APIs?",
        "answer": "REST",
        "wrong": [
          "A spreadsheet chart",
          "A syntax error",
          "A project budget"
        ],
        "explanation": "REST is commonly used for web APIs and services."
      },
      {
        "id": "final-topic-16",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Service-Oriented Architecture",
        "prompt": "What is service composition?",
        "answer": "Combining multiple services to support a larger business process",
        "wrong": [
          "Deleting all services before release",
          "Changing fonts in a dashboard",
          "Removing requirements from a project"
        ],
        "explanation": "Complex workflows can be built by coordinating services."
      },
      {
        "id": "final-topic-17",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Service-Oriented Architecture",
        "prompt": "What is the role of a service contract?",
        "answer": "It describes how a service can be used, including operations and data expectations",
        "wrong": [
          "It lists only team attendance",
          "It hides every interface",
          "It replaces all testing"
        ],
        "explanation": "Contracts let service consumers use services predictably."
      },
      {
        "id": "final-topic-18",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Software Management",
        "prompt": "What is software project management concerned with?",
        "answer": "Planning, organizing, monitoring, and controlling software work",
        "wrong": [
          "Only writing source code",
          "Only choosing brand colors",
          "Only deleting old files"
        ],
        "explanation": "Management coordinates people, time, budget, scope, quality, and risk."
      },
      {
        "id": "final-topic-19",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Software Management",
        "prompt": "What is a software project plan used for?",
        "answer": "It defines scope, schedule, resources, risks, and deliverables",
        "wrong": [
          "It replaces user requirements",
          "It stores passwords",
          "It removes communication"
        ],
        "explanation": "A project plan gives the team a baseline for execution and tracking."
      },
      {
        "id": "final-topic-20",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Software Management",
        "prompt": "What does risk management do in software projects?",
        "answer": "Identifies, analyzes, and controls possible project problems",
        "wrong": [
          "Guarantees no change will happen",
          "Deletes all documentation",
          "Avoids testing until release"
        ],
        "explanation": "Risk management makes uncertainty visible before it becomes damage."
      },
      {
        "id": "final-topic-21",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Software Management",
        "prompt": "What is a project milestone?",
        "answer": "A significant checkpoint or event in the project schedule",
        "wrong": [
          "A random variable name",
          "A code indentation style",
          "A network password"
        ],
        "explanation": "Milestones help track progress against the plan."
      },
      {
        "id": "final-topic-22",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Software Management",
        "prompt": "Why is quality management important?",
        "answer": "It helps ensure the product meets requirements and standards",
        "wrong": [
          "It eliminates the need for reviews",
          "It makes cost tracking impossible",
          "It avoids user feedback"
        ],
        "explanation": "Quality management includes standards, reviews, testing, and process checks."
      },
      {
        "id": "final-topic-23",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Software Management",
        "prompt": "Which leadership action supports software teams?",
        "answer": "Resolving conflicts and supporting collaboration",
        "wrong": [
          "Hiding deadlines from the team",
          "Avoiding communication",
          "Ignoring risks"
        ],
        "explanation": "Good leadership keeps team work coordinated and realistic."
      },
      {
        "id": "final-topic-24",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Security Engineering",
        "prompt": "What is security engineering?",
        "answer": "Designing, developing, testing, and maintaining systems that resist attacks",
        "wrong": [
          "Only adding logos to a website",
          "Only writing user stories",
          "Only compiling a program"
        ],
        "explanation": "Security engineering applies protection throughout the lifecycle."
      },
      {
        "id": "final-topic-25",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Security Engineering",
        "prompt": "What does confidentiality protect?",
        "answer": "Data access so only authorized users can view information",
        "wrong": [
          "The speed of animations",
          "The number of branches in Git",
          "The color of a dashboard"
        ],
        "explanation": "Confidentiality is one pillar of the CIA triad."
      },
      {
        "id": "final-topic-26",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Security Engineering",
        "prompt": "What does integrity protect?",
        "answer": "Data accuracy and protection against unauthorized modification",
        "wrong": [
          "User interface spacing",
          "Server room temperature only",
          "The number of comments in code"
        ],
        "explanation": "Integrity keeps information correct and trustworthy."
      },
      {
        "id": "final-topic-27",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Security Engineering",
        "prompt": "What does availability protect?",
        "answer": "Access to systems and data when needed",
        "wrong": [
          "The application's font family",
          "Only the database schema name",
          "All unused features"
        ],
        "explanation": "Availability is both a security and dependability concern."
      },
      {
        "id": "final-topic-28",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Security Engineering",
        "prompt": "What is threat modeling used for?",
        "answer": "Identifying assets, attackers, vulnerabilities, and prevention strategies",
        "wrong": [
          "Choosing a color palette",
          "Counting only code lines",
          "Skipping security requirements"
        ],
        "explanation": "Threat modeling helps teams reason about attacks before implementation."
      },
      {
        "id": "final-topic-29",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Security Engineering",
        "prompt": "Which practice helps prevent SQL injection?",
        "answer": "Using parameterized SQL queries",
        "wrong": [
          "Concatenating raw user input into SQL",
          "Disabling all validation",
          "Storing passwords in comments"
        ],
        "explanation": "Parameterized queries separate code from user data."
      },
      {
        "id": "final-topic-30",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Security Engineering",
        "prompt": "What is penetration testing?",
        "answer": "A simulated attack used to find vulnerabilities",
        "wrong": [
          "A diagram of team roles",
          "A deployment schedule",
          "A UI prototype"
        ],
        "explanation": "Pen tests reveal practical weaknesses attackers might exploit."
      },
      {
        "id": "final-topic-31",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Security Engineering",
        "prompt": "What is vulnerability scanning?",
        "answer": "Automated detection of known security weaknesses",
        "wrong": [
          "A manual only for database design",
          "A way to avoid updates",
          "A refactoring pattern"
        ],
        "explanation": "Scanners help detect known issues, but they do not replace deeper review."
      },
      {
        "id": "final-topic-32",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Security Engineering",
        "prompt": "What is DevSecOps?",
        "answer": "Integrating security into DevOps and continuous delivery practices",
        "wrong": [
          "Removing security from deployment",
          "Replacing version control",
          "Making all users administrators"
        ],
        "explanation": "DevSecOps treats security as part of everyday delivery."
      },
      {
        "id": "final-topic-33",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Advanced Software Engineering",
        "prompt": "What does CI usually mean?",
        "answer": "Frequent integration of code changes into a shared repository with automated checks",
        "wrong": [
          "Manual deployment only once per year",
          "No testing until after retirement",
          "Only documenting passwords"
        ],
        "explanation": "Continuous integration helps expose problems early."
      },
      {
        "id": "final-topic-34",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Advanced Software Engineering",
        "prompt": "What does CD usually mean in a DevOps pipeline?",
        "answer": "Automated delivery or deployment after tests pass",
        "wrong": [
          "A class diagram",
          "A database-only activity",
          "A password reset policy"
        ],
        "explanation": "CD moves validated changes toward release faster and more reliably."
      },
      {
        "id": "final-topic-35",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Advanced Software Engineering",
        "prompt": "Why are containers useful?",
        "answer": "They package applications with dependencies for consistent deployment",
        "wrong": [
          "They remove all security needs",
          "They prevent teamwork",
          "They replace requirements analysis"
        ],
        "explanation": "Containers reduce environment mismatch between development and production."
      },
      {
        "id": "final-topic-36",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Advanced Software Engineering",
        "prompt": "What does Kubernetes primarily help manage?",
        "answer": "Deployment, scaling, load balancing, and recovery for containers",
        "wrong": [
          "Grammar checking",
          "Manual budget approvals",
          "Entity relationship drawing only"
        ],
        "explanation": "Kubernetes orchestrates containerized applications."
      },
      {
        "id": "final-topic-37",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Advanced Software Engineering",
        "prompt": "What is a microservices architecture?",
        "answer": "A system split into small independent services that communicate through APIs",
        "wrong": [
          "A single huge executable with no boundaries",
          "A database with no relationships",
          "A project with no deployment"
        ],
        "explanation": "Microservices improve independent deployment but add distributed complexity."
      },
      {
        "id": "final-topic-38",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Advanced Software Engineering",
        "prompt": "Which challenge is common in microservices?",
        "answer": "Distributed debugging and service coordination",
        "wrong": [
          "No communication between services ever",
          "Zero infrastructure cost",
          "No security concerns"
        ],
        "explanation": "Microservices need careful observability, coordination, and security."
      },
      {
        "id": "final-topic-39",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Advanced Software Engineering",
        "prompt": "How can AI support software engineering?",
        "answer": "Through recommendations, chatbots, predictive analytics, automated testing, and intelligent automation",
        "wrong": [
          "By removing all human decisions",
          "By replacing every requirement with code comments",
          "By preventing all project risks automatically"
        ],
        "explanation": "The notes connect AI to automation and smarter engineering workflows."
      },
      {
        "id": "final-topic-40",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Advanced Software Engineering",
        "prompt": "What is big data engineering concerned with?",
        "answer": "Processing massive volumes of data using tools such as Hadoop, Spark, and NoSQL databases",
        "wrong": [
          "Only formatting small documents",
          "Only drawing UML diagrams",
          "Only setting passwords"
        ],
        "explanation": "Big data engineering designs systems for volume, velocity, and variety."
      },
      {
        "id": "final-topic-41",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Advanced Software Engineering",
        "prompt": "What is blockchain in the software engineering notes?",
        "answer": "A decentralized digital ledger used for cryptocurrency, supply chains, and smart contracts",
        "wrong": [
          "A CSS layout method",
          "A UML-only diagram",
          "A testing delay"
        ],
        "explanation": "Blockchain provides distributed, tamper-resistant records."
      },
      {
        "id": "final-topic-42",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Advanced Software Engineering",
        "prompt": "What is IoT?",
        "answer": "Connecting physical devices such as smart homes, smart watches, and sensors to the internet",
        "wrong": [
          "Deleting all connected devices",
          "Only running code offline",
          "A code review checklist"
        ],
        "explanation": "IoT systems combine devices, connectivity, data, and software services."
      },
      {
        "id": "final-topic-43",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": "Advanced Software Engineering",
        "prompt": "What is green software engineering concerned with?",
        "answer": "Designing software that uses energy and computing resources efficiently",
        "wrong": [
          "Using only green colors in the UI",
          "Removing documentation",
          "Blocking all updates"
        ],
        "explanation": "Green software engineering is an emerging trend focused on sustainability."
      }
    ]
  },
  "quizModes": [
    {
      "id": "prelim-a",
      "title": "Prelim Exam Set A",
      "detail": "First half of the original prelim exam reviewer.",
      "bank": "prelimA"
    },
    {
      "id": "prelim-b",
      "title": "Prelim Exam Set B",
      "detail": "Second half of the original prelim exam reviewer.",
      "bank": "prelimB"
    },
    {
      "id": "prelim-combined",
      "title": "Combine Prelim Exam",
      "detail": "All process, design, and evolution prelim questions together.",
      "bank": "prelimCombined"
    },
    {
      "id": "last-a",
      "title": "Last Quiz Set A",
      "detail": "First half of the advanced software engineering, reuse, and security quiz.",
      "bank": "lastQuizA"
    },
    {
      "id": "last-b",
      "title": "Last Quiz Set B",
      "detail": "Second half of the advanced software engineering, reuse, and security quiz.",
      "bank": "lastQuizB"
    },
    {
      "id": "last-combined",
      "title": "Combine Last Quiz",
      "detail": "Full advanced quiz reviewer from the live page.",
      "bank": "lastQuizCombined"
    },
    {
      "id": "week34",
      "title": "Week 3-4 Quiz",
      "detail": "Software reuse, dependability, and security from the prelim reviewer.",
      "bank": "week34"
    },
    {
      "id": "final-topics",
      "title": "Final Topic Drill",
      "detail": "Extra questions generated from the uploaded final notes.",
      "bank": "finalTopics"
    },
    {
      "id": "everything",
      "title": "Combine Quiz of Everything",
      "detail": "Prelim, Week 3-4, last quiz, and uploaded final topics in one bank.",
      "bank": "everything"
    },
    {
      "id": "quick-mixed-50",
      "title": "Quick Mixed 50",
      "detail": "Random 50-question run from the combined everything bank.",
      "bank": "everything",
      "limit": 50
    }
  ]
};
