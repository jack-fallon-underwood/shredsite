//app/worlds/page.tsx

'use client';
import React, { useEffect, useRef, useState } from 'react';

const WorldPage = () => {
  const images = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'];
  const canvasRefs = useRef<(HTMLCanvasElement | null)[]>([]);
  const [isRevealed, setIsRevealed] = useState<boolean[]>(Array(images.length).fill(false));

  useEffect(() => {
    const scratch = (canvas: HTMLCanvasElement | null, imageSrc: string, index:number) => {
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const img = new Image();
      img.src = imageSrc;
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;

        // Draw the image on the canvas
        ctx.drawImage(img, 0, 0);

        // Apply a mask (e.g., a solid color)
        ctx.fillStyle = 'rgba(200, 200, 200, 1)'; // Light gray mask
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Set up compositing (this is the key for the scratch effect)
        ctx.globalCompositeOperation = 'destination-out';

        let scratching = false;
        const scratchSize = 30; // Size of the "scratch" area

        const handleMove = (x: number, y: number) => {
          if (!scratching) return;
          ctx.beginPath();
          ctx.arc(x, y, scratchSize, 0, 2 * Math.PI);
          ctx.fill();
        };

        const handleTouchStart = (e: TouchEvent) => {
          e.preventDefault(); // Prevent scrolling
          scratching = true;
          const rect = canvas.getBoundingClientRect();
          const touchX = e.touches[0].clientX - rect.left;
          const touchY = e.touches[0].clientY - rect.top;
          handleMove(touchX, touchY);
        };

        const handleMouseDown = (e: MouseEvent) => {
          scratching = true;
          const rect = canvas.getBoundingClientRect();
          const mouseX = e.clientX - rect.left;
          const mouseY = e.clientY - rect.top;
          handleMove(mouseX, mouseY);
        };

        const handleMouseMove = (e: MouseEvent | TouchEvent) => {
          if (e instanceof MouseEvent) {
              const rect = canvas.getBoundingClientRect();
              const mouseX = e.clientX - rect.left;
              const mouseY = e.clientY - rect.top;
              handleMove(mouseX, mouseY);
          } else {
              const rect = canvas.getBoundingClientRect();
              const touchX = e.touches[0].clientX - rect.left;
              const touchY = e.touches[0].clientY - rect.top;
              handleMove(touchX, touchY);
          }
        };

        const handleEnd = () => {
          scratching = false;
          // Check if enough has been revealed to auto-reveal
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const pixelData = imageData.data;
          let transparentPixels = 0;
          for (let i = 0; i < pixelData.length; i += 4) {
            if (pixelData[i + 3] === 0) { // Alpha channel is 0 (transparent)
              transparentPixels++;
            }
          }
          const totalPixels = canvas.width * canvas.height;
          const transparencyRatio = transparentPixels / totalPixels;
          if (transparencyRatio > 0.6) { // Adjust this threshold as needed (e.g., 0.6 for 60%)
            setIsRevealed(prev => {
                const updated = [...prev];
                updated[index] = true;
                return updated;
            });
          }
        };

        canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
        canvas.addEventListener('mousedown', handleMouseDown);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('touchmove', handleMouseMove, { passive: false });
        canvas.addEventListener('mouseup', handleEnd);
        canvas.addEventListener('touchend', handleEnd);
        canvas.addEventListener('mouseleave', handleEnd);

        // Initial reveal check.
        if(isRevealed[index]){
          ctx.clearRect(0,0, canvas.width, canvas.height);
        }

        return () => {
          canvas.removeEventListener('touchstart', handleTouchStart);
          canvas.removeEventListener('mousedown', handleMouseDown);
          canvas.removeEventListener('mousemove', handleMouseMove);
          canvas.removeEventListener('touchmove', handleMouseMove);
          canvas.removeEventListener('mouseup', handleEnd);
          canvas.removeEventListener('touchend', handleEnd);
          canvas.removeEventListener('mouseleave', handleEnd);
        };
      };
    };

    images.forEach((imageSrc, index) => {
      scratch(canvasRefs.current[index], `/${imageSrc}`, index);
    });
  }, [images]);

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', padding: '20px', textAlign: 'center' }}>
      <h1 style={{ marginBottom: '20px' }}>Image Showcase</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {images.map((img, index) => (
          <div key={index} style={{position: 'relative'}}>
            {!isRevealed[index] && (
              <canvas
                ref={el => canvasRefs.current[index] = el}
                style={{
                  maxWidth: '200px',
                  height: 'auto',
                  border: '2px solid white',
                  borderRadius: '8px',
                  cursor: 'pointer', // Indicate interactivity
                }}
              />
            )}
            {isRevealed[index] && (
              <img
                src={`/${img}`}
                alt={`Image ${index + 1}`}
                style={{
                  maxWidth: '200px',
                  height: 'auto',
                  border: '2px solid white',
                  borderRadius: '8px',
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorldPage;
