# HSTU CSE Syllabus 2017 - Web Project

A comprehensive web-based interactive syllabus viewer for the Hajee Mohammad Danesh Science and Technology University (HSTU) Computer Science and Engineering (CSE) 4-year B.Sc. program, effective from January-June 2017.

## 📋 Project Overview

This web project converts the complete PDF syllabus into an interactive, user-friendly web application that provides:

- **Complete Course Information**: All 8 semesters with detailed course descriptions
- **Credit Distribution**: Clear breakdown of theory and sessional credits
- **Specialization Options**: Four advanced option groups for Level 4
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Interface**: Smooth animations and intuitive navigation

## 🎯 Features

### 📊 Program Overview
- Total credits: 154.75 (115 Theory + 39.75 Sessional)
- Credit distribution across different course areas
- Semester structure and program statistics
- Key program features and highlights

### 📚 Detailed Course Structure
- **8 Semesters** of comprehensive course listings
- **40+ Core Courses** with detailed descriptions
- **Theory and Sessional** course categorization
- **Interactive tabs** for easy semester navigation
- **Course details** including credits, hours, and descriptions

### 🔧 Specialization Options
- **Option I**: Advanced Systems (Database, Algorithms, Communication)
- **Option II**: Software Engineering (Testing, Analysis, Security)
- **Option III**: Data & Systems (Mining, Cloud, VLSI, Distributed)
- **Option IV**: Intelligent Systems (AI, ML, NLP, Robotics)

### 🎨 Design Features
- **Modern UI/UX** with clean, professional design
- **Responsive layout** that adapts to any screen size
- **Smooth animations** and transitions
- **Accessibility** features for better user experience
- **Color-coded** course categories for easy identification

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software or dependencies required

### Installation
1. Download or clone this project to your local machine
2. Open `index.html` in your web browser
3. Start exploring the syllabus!

```bash
# Clone the repository
git clone https://github.com/yourusername/hstu-cse-syllabus.git

# Navigate to the project directory
cd hstu-cse-syllabus

# Open in your browser
open index.html
```

## 📱 Usage

### Navigation
- Use the **main navigation** to jump between sections
- Click **semester tabs** to view different levels
- Click **option cards** to explore specialization details
- Use the **modal close button** (×) or click outside to close modals

### Sections
1. **Overview**: Program statistics and credit distribution
2. **Summary**: Detailed credit breakdown per semester
3. **Courses**: Complete course listings by semester
4. **Options**: Specialization tracks for advanced study

## 📁 Project Structure

```
hstu-cse-syllabus/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript functionality and data
├── README.md           # Project documentation
└── cse_new_syllabus_2017.pdf  # Original PDF syllabus
```

## 🎨 Technologies Used

- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript ES6+**: Interactive functionality and data management
- **Font Awesome**: Icons and visual elements
- **CSS Variables**: Consistent theming and easy customization

## 📐 Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Customization

### Color Scheme
The project uses CSS variables for easy theming. Modify these in `styles.css`:

```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    --text-color: #333;
    --light-text: #fff;
    --bg-color: #f8f9fa;
}
```

### Adding New Content
To add new courses or semesters, modify the `courseData` object in `script.js`:

```javascript
const courseData = {
    // Add new semester
    sem9: {
        title: "New Semester",
        totalCredits: "XX.XX",
        courses: [
            // Add new courses
        ]
    }
};
```

## 📸 Screenshots

### Desktop View
- Hero section with program statistics
- Overview cards with credit breakdown
- Course grid layout with hover effects
- Modal popups for detailed information

### Mobile View
- Responsive navigation menu
- Stacked course cards
- Touch-friendly interface
- Optimized text sizing

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Hajee Mohammad Danesh Science and Technology University (HSTU)
- Faculty of Computer Science and Engineering
- All contributors and testers

## 📞 Contact

For questions, suggestions, or feedback:
- Project Repository: [GitHub Link]
- Email: [Your Email]
- Website: [Your Website]

---

**Note**: This project is for educational and informational purposes. Always refer to the official HSTU CSE department for the most current syllabus information.

website link: https://ashikhstu.github.io/HSTU-CSE-Academic-curriculum/ 