// CollaborativeARLearningPath.tsx - Component for AR visualization in collaborative learning path sessions
export default function CollaborativeARLearningPath() {
  return `
    <div style="font-family: Arial, sans-serif; background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px; margin-bottom: 30px;">
      <h3 style="font-size: 1.5rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
        <span style="margin-right: 10px;">🎯</span> Collaborative AR Learning Path Visualization
      </h3>

      <div style="background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); border-radius: 12px; padding: 24px; color: white; margin-bottom: 25px;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">
          <h4 style="font-weight: bold; margin: 0;">Enterprise-Level Full-Stack Web Development Path</h4>
          <span style="background-color: rgba(255, 255, 255, 0.2); color: white; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px; font-weight: bold;">
            ACTIVE SESSION
          </span>
        </div>
        <p style="font-size: 1.1rem; margin-bottom: 20px; opacity: 0.9;">Interactive 3D visualization of learning path milestones with collaborative annotations</p>
        <p style="margin-bottom: 20px; max-width: 800px;">Augmented reality environment showing learning path progression with gold sphere annotations representing key milestones and collaborative context</p>
        <div style="display: flex; gap: 30px; flex-wrap: wrap;">
          <div style="text-align: center;">
            <p style="font-size: 0.9rem; opacity: 0.8;">Milestones</p>
            <p style="font-weight: bold; font-size: 1.2rem;">8</p>
          </div>
          <div style="text-align: center;">
            <p style="font-size: 0.9rem; opacity: 0.8;">Annotations</p>
            <p style="font-weight: bold; font-size: 1.2rem;">12</p>
          </div>
          <div style="text-align: center;">
            <p style="font-size: 0.9rem; opacity: 0.8;">Collaborators</p>
            <p style="font-weight: bold; font-size: 1.2rem;">5</p>
          </div>
          <div style="text-align: center;">
            <p style="font-size: 0.9rem; opacity: 0.8;">Session Duration</p>
            <p style="font-weight: bold; font-size: 1.2rem;">2h 15m</p>
          </div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px;">
        <div>
          <h4 style="font-weight: bold; color: #333; margin-bottom: 15px;">🌐 3D Learning Path Visualization</h4>

          <div style="background: linear-gradient(135deg, #2c3e50, #4a6491); border-radius: 12px; height: 450px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; position: relative; overflow: hidden;">
            <div style="position: absolute; width: 100%; height: 100%;">
              <!-- Gold spheres representing learning path milestones -->
              <div style="position: absolute; top: 15%; left: 20%; width: 45px; height: 45px; background: radial-gradient(circle at 30% 30%, #FFD700, #D4AF37); border-radius: 50%; box-shadow: 0 0 30px #FFD700, 0 0 45px rgba(255, 215, 0, 0.8); transform: translate(-50%, -50%); animation: pulse 1.5s infinite;"></div>
              <div style="position: absolute; top: 30%; left: 40%; width: 38px; height: 38px; background: radial-gradient(circle at 30% 30%, #FFD700, #D4AF37); border-radius: 50%; box-shadow: 0 0 25px #FFD700, 0 0 40px rgba(255, 215, 0, 0.8); transform: translate(-50%, -50%); animation: pulse 1.5s infinite 0.3s;"></div>
              <div style="position: absolute; top: 50%; left: 60%; width: 52px; height: 52px; background: radial-gradient(circle at 30% 30%, #FFD700, #D4AF37); border-radius: 50%; box-shadow: 0 0 35px #FFD700, 0 0 50px rgba(255, 215, 0, 0.8); transform: translate(-50%, -50%); animation: pulse 1.5s infinite 0.6s;"></div>
              <div style="position: absolute; top: 70%; left: 35%; width: 42px; height: 42px; background: radial-gradient(circle at 30% 30%, #FFD700, #D4AF37); border-radius: 50%; box-shadow: 0 0 28px #FFD700, 0 0 42px rgba(255, 215, 0, 0.8); transform: translate(-50%, -50%); animation: pulse 1.5s infinite 0.9s;"></div>
              <div style="position: absolute; top: 80%; left: 75%; width: 35px; height: 35px; background: radial-gradient(circle at 30% 30%, #FFD700, #D4AF37); border-radius: 50%; box-shadow: 0 0 22px #FFD700, 0 0 36px rgba(255, 215, 0, 0.8); transform: translate(-50%, -50%); animation: pulse 1.5s infinite 1.2s;"></div>

              <!-- Learning path milestone representations -->
              <div style="position: absolute; top: 15%; left: 20%; width: 180px; height: 120px; background: linear-gradient(135deg, #34495e, #2c3e50); border-radius: 15px; transform: translate(-50%, -50%); box-shadow: 0 0 35px rgba(0,0,0,0.8);">
                <div style="position: absolute; top: 15px; left: 15px; width: 35px; height: 35px; background: #27ae60; border-radius: 8px;"></div>
                <div style="position: absolute; top: 15px; right: 15px; width: 35px; height: 35px; background: #27ae60; border-radius: 8px;"></div>
                <div style="position: absolute; bottom: 15px; left: 15px; width: 35px; height: 35px; background: #27ae60; border-radius: 8px;"></div>
                <div style="position: absolute; bottom: 15px; right: 15px; width: 35px; height: 35px; background: #27ae60; border-radius: 8px;"></div>
                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 1rem; color: #3498db; font-weight: bold; text-align: center;">PROJECT PLANNING</div>
              </div>

              <div style="position: absolute; top: 30%; left: 40%; width: 160px; height: 100px; background: linear-gradient(135deg, #34495e, #2c3e50); border-radius: 15px; transform: translate(-50%, -50%); box-shadow: 0 0 35px rgba(0,0,0,0.8);">
                <div style="position: absolute; top: 12px; left: 12px; width: 30px; height: 30px; background: #3498db; border-radius: 6px;"></div>
                <div style="position: absolute; top: 12px; right: 12px; width: 30px; height: 30px; background: #3498db; border-radius: 6px;"></div>
                <div style="position: absolute; bottom: 12px; left: 12px; width: 30px; height: 30px; background: #3498db; border-radius: 6px;"></div>
                <div style="position: absolute; bottom: 12px; right: 12px; width: 30px; height: 30px; background: #3498db; border-radius: 6px;"></div>
                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 0.9rem; color: #2ecc71; font-weight: bold; text-align: center;">FRONTEND DEV</div>
              </div>

              <div style="position: absolute; top: 50%; left: 60%; width: 140px; height: 110px; background: linear-gradient(135deg, #34495e, #2c3e50); border-radius: 15px; transform: translate(-50%, -50%); box-shadow: 0 0 35px rgba(0,0,0,0.8);">
                <div style="position: absolute; top: 12px; left: 50%; transform: translateX(-50%); width: 40px; height: 40px; background: #e74c3c; border-radius: 50%;"></div>
                <div style="position: absolute; bottom: 12px; left: 22px; width: 30px; height: 30px; background: #f39c12; border-radius: 6px;"></div>
                <div style="position: absolute; bottom: 12px; right: 22px; width: 30px; height: 30px; background: #f39c12; border-radius: 6px;"></div>
                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 0.9rem; color: #f1c40f; font-weight: bold; text-align: center;">BACKEND DEV</div>
              </div>

              <div style="position: absolute; top: 70%; left: 35%; width: 150px; height: 90px; background: linear-gradient(135deg, #34495e, #2c3e50); border-radius: 15px; transform: translate(-50%, -50%); box-shadow: 0 0 35px rgba(0,0,0,0.8);">
                <div style="position: absolute; top: 10px; left: 10px; width: 25px; height: 25px; background: #9b59b6; border-radius: 5px;"></div>
                <div style="position: absolute; top: 10px; right: 10px; width: 25px; height: 25px; background: #9b59b6; border-radius: 5px;"></div>
                <div style="position: absolute; bottom: 10px; left: 10px; width: 25px; height: 25px; background: #9b59b6; border-radius: 5px;"></div>
                <div style="position: absolute; bottom: 10px; right: 10px; width: 25px; height: 25px; background: #9b59b6; border-radius: 5px;"></div>
                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 0.8rem; color: #1abc9c; font-weight: bold; text-align: center;">DATABASE DESIGN</div>
              </div>

              <div style="position: absolute; top: 80%; left: 75%; width: 130px; height: 100px; background: linear-gradient(135deg, #34495e, #2c3e50); border-radius: 15px; transform: translate(-50%, -50%); box-shadow: 0 0 35px rgba(0,0,0,0.8);">
                <div style="position: absolute; top: 12px; left: 50%; transform: translateX(-50%); width: 35px; height: 35px; background: #16a085; border-radius: 50%;"></div>
                <div style="position: absolute; bottom: 12px; left: 20px; width: 28px; height: 28px; background: #34495e; border-radius: 5px;"></div>
                <div style="position: absolute; bottom: 12px; right: 20px; width: 28px; height: 28px; background: #34495e; border-radius: 5px;"></div>
                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 0.8rem; color: #e67e22; font-weight: bold; text-align: center;">AI INTEGRATION</div>
              </div>

              <!-- Connection lines representing learning path progression -->
              <svg style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
                <line x1="20%" y1="15%" x2="40%" y2="30%" stroke="#3498db" stroke-width="5" stroke-dasharray="12,12">
                  <animate attributeName="stroke-dashoffset" values="0;24" dur="1.3s" repeatCount="indefinite" />
                </line>
                <line x1="40%" y1="30%" x2="60%" y2="50%" stroke="#3498db" stroke-width="5" stroke-dasharray="12,12">
                  <animate attributeName="stroke-dashoffset" values="0;24" dur="1.3s" repeatCount="indefinite" />
                </line>
                <line x1="60%" y1="50%" x2="35%" y2="70%" stroke="#3498db" stroke-width="5" stroke-dasharray="12,12">
                  <animate attributeName="stroke-dashoffset" values="0;24" dur="1.3s" repeatCount="indefinite" />
                </line>
                <line x1="35%" y1="70%" x2="75%" y2="80%" stroke="#3498db" stroke-width="5" stroke-dasharray="12,12">
                  <animate attributeName="stroke-dashoffset" values="0;24" dur="1.3s" repeatCount="indefinite" />
                </line>
              </svg>
            </div>

            <div style="text-align: center; color: white; z-index: 10;">
              <div style="font-size: 3rem; margin-bottom: 15px;">🎯</div>
              <p style="font-size: 1.2rem; margin-bottom: 10px;">Learning Path Visualization Active</p>
              <p style="font-size: 0.95rem; opacity: 0.9;">(Gold spheres represent learning milestones with collaborative annotations)</p>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 25px;">
            <button style="background: linear-gradient(135deg, #007bff, #00d4ff); color: white; font-weight: bold; padding: 15px; border: none; border-radius: 8px; cursor: pointer; font-size: 1rem; transition: transform 0.2s; display: flex; align-items: center; justify-content: center;">
              <span style="margin-right: 8px;">▶️</span> Start Session
            </button>
            <button style="background: linear-gradient(135deg, #28a745, #20c997); color: white; font-weight: bold; padding: 15px; border: none; border-radius: 8px; cursor: pointer; font-size: 1rem; transition: transform 0.2s; display: flex; align-items: center; justify-content: center;">
              <span style="margin-right: 8px;">➕</span> Add Milestone
            </button>
          </div>

          <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px;">
            <h4 style="font-weight: bold; color: #333; margin-bottom: 15px; display: flex; align-items: center;">
              <span style="margin-right: 10px;">⚙️</span> Visualization Controls
            </h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
              <button style="background: linear-gradient(135deg, #6f42c1, #9c27b0); color: white; font-weight: bold; padding: 12px; border: none; border-radius: 6px; cursor: pointer; font-size: 0.9rem;">
                Rotate View
              </button>
              <button style="background: linear-gradient(135deg, #ff9800, #ffc107); color: #212529; font-weight: bold; padding: 12px; border: none; border-radius: 6px; cursor: pointer; font-size: 0.9rem;">
                Zoom In/Out
              </button>
              <button style="background: linear-gradient(135deg, #dc3545, #ff6b6b); color: white; font-weight: bold; padding: 12px; border: none; border-radius: 6px; cursor: pointer; font-size: 0.9rem;">
                Reset View
              </button>
              <button style="background: linear-gradient(135deg, #20c997, #28a745); color: white; font-weight: bold; padding: 12px; border: none; border-radius: 6px; cursor: pointer; font-size: 0.9rem;">
                Toggle Labels
              </button>
            </div>
          </div>
        </div>

        <div>
          <h4 style="font-weight: bold; color: #333; margin-bottom: 15px;">📌 Learning Path Milestones</h4>

          <div style="background: linear-gradient(135deg, #fff3cd, #ffe082); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">
              <h5 style="font-weight: bold; color: #856404; margin: 0;">Frontend Development #LP-002</h5>
              <span style="background-color: #4caf50; color: white; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px; font-weight: bold;">
                COMPLETED
              </span>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 20px 0;">
              <div>
                <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Position (X, Y, Z)</p>
                <p style="font-weight: bold; margin: 0;">2.1, 3.5, 1.2</p>
              </div>
              <div>
                <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Completion Date</p>
                <p style="font-weight: bold; margin: 0;">Oct 25, 2023</p>
              </div>
              <div>
                <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Progress</p>
                <p style="font-weight: bold; margin: 0;">100%</p>
              </div>
              <div>
                <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Lead By</p>
                <p style="font-weight: bold; margin: 0;">Andi Saputra</p>
              </div>
            </div>

            <div style="margin: 20px 0;">
              <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Description</p>
              <p style="background-color: white; padding: 12px; border-radius: 8px; margin: 0;">Completed dashboard layout, user authentication, and core UI components using React and TypeScript.</p>
            </div>

            <div style="margin: 20px 0;">
              <p style="font-size: 0.9rem; color: #666; margin: 0 0 10px;">Skills Developed</p>
              <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <span style="background-color: #ffeaa7; color: #856404; font-size: 0.8rem; padding: 6px 12px; border-radius: 20px; font-weight: bold;">React</span>
                <span style="background-color: #ffeaa7; color: #856404; font-size: 0.8rem; padding: 6px 12px; border-radius: 20px; font-weight: bold;">TypeScript</span>
                <span style="background-color: #ffeaa7; color: #856404; font-size: 0.8rem; padding: 6px 12px; border-radius: 20px; font-weight: bold;">Next.js</span>
                <span style="background-color: #ffeaa7; color: #856404; font-size: 0.8rem; padding: 6px 12px; border-radius: 20px; font-weight: bold;">CSS</span>
              </div>
            </div>

            <div style="margin: 20px 0;">
              <p style="font-size: 0.9rem; color: #666; margin: 0 0 10px;">Related Annotations</p>
              <div style="display: flex; gap: 10px;">
                <span style="background-color: #e9ecef; color: #495057; font-size: 0.8rem; padding: 8px 15px; border-radius: 20px; cursor: pointer;">Design Review #AR-001</span>
                <span style="background-color: #e9ecef; color: #495057; font-size: 0.8rem; padding: 8px 15px; border-radius: 20px; cursor: pointer;">Code Review #AR-002</span>
              </div>
            </div>

            <div style="display: flex; gap: 10px; margin-top: 20px;">
              <button style="background: linear-gradient(135deg, #28a745, #20c997); color: white; font-weight: bold; padding: 12px 20px; border: none; border-radius: 8px; cursor: pointer; font-size: 0.9rem; flex: 1;">
                📊 View Analytics
              </button>
              <button style="background: linear-gradient(135deg, #007bff, #00d4ff); color: white; font-weight: bold; padding: 12px 20px; border: none; border-radius: 8px; cursor: pointer; font-size: 0.9rem; flex: 1;">
                📎 View Files
              </button>
            </div>
          </div>

          <div style="background: linear-gradient(135deg, #d1ecf1, #a8e6cf); border-radius: 12px; padding: 20px;">
            <h5 style="font-weight: bold; color: #0c5460; margin: 0 0 15px;">Collaborative Context & Environment</h5>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
              <div>
                <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Device Orientation</p>
                <p style="font-weight: bold; margin: 0;">X: 0.3, Y: 0.7, Z: 0.4</p>
              </div>
              <div>
                <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Environment</p>
                <p style="font-weight: bold; margin: 0;">Virtual Lab (Temperature: 23.2°C)</p>
              </div>
              <div>
                <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Learning Path Context</p>
                <p style="font-weight: bold; margin: 0;">Full-Stack Web Development</p>
              </div>
              <div>
                <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Timestamp</p>
                <p style="font-weight: bold; margin: 0;">2023-10-25 14:32:45</p>
              </div>
            </div>

            <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #bee5eb;">
              <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Active Collaborators</p>
              <div style="display: flex; gap: 10px; margin-top: 10px;">
                <div style="width: 35px; height: 35px; background: linear-gradient(135deg, #2196f3, #21cbf3); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.9rem;">AS</div>
                <div style="width: 35px; height: 35px; background: linear-gradient(135deg, #4caf50, #8bc34a); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.9rem;">BP</div>
                <div style="width: 35px; height: 35px; background: linear-gradient(135deg, #9c27b0, #e91e63); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.9rem;">CD</div>
                <div style="width: 35px; height: 35px; background: linear-gradient(135deg, #ff9800, #ffc107); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #212529; font-weight: bold; font-size: 0.9rem;">ES</div>
                <div style="width: 35px; height: 35px; background: linear-gradient(135deg, #00bcd4, #0097a7); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.9rem;">AI</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid #eee;">
        <h4 style="font-weight: bold; color: #333; margin-bottom: 15px;">📊 Learning Path Analytics</h4>

        <div style="background: linear-gradient(135deg, #e3f2fd, #bbdefb); border-radius: 12px; padding: 25px;">
          <h5 style="font-weight: bold; color: #0d47a1; margin-bottom: 15px;">Milestone Progress & Skill Development</h5>
          <p style="color: #0d47a1; margin-bottom: 20px;">Historical data and trends for learning path milestones with skill development metrics</p>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div>
              <h6 style="font-weight: bold; color: #333; margin-bottom: 12px;">Milestone Completion Timeline</h6>
              <div style="background-color: white; border-radius: 8px; padding: 15px; margin-bottom: 15px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                <div style="height: 150px; display: flex; align-items: flex-end; gap: 8px; padding: 10px; border-bottom: 1px solid #eee;">
                  <div style="flex: 1; background: linear-gradient(to top, #4caf50, #8bc34a); border-radius: 4px 4px 0 0; height: 40%;"></div>
                  <div style="flex: 1; background: linear-gradient(to top, #4caf50, #8bc34a); border-radius: 4px 4px 0 0; height: 60%;"></div>
                  <div style="flex: 1; background: linear-gradient(to top, #ff9800, #ffc107); border-radius: 4px 4px 0 0; height: 85%;"></div>
                  <div style="flex: 1; background: linear-gradient(to top, #ff9800, #ffc107); border-radius: 4px 4px 0 0; height: 100%;"></div>
                  <div style="flex: 1; background: linear-gradient(to top, #f44336, #ff5722); border-radius: 4px 4px 0 0; height: 30%;"></div>
                  <div style="flex: 1; background: linear-gradient(to top, #4caf50, #8bc34a); border-radius: 4px 4px 0 0; height: 55%;"></div>
                  <div style="flex: 1; background: linear-gradient(to top, #2196f3, #21cbf3); border-radius: 4px 4px 0 0; height: 75%;"></div>
                </div>
                <div style="display: flex; justify-content: space-between; margin-top: 10px; font-size: 0.8rem; color: #666;">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>
            </div>

            <div>
              <h6 style="font-weight: bold; color: #333; margin-bottom: 12px;">Skill Development Distribution</h6>
              <div style="background-color: white; border-radius: 8px; padding: 15px; margin-bottom: 15px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                <div style="display: flex; align-items: center; margin-bottom: 15px;">
                  <div style="width: 12px; height: 12px; background-color: #4caf50; border-radius: 50%; margin-right: 10px;"></div>
                  <span style="font-size: 0.9rem;">Frontend Development</span>
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 15px;">
                  <div style="width: 12px; height: 12px; background-color: #ff9800; border-radius: 50%; margin-right: 10px;"></div>
                  <span style="font-size: 0.9rem;">Backend Development</span>
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 15px;">
                  <div style="width: 12px; height: 12px; background-color: #f44336; border-radius: 50%; margin-right: 10px;"></div>
                  <span style="font-size: 0.9rem;">Database Design</span>
                </div>
                <div style="display: flex; align-items: center;">
                  <div style="width: 12px; height: 12px; background-color: #9c27b0; border-radius: 50%; margin-right: 10px;"></div>
                  <span style="font-size: 0.9rem;">AI Integration</span>
                </div>
                <div style="margin-top: 15px; height: 150px; display: flex; align-items: flex-end; gap: 15px; padding: 10px; border-bottom: 1px solid #eee;">
                  <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                    <div style="width: 30px; background: linear-gradient(to top, #4caf50, #8bc34a); border-radius: 4px 4px 0 0; height: 90%;"></div>
                    <span style="font-size: 0.8rem; margin-top: 5px;">90%</span>
                  </div>
                  <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                    <div style="width: 30px; background: linear-gradient(to top, #ff9800, #ffc107); border-radius: 4px 4px 0 0; height: 75%;"></div>
                    <span style="font-size: 0.8rem; margin-top: 5px;">75%</span>
                  </div>
                  <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                    <div style="width: 30px; background: linear-gradient(to top, #f44336, #ff5722); border-radius: 4px 4px 0 0; height: 60%;"></div>
                    <span style="font-size: 0.8rem; margin-top: 5px;">60%</span>
                  </div>
                  <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                    <div style="width: 30px; background: linear-gradient(to top, #9c27b0, #e91e63); border-radius: 4px 4px 0 0; height: 45%;"></div>
                    <span style="font-size: 0.8rem; margin-top: 5px;">45%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style="margin-top: 20px; display: flex; justify-content: center; gap: 15px;">
            <button style="background: linear-gradient(135deg, #6a11cb, #2575fc); color: white; font-weight: bold; padding: 12px 25px; border: none; border-radius: 6px; cursor: pointer; font-size: 0.9rem;">
              Export Analytics
            </button>
            <button style="background: linear-gradient(135deg, #007bff, #00d4ff); color: white; font-weight: bold; padding: 12px 25px; border: none; border-radius: 6px; cursor: pointer; font-size: 0.9rem;">
              Generate Report
            </button>
            <button style="background: linear-gradient(135deg, #28a745, #20c997); color: white; font-weight: bold; padding: 12px 25px; border: none; border-radius: 6px; cursor: pointer; font-size: 0.9rem;">
              AI Recommendations
            </button>
          </div>
        </div>
      </div>

      <style>
        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); box-shadow: 0 0 30px #FFD700, 0 0 45px rgba(255, 215, 0, 0.8); }
          50% { transform: translate(-50%, -50%) scale(1.2); box-shadow: 0 0 40px #FFD700, 0 0 60px rgba(255, 215, 0, 1); }
        }
      </style>
    </div>
  `;
}
