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
            { code: "CSE 151", title: "Structured Programming Language", credits: "3.00", hours: "3.00", description: "Introduction to structured programming paradigm, understanding components of a C program, data types, operators, functions, loops, arrays, strings, structures, pointers, and dynamic memory allocation.", detailed: "Introduction to Structured Programming Paradigm, Understanding the Components of a C program: Basic I/O, Data type, Conditional logic, Switch case, Character, ASCII value, Reading and writing character, Integer to character conversion. Operators: Arithmetic, Relational, Logical and Bitwise operators, Operator precedence and associativity, Arithmetic expression evaluation, Short cut operator. Functions–I: Basic functions, Void functions with no parameters. Loops: Looping basic, Necessity of loops, while loop, Loop condition, Body, Initialization, Increment, For Loops, Part of for loops, do while loop, Entry controlled loops, Exit controlled loops, Examples, Formulating problems using loops. Formatted I/O: Specifying width using format specifier in printf and scanf in details. Nested Loop: Nesting of two loops, Example, Nesting of independent loops inside one, Example, Nesting of more than two loops. Functions–II: Functions with return type and trivial parameters, Local and global variables, Call by value, Library functions, Header files concept. Arrays: Basics of array, Necessity, Declaration, Accessing through indices, Accessing using loops, Initialization, Example, Two dimensional arrays, Declaration, Initialization, Accessing through loops, Example, Multidimensional arrays, Example. Functions–III: Passing arrays in a function as parameter, Call by reference, Recursion, Scope visibility and lifetime of variable. Strings: Basics, Difference between string and character array, I/O, Basic operations without using library functions, Array of strings. String Library: Basic string operations, Length, Compare, Concatenate, Substring, Reverse. Structures: Basics, Necessity, Declaration, Accessing, Initialization, Array of structures. Pointers: Basics, Uses, Pointer operation, Call by reference using pointers, Pointer for 1D/2D/3D array, Structure, Pointer expression, Array of pointers, Function returning pointers. Dynamic Memory Allocation: Basics, Uses, Malloc, Free, Calloc, Realloc. File Operation: Basics, Uses, File opening, Closing, File I/O, Use of redirect operator to write in file or read from file. Preprocessors and Macros." },
            { code: "CSE 152", title: "Structured Programming Language Sessional", credits: "1.50", hours: "3.00", description: "Practical programming exercises and projects in C language.", detailed: "Laboratory works based on CSE 151. Books: Mike McGrath, C Programming in Easy Steps, In Easy Steps Limited, 4th edition, 2012. Harry H. Chaudhary, Absolute Beginner's Guide to C Programming: With 2000+ C Codes And 23+ Complete Chapter's, Create Space Independent Publishing Platform, 2014. Stephen G. Kochan, Programming in C, Addison-Wesley Professional, 4th edition, 2014. B. W. Kernighan and D. M. Ritchie, The C Programming Language, 2nd Edition, Prentice Hall, 1988. Herbert Schildt, Teach Yourself C, McGraw -Hill Osborne Media, 3rd edition, 1997." },
            { code: "CSE 153", title: "Digital Logic Design", credits: "3.00", hours: "3.00", description: "Fundamental concepts of digital systems, logic gates, and digital circuit design.", detailed: "Overview: Introductory concepts, Number systems and codes, Logic Circuits: Gates, Boolean algebra, De Morgan's theorem, Half and full adders, Subtractor, Sum of products and product of sums, Mapping technique, Karnaugh map, Minimization of logic circuits. Combinational Circuits: Encoders and decoders, Comparators, Parity generator, Multiplexers, Demultiplexers. Sequential Circuits: State table, State diagram and State reduction, S-R, M/S, JK, D and T Flip-flops and Latches, Register, Asynchronous and synchronous counter, Counter applications, Memory, PAL, PLA. Converters: Analog to Digital (A/D) and Digital to Analog (D/A) conversion techniques." },
            { code: "CSE 154", title: "Digital Logic Design Sessional", credits: "1.50", hours: "3.00", description: "Laboratory work on digital logic circuits and design.", detailed: "Laboratory works based on CSE 153. Books: Thomas L. Floyd, Digital Fundamentals, PHI, 11th edition, 2014. Ronald J. Tocci, Neal Widmer, Greg Moss, Digital Systems: Principles and Applications, Prentice Hall, 11th edition, 2010. William J. Dally, R. Curtis Harting, Digital Design: A Systems Approach, Cambridge University Press, 2012. M. Morris Mano, Michael D. Ciletti, Digital Design: With an Introduction to the Verilog HDL, PHI, 5th edition, 2012. Dr. Hafiz Faruque, Ahmed Sharif, Computer Hardware and Digital Electronics, M. R. S. Sharif Publishing, 2007." },
            { code: "EEE 155", title: "Introduction to Electrical Engineering", credits: "3.00", hours: "3.00", description: "Basic electrical engineering concepts, circuit analysis, and electrical systems.", detailed: "Resistor: Properties, Types of resistors, Ohm's Law, Power, Energy, Efficiency, etc. Series DC Circuits: Kirchhoff's voltage law, Voltage divider rule, Power distribution, Voltage regulation, Voltage sources in series, etc. Parallel DC Circuits: Conductance and resistance, Kirchhoff's current law, Current divider rule, Open circuit, Short circuit, Voltage sources in parallel, etc. DC Series-Parallel Network: Reduce and return approach, Block diagram approach, Ladder networks. Methods of Analysis for DC Networks: Current source, Source conversion, Current sources in series and parallel, Branch-Current analysis, Mesh analysis, Nodal analysis, Bridge network and Y-Δ and Δ-Y conversions. Network Theorems (DC): Superposition, Thevenin's, Norton's, Maximum power transfer, Milliman's, Substitution, Reciprocity, etc. Capacitor: Electric field, Capacitance, Dielectric strength, Leakage current, Types of capacitors, Charging and discharging phase, Energy stored by a capacitor, Capacitors in series and parallel. Inductor: Magnetic field, Inductance, Types of inductors, Faraday's law and Lenz's law, Inductors in series and parallel. R-L, R-C and R-L-C circuits with DC input. Introduction to Sinusoidal Alternating Waveforms: Definitions, General format for the sinusoidal voltage or current, Phase relations, Average and RMS values etc. Ordinary and frequency response of basic R, L and C elements, Average power and Power factor, Rectangular and Polar form, Phasors." },
            { code: "EEE 156", title: "Introduction to Electrical Engineering Sessional", credits: "0.75", hours: "1.50", description: "Practical electrical engineering experiments and measurements.", detailed: "Laboratory works based on EEE 155. Books: R. L. Boylestad, Introductory Circuit Analysis, Prentice Hall, 2010. R. M. Kerchner, G. F. Corcoran, Alternating Current Circuits, Wiley Eastern Limited, 1994. K. C. A. Smith, R. E. Alley, Electrical Circuits: An Introduction, Cambridge University Press, 1992. J. Nagarathand D. P. Kothari, Electric Machines, Tata McGraw-Hill, 1999. F. Puschstein, T. C. Lloyd, A. G. Conrad, Alternating Current Machines, Asia Publishing House, 1996." },
            { code: "AIE 106", title: "Engineering Drawing and Auto CAD Sessional", credits: "1.50", hours: "3.00", description: "Technical drawing principles and AutoCAD software applications.", detailed: "Technical Lettering: One point, Projection of points and straight lines, Projection of simple solids, Cylinders, Cones, Parallelepiped and Pyramids in orthographic and isometric projections, Perspective Projection: Principles of perspective projection by orthographic method and Vanishing point." },
            { code: "MAT 105", title: "Mathematics II (Matrix, Ordinary and Partial Differential Equations, and Series Solutions)", credits: "3.00", hours: "3.00", description: "Advanced mathematical concepts including matrices, differential equations, and series.", detailed: "Matrices: Definition of matrix, Different types of matrices, Algebra of matrices, Adjoint and inverse of a matrix, Elementary transformations of matrices, Matrix polynomials, Calay-Hamilton theory with uses of rank and nullity, Normal and canonical forms, Solution of linear equations, Eigenvalues and eigenvectors. Ordinary Differential Equation (ODE): Definition, Formation of ODE, Degree and order of ODE, Solution of first order and first degree ODE with various methods, Solution of first order and higher order homogeneous and Non-homogeneous differential equations with constant coefficients, Engineering applications. Partial Differential Equations (PDE): Four rules for solving simultaneous equations of the form, Lagrange's method of solving PDE of order one, Integral surfaces passing through a given curve, Nonlinear PDE of order one (complete, particular, singular and general integrals): standard forms f(p,q) = 0, z = px + qy + f(p,q), f(p,q,z) = 0, fÂ1(x,p) = f2(y, q),Charpit's method, Second order PDE, Homogeneous and Non-homogeneous linear equations with constant coefficients, Solution by separations of variables. Series Solution: Solution of differential equations in series by the method of Frobenius, Bessel's functions, Legendre's polynomials and their properties." },
            { code: "SOC 103", title: "Society and Technology", credits: "2.00", hours: "2.00", description: "Relationship between society and technological development, social impacts of technology.", detailed: "Introduction: Sociology, Common sense and Science, Meaning of technology, Relationship among society, Science and technology, Human technology interaction, Technology and behaviour. Social Complexities and Technological Change: Elman's service's stage of social complexity, Relationship between social complexity and technological innovation, Population size and how they affect for diffusion of technologies. Modern Technology and Contemporary Society (Bangladesh):Innovation and diffusion of technology, The attributes of innovation and their rate of adaptation, Uses and impacts of technologies in various social aspects and changing society (creation of social inequality-mass media and stratification),Advancement of society (e-commerce, e-banking, e-governance), Industrialization, Hi-tech park and e-waste, Political activism on internet, Impacts of technology on workplace. The Information Technological Revolution: Technology, society and historical change, The historical sequence of the information technology revolution, The creation of the internet, The self in the information society, Technologies of the life,Types of society (pre-industrial, industrial and post-industrial).Globalization, Technology and Social Change: Global social change, Technology and the future (computer, technology, privacy and censorship in a global village),Medical, Biotechnology and Genetics technology, Technology and war (first and second world war and contemporary),Robotics in warfare or replacement of workforce, Advanced service, Information flows and globalcity. Population, Environment and Technology: Technology, Environmental problems and Sustainable development from sociological perspective. The New Economy based on Technology: Globalization of markets for goods and services, Informational production and Selective globalization of science and technology. The Transformation of Work and Employment: Network, Jobless and Flex-timers, The maturity of the informational society, Employment projection in the twenty-first century, The effects of information technology on employment, Towards a jobless society. Communication Revolutions and Mass Media: Cyber world and life, The self, Reality and virtual reality, Cybercrime (meaning, types, cause, effects, solution and respective laws)." }
        ]
    },
    sem3: {
        title: "Level 2 - Semester I",
        totalCredits: "21.50",
        courses: [
            { code: "CSE 201", title: "Object Oriented Programming", credits: "3.00", hours: "3.00", description: "Object-oriented programming concepts using C++, including classes, inheritance, and polymorphism.", detailed: "Introduction: Object oriented programming overview. Object Oriented Concepts: Modeling problems using object oriented concepts, Introduction to UML; Encapsulation, Inheritance and Polymorphism; Object Oriented vs. Procedural programming, Basics of object oriented programming language. Objects and Classes: Concept of Class and object, Attributes and functions, Constructors and destructors, Functions or methods, Overloading methods, Access control, Special considerations in different languages. I/O: Stream and files. Inheritance: Inheriting classes, Subclass, Super class, Access control, Inheritance hierarchy, Overriding, Dynamic binding, Abstract class, Inner classes, Special considerations in different languages, Multiple inheritance, Interface. Exception and exception handling: Exception handling fundamentals, Exception types, Chained exception, Creating own exception subclasses. Generics or Templates: Generic class and data type; Special considerations in different languages. Package/Namespace: Understanding and implementing package/namespace. Case Study using Object Oriented Programming." },
            { code: "CSE 202", title: "Object Oriented Programming (C++) Sessional", credits: "1.50", hours: "3.00", description: "Practical programming exercises in C++ focusing on object-oriented concepts.", detailed: "Laboratory works based on CSE 201. Books: Dimitrios Kalemis, The Fundamental Concepts of Object-Oriented Programming, Create Space Independent Publishing Platform, 1st edition, 2013. James Keogh, Mario Giannini, OOP Demystified, McGraw-Hill Osborne Media, 1st edition, 2004. Matt Weisfeld, The Object-Oriented Thought Process, Addison-Wesley Professional, 4th edition, 2013. Tony Gaddis, Judy Walters, Godfrey Muganda, Starting Out with C++: Early Objects, Addison-Wesley, 8th edition, 2013. Tony Gaddis, Starting Out with Java: From Control Structures through Objects, Addison-Wesley, 5th edition, 2012." },
            { code: "CSE 203", title: "Data Structures", credits: "3.00", hours: "3.00", description: "Study of data organization methods including arrays, linked lists, trees, and graphs.", detailed: "Introduction: Basic terminology of elementary data organization, Data structures, Data structures operations, Algorithms, Mathematical notation and functions, Algorithmic notation, Control structures, Complexity of algorithms, Asymptotic notations, Sub algorithms, Variables, Data types, etc. Linear Data Structures: Arrays, Records and Pointers, Linked lists, Stacks, Queues, Recursion. Non-linear Data Structures: Binary tree representation using array and pointers, Traversal of binary tree, Binary search tree (BST) representation, Basic operations on BST, Heap, Min-heap, Max-heap, Fibonacci-heap, Applications-priority queue, Heap sort, Segmented tree, General Tree implementation, Application of general tree-file system, AVL tree (rotation, insertion), Graph, Graph representation and Basic operations on graph. Traversing a graph: Breadth-first search (BFS), Depth-first search (DFS),Graph-coloring. String Processing: Basic terminology, Storing strings, Character data type, String operations, Word processing, Pattern matching algorithms, etc. Sorting and Searching: Introduction, sorting, Insertion sort, Selection sort, Merging, Merge-sort, Radix sort, Searching and data modification, Hashing, etc. in detail. Data Structure with C/C++/Java: Implementing data structures and their operations with C, C++ using STL and Java." },
            { code: "CSE 204", title: "Data Structures Sessional", credits: "1.50", hours: "3.00", description: "Implementation and manipulation of various data structures through programming exercises.", detailed: "Laboratory works based on CSE 203. Books: Seymour Lipchutz, Data Structures with C (Indian Adapted Edition), Tata McGraw-Hill Education Private Limited, 2011. Narasimha Karumanchi, Data Structures and Algorithms Made Easy: Data Structure and Algorithmic Puzzles, CreateSpace Independent Publishing Platform, 2nd edition, 2011. Noel Kalicharan, Data Structures in C, Create Space Independent Publishing Platform, 1st edition, 2008. Ford, Topp, Data Structures with C++ using STL, 2nd edition, Prentice Hall, 2002. Ford, Topp, Data Structures with Java, 1st edition, Prentice Hall, 2005." },
            { code: "CSE 205", title: "Numerical Methods", credits: "2.00", hours: "2.00", description: "Numerical techniques for solving mathematical problems using computers.", detailed: "Introduction: Numerical computing, Errors in computation, Stability and convergences. Roots of Nonlinear Equations: Bisection, False position and Newton-Raphson method. Solution of Linear Equations: Gaussian elimination, Gauss-Jordan method, Jacobi's method, Gauss-Seidal method. Regression: Linear and exponential. Interpolation: Lagrange and Newton polynomials. Numerical Differentiation and Integration: Differentiating Continuous functions, Tabulated functions, Difference tables, Richardson extrapolation, Mid-point method, Trapezoidal and Simpson's 1/3 and 3/8 rules. Numerical Solution of Ordinary Differential Equation: Euler's method, Taylor series, Picard, Runge-Kutta method. Solution of Partial Differential Equations: Determination of characteristics equation of a matrix using Fadeev-Leverrier method, Eigen value and Eigen vector and matrix inversion." },
            { code: "CSE 206", title: "Numerical Methods Sessional", credits: "0.75", hours: "1.50", description: "Practical implementation of numerical methods and algorithms.", detailed: "Laboratory works based on CSE 205. Books: E Balagurusamy, Numerical Method, Tata McGraw-Hill,2000. Robert J. Schilling and Sandra L Harries, Applied Numerical Method for Engineers, Thomson Books, 2002. Steven C. Chapraand Raymond P. Canale, Numerical Method for Engineers, McGrawHill, 2002. Amos Gilat, Vish Subramaniam, Numerical Methods with MATLAB, Wiley, 2nd edition, 2010. S. Balachandra Rao andC. K. Shantha, Numerical Methods, 2000. S.S. Sastry, Introductory Methods of Numerical Analysis, Fourth Edition, PHI Learning Pvt. Ltd., 2012." },
            { code: "EEE 209", title: "Electronic Devices and Circuits", credits: "3.00", hours: "3.00", description: "Study of electronic components, circuits, and their applications in computing systems.", detailed: "Introduction to Semiconductors: Properties, bonds and types of semiconductors. Semiconductor Diodes and Special Purpose Diodes: The PN junction diode: Formation, properties and V-I characteristics, Basic constructions, Characteristics, operations and uses of special diodes: Light-emitting diode (LED), Zener diode etc. Diode Application: Half-wave and full-wave rectifiers– operation and efficiency, Ripple factor, Filter circuits – Capacitor input filter, LC filter and Π-filter, Clipping and Clamping circuits, Voltage regulation and regulator circuits - Zener diode and Transistor voltage regulator. Bipolar Junction Transistors: NPN and PNP transistors, Amplifying and switching actions of transistor, Transistor characteristics in CB, CE, CC configurations, Transistor load line and Operating point. BJT Biasing: Faithful amplification, Inherent variation of transistor parameters and Thermal runway, Stabilization and stability factor, Methods of BJT biasing, Analysis and design of biasing circuits. Single Stage Transistor Amplifier: Single stage amplifier circuit, Phase reversal, DC and AC equivalent circuits, Load line analysis, Voltage gain and Power gain, Classification of amplifiers, Amplifier equivalent circuits. Field Effect Transistors: Classification of FET, Construction, Operation and characteristics of JFET and MOSFET, Transfer characteristics and Shockley's equation, DC biasing of JFET. Power Electronics: Operations, Characteristics and applications of industrial electronics devices: SCR (Silicon Controlled Rectifier), TRIAC, DIAC etc. Feedback Techniques and Op-Amps: Concepts-negative and positive feedback, Characteristics and Gain with negative voltage and current feedback, Emitter follower, Basic Op-Amps- Characteristics, inverting, non-inverting, integrators, differentiators, summing amplifiers. Oscillators: Theory of oscillation and characteristics of different oscillators. Introduction to IC fabrication." },
            { code: "EEE 210", title: "Electronic Devices and Circuits Sessional", credits: "0.75", hours: "1.50", description: "Laboratory work on electronic circuits and device characteristics.", detailed: "Laboratory works based on EEE 209. Books: R. L. Boylestad, L. Nashelsky, Electronic Devices and Circuit Theory, PHI, 1999. S. Sedra, K. C. Smith, Microelectronic Circuits, Oxford University Press, 2005. R. K. Mozumder, Principles of Electronic Circuits, Systech Publications, 2006. David A. Bell, Fundamentals of Electronic Devices and Circuits, Oxford University Press, 5th edition, 2009. D. L. Schilling and C. Belove, Electronic Circuits, McGraw-Hill Book Company, 1989." },
            { code: "MAT 201", title: "Mathematics III (Vector, Complex Variable, Fourier Analysis and Laplace Transformation)", credits: "3.00", hours: "3.00", description: "Advanced mathematical topics including vector analysis, complex variables, and transforms.", detailed: "Vector: Vector and scalar quantity, Linearly dependent and independent vector differentiation, Gradient, Divergence and Curl; Vector integration, Line integrals, Surface integrals, Volume integrals, The divergence theorem of Gauss, Stoke's theorem, Green's theorem in the plane, Related integral theorem, General Coordinates. Complex Variable: Complex number system, General functions of a complex variable, Limits and continuity of a function of complex variable and related theorems, Complex differentiation and the Cauchy-Riemann Equations, Cauchy's Integral Theorem, Cauchy's Integral Formula, Liouville's Theorem, Taylor's Theorem and Laurent's Theorem. Singular points, Residue, Cauchy's Residue Theorem, Evaluation of residues. Fourier Analysis: Real and complex form of Fourier series, Finite transform, Fourier Integral, Fourier transforms and their uses in solving boundary value problems of wave equations. Laplace Transforms: Definition of Laplace transform and inverse Laplace transform, Property of Laplace transform, Laplace transform of Derivatives and Integrals, Unit-step function, Dirac-Delta function, Periodic function, Some special theorems on Laplace transforms, Solutions of D.E and evaluation of improper integral use Laplace transform." },
            { code: "STT 227", title: "Statistics (Introduction to Statistics and Probability)", credits: "3.00", hours: "3.00", description: "Fundamental concepts of statistics and probability theory with applications.", detailed: "Statistics: Introduction, uses and scope of statistics, Variable, Types and sources of data. Presentation of Data: Construction of frequency distribution table, Different graphs and diagrams, stem and leaf plot, Box and Whisker plot. Characteristics of Data: Different measures of central tendencies, Different measures of dispersions, Moments, Skewness and kurtosis, Trimmed mean,Robust measure. Bivariate Data Analysis: Definition and types of correlation, Calculation of correlation coefficient, Rank correlation, Definition of regression analysis and regression line, Simple and multiple regression analysis. Probability Theory: Concept of probability, Definition of probability by different approaches, Additive and multiplicative rules, Conditional probability, Bayes theorem. Probability Distribution: Distribution function, Expectation, Moment generating function, Cumulant generating function. Discrete Probability Distributions: Bernoulli, Binomial, Poisson, Geometric, Hypergeometric distributions. Continuous Probability Distributions: Normal, Uniform, Exponential, Gamma, Beta distributions. Limit Theorems: Markov's and Chebyshev's inequality, Central limit theorem, Laws of large numbers." }
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