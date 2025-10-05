// CrossPlatformDashboard.tsx - A responsive dashboard component for all devices
export default function CrossPlatformDashboard() {
  return `
    <div style="font-family: Arial, sans-serif; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); min-height: 100vh; padding: 20px;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <!-- Header -->
        <header style="background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); padding: 15px 20px; border-radius: 12px; margin-bottom: 30px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="width: 40px; height: 40px; background-color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; color: #6a11cb; font-size: 1.2rem;">🎓</div>
              <h1 style="color: white; font-size: 1.5rem; font-weight: bold; margin: 0;">SMK Negeri Dashboard</h1>
            </div>

            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              <button style="background: linear-gradient(135deg, #ff9a9e, #fad0c4); color: #333; padding: 10px 20px; border: none; border-radius: 30px; font-weight: bold; cursor: pointer; transition: transform 0.2s;">👤 Profile</button>
              <button style="background: linear-gradient(135deg, #a1c4fd, #c2e9fb); color: #333; padding: 10px 20px; border: none; border-radius: 30px; font-weight: bold; cursor: pointer; transition: transform 0.2s;">⚙️ Settings</button>
            </div>
          </div>
        </header>

        <!-- Dashboard Stats -->
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 30px;">
          <div style="background: linear-gradient(135deg, #e3f2fd, #bbdefb); border-radius: 12px; padding: 20px; text-align: center; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
            <div style="font-size: 2.5rem; font-weight: bold; color: #0d47a1; margin-bottom: 10px;">3</div>
            <div style="font-weight: bold; color: #333; margin-bottom: 5px;">Active Collaborations</div>
            <p style="color: #666; font-size: 0.9rem; margin: 0;">Projects in progress</p>
          </div>

          <div style="background: linear-gradient(135deg, #e8f5e9, #c8e6c9); border-radius: 12px; padding: 20px; text-align: center; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
            <div style="font-size: 2.5rem; font-weight: bold; color: #2e7d32; margin-bottom: 10px;">12</div>
            <div style="font-weight: bold; color: #333; margin-bottom: 5px;">AR Annotations</div>
            <p style="color: #666; font-size: 0.9rem; margin: 0;">Measurements & labels</p>
          </div>

          <div style="background: linear-gradient(135deg, #f3e5f5, #e1bee7); border-radius: 12px; padding: 20px; text-align: center; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
            <div style="font-size: 2.5rem; font-weight: bold; color: #6a1b9a; margin-bottom: 10px;">7</div>
            <div style="font-weight: bold; color: #333; margin-bottom: 5px;">Recommended Courses</div>
            <p style="color: #666; font-size: 0.9rem; margin: 0;">Personalized learning</p>
          </div>

          <div style="background: linear-gradient(135deg, #fff3e0, #ffe0b2); border-radius: 12px; padding: 20px; text-align: center; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
            <div style="font-size: 2.5rem; font-weight: bold; color: #ef6c00; margin-bottom: 10px;">35%</div>
            <div style="font-weight: bold; color: #333; margin-bottom: 5px;">Learning Progress</div>
            <p style="color: #666; font-size: 0.9rem; margin: 0;">Overall completion</p>
          </div>
        </div>

        <!-- Main Dashboard Content -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">
          <!-- Left Column -->
          <div>
            <!-- Quick Actions -->
            <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 25px; margin-bottom: 30px;">
              <h3 style="font-size: 1.4rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
                <span style="margin-right: 10px;">⚡</span> Quick Actions
              </h3>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <button style="background: linear-gradient(135deg, #007bff, #00d4ff); color: white; padding: 15px; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 8px; transition: transform 0.2s;">
                  <span style="font-size: 1.5rem;">👥</span>
                  <span>New Collaboration</span>
                </button>

                <button style="background: linear-gradient(135deg, #28a745, #20c997); color: white; padding: 15px; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 8px; transition: transform 0.2s;">
                  <span style="font-size: 1.5rem;">🔮</span>
                  <span>AR Session</span>
                </button>

                <button style="background: linear-gradient(135deg, #6f42c1, #9c27b0); color: white; padding: 15px; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 8px; transition: transform 0.2s;">
                  <span style="font-size: 1.5rem;">📚</span>
                  <span>Learning Path</span>
                </button>

                <button style="background: linear-gradient(135deg, #ffc107, #ff9800); color: #212529; padding: 15px; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 8px; transition: transform 0.2s;">
                  <span style="font-size: 1.5rem;">📊</span>
                  <span>View Progress</span>
                </button>
              </div>
            </div>

            <!-- Recent Activity -->
            <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 25px;">
              <h3 style="font-size: 1.4rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
                <span style="margin-right: 10px;">🕒</span> Recent Activity
              </h3>

              <div style="space-y-4;">
                <div style="display: flex; align-items: flex-start; padding: 15px; background-color: #f8f9fa; border-radius: 8px; margin-bottom: 15px;">
                  <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #2196f3, #21cbf3); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.2rem; margin-right: 15px; flex-shrink: 0;">👥</div>
                  <div>
                    <p style="font-weight: bold; margin: 0;">You joined "Web Development Project"</p>
                    <p style="color: #666; font-size: 0.9rem; margin: 5px 0 0;">2 hours ago</p>
                  </div>
                </div>

                <div style="display: flex; align-items: flex-start; padding: 15px; background-color: #f8f9fa; border-radius: 8px; margin-bottom: 15px;">
                  <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #4caf50, #8bc34a); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.2rem; margin-right: 15px; flex-shrink: 0;">🔮</div>
                  <div>
                    <p style="font-weight: bold; margin: 0;">New AR annotation added</p>
                    <p style="color: #666; font-size: 0.9rem; margin: 5px 0 0;">Yesterday</p>
                  </div>
                </div>

                <div style="display: flex; align-items: flex-start; padding: 15px; background-color: #f8f9fa; border-radius: 8px;">
                  <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #9c27b0, #e91e63); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.2rem; margin-right: 15px; flex-shrink: 0;">🤖</div>
                  <div>
                    <p style="font-weight: bold; margin: 0;">AI recommended new course</p>
                    <p style="color: #666; font-size: 0.9rem; margin: 5px 0 0;">2 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column -->
          <div>
            <!-- Active Collaborations -->
            <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 25px; margin-bottom: 30px;">
              <h3 style="font-size: 1.4rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
                <span style="margin-right: 10px;">👥</span> Active Collaborations
              </h3>

              <div style="space-y-4;">
                <div style="border: 1px solid #e9ecef; border-radius: 12px; padding: 20px; margin-bottom: 15px;">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">
                    <h4 style="font-weight: bold; color: #333; margin: 0;">Web Development Project</h4>
                    <span style="background-color: #d4edda; color: #155724; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px; font-weight: bold;">ACTIVE</span>
                  </div>
                  <p style="color: #666; margin: 0 0 15px;">Collaborative project for RPL students to build a full-stack web application</p>
                  <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                      <div style="display: flex; align-items: center; gap: 5px;">
                        <div style="width: 25px; height: 25px; background: linear-gradient(135deg, #2196f3, #21cbf3); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.7rem;">AS</div>
                        <div style="width: 25px; height: 25px; background: linear-gradient(135deg, #4caf50, #8bc34a); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.7rem;">BP</div>
                        <div style="width: 25px; height: 25px; background: linear-gradient(135deg, #9c27b0, #e91e63); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.7rem;">CD</div>
                        <span style="color: #666; font-size: 0.9rem; margin-left: 5px;">+2 others</span>
                      </div>
                    </div>
                    <div style="text-align: right;">
                      <p style="font-weight: bold; margin: 0; color: #007bff;">65% complete</p>
                      <p style="color: #666; font-size: 0.8rem; margin: 3px 0 0;">Due in 3 weeks</p>
                    </div>
                  </div>
                </div>

                <div style="border: 1px solid #e9ecef; border-radius: 12px; padding: 20px;">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">
                    <h4 style="font-weight: bold; color: #333; margin: 0;">Network Infrastructure Design</h4>
                    <span style="background-color: #fff3cd; color: #856404; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px; font-weight: bold;">PLANNING</span>
                  </div>
                  <p style="color: #666; margin: 0 0 15px;">Designing a complete network infrastructure for a small business</p>
                  <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                      <div style="display: flex; align-items: center; gap: 5px;">
                        <div style="width: 25px; height: 25px; background: linear-gradient(135deg, #ff9800, #ffc107); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #212529; font-size: 0.7rem;">DK</div>
                        <div style="width: 25px; height: 25px; background: linear-gradient(135deg, #6f42c1, #9c27b0); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.7rem;">EP</div>
                        <span style="color: #666; font-size: 0.9rem; margin-left: 5px;">+1 other</span>
                      </div>
                    </div>
                    <div style="text-align: right;">
                      <p style="font-weight: bold; margin: 0; color: #ffc107;">20% complete</p>
                      <p style="color: #666; font-size: 0.8rem; margin: 3px 0 0;">Due in 5 weeks</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Learning Progress -->
            <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 25px;">
              <h3 style="font-size: 1.4rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
                <span style="margin-right: 10px;">📈</span> Learning Progress
              </h3>

              <div style="background: linear-gradient(135deg, #e3f2fd, #bbdefb); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                  <span style="font-weight: bold; color: #333;">Full-Stack Web Development</span>
                  <span style="font-weight: bold; color: #0d47a1;">35%</span>
                </div>
                <div style="width: 100%; background-color: #e9ecef; border-radius: 10px; height: 20px;">
                  <div style="background: linear-gradient(90deg, #0d47a1, #2196f3); height: 20px; border-radius: 10px; width: 35%;"></div>
                </div>
              </div>

              <div style="background: linear-gradient(135deg, #e8f5e9, #c8e6c9); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                  <span style="font-weight: bold; color: #333;">UI/UX Design Principles</span>
                  <span style="font-weight: bold; color: #2e7d32;">75%</span>
                </div>
                <div style="width: 100%; background-color: #e9ecef; border-radius: 10px; height: 20px;">
                  <div style="background: linear-gradient(90deg, #2e7d32, #4caf50); height: 20px; border-radius: 10px; width: 75%;"></div>
                </div>
              </div>

              <div style="background: linear-gradient(135deg, #fff3e0, #ffe0b2); border-radius: 12px; padding: 20px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                  <span style="font-weight: bold; color: #333;">Database Design</span>
                  <span style="font-weight: bold; color: #ef6c00;">0%</span>
                </div>
                <div style="width: 100%; background-color: #e9ecef; border-radius: 10px; height: 20px;">
                  <div style="background: linear-gradient(90deg, #ef6c00, #ff9800); height: 20px; border-radius: 10px; width: 0%;"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <footer style="text-align: center; margin-top: 40px; padding: 20px; color: #666; border-top: 1px solid #ddd;">
          <p>© 2023 SMK Negeri. All rights reserved.</p>
        </footer>
      </div>

      <style>
        @media (max-width: 768px) {
          .dashboard-stats {
            grid-template-columns: 1fr 1fr;
          }

          .main-content {
            grid-template-columns: 1fr;
          }

          header > div:first-child {
            flex-direction: column;
            align-items: flex-start;
          }

          header > div:first-child > div:last-child {
            width: 100%;
            justify-content: center;
            margin-top: 15px;
          }
        }

        @media (max-width: 480px) {
          .dashboard-stats {
            grid-template-columns: 1fr;
          }

          .quick-actions {
            grid-template-columns: 1fr;
          }
        }
      </style>
    </div>
  `;
}
