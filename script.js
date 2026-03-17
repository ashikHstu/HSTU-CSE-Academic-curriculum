// Course data structure with detailed information
const courseData = {
    sem1: {
        title: "Level 1 - Semester I",
        totalCredits: "19.00",
        courses: [
            { 
                code: "CSE 101", 
                title: "Fundamentals of Computer and Computing", 
                credits: "2.00", 
                hours: "2.00", 
                description: "Introduction to computer systems, programming concepts, and basic software applications.",
                detailed: "Introduction: History and revolution, Basic organization of computer, Types of computer, Number systems, Types of memory, Types of software, Operating system, Databases, Application packages. Peripheral Devices: Input device, Output device, Storage, Display, Bus. Computer Networks: Computer networks, WWW, Network card and accessories, Brief idea on network operating systems and popular NOS like- Windows NT, UNIX, Linux. Application Packages: Different application packages like Word processing, Spreadsheet analysis, Data base handling. Number Systems: Binary, Octal and Hexadecimal; Addition, Subtraction, Multiplication, Division. Codes: BCD, Excess three and Gray codes; Error detecting codes and Error correcting codes. Programming Concept: Problem analysis, Algorithm build-up, Flowcharts and Pseudo-coding, Data types, Expressions, Control flow."
            },
            { 
                code: "CSE 102", 
                title: "Fundamentals of Computer and Computing Sessional", 
                credits: "0.75", 
                hours: "1.50", 
                description: "Practical laboratory work based on CSE 101.",
                detailed: "Laboratory works based on CSE 101. Books: Anita Goel, Computer Fundamentals, Pearson, 2010. Timothy O'Leary, Linda O'Leary, Computing Essentials, 2014 Complete Edition, McGraw-Hill/Irwi, 2013. K. L. James, Computer Hardware: Installation, Interfacing, Troubleshooting and Maintenance, Prentice-Hall of India Pvt. Ltd, 2013. Peter Norton, Introduction to computers, 6th edition, 2006. Michael Price, Computer Basics in Easy Steps, In Easy Steps Limited, 2011."
            },
            { 
                code: "CSE 103", 
                title: "Discrete Mathematics", 
                credits: "3.00", 
                hours: "3.00", 
                description: "Logic, set theory, combinatorics, graph theory, and mathematical reasoning.",
                detailed: "Logics and Proofs: Propositional logic, Applications of propositional logic, Propositional equivalences, Predicates and Quantifiers, Nested quantifiers, Rules of inference, Introduction to proofs. Set, Function, Sequence, Summation and Matrix: Sets, Set operations, Functions, Sequences and summations, Zero–One matrices, Boolean product. Number Theory: Divisibility and modular arithmetic, Integer representations and Algorithms, Primes and Greatest Common Divisors (GCD), Modular exponentiation. Induction: Mathematical induction. Counting: The basics of counting, the pigeonhole principle, Permutations and Combinations, Binomial coefficients and identities, Generalized permutations and combinations. Recursion: Applications of recurrence relations. Inclusion-Exclusion: Inclusion–Exclusion. Relations: Relations, their properties, Representing relations. Graphs: Graphs and graph models, Graph terminology and special types of graph, Euler and Hamilton paths. Trees: Spanning trees, Rooted trees, Binary trees, Huffman trees, Tree traversing."
            },
            { 
                code: "MAT 101", 
                title: "Mathematics I (Calculus and Co-ordinate Geometry)", 
                credits: "3.00", 
                hours: "3.00", 
                description: "Differential and integral calculus, coordinate geometry, and analytical methods.",
                detailed: "Integral Calculus: Definitions of integration, Integration by the method of substitutions, Integration by parts, Standard integrals, Integration by the method of successive reduction, Definite integrals and its properties and use in summing series, Walli's formula, Improper integrals, Beta function and Gamma function, Area under a plane curve in Cartesian and polar co-ordinates, Area of the region enclosed by two curves in Cartesian and polar co-ordinates, Trapezoidal rule, Simpson's rule. Arc lengths of curves in Cartesian and polar co-ordinates, parametric and pedal equations, Volume of solids of revolution, Area of surface of revolution. Differential Calculus: Limits, Continuity and Differentiability. Successive differentiation of various types of functions, Leibniz's theorem, Rolle's theorem, Mean value theorem in finite forms, Taylor's and Maclaurin's theorems in finite and infinite forms, Lagrange's form of remainders, Cauchy's form of remainder, Expansion of functions, Evaluation of indeterminate forms by L'Hospital's rule, Partial differentiation, Euler's theorem, Tangent and Normal, Subtangent and subnormal in Cartesian and polar co-ordinates, Maximum and minimum values of functions of single variable, Points of inflexion, Curvature, Radius of curvature, Center of curvature. Co-ordinate Geometry: Transformation of co-ordinates axes and its uses, Equation of conics and its reduction to standard forms, Pair of straight lines, Homogeneous equations of second degree, Angle between a pair of straight lines, Pair of lines joining the origin to the point of intersection of two given curves, circles, System of circles, Orthogonal circles, Radical axis, Radical center, Properties of radical axes, Coaxial circles and limiting points, Equations of parabola, Ellipse and hyperbola in Cartesian and polar co-ordinates, Chord of contact, Chord in terms of its middle points, Pole and polar parametric co-ordinates, Diameters, Conjugate diameters and their properties, Director circles and asymptotes."
            },
            { 
                code: "PHY 103", 
                title: "Physics (Electricity, Magnetism, Optics, Waves and Oscillations)", 
                credits: "3.00", 
                hours: "3.00", 
                description: "Fundamental principles of physics with focus on electricity, magnetism, and wave phenomena.",
                detailed: "Charge, Electric Field and Gauss's Law: Simple phenomena in electrostatics, Electrostatic induction and charge density, Coulomb's law, Electric field and field strength, Point charge in an electric field, Dipole in an electric field, Electric flux, Gauss's law and some applications, Electric potential, Potential due to a point charge, Equipotential surfaces, Potential energy, Potential gradient, Capacitance and its calculation, Parallel plate capacitor with dielectric, Dielectric and Gauss's law, Electric vectors, Energy stored in an electric field. Electric Current, Simple Circuits and Electrical Measurements: Current and Ohm's law,E.M.F. and potential difference, Kirchhoff's laws, Whetstone bridge, Single loop and multi loop circuits, Simple RC and RL circuits, Kirchhoff''s laws, the potentiometer, Moving coil Galvanometer, Ammeter, Voltmeter, Multimeter, Wattmeter and Energy meter, Measurements of Voltage, Current, Resistance, Inductance, Capacitance, Power and Energy. Magnetic Field and Force on Current: Coulomb's law, Magnetic field and field strength, Magnetic force on current, Ampere's law, Directions of current and field, Maxwell's cork screw rule, Fleming's left hand rule, Magnetic field near long wire, Magnetic field for solenoid, Biot-savart law. Faraday's law of electromagnetic induction, Fleming's right hand rule, Lenz's law. Magnetic Properties of Matter: Poles and dipoles, Coulomb's law for magnets and Gauss's theorem of magnetism, Dia-magnetism, Para-magnetism and Ferro-magnetism, Magnetomotive force and field intensity, Concept of self and mutual inductance, Coefficient of magnetic coupling, Rise of current and decay of current in Inductive circuit, Energy in magnetic field, Inductance in series and parallel, Hysteresis and eddy current losses. Optics: Refraction and total internal reflection, Group velocity and Phase velocity of light, Dispersion, Interference, Holography, Fresnel and Fraunhofer diffraction, Polarization of lightwave. Waves and Oscillations: Differential equation of a simple harmonic oscillator, Total energy and average energy, Combination of simple harmonic oscillations, Lissajous figures, Spring mass system, Calculation of time period of torsional pendulum, Damped oscillation, Determination of damping co-efficient. Forced oscillation, Resonance, Two-body oscillations, Reduced mass, Differential equation of a progressive wave, Power and intensity of wave motion, Stationary wave, Group velocity and phase velocity, Architectural acoustics, Reverberation and Sabine's formula."
            },
            { 
                code: "PHY 104", 
                title: "Physics (Electricity, Magnetism, Optics, Waves, and Oscillations) Sessional", 
                credits: "1.50", 
                hours: "3.00", 
                description: "Laboratory experiments and practical work in physics.",
                detailed: "Laboratory works based on PHY 103. Books: David Halliday, Robert Resnick, Physics Part-II, Wiley Eastern Limited, 1992. Edward M. Purcell, David J. Morin, Electricity and Magnetism, Cambridge University Press, 3rd edition, 2013. Grant R. Fowles, Introduction to Modern Optics, Dover Publications, 2nd edition, 1989. D. N. Vasudeva, Fundamentals of Magnetism and Electricity, S. Chand and Company Limited, 1998. Wayne M. Saslow, Electricity, Magnetism and Light, Academic Press, 1st edition, 2002. David Halliday, Robert Resnick and Jearl Walker, Fundamentals of Physics Extended, John Wiley and Sons Co.(USA), 10th edition, 2013."
            },
            { 
                code: "AIE 105", 
                title: "Basic Mechanical Engineering", 
                credits: "3.00", 
                hours: "3.00", 
                description: "Introduction to mechanical engineering principles and applications.",
                detailed: "Thermodynamics: Zeroth, First and Second laws of Thermodynamics, Thermodynamics system and processes, Irreversibility and availability, Entropy, Sources of energy, Conventional and renewable, IC engines, Refrigeration and Air Conditioning systems, Kinematics and dynamics of particles and Rigid bodies, Forces in trusses and frames. Heat-Transfer: Modes of heat transfer, One dimensional heat conduction, Resistance concept and electrical analogy. Books: Dowling, Norman E. Mechanical Behavior of Materials. Pearson, 2012. R.K. Rajput. Thermal Engineering. Laxmi Publications, 2010. Pravin Kumar. Basic Mechanical Engineering. Pearson, 2010."
            },
            { 
                code: "ENG 101", 
                title: "Communicative English", 
                credits: "2.00", 
                hours: "2.00", 
                description: "English language skills for effective communication in academic and professional settings.",
                detailed: "Reading: Skimming, Scanning, Interpretation, Reading short stories and Comprehension. Writing: Punctuation, Indenting, Abbreviation, Capitalization, Paragraph, Composition, Authorization letter, C.V writing. Notice, Memo, Tender, Précis, Report, Free composition, Creative writing. Grammar: Parts of speech, Phrase, Clause, Sentence, Right form of verb, Preposition, Correction, Joining, Changing. Phonetics and Phonology: Phonetics, Phonology, Vowel, Consonant, IPA transcription. Books: Dr. Moniruzzaman, A Study of English Language, Friend's Book Corner, 2006. Dr. JohirulHaque, MdAtaulHaque, S M Amanullah, Language, Friend's Book Corner, 3rd edition, 1985. M. Swan, Practical English Usage, Oxford University Press, 1980. G. Leech, A Communicative English Grammar, Longman Publication, Singapore, 1975. F. Palmer, The English Verbs, Routledge, London, UK, 2016. J.C. Nesfield, English Grammar Series, Radha Publishing House, Calcutta, Revised Edition, 1997. Maurice Imhoof, From Paragraph to Essay, Longman, 1975."
            },
            { 
                code: "ENG 102", 
                title: "Communicative English Sessional", 
                credits: "0.75", 
                hours: "1.50", 
                description: "Practical language exercises and communication skills development.",
                detailed: "Listening: Pronunciation, Audio listening, Vowel measurement. Speaking: Social English practice, Verbal and non-verbal communication, Regular practice in the class. Presentation: Presentation skill. Books: Ann Baker, Ship or Sheep?, Cambridge University Press, 3rd edition, 2006. D. Jones, The Pronunciation of English, Cambridge University Press, 4th Indian Reprint, 1991. SM Amanullah, A Guide to Correct Speech, Friend's Book Corner, 2010."
            }
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
            <div class="course-card fade-in" onclick="showCourseDetail('${semesterKey}', '${course.code}')">
                <div class="course-header">
                    <span class="course-code">${course.code}</span>
                    <span class="course-credits">${course.credits} Credits</span>
                </div>
                <h3 class="course-title">${course.title}</h3>
                <p class="course-hours">${course.hours} Hours/Week</p>
                <p class="course-description">${course.description}</p>
                <div class="course-more">Click for detailed syllabus →</div>
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

// Function to show course detail
function showCourseDetail(semesterKey, courseCode) {
    const modal = document.getElementById('course-detail-modal');
    const content = document.getElementById('course-detail-content');
    const data = courseData[semesterKey];
    
    if (!data) return;
    
    const course = data.courses.find(c => c.code === courseCode);
    if (!course) return;
    
    let html = `
        <div class="course-detail-header">
            <div class="course-detail-code">${course.code}</div>
            <div class="course-detail-info">
                <h2>${course.title}</h2>
                <div class="course-detail-meta">
                    <span class="meta-item"><i class="fas fa-clock"></i> ${course.hours} Hours/Week</span>
                    <span class="meta-item"><i class="fas fa-credit-card"></i> ${course.credits} Credits</span>
                    <span class="meta-item"><i class="fas fa-calendar"></i> ${data.title}</span>
                </div>
            </div>
        </div>
        <div class="course-detail-body">
            <div class="course-detail-section">
                <h3><i class="fas fa-book"></i> Course Description</h3>
                <p>${course.description}</p>
            </div>
            <div class="course-detail-section">
                <h3><i class="fas fa-list-alt"></i> Detailed Syllabus</h3>
                <div class="syllabus-content">
                    ${course.detailed || 'Detailed syllabus content coming soon...'}
                </div>
            </div>
        </div>
    `;
    
    content.innerHTML = html;
    modal.style.display = 'block';
    
    // Add animation
    setTimeout(() => {
        const detailContent = content.querySelector('.course-detail-body');
        if (detailContent) {
            detailContent.style.opacity = '0';
            detailContent.style.transform = 'translateY(20px)';
            detailContent.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            
            setTimeout(() => {
                detailContent.style.opacity = '1';
                detailContent.style.transform = 'translateY(0)';
            }, 100);
        }
    }, 100);
}

// Function to close course detail modal
function closeCourseDetail() {
    const modal = document.getElementById('course-detail-modal');
    modal.style.display = 'none';
}

// Function to close option modal
function closeOption() {
    const modal = document.getElementById('option-modal');
    modal.style.display = 'none';
}

// Close modals when clicking outside
window.onclick = function(event) {
    const courseModal = document.getElementById('course-detail-modal');
    const optionModal = document.getElementById('option-modal');
    
    if (event.target === courseModal) {
        closeCourseDetail();
    }
    if (event.target === optionModal) {
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