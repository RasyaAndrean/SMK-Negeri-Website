// AdvancedARVisualization.tsx - Component with enhanced AR visualization features
export default function AdvancedARVisualization() {
  return `
    <div style="font-family: Arial, sans-serif; background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px; margin-bottom: 30px;">
      <h3 style="font-size: 1.5rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
        <span style="margin-right: 10px;">🔮</span> Advanced AR Visualization
      </h3>

      <div style="background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); border-radius: 12px; padding: 24px; color: white; margin-bottom: 25px;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">
          <h4 style="font-weight: bold; margin: 0;">Network Infrastructure Visualization</h4>
          <span style="background-color: rgba(255, 255, 255, 0.2); color: white; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px; font-weight: bold;">
            ACTIVE SESSION
          </span>
        </div>
        <p style="font-size: 1.1rem; margin-bottom: 20px; opacity: 0.9;">3D visualization of network equipment with measurement annotations</p>
        <p style="margin-bottom: 20px; max-width: 800px;">Interactive AR environment showing real-time data from network devices with gold sphere annotations representing measurement points</p>
        <div style="display: flex; gap: 30px; flex-wrap: wrap;">
          <div style="text-align: center;">
            <p style="font-size: 0.9rem; opacity: 0.8;">Annotations</p>
            <p style="font-weight: bold; font-size: 1.2rem;">12</p>
          </div>
          <div style="text-align: center;">
            <p style="font-size: 0.9rem; opacity: 0.8;">Devices</p>
            <p style="font-weight: bold; font-size: 1.2rem;">8</p>
          </div>
          <div style="text-align: center;">
            <p style="font-size: 0.9rem; opacity: 0.8;">Session Duration</p>
            <p style="font-weight: bold; font-size: 1.2rem;">1h 45m</p>
          </div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px;">
        <div>
          <h4 style="font-weight: bold; color: #333; margin-bottom: 15px;">🌐 3D Visualization</h4>

          <div style="background: linear-gradient(135deg, #2c3e50, #4a6491); border-radius: 12px; height: 400px; display: flex; align-items: center; justify-content: center; margin-bottom: 25px; position: relative; overflow: hidden;">
            <div style="position: absolute; width: 100%; height: 100%;">
              <!-- Gold spheres representing annotations -->
              <div style="position: absolute; top: 20%; left: 30%; width: 35px; height: 35px; background: radial-gradient(circle at 30% 30%, #FFD700, #D4AF37); border-radius: 50%; box-shadow: 0 0 20px #FFD700; transform: translate(-50%, -50%); animation: pulse 2s infinite;"></div>
              <div style="position: absolute; top: 70%; left: 25%; width: 28px; height: 28px; background: radial-gradient(circle at 30% 30%, #FFD700, #D4AF37); border-radius: 50%; box-shadow: 0 0 16px #FFD700; transform: translate(-50%, -50%); animation: pulse 2s infinite;"></div>
              <div style="position: absolute; top: 40%; left: 50%; width: 42px; height: 42px; background: radial-gradient(circle at 30% 30%, #FFD700, #D4AF37); border-radius: 50%; box-shadow: 0 0 24px #FFD700; transform: translate(-50%, -50%); animation: pulse 2s infinite;"></div>
              <div style="position: absolute; top: 60%; left: 70%; width: 32px; height: 32px; background: radial-gradient(circle at 30% 30%, #FFD700, #D4AF37); border-radius: 50%; box-shadow: 0 0 18px #FFD700; transform: translate(-50%, -50%); animation: pulse 2s infinite;"></div>
              <div style="position: absolute; top: 30%; left: 75%; width: 25px; height: 25px; background: radial-gradient(circle at 30% 30%, #FFD700, #D4AF37); border-radius: 50%; box-shadow: 0 0 14px #FFD700; transform: translate(-50%, -50%); animation: pulse 2s infinite;"></div>

              <!-- Network equipment representation -->
              <div style="position: absolute; top: 30%; left: 40%; width: 140px; height: 90px; background: linear-gradient(135deg, #34495e, #2c3e50); border-radius: 10px; transform: translate(-50%, -50%); box-shadow: 0 0 25px rgba(0,0,0,0.6);">
                <div style="position: absolute; top: 12px; left: 12px; width: 25px; height: 25px; background: #27ae60; border-radius: 5px;"></div>
                <div style="position: absolute; top: 12px; right: 12px; width: 25px; height: 25px; background: #27ae60; border-radius: 5px;"></div>
                <div style="position: absolute; bottom: 12px; left: 12px; width: 25px; height: 25px; background: #27ae60; border-radius: 5px;"></div>
                <div style="position: absolute; bottom: 12px; right: 12px; width: 25px; height: 25px; background: #27ae60; border-radius: 5px;"></div>
                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 0.8rem; color: #3498db; font-weight: bold;">ROUTER</div>
              </div>

              <div style="position: absolute; top: 60%; left: 30%; width: 120px; height: 70px; background: linear-gradient(135deg, #34495e, #2c3e50); border-radius: 10px; transform: translate(-50%, -50%); box-shadow: 0 0 25px rgba(0,0,0,0.6);">
                <div style="position: absolute; top: 10px; left: 10px; width: 20px; height: 20px; background: #3498db; border-radius: 4px;"></div>
                <div style="position: absolute; top: 10px; right: 10px; width: 20px; height: 20px; background: #3498db; border-radius: 4px;"></div>
                <div style="position: absolute; bottom: 10px; left: 10px; width: 20px; height: 20px; background: #3498db; border-radius: 4px;"></div>
                <div style="position: absolute; bottom: 10px; right: 10px; width: 20px; height: 20px; background: #3498db; border-radius: 4px;"></div>
                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 0.7rem; color: #2ecc71; font-weight: bold;">SWITCH</div>
              </div>

              <div style="position: absolute; top: 40%; left: 70%; width: 100px; height: 80px; background: linear-gradient(135deg, #34495e, #2c3e50); border-radius: 10px; transform: translate(-50%, -50%); box-shadow: 0 0 25px rgba(0,0,0,0.6);">
                <div style="position: absolute; top: 10px; left: 50%; transform: translateX(-50%); width: 30px; height: 30px; background: #e74c3c; border-radius: 50%;"></div>
                <div style="position: absolute; bottom: 10px; left: 20px; width: 20px; height: 20px; background: #f39c12; border-radius: 4px;"></div>
                <div style="position: absolute; bottom: 10px; right: 20px; width: 20px; height: 20px; background: #f39c12; border-radius: 4px;"></div>
                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 0.7rem; color: #f1c40f; font-weight: bold;">SERVER</div>
              </div>

              <!-- Connection lines -->
              <svg style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
                <line x1="30%" y1="20%" x2="40%" y2="30%" stroke="#3498db" stroke-width="3" stroke-dasharray="6,6">
                  <animate attributeName="stroke-dashoffset" values="0;12" dur="1s" repeatCount="indefinite" />
                </line>
                <line x1="40%" y1="30%" x2="30%" y2="70%" stroke="#3498db" stroke-width="3" stroke-dasharray="6,6">
                  <animate attributeName="stroke-dashoffset" values="0;12" dur="1s" repeatCount="indefinite" />
                </line>
                <line x1="30%" y1="70%" x2="50%" y2="40%" stroke="#3498db" stroke-width="3" stroke-dasharray="6,6">
                  <animate attributeName="stroke-dashoffset" values="0;12" dur="1s" repeatCount="indefinite" />
                </line>
                <line x1="50%" y1="40%" x2="70%" y2="60%" stroke="#3498db" stroke-width="3" stroke-dasharray="6,6">
                  <animate attributeName="stroke-dashoffset" values="0;12" dur="1s" repeatCount="indefinite" />
                </line>
                <line x1="70%" y1="60%" x2="75%" y2="30%" stroke="#3498db" stroke-width="3" stroke-dasharray="6,6">
                  <animate attributeName="stroke-dashoffset" values="0;12" dur="1s" repeatCount="indefinite" />
                </line>
              </svg>
            </div>

            <div style="text-align: center; color: white; z-index: 10;">
              <div style="font-size: 3rem; margin-bottom: 15px;">🌐</div>
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
          <h4 style="font-weight: bold; color: #333; margin-bottom: 15px;">📌 Measurement Annotations</h4>

          <div style="height: 450px; overflow-y: auto; background-color: #f8f9fa; border-radius: 12px; padding: 20px;">
            <div style="background: linear-gradient(135deg, #e3f2fd, #bbdefb); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">
                <h5 style="font-weight: bold; color: #0d47a1; margin: 0;">Distance Measurement #1</h5>
                <span style="background-color: #4caf50; color: white; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px; font-weight: bold;">
                  VERIFIED
                </span>
              </div>
              <p style="color: #666; margin: 10px 0;">Distance between Router and Switch</p>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 15px;">
                <div>
                  <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Value</p>
                  <p style="font-weight: bold; font-size: 1.2rem; color: #0d47a1; margin: 0;">2.5 meters</p>
                </div>
                <div>
                  <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Timestamp</p>
                  <p style="font-weight: bold; font-size: 0.9rem; color: #0d47a1; margin: 0;">10:45 AM</p>
                </div>
              </div>
              <div style="margin-top: 15px; display: flex; gap: 10px;">
                <button style="background-color: #007bff; color: white; border: none; border-radius: 6px; padding: 8px 15px; cursor: pointer; font-size: 0.9rem;">View in AR</button>
                <button style="background-color: #6c757d; color: white; border: none; border-radius: 6px; padding: 8px 15px; cursor: pointer; font-size: 0.9rem;">Export</button>
              </div>
            </div>

            <div style="background: linear-gradient(135deg, #fff3cd, #ffe082); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">
                <h5 style="font-weight: bold; color: #856404; margin: 0;">Temperature Reading #3</h5>
                <span style="background-color: #ffc107; color: #212529; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px; font-weight: bold;">
                  PENDING
                </span>
              </div>
              <p style="color: #666; margin: 10px 0;">Server room temperature</p>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 15px;">
                <div>
                  <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Value</p>
                  <p style="font-weight: bold; font-size: 1.2rem; color: #856404; margin: 0;">24.5°C</p>
                </div>
                <div>
                  <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Timestamp</p>
                  <p style="font-weight: bold; font-size: 0.9rem; color: #856404; margin: 0;">10:52 AM</p>
                </div>
              </div>
              <div style="margin-top: 15px; display: flex; gap: 10px;">
                <button style="background-color: #ffc107; color: #212529; border: none; border-radius: 6px; padding: 8px 15px; cursor: pointer; font-size: 0.9rem;">View in AR</button>
                <button style="background-color: #6c757d; color: white; border: none; border-radius: 6px; padding: 8px 15px; cursor: pointer; font-size: 0.9rem;">Export</button>
              </div>
            </div>

            <div style="background: linear-gradient(135deg, #e8f5e9, #c8e6c9); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">
                <h5 style="font-weight: bold; color: #2e7d32; margin: 0;">Network Latency #2</h5>
                <span style="background-color: #4caf50; color: white; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px; font-weight: bold;">
                  VERIFIED
                </span>
              </div>
              <p style="color: #666; margin: 10px 0;">Latency between devices</p>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 15px;">
                <div>
                  <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Value</p>
                  <p style="font-weight: bold; font-size: 1.2rem; color: #2e7d32; margin: 0;">12ms</p>
                </div>
                <div>
                  <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Timestamp</p>
                  <p style="font-weight: bold; font-size: 0.9rem; color: #2e7d32; margin: 0;">10:58 AM</p>
                </div>
              </div>
              <div style="margin-top: 15px; display: flex; gap: 10px;">
                <button style="background-color: #28a745; color: white; border: none; border-radius: 6px; padding: 8px 15px; cursor: pointer; font-size: 0.9rem;">View in AR</button>
                <button style="background-color: #6c757d; color: white; border: none; border-radius: 6px; padding: 8px 15px; cursor: pointer; font-size: 0.9rem;">Export</button>
              </div>
            </div>

            <div style="background: linear-gradient(135deg, #f3e5f5, #e1bee7); border-radius: 12px; padding: 20px;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">
                <h5 style="font-weight: bold; color: #6a1b9a; margin: 0;">Power Consumption #4</h5>
                <span style="background-color: #9c27b0; color: white; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px; font-weight: bold;">
                  VERIFIED
                </span>
              </div>
              <p style="color: #666; margin: 10px 0;">Total power consumption</p>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 15px;">
                <div>
                  <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Value</p>
                  <p style="font-weight: bold; font-size: 1.2rem; color: #6a1b9a; margin: 0;">185W</p>
                </div>
                <div>
                  <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Timestamp</p>
                  <p style="font-weight: bold; font-size: 0.9rem; color: #6a1b9a; margin: 0;">11:02 AM</p>
                </div>
              </div>
              <div style="margin-top: 15px; display: flex; gap: 10px;">
                <button style="background-color: #6f42c1; color: white; border: none; border-radius: 6px; padding: 8px 15px; cursor: pointer; font-size: 0.9rem;">View in AR</button>
                <button style="background-color: #6c757d; color: white; border: none; border-radius: 6px; padding: 8px 15px; cursor: pointer; font-size: 0.9rem;">Export</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid #eee;">
        <h4 style="font-weight: bold; color: #333; margin-bottom: 15px;">📊 Visualization Analytics</h4>

        <div style="background: linear-gradient(135deg, #e3f2fd, #bbdefb); border-radius: 12px; padding: 25px;">
          <h5 style="font-weight: bold; color: #0d47a1; margin-bottom: 15px;">Measurement Trends</h5>
          <p style="color: #0d47a1; margin-bottom: 20px;">Historical data and trends for network measurements</p>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div>
              <h6 style="font-weight: bold; color: #333; margin-bottom: 12px;">Temperature Trend</h6>
              <div style="background-color: white; border-radius: 8px; padding: 15px; margin-bottom: 15px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                <div style="height: 150px; display: flex; align-items: flex-end; gap: 8px; padding: 10px; border-bottom: 1px solid #eee;">
                  <div style="flex: 1; background: linear-gradient(to top, #4caf50, #8bc34a); border-radius: 4px 4px 0 0; height: 60%;"></div>
                  <div style="flex: 1; background: linear-gradient(to top, #4caf50, #8bc34a); border-radius: 4px 4px 0 0; height: 70%;"></div>
                  <div style="flex: 1; background: linear-gradient(to top, #ff9800, #ffc107); border-radius: 4px 4px 0 0; height: 85%;"></div>
                  <div style="flex: 1; background: linear-gradient(to top, #ff9800, #ffc107); border-radius: 4px 4px 0 0; height: 90%;"></div>
                  <div style="flex: 1; background: linear-gradient(to top, #f44336, #ff5722); border-radius: 4px 4px 0 0; height: 95%;"></div>
                </div>
                <div style="display: flex; justify-content: space-between; margin-top: 10px; font-size: 0.8rem; color: #666;">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                </div>
              </div>
            </div>

            <div>
              <h6 style="font-weight: bold; color: #333; margin-bottom: 12px;">Network Latency</h6>
              <div style="background-color: white; border-radius: 8px; padding: 15px; margin-bottom: 15px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                <div style="height: 150px; display: flex; align-items: flex-end; gap: 8px; padding: 10px; border-bottom: 1px solid #eee;">
                  <div style="flex: 1; background: linear-gradient(to top, #2196f3, #21cbf3); border-radius: 4px 4px 0 0; height: 40%;"></div>
                  <div style="flex: 1; background: linear-gradient(to top, #2196f3, #21cbf3); border-radius: 4px 4px 0 0; height: 35%;"></div>
                  <div style="flex: 1; background: linear-gradient(to top, #4caf50, #8bc34a); border-radius: 4px 4px 0 0; height: 30%;"></div>
                  <div style="flex: 1; background: linear-gradient(to top, #4caf50, #8bc34a); border-radius: 4px 4px 0 0; height: 25%;"></div>
                  <div style="flex: 1; background: linear-gradient(to top, #4caf50, #8bc34a); border-radius: 4px 4px 0 0; height: 20%;"></div>
                </div>
                <div style="display: flex; justify-content: space-between; margin-top: 10px; font-size: 0.8rem; color: #666;">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
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
          </div>
        </div>
      </div>
    </div>
  `;
}
