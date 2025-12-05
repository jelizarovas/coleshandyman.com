# ColesHandyman.com

A modern, responsive contractor website for **Cole’s Handyman Services**, showcasing services, gallery, contact form, and emergency response options.  
Live Site: **https://coleshandyman.com/**

![React](https://img.shields.io/badge/React-17.0.2-61DAFB?logo=react&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-38B2AC?logo=tailwindcss&logoColor=white)
![EmailJS](https://img.shields.io/badge/EmailJS-Enabled-blue)
![SendGrid](https://img.shields.io/badge/SendGrid-Email%20Delivery-0ab2ff?logo=sendgrid)
![GitHub Pages](https://img.shields.io/badge/Hosting-GitHub%20Pages-181717?logo=github)

---

## 🚀 Overview

**ColesHandyman.com** is a static React application built to support a full-service contractor offering:

- Commercial, industrial, and residential services
- Emergency response (24/7)
- Photo gallery to showcase past work
- Client inquiries through EmailJS + SendGrid
- Clean, mobile-optimized UI
- Zero backend required

Built for speed, reliability, and simple deployment using GitHub Pages.

---

## 🧰 Tech Stack

| Technology              | Purpose                       |
| ----------------------- | ----------------------------- |
| **React.js**            | Front-end framework           |
| **TailwindCSS**         | UI styling and layout         |
| **EmailJS**             | Client-side email handling    |
| **SendGrid**            | Transactional email delivery  |
| **React Photo Gallery** | Responsive gallery            |
| **Headless UI**         | UI primitives                 |
| **GitHub Pages**        | Static hosting and deployment |

---

## 📦 Project Setup

### Install dependencies

```
npm install
```

Start development

```
npm start
```

Build for production

```
npm run build
```

Deploy to GitHub Pages

```
npm run deploy
```

The site is deployed using the gh-pages branch.

### 🔑 Environment Variables
Create a .env file for EmailJS:

```
REACT_APP_EMAILJS_SERVICE_ID=xxxx
REACT_APP_EMAILJS_TEMPLATE_ID=xxxx
REACT_APP_EMAILJS_PUBLIC_KEY=xxxx
```

### 📁 Project Structure

```

src/
├── components/ # Forms, navigation, gallery components
├── pages/ # Home, Services, Contact, FAQ
├── styles/ # Tailwind + custom styles
├── utils/ # Email handling, helpers
└── index.js # App entry point
```

### 🧩 Core Content
#### About Cole
Cole has been a licensed contractor since 1978, driven by a lifelong passion for repairing and improving homes and businesses. He offers:

- Lifetime workmanship guarantee
- Community-focused service
- Full-range handyman and restoration capabilities

### 🛠 Services
#### Emergency Response
Storm, wind, smoke, water, roof, structural damage.

#### Carpentry
Drywall, cabinets, flooring, windows/doors, framing, tile.

#### Electrical
Lighting, outlets, fans, alarms, cable/phone lines, motion sensors.

#### Plumbing
Bathrooms, kitchens, valves, water heaters, fixtures.

#### Mold Remediation
Containment, air scrubbing, moisture detection, rebuild, deep clean.

Full services and gallery can be viewed on the site.

### ❓ FAQ
#### Refund Policy
Full refunds within 90 days. No questions asked.

#### Technical Support
Not applicable; site is informational.

### 📬 Contact
Phone: (609) 417-0688

Email: dave@coleshandyman.com

Hours: 9am–5pm (Regular), 24/7 Emergencies

Service Area: Listed on website

© 2022–2025 jelizarovas.com

### ⭐ Want to Improve This Project?
Contributions, issues, and feature requests are welcome.
Feel free to submit a PR or open an issue.
