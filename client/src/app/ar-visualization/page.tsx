// Enhanced AR Visualization Page with gold sphere visualization and detailed contextual information
export default function ARVisualizationPage() {
  return `
    <div style="font-family: Arial, sans-serif; padding: 20px; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); min-height: 100vh;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <div style="margin-bottom: 30px; text-align: center;">
          <h1 style="font-size: 2.5rem; font-weight: bold; color: #333; margin-bottom: 10px;">🔮 AR Visualization Hub 🎯</h1>
          <p style="color: #666; font-size: 1.2rem;">Interactive augmented reality annotations for collaborative learning</p>
        </div>

        <div style="background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); border-radius: 12px; padding: 24px; color: white; margin-bottom: 30px; text-align: center;">
          <h2 style="font-size: 2rem; font-weight: bold; margin-bottom: 15px;">🌐 Network Cabling Visualization</h2>
          <p style="font-size: 1.25rem; margin-bottom: 20px; opacity: 0.9;">Interactive 3D visualization of network infrastructure</p>
          <div style="display: flex; justify-content: center; gap: 30px; flex-wrap: wrap;">
            <div style="text-align: center;">
              <p style="font-size: 0.9rem; opacity: 0.8;">Annotations</p>
              <p style="font-weight: bold; font-size: 1.5rem;">8</p>
            </div>
            <div style="text-align: center;">
              <p style="font-size: 0.9rem; opacity: 0.8;">Verified</p>
              <p style="font-weight: bold; font-size: 1.5rem;">5</p>
            </div>
            <div style="text-align: center;">
              <p style="font-size: 0.9rem; opacity: 0.8;">Collaborators</p>
              <p style="font-weight: bold; font-size: 1.5rem;">3</p>
            </div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 40px;">
          <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px;">
            <h3 style="font-size: 1.5rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
              <span style="margin-right: 10px;">🖥️</span> AR Visualization Canvas
            </h3>

            <div style="background: linear-gradient(135deg, #2c3e50, #4a6491); border-radius: 12px; height: 450px; display: flex; align-items: center; justify-content: center; margin-bottom: 25px; position: relative; overflow: hidden;">
              <div style="position: absolute; width: 100%; height: 100%;">
                <!-- Gold spheres representing annotations -->
                <div style="position: absolute; top: 30%; left: 25%; width: 30px; height: 30px; background: radial-gradient(circle at 30% 30%, #FFD700, #D4AF37); border-radius: 50%; box-shadow: 0 0 15px #FFD700; transform: translate(-50%, -50%);"></div>
                <div style="position: absolute; top: 60%; left: 40%; width: 25px; height: 25px; background: radial-gradient(circle at 30% 30%, #FFD700, #D4AF37); border-radius: 50%; box-shadow: 0 0 12px #FFD700; transform: translate(-50%, -50%);"></div>
                <div style="position: absolute; top: 40%; left: 65%; width: 35px; height: 35px; background: radial-gradient(circle at 30% 30%, #FFD700, #D4AF37); border-radius: 50%; box-shadow: 0 0 18px #FFD700; transform: translate(-50%, -50%);"></div>
                <div style="position: absolute; top: 70%; left: 75%; width: 28px; height: 28px; background: radial-gradient(circle at 30% 30%, #FFD700, #D4AF37); border-radius: 50%; box-shadow: 0 0 14px #FFD700; transform: translate(-50%, -50%);"></div>

                <!-- Network equipment representation -->
                <div style="position: absolute; top: 50%; left: 50%; width: 120px; height: 80px; background: linear-gradient(135deg, #34495e, #2c3e50); border-radius: 8px; transform: translate(-50%, -50%); box-shadow: 0 0 20px rgba(0,0,0,0.5);">
                  <div style="position: absolute; top: 10px; left: 10px; width: 20px; height: 20px; background: #27ae60; border-radius: 4px;"></div>
                  <div style="position: absolute; top: 10px; right: 10px; width: 20px; height: 20px; background: #27ae60; border-radius: 4px;"></div>
                  <div style="position: absolute; bottom: 10px; left: 10px; width: 20px; height: 20px; background: #27ae60; border-radius: 4px;"></div>
                  <div style="position: absolute; bottom: 10px; right: 10px; width: 20px; height: 20px; background: #27ae60; border-radius: 4px;"></div>
                </div>

                <!-- Connection lines -->
                <svg style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
                  <line x1="25%" y1="30%" x2="40%" y2="60%" stroke="#3498db" stroke-width="2" stroke-dasharray="5,5"></line>
                  <line x1="40%" y1="60%" x2="65%" y2="40%" stroke="#3498db" stroke-width="2" stroke-dasharray="5,5"></line>
                  <line x1="65%" y1="40%" x2="75%" y2="70%" stroke="#3498db" stroke-width="2" stroke-dasharray="5,5"></line>
                </svg>
              </div>

              <div style="text-align: center; color: white; z-index: 10;">
                <div style="font-size: 4rem; margin-bottom: 15px;">🌐</div>
                <p style="font-size: 1.2rem; margin-bottom: 10px;">AR Visualization Active</p>
                <p style="font-size: 0.9rem; opacity: 0.8;">(Gold spheres represent measurement annotations)</p>
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 25px;">
              <button style="background: linear-gradient(135deg, #007bff, #00d4ff); color: white; font-weight: bold; padding: 15px; border: none; border-radius: 8px; cursor: pointer; font-size: 1rem; transition: transform 0.2s; display: flex; align-items: center; justify-content: center;">
                <span style="margin-right: 8px;">▶️</span> Start AR Session
              </button>
              <button style="background: linear-gradient(135deg, #28a745, #20c997); color: white; font-weight: bold; padding: 15px; border: none; border-radius: 8px; cursor: pointer; font-size: 1rem; transition: transform 0.2s; display: flex; align-items: center; justify-content: center;">
                <span style="margin-right: 8px;">➕</span> Add Annotation
              </button>
            </div>

            <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px;">
              <h4 style="font-weight: bold; color: #333; margin-bottom: 15px; display: flex; align-items: center;">
                <span style="margin-right: 10px;">⚙️</span> Device Information
              </h4>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div>
                  <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Orientation</p>
                  <p style="font-weight: bold; margin: 0;">X: 0.1, Y: 0.5, Z: 0.2</p>
                </div>
                <div>
                  <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Environment</p>
                  <p style="font-weight: bold; margin: 0;">Indoor Lab</p>
                </div>
                <div>
                  <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Accuracy</p>
                  <p style="font-weight: bold; margin: 0;">95.5%</p>
                </div>
                <div>
                  <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Context</p>
                  <p style="font-weight: bold; margin: 0;">Network Cabling</p>
                </div>
              </div>
            </div>
          </div>

          <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px;">
            <h3 style="font-size: 1.5rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
              <span style="margin-right: 10px;">📌</span> Annotations
            </h3>

            <div style="background: linear-gradient(135deg, #e3f2fd, #bbdefb); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">
                <h4 style="font-weight: bold; color: #0d47a1; margin: 0;">Distance Measurement</h4>
                <span style="background-color: #28a745; color: white; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px; font-weight: bold;">
                  VERIFIED
                </span>
              </div>
              <p style="color: #555; margin: 10px 0;">Measured distance between server rack and wall for cable management</p>

              <div style="display: flex; flex-wrap: wrap; gap: 8px; margin: 15px 0;">
                <span style="background-color: #bbdefb; color: #0d47a1; font-size: 0.8rem; padding: 5px 12px; border-radius: 20px; font-weight: bold;">networking</span>
                <span style="background-color: #bbdefb; color: #0d47a1; font-size: 0.8rem; padding: 5px 12px; border-radius: 20px; font-weight: bold;">infrastructure</span>
                <span style="background-color: #bbdefb; color: #0d47a1; font-size: 0.8rem; padding: 5px 12px; border-radius: 20px; font-weight: bold;">cabling</span>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 15px;">
                <div>
                  <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Position</p>
                  <p style="font-weight: bold; margin: 0;">X: 1.5, Y: 2.3, Z: 0.8</p>
                </div>
                <div>
                  <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Measurement</p>
                  <p style="font-weight: bold; margin: 0;">2.5 meters</p>
                </div>
                <div>
                  <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Accuracy</p>
                  <p style="font-weight: bold; margin: 0;">95.5%</p>
                </div>
                <div>
                  <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Created by</p>
                  <p style="font-weight: bold; margin: 0;">Andi Saputra</p>
                </div>
              </div>

              <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #bbdefb;">
                <p style="font-size: 0.9rem; color: #666; margin: 0 0 8px;">Related Annotations</p>
                <div style="display: flex; gap: 10px;">
                  <span style="background-color: #e3f2fd; color: #0d47a1; font-size: 0.8rem; padding: 6px 12px; border-radius: 20px; cursor: pointer;">Label: Server Rack</span>
                </div>
              </div>
            </div>

            <div style="background: linear-gradient(135deg, #fff3cd, #ffe082); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">
                <h4 style="font-weight: bold; color: #856404; margin: 0;">Temperature Reading</h4>
                <span style="background-color: #ffc107; color: #212529; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px; font-weight: bold;">
                  PENDING
                </span>
              </div>
              <p style="color: #555; margin: 10px 0;">Ambient temperature in server room</p>

              <div style="display: flex; flex-wrap: wrap; gap: 8px; margin: 15px 0;">
                <span style="background-color: #ffeaa7; color: #856404; font-size: 0.8rem; padding: 5px 12px; border-radius: 20px; font-weight: bold;">temperature</span>
                <span style="background-color: #ffeaa7; color: #856404; font-size: 0.8rem; padding: 5px 12px; border-radius: 20px; font-weight: bold;">server-room</span>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 15px;">
                <div>
                  <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Position</p>
                  <p style="font-weight: bold; margin: 0;">X: 3.2, Y: 1.8, Z: 1.2</p>
                </div>
                <div>
                  <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Reading</p>
                  <p style="font-weight: bold; margin: 0;">24.5°C</p>
                </div>
                <div>
                  <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Accuracy</p>
                  <p style="font-weight: bold; margin: 0;">92.3%</p>
                </div>
                <div>
                  <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Created by</p>
                  <p style="font-weight: bold; margin: 0;">Budi Prasetyo</p>
                </div>
              </div>
            </div>

            <div style="background: linear-gradient(135deg, #d1ecf1, #a8e6cf); border-radius: 12px; padding: 20px;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">
                <h4 style="font-weight: bold; color: #0c5460; margin: 0;">Cable Identification</h4>
                <span style="background-color: #17a2b8; color: white; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px; font-weight: bold;">
                  VERIFIED
                </span>
              </div>
              <p style="color: #555; margin: 10px 0;">Ethernet cable connecting switch to router</p>

              <div style="display: flex; flex-wrap: wrap; gap: 8px; margin: 15px 0;">
                <span style="background-color: #bee5eb; color: #0c5460; font-size: 0.8rem; padding: 5px 12px; border-radius: 20px; font-weight: bold;">ethernet</span>
                <span style="background-color: #bee5eb; color: #0c5460; font-size: 0.8rem; padding: 5px 12px; border-radius: 20px; font-weight: bold;">networking</span>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 15px;">
                <div>
                  <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Position</p>
                  <p style="font-weight: bold; margin: 0;">X: 2.1, Y: 0.9, Z: 0.5</p>
                </div>
                <div>
                  <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Type</p>
                  <p style="font-weight: bold; margin: 0;">Cat6</p>
                </div>
                <div>
                  <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Accuracy</p>
                  <p style="font-weight: bold; margin: 0;">97.8%</p>
                </div>
                <div>
                  <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Created by</p>
                  <p style="font-weight: bold; margin: 0;">Cinta Dewi</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px; margin-bottom: 40px;">
          <h3 style="font-size: 1.5rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
            <span style="margin-right: 10px;">🏷️</span> Tag-based Filtering
          </h3>

          <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 25px;">
            <span style="background: linear-gradient(135deg, #007bff, #00d4ff); color: white; font-size: 1rem; padding: 10px 20px; border-radius: 30px; cursor: pointer; font-weight: bold;">All</span>
            <span style="background-color: #e9ecef; color: #495057; font-size: 1rem; padding: 10px 20px; border-radius: 30px; cursor: pointer; font-weight: bold;">networking</span>
            <span style="background-color: #e9ecef; color: #495057; font-size: 1rem; padding: 10px 20px; border-radius: 30px; cursor: pointer; font-weight: bold;">infrastructure</span>
            <span style="background-color: #e9ecef; color: #495057; font-size: 1rem; padding: 10px 20px; border-radius: 30px; cursor: pointer; font-weight: bold;">cabling</span>
            <span style="background-color: #e9ecef; color: #495057; font-size: 1rem; padding: 10px 20px; border-radius: 30px; cursor: pointer; font-weight: bold;">temperature</span>
            <span style="background-color: #e9ecef; color: #495057; font-size: 1rem; padding: 10px 20px; border-radius: 30px; cursor: pointer; font-weight: bold;">server-room</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px;">
            <div style="border: 2px solid #007bff; border-radius: 12px; padding: 20px; background-color: #f8f9fa;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
                <h4 style="font-weight: bold; color: #007bff;">Distance Measurement</h4>
                <span style="background-color: #28a745; color: white; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px; font-weight: bold;">Verified</span>
              </div>
              <p style="font-size: 1rem; color: #666; margin-bottom: 15px;">2.5 meters</p>
              <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                <span style="background-color: #e9ecef; color: #495057; font-size: 0.8rem; padding: 4px 10px; border-radius: 15px;">networking</span>
                <span style="background-color: #e9ecef; color: #495057; font-size: 0.8rem; padding: 4px 10px; border-radius: 15px;">cabling</span>
              </div>
              <div style="margin-top: 15px; display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 0.85rem; color: #666;">Position: (1.5, 2.3, 0.8)</span>
                <button style="background-color: #007bff; color: white; border: none; border-radius: 6px; padding: 6px 12px; cursor: pointer; font-size: 0.85rem;">View</button>
              </div>
            </div>

            <div style="border: 2px solid #ffc107; border-radius: 12px; padding: 20px; background-color: #fff8e1;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
                <h4 style="font-weight: bold; color: #ffc107;">Temperature Reading</h4>
                <span style="background-color: #ffc107; color: #212529; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px; font-weight: bold;">Pending</span>
              </div>
              <p style="font-size: 1rem; color: #666; margin-bottom: 15px;">24.5°C</p>
              <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                <span style="background-color: #e9ecef; color: #495057; font-size: 0.8rem; padding: 4px 10px; border-radius: 15px;">temperature</span>
                <span style="background-color: #e9ecef; color: #495057; font-size: 0.8rem; padding: 4px 10px; border-radius: 15px;">server-room</span>
              </div>
              <div style="margin-top: 15px; display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 0.85rem; color: #666;">Position: (3.2, 1.8, 1.2)</span>
                <button style="background-color: #ffc107; color: #212529; border: none; border-radius: 6px; padding: 6px 12px; cursor: pointer; font-size: 0.85rem;">View</button>
              </div>
            </div>

            <div style="border: 2px solid #17a2b8; border-radius: 12px; padding: 20px; background-color: #d1ecf1;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
                <h4 style="font-weight: bold; color: #17a2b8;">Cable Identification</h4>
                <span style="background-color: #17a2b8; color: white; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px; font-weight: bold;">Verified</span>
              </div>
              <p style="font-size: 1rem; color: #666; margin-bottom: 15px;">Cat6 Ethernet</p>
              <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                <span style="background-color: #e9ecef; color: #495057; font-size: 0.8rem; padding: 4px 10px; border-radius: 15px;">networking</span>
                <span style="background-color: #e9ecef; color: #495057; font-size: 0.8rem; padding: 4px 10px; border-radius: 15px;">ethernet</span>
              </div>
              <div style="margin-top: 15px; display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 0.85rem; color: #666;">Position: (2.1, 0.9, 0.5)</span>
                <button style="background-color: #17a2b8; color: white; border: none; border-radius: 6px; padding: 6px 12px; cursor: pointer; font-size: 0.85rem;">View</button>
              </div>
            </div>
          </div>
        </div>

        <div style="text-align: center; padding: 30px; background: linear-gradient(135deg, #6a11cb, #2575fc); border-radius: 12px; color: white; margin-bottom: 30px;">
          <h3 style="font-size: 1.8rem; font-weight: bold; margin-bottom: 15px;">🔬 Ready to create your own AR annotations?</h3>
          <p style="font-size: 1.1rem; margin-bottom: 25px; max-width: 700px; margin-left: auto; margin-right: auto; opacity: 0.9;">
            Start a new AR session to measure, label, and document your collaborative projects in 3D space!
          </p>
          <button style="background: linear-gradient(135deg, #ff9a9e, #fad0c4); color: #333; font-weight: bold; padding: 16px 32px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.2rem; transition: transform 0.2s;">
            🎯 Start New AR Session
          </button>
        </div>

        <div style="text-align: center; padding: 30px; background: linear-gradient(135deg, #2575fc, #6a11cb); border-radius: 12px; color: white;">
          <h3 style="font-size: 1.8rem; font-weight: bold; margin-bottom: 15px;">🌟 Explore Advanced AR Visualizations 🌟</h3>
          <p style="font-size: 1.1rem; margin-bottom: 25px; max-width: 700px; margin-left: auto; margin-right: auto; opacity: 0.9;">
            Discover more sophisticated AR visualization features with our enhanced components
          </p>
          <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
            <a href="/ar-visualization/advanced" style="background: linear-gradient(135deg, #ff9a9e, #fad0c4); color: #333; font-weight: bold; padding: 16px 32px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.2rem; transition: transform 0.2s; text-decoration: none; display: inline-block;">
              🔮 Advanced Visualization
            </a>
            <a href="/ar-visualization/super-enhanced" style="background: linear-gradient(135deg, #d4fc79, #96e6a1); color: #333; font-weight: bold; padding: 16px 32px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.2rem; transition: transform 0.2s; text-decoration: none; display: inline-block;">
              🔮 Super Enhanced Visualization
            </a>
            <a href="/ar-visualization/collaborative-learning" style="background: linear-gradient(135deg, #a18cd1, #fbc2eb); color: #333; font-weight: bold; padding: 16px 32px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.2rem; transition: transform 0.2s; text-decoration: none; display: inline-block;">
              🎯 Collaborative Learning
            </a>
            <a href="/ar-visualization/integrated-collaboration" style="background: linear-gradient(135deg, #f6d365, #fda085); color: #333; font-weight: bold; padding: 16px 32px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.2rem; transition: transform 0.2s; text-decoration: none; display: inline-block;">
              🔮 Integrated Collaboration
            </a>
            <a href="/ar-visualization/ultimate" style="background: linear-gradient(135deg, #ff758c, #ff7eb3); color: #333; font-weight: bold; padding: 16px 32px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.2rem; transition: transform 0.2s; text-decoration: none; display: inline-block;">
              🔮 Ultimate Visualization
            </a>
            <a href="/docs" style="background: linear-gradient(135deg, #a1c4fd, #c2e9fb); color: #333; font-weight: bold; padding: 16px 32px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.2rem; transition: transform 0.2s; text-decoration: none; display: inline-block;">
              📘 Documentation
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}
