// RealTimeCollaboration.tsx - Component for real-time collaboration features
export default function RealTimeCollaboration() {
  return `
    <div style="font-family: Arial, sans-serif; background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px; margin-bottom: 30px;">
      <h3 style="font-size: 1.5rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
        <span style="margin-right: 10px;">🔄</span> Real-time Collaboration
      </h3>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px;">
        <div>
          <h4 style="font-weight: bold; color: #333; margin-bottom: 15px;">👥 Active Participants</h4>

          <div style="background: linear-gradient(135deg, #e3f2fd, #bbdefb); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
            <div style="display: flex; align-items: center; padding: 15px; background-color: white; border-radius: 8px; margin-bottom: 15px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
              <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #2196f3, #21cbf3); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1rem; margin-right: 15px;">AS</div>
              <div style="flex: 1;">
                <h5 style="font-weight: bold; color: #0d47a1; margin: 0;">Andi Saputra</h5>
                <p style="color: #666; margin: 3px 0 0; font-size: 0.9rem;">Frontend Developer</p>
              </div>
              <div style="width: 12px; height: 12px; background-color: #4caf50; border-radius: 50%;"></div>
            </div>

            <div style="display: flex; align-items: center; padding: 15px; background-color: white; border-radius: 8px; margin-bottom: 15px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
              <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #4caf50, #8bc34a); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1rem; margin-right: 15px;">BP</div>
              <div style="flex: 1;">
                <h5 style="font-weight: bold; color: #2e7d32; margin: 0;">Budi Prasetyo</h5>
                <p style="color: #666; margin: 3px 0 0; font-size: 0.9rem;">Backend Developer</p>
              </div>
              <div style="width: 12px; height: 12px; background-color: #4caf50; border-radius: 50%;"></div>
            </div>

            <div style="display: flex; align-items: center; padding: 15px; background-color: white; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
              <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #9c27b0, #e91e63); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1rem; margin-right: 15px;">CD</div>
              <div style="flex: 1;">
                <h5 style="font-weight: bold; color: #6a1b9a; margin: 0;">Cinta Dewi</h5>
                <p style="color: #666; margin: 3px 0 0; font-size: 0.9rem;">UI/UX Designer</p>
              </div>
              <div style="width: 12px; height: 12px; background-color: #ff9800; border-radius: 50%;"></div>
            </div>
          </div>

          <button style="width: 100%; background: linear-gradient(135deg, #007bff, #00d4ff); color: white; font-weight: bold; padding: 15px; border: none; border-radius: 8px; cursor: pointer; font-size: 1rem; transition: transform 0.2s; display: flex; align-items: center; justify-content: center;">
            <span style="margin-right: 8px;">👥</span> Invite More Participants
          </button>
        </div>

        <div>
          <h4 style="font-weight: bold; color: #333; margin-bottom: 15px;">💬 Live Chat</h4>

          <div style="background-color: #f8f9fa; border-radius: 12px; padding: 20px; height: 300px; overflow-y: auto; margin-bottom: 15px;">
            <div style="display: flex; margin-bottom: 15px;">
              <div style="width: 30px; height: 30px; background: linear-gradient(135deg, #2196f3, #21cbf3); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.8rem; margin-right: 10px; flex-shrink: 0;">AS</div>
              <div>
                <p style="font-weight: bold; color: #0d47a1; margin: 0 0 5px;">Andi Saputra</p>
                <p style="background-color: white; padding: 10px; border-radius: 8px; margin: 0; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">I've completed the frontend layout for the dashboard. What do you think?</p>
                <p style="font-size: 0.8rem; color: #666; margin: 5px 0 0;">10:20 AM</p>
              </div>
            </div>

            <div style="display: flex; margin-bottom: 15px;">
              <div style="width: 30px; height: 30px; background: linear-gradient(135deg, #4caf50, #8bc34a); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.8rem; margin-right: 10px; flex-shrink: 0;">BP</div>
              <div>
                <p style="font-weight: bold; color: #2e7d32; margin: 0 0 5px;">Budi Prasetyo</p>
                <p style="background-color: white; padding: 10px; border-radius: 8px; margin: 0; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">Looks great! I'll start working on the API endpoints for user management.</p>
                <p style="font-size: 0.8rem; color: #666; margin: 5px 0 0;">10:35 AM</p>
              </div>
            </div>

            <div style="display: flex; margin-bottom: 15px;">
              <div style="width: 30px; height: 30px; background: linear-gradient(135deg, #9c27b0, #e91e63); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.8rem; margin-right: 10px; flex-shrink: 0;">CD</div>
              <div>
                <p style="font-weight: bold; color: #6a1b9a; margin: 0 0 5px;">Cinta Dewi</p>
                <p style="background-color: white; padding: 10px; border-radius: 8px; margin: 0; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">Can we schedule a design review meeting for tomorrow?</p>
                <p style="font-size: 0.8rem; color: #666; margin: 5px 0 0;">10:45 AM</p>
              </div>
            </div>
          </div>

          <div style="display: flex; gap: 10px;">
            <input type="text" placeholder="Type your message..." style="flex: 1; padding: 12px; border: 1px solid #ddd; border-radius: 8px; outline: none;" />
            <button style="background: linear-gradient(135deg, #28a745, #20c997); color: white; border: none; border-radius: 8px; padding: 0 20px; font-weight: bold; cursor: pointer;">Send</button>
          </div>
        </div>
      </div>

      <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid #eee;">
        <h4 style="font-weight: bold; color: #333; margin-bottom: 15px;">📊 Live Progress Tracking</h4>

        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 15px;">
          <div style="background: linear-gradient(135deg, #e8f5e9, #c8e6c9); border-radius: 12px; padding: 20px; text-align: center;">
            <p style="font-size: 0.9rem; color: #666; margin: 0 0 10px;">Frontend</p>
            <p style="font-size: 1.5rem; font-weight: bold; color: #2e7d32; margin: 0;">75%</p>
            <div style="width: 100%; background-color: #e9ecef; border-radius: 5px; height: 8px; margin-top: 10px;">
              <div style="background-color: #4caf50; height: 8px; border-radius: 5px; width: 75%;"></div>
            </div>
          </div>

          <div style="background: linear-gradient(135deg, #e3f2fd, #bbdefb); border-radius: 12px; padding: 20px; text-align: center;">
            <p style="font-size: 0.9rem; color: #666; margin: 0 0 10px;">Backend</p>
            <p style="font-size: 1.5rem; font-weight: bold; color: #0d47a1; margin: 0;">60%</p>
            <div style="width: 100%; background-color: #e9ecef; border-radius: 5px; height: 8px; margin-top: 10px;">
              <div style="background-color: #2196f3; height: 8px; border-radius: 5px; width: 60%;"></div>
            </div>
          </div>

          <div style="background: linear-gradient(135deg, #f3e5f5, #e1bee7); border-radius: 12px; padding: 20px; text-align: center;">
            <p style="font-size: 0.9rem; color: #666; margin: 0 0 10px;">Design</p>
            <p style="font-size: 1.5rem; font-weight: bold; color: #6a1b9a; margin: 0;">90%</p>
            <div style="width: 100%; background-color: #e9ecef; border-radius: 5px; height: 8px; margin-top: 10px;">
              <div style="background-color: #9c27b0; height: 8px; border-radius: 5px; width: 90%;"></div>
            </div>
          </div>

          <div style="background: linear-gradient(135deg, #fff3e0, #ffe0b2); border-radius: 12px; padding: 20px; text-align: center;">
            <p style="font-size: 0.9rem; color: #666; margin: 0 0 10px;">Testing</p>
            <p style="font-size: 1.5rem; font-weight: bold; color: #ef6c00; margin: 0;">30%</p>
            <div style="width: 100%; background-color: #e9ecef; border-radius: 5px; height: 8px; margin-top: 10px;">
              <div style="background-color: #ff9800; height: 8px; border-radius: 5px; width: 30%;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
