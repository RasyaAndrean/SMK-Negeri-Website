// HumorShowcasePage.tsx - Showcase page for all humorous UI elements
export default function HumorShowcasePage() {
  return `
    <div style="font-family: Arial, sans-serif; padding: 20px; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); min-height: 100vh;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <div style="margin-bottom: 30px; text-align: center;">
          <h1 style="font-size: 2.5rem; font-weight: bold; color: #333; margin-bottom: 10px;">😂 Humor Showcase 🎭</h1>
          <p style="color: #666; font-size: 1.2rem;">A showcase of all the humorous UI elements in the platform</p>
        </div>

        <div style="background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); border-radius: 12px; padding: 24px; color: white; margin-bottom: 30px; text-align: center;">
          <h2 style="font-size: 2rem; font-weight: bold; margin-bottom: 15px;">🌟 Funny UI Elements Showcase 🌟</h2>
          <p style="font-size: 1.25rem; margin-bottom: 20px; opacity: 0.9;">Making learning fun, one laugh at a time!</p>
          <div style="display: flex; justify-content: center; gap: 40px; flex-wrap: wrap;">
            <div style="text-align: center;">
              <p style="font-size: 0.9rem; opacity: 0.8;">Components</p>
              <p style="font-weight: bold; font-size: 1.5rem;">5</p>
            </div>
            <div style="text-align: center;">
              <p style="font-size: 0.9rem; opacity: 0.8;">Humorous Elements</p>
              <p style="font-weight: bold; font-size: 1.5rem;">20+</p>
            </div>
            <div style="text-align: center;">
              <p style="font-size: 0.9rem; opacity: 0.8;">Animations</p>
              <p style="font-weight: bold; font-size: 1.5rem;">8</p>
            </div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 40px;">
          <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px;">
            <h3 style="font-size: 1.5rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
              <span style="margin-right: 10px;">🤪</span> Humorous 404 Page
            </h3>

            <div style="background: linear-gradient(135deg, #fff3f3, #ffd6d6); border-radius: 12px; padding: 25px; margin-bottom: 25px; text-align: center;">
              <div style="font-size: 3rem; margin-bottom: 20px; animation: bounce 1s infinite;">🤔</div>
              <h4 style="font-size: 2rem; font-weight: bold; color: #dc3545; margin-bottom: 20px;">404 - Page Not Found!</h4>

              <div style="font-size: 5rem; margin: 30px 0; animation: spin 3s linear infinite;">🌀</div>

              <p style="font-size: 1.2rem; color: #666; margin-bottom: 30px; line-height: 1.6;">
                Oops! It seems you've wandered into uncharted territory.
                Our digital explorers are still mapping this area!
              </p>

              <div style="background: linear-gradient(135deg, #fff3f3, #ffd6d6); border-radius: 12px; padding: 20px; margin: 20px 0;">
                <h5 style="color: #dc3545; margin-bottom: 15px;">Possible Reasons:</h5>
                <ul style="list-style: none; padding: 0; text-align: left; max-width: 500px; margin: 0 auto;">
                  <li style="display: flex; align-items: flex-start; margin-bottom: 15px;">
                    <div style="width: 25px; height: 25px; background-color: #dc3545; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.8rem; margin-right: 12px; flex-shrink: 0;">1</div>
                    <span>The page is taking a coffee break ☕</span>
                  </li>
                  <li style="display: flex; align-items: flex-start; margin-bottom: 15px;">
                    <div style="width: 25px; height: 25px; background-color: #dc3545; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.8rem; margin-right: 12px; flex-shrink: 0;">2</div>
                    <span>This page is in another castle 🏰</span>
                  </li>
                  <li style="display: flex; align-items: flex-start;">
                    <div style="width: 25px; height: 25px; background-color: #dc3545; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.8rem; margin-right: 12px; flex-shrink: 0;">3</div>
                    <span>Our hamsters lost the map 🐹</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px;">
            <h3 style="font-size: 1.5rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
              <span style="margin-right: 10px;">😅</span> Humorous Error Component
            </h3>

            <div style="background: linear-gradient(135deg, #fff3f3 0%, #ffd6d6 100%); border-radius: 12px; padding: 30px; text-align: center; margin-bottom: 25px;">
              <div style="font-size: 4rem; margin-bottom: 20px;">😅</div>
              <h4 style="font-size: 1.8rem; font-weight: bold; color: #dc3545; margin-bottom: 15px;">Something Went Wrong!</h4>
              <p style="font-size: 1.1rem; color: #666; margin-bottom: 30px; max-width: 600px;">
                Oops! Our hamster-powered servers are taking a break. Please try again in a moment!
              </p>

              <div style="display: flex; gap: 15px; margin-bottom: 30px; justify-content: center;">
                <div style="width: 50px; height: 50px; background-color: #dc3545; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; animation: shake 0.5s infinite;">⚠️</div>
                <div style="width: 50px; height: 50px; background-color: #ffc107; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #212529; font-size: 1.5rem; animation: shake 0.5s infinite 0.1s;">❓</div>
                <div style="width: 50px; height: 50px; background-color: #007bff; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; animation: shake 0.5s infinite 0.2s;">🔧</div>
              </div>

              <button style="background: linear-gradient(135deg, #007bff, #00d4ff); color: white; font-weight: bold; padding: 15px 30px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.1rem; transition: transform 0.2s; margin-bottom: 20px;">
                🔄 Try Again
              </button>

              <div style="background-color: #fff8e1; border-radius: 8px; padding: 20px; max-width: 500px; margin: 0 auto;">
                <p style="font-style: italic; color: #856404; margin: 0;">
                  "Don't worry, even the best developers get lost sometimes!
                  Our team of highly trained monkeys has been dispatched to fix this!"
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 40px;">
          <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px;">
            <h3 style="font-size: 1.5rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
              <span style="margin-right: 10px;">🤖</span> Humorous Loading Component
            </h3>

            <div style="background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); border-radius: 12px; padding: 30px; text-align: center; margin-bottom: 25px;">
              <div style="font-size: 4rem; margin-bottom: 20px; animation: bounce 1s infinite;">🤖</div>
              <h4 style="font-size: 1.8rem; font-weight: bold; color: #333; margin-bottom: 15px;">Our Hamster-Powered Servers Are Working!</h4>
              <p style="font-size: 1.1rem; color: #666; margin-bottom: 30px; max-width: 600px;">
                Please wait while our highly trained digital hamsters fetch your data...
                They're running as fast as they can on their tiny wheels!
              </p>

              <div style="display: flex; gap: 15px; margin-bottom: 30px; justify-content: center;">
                <div style="width: 20px; height: 20px; background-color: #007bff; border-radius: 50%; animation: pulse 1.5s infinite;"></div>
                <div style="width: 20px; height: 20px; background-color: #28a745; border-radius: 50%; animation: pulse 1.5s infinite 0.2s;"></div>
                <div style="width: 20px; height: 20px; background-color: #ffc107; border-radius: 50%; animation: pulse 1.5s infinite 0.4s;"></div>
                <div style="width: 20px; height: 20px; background-color: #dc3545; border-radius: 50%; animation: pulse 1.5s infinite 0.6s;"></div>
              </div>

              <div style="background-color: #e9ecef; border-radius: 8px; padding: 20px; max-width: 500px; margin: 0 auto;">
                <p style="font-style: italic; color: #666; margin: 0;">
                  "Patience is a virtue, but coffee is a necessity.
                  While you wait, why not grab a cup of coffee?
                  Our hamsters love the smell!"
                </p>
              </div>
            </div>
          </div>

          <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px;">
            <h3 style="font-size: 1.5rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
              <span style="margin-right: 10px;">🐹</span> Humorous Spinner Component
            </h3>

            <div style="background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); border-radius: 12px; padding: 30px; text-align: center; margin-bottom: 25px;">
              <div style="position: relative; width: 100px; height: 100px; margin: 0 auto 30px;">
                <!-- Rotating hamster wheel -->
                <div style="width: 100%; height: 100%; border: 5px solid #e9ecef; border-radius: 50%; position: relative; animation: spin 2s linear infinite;">
                  <div style="position: absolute; top: -5px; left: 50%; width: 10px; height: 10px; background-color: #007bff; border-radius: 50%; transform: translateX(-50%);"></div>
                  <div style="position: absolute; top: 50%; left: -5px; width: 10px; height: 10px; background-color: #28a745; border-radius: 50%; transform: translateY(-50%);"></div>
                  <div style="position: absolute; bottom: -5px; left: 50%; width: 10px; height: 10px; background-color: #ffc107; border-radius: 50%; transform: translateX(-50%);"></div>
                  <div style="position: absolute; top: 50%; right: -5px; width: 10px; height: 10px; background-color: #dc3545; border-radius: 50%; transform: translateY(-50%);"></div>
                </div>

                <!-- Hamster -->
                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 40px; animation: bounce 1s infinite;">
                  🐹
                </div>
              </div>

              <h4 style="color: #333; margin-bottom: 15px; text-align: center; font-size: 1.8rem;">Our Hamster Team is Working Hard!</h4>
              <p style="color: #666; text-align: center; max-width: 400px; margin: 0 auto 30px; font-size: 1.1rem;">
                Please wait while our furry engineers generate your content...
              </p>

              <div style="background-color: #e9ecef; border-radius: 8px; padding: 20px; max-width: 500px; margin: 0 auto;">
                <p style="font-style: italic; color: #666; margin: 0; font-size: 1.1rem;">
                  "Our hamsters are fueled by tiny wheels and unlimited determination!
                  They never give up, even when the cheese is at the end of a very long tunnel!"
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px; margin-bottom: 40px;">
          <h3 style="font-size: 1.5rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
            <span style="margin-right: 10px;">🎨</span> Humorous Design Elements
          </h3>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px;">
            <div style="background: linear-gradient(135deg, #e3f2fd, #bbdefb); border-radius: 12px; padding: 20px;">
              <h4 style="font-weight: bold; color: #0d47a1; margin-bottom: 15px; display: flex; align-items: center;">
                <span style="margin-right: 10px;">🎭</span> Funny Error Messages
              </h4>
              <ul style="list-style: none; padding: 0; margin: 0;">
                <li style="display: flex; align-items: flex-start; margin-bottom: 15px; padding: 15px; background-color: white; border-radius: 8px;">
                  <div style="width: 30px; height: 30px; background-color: #007bff; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 1rem; margin-right: 15px; flex-shrink: 0;">1</div>
                  <span>"Houston, we have a problem! Our digital elves are working overtime to fix this."</span>
                </li>
                <li style="display: flex; align-items: flex-start; margin-bottom: 15px; padding: 15px; background-color: white; border-radius: 8px;">
                  <div style="width: 30px; height: 30px; background-color: #28a745; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 1rem; margin-right: 15px; flex-shrink: 0;">2</div>
                  <span>"Warning: Coffee levels low. Developer productivity may be affected."</span>
                </li>
                <li style="display: flex; align-items: flex-start; padding: 15px; background-color: white; border-radius: 8px;">
                  <div style="width: 30px; height: 30px; background-color: #ffc107; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #212529; font-size: 1rem; margin-right: 15px; flex-shrink: 0;">3</div>
                  <span>"Error 418: I'm a teapot. Short and stout. Tip me over and pour me out!"</span>
                </li>
              </ul>
            </div>

            <div style="background: linear-gradient(135deg, #fff3e0, #ffe0b2); border-radius: 12px; padding: 20px;">
              <h4 style="font-weight: bold; color: #ef6c00; margin-bottom: 15px; display: flex; align-items: center;">
                <span style="margin-right: 10px;">🎪</span> Playful Animations
              </h4>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div style="background-color: white; border-radius: 8px; padding: 20px; text-align: center;">
                  <div style="font-size: 2rem; margin-bottom: 15px; animation: bounce 1s infinite;">🏀</div>
                  <h5 style="font-weight: bold; margin-bottom: 10px;">Bounce</h5>
                  <p style="font-size: 0.9rem; color: #666;">Up and down motion</p>
                </div>
                <div style="background-color: white; border-radius: 8px; padding: 20px; text-align: center;">
                  <div style="font-size: 2rem; margin-bottom: 15px; animation: spin 3s linear infinite;">🌀</div>
                  <h5 style="font-weight: bold; margin-bottom: 10px;">Spin</h5>
                  <p style="font-size: 0.9rem; color: #666;">Circular rotation</p>
                </div>
                <div style="background-color: white; border-radius: 8px; padding: 20px; text-align: center;">
                  <div style="font-size: 2rem; margin-bottom: 15px; animation: pulse 1.5s infinite;">❤️</div>
                  <h5 style="font-weight: bold; margin-bottom: 10px;">Pulse</h5>
                  <p style="font-size: 0.9rem; color: #666;">Scale and opacity</p>
                </div>
                <div style="background-color: white; border-radius: 8px; padding: 20px; text-align: center;">
                  <div style="font-size: 2rem; margin-bottom: 15px; animation: shake 0.5s infinite;">🔔</div>
                  <h5 style="font-weight: bold; margin-bottom: 10px;">Shake</h5>
                  <p style="font-size: 0.9rem; color: #666;">Side to side motion</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style="text-align: center; padding: 30px; background: linear-gradient(135deg, #6a11cb, #2575fc); border-radius: 12px; color: white;">
          <h3 style="font-size: 1.8rem; font-weight: bold; margin-bottom: 15px;">🎉 Making Learning Fun! 🎉</h3>
          <p style="font-size: 1.1rem; margin-bottom: 25px; max-width: 700px; margin-left: auto; margin-right: auto; opacity: 0.9;">
            These humorous elements help reduce frustration and make the learning experience more enjoyable.
            When things go wrong, at least we can share a laugh about it!
          </p>
          <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
            <a href="/" style="background: linear-gradient(135deg, #ff9a9e, #fad0c4); color: #333; font-weight: bold; padding: 16px 32px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.2rem; transition: transform 0.2s; text-decoration: none;">
              🏠 Return to Homepage
            </a>
            <a href="/docs" style="background: linear-gradient(135deg, #a1c4fd, #c2e9fb); color: #333; font-weight: bold; padding: 16px 32px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.2rem; transition: transform 0.2s; text-decoration: none;">
              📘 View Documentation
            </a>
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

          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.2); opacity: 0.7; }
          }

          @keyframes shake {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(5deg); }
            75% { transform: rotate(-5deg); }
          }
        </style>
      </div>
    </div>
  `;
}
