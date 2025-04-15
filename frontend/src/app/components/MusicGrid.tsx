import styles from './MusicGrid.module.css';
import React from 'react';

interface MusicGridProps {
  children: React.ReactNode;
}

const MusicGrid: React.FC<MusicGridProps> = ({ children }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', // Creates two columns, each taking equal space
    gap: '1x', // Adds spacing between grid items (adjust as needed)
    width: '100%', // Ensure the grid takes up the full width of its container
    maxWidth: '800px', // Optional: Limit the maximum width of the grid
    margin: '0 auto', // Optional: Center the grid horizontally
  }}>
    {children}
  </div>
);

export default MusicGrid;