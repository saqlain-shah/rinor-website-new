export const theme = {
  colors: {
    primary: {
      darkest: '#0B1437',  // Very dark blue for main background
      dark: '#1E2A4A',     // Dark blue for cards
      main: '#2A3B63',     // Primary blue
      light: '#3D4F7C',    // Lighter blue for accents
      lightest: '#526491'  // Lightest blue for hover states
    },
    accent: {
      main: '#4CAF50',     // Green accent
      light: '#81C784',    // Light green
      dark: '#388E3C'      // Dark green
    },

    text: {
      primary: '#FFFFFF',
      secondary: '#CBD5E1',
      muted: '#94A3B8',
      accent: '#4CAF50'    // Updated to green accent
    },
    background: {
      card: 'rgba(30, 42, 74, 0.8)',
      overlay: 'rgba(11, 20, 55, 0.9)',
      glass: 'rgba(30, 42, 74, 0.3)'
    },
    border: {
      primary: '#2A3B63',
      accent: '#4CAF50',   // Updated to green accent
      muted: 'rgba(203, 213, 225, 0.1)'
    }
  },
  shadows: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.1)',
    inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.05)'
  },
  gradients: {
    background: 'linear-gradient(180deg, #0B1437 0%, #1E2A4A 100%)',
    card: 'linear-gradient(180deg, rgba(30, 42, 74, 0.8) 0%, rgba(42, 59, 99, 0.8) 100%)',
    accent: 'linear-gradient(45deg, #4CAF50 0%, #81C784 100%)',  // Updated to green
    glass: 'linear-gradient(180deg, rgba(30, 42, 74, 0.3) 0%, rgba(42, 59, 99, 0.2) 100%)'
  }
};

export const whatsappNumber = '+92 340 0596665';
export const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\s+/g, '')}`;

export const buttonStyles = {
  primary: `
    bg-accent-main hover:bg-accent-light
    text-primary-darkest font-semibold
    px-6 py-3 rounded-lg
    transform transition-all duration-300
    hover:shadow-lg hover:-translate-y-0.5
    focus:outline-none focus:ring-2 focus:ring-accent-light focus:ring-opacity-50
  `,
  secondary: `
    border-2 border-accent-main
    text-accent-main hover:text-primary-darkest
    hover:bg-accent-main
    px-6 py-3 rounded-lg
    transform transition-all duration-300
    hover:shadow-lg hover:-translate-y-0.5
    focus:outline-none focus:ring-2 focus:ring-accent-light focus:ring-opacity-50
  `,
  text: `
    text-text-accent hover:text-accent-light
    font-medium
    transition-colors duration-300
    focus:outline-none
  `,
  icon: `
    text-text-accent hover:text-accent-light
    transition-colors duration-300
    focus:outline-none
  `
};

export const cardStyles = {
  base: `
    bg-background-card
    backdrop-blur-md
    border border-border-muted
    rounded-xl
    shadow-lg
    transition-all duration-300
  `,
  hover: `
    hover:border-accent-main
    hover:shadow-xl
    hover:transform hover:-translate-y-1
  `,
  glass: `
    bg-background-glass
    backdrop-blur-lg
    border border-border-muted
    rounded-xl
    shadow-md
  `
};

export const textStyles = {
  h1: `
    font-bold
    text-4xl md:text-5xl lg:text-6xl
    text-text-primary
    leading-tight
    tracking-tight
  `,
  h2: `
    font-bold
    text-3xl md:text-4xl
    text-text-primary
    leading-tight
  `,
  h3: `
    font-semibold
    text-2xl md:text-3xl
    text-text-primary
    leading-snug
  `,
  h4: `
    font-semibold
    text-xl md:text-2xl
    text-text-primary
    leading-snug
  `,
  subtitle: `
    font-medium
    text-lg md:text-xl
    text-text-secondary
    leading-relaxed
  `,
  body: `
    text-text-secondary
    leading-relaxed
  `,
  caption: `
    text-sm
    text-text-muted
    leading-normal
  `,
  accent: `
    text-text-accent
    font-medium
  `
};

export const containerStyles = {
  section: `
    max-w-7xl
    mx-auto
    px-4 sm:px-6 lg:px-8
    py-12 md:py-16 lg:py-20
  `,
  content: `
    max-w-3xl
    mx-auto
    px-4 sm:px-6
  `
};

export const layoutStyles = {
  grid: `
    grid
    gap-6 md:gap-8 lg:gap-10
  `,
  flexCenter: `
    flex
    items-center
    justify-center
  `,
  flexBetween: `
    flex
    items-center
    justify-between
  `
};
