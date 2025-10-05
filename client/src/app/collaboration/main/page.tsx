// Enhanced Collaboration Hub Page with detailed learning path information
export default function CollaborationHubPage() {
  return `
    <div style="font-family: Arial, sans-serif; padding: 20px; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); min-height: 100vh;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <div style="margin-bottom: 30px; text-align: center;">
          <h1 style="font-size: 2.5rem; font-weight: bold; color: #333; margin-bottom: 10px;">👥 Collaboration Hub 🚀</h1>
          <p style="color: #666; font-size: 1.2rem;">Real-time collaboration tools for enhanced learning experiences</p>
        </div>

        <div style="background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); border-radius: 12px; padding: 24px; color: white; margin-bottom: 30px; text-align: center;">
          <h2 style="font-size: 2rem; font-weight: bold; margin-bottom: 15px;">🌐 Web Development Project Collaboration</h2>
          <p style="font-size: 1.25rem; margin-bottom: 20px; opacity: 0.9;">Enterprise-Level Full-Stack Web Development Path with AI Integration</p>
          <div style="display: flex; justify-content: center; gap: 30px; flex-wrap: wrap;">
            <div style="text-align: center;">
              <p style="font-size: 0.9rem; opacity: 0.8;">Participants</p>
              <p style="font-weight: bold; font-size: 1.5rem;">6</p>
            </div>
            <div style="text-align: center;">
              <p style="font-size: 0.9rem; opacity: 0.8;">Skills Tracked</p>
              <p style="font-weight: bold; font-size: 1.5rem;">5</p>
            </div>
            <div style="text-align: center;">
              <p style="font-size: 0.9rem; opacity: 0.8;">Milestones</p>
              <p style="font-weight: bold; font-size: 1.5rem;">8</p>
            </div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 40px;">
          <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px;">
            <h3 style="font-size: 1.5rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
              <span style="margin-right: 10px;">👥</span> Active Participants
            </h3>

            <div style="margin-bottom: 25px;">
              <div style="display: flex; align-items: center; padding: 15px; background: linear-gradient(135deg, #e3f2fd, #bbdefb); border-radius: 12px; margin-bottom: 15px;">
                <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #2196f3, #21cbf3); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.2rem; margin-right: 15px;">AS</div>
                <div style="flex: 1;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                    <h5 style="font-weight: bold; color: #0d47a1; margin: 0;">Andi Saputra</h5>
                    <span style="background-color: #4caf50; color: white; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px; font-weight: bold;">ONLINE</span>
                  </div>
                  <p style="color: #666; margin: 3px 0; font-size: 0.9rem;">Principal Frontend Engineer</p>
                  <div style="display: flex; flex-wrap: wrap; gap: 5px; margin-top: 5px;">
                    <span style="background-color: #bbdefb; color: #0d47a1; font-size: 0.75rem; padding: 3px 8px; border-radius: 12px;">React</span>
                    <span style="background-color: #bbdefb; color: #0d47a1; font-size: 0.75rem; padding: 3px 8px; border-radius: 12px;">TypeScript</span>
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
                  <p style="color: #666; margin: 3px 0; font-size: 0.9rem;">Backend Architect</p>
                  <div style="display: flex; flex-wrap: wrap; gap: 5px; margin-top: 5px;">
                    <span style="background-color: #c8e6c9; color: #2e7d32; font-size: 0.75rem; padding: 3px 8px; border-radius: 12px;">Node.js</span>
                    <span style="background-color: #c8e6c9; color: #2e7d32; font-size: 0.75rem; padding: 3px 8px; border-radius: 12px;">MongoDB</span>
                  </div>
                </div>
              </div>

              <div style="display: flex; align-items: center; padding: 15px; background: linear-gradient(135deg, #f3e5f5, #e1bee7); border-radius: 12px;">
                <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #9c27b0, #e91e63); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.2rem; margin-right: 15px;">CD</div>
                <div style="flex: 1;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                    <h5 style="font-weight: bold; color: #6a1b9a; margin: 0;">Cinta Dewi</h5>
                    <span style="background-color: #6c757d; color: white; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px; font-weight: bold;">AWAY</span>
                  </div>
                  <p style="color: #666; margin: 3px 0; font-size: 0.9rem;">Lead UI/UX Designer</p>
                  <div style="display: flex; flex-wrap: wrap; gap: 5px; margin-top: 5px;">
                    <span style="background-color: #e1bee7; color: #6a1b9a; font-size: 0.75rem; padding: 3px 8px; border-radius: 12px;">Figma</span>
                    <span style="background-color: #e1bee7; color: #6a1b9a; font-size: 0.75rem; padding: 3px 8px; border-radius: 12px;">Prototyping</span>
                  </div>
                </div>
              </div>
            </div>

            <button style="width: 100%; background: linear-gradient(135deg, #007bff, #00d4ff); color: white; font-weight: bold; padding: 15px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.1rem; transition: transform 0.2s;">
              🚀 Join Collaboration Session
            </button>
          </div>

          <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px;">
            <h3 style="font-size: 1.5rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
              <span style="margin-right: 10px;">📈</span> Learning Path Progress
            </h3>

            <div style="background: linear-gradient(135deg, #fff3cd, #ffe082); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
              <h4 style="font-weight: bold; color: #856404; margin-bottom: 15px;">Full-Stack Web Development</h4>
              <p style="color: #666; margin-bottom: 15px;">Comprehensive path covering frontend, backend, and database development</p>

              <div style="margin-bottom: 15px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                  <span style="font-weight: bold; color: #333;">Overall Progress</span>
                  <span style="font-weight: bold; color: #6a11cb;">72%</span>
                </div>
                <div style="width: 100%; background-color: #e9ecef; border-radius: 10px; height: 16px;">
                  <div style="background: linear-gradient(90deg, #6a11cb, #2575fc); height: 16px; border-radius: 10px; width: 72%;"></div>
                </div>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div>
                  <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Frontend Development</p>
                  <div style="display: flex; align-items: center;">
                    <div style="flex: 1; height: 8px; background-color: #e9ecef; border-radius: 4px; margin-right: 8px;">
                      <div style="height: 8px; background-color: #4caf50; border-radius: 4px; width: 92%;"></div>
                    </div>
                    <span style="font-size: 0.8rem; font-weight: bold;">92%</span>
                  </div>
                </div>
                <div>
                  <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Backend Development</p>
                  <div style="display: flex; align-items: center;">
                    <div style="flex: 1; height: 8px; background-color: #e9ecef; border-radius: 4px; margin-right: 8px;">
                      <div style="height: 8px; background-color: #ff9800; border-radius: 4px; width: 65%;"></div>
                    </div>
                    <span style="font-size: 0.8rem; font-weight: bold;">65%</span>
                  </div>
                </div>
              </div>
            </div>

            <div style="background: linear-gradient(135deg, #d1ecf1, #a8e6cf); border-radius: 12px; padding: 20px;">
              <h4 style="font-weight: bold; color: #0c5460; margin-bottom: 15px;">Current Milestones</h4>

              <div style="display: flex; align-items: center; padding: 12px; background-color: white; border-radius: 8px; margin-bottom: 12px;">
                <div style="width: 24px; height: 24px; background: linear-gradient(135deg, #4caf50, #8bc34a); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.8rem; margin-right: 12px; flex-shrink: 0;">✓</div>
                <div>
                  <p style="font-weight: bold; margin: 0; font-size: 1rem;">Project Planning</p>
                  <p style="font-size: 0.8rem; color: #666; margin: 3px 0 0;">Completed on Oct 20, 2023</p>
                </div>
              </div>

              <div style="display: flex; align-items: center; padding: 12px; background-color: white; border-radius: 8px; margin-bottom: 12px;">
                <div style="width: 24px; height: 24px; background: linear-gradient(135deg, #4caf50, #8bc34a); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.8rem; margin-right: 12px; flex-shrink: 0;">✓</div>
                <div>
                  <p style="font-weight: bold; margin: 0; font-size: 1rem;">Frontend Development</p>
                  <p style="font-size: 0.8rem; color: #666; margin: 3px 0 0;">Completed today</p>
                </div>
              </div>

              <div style="display: flex; align-items: center; padding: 12px; background-color: white; border-radius: 8px;">
                <div style="width: 24px; height: 24px; background: linear-gradient(135deg, #ff9800, #ffc107); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #212529; font-size: 0.8rem; margin-right: 12px; flex-shrink: 0;">3</div>
                <div>
                  <p style="font-weight: bold; margin: 0; font-size: 1rem;">Backend Development</p>
                  <p style="font-size: 0.8rem; color: #666; margin: 3px 0 0;">Due on Nov 20, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px; margin-bottom: 40px;">
          <h3 style="font-size: 1.5rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
            <span style="margin-right: 10px;">📂</span> Shared Resources
          </h3>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px;">
            <div style="border: 2px solid #007bff; border-radius: 12px; padding: 20px;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
                <h4 style="font-weight: bold; color: #007bff;">Project Plan.pdf</h4>
                <span style="background-color: #e9ecef; color: #495057; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px;">PDF</span>
              </div>
              <p style="font-size: 0.9rem; color: #666; margin-bottom: 15px;">Comprehensive project plan with timelines</p>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 0.85rem; color: #666;">Uploaded by Andi</span>
                <button style="background-color: #007bff; color: white; border: none; border-radius: 6px; padding: 6px 12px; cursor: pointer; font-size: 0.85rem;">Download</button>
              </div>
            </div>

            <div style="border: 2px solid #28a745; border-radius: 12px; padding: 20px;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
                <h4 style="font-weight: bold; color: #28a745;">Design Mockups.fig</h4>
                <span style="background-color: #e9ecef; color: #495057; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px;">Figma</span>
              </div>
              <p style="font-size: 0.9rem; color: #666; margin-bottom: 15px;">Latest design mockups for dashboard</p>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 0.85rem; color: #666;">Uploaded by Cinta</span>
                <button style="background-color: #28a745; color: white; border: none; border-radius: 6px; padding: 6px 12px; cursor: pointer; font-size: 0.85rem;">Download</button>
              </div>
            </div>

            <div style="border: 2px solid #ffc107; border-radius: 12px; padding: 20px;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
                <h4 style="font-weight: bold; color: #ffc107;">API Documentation.docx</h4>
                <span style="background-color: #e9ecef; color: #495057; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px;">Document</span>
              </div>
              <p style="font-size: 0.9rem; color: #666; margin-bottom: 15px;">API endpoints and usage documentation</p>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 0.85rem; color: #666;">Uploaded by Budi</span>
                <button style="background-color: #ffc107; color: #212529; border: none; border-radius: 6px; padding: 6px 12px; cursor: pointer; font-size: 0.85rem;">Download</button>
              </div>
            </div>
          </div>
        </div>

        <div style="text-align: center; padding: 30px; background: linear-gradient(135deg, #6a11cb, #2575fc); border-radius: 12px; color: white; margin-bottom: 30px;">
          <h3 style="font-size: 1.8rem; font-weight: bold; margin-bottom: 15px;">🌟 Ready to collaborate on your learning path? 🌟</h3>
          <p style="font-size: 1.1rem; margin-bottom: 25px; max-width: 700px; margin-left: auto; margin-right: auto; opacity: 0.9;">
            Join a real-time collaboration session to work on projects, share resources, and track progress together!
          </p>
          <button style="background: linear-gradient(135deg, #ff9a9e, #fad0c4); color: #333; font-weight: bold; padding: 16px 32px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.2rem; transition: transform 0.2s;">
            🚀 Start New Collaboration Session
          </button>
        </div>

        <div style="text-align: center; padding: 30px; background: linear-gradient(135deg, #2575fc, #6a11cb); border-radius: 12px; color: white;">
          <h3 style="font-size: 1.8rem; font-weight: bold; margin-bottom: 15px;">🌟 Explore Advanced Collaboration Features 🌟</h3>
          <p style="font-size: 1.1rem; margin-bottom: 25px; max-width: 700px; margin-left: auto; margin-right: auto; opacity: 0.9;">
            Discover more sophisticated collaboration tools with our enhanced components
          </p>
          <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
            <a href="/collaboration/advanced" style="background: linear-gradient(135deg, #ff9a9e, #fad0c4); color: #333; font-weight: bold; padding: 16px 32px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.2rem; transition: transform 0.2s; text-decoration: none; display: inline-block;">
              👥 Advanced Collaboration
            </a>
            <a href="/collaboration/super-enhanced" style="background: linear-gradient(135deg, #d4fc79, #96e6a1); color: #333; font-weight: bold; padding: 16px 32px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.2rem; transition: transform 0.2s; text-decoration: none; display: inline-block;">
              🌟 Super Enhanced
            </a>
            <a href="/collaboration/ultimate" style="background: linear-gradient(135deg, #a18cd1, #fbc2eb); color: #333; font-weight: bold; padding: 16px 32px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.2rem; transition: transform 0.2s; text-decoration: none; display: inline-block;">
              🚀 Ultimate Collaboration
            </a>
            <a href="/collaboration/meta-intelligent" style="background: linear-gradient(135deg, #6a11cb, #2575fc); color: white; font-weight: bold; padding: 16px 32px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.2rem; transition: transform 0.2s; text-decoration: none; display: inline-block;">
              🌌 Meta-Intelligent
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
