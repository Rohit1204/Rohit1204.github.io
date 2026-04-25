# Rohit Ahuja Portfolio

Personal portfolio website for Rohit Ahuja, Software Development Engineer focused on backend engineering, DevOps, cloud infrastructure, and applied AI systems.

Live site: [https://rohit1204.github.io](https://rohit1204.github.io)

## Overview

This is a static portfolio hosted on GitHub Pages. It is intentionally built with HTML, CSS, and JavaScript so it stays lightweight, fast to deploy, and easy to maintain without a build pipeline.

The site highlights professional experience, DevOps and AI skills, achievements, writing, resume links, and contact CTAs for recruiters and engineering teams.

## Tech Stack

- HTML5
- CSS3
- JavaScript
- Bootstrap
- jQuery
- Font Awesome
- Iconify
- Lottie
- GitHub Pages

## Site Sections

- Home: hero introduction, profile image, social links, and primary CTAs
- About: professional summary and engineering positioning
- Experience: timeline-style work history with current-role highlight
- Skills: categorized DevOps, AI, backend, frontend, database, and tooling skills
- Projects: selected portfolio projects
- Achievements: certification, patent, awards, and leadership highlights
- Writing: Medium article card for technical writing
- Contact: meeting, email, LinkedIn, WhatsApp, phone, and GitHub links

## Production Folder Structure

This repository is a GitHub Pages user site, so `index.html` must stay at the repository root.

```text
Rohit1204.github.io/
├── index.html                         # Main GitHub Pages entry file
├── resume.html                        # HTML resume page
├── style.css                          # Main stylesheet
├── README.md                          # Project documentation
├── resume.pdf                         # Downloadable resume file
├── Rohit Ahuja - Resume 2025.pdf      # Alternate resume PDF
├── profile.jpg                        # Hero/profile image
├── profilepic.jpg                     # Additional profile image
├── avatar1.jpeg                       # Favicon / app icon
├── cover.jpg                          # Hero background image
├── about.png                          # About section background image
├── skill.jpg                          # Skills/projects supporting image
├── css/
│   └── bootstrap.min.css              # Local Bootstrap stylesheet
├── js/
│   ├── app.js                         # Site interactions
│   ├── animatescroll.min.js           # Smooth scroll helper
│   ├── bootstrap.min.js               # Bootstrap JavaScript
│   ├── jquery-3.3.1.slim.min.js       # jQuery dependency
│   └── popper.min.js                  # Bootstrap dependency
└── assests/                           # Site assets used by existing HTML paths
    ├── experience-lottie.json          # Experience section Lottie animation data
    ├── natwest.jpeg                   # Company logo
    ├── bondsindia.svg                 # Company logo
    ├── forwood.svg                    # Company logo
    ├── aws-icon.svg                   # Skill icon
    ├── terraform.svg                  # Skill icon
    ├── docker.svg                     # Skill icon
    ├── jenkins.svg                    # Skill icon
    ├── openai.svg                     # Skill icon
    ├── gemini.svg                     # Skill icon
    ├── langchain.svg                  # Skill icon
    ├── ai-agents.svg                  # Skill icon
    ├── python.svg                     # Skill icon
    ├── django.svg                     # Skill icon
    ├── react.svg                      # Skill icon
    ├── nextjs.svg                     # Skill icon
    ├── javascript.svg                 # Skill icon
    ├── html.svg                       # Skill icon
    ├── css.svg                        # Skill icon
    ├── mysql.svg                      # Skill icon
    ├── mongodb.svg                    # Skill icon
    ├── postgresql.svg                 # Skill icon
    ├── git.svg                        # Skill icon
    └── postman.svg                    # Skill icon
```

Important: the folder is currently named `assests/` in the code. Do not rename it to `assets/` unless every reference in `index.html` and `style.css` is updated at the same time.

## GitHub Pages Notes

This repository is configured as a GitHub Pages user site:

- Repository name should remain `Rohit1204.github.io`.
- `index.html` should remain in the repository root.
- Root-level assets such as `style.css`, `profile.jpg`, `cover.jpg`, and `resume.html` should not be moved unless their references are updated.
- File names are case-sensitive after deployment, so keep image and asset paths exactly as referenced in the HTML/CSS.
- CSS and JS cache busting is handled with query strings such as `style.css?v=...` and `js/app.js?v=...`.

## Local Development

Clone the repository:

```bash
git clone https://github.com/rohit1204/Rohit1204.github.io.git
cd Rohit1204.github.io
```

Run a local static server:

```bash
python3 -m http.server 8000
```

Open:

```text
http://localhost:8000
```

You can also open `index.html` directly in a browser, but using a local server more closely matches production behavior.

## Deployment

GitHub Pages deploys the site directly from the repository.

1. Commit changes to the default branch.
2. Push to GitHub.
3. GitHub Pages serves the updated site at [https://rohit1204.github.io](https://rohit1204.github.io).

No build command is required.

## SEO and Accessibility

The portfolio includes:

- SEO title, description, and keywords
- Open Graph metadata
- Twitter Card metadata
- JSON-LD structured data
- Semantic section labels
- ARIA labels for important links
- Responsive layouts for mobile, tablet, and desktop
- Color contrast improvements for better readability

## Content Highlights

- 5+ years of professional software engineering experience
- Backend, DevOps, cloud, and applied AI positioning
- NatWest DevOps and AI engineering work
- MongoDB Atlas infrastructure ownership
- AWS ECS, Terraform, GitLab CI/CD, and auto-scaling experience
- OpenAI, Google Gemini, LangChain, and AI agent platform experience
- Medium technical writing section
- Patent, Terraform certification, and performance awards

## Maintenance Checklist

Before publishing changes:

- Verify the site locally with `python3 -m http.server 8000`.
- Check mobile navbar behavior.
- Confirm internal anchor links still work.
- Confirm `resume.html` and PDF resume links still open.
- Confirm image paths load correctly on a case-sensitive host.
- Bump CSS/JS query-string versions after visual changes.
- Avoid moving root files unless GitHub Pages paths are updated.

## Contact

Rohit Ahuja  
Software Development Engineer

- Website: [https://rohit1204.github.io](https://rohit1204.github.io)
- LinkedIn: [linkedin.com/in/rohit1204](https://www.linkedin.com/in/rohit1204)
- GitHub: [github.com/Rohit1204](https://github.com/Rohit1204)
- Medium: [medium.com/@rohitahuja725](https://medium.com/@rohitahuja725)
- Email: [rohitahuja725@gmail.com](mailto:rohitahuja725@gmail.com)

## License

This is a personal portfolio project. Add a `LICENSE` file before reusing or distributing the code as an open-source template.
