import React, { useEffect, useState } from 'react';

const Petals = () => {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    // Generate an array of petals with random properties
    const petalArray = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // random start position 0-100vw
      animationDuration: Math.random() * 5 + 5, // 5s to 10s
      animationDelay: Math.random() * 5, // 0 to 5s delay
      size: Math.random() * 10 + 10, // 10px to 20px
    }));
    setPetals(petalArray);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="petal"
          style={{
            left: `${petal.left}vw`,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            animation: `petal-fall ${petal.animationDuration}s linear ${petal.animationDelay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default Petals;
