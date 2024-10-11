// import React from 'react';
import { P5Wrapper } from 'react-p5';

const CircleGrid = () => {
  const n = 10;  // Number of rows and columns
  const circleSize = 20;  // Diameter of each circle
  const spacing = 40;  // Spacing between circles
  const noiseScale = 0.1;  // Scale factor for Perlin noise

  const sketch = (p) => {
    p.setup = () => {
      p.createCanvas(400, 400, p.WEBGL);  // Adjust canvas size as needed
      p.camera(0, 0, (n * spacing) * 1.5);  // Position the camera further back
    };

    p.draw = () => {
      p.background(0);
      p.orbitControl();  // Enable interactive control of the camera with mouse/touch gestures

      const time = p.millis() * 0.0005;  // Time variable for animation
      const centerX = (n * spacing) / 2 - spacing / 2;  // Center X position
      const centerY = (n * spacing) / 2 - spacing / 2;  // Center Y position

      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          const x = i * spacing - centerX;  // Center X position
          const y = j * spacing - centerY;  // Center Y position

          const noiseVal = p.noise(i * noiseScale, j * noiseScale, time);
          const h = p.map(noiseVal, 0, 1, 50, 300);  // Map noise value to height

          const r = p.map(p.noise(i * noiseScale, j * noiseScale + 10, time), 0, 1, 50, 255);
          const g = p.map(p.noise(i * noiseScale + 20, j * noiseScale + 10, time), 0, 1, 50, 255);
          const b = p.map(p.noise(i * noiseScale + 40, j * noiseScale + 20, time), 0, 1, 50, 255);

          p.fill(r + h / 2, g + h / 2, b + h / 2);  // Set fill color based on noise
          p.strokeWeight(0.5);
          p.push();
          p.translate(x, y, h / 2);  // Move to the grid position, with height for 3D effect
          p.rotateX(p.HALF_PI);  // Rotate to draw in the correct orientation
          p.cylinder(circleSize / 2, h);  // Draw the cylinder to represent a circle
          p.pop();
        }
      }
    };
  };

  return (
    < P5Wrapper sketch={sketch} />
  );
};

export default CircleGrid;
