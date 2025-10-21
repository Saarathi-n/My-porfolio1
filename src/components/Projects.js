import React from 'react';

const Projects = () => {
  return (
    <section className="section">
      <h2>Projects</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <div className="card">
          <h3>E-Commerce Platform</h3>
          <p>Developed a full-stack e-commerce web application with React, Node.js, Express, and MongoDB. Features include user authentication, product filtering, cart management, and secure payment integration using Stripe. Optimized for performance with lazy loading and caching.</p>
        </div>
        <div className="card">
          <h3>Task Management App</h3>
          <p>Built a collaborative task management system using React, TypeScript, Node.js, and PostgreSQL. Implemented real-time updates with WebSockets, role-based access control, and a responsive UI. Deployed on AWS with CI/CD pipelines for seamless updates.</p>
        </div>
        <div className="card">
          <h3>Social Media Dashboard</h3>
          <p>Created a dashboard for social media analytics using React, Node.js, and MySQL. Integrated APIs to fetch real-time data from platforms like Twitter and Instagram, with interactive charts built using Chart.js. Focused on a sleek, user-friendly design.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;