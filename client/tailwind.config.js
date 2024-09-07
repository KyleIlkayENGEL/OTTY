module.exports = {
  content: [
    './src/components/Navbar/Navbar.js', // Adjust according to your project structure
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': '#2E6F40',
        'orange-light': '#FFAF6E',
        'orange-medium': '#FFCC80',
        'yellow-light': '#FFE2A6',
        'green-light': '#BCC07B',
        'green-lighter': '#DBE098',
        'black': '#000000',
        'white': '#FFFFFF',
}
        // Add other custom colors if needed
      },
    
    },
  };
  plugins: [
    require('@tailwindcss/typography')
  ];
