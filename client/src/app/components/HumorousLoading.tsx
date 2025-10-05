// HumorousLoading.tsx - A fun loading component with animations
export default function HumorousLoading() {
  return `
    <div style="font-family: Arial, sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 400px; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); border-radius: 12px; padding: 30px; text-align: center;">
      <div style="font-size: 4rem; margin-bottom: 20px; animation: bounce 1s infinite;">🤖</div>
      <h2 style="font-size: 2rem; font-weight: bold; color: #333; margin-bottom: 15px;">Our Hamster-Powered Servers Are Working!</h2>
      <p style="font-size: 1.2rem; color: #666; margin-bottom: 30px; max-width: 600px;">
        Please wait while our highly trained digital hamsters fetch your data...
        They're running as fast as they can on their tiny wheels!
      </p>

      <div style="display: flex; gap: 15px; margin-bottom: 30px;">
        <div style="width: 20px; height: 20px; background-color: #007bff; border-radius: 50%; animation: pulse 1.5s infinite;"></div>
        <div style="width: 20px; height: 20px; background-color: #28a745; border-radius: 50%; animation: pulse 1.5s infinite 0.2s;"></div>
        <div style="width: 20px; height: 20px; background-color: #ffc107; border-radius: 50%; animation: pulse 1.5s infinite 0.4s;"></div>
        <div style="width: 20px; height: 20px; background-color: #dc3545; border-radius: 50%; animation: pulse 1.5s infinite 0.6s;"></div>
      </div>

      <div style="background-color: #e9ecef; border-radius: 8px; padding: 20px; max-width: 500px;">
        <p style="font-style: italic; color: #666; margin: 0;">
          "Patience is a virtue, but coffee is a necessity.
          While you wait, why not grab a cup of coffee?
          Our hamsters love the smell!"
        </p>
      </div>

      <style>
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.7; }
        }
      </style>
    </div>
  `;
}
