from __future__ import annotations

import json
import os
import re
from collections import OrderedDict
from datetime import date
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets"
DOWNLOADS = Path(r"C:\Users\jared\Downloads")
SOURCE_DATA = Path(os.environ.get("TEMP", r"C:\Users\jared\AppData\Local\Temp")) / "softeng-source-data.json"
COMBINED_NOTES = DOWNLOADS / "combinedSE2 (1).md"

PRELIM_URL = "https://jrd017.github.io/ccs308-software-engineering-reviewer/"
ADVANCED_URL = "https://jrd017.github.io/ccs308-software-engineering-reviewer/advanced-software-security-reviewer/"


def normalize_space(value: str | None) -> str:
    return re.sub(r"\s+", " ", (value or "").replace("\u00a0", " ")).strip()


def clean_text(text: str) -> str:
    replacements = {
        "\r\n": "\n",
        "\r": "\n",
        "\x0c": "\n",
        "\u00a0": " ",
        "\u00ef\u201a\u00b7": "-",
        "\uf0b7": "-",
        "\u2022": "-",
        "\u00e2\u20ac\u201c": "-",
        "\u00e2\u20ac\u201d": "-",
        "\u00e2\u20ac\u02dc": "'",
        "\u00e2\u20ac\u2122": "'",
        "\u00e2\u20ac\u0153": '"',
        "\u00e2\u20ac\u009d": '"',
    }
    for old, new in replacements.items():
        text = text.replace(old, new)
    text = re.sub(r"[ \t]+\n", "\n", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def reflow_markdown(text: str) -> str:
    blocks = re.split(r"\n\s*\n", clean_text(text))
    out: list[str] = []
    for block in blocks:
        lines = [line.strip() for line in block.splitlines() if line.strip()]
        if not lines:
            continue
        if any(line.startswith(("-", "*", "#")) for line in lines):
            out.append("\n".join(lines))
        elif any(re.match(r"^\d+[.)]\s+", line) for line in lines):
            out.append("\n".join(lines))
        else:
            out.append(" ".join(lines))
    return "\n\n".join(out)


def slugify(value: str) -> str:
    value = value.lower()
    value = re.sub(r"[^a-z0-9]+", "-", value).strip("-")
    return value or "section"


def load_source_data() -> dict:
    if not SOURCE_DATA.exists():
        raise FileNotFoundError(
            f"Missing {SOURCE_DATA}. Re-run the extractor against the source HTML before building data.js."
        )
    return json.loads(SOURCE_DATA.read_text(encoding="utf-8"))


def normalize_main_question(item: dict, prefix: str, index: int, source: str = "Prelim Exam") -> dict:
    choices = [normalize_space(choice) for choice in item["choices"]]
    answer = normalize_space(item["answer"])
    wrong = [choice for choice in choices if choice and choice != answer]
    return {
        "id": f"{prefix}-{index}",
        "source": source,
        "set": prefix,
        "tag": normalize_space(item.get("module", "Software Engineering")),
        "prompt": normalize_space(item["q"]),
        "answer": answer,
        "wrong": wrong[:3],
        "explanation": normalize_space(item.get("exp", "")),
    }


def normalize_advanced_question(item: dict, prefix: str, index: int) -> dict:
    choices = [normalize_space(choice) for choice in item["choices"]]
    answer_index = int(item["answerIndex"])
    answer = choices[answer_index]
    wrong = [choice for i, choice in enumerate(choices) if i != answer_index and choice]
    return {
        "id": f"{prefix}-{index}",
        "source": "Last Quiz Reviewer",
        "set": prefix,
        "tag": normalize_space(item.get("module", "Advanced SE")),
        "prompt": normalize_space(item["prompt"]),
        "answer": answer,
        "wrong": wrong[:3],
        "explanation": normalize_space(item.get("exp", "")),
    }


def make_question(index: int, prompt: str, answer: str, wrong: list[str], explanation: str, tag: str) -> dict:
    return {
        "id": f"final-topic-{index}",
        "source": "Uploaded Final Notes",
        "set": "Final Topic Drill",
        "tag": tag,
        "prompt": prompt,
        "answer": answer,
        "wrong": wrong,
        "explanation": explanation,
    }


def build_final_questions() -> list[dict]:
    raw = [
        (
            "What is the main idea of component-based software engineering?",
            "Building systems by assembling reusable components with defined interfaces",
            ["Writing every feature from scratch", "Avoiding interfaces between modules", "Testing only the final executable"],
            "CBSE emphasizes reusable components and explicit interfaces.",
            "Component-Based Software",
        ),
        (
            "What does a component interface specify?",
            "The services provided or required by a component",
            ["Only the color of the user interface", "The project budget", "A user's personal password"],
            "Interfaces describe how other parts of the system interact with a component.",
            "Component-Based Software",
        ),
        (
            "Which quality is important for reusable components?",
            "They should be modular, replaceable, and maintainable",
            ["They should be tightly coupled to one project", "They should hide all documentation", "They should require manual copying only"],
            "Reusable components need clean boundaries and maintainability.",
            "Component-Based Software",
        ),
        (
            "What is COTS software?",
            "Commercial off-the-shelf software reused instead of custom-built code",
            ["A defect classification method", "A password hashing format", "A UML relationship type"],
            "COTS products can reduce development effort when they fit requirements.",
            "Component-Based Software",
        ),
        (
            "Which is a common risk in component-based development?",
            "The selected component may not fully match system requirements",
            ["Every component is automatically secure", "Interfaces are never needed", "Testing becomes illegal"],
            "Integration, mismatch, version, and vendor risks must be checked.",
            "Component-Based Software",
        ),
        (
            "What is a socio-technical system?",
            "A system that includes software, hardware, people, procedures, and organizational rules",
            ["Only source code and no users", "Only network cables", "A diagram with no process"],
            "Dependability often depends on both technical and human parts of the system.",
            "Dependability",
        ),
        (
            "What does software dependability mean?",
            "The ability of a system to deliver services that users can trust",
            ["The ability to avoid all documentation", "The use of one programming language", "The number of developers on a team"],
            "A dependable system behaves reliably, safely, securely, and maintainably.",
            "Dependability",
        ),
        (
            "Which set lists major dependability attributes?",
            "Availability, reliability, safety, security, and maintainability",
            ["Syntax, color, font, layout, and branding", "Planning, drawing, copying, deleting, and posting", "Storage, marketing, pricing, sales, and support"],
            "These attributes describe whether users can trust the service.",
            "Dependability",
        ),
        (
            "How is availability usually understood?",
            "The system is up and accessible when needed",
            ["The system always has the newest UI", "The system contains no requirements", "The system uses only one server"],
            "Availability focuses on service uptime and access.",
            "Dependability",
        ),
        (
            "How is reliability usually understood?",
            "The system performs correctly over time without failure",
            ["The system looks modern", "The team avoids version control", "All features are optional"],
            "Reliability focuses on correct service delivery across operation.",
            "Dependability",
        ),
        (
            "Which technique keeps a system operating even when faults occur?",
            "Fault tolerance",
            ["Fault deletion from documentation", "Interface sketching", "Color refactoring"],
            "Fault tolerance lets a system continue service despite faults.",
            "Dependability",
        ),
        (
            "What is a safety-critical system?",
            "A system whose failure can cause injury, death, environmental damage, or major loss",
            ["A system that stores only sample data", "A system used only for color selection", "A system with no users"],
            "Safety-critical systems require stronger analysis and controls.",
            "Dependability",
        ),
        (
            "What is service-oriented architecture?",
            "An architecture where software functionality is provided as reusable services",
            ["A method for drawing only class diagrams", "A rule that forbids network communication", "A testing phase after retirement"],
            "SOA organizes functionality around services with defined contracts.",
            "Service-Oriented Architecture",
        ),
        (
            "What does loose coupling mean in SOA?",
            "Services depend on each other as little as possible through stable contracts",
            ["Every service shares the same database table directly", "Services cannot communicate", "All services must be in one file"],
            "Loose coupling improves flexibility and replacement.",
            "Service-Oriented Architecture",
        ),
        (
            "Which technology style is commonly used for service APIs?",
            "REST",
            ["A spreadsheet chart", "A syntax error", "A project budget"],
            "REST is commonly used for web APIs and services.",
            "Service-Oriented Architecture",
        ),
        (
            "What is service composition?",
            "Combining multiple services to support a larger business process",
            ["Deleting all services before release", "Changing fonts in a dashboard", "Removing requirements from a project"],
            "Complex workflows can be built by coordinating services.",
            "Service-Oriented Architecture",
        ),
        (
            "What is the role of a service contract?",
            "It describes how a service can be used, including operations and data expectations",
            ["It lists only team attendance", "It hides every interface", "It replaces all testing"],
            "Contracts let service consumers use services predictably.",
            "Service-Oriented Architecture",
        ),
        (
            "What is software project management concerned with?",
            "Planning, organizing, monitoring, and controlling software work",
            ["Only writing source code", "Only choosing brand colors", "Only deleting old files"],
            "Management coordinates people, time, budget, scope, quality, and risk.",
            "Software Management",
        ),
        (
            "What is a software project plan used for?",
            "It defines scope, schedule, resources, risks, and deliverables",
            ["It replaces user requirements", "It stores passwords", "It removes communication"],
            "A project plan gives the team a baseline for execution and tracking.",
            "Software Management",
        ),
        (
            "What does risk management do in software projects?",
            "Identifies, analyzes, and controls possible project problems",
            ["Guarantees no change will happen", "Deletes all documentation", "Avoids testing until release"],
            "Risk management makes uncertainty visible before it becomes damage.",
            "Software Management",
        ),
        (
            "What is a project milestone?",
            "A significant checkpoint or event in the project schedule",
            ["A random variable name", "A code indentation style", "A network password"],
            "Milestones help track progress against the plan.",
            "Software Management",
        ),
        (
            "Why is quality management important?",
            "It helps ensure the product meets requirements and standards",
            ["It eliminates the need for reviews", "It makes cost tracking impossible", "It avoids user feedback"],
            "Quality management includes standards, reviews, testing, and process checks.",
            "Software Management",
        ),
        (
            "Which leadership action supports software teams?",
            "Resolving conflicts and supporting collaboration",
            ["Hiding deadlines from the team", "Avoiding communication", "Ignoring risks"],
            "Good leadership keeps team work coordinated and realistic.",
            "Software Management",
        ),
        (
            "What is security engineering?",
            "Designing, developing, testing, and maintaining systems that resist attacks",
            ["Only adding logos to a website", "Only writing user stories", "Only compiling a program"],
            "Security engineering applies protection throughout the lifecycle.",
            "Security Engineering",
        ),
        (
            "What does confidentiality protect?",
            "Data access so only authorized users can view information",
            ["The speed of animations", "The number of branches in Git", "The color of a dashboard"],
            "Confidentiality is one pillar of the CIA triad.",
            "Security Engineering",
        ),
        (
            "What does integrity protect?",
            "Data accuracy and protection against unauthorized modification",
            ["User interface spacing", "Server room temperature only", "The number of comments in code"],
            "Integrity keeps information correct and trustworthy.",
            "Security Engineering",
        ),
        (
            "What does availability protect?",
            "Access to systems and data when needed",
            ["The application's font family", "Only the database schema name", "All unused features"],
            "Availability is both a security and dependability concern.",
            "Security Engineering",
        ),
        (
            "What is threat modeling used for?",
            "Identifying assets, attackers, vulnerabilities, and prevention strategies",
            ["Choosing a color palette", "Counting only code lines", "Skipping security requirements"],
            "Threat modeling helps teams reason about attacks before implementation.",
            "Security Engineering",
        ),
        (
            "Which practice helps prevent SQL injection?",
            "Using parameterized SQL queries",
            ["Concatenating raw user input into SQL", "Disabling all validation", "Storing passwords in comments"],
            "Parameterized queries separate code from user data.",
            "Security Engineering",
        ),
        (
            "What is penetration testing?",
            "A simulated attack used to find vulnerabilities",
            ["A diagram of team roles", "A deployment schedule", "A UI prototype"],
            "Pen tests reveal practical weaknesses attackers might exploit.",
            "Security Engineering",
        ),
        (
            "What is vulnerability scanning?",
            "Automated detection of known security weaknesses",
            ["A manual only for database design", "A way to avoid updates", "A refactoring pattern"],
            "Scanners help detect known issues, but they do not replace deeper review.",
            "Security Engineering",
        ),
        (
            "What is DevSecOps?",
            "Integrating security into DevOps and continuous delivery practices",
            ["Removing security from deployment", "Replacing version control", "Making all users administrators"],
            "DevSecOps treats security as part of everyday delivery.",
            "Security Engineering",
        ),
        (
            "What does CI usually mean?",
            "Frequent integration of code changes into a shared repository with automated checks",
            ["Manual deployment only once per year", "No testing until after retirement", "Only documenting passwords"],
            "Continuous integration helps expose problems early.",
            "Advanced Software Engineering",
        ),
        (
            "What does CD usually mean in a DevOps pipeline?",
            "Automated delivery or deployment after tests pass",
            ["A class diagram", "A database-only activity", "A password reset policy"],
            "CD moves validated changes toward release faster and more reliably.",
            "Advanced Software Engineering",
        ),
        (
            "Why are containers useful?",
            "They package applications with dependencies for consistent deployment",
            ["They remove all security needs", "They prevent teamwork", "They replace requirements analysis"],
            "Containers reduce environment mismatch between development and production.",
            "Advanced Software Engineering",
        ),
        (
            "What does Kubernetes primarily help manage?",
            "Deployment, scaling, load balancing, and recovery for containers",
            ["Grammar checking", "Manual budget approvals", "Entity relationship drawing only"],
            "Kubernetes orchestrates containerized applications.",
            "Advanced Software Engineering",
        ),
        (
            "What is a microservices architecture?",
            "A system split into small independent services that communicate through APIs",
            ["A single huge executable with no boundaries", "A database with no relationships", "A project with no deployment"],
            "Microservices improve independent deployment but add distributed complexity.",
            "Advanced Software Engineering",
        ),
        (
            "Which challenge is common in microservices?",
            "Distributed debugging and service coordination",
            ["No communication between services ever", "Zero infrastructure cost", "No security concerns"],
            "Microservices need careful observability, coordination, and security.",
            "Advanced Software Engineering",
        ),
        (
            "How can AI support software engineering?",
            "Through recommendations, chatbots, predictive analytics, automated testing, and intelligent automation",
            ["By removing all human decisions", "By replacing every requirement with code comments", "By preventing all project risks automatically"],
            "The notes connect AI to automation and smarter engineering workflows.",
            "Advanced Software Engineering",
        ),
        (
            "What is big data engineering concerned with?",
            "Processing massive volumes of data using tools such as Hadoop, Spark, and NoSQL databases",
            ["Only formatting small documents", "Only drawing UML diagrams", "Only setting passwords"],
            "Big data engineering designs systems for volume, velocity, and variety.",
            "Advanced Software Engineering",
        ),
        (
            "What is blockchain in the software engineering notes?",
            "A decentralized digital ledger used for cryptocurrency, supply chains, and smart contracts",
            ["A CSS layout method", "A UML-only diagram", "A testing delay"],
            "Blockchain provides distributed, tamper-resistant records.",
            "Advanced Software Engineering",
        ),
        (
            "What is IoT?",
            "Connecting physical devices such as smart homes, smart watches, and sensors to the internet",
            ["Deleting all connected devices", "Only running code offline", "A code review checklist"],
            "IoT systems combine devices, connectivity, data, and software services.",
            "Advanced Software Engineering",
        ),
        (
            "What is green software engineering concerned with?",
            "Designing software that uses energy and computing resources efficiently",
            ["Using only green colors in the UI", "Removing documentation", "Blocking all updates"],
            "Green software engineering is an emerging trend focused on sustainability.",
            "Advanced Software Engineering",
        ),
    ]
    return [make_question(index + 1, *item) for index, item in enumerate(raw)]


def split_uploaded_notes() -> list[dict]:
    if not COMBINED_NOTES.exists():
        return []
    text = clean_text(COMBINED_NOTES.read_text(encoding="utf-8", errors="replace"))
    matches = list(re.finditer(r"^#\s+(.+)$", text, flags=re.M))
    notes: list[dict] = []
    for index, match in enumerate(matches):
        start = match.end()
        end = matches[index + 1].start() if index + 1 < len(matches) else len(text)
        raw_title = normalize_space(match.group(1))
        title = raw_title.replace(".pdf", "").replace(".pptx", "").replace(".docx", "")
        body = reflow_markdown(text[start:end])
        notes.append(
            {
                "id": f"upload-{index + 1}-{slugify(title)}",
                "source": "combinedSE2 (1).md",
                "title": title,
                "body": body,
            }
        )
    return notes


def module_note(source: str, key: str, module: dict) -> dict:
    lines = [module["summary"], "", f"Objective: {module['objective']}"]
    for section in module.get("sections", []):
        lines.append("")
        lines.append(f"## {section['title']}")
        for title, body in section.get("cards", []):
            lines.append(f"- {title}: {body}")
    return {
        "id": f"{slugify(source)}-{slugify(key)}",
        "source": source,
        "title": module["label"],
        "body": "\n".join(lines),
    }


def build_notes(source: dict) -> list[dict]:
    notes = []
    for key, module in source["main"]["moduleDetails"].items():
        notes.append(module_note("Prelim exam live page", key, module))
    for key, module in source["adv"]["modules"].items():
        notes.append(module_note("Last quiz reviewer live page", key, module))
    diagrams = source["adv"].get("diagrams", [])
    if diagrams:
        lines = ["Advanced reviewer diagram prompts and expected labels.", ""]
        for diagram in diagrams:
            title, prompt, _tag, answers = diagram
            lines.append(f"- {title}: {prompt} Expected: {', '.join(answers)}.")
        notes.append(
            {
                "id": "advanced-diagram-prompts",
                "source": "Last quiz reviewer live page",
                "title": "Diagram Recall Prompts",
                "body": "\n".join(lines),
            }
        )
    notes.extend(split_uploaded_notes())
    return notes


def card_to_point(card: list[str]) -> str:
    title, body = card
    return f"{title}: {body}"


def build_study_sections(source: dict) -> list[dict]:
    sections: list[dict] = []
    for module in source["main"]["moduleDetails"].values():
        for section in module.get("sections", []):
            sections.append(
                {
                    "group": module["label"],
                    "title": section["title"],
                    "summary": module["summary"],
                    "points": [card_to_point(card) for card in section.get("cards", [])[:6]],
                }
            )
    for module in source["adv"]["modules"].values():
        for section in module.get("sections", []):
            sections.append(
                {
                    "group": module["label"],
                    "title": section["title"],
                    "summary": module["summary"],
                    "points": [card_to_point(card) for card in section.get("cards", [])[:6]],
                }
            )
    sections.extend(
        [
            {
                "group": "Component-Based Software",
                "title": "Component-Based Engineering",
                "summary": "Build systems by selecting, adapting, integrating, and testing reusable components with clear interfaces.",
                "points": [
                    "Component: a reusable, self-contained software unit that provides services through an interface.",
                    "Interface: a contract describing provided and required operations.",
                    "COTS: commercial off-the-shelf software reused when it fits requirements.",
                    "Benefits: faster delivery, lower cost, proven functionality, and reuse of tested assets.",
                    "Risks: requirements mismatch, version conflicts, integration issues, and vendor dependence.",
                ],
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
                    "Risk assessment weighs threats, vulnerabilities, likelihood, and impact.",
                ],
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
                    "SOA supports reuse, interoperability, and distributed business processes.",
                ],
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
                    "Leadership: motivate teams, resolve conflicts, manage deadlines, and support collaboration.",
                ],
            },
        ]
    )
    return sections


def tag_label(source: dict, tag: str) -> str:
    return (
        source["main"].get("tagLabels", {}).get(tag)
        or source["adv"].get("tagLabels", {}).get(tag)
        or tag.replace("-", " ").title()
    )


def build_glossary(source: dict) -> list[dict]:
    by_term: OrderedDict[str, dict] = OrderedDict()

    def add(term: str, definition: str, tag: str) -> None:
        term = normalize_space(term)
        definition = normalize_space(definition)
        label = tag_label(source, tag)
        key = term.lower()
        if key not in by_term:
            by_term[key] = {"term": term, "definition": definition, "tags": []}
        if definition and definition not in by_term[key]["definition"]:
            by_term[key]["definition"] = by_term[key]["definition"] or definition
        if label not in by_term[key]["tags"]:
            by_term[key]["tags"].append(label)

    for item in source["main"]["glossary"]:
        add(item["term"], item["def"], item["tag"])
    for item in source["adv"]["glossary"]:
        add(item["term"], item["def"], item["tag"])

    extra_terms = [
        ("Component-Based Software Engineering", "Building systems from reusable components with explicit interfaces.", "Component-Based Software"),
        ("Component Interface", "A contract describing services a component provides or requires.", "Component-Based Software"),
        ("COTS", "Commercial off-the-shelf software reused instead of custom development.", "Component-Based Software"),
        ("Service-Oriented Architecture", "Architecture that exposes functionality as reusable services.", "Service-Oriented Architecture"),
        ("Service Contract", "Description of service operations, inputs, outputs, and behavior.", "Service-Oriented Architecture"),
        ("Loose Coupling", "A design goal where services or modules depend on each other as little as possible.", "Service-Oriented Architecture"),
        ("Service Composition", "Combining multiple services to perform a larger business process.", "Service-Oriented Architecture"),
        ("Software Project Management", "Planning, organizing, monitoring, and controlling software work.", "Software Management"),
        ("Project Plan", "Document or baseline describing scope, schedule, resources, risks, and deliverables.", "Software Management"),
        ("Milestone", "A significant checkpoint in a project schedule.", "Software Management"),
        ("Risk Management", "Identifying, analyzing, controlling, and monitoring project risks.", "Software Management"),
        ("Quality Management", "Activities that ensure products and processes meet required standards.", "Software Management"),
        ("Green Software Engineering", "Designing software to use energy and computing resources efficiently.", "Advanced SE"),
    ]
    for term, definition, tag in extra_terms:
        add(term, definition, tag)

    return list(by_term.values())


def dedupe_questions(questions: list[dict]) -> list[dict]:
    seen = set()
    out = []
    for question in questions:
        key = (question["prompt"].lower(), question["answer"].lower())
        if key in seen:
            continue
        seen.add(key)
        out.append(question)
    return out


def split_half(items: list[dict]) -> tuple[list[dict], list[dict]]:
    midpoint = (len(items) + 1) // 2
    return items[:midpoint], items[midpoint:]


def build_quiz_banks(source: dict) -> tuple[dict, list[dict]]:
    process = [normalize_main_question(q, "prelim-process", i + 1) for i, q in enumerate(source["main"]["processQuestions"])]
    design = [normalize_main_question(q, "prelim-design", i + 1) for i, q in enumerate(source["main"]["designQuestions"])]
    evolution = [normalize_main_question(q, "prelim-evolution", i + 1) for i, q in enumerate(source["main"]["evolutionQuestions"])]
    prelim = dedupe_questions(process + design + evolution)
    prelim_a, prelim_b = split_half(prelim)

    week34 = [
        normalize_main_question(q, "week34", i + 1, source="Week 3-4 Reviewer")
        for i, q in enumerate(source["main"]["week34Questions"])
    ]

    advanced = [normalize_advanced_question(q, "last-quiz", i + 1) for i, q in enumerate(source["adv"]["choiceQuestions"])]
    advanced_a, advanced_b = split_half(advanced)

    final_topics = build_final_questions()
    everything = dedupe_questions(prelim + week34 + advanced + final_topics)

    banks = {
        "prelimA": prelim_a,
        "prelimB": prelim_b,
        "prelimCombined": prelim,
        "week34": week34,
        "lastQuizA": advanced_a,
        "lastQuizB": advanced_b,
        "lastQuizCombined": advanced,
        "finalTopics": final_topics,
        "everything": everything,
    }
    modes = [
        {
            "id": "prelim-a",
            "title": "Prelim Exam Set A",
            "detail": "First half of the original prelim exam reviewer.",
            "bank": "prelimA",
        },
        {
            "id": "prelim-b",
            "title": "Prelim Exam Set B",
            "detail": "Second half of the original prelim exam reviewer.",
            "bank": "prelimB",
        },
        {
            "id": "prelim-combined",
            "title": "Combine Prelim Exam",
            "detail": "All process, design, and evolution prelim questions together.",
            "bank": "prelimCombined",
        },
        {
            "id": "last-a",
            "title": "Last Quiz Set A",
            "detail": "First half of the advanced software engineering, reuse, and security quiz.",
            "bank": "lastQuizA",
        },
        {
            "id": "last-b",
            "title": "Last Quiz Set B",
            "detail": "Second half of the advanced software engineering, reuse, and security quiz.",
            "bank": "lastQuizB",
        },
        {
            "id": "last-combined",
            "title": "Combine Last Quiz",
            "detail": "Full advanced quiz reviewer from the live page.",
            "bank": "lastQuizCombined",
        },
        {
            "id": "week34",
            "title": "Week 3-4 Quiz",
            "detail": "Software reuse, dependability, and security from the prelim reviewer.",
            "bank": "week34",
        },
        {
            "id": "final-topics",
            "title": "Final Topic Drill",
            "detail": "Extra questions generated from the uploaded final notes.",
            "bank": "finalTopics",
        },
        {
            "id": "everything",
            "title": "Combine Quiz of Everything",
            "detail": "Prelim, Week 3-4, last quiz, and uploaded final topics in one bank.",
            "bank": "everything",
        },
        {
            "id": "quick-mixed-50",
            "title": "Quick Mixed 50",
            "detail": "Random 50-question run from the combined everything bank.",
            "bank": "everything",
            "limit": 50,
        },
    ]
    return banks, modes


def build_comparison_tables() -> list[dict]:
    return [
        {
            "title": "Software Engineering Decision Grid",
            "columns": ["Topic", "Best Use", "Exam Cue"],
            "rows": [
                ["Waterfall", "Stable, well-defined requirements", "Sequential phases; hard to change late"],
                ["Agile", "Changing requirements and frequent feedback", "Sprints, iteration, collaboration"],
                ["Spiral", "Large, high-risk systems", "Risk analysis in each loop"],
                ["CBSE", "Systems where suitable reusable components exist", "Interfaces, integration, component selection"],
                ["SOA", "Distributed business services", "Loose coupling, service contracts, composition"],
                ["DevOps", "Faster and safer release flow", "CI/CD, automation, operations collaboration"],
                ["DevSecOps", "Continuous delivery with security built in", "Security checks inside the pipeline"],
            ],
        },
        {
            "title": "Dependability and Security Contrast",
            "columns": ["Concept", "Meaning", "Watch For"],
            "rows": [
                ["Availability", "Service is accessible when needed", "Downtime, redundancy, recovery"],
                ["Reliability", "Service performs correctly over time", "Failures and failure rate"],
                ["Safety", "System avoids harm", "Safety-critical hazards"],
                ["Security", "System resists attacks and misuse", "CIA triad, threats, vulnerabilities"],
                ["Maintainability", "System can be repaired and evolved", "Technical debt, documentation, modularity"],
            ],
        },
    ]


def build_techniques() -> list[dict]:
    return [
        {
            "name": "Waterfall vs Agile",
            "rule": "Stable requirements favor Waterfall; changing requirements favor Agile.",
            "clue": "Look for sequence and complete phases versus sprints and feedback.",
        },
        {
            "name": "Reuse vs CBSE",
            "rule": "Reuse is the broad idea; CBSE is building systems from components.",
            "clue": "If the question mentions explicit component interfaces, think CBSE.",
        },
        {
            "name": "Reliability vs Availability",
            "rule": "Reliability is correct operation over time; availability is being accessible when needed.",
            "clue": "Failure frequency points to reliability; uptime points to availability.",
        },
        {
            "name": "Security Triad",
            "rule": "Confidentiality protects access, integrity protects correctness, availability protects access to service.",
            "clue": "CIA questions usually ask which protection goal is affected.",
        },
        {
            "name": "SOA",
            "rule": "Services expose reusable business functions through contracts.",
            "clue": "Loose coupling, contracts, registry, and composition point to SOA.",
        },
        {
            "name": "DevOps vs DevSecOps",
            "rule": "DevOps automates delivery; DevSecOps adds continuous security responsibility.",
            "clue": "Security in every pipeline stage means DevSecOps.",
        },
        {
            "name": "Microservices",
            "rule": "Small independent services improve deployment flexibility but add distributed complexity.",
            "clue": "Independent services and API communication point to microservices.",
        },
        {
            "name": "Software Management",
            "rule": "Management questions focus on people, scope, time, cost, quality, and risk.",
            "clue": "Milestones, project plans, risk logs, and resource allocation are management cues.",
        },
    ]


def build_data() -> dict:
    source = load_source_data()
    quiz_banks, quiz_modes = build_quiz_banks(source)
    notes = build_notes(source)
    glossary = build_glossary(source)

    data = {
        "generatedAt": date.today().isoformat(),
        "title": "Software Engineering Final Reviewer",
        "techniqueTitle": "Software Engineering Decision Clues",
        "sources": [
            {"label": "Software Engineering prelim exam live page", "url": PRELIM_URL},
            {"label": "Advanced Software Engineering last quiz live page", "url": ADVANCED_URL},
            {"label": "combinedSE2 (1).md", "url": "local upload"},
        ],
        "overview": {
            "stats": [
                ["Prelim exam", len(quiz_banks["prelimCombined"])],
                ["Week 3-4", len(quiz_banks["week34"])],
                ["Last quiz", len(quiz_banks["lastQuizCombined"])],
                ["Everything bank", len(quiz_banks["everything"])],
            ],
            "coverage": [
                [
                    "Prelim reviewer",
                    "Software process, requirements, design and implementation, UML, testing, evolution, maintenance, and version control.",
                ],
                [
                    "Last quiz reviewer",
                    "Software reuse, advanced software engineering, cloud-native systems, microservices, AI, big data, blockchain, IoT, and security engineering.",
                ],
                [
                    "Uploaded final notes",
                    "Component-based software, dependability and security, service-oriented architecture, security engineering, software evolution, and software management.",
                ],
                [
                    "Quiz split",
                    "Prelim and last quiz banks are separated into Set A and Set B, with combined modes kept available.",
                ],
            ],
        },
        "comparisonTables": build_comparison_tables(),
        "studySections": build_study_sections(source),
        "algorithmTechniques": build_techniques(),
        "sourceNotes": notes,
        "glossary": glossary,
        "quizBanks": quiz_banks,
        "quizModes": quiz_modes,
    }
    return data


def main() -> None:
    ASSETS.mkdir(exist_ok=True)
    data = build_data()
    output = "window.REVIEWER_DATA = " + json.dumps(data, indent=2, ensure_ascii=False) + ";\n"
    (ASSETS / "data.js").write_text(output, encoding="utf-8")
    print(
        f"Wrote assets/data.js with {len(data['sourceNotes'])} note sections, "
        f"{len(data['glossary'])} glossary terms, and "
        f"{len(data['quizBanks']['everything'])} combined questions."
    )


if __name__ == "__main__":
    main()
