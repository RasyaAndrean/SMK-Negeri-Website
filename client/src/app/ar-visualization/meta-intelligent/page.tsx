'use client';

import MetaIntelligentARVisualization from '../../components/MetaIntelligentARVisualization';

export default function MetaIntelligentARVisualizationPage() {
  // Render the meta-intelligent AR visualization component
  const metaIntelligentARVisualization = MetaIntelligentARVisualization();

  // Add a header with documentation link
  const header = `
    <div style="background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); padding: 20px; border-radius: 12px; margin-bottom: 30px; color: white; text-align: center;">
      <h1 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 15px;">🌌 Meta-Intelligent AR Visualization</h1>
      <p style="font-size: 1.2rem; margin-bottom: 20px; opacity: 0.9;">Quantum-conscious visualization with collective intelligence integration</p>
      <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
        <a href="/docs/ar-visualization/meta-intelligent" style="background: rgba(255, 255, 255, 0.2); color: white; font-weight: bold; padding: 12px 25px; border: 2px solid white; border-radius: 8px; cursor: pointer; font-size: 1rem; text-decoration: none; transition: background 0.3s;">
          📘 View Documentation
        </a>
        <a href="/ar-visualization" style="background: rgba(255, 255, 255, 0.2); color: white; font-weight: bold; padding: 12px 25px; border: 2px solid white; border-radius: 8px; cursor: pointer; font-size: 1rem; text-decoration: none; transition: background 0.3s;">
          ← Back to AR Hub
        </a>
      </div>
    </div>
  `;

  // Combine header with the component
  return `
    <div style="font-family: Arial, sans-serif; padding: 20px; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); min-height: 100vh;">
      <div style="max-width: 1200px; margin: 0 auto;">
        ${header}
        ${metaIntelligentARVisualization}
      </div>
    </div>
  `;
}
