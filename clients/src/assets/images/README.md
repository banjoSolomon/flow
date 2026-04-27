# Images Folder

Place your image assets here.

## How to Use Images in React

### Method 1: Import from src/assets (Recommended for small projects)
```jsx
import logoImage from '../assets/images/logo.png'

<img src={logoImage} alt="Logo" className="logo-icon-img" />
```

### Method 2: Use public folder (Recommended for large files)
1. Place image in `public/` folder (e.g., `public/logo.png`)
2. Reference directly:
```jsx
<img src="/logo.png" alt="Logo" className="logo-icon-img" />
```

### Method 3: Use external URL
```jsx
<img src="https://example.com/logo.png" alt="Logo" className="logo-icon-img" />
```

## Supported Image Formats
- PNG (.png)
- JPG/JPEG (.jpg, .jpeg)
- SVG (.svg)
- WebP (.webp)
- GIF (.gif)

## Recommended Logo Sizes
- Navbar logo: 40x40px to 60x60px
- Favicon: 32x32px or 64x64px
- Hero images: 1200x800px or larger
- Icons: 24x24px, 32x32px, 48x48px

## Example File Structure
```
src/
  assets/
    images/
      logo.png          (navbar logo)
      logo-white.png    (footer logo)
      hero-bg.jpg       (hero background)
      icon-feature1.svg (feature icons)
```
