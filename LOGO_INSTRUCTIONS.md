# 🎨 How to Add Your Frutea Logo

## Current Status

I've created a temporary SVG logo based on your design. To use your actual logo image:

## Option 1: Replace the SVG (Recommended for PNG/JPG)

1. **Save your logo file** as one of these names:
   - `frutea-logo.png` (preferred)
   - `frutea-logo.jpg`
   - `frutea-logo.svg`

2. **Copy it to the project:**
   ```bash
   cp /path/to/your/logo.png "/Users/ephraimnakireru/Documents/Frutea landing page/public/images/frutea-logo.png"
   ```

3. **Update the Navigation component** if needed (already set to use the logo)

## Option 2: Quick Copy Command

If your logo is on Desktop:
```bash
cp ~/Desktop/your-logo-filename.png "/Users/ephraimnakireru/Documents/Frutea landing page/public/images/frutea-logo.png"
```

If your logo is in Downloads:
```bash
cp ~/Downloads/your-logo-filename.png "/Users/ephraimnakireru/Documents/Frutea landing page/public/images/frutea-logo.png"
```

## Logo Specifications

For best results, your logo should be:
- **Format**: PNG with transparency (preferred) or SVG
- **Size**: At least 200x200px (will be scaled automatically)
- **Aspect Ratio**: Square or close to square works best
- **File Size**: Under 100KB recommended

## Where the Logo Appears

Your logo is displayed in:
1. **Navigation bar** - Top left on all pages (50px height)
2. **Footer** - Bottom of all pages (60px height)

## Current Logo Files

- `public/images/frutea-logo.svg` - Temporary SVG placeholder
- Create: `public/images/frutea-logo.png` - Your actual logo (preferred)

## Testing

After adding your logo:
1. Refresh the browser (Cmd+Shift+R)
2. Check the navigation bar
3. Scroll to footer to verify

The website will automatically use whichever logo file you provide!

