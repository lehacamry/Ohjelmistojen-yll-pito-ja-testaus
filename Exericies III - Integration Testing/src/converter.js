// converter.js

// function to convert hex color to RGB
function hexToRgb(hex) {
  hex = hex.replace(/^#/, ''); // Remove the leading '#' if present
    if (hex.length !== 6) {
    throw new Error('Invalid hex color format');
  }
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return { r, g, b };
}
module.exports = { hexToRgb };