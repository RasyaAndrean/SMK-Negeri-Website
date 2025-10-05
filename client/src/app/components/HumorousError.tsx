// HumorousError.tsx - A fun error component with retry functionality
export default function HumorousError({
  message,
  onRetry,
}: {
  message: string;
  onRetry: () => void;
}) {
  // Array of humorous error messages
  const errorMessages = [
    'Oops! Our hamster-powered servers are taking a break. Please try again in a moment!',
    'Well, this is awkward... Our code monkeys are on strike. Please be patient!',
    'Houston, we have a problem! Our digital elves are working overtime to fix this.',
    'Warning: Coffee levels low. Developer productivity may be affected.',
    "Error 418: I'm a teapot. Short and stout. Tip me over and pour me out!",
    "Congratulations! You've found a bug! Please report it to our bug bounty program (payment in virtual cookies).",
    "Our servers are having an existential crisis. They're questioning their purpose in life.",
    "The internet is made of cats, but apparently, some cats are missing. We're investigating.",
    '404: Sense of humor not found. Just kidding! But this error is real.',
    'Our quantum computers are in superposition. Please observe this message to collapse the wave function.',
  ];

  // Select a random humorous message if no specific message is provided
  const displayMessage =
    message || errorMessages[Math.floor(Math.random() * errorMessages.length)];

  return `
    <div style="font-family: Arial, sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 400px; background: linear-gradient(135deg, #fff3f3 0%, #ffd6d6 100%); border-radius: 12px; padding: 30px; text-align: center;">
      <div style="font-size: 4rem; margin-bottom: 20px;">😅</div>
      <h2 style="font-size: 2rem; font-weight: bold; color: #dc3545; margin-bottom: 15px;">Something Went Wrong!</h2>
      <p style="font-size: 1.2rem; color: #666; margin-bottom: 30px; max-width: 600px;">
        ${displayMessage}
      </p>

      <div style="display: flex; gap: 15px; margin-bottom: 30px;">
        <div style="width: 50px; height: 50px; background-color: #dc3545; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; animation: shake 0.5s infinite;">⚠️</div>
        <div style="width: 50px; height: 50px; background-color: #ffc107; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #212529; font-size: 1.5rem; animation: shake 0.5s infinite 0.1s;">❓</div>
        <div style="width: 50px; height: 50px; background-color: #007bff; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; animation: shake 0.5s infinite 0.2s;">🔧</div>
      </div>

      <button onclick="(${onRetry.toString()})()" style="background: linear-gradient(135deg, #007bff, #00d4ff); color: white; font-weight: bold; padding: 15px 30px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.1rem; transition: transform 0.2s; margin-bottom: 20px;">
        🔄 Try Again
      </button>

      <div style="background-color: #fff8e1; border-radius: 8px; padding: 20px; max-width: 500px;">
        <p style="font-style: italic; color: #856404; margin: 0;">
          "Don't worry, even the best developers get lost sometimes!
          Our team of highly trained monkeys has been dispatched to fix this!"
        </p>
      </div>

      <style>
        @keyframes shake {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(5deg); }
          75% { transform: rotate(-5deg); }
        }
      </style>
    </div>
  `;
}
