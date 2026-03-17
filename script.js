// Course data structure
const courseData = {
    sem1: {
        title: "Level 1 - Semester I",
        totalCredits: "19.00",
        courses: [
            { code: "CSE 101", title: "Fundamentals of Computer and Computing", credits: "2.00", hours: "2.00", description: "Introduction to computer systems, programming concepts, and basic software applications." },
            { code: "CSE 102", title: "Fundamentals of Computer and Computing Sessional", credits: "0.75", hours: "1.50", description: "Practical laboratory work based on CSE 101." },
            { code: "CSE 103", title: "Discrete Mathematics", credits: "3.00", hours: "3.00", description: "Logic, set theory, combinatorics, graph theory, and mathematical reasoning." },
            { code: "MAT 101", title: "Mathematics I (Calculus and Co-ordinate Geometry)", credits: "3.00", hours: "3.00", description: "Differential and integral calculus, coordinate geometry, and analytical methods." },
            { code: "PHY 103", title: "Physics (Electricity, Magnetism, Optics, Waves and Oscillations)", credits: "3.00", hours: "3.00", description: "Fundamental principles of physics with focus on electricity, magnetism, and wave phenomena." },
            { code: "PHY 104", title: "Physics (Electricity, Magnetism, Optics, Waves, and Oscillations) Sessional", credits: "1.50", hours: "3.00", description: "Laboratory experiments and practical work in physics." },
            { code: "AIE 105", title: "Basic Mechanical Engineering", credits: "3.00", hours: "3.00", description: "Introduction to mechanical engineering principles and applications." },
            { code: "ENG 101", title: "Communicative English", credits: "2.00", hours: "2.00", description: "English language skills for effective communication in academic and professional settings." },
            { code: "ENG 102", title: "Communicative English Sessional", credits: "0.75", hours: "1.50", description: "Practical language exercises and communication skills development." }
        ]
    },
    sem2: {
        title: "Level 1 - Semester II",
        totalCredits: "19.25",
        courses: [
            { code: "CSE 151", title: "Structured Programming Language", credits: "3.00", hours: "3.00", description: "Introduction to programming using C language, covering basic programming concepts and techniques." },
            { code: "CSE 152", title: "Structured Programming Language Sessional", credits: "1.50", hours: "3.00", description: "Practical programming exercises and projects in C language." },
            { code: "CSE 153", title: "Digital Logic Design", credits: "3.00", hours: "3.00", description: "Fundamental concepts of digital systems, logic gates, and digital circuit design." },
            { code: "CSE 154", title: "Digital Logic Design Sessional", credits: "1.50", hours: "3.00", description: "Laboratory work on digital logic circuits and design." },
            { code: "EEE 155", title: "Introduction to Electrical Engineering", credits: "3.00", hours: "3.00", description: "Basic electrical engineering concepts, circuit analysis, and electrical systems." },
            { code: "EEE 156", title: "Introduction to Electrical Engineering Sessional", credits: "0.75", hours: "1.50", description: "Practical electrical engineering experiments and measurements." },
            { code: "AIE 106", title: "Engineering Drawing and Auto CAD Sessional", credits: "1.50", hours: "3.00", description: "Technical drawing principles and AutoCAD software applications." },
            { code: "MAT 105", title: "Mathematics II (Matrix, Ordinary and Partial Differential Equations, and Series Solutions)", credits: "3.00", hours: "3.00", description: "Advanced mathematical concepts including matrices, differential equations, and series." },
            { code: "SOC 103", title: "Society and Technology", credits: "2.00", hours: "2.00", description: "Relationship between society and technological development, social impacts of technology." }
        ]
    },
    sem3: {
        title: "Level 2 - Semester I",
        totalCredits: "21.50",
        courses: [
            { code: "CSE 201", title: "Object Oriented Programming", credits: "3.00", hours: "3.00", description: "Object-oriented programming concepts using C++, including classes, inheritance, and polymorphism." },
            { code: "CSE 202", title: "Object Oriented Programming (C++) Sessional", credits: "1.50", hours: "3.00", description: "Practical programming exercises in C++ focusing on object-oriented concepts." },
            { code: "CSE 203", title: "Data Structures", credits: "3.00", hours: "3.00", description: "Study of data organization methods including arrays, linked lists, trees, and graphs." },
            { code: "CSE 204", title: "Data Structures Sessional", credits: "1.50", hours: "3.00", description: "Implementation and manipulation of various data structures through programming exercises." },
            { code: "CSE 205", title: "Numerical Methods", credits: "2.00", hours: "2.00", description: "Numerical techniques for solving mathematical problems using computers." },
            { code: "CSE 206", title: "Numerical Methods Sessional", credits: "0.75", hours: "1.50", description: "Practical implementation of numerical methods and algorithms." },
            { code: "EEE 209", title: "Electronic Devices and Circuits", credits: "3.00", hours: "3.00", description: "Study of electronic components, circuits, and their applications in computing systems." },
            { code: "EEE 210", title: "Electronic Devices and Circuits Sessional", credits: "0.75", hours: "1.50", description: "Laboratory work on electronic circuits and device characteristics." },
            { code: "MAT 201", title: "Mathematics III (Vector, Complex Variable, Fourier Analysis and Laplace Transformation)", credits: "3.00", hours: "3.00", description: "Advanced mathematical topics including vector analysis, complex variables, and transforms." },
            { code: "STT 227", title: "Statistics (Introduction to Statistics and Probability)", credits: "3.00", hours: "3.00", description: "Fundamental concepts of statistics and probability theory with applications." }
        ]
    },
    sem4: {
        title: "Level 2 - Semester II",
        totalCredits: "20.00",
        courses: [
            { code: "CSE 254", title: "Object Oriented Programming (Java) Sessional", credits: "1.50", hours: "3.00", description: "Practical programming in Java with focus on object-oriented principles." },
            { code: "CSE 255", title: "Algorithms Analysis and Design", credits: "3.00", hours: "3.00", description: "Study of algorithm design techniques, complexity analysis, and optimization strategies." },
            { code: "CSE 256", title: "Algorithms Analysis and Design Sessional", credits: "1.50", hours: "3.00", description: "Implementation and analysis of various algorithms through programming exercises." },
            { code: "CSE 257", title: "Theory of Computation and Concrete Mathematics", credits: "3.00", hours: "3.00", description: "Formal languages, automata theory, computability, and mathematical foundations." },
            { code: "CSE 258", title: "Theory of Computation and Concrete Mathematics Sessional", credits: "0.75", hours: "1.50", description: "Practical exercises in formal language theory and computational mathematics." },
            { code: "CSE 259", title: "Computer Architecture and Organization", credits: "3.00", hours: "3.00", description: "Computer system architecture, processor design, memory systems, and I/O organization." },
            { code: "ECE 259", title: "Digital Electronics and Pulse Techniques", credits: "3.00", hours: "3.00", description: "Advanced digital electronics, logic design, and pulse circuit techniques." },
            { code: "ECE 260", title: "Digital Electronics and Pulse Techniques Sessional", credits: "0.75", hours: "1.50", description: "Laboratory work on digital circuits and pulse techniques." },
            { code: "ACT 205", title: "Financial and Managerial Accounting", credits: "2.00", hours: "2.00", description: "Fundamental accounting principles, financial reporting, and managerial decision-making." },
            { code: "CSE 252", title: "Application Development Sessional", credits: "1.50", hours: "3.00", description: "Development of software applications using various programming languages and frameworks." }
        ]
    },
    sem5: {
        title: "Level 3 - Semester I",
        totalCredits: "18.50",
        courses: [
            { code: "CSE 303", title: "Database", credits: "3.00", hours: "3.00", description: "Database management systems, SQL, database design, and data modeling." },
            { code: "CSE 304", title: "Database Sessional", credits: "1.50", hours: "3.00", description: "Practical database design and implementation using SQL and database management systems." },
            { code: "CSE 305", title: "Software Engineering", credits: "3.00", hours: "3.00", description: "Software development lifecycle, project management, and software quality assurance." },
            { code: "CSE 307", title: "Microprocessor and Interfacing", credits: "3.00", hours: "3.00", description: "Microprocessor architecture, assembly language programming, and interfacing techniques." },
            { code: "CSE 308", title: "Microprocessor and Interfacing Sessional", credits: "1.50", hours: "3.00", description: "Practical work with microprocessors, assembly programming, and hardware interfacing." },
            { code: "ECE 311", title: "Data Communication", credits: "3.00", hours: "3.00", description: "Data transmission principles, communication protocols, and network architectures." },
            { code: "ECN 305", title: "Economics", credits: "2.00", hours: "2.00", description: "Microeconomic and macroeconomic principles, market analysis, and economic policy." },
            { code: "CSE 302", title: "Software Development Sessional", credits: "1.50", hours: "3.00", description: "Team-based software development project applying software engineering principles." }
        ]
    },
    sem6: {
        title: "Level 3 - Semester II",
        totalCredits: "18.50",
        courses: [
            { code: "CSE 353", title: "Operating System", credits: "3.00", hours: "3.00", description: "Operating system concepts, process management, memory management, and file systems." },
            { code: "CSE 354", title: "Operating System Sessional", credits: "0.75", hours: "1.50", description: "Practical exercises in operating system concepts and system programming." },
            { code: "CSE 355", title: "Web Engineering", credits: "2.00", hours: "2.00", description: "Web application development, client-server architecture, and web technologies." },
            { code: "CSE 356", title: "Web Engineering Sessional", credits: "0.75", hours: "1.50", description: "Hands-on web development projects using modern web technologies." },
            { code: "CSE 357", title: "Computer Networks", credits: "3.00", hours: "3.00", description: "Network protocols, internet architecture, network security, and distributed systems." },
            { code: "CSE 358", title: "Computer Networks Sessional", credits: "0.75", hours: "1.50", description: "Network configuration, protocol analysis, and network programming exercises." },
            { code: "CSE 359", title: "Compiler Design", credits: "3.00", hours: "3.00", description: "Compiler construction, lexical analysis, parsing, code generation, and optimization." },
            { code: "CSE 360", title: "Compiler Design Sessional", credits: "0.75", hours: "1.50", description: "Implementation of compiler components and language processing tools." },
            { code: "CSE 361", title: "Mathematical Analysis for Computer Science", credits: "3.00", hours: "3.00", description: "Advanced mathematical techniques for computer science applications." },
            { code: "CSE 352", title: "Web and Mobile Application Development Sessional", credits: "1.50", hours: "3.00", description: "Development of web and mobile applications with database integration." }
        ]
    },
    sem7: {
        title: "Level 4 - Semester I",
        totalCredits: "18.75",
        courses: [
            { code: "CSE 403", title: "Artificial Intelligence", credits: "3.00", hours: "3.00", description: "AI concepts, search algorithms, knowledge representation, and machine learning basics." },
            { code: "CSE 404", title: "Artificial Intelligence Sessional", credits: "0.75", hours: "1.50", description: "Implementation of AI algorithms and problem-solving techniques." },
            { code: "CSE 405", title: "Computer Graphics and Image Processing", credits: "3.00", hours: "3.00", description: "Graphics programming, image processing techniques, and visualization methods." },
            { code: "CSE 406", title: "Computer Graphics and Image Processing Sessional", credits: "1.50", hours: "3.00", description: "Practical graphics programming and image processing projects." },
            { code: "CSE 408", title: "Technical Writing and Presentation Skill Development Sessional", credits: "1.50", hours: "3.00", description: "Technical communication skills, report writing, and presentation techniques." },
            { code: "CSE 402", title: "Project and Thesis Sessional", credits: "1.50", hours: "3.00", description: "Research project or thesis work under faculty supervision." }
        ]
    },
    sem8: {
        title: "Level 4 - Semester II",
        totalCredits: "19.25",
        courses: [
            { code: "CSE 453", title: "Multimedia System and Animation Techniques", credits: "3.00", hours: "3.00", description: "Multimedia systems, animation principles, and digital content creation." },
            { code: "CSE 454", title: "Multimedia System and Animation Techniques Sessional", credits: "0.75", hours: "1.50", description: "Practical work in multimedia development and animation techniques." },
            { code: "CSE 455", title: "Computer Ethics and Cyber Law", credits: "2.00", hours: "2.00", description: "Ethical issues in computing, cyber law, intellectual property, and privacy concerns." },
            { code: "MGT 405", title: "Industrial Management", credits: "3.00", hours: "3.00", description: "Management principles, organizational behavior, and industrial engineering concepts." },
            { code: "CSE 452", title: "Project and Thesis Sessional", credits: "3.00", hours: "6.00", description: "Advanced research project or thesis work with comprehensive documentation." }
        ]
    }
};

// Option data structure
const optionData = {
    option1: {
        title: "Option I - Advanced Systems",
        description: "Focus on advanced database systems, algorithm design, and communication technologies.",
        courses: [
            { code: "CSE 409", title: "Advanced Database Management System", credits: "3.00", description: "Advanced database concepts, distributed databases, and database performance optimization." },
            { code: "CSE 410", title: "Advanced Database Management System Sessional", credits: "0.75", description: "Practical implementation of advanced database management techniques." },
            { code: "CSE 411", title: "Advanced Algorithm Design", credits: "3.00", description: "Advanced algorithmic techniques, complexity analysis, and optimization strategies." },
            { code: "CSE 412", title: "Advanced Algorithm Design Sessional", credits: "0.75", description: "Implementation and analysis of advanced algorithms." },
            { code: "CSE 413", title: "Management Information System", credits: "3.00", description: "Information systems for business management, decision support systems, and enterprise applications." },
            { code: "CSE 414", title: "Management Information System Sessional", credits: "0.75", description: "Practical work with management information systems and business intelligence tools." },
            { code: "CSE 415", title: "Mobile and Wireless Communication", credits: "3.00", description: "Wireless communication technologies, mobile networks, and wireless protocols." },
            { code: "CSE 416", title: "Mobile and Wireless Communication Sessional", credits: "0.75", description: "Practical work with wireless communication systems and mobile technologies." },
            { code: "CSE 417", title: "Communication Engineering", credits: "3.00", description: "Communication systems engineering, signal processing, and transmission technologies." },
            { code: "CSE 418", title: "Communication Engineering Sessional", credits: "0.75", description: "Laboratory work on communication engineering principles and applications." }
        ]
    },
    option2: {
        title: "Option II - Software Engineering",
        description: "Specialization in software engineering practices, testing, and system analysis.",
        courses: [
            { code: "CSE 419", title: "System Analysis and Design", credits: "3.00", description: "System analysis methodologies, requirements engineering, and system design principles." },
            { code: "CSE 420", title: "System Analysis and Design Sessional", credits: "0.75", description: "Practical system analysis and design projects." },
            { code: "CSE 421", title: "Software Testing and Quality Assurance", credits: "3.00", description: "Software testing methodologies, quality assurance practices, and testing tools." },
            { code: "CSE 422", title: "Software Testing and Quality Assurance Sessional", credits: "0.75", description: "Practical software testing and quality assurance exercises." },
            { code: "CSE 423", title: "Graph Theory", credits: "3.00", description: "Graph algorithms, network analysis, and graph-based problem solving." },
            { code: "CSE 424", title: "Graph Theory Sessional", credits: "0.75", description: "Implementation of graph algorithms and network analysis techniques." },
            { code: "CSE 425", title: "Cryptography and Network Security", credits: "3.00", description: "Cryptography principles, network security protocols, and security implementation." },
            { code: "CSE 426", title: "Cryptography and Network Security Sessional", credits: "0.75", description: "Practical cryptography and network security implementations." },
            { code: "CSE 427", title: "Simulation and Modeling", credits: "3.00", description: "Simulation techniques, modeling methodologies, and system analysis." },
            { code: "CSE 428", title: "Simulation and Modeling Sessional", credits: "0.75", description: "Practical simulation and modeling projects." }
        ]
    },
    option3: {
        title: "Option III - Data & Systems",
        description: "Focus on data mining, cloud computing, and advanced system design.",
        courses: [
            { code: "CSE 459", title: "Data Mining and Warehousing", credits: "3.00", description: "Data mining techniques, data warehouse design, and business intelligence." },
            { code: "CSE 460", title: "Data Mining and Warehousing Sessional", credits: "0.75", description: "Practical data mining and warehousing implementations." },
            { code: "CSE 461", title: "Cloud Computing", credits: "3.00", description: "Cloud computing architectures, services, and deployment models." },
            { code: "CSE 462", title: "Cloud Computing Sessional", credits: "0.75", description: "Practical cloud computing projects and service implementations." },
            { code: "CSE 463", title: "VLSI Design", credits: "3.00", description: "Very Large Scale Integration design principles and methodologies." },
            { code: "CSE 464", title: "VLSI Design Sessional", credits: "0.75", description: "Practical VLSI design and simulation exercises." },
            { code: "CSE 465", title: "Digital System Design", credits: "3.00", description: "Advanced digital system design techniques and methodologies." },
            { code: "CSE 466", title: "Digital System Design Sessional", credits: "0.75", description: "Practical digital system design projects." },
            { code: "CSE 467", title: "Parallel and Distributed System", credits: "3.00", description: "Parallel computing architectures, distributed systems, and concurrent programming." },
            { code: "CSE 468", title: "Parallel and Distributed System Sessional", credits: "0.75", description: "Practical parallel and distributed system implementations." }
        ]
    },
    option4: {
        title: "Option IV - Intelligent Systems",
        description: "Specialization in artificial intelligence, machine learning, and intelligent systems.",
        courses: [
            { code: "CSE 469", title: "Machine Learning and Pattern Recognition", credits: "3.00", description: "Machine learning algorithms, pattern recognition techniques, and AI applications." },
            { code: "CSE 470", title: "Machine Learning and Pattern Recognition Sessional", credits: "0.75", description: "Practical machine learning and pattern recognition projects." },
            { code: "CSE 471", title: "Natural Language Processing", credits: "3.00", description: "Natural language processing techniques, text analysis, and language understanding." },
            { code: "CSE 472", title: "Natural Language Processing Sessional", credits: "0.75", description: "Practical NLP implementations and text processing projects." },
            { code: "CSE 473", title: "Human and Computer Interaction", credits: "3.00", description: "Human-computer interaction principles, user interface design, and usability engineering." },
            { code: "CSE 474", title: "Human and Computer Interaction Sessional", credits: "0.75", description: "Practical HCI design and evaluation projects." },
            { code: "CSE 475", title: "Robotics", credits: "3.00", description: "Robotics principles, robot programming, and autonomous systems." },
            { code: "CSE 476", title: "Robotics Sessional", credits: "0.75", description: "Practical robotics projects and robot programming exercises." },
            { code: "CSE 477", title: "Bioinformatics", credits: "3.00", description: "Bioinformatics algorithms, computational biology, and biological data analysis." },
            { code: "CSE 478", title: "Bioinformatics Sessional", credits: "0.75", description: "Practical bioinformatics analysis and computational biology projects." }
        ]
    }
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Show default semester (Level 1 - Semester I)
    showSemester('sem1');
    
    // Add fade-in animation to overview cards
    const overviewCards = document.querySelectorAll('.overview-card');
    overviewCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('fade-in');
        }, index * 200);
    });
});

// Function to show semester content
function showSemester(semesterKey) {
    const content = document.getElementById('semester-content');
    const data = courseData[semesterKey];
    
    if (!data) return;
    
    // Update tab buttons
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
    
    // Create semester content
    let html = `
        <div class="semester-header">
            <h2>${data.title}</h2>
            <p class="semester-credits">Total Credits: <strong>${data.totalCredits}</strong></p>
            <p class="semester-stats">No. of Theory Courses: ${data.courses.filter(c => !c.title.includes('Sessional')).length} | No. of Sessional Courses: ${data.courses.filter(c => c.title.includes('Sessional')).length}</p>
        </div>
        <div class="course-grid">
    `;
    
    data.courses.forEach(course => {
        html += `
            <div class="course-card fade-in">
                <div class="course-header">
                    <span class="course-code">${course.code}</span>
                    <span class="course-credits">${course.credits} Credits</span>
                </div>
                <h3 class="course-title">${course.title}</h3>
                <p class="course-hours">${course.hours} Hours/Week</p>
                <p class="course-description">${course.description}</p>
            </div>
        `;
    });
    
    html += '</div>';
    content.innerHTML = html;
    
    // Add animation delay for course cards
    setTimeout(() => {
        const courseCards = content.querySelectorAll('.course-card');
        courseCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50 * index);
            }, 100);
        });
    }, 100);
}

// Function to show option details
function showOption(optionKey) {
    const modal = document.getElementById('option-modal');
    const content = document.getElementById('option-details-content');
    const data = optionData[optionKey];
    
    if (!data) return;
    
    let html = `
        <h2>${data.title}</h2>
        <p class="option-description">${data.description}</p>
        <div class="option-courses-grid">
    `;
    
    data.courses.forEach(course => {
        html += `
            <div class="option-course-card">
                <div class="option-course-header">
                    <span class="course-code">${course.code}</span>
                    <span class="course-credits">${course.credits} Credits</span>
                </div>
                <h3>${course.title}</h3>
                <p>${course.description}</p>
            </div>
        `;
    });
    
    html += '</div>';
    content.innerHTML = html;
    modal.style.display = 'block';
    
    // Add animation to option courses
    setTimeout(() => {
        const optionCards = content.querySelectorAll('.option-course-card');
        optionCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease ' + (index * 0.1) + 's';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        });
    }, 100);
}

// Function to close option modal
function closeOption() {
    const modal = document.getElementById('option-modal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('option-modal');
    if (event.target === modal) {
        closeOption();
    }
}

// Add CSS for option modal content
const style = document.createElement('style');
style.textContent = `
    .option-description {
        font-size: 1.1rem;
        color: #666;
        margin-bottom: 2rem;
        line-height: 1.6;
    }
    
    .option-courses-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1.5rem;
    }
    
    .option-course-card {
        background: #fff;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        padding: 1.5rem;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }
    
    .option-course-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 5px;
        height: 100%;
        background-color: #e74c3c;
    }
    
    .option-course-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }
    
    .option-course-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        flex-wrap: wrap;
        gap: 1rem;
    }
    
    .option-course-card h3 {
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
        color: #2c3e50;
    }
    
    .option-course-card p {
        color: #666;
        line-height: 1.5;
    }
    
    .semester-header {
        text-align: center;
        margin-bottom: 3rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid #e0e0e0;
    }
    
    .semester-credits {
        font-size: 1.5rem;
        color: #2c3e50;
        margin-bottom: 0.5rem;
    }
    
    .semester-stats {
        color: #666;
        font-size: 0.9rem;
    }
`;
document.head.appendChild(style);