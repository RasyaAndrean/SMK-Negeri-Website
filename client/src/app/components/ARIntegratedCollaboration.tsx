// ARIntegratedCollaboration.tsx - Component with AR visualization integration for collaborative sessions
export default function ARIntegratedCollaboration() {
  return `
    <div style="font-family: Arial, sans-serif; background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px; margin-bottom: 30px;">
      <h3 style="font-size: 1.5rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
        <span style="margin-right: 10px;">🔮</span> AR-Integrated Real-time Collaboration
      </h3>

      <div style="background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); border-radius: 12px; padding: 24px; color: white; margin-bottom: 25px;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">
          <h4 style="font-weight: bold; margin: 0;">Network Cabling Project with AR Annotations</h4>
          <span style="background-color: rgba(255, 255, 255, 0.2); color: white; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px; font-weight: bold;">
            ACTIVE SESSION
          </span>
        </div>
        <p style="font-size: 1.1rem; margin-bottom: 20px; opacity: 0.9;">Real-time collaboration with augmented reality annotations for network infrastructure visualization</p>
        <p style="margin-bottom: 20px; max-width: 800px;">Interactive session combining live collaboration features with AR annotation visualization using gold spheres to mark measurement points and network equipment</p>
        <div style="display: flex; gap: 30px; flex-wrap: wrap;">
          <div style="text-align: center;">
            <p style="font-size: 0.9rem; opacity: 0.8;">Participants</p>
            <p style="font-weight: bold; font-size: 1.2rem;">4/5</p>
          </div>
          <div style="text-align: center;">
            <p style="font-size: 0.9rem; opacity: 0.8;">Session Duration</p>
            <p style="font-weight: bold; font-size: 1.2rem;">2h 30m</p>
          </div>
          <div style="text-align: center;">
            <p style="font-size: 0.9rem; opacity: 0.8;">AR Annotations</p>
            <p style="font-weight: bold; font-size: 1.2rem;">8</p>
          </div>
          <div style="text-align: center;">
            <p style="font-size: 0.9rem; opacity: 0.8;">Files Shared</p>
            <p style="font-weight: bold; font-size: 1.2rem;">6</p>
          </div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px;">
        <div>
          <h4 style="font-weight: bold; color: #333; margin-bottom: 15px;">👥 Active Participants with AR Context</h4>

          <div style="margin-bottom: 25px;">
            <div style="display: flex; align-items: center; padding: 15px; background: linear-gradient(135deg, #e3f2fd, #bbdefb); border-radius: 12px; margin-bottom: 15px;">
              <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #2196f3, #21cbf3); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.2rem; margin-right: 15px;">AS</div>
              <div style="flex: 1;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                  <h5 style="font-weight: bold; color: #0d47a1; margin: 0;">Andi Saputra</h5>
                  <span style="background-color: #4caf50; color: white; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px; font-weight: bold;">ONLINE</span>
                </div>
                <p style="color: #666; margin: 3px 0; font-size: 0.9rem;">Network Infrastructure Specialist</p>
                <div style="display: flex; flex-wrap: wrap; gap: 5px; margin-top: 5px;">
                  <span style="background-color: #bbdefb; color: #0d47a1; font-size: 0.75rem; padding: 3px 8px; border-radius: 12px;">Cabling</span>
                  <span style="background-color: #bbdefb; color: #0d47a1; font-size: 0.75rem; padding: 3px 8px; border-radius: 12px;">Measurements</span>
                  <span style="background-color: #bbdefb; color: #0d47a1; font-size: 0.75rem; padding: 3px 8px; border-radius: 12px;">Documentation</span>
                </div>
                <div style="margin-top: 10px;">
                  <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 3px;">
                    <span>Task Progress</span>
                    <span>85%</span>
                  </div>
                  <div style="width: 100%; background-color: #e9ecef; border-radius: 5px; height: 6px;">
                    <div style="background: linear-gradient(90deg, #2196f3, #21cbf3); height: 6px; border-radius: 5px; width: 85%;"></div>
                  </div>
                </div>
              </div>
            </div>

            <div style="display: flex; align-items: center; padding: 15px; background: linear-gradient(135deg, #e8f5e9, #c8e6c9); border-radius: 12px; margin-bottom: 15px;">
              <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #4caf50, #8bc34a); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.2rem; margin-right: 15px;">BP</div>
              <div style="flex: 1;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                  <h5 style="font-weight: bold; color: #2e7d32; margin: 0;">Budi Prasetyo</h5>
                  <span style="background-color: #4caf50; color: white; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px; font-weight: bold;">ONLINE</span>
                </div>
                <p style="color: #666; margin: 3px 0; font-size: 0.9rem;">AR Visualization Specialist</p>
                <div style="display: flex; flex-wrap: wrap; gap: 5px; margin-top: 5px;">
                  <span style="background-color: #c8e6c9; color: #2e7d32; font-size: 0.75rem; padding: 3px 8px; border-radius: 12px;">3D Modeling</span>
                  <span style="background-color: #c8e6c9; color: #2e7d32; font-size: 0.75rem; padding: 3px 8px; border-radius: 12px;">AR Annotations</span>
                  <span style="background-color: #c8e6c9; color: #2e7d32; font-size: 0.75rem; padding: 3px 8px; border-radius: 12px;">Measurements</span>
                </div>
                <div style="margin-top: 10px;">
                  <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 3px;">
                    <span>Task Progress</span>
                    <span>92%</span>
                  </div>
                  <div style="width: 100%; background-color: #e9ecef; border-radius: 5px; height: 6px;">
                    <div style="background: linear-gradient(90deg, #4caf50, #8bc34a); height: 6px; border-radius: 5px; width: 92%;"></div>
                  </div>
                </div>
              </div>
            </div>

            <div style="display: flex; align-items: center; padding: 15px; background: linear-gradient(135deg, #f3e5f5, #e1bee7); border-radius: 12px; margin-bottom: 15px;">
              <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #9c27b0, #e91e63); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.2rem; margin-right: 15px;">CD</div>
              <div style="flex: 1;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                  <h5 style="font-weight: bold; color: #6a1b9a; margin: 0;">Cinta Dewi</h5>
                  <span style="background-color: #4caf50; color: white; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px; font-weight: bold;">ONLINE</span>
                </div>
                <p style="color: #666; margin: 3px 0; font-size: 0.9rem;">Project Coordinator</p>
                <div style="display: flex; flex-wrap: wrap; gap: 5px; margin-top: 5px;">
                  <span style="background-color: #e1bee7; color: #6a1b9a; font-size: 0.75rem; padding: 3px 8px; border-radius: 12px;">Planning</span>
                  <span style="background-color: #e1bee7; color: #6a1b9a; font-size: 0.75rem; padding: 3px 8px; border-radius: 12px;">Documentation</span>
                  <span style="background-color: #e1bee7; color: #6a1b9a; font-size: 0.75rem; padding: 3px 8px; border-radius: 12px;">Reporting</span>
                </div>
                <div style="margin-top: 10px;">
                  <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 3px;">
                    <span>Task Progress</span>
                    <span>78%</span>
                  </div>
                  <div style="width: 100%; background-color: #e9ecef; border-radius: 5px; height: 6px;">
                    <div style="background: linear-gradient(90deg, #9c27b0, #e91e63); height: 6px; border-radius: 5px; width: 78%;"></div>
                  </div>
                </div>
              </div>
            </div>

            <div style="display: flex; align-items: center; padding: 15px; background: linear-gradient(135deg, #fff3e0, #ffe0b2); border-radius: 12px;">
              <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #ff9800, #ffc107); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #212529; font-weight: bold; font-size: 1.2rem; margin-right: 15px;">ES</div>
              <div style="flex: 1;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                  <h5 style="font-weight: bold; color: #ef6c00; margin: 0;">Eka Sari</h5>
                  <span style="background-color: #6c757d; color: white; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px; font-weight: bold;">AWAY</span>
                </div>
                <p style="color: #666; margin: 3px 0; font-size: 0.9rem;">Quality Assurance</p>
                <div style="display: flex; flex-wrap: wrap; gap: 5px; margin-top: 5px;">
                  <span style="background-color: #ffe0b2; color: #ef6c00; font-size: 0.75rem; padding: 3px 8px; border-radius: 12px;">Testing</span>
                  <span style="background-color: #ffe0b2; color: #ef6c00; font-size: 0.75rem; padding: 3px 8px; border-radius: 12px;">Verification</span>
                </div>
                <div style="margin-top: 10px;">
                  <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 3px;">
                    <span>Task Progress</span>
                    <span>65%</span>
                  </div>
                  <div style="width: 100%; background-color: #e9ecef; border-radius: 5px; height: 6px;">
                    <div style="background: linear-gradient(90deg, #ff9800, #ffc107); height: 6px; border-radius: 5px; width: 65%;"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button style="width: 100%; background: linear-gradient(135deg, #dc3545, #ff6b6b); color: white; font-weight: bold; padding: 15px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.1rem; transition: transform 0.2s;">
            🚪 Leave Session
          </button>
        </div>

        <div>
          <h4 style="font-weight: bold; color: #333; margin-bottom: 15px;">💬 Live Chat & AR Activity Feed</h4>

          <div style="height: 400px; overflow-y: auto; background-color: #f8f9fa; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
            <div style="display: flex; margin-bottom: 20px;">
              <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #4caf50, #8bc34a); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.9rem; margin-right: 15px; flex-shrink: 0;">BP</div>
              <div>
                <div style="display: flex; align-items: center; margin-bottom: 5px;">
                  <span style="font-weight: bold; color: #2e7d32; margin-right: 10px;">Budi Prasetyo</span>
                  <span style="font-size: 0.8rem; color: #6c757d;">10:30 AM</span>
                </div>
                <div style="background-color: white; border-radius: 12px; padding: 15px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                  <p style="margin: 0;">I've added a new AR annotation for the server rack measurement. Check it out in the visualization!</p>
                </div>
                <div style="display: flex; gap: 5px; margin-top: 10px;">
                  <span style="background-color: #e9ecef; color: #495057; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px;">📌 AR Annotation</span>
                  <span style="background-color: #e9ecef; color: #495057; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px;">📏 Measurement</span>
                </div>
              </div>
            </div>

            <div style="display: flex; margin-bottom: 20px;">
              <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #2196f3, #21cbf3); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.9rem; margin-right: 15px; flex-shrink: 0;">AS</div>
              <div>
                <div style="display: flex; align-items: center; margin-bottom: 5px;">
                  <span style="font-weight: bold; color: #0d47a1; margin-right: 10px;">Andi Saputra</span>
                  <span style="font-size: 0.8rem; color: #6c757d;">10:35 AM</span>
                </div>
                <div style="background-color: white; border-radius: 12px; padding: 15px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                  <p style="margin: 0;">Verified the distance measurement between switch and router. Accuracy is 96.5%.</p>
                </div>
                <div style="display: flex; gap: 5px; margin-top: 10px;">
                  <span style="background-color: #e9ecef; color: #495057; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px;">✅ Verified</span>
                  <span style="background-color: #e9ecef; color: #495057; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px;">📏 Measurement</span>
                </div>
              </div>
            </div>

            <div style="display: flex; margin-bottom: 20px;">
              <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #9c27b0, #e91e63); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.9rem; margin-right: 15px; flex-shrink: 0;">CD</div>
              <div>
                <div style="display: flex; align-items: center; margin-bottom: 5px;">
                  <span style="font-weight: bold; color: #6a1b9a; margin-right: 10px;">Cinta Dewi</span>
                  <span style="font-size: 0.8rem; color: #6c757d;">10:40 AM</span>
                </div>
                <div style="background-color: white; border-radius: 12px; padding: 15px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                  <p style="margin: 0;">📊 Milestone Update: Network Infrastructure Planning marked as complete</p>
                </div>
              </div>
            </div>

            <div style="display: flex; margin-bottom: 20px;">
              <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #4caf50, #8bc34a); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.9rem; margin-right: 15px; flex-shrink: 0;">BP</div>
              <div>
                <div style="display: flex; align-items: center; margin-bottom: 5px;">
                  <span style="font-weight: bold; color: #2e7d32; margin-right: 10px;">Budi Prasetyo</span>
                  <span style="font-size: 0.8rem; color: #6c757d;">10:45 AM</span>
                </div>
                <div style="background-color: white; border-radius: 12px; padding: 15px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                  <p style="margin: 0;">Added temperature reading annotation near the server room entrance.</p>
                </div>
                <div style="display: flex; gap: 5px; margin-top: 10px;">
                  <span style="background-color: #e9ecef; color: #495057; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px;">🌡️ Temperature</span>
                  <span style="background-color: #e9ecef; color: #495057; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px;">📌 AR Annotation</span>
                </div>
              </div>
            </div>

            <div style="display: flex;">
              <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #2196f3, #21cbf3); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.9rem; margin-right: 15px; flex-shrink: 0;">AS</div>
              <div>
                <div style="display: flex; align-items: center; margin-bottom: 5px;">
                  <span style="font-weight: bold; color: #0d47a1; margin-right: 10px;">Andi Saputra</span>
                  <span style="font-size: 0.8rem; color: #6c757d;">10:50 AM</span>
                </div>
                <div style="background-color: white; border-radius: 12px; padding: 15px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                  <p style="margin: 0;">Uploaded the latest network diagram with all AR annotations marked.</p>
                </div>
                <div style="display: flex; gap: 5px; margin-top: 10px;">
                  <span style="background-color: #e9ecef; color: #495057; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px;">📎 File</span>
                  <span style="background-color: #e9ecef; color: #495057; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px;">🗺️ Diagram</span>
                </div>
              </div>
            </div>
          </div>

          <div style="display: flex; gap: 15px;">
            <input
              type="text"
              placeholder="Type your message..."
              style="flex: 1; padding: 15px; border: 2px solid #e9ecef; border-radius: 8px; outline: none; font-size: 1rem;"
            />
            <button style="background: linear-gradient(135deg, #007bff, #00d4ff); color: white; font-weight: bold; padding: 15px 25px; border: none; border-radius: 8px; cursor: pointer; font-size: 1rem;">
              Send
            </button>
          </div>
        </div>
      </div>

      <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid #eee;">
        <h4 style="font-weight: bold; color: #333; margin-bottom: 15px;">🌐 AR Visualization with Gold Sphere Annotations</h4>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px;">
          <div>
            <div style="background: linear-gradient(135deg, #2c3e50, #4a6491); border-radius: 12px; height: 400px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; position: relative; overflow: hidden;">
              <div style="position: absolute; width: 100%; height: 100%;">
                <!-- Gold spheres representing AR annotations -->
                <div style="position: absolute; top: 20%; left: 25%; width: 40px; height: 40px; background: radial-gradient(circle at 30% 30%, #FFD700, #D4AF37); border-radius: 50%; box-shadow: 0 0 25px #FFD700, 0 0 40px rgba(255, 215, 0, 0.7); transform: translate(-50%, -50%); animation: pulse 1.8s infinite;"></div>
                <div style="position: absolute; top: 70%; left: 35%; width: 32px; height: 32px; background: radial-gradient(circle at 30% 30%, #FFD700, #D4AF37); border-radius: 50%; box-shadow: 0 0 20px #FFD700, 0 0 35px rgba(255, 215, 0, 0.7); transform: translate(-50%, -50%); animation: pulse 1.8s infinite 0.3s;"></div>
                <div style="position: absolute; top: 40%; left: 55%; width: 48px; height: 48px; background: radial-gradient(circle at 30% 30%, #FFD700, #D4AF37); border-radius: 50%; box-shadow: 0 0 30px #FFD700, 0 0 45px rgba(255, 215, 0, 0.7); transform: translate(-50%, -50%); animation: pulse 1.8s infinite 0.6s;"></div>
                <div style="position: absolute; top: 60%; left: 75%; width: 36px; height: 36px; background: radial-gradient(circle at 30% 30%, #FFD700, #D4AF37); border-radius: 50%; box-shadow: 0 0 22px #FFD700, 0 0 38px rgba(255, 215, 0, 0.7); transform: translate(-50%, -50%); animation: pulse 1.8s infinite 0.9s;"></div>

                <!-- Network equipment representation -->
                <div style="position: absolute; top: 30%; left: 40%; width: 140px; height: 90px; background: linear-gradient(135deg, #34495e, #2c3e50); border-radius: 12px; transform: translate(-50%, -50%); box-shadow: 0 0 30px rgba(0,0,0,0.7);">
                  <div style="position: absolute; top: 12px; left: 12px; width: 25px; height: 25px; background: #27ae60; border-radius: 6px;"></div>
                  <div style="position: absolute; top: 12px; right: 12px; width: 25px; height: 25px; background: #27ae60; border-radius: 6px;"></div>
                  <div style="position: absolute; bottom: 12px; left: 12px; width: 25px; height: 25px; background: #27ae60; border-radius: 6px;"></div>
                  <div style="position: absolute; bottom: 12px; right: 12px; width: 25px; height: 25px; background: #27ae60; border-radius: 6px;"></div>
                  <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 0.9rem; color: #3498db; font-weight: bold;">ROUTER</div>
                </div>

                <div style="position: absolute; top: 60%; left: 30%; width: 120px; height: 70px; background: linear-gradient(135deg, #34495e, #2c3e50); border-radius: 12px; transform: translate(-50%, -50%); box-shadow: 0 0 30px rgba(0,0,0,0.7);">
                  <div style="position: absolute; top: 10px; left: 10px; width: 20px; height: 20px; background: #3498db; border-radius: 5px;"></div>
                  <div style="position: absolute; top: 10px; right: 10px; width: 20px; height: 20px; background: #3498db; border-radius: 5px;"></div>
                  <div style="position: absolute; bottom: 10px; left: 10px; width: 20px; height: 20px; background: #3498db; border-radius: 5px;"></div>
                  <div style="position: absolute; bottom: 10px; right: 10px; width: 20px; height: 20px; background: #3498db; border-radius: 5px;"></div>
                  <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 0.8rem; color: #2ecc71; font-weight: bold;">SWITCH</div>
                </div>

                <div style="position: absolute; top: 40%; left: 70%; width: 100px; height: 80px; background: linear-gradient(135deg, #34495e, #2c3e50); border-radius: 12px; transform: translate(-50%, -50%); box-shadow: 0 0 30px rgba(0,0,0,0.7);">
                  <div style="position: absolute; top: 10px; left: 50%; transform: translateX(-50%); width: 30px; height: 30px; background: #e74c3c; border-radius: 50%;"></div>
                  <div style="position: absolute; bottom: 10px; left: 18px; width: 20px; height: 20px; background: #f39c12; border-radius: 5px;"></div>
                  <div style="position: absolute; bottom: 10px; right: 18px; width: 20px; height: 20px; background: #f39c12; border-radius: 5px;"></div>
                  <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 0.8rem; color: #f1c40f; font-weight: bold;">SERVER</div>
                </div>

                <!-- Connection lines -->
                <svg style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
                  <line x1="25%" y1="20%" x2="40%" y2="30%" stroke="#3498db" stroke-width="4" stroke-dasharray="10,10">
                    <animate attributeName="stroke-dashoffset" values="0;20" dur="1.2s" repeatCount="indefinite" />
                  </line>
                  <line x1="40%" y1="30%" x2="35%" y2="70%" stroke="#3498db" stroke-width="4" stroke-dasharray="10,10">
                    <animate attributeName="stroke-dashoffset" values="0;20" dur="1.2s" repeatCount="indefinite" />
                  </line>
                  <line x1="35%" y1="70%" x2="55%" y2="40%" stroke="#3498db" stroke-width="4" stroke-dasharray="10,10">
                    <animate attributeName="stroke-dashoffset" values="0;20" dur="1.2s" repeatCount="indefinite" />
                  </line>
                  <line x1="55%" y1="40%" x2="75%" y2="60%" stroke="#3498db" stroke-width="4" stroke-dasharray="10,10">
                    <animate attributeName="stroke-dashoffset" values="0;20" dur="1.2s" repeatCount="indefinite" />
                  </line>
                </svg>
              </div>

              <div style="text-align: center; color: white; z-index: 10;">
                <div style="font-size: 3rem; margin-bottom: 15px;">🌐</div>
                <p style="font-size: 1.2rem; margin-bottom: 10px;">AR Visualization Active</p>
                <p style="font-size: 0.95rem; opacity: 0.9;">(Gold spheres represent measurement annotations)</p>
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
                <span style="margin-right: 10px;">⚙️</span> AR Visualization Controls
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
            <h4 style="font-weight: bold; color: #333; margin-bottom: 15px;">📌 AR Annotation Details</h4>

            <div style="background: linear-gradient(135deg, #fff3cd, #ffe082); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">
                <h5 style="font-weight: bold; color: #856404; margin: 0;">Distance Measurement #AR-003</h5>
                <span style="background-color: #4caf50; color: white; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px; font-weight: bold;">
                  VERIFIED
                </span>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 20px 0;">
                <div>
                  <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Position (X, Y, Z)</p>
                  <p style="font-weight: bold; margin: 0;">2.1, 3.5, 1.2</p>
                </div>
                <div>
                  <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Measurement</p>
                  <p style="font-weight: bold; margin: 0;">2.8 meters</p>
                </div>
                <div>
                  <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Accuracy</p>
                  <p style="font-weight: bold; margin: 0;">96.5%</p>
                </div>
                <div>
                  <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Created by</p>
                  <p style="font-weight: bold; margin: 0;">Andi Saputra</p>
                </div>
              </div>

              <div style="margin: 20px 0;">
                <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Notes</p>
                <p style="background-color: white; padding: 12px; border-radius: 8px; margin: 0;">Measured distance between router and switch for cable management. Additional 15cm needed for proper slack.</p>
              </div>

              <div style="margin: 20px 0;">
                <p style="font-size: 0.9rem; color: #666; margin: 0 0 10px;">Tags</p>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                  <span style="background-color: #ffeaa7; color: #856404; font-size: 0.8rem; padding: 6px 12px; border-radius: 20px; font-weight: bold;">networking</span>
                  <span style="background-color: #ffeaa7; color: #856404; font-size: 0.8rem; padding: 6px 12px; border-radius: 20px; font-weight: bold;">cabling</span>
                  <span style="background-color: #ffeaa7; color: #856404; font-size: 0.8rem; padding: 6px 12px; border-radius: 20px; font-weight: bold;">measurement</span>
                </div>
              </div>

              <div style="margin: 20px 0;">
                <p style="font-size: 0.9rem; color: #666; margin: 0 0 10px;">Related Annotations</p>
                <div style="display: flex; gap: 10px;">
                  <span style="background-color: #e9ecef; color: #495057; font-size: 0.8rem; padding: 8px 15px; border-radius: 20px; cursor: pointer;">Label: Router #AR-001</span>
                  <span style="background-color: #e9ecef; color: #495057; font-size: 0.8rem; padding: 8px 15px; border-radius: 20px; cursor: pointer;">Label: Switch #AR-002</span>
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
              <h5 style="font-weight: bold; color: #0c5460; margin: 0 0 15px;">Device & Environment Context</h5>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div>
                  <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Device Orientation</p>
                  <p style="font-weight: bold; margin: 0;">X: 0.3, Y: 0.7, Z: 0.4</p>
                </div>
                <div>
                  <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Environment</p>
                  <p style="font-weight: bold; margin: 0;">Server Room (Temperature: 22.8°C)</p>
                </div>
                <div>
                  <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Collaborative Context</p>
                  <p style="font-weight: bold; margin: 0;">Network Cabling Project</p>
                </div>
                <div>
                  <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Timestamp</p>
                  <p style="font-weight: bold; margin: 0;">2023-10-25 10:45:32</p>
                </div>
              </div>

              <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #bee5eb;">
                <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Active Collaborators in AR Session</p>
                <div style="display: flex; gap: 10px; margin-top: 10px;">
                  <div style="width: 35px; height: 35px; background: linear-gradient(135deg, #2196f3, #21cbf3); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.9rem;">AS</div>
                  <div style="width: 35px; height: 35px; background: linear-gradient(135deg, #4caf50, #8bc34a); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.9rem;">BP</div>
                  <div style="width: 35px; height: 35px; background: linear-gradient(135deg, #9c27b0, #e91e63); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.9rem;">CD</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid #eee;">
        <h4 style="font-weight: bold; color: #333; margin-bottom: 15px;">📂 Shared Files & AR Resources</h4>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
          <div style="border: 2px solid #007bff; border-radius: 12px; padding: 20px; background-color: #f8f9fa;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
              <h5 style="font-weight: bold; color: #007bff;">network-diagram-ar.pdf</h5>
              <span style="background-color: #e9ecef; color: #495057; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px;">PDF</span>
            </div>
            <p style="font-size: 0.9rem; color: #666; margin-bottom: 15px;">Network diagram with all AR annotations marked</p>
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 0.85rem; color: #666;">Uploaded by Andi</span>
              <button style="background-color: #007bff; color: white; border: none; border-radius: 6px; padding: 8px 15px; cursor: pointer; font-size: 0.9rem;">Download</button>
            </div>
          </div>

          <div style="border: 2px solid #28a745; border-radius: 12px; padding: 20px; background-color: #f8f9fa;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
              <h5 style="font-weight: bold; color: #28a745;">measurement-data.xlsx</h5>
              <span style="background-color: #e9ecef; color: #495057; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px;">Spreadsheet</span>
            </div>
            <p style="font-size: 0.9rem; color: #666; margin-bottom: 15px;">Complete measurement data with accuracy percentages</p>
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 0.85rem; color: #666;">Uploaded by Budi</span>
              <button style="background-color: #28a745; color: white; border: none; border-radius: 6px; padding: 8px 15px; cursor: pointer; font-size: 0.9rem;">Download</button>
            </div>
          </div>

          <div style="border: 2px solid #ffc107; border-radius: 12px; padding: 20px; background-color: #f8f9fa;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
              <h5 style="font-weight: bold; color: #ffc107;">ar-annotations.json</h5>
              <span style="background-color: #e9ecef; color: #495057; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px;">JSON</span>
            </div>
            <p style="font-size: 0.9rem; color: #666; margin-bottom: 15px;">AR annotation data for 3D visualization</p>
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 0.85rem; color: #666;">Uploaded by Budi</span>
              <button style="background-color: #ffc107; color: #212529; border: none; border-radius: 6px; padding: 8px 15px; cursor: pointer; font-size: 0.9rem;">Download</button>
            </div>
          </div>

          <div style="border: 2px solid #6f42c1; border-radius: 12px; padding: 20px; background-color: #f8f9fa;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
              <h5 style="font-weight: bold; color: #6f42c1;">project-report.docx</h5>
              <span style="background-color: #e9ecef; color: #495057; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px;">Document</span>
            </div>
            <p style="font-size: 0.9rem; color: #666; margin-bottom: 15px;">Project report with AR visualization results</p>
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 0.85rem; color: #666;">Uploaded by Cinta</span>
              <button style="background-color: #6f42c1; color: white; border: none; border-radius: 6px; padding: 8px 15px; cursor: pointer; font-size: 0.9rem;">Download</button>
            </div>
          </div>
        </div>
      </div>

      <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid #eee;">
        <h4 style="font-weight: bold; color: #333; margin-bottom: 15px;">📊 Collaboration & AR Analytics</h4>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
          <div style="background: linear-gradient(135deg, #e3f2fd, #bbdefb); border-radius: 12px; padding: 25px;">
            <h5 style="font-weight: bold; color: #0d47a1; margin-bottom: 15px;">AR Annotation Accuracy Metrics</h5>
            <p style="color: #0d47a1; margin-bottom: 20px;">Measurement accuracy distribution for AR annotations</p>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
              <div>
                <h6 style="font-weight: bold; color: #333; margin-bottom: 12px;">Accuracy Distribution</h6>
                <div style="background-color: white; border-radius: 8px; padding: 15px; margin-bottom: 15px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                  <div style="display: flex; align-items: center; margin-bottom: 15px;">
                    <div style="width: 12px; height: 12px; background-color: #4caf50; border-radius: 50%; margin-right: 10px;"></div>
                    <span style="font-size: 0.9rem;">95-100% (Excellent)</span>
                  </div>
                  <div style="display: flex; align-items: center; margin-bottom: 15px;">
                    <div style="width: 12px; height: 12px; background-color: #ff9800; border-radius: 50%; margin-right: 10px;"></div>
                    <span style="font-size: 0.9rem;">90-95% (Good)</span>
                  </div>
                  <div style="display: flex; align-items: center; margin-bottom: 15px;">
                    <div style="width: 12px; height: 12px; background-color: #f44336; border-radius: 50%; margin-right: 10px;"></div>
                    <span style="font-size: 0.9rem;">85-90% (Acceptable)</span>
                  </div>
                  <div style="display: flex; align-items: center;">
                    <div style="width: 12px; height: 12px; background-color: #6c757d; border-radius: 50%; margin-right: 10px;"></div>
                    <span style="font-size: 0.9rem;">Below 85% (Needs Review)</span>
                  </div>
                  <div style="margin-top: 15px; height: 150px; display: flex; align-items: flex-end; gap: 15px; padding: 10px; border-bottom: 1px solid #eee;">
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                      <div style="width: 30px; background: linear-gradient(to top, #4caf50, #8bc34a); border-radius: 4px 4px 0 0; height: 75%;"></div>
                      <span style="font-size: 0.8rem; margin-top: 5px;">55%</span>
                    </div>
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                      <div style="width: 30px; background: linear-gradient(to top, #ff9800, #ffc107); border-radius: 4px 4px 0 0; height: 35%;"></div>
                      <span style="font-size: 0.8rem; margin-top: 5px;">25%</span>
                    </div>
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                      <div style="width: 30px; background: linear-gradient(to top, #f44336, #ff5722); border-radius: 4px 4px 0 0; height: 10%;"></div>
                      <span style="font-size: 0.8rem; margin-top: 5px;">7%</span>
                    </div>
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                      <div style="width: 30px; background: linear-gradient(to top, #6c757d, #9e9e9e); border-radius: 4px 4px 0 0; height: 3%;"></div>
                      <span style="font-size: 0.8rem; margin-top: 5px;">13%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h6 style="font-weight: bold; color: #333; margin-bottom: 12px;">Measurement Types</h6>
                <div style="background-color: white; border-radius: 8px; padding: 15px; margin-bottom: 15px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                  <div style="display: flex; align-items: center; margin-bottom: 15px;">
                    <div style="width: 12px; height: 12px; background-color: #2196f3; border-radius: 50%; margin-right: 10px;"></div>
                    <span style="font-size: 0.9rem;">Distance</span>
                  </div>
                  <div style="display: flex; align-items: center; margin-bottom: 15px;">
                    <div style="width: 12px; height: 12px; background-color: #4caf50; border-radius: 50%; margin-right: 10px;"></div>
                    <span style="font-size: 0.9rem;">Temperature</span>
                  </div>
                  <div style="display: flex; align-items: center; margin-bottom: 15px;">
                    <div style="width: 12px; height: 12px; background-color: #9c27b0; border-radius: 50%; margin-right: 10px;"></div>
                    <span style="font-size: 0.9rem;">Humidity</span>
                  </div>
                  <div style="display: flex; align-items: center;">
                    <div style="width: 12px; height: 12px; background-color: #ff9800; border-radius: 50%; margin-right: 10px;"></div>
                    <span style="font-size: 0.9rem;">Other</span>
                  </div>
                  <div style="margin-top: 15px; height: 150px; display: flex; align-items: flex-end; gap: 15px; padding: 10px; border-bottom: 1px solid #eee;">
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                      <div style="width: 30px; background: linear-gradient(to top, #2196f3, #21cbf3); border-radius: 4px 4px 0 0; height: 60%;"></div>
                      <span style="font-size: 0.8rem; margin-top: 5px;">42%</span>
                    </div>
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                      <div style="width: 30px; background: linear-gradient(to top, #4caf50, #8bc34a); border-radius: 4px 4px 0 0; height: 25%;"></div>
                      <span style="font-size: 0.8rem; margin-top: 5px;">18%</span>
                    </div>
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                      <div style="width: 30px; background: linear-gradient(to top, #9c27b0, #e91e63); border-radius: 4px 4px 0 0; height: 15%;"></div>
                      <span style="font-size: 0.8rem; margin-top: 5px;">10%</span>
                    </div>
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                      <div style="width: 30px; background: linear-gradient(to top, #ff9800, #ffc107); border-radius: 4px 4px 0 0; height: 30%;"></div>
                      <span style="font-size: 0.8rem; margin-top: 5px;">30%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style="background: linear-gradient(135deg, #fff3e0, #ffe0b2); border-radius: 12px; padding: 25px;">
            <h5 style="font-weight: bold; color: #ef6c00; margin-bottom: 15px;">Collaboration Activity Metrics</h5>
            <p style="color: #ef6c00; margin-bottom: 20px;">Participant engagement and activity distribution</p>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
              <div>
                <h6 style="font-weight: bold; color: #333; margin-bottom: 12px;">Messages by Participant</h6>
                <div style="background-color: white; border-radius: 8px; padding: 15px; margin-bottom: 15px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                  <div style="height: 150px; display: flex; align-items: flex-end; gap: 8px; padding: 10px; border-bottom: 1px solid #eee;">
                    <div style="flex: 1; background: linear-gradient(to top, #2196f3, #21cbf3); border-radius: 4px 4px 0 0; height: 70%;"></div>
                    <div style="flex: 1; background: linear-gradient(to top, #4caf50, #8bc34a); border-radius: 4px 4px 0 0; height: 85%;"></div>
                    <div style="flex: 1; background: linear-gradient(to top, #9c27b0, #e91e63); border-radius: 4px 4px 0 0; height: 60%;"></div>
                    <div style="flex: 1; background: linear-gradient(to top, #ff9800, #ffc107); border-radius: 4px 4px 0 0; height: 40%;"></div>
                  </div>
                  <div style="display: flex; justify-content: space-between; margin-top: 10px; font-size: 0.8rem; color: #666;">
                    <span>Andi</span>
                    <span>Budi</span>
                    <span>Cinta</span>
                    <span>Eka</span>
                  </div>
                </div>
              </div>

              <div>
                <h6 style="font-weight: bold; color: #333; margin-bottom: 12px;">Activity by Type</h6>
                <div style="background-color: white; border-radius: 8px; padding: 15px; margin-bottom: 15px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                  <div style="display: flex; align-items: center; margin-bottom: 15px;">
                    <div style="width: 12px; height: 12px; background-color: #2196f3; border-radius: 50%; margin-right: 10px;"></div>
                    <span style="font-size: 0.9rem;">Messages</span>
                  </div>
                  <div style="display: flex; align-items: center; margin-bottom: 15px;">
                    <div style="width: 12px; height: 12px; background-color: #4caf50; border-radius: 50%; margin-right: 10px;"></div>
                    <span style="font-size: 0.9rem;">AR Annotations</span>
                  </div>
                  <div style="display: flex; align-items: center; margin-bottom: 15px;">
                    <div style="width: 12px; height: 12px; background-color: #9c27b0; border-radius: 50%; margin-right: 10px;"></div>
                    <span style="font-size: 0.9rem;">File Shares</span>
                  </div>
                  <div style="display: flex; align-items: center;">
                    <div style="width: 12px; height: 12px; background-color: #ff9800; border-radius: 50%; margin-right: 10px;"></div>
                    <span style="font-size: 0.9rem;">Milestones</span>
                  </div>
                  <div style="margin-top: 15px; height: 100px; display: flex; align-items: flex-end; gap: 10px; padding: 10px; border-bottom: 1px solid #eee;">
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                      <div style="width: 100%; background: linear-gradient(to top, #2196f3, #21cbf3); border-radius: 4px 4px 0 0; height: 70%;"></div>
                      <span style="font-size: 0.8rem; margin-top: 5px;">42</span>
                    </div>
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                      <div style="width: 100%; background: linear-gradient(to top, #4caf50, #8bc34a); border-radius: 4px 4px 0 0; height: 55%;"></div>
                      <span style="font-size: 0.8rem; margin-top: 5px;">33</span>
                    </div>
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                      <div style="width: 100%; background: linear-gradient(to top, #9c27b0, #e91e63); border-radius: 4px 4px 0 0; height: 30%;"></div>
                      <span style="font-size: 0.8rem; margin-top: 5px;">18</span>
                    </div>
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                      <div style="width: 100%; background: linear-gradient(to top, #ff9800, #ffc107); border-radius: 4px 4px 0 0; height: 20%;"></div>
                      <span style="font-size: 0.8rem; margin-top: 5px;">12</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style="margin-top: 20px; display: flex; justify-content: center; gap: 15px;">
          <button style="background: linear-gradient(135deg, #6a11cb, #2575fc); color: white; font-weight: bold; padding: 12px 25px; border: none; border-radius: 6px; cursor: pointer; font-size: 0.9rem;">
            Export All Analytics
          </button>
          <button style="background: linear-gradient(135deg, #007bff, #00d4ff); color: white; font-weight: bold; padding: 12px 25px; border: none; border-radius: 6px; cursor: pointer; font-size: 0.9rem;">
            Generate Report
          </button>
          <button style="background: linear-gradient(135deg, #28a745, #20c997); color: white; font-weight: bold; padding: 12px 25px; border: none; border-radius: 6px; cursor: pointer; font-size: 0.9rem;">
            AI Insights
          </button>
        </div>
      </div>

      <style>
        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); box-shadow: 0 0 25px #FFD700, 0 0 40px rgba(255, 215, 0, 0.7); }
          50% { transform: translate(-50%, -50%) scale(1.15); box-shadow: 0 0 35px #FFD700, 0 0 50px rgba(255, 215, 0, 0.9); }
        }
      </style>
    </div>
  `;
}
