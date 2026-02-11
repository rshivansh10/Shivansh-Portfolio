// Data for projects
const projectsData = [
    {
        title: "Full-Scale Intune Integration",
        description: "Managing the move to mobile: Seamlessly integrated Intune to keep our team productive on the go and our data locked down.",
        tags: ["Microsoft Intune", "Endpoint Security", "Conditional Access", "Mobile Device Management"],
        image: "./images/intune.png"
    },
    {
        title: "Hybrid Identity & Cloud Infrastructure",
        description: "Architected Azure-on-prem integration and managed Kubernetes/VM clusters for enterprise operations.",
        tags: ["Azure", "AD-Connector", "Kubernetes", "SFTP"],
        image: "./images/azure.png"
    },
    {
        title: "Automated Governance & Security Audit",
        description: "Engineered PowerShell automation for security audits, SIEM integration, and compliance enforcement.",
        tags: ["PowerShell", "SIEM", "Automation", "Security"],
        image: "./images/security.png"
    },
   
  
     
];

// Data for skills
const skillsData = [
	// Cloud & Identity Management
   { name: "Azure", icon: "fab fa-microsoft" },
    { name: "Entra ID", icon: "fas fa-fingerprint" },
    { name: "Active Directory", icon: "fas fa-sitemap" },
    { name: "GCP Administration", icon: "fab fa-google" },

   	// Modern Workplace & Productivity
    { name: "Intune", icon: "fas fa-tablet-alt" },
    { name: "SharePoint", icon: "fas fa-project-diagram" },
    { name: "Exchange Online", icon: "fas fa-envelope-open-text" },

   	// Programming & Web Development
    { name: "Powershell", icon: "fab fa-terminal" },
    { name: "HTML/CSS", icon: "fab fa-html5" },
    { name: "Git", icon: "fab fa-git-alt" },
];

// Initialize projects
function initProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = projectsData.map(project => `
        <div class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title} logo" class="project-logo" onerror="this.style.display='none'">
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize skills
function initSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    skillsGrid.innerHTML = skillsData.map(skill => `
        <div class="skill-card">
            <div class="skill-icon"><i class="${skill.icon}"></i></div>
            <h3 class="skill-name">${skill.name}</h3>
        </div>
    `).join('');
}

// Mobile menu toggle
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
}

// Active nav link on scroll
function setupActiveNavLink() {
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Scroll animation
function setupScrollAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.project-card, .skill-card').forEach(el => {
        observer.observe(el);
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    initProjects();
    initSkills();
    setupMobileMenu();
    setupActiveNavLink();
    setupScrollAnimation();
});