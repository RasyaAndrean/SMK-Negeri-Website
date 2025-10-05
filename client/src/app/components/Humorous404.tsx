// Humorous404.tsx - A fun 404 page with humorous elements
export default function Humorous404() {
  return `
    <div style="font-family: Arial, sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); padding: 20px; text-align: center;">
      <div style="max-width: 800px; background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 40px; margin: 20px;">
        <div style="font-size: 3rem; margin-bottom: 20px; animation: bounce 1s infinite;">🤔</div>
        <h1 style="font-size: 3rem; font-weight: bold; color: #dc3545; margin-bottom: 20px;">404 - Page Not Found!</h1>

        <div style="font-size: 8rem; margin: 30px 0; animation: spin 3s linear infinite;">🌀</div>

        <p style="font-size: 1.5rem; color: #666; margin-bottom: 30px; line-height: 1.6;">
          Oops! It seems you've wandered into uncharted territory.
          Our digital explorers are still mapping this area!
        </p>

        <div style="background: linear-gradient(135deg, #fff3f3, #ffd6d6); border-radius: 12px; padding: 25px; margin: 30px 0;">
          <h3 style="color: #dc3545; margin-bottom: 15px;">Possible Reasons:</h3>
          <ul style="list-style: none; padding: 0; text-align: left; max-width: 500px; margin: 0 auto;">
            <li style="display: flex; align-items: flex-start; margin-bottom: 15px;">
              <div style="width: 25px; height: 25px; background-color: #dc3545; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.8rem; margin-right: 12px; flex-shrink: 0;">1</div>
              <span>The page is taking a coffee break ☕</span>
            </li>
            <li style="display: flex; align-items: flex-start; margin-bottom: 15px;">
              <div style="width: 25px; height: 25px; background-color: #dc3545; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.8rem; margin-right: 12px; flex-shrink: 0;">2</div>
              <span>This page is in another castle 🏰</span>
            </li>
            <li style="display: flex; align-items: flex-start; margin-bottom: 15px;">
              <div style="width: 25px; height: 25px; background-color: #dc3545; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.8rem; margin-right: 12px; flex-shrink: 0;">3</div>
              <span>Our hamsters lost the map 🐹</span>
            </li>
            <li style="display: flex; align-items: flex-start;">
              <div style="width: 25px; height: 25px; background-color: #dc3545; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.8rem; margin-right: 12px; flex-shrink: 0;">4</div>
              <span>This page is classified information 🕵️</span>
            </li>
          </ul>
        </div>

        <div style="display: flex; flex-wrap: wrap; gap: 15px; justify-content: center; margin: 30px 0;">
          <button onclick="window.location.href='/'" style="background: linear-gradient(135deg, #007bff, #00d4ff); color: white; font-weight: bold; padding: 15px 30px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.1rem; transition: transform 0.2s; display: flex; align-items: center; gap: 10px;">
            🏠 Go Home
          </button>
          <button onclick="window.history.back()" style="background: linear-gradient(135deg, #28a745, #20c997); color: white; font-weight: bold; padding: 15px 30px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.1rem; transition: transform 0.2s; display: flex; align-items: center; gap: 10px;">
            ↩️ Go Back
          </button>
          <button onclick="window.location.href='/support'" style="background: linear-gradient(135deg, #ffc107, #ff9800); color: #212529; font-weight: bold; padding: 15px 30px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.1rem; transition: transform 0.2s; display: flex; align-items: center; gap: 10px;">
            🆘 Get Help
          </button>
        </div>

        <div style="background-color: #e9ecef; border-radius: 8px; padding: 25px; margin-top: 30px;">
          <p style="font-style: italic; color: #666; margin: 0; font-size: 1.1rem;">
            "Don't worry, even the best developers get lost sometimes!
            Our team of highly trained monkeys has been dispatched to fix this...
            They're probably playing video games right now, but they'll get to it eventually!"
          </p>
        </div>
      </div>

      <style>
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 2rem;
          }

          .emoji {
            font-size: 5rem;
          }

          p {
            font-size: 1.2rem;
          }
        }
      </style>
    </div>
  `;
}
