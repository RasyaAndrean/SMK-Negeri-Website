// HumorousSpinner.tsx - Enhanced spinner with animations and humor
export default function HumorousSpinner() {
  return `
    <div style="font-family: Arial, sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 200px; padding: 20px;">
      <div style="position: relative; width: 80px; height: 80px; margin-bottom: 20px;">
        <!-- Rotating hamster wheel -->
        <div style="width: 100%; height: 100%; border: 5px solid #e9ecef; border-radius: 50%; position: relative; animation: spin 2s linear infinite;">
          <div style="position: absolute; top: -5px; left: 50%; width: 10px; height: 10px; background-color: #007bff; border-radius: 50%; transform: translateX(-50%);"></div>
          <div style="position: absolute; top: 50%; left: -5px; width: 10px; height: 10px; background-color: #28a745; border-radius: 50%; transform: translateY(-50%);"></div>
          <div style="position: absolute; bottom: -5px; left: 50%; width: 10px; height: 10px; background-color: #ffc107; border-radius: 50%; transform: translateX(-50%);"></div>
          <div style="position: absolute; top: 50%; right: -5px; width: 10px; height: 10px; background-color: #dc3545; border-radius: 50%; transform: translateY(-50%);"></div>
        </div>

        <!-- Hamster -->
        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 30px; animation: bounce 1s infinite;">
          🐹
        </div>
      </div>

      <h3 style="color: #333; margin-bottom: 10px; text-align: center;">Our Hamster Team is Working Hard!</h3>
      <p style="color: #666; text-align: center; max-width: 300px;">
        Please wait while our furry engineers generate your content...
      </p>

      <style>
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes bounce {
          0%, 100% { transform: translate(-50%, -50%) translateY(0); }
          50% { transform: translate(-50%, -50%) translateY(-10px); }
        }
      </style>
    </div>
  `;
}
