// CrossPlatformNav.tsx - A responsive navigation component for all devices
export default function CrossPlatformNav() {
  return `
    <nav style="background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); padding: 15px 20px; border-radius: 12px; margin-bottom: 30px;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <div style="width: 40px; height: 40px; background-color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; color: #6a11cb; font-size: 1.2rem;">🎓</div>
          <h1 style="color: white; font-size: 1.5rem; font-weight: bold; margin: 0;">SMK Negeri</h1>
        </div>

        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <a href="/" style="background-color: rgba(255, 255, 255, 0.2); color: white; padding: 10px 20px; border-radius: 30px; text-decoration: none; font-weight: bold; transition: background-color 0.3s;">🏠 Home</a>
          <a href="/collaborations" style="background-color: rgba(255, 255, 255, 0.2); color: white; padding: 10px 20px; border-radius: 30px; text-decoration: none; font-weight: bold; transition: background-color 0.3s;">👥 Collaborations</a>
          <a href="/ar-visualization" style="background-color: rgba(255, 255, 255, 0.2); color: white; padding: 10px 20px; border-radius: 30px; text-decoration: none; font-weight: bold; transition: background-color 0.3s;">🔮 AR Visualization</a>
          <a href="/ai-recommendations" style="background-color: rgba(255, 255, 255, 0.2); color: white; padding: 10px 20px; border-radius: 30px; text-decoration: none; font-weight: bold; transition: background-color 0.3s;">🤖 AI Recommendations</a>
          <button style="background: linear-gradient(135deg, #ff9a9e, #fad0c4); color: #333; padding: 10px 20px; border: none; border-radius: 30px; font-weight: bold; cursor: pointer; transition: transform 0.2s;">🔑 Login</button>
        </div>
      </div>

      <!-- Mobile menu button (hidden on desktop) -->
      <div style="display: none; margin-top: 15px;">
        <button style="background-color: white; color: #6a11cb; padding: 12px 20px; border: none; border-radius: 8px; font-weight: bold; width: 100%;">
          ☰ Menu
        </button>
      </div>

      <!-- Mobile menu (hidden by default) -->
      <div style="display: none; margin-top: 15px; background-color: rgba(255, 255, 255, 0.9); border-radius: 12px; padding: 20px;">
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <a href="/" style="color: #6a11cb; padding: 12px; border-radius: 8px; text-decoration: none; font-weight: bold; background-color: rgba(106, 17, 203, 0.1);">🏠 Home</a>
          <a href="/collaborations" style="color: #6a11cb; padding: 12px; border-radius: 8px; text-decoration: none; font-weight: bold; background-color: rgba(106, 17, 203, 0.1);">👥 Collaborations</a>
          <a href="/ar-visualization" style="color: #6a11cb; padding: 12px; border-radius: 8px; text-decoration: none; font-weight: bold; background-color: rgba(106, 17, 203, 0.1);">🔮 AR Visualization</a>
          <a href="/ai-recommendations" style="color: #6a11cb; padding: 12px; border-radius: 8px; text-decoration: none; font-weight: bold; background-color: rgba(106, 17, 203, 0.1);">🤖 AI Recommendations</a>
          <button style="background: linear-gradient(135deg, #6a11cb, #2575fc); color: white; padding: 12px; border: none; border-radius: 8px; font-weight: bold; cursor: pointer;">🔑 Login</button>
        </div>
      </div>

      <style>
        @media (max-width: 768px) {
          nav > div:first-child {
            flex-direction: column;
            align-items: flex-start;
          }

          nav > div:first-child > div:last-child {
            width: 100%;
            justify-content: center;
          }

          nav > div:first-child > div:last-child > a,
          nav > div:first-child > div:last-child > button {
            padding: 8px 15px;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          nav > div:first-child > div:last-child {
            display: none;
          }

          nav > div:nth-child(2) {
            display: block !important;
          }
        }
      </style>
    </nav>
  `;
}
