// HumorousMicroInteractions.tsx - Fun micro-interactions for the platform
export default function HumorousMicroInteractions() {
  return `
    <div style="font-family: Arial, sans-serif; padding: 20px; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); border-radius: 12px;">
      <h2 style="font-size: 1.8rem; font-weight: bold; color: #333; margin-bottom: 20px; text-align: center;">🎭 Humorous Micro-Interactions</h2>
      <p style="color: #666; margin-bottom: 30px; text-align: center; max-width: 800px; margin-left: auto; margin-right: auto;">
        Small interactions that make the platform more engaging and fun to use
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 40px;">
        <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px;">
          <h3 style="font-size: 1.4rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
            <span style="margin-right: 10px;">🖱️</span> Button Hover Effects
          </h3>

          <div style="margin-bottom: 25px;">
            <p style="color: #666; margin-bottom: 15px;">
              Buttons with fun hover animations that make interactions more engaging
            </p>

            <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px;">
              <button style="background: linear-gradient(135deg, #007bff, #00d4ff); color: white; font-weight: bold; padding: 12px 25px; border: none; border-radius: 8px; cursor: pointer; font-size: 1rem; transition: all 0.3s;"
                      onmouseover="this.style.transform='scale(1.1) rotate(5deg)'; this.style.boxShadow='0 10px 20px rgba(0,0,0,0.2)';"
                      onmouseout="this.style.transform='scale(1) rotate(0deg)'; this.style.boxShadow='none';">
                Bouncy Button
              </button>

              <button style="background: linear-gradient(135deg, #28a745, #20c997); color: white; font-weight: bold; padding: 12px 25px; border: none; border-radius: 8px; cursor: pointer; font-size: 1rem; transition: all 0.3s;"
                      onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 10px 20px rgba(0,0,0,0.2)';"
                      onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none';">
                Hover Up
              </button>

              <button style="background: linear-gradient(135deg, #ffc107, #ff9800); color: #212529; font-weight: bold; padding: 12px 25px; border: none; border-radius: 8px; cursor: pointer; font-size: 1rem; transition: all 0.3s;"
                      onmouseover="this.style.transform='skewX(-10deg)'; this.style.boxShadow='0 10px 20px rgba(0,0,0,0.2)';"
                      onmouseout="this.style.transform='skewX(0deg)'; this.style.boxShadow='none';">
                Skew Effect
              </button>
            </div>
          </div>
        </div>

        <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px;">
          <h3 style="font-size: 1.4rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
            <span style="margin-right: 10px;">🔄</span> Loading Indicators
          </h3>

          <div style="margin-bottom: 25px;">
            <p style="color: #666; margin-bottom: 15px;">
              Fun loading animations that keep users entertained during wait times
            </p>

            <div style="display: flex; justify-content: space-around; flex-wrap: wrap; gap: 20px;">
              <div style="text-align: center;">
                <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #007bff, #00d4ff); border-radius: 50%; margin: 0 auto 10px; animation: bounce 1s infinite;"></div>
                <p style="font-size: 0.9rem; color: #666;">Bouncing</p>
              </div>

              <div style="text-align: center;">
                <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #28a745, #20c997); border-radius: 50%; margin: 0 auto 10px; animation: pulse 1.5s infinite;"></div>
                <p style="font-size: 0.9rem; color: #666;">Pulsing</p>
              </div>

              <div style="text-align: center;">
                <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #ffc107, #ff9800); margin: 0 auto 10px; animation: spin 2s linear infinite;"></div>
                <p style="font-size: 0.9rem; color: #666;">Spinning</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 40px;">
        <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px;">
          <h3 style="font-size: 1.4rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
            <span style="margin-right: 10px;">🎉</span> Success Feedback
          </h3>

          <div style="margin-bottom: 25px;">
            <p style="color: #666; margin-bottom: 15px;">
              Positive feedback animations that celebrate user actions
            </p>

            <div style="text-align: center; padding: 20px; background: linear-gradient(135deg, #e8f5e9, #c8e6c9); border-radius: 12px; margin-bottom: 20px;">
              <div style="font-size: 3rem; margin-bottom: 15px; animation: celebration 2s infinite;">🎉</div>
              <p style="font-weight: bold; color: #2e7d32; margin-bottom: 10px;">Action Completed!</p>
              <p style="color: #666; font-size: 0.9rem;">Your task was successfully completed</p>
            </div>

            <div style="display: flex; justify-content: center; gap: 15px;">
              <button style="background: linear-gradient(135deg, #28a745, #20c997); color: white; font-weight: bold; padding: 10px 20px; border: none; border-radius: 6px; cursor: pointer; font-size: 0.9rem;"
                      onclick="this.parentElement.previousElementSibling.style.animation='celebration 0.5s'; setTimeout(() => { this.parentElement.previousElementSibling.style.animation='celebration 2s infinite'; }, 500);">
                Test Celebration
              </button>
            </div>
          </div>
        </div>

        <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px;">
          <h3 style="font-size: 1.4rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
            <span style="margin-right: 10px;">💡</span> Helpful Tooltips
          </h3>

          <div style="margin-bottom: 25px;">
            <p style="color: #666; margin-bottom: 15px;">
              Fun tooltips that provide helpful information in an engaging way
            </p>

            <div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center;">
              <div style="position: relative; display: inline-block;"
                   onmouseover="this.querySelector('.tooltip').style.visibility='visible'; this.querySelector('.tooltip').style.opacity='1';"
                   onmouseout="this.querySelector('.tooltip').style.visibility='hidden'; this.querySelector('.tooltip').style.opacity='0';">
                <button style="background: linear-gradient(135deg, #6f42c1, #9c27b0); color: white; font-weight: bold; padding: 12px 25px; border: none; border-radius: 8px; cursor: pointer; font-size: 1rem;">
                  Hover Me
                </button>
                <div class="tooltip" style="position: absolute; bottom: 125%; left: 50%; transform: translateX(-50%); visibility: hidden; opacity: 0; transition: opacity 0.3s; background: linear-gradient(135deg, #6a11cb, #2575fc); color: white; padding: 10px 15px; border-radius: 8px; width: 200px; text-align: center; font-size: 0.9rem; box-shadow: 0 4px 12px rgba(0,0,0,0.2); z-index: 1;">
                  <div style="font-weight: bold; margin-bottom: 5px;">💡 Pro Tip</div>
                  <div>Did you know our hamsters can run up to 8km/h on their wheels?</div>
                  <div style="position: absolute; top: 100%; left: 50%; transform: translateX(-50%); width: 0; height: 0; border-left: 8px solid transparent; border-right: 8px solid transparent; border-top: 8px solid #6a11cb;"></div>
                </div>
              </div>

              <div style="position: relative; display: inline-block;"
                   onmouseover="this.querySelector('.tooltip').style.visibility='visible'; this.querySelector('.tooltip').style.opacity='1';"
                   onmouseout="this.querySelector('.tooltip').style.visibility='hidden'; this.querySelector('.tooltip').style.opacity='0';">
                <button style="background: linear-gradient(135deg, #007bff, #00d4ff); color: white; font-weight: bold; padding: 12px 25px; border: none; border-radius: 8px; cursor: pointer; font-size: 1rem;">
                  Try This
                </button>
                <div class="tooltip" style="position: absolute; bottom: 125%; left: 50%; transform: translateX(-50%); visibility: hidden; opacity: 0; transition: opacity 0.3s; background: linear-gradient(135deg, #ff9a9e, #fad0c4); color: #333; padding: 10px 15px; border-radius: 8px; width: 200px; text-align: center; font-size: 0.9rem; box-shadow: 0 4px 12px rgba(0,0,0,0.2); z-index: 1;">
                  <div style="font-weight: bold; margin-bottom: 5px;">🤖 Fun Fact</div>
                  <div>Our AI assistant has told over 10,000 jokes to users this month!</div>
                  <div style="position: absolute; top: 100%; left: 50%; transform: translateX(-50%); width: 0; height: 0; border-left: 8px solid transparent; border-right: 8px solid transparent; border-top: 8px solid #ff9a9e;"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px; margin-bottom: 30px;">
        <h3 style="font-size: 1.4rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
          <span style="margin-right: 10px;">🔢</span> Interactive Elements
        </h3>

        <div style="margin-bottom: 25px;">
          <p style="color: #666; margin-bottom: 20px;">
            Interactive elements that respond to user actions with fun animations
          </p>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div style="background: linear-gradient(135deg, #e3f2fd, #bbdefb); border-radius: 12px; padding: 20px; text-align: center;">
              <h4 style="font-weight: bold; color: #0d47a1; margin-bottom: 15px;">Progress Bar</h4>
              <div style="height: 20px; background-color: #e9ecef; border-radius: 10px; overflow: hidden; margin-bottom: 15px;">
                <div id="progressBar" style="height: 100%; width: 0%; background: linear-gradient(90deg, #007bff, #00d4ff); border-radius: 10px; transition: width 0.5s;"></div>
              </div>
              <button style="background: linear-gradient(135deg, #007bff, #00d4ff); color: white; font-weight: bold; padding: 10px 20px; border: none; border-radius: 6px; cursor: pointer; font-size: 0.9rem;"
                      onclick="animateProgressBar()">
                Animate Progress
              </button>
            </div>

            <div style="background: linear-gradient(135deg, #fff3cd, #ffe082); border-radius: 12px; padding: 20px; text-align: center;">
              <h4 style="font-weight: bold; color: #856404; margin-bottom: 15px;">Emoji Reaction</h4>
              <div style="font-size: 3rem; margin-bottom: 15px;">😐</div>
              <div style="display: flex; justify-content: center; gap: 10px;">
                <button style="font-size: 1.5rem; background: none; border: none; cursor: pointer; transition: transform 0.2s;"
                        onmouseover="this.style.transform='scale(1.3)';"
                        onmouseout="this.style.transform='scale(1)';"
                        onclick="this.parentElement.previousElementSibling.textContent='😍'">
                  😍
                </button>
                <button style="font-size: 1.5rem; background: none; border: none; cursor: pointer; transition: transform 0.2s;"
                        onmouseover="this.style.transform='scale(1.3)';"
                        onmouseout="this.style.transform='scale(1)';"
                        onclick="this.parentElement.previousElementSibling.textContent='😂'">
                  😂
                </button>
                <button style="font-size: 1.5rem; background: none; border: none; cursor: pointer; transition: transform 0.2s;"
                        onmouseover="this.style.transform='scale(1.3)';"
                        onmouseout="this.style.transform='scale(1)';"
                        onclick="this.parentElement.previousElementSibling.textContent='🤯'">
                  🤯
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style="text-align: center; padding: 20px; background: linear-gradient(135deg, #6a11cb, #2575fc); border-radius: 12px; color: white;">
        <h3 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 15px;">🌟 Making Learning Fun, One Interaction at a Time 🌟</h3>
        <p style="font-size: 1rem; margin-bottom: 20px; max-width: 700px; margin-left: auto; margin-right: auto; opacity: 0.9;">
          These micro-interactions are designed to make every click, hover, and action a delightful experience
        </p>
      </div>

      <style>
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.7; }
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes celebration {
          0%, 100% { transform: scale(1) rotate(0deg); }
          25% { transform: scale(1.2) rotate(10deg); }
          50% { transform: scale(1.1) rotate(-10deg); }
          75% { transform: scale(1.3) rotate(5deg); }
        }
      </style>

      <script>
        function animateProgressBar() {
          const progressBar = document.getElementById('progressBar');
          let width = 0;
          const interval = setInterval(() => {
            if (width >= 100) {
              clearInterval(interval);
            } else {
              width++;
              progressBar.style.width = width + '%';
            }
          }, 20);
        }
      </script>
    </div>
  `;
}
