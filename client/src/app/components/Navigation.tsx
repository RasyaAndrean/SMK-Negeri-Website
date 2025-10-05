// Simple navigation component without JSX
export default function Navigation() {
  return `
    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3 style="margin-bottom: 15px; color: #333;">Advanced Features</h3>
      <div style="display: flex; flex-wrap: wrap; gap: 10px;">
        <a href="/collaborations" style="background-color: #007bff; color: white; padding: 10px 15px; border-radius: 5px; text-decoration: none; font-weight: bold;">Collaborations</a>
        <a href="/ar-visualization" style="background-color: #28a745; color: white; padding: 10px 15px; border-radius: 5px; text-decoration: none; font-weight: bold;">AR Visualization</a>
        <a href="/ai-recommendations" style="background-color: #6f42c1; color: white; padding: 10px 15px; border-radius: 5px; text-decoration: none; font-weight: bold;">AI Recommendations</a>
      </div>
    </div>
  `;
}
