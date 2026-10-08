# Muhammet Gökmen · Portfolio

Personal portfolio website, live at **https://muhammet-gokmen.github.io**

DevOps Engineer student (YH) at Lernia with hands-on experience as a DevOps / infrastructure engineer at Clarusway.
Certified **CKA**, **CKAD**, **HashiCorp Terraform Associate** and **AWS Solutions Architect – Associate**.
Looking for an internship (LIA) **11 Jan – 30 Apr 2027**.

## About the site

- Single-page site: Home, Experience, Projects, Education & Certifications, Skills, Contact
- Three languages: Swedish (default), English and Turkish
- Dark and light theme, remembered between visits
- Responsive layout for desktop and mobile
- Downloadable CV ([Muhammet_Gokmen_CV.pdf](Muhammet_Gokmen_CV.pdf))

## Tech

Plain HTML, CSS and JavaScript. No framework and no build step. Hosted on GitHub Pages.

| File | Purpose |
| --- | --- |
| `index.html` | Page content in all three languages |
| `style.css` | Layout, colours and dark/light theme |
| `script.js` | Language switch, theme toggle, mobile menu |
| `Muhammet_Gokmen_CV.pdf` | CV for download |

## Run locally

```bash
git clone https://github.com/Muhammet-Gokmen/Muhammet-Gokmen.github.io.git
cd Muhammet-Gokmen.github.io
python3 -m http.server 8000   # then open http://localhost:8000
```

## Editing content

Every text exists in three versions marked with `data-l="sv"`, `data-l="en"` and `data-l="tr"` in `index.html`; only the selected language is shown.
To add a profile photo, put an image named `photo.jpg` in the root folder and it replaces the "MG" initials.

## Contact

- Email: muhammetgokmen@gmail.com
- LinkedIn: [linkedin.com/in/muhammet-gokmen](https://linkedin.com/in/muhammet-gokmen)
- GitHub: [github.com/Muhammet-Gokmen](https://github.com/Muhammet-Gokmen)
