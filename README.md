# RecLora - Rec Room Revival Community Website

Welcome to RecLora! A vibrant community dedicated to reviving the legacy of Rec Room and bringing gamers together.

## 🎮 Features

- **Modern, Responsive Design** - Beautiful website inspired by Recquiem with a sleek dark theme
- **Vibrant Branding** - Features the RecLora logo with gradient blue-to-pink colors
- **Community Sections** - Showcase weekly events, tournaments, and community activities
- **Contact Form** - Easy way for visitors to get in touch
- **Mobile Optimized** - Fully responsive across all devices

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/WawaTer-exe/RecLora-New-Site.git
cd RecLora-New-Site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the site!

## 📁 Project Structure

```
├── components/          # React components
│   ├── Navbar.js       # Navigation bar
│   ├── Hero.js         # Hero section with logo
│   ├── About.js        # About RecLora section
│   ├── Community.js    # Community activities section
│   ├── Contact.js      # Contact form section
│   └── Footer.js       # Footer
├── pages/
│   ├── _app.js        # Next.js app wrapper
│   └── index.js       # Home page
├── styles/
│   └── globals.css    # Global styles
├── tailwind.config.js  # Tailwind CSS configuration
└── next.config.js      # Next.js configuration
```

## 🎨 Customization

### Adding Your Logo
Replace the SVG logo in `components/Hero.js` with your own logo image:

```jsx
<Image
  src="/path/to/your/logo.png"
  alt="RecLora Logo"
  width={200}
  height={200}
/>
```

### Updating Colors
Edit `tailwind.config.js` to customize the RecLora blue and pink gradient:

```js
colors: {
  'reclora-blue': '#5B4FFF',
  'reclora-pink': '#FF1E7E',
}
```

### Adding Social Links
Update the social media links in `components/Footer.js` and `components/Contact.js`

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and select your repository
4. Click "Deploy"

Your site will be live in minutes!

### Other Hosting Options
- Netlify
- GitHub Pages
- Your own server

## 📝 Content Updates

### Update Navigation Links
Edit the links in `components/Navbar.js`

### Update Hero Section
Modify text and buttons in `components/Hero.js`

### Update Community Events
Add/edit activities in `components/Community.js`

### Update Contact Form
The form is in `components/Contact.js` - connect it to your email service

## 🤝 Contributing

We'd love to have you contribute! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests
- Share improvements

## 📞 Contact

- Discord: [Your Discord Server]
- Email: contact@reclora.com
- Twitter: [@RecLora]

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎯 Next Steps

1. Replace the SVG logo with your actual RecLora logo
2. Update social media links
3. Connect the contact form to your email service
4. Add your Discord server link
5. Deploy to Vercel or your hosting platform

---

**RecLora - Reviving the Legend, Building the Community** 🚀
