# React + TailwindCss App

A modern and responsive landing page built with React.js and Tailwind CSS. The project features a sleek design with interactive components such as a header, footer, feature sections, testimonials, and social media links.

## Features

- **Fully Responsive Design**: Adapts seamlessly to all screen sizes.
- **Smooth Scrolling Navigation**: Users can navigate to different sections easily.
- **Interactive UI Components**: Includes buttons, testimonials, and feature boxes.
- **Social Media Links**: Connects to popular platforms like LinkedIn, Facebook, Twitter, and Instagram.
- **Dark Theme**: Styled with a professional dark color scheme.

## Technologies Used

- **React.js**: JavaScript library for building UI components.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Icons**: For adding scalable vector icons.
- **PropTypes**: Type checking for React components.

## Project Structure

```
/project-root
│── src
│   ├── assets
│   │   ├── images (logo, icons, testimonials, etc.)
│   ├── Components
│   │   ├── Button.jsx
│   │   ├── FeatureBox.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── TestimonialBox.jsx
│   ├── Pages
│   │   ├── Home.jsx
│   │   ├── Features.jsx
│   │   ├── GetStarted.jsx
│   │   ├── Testimonials.jsx
│   │   ├── StayProductive.jsx
│   ├── App.jsx
│   ├── index.jsx
│── public
│── package.json
│── tailwind.config.js
│── README.md
```

## Installation & Setup

To run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd your-repo
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Run the development server**:
   ```bash
   npm run dev
   ```
5. Open `http://localhost:3000` in your browser.

## Deployment

The project can be deployed using GitHub Pages:

### Deploy on GitHub Pages
1. Install `gh-pages`:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Add the following scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run:
   ```bash
   npm run deploy
   ```

## Author

**Eng. Abdelaziz Mohamed**

- [LinkedIn](https://www.linkedin.com/in/abdelaziz)
- [GitHub](https://github.com/Abdelaziz-Mohammed)

