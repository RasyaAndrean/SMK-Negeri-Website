// EnhancedStudentDashboard.tsx - Unified dashboard combining collaboration, AR, and AI features
export default function EnhancedStudentDashboard() {
  return `
    <div style="font-family: Arial, sans-serif; padding: 20px; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); min-height: 100vh;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <div style="margin-bottom: 30px; text-align: center;">
          <h1 style="font-size: 2.5rem; font-weight: bold; color: #333; margin-bottom: 10px;">🎓 Student Learning Hub 🚀</h1>
          <p style="color: #666; font-size: 1.2rem;">Your personalized dashboard for collaborative learning and skill development</p>
        </div>

        <div style="background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); border-radius: 12px; padding: 24px; color: white; margin-bottom: 30px; text-align: center;">
          <h2 style="font-size: 2rem; font-weight: bold; margin-bottom: 15px;">🌟 Welcome back, Andi! 🌟</h2>
          <p style="font-size: 1.25rem; margin-bottom: 20px; opacity: 0.9;">You're making great progress on your learning journey</p>
          <div style="display: flex; justify-content: center; gap: 40px; flex-wrap: wrap;">
            <div style="text-align: center;">
              <p style="font-size: 0.9rem; opacity: 0.8;">Active Collaborations</p>
              <p style="font-weight: bold; font-size: 1.5rem;">3</p>
            </div>
            <div style="text-align: center;">
              <p style="font-size: 0.9rem; opacity: 0.8;">AR Annotations</p>
              <p style="font-weight: bold; font-size: 1.5rem;">8</p>
            </div>
            <div style="text-align: center;">
              <p style="font-size: 0.9rem; opacity: 0.8;">Learning Path</p>
              <p style="font-weight: bold; font-size: 1.5rem;">35% Complete</p>
            </div>
            <div style="text-align: center;">
              <p style="font-size: 0.9rem; opacity: 0.8;">Next Milestone</p>
              <p style="font-weight: bold; font-size: 1.5rem;">Database Design</p>
            </div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 40px;">
          <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px;">
            <h3 style="font-size: 1.5rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
              <span style="margin-right: 10px;">🔄</span> Active Collaborations
            </h3>

            <div style="margin-bottom: 25px;">
              <div style="background: linear-gradient(135deg, #e3f2fd, #bbdefb); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">
                  <h4 style="font-weight: bold; color: #0d47a1; margin: 0;">Web Development Project</h4>
                  <span style="background-color: #d4edda; color: #155724; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px; font-weight: bold;">
                    ACTIVE
                  </span>
                </div>
                <p style="color: #555; margin: 10px 0;">Building a full-stack web application with team collaboration</p>

                <div style="margin: 15px 0;">
                  <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #555; margin-bottom: 8px;">
                    <span>Progress</span>
                    <span>65%</span>
                  </div>
                  <div style="width: 100%; background-color: #e9ecef; border-radius: 10px; height: 16px;">
                    <div style="background: linear-gradient(90deg, #007bff, #00d4ff); height: 16px; border-radius: 10px; width: 65%;"></div>
                  </div>
                </div>

                <div style="margin: 15px 0;">
                  <h5 style="font-size: 1rem; font-weight: bold; color: #333; margin-bottom: 8px;">Learning Path Details</h5>
                  <p style="font-size: 0.95rem; color: #555; margin: 0 0 10px;">Full-Stack Web Development: Comprehensive path covering frontend, backend, and database development</p>
                  <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                    <span style="background-color: #bbdefb; color: #0d47a1; font-size: 0.8rem; padding: 4px 10px; border-radius: 15px;">HTML/CSS</span>
                    <span style="background-color: #bbdefb; color: #0d47a1; font-size: 0.8rem; padding: 4px 10px; border-radius: 15px;">JavaScript</span>
                    <span style="background-color: #bbdefb; color: #0d47a1; font-size: 0.8rem; padding: 4px 10px; border-radius: 15px;">Node.js</span>
                    <span style="background-color: #bbdefb; color: #0d47a1; font-size: 0.8rem; padding: 4px 10px; border-radius: 15px;">React</span>
                  </div>
                </div>

                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 15px;">
                  <div style="font-size: 0.95rem; color: #555;">
                    <span style="font-weight: bold;">3</span> participants
                  </div>
                  <button style="background: linear-gradient(135deg, #007bff, #00d4ff); color: white; font-weight: bold; padding: 10px 20px; border: none; border-radius: 6px; cursor: pointer; font-size: 0.9rem;">
                    View Details
                  </button>
                </div>
              </div>

              <div style="background: linear-gradient(135deg, #fff3cd, #ffe082); border-radius: 12px; padding: 20px;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">
                  <h4 style="font-weight: bold; color: #856404; margin: 0;">Network Infrastructure Design</h4>
                  <span style="background-color: #fff3cd; color: #856404; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px; font-weight: bold;">
                    PLANNING
                  </span>
                </div>
                <p style="color: #555; margin: 10px 0;">Designing a complete network infrastructure for a small business</p>

                <div style="margin: 15px 0;">
                  <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #555; margin-bottom: 8px;">
                    <span>Progress</span>
                    <span>20%</span>
                  </div>
                  <div style="width: 100%; background-color: #e9ecef; border-radius: 10px; height: 16px;">
                    <div style="background: linear-gradient(90deg, #ffc107, #ff9800); height: 16px; border-radius: 10px; width: 20%;"></div>
                  </div>
                </div>

                <div style="margin: 15px 0;">
                  <h5 style="font-size: 1rem; font-weight: bold; color: #333; margin-bottom: 8px;">Learning Path Details</h5>
                  <p style="font-size: 0.95rem; color: #555; margin: 0 0 10px;">Network Infrastructure Planning: Comprehensive path covering network design, implementation, and security</p>
                  <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                    <span style="background-color: #ffeaa7; color: #856404; font-size: 0.8rem; padding: 4px 10px; border-radius: 15px;">Network Topology</span>
                    <span style="background-color: #ffeaa7; color: #856404; font-size: 0.8rem; padding: 4px 10px; border-radius: 15px;">Cisco IOS</span>
                    <span style="background-color: #ffeaa7; color: #856404; font-size: 0.8rem; padding: 4px 10px; border-radius: 15px;">Firewall Config</span>
                  </div>
                </div>

                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 15px;">
                  <div style="font-size: 0.95rem; color: #555;">
                    <span style="font-weight: bold;">2</span> participants
                  </div>
                  <button style="background: linear-gradient(135deg, #ffc107, #ff9800); color: #212529; font-weight: bold; padding: 10px 20px; border: none; border-radius: 6px; cursor: pointer; font-size: 0.9rem;">
                    View Details
                  </button>
                </div>
              </div>
            </div>

            <button style="width: 100%; background: linear-gradient(135deg, #6a11cb, #2575fc); color: white; font-weight: bold; padding: 16px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.1rem; transition: transform 0.2s;">
              🚀 Start New Collaboration
            </button>
          </div>

          <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px;">
            <h3 style="font-size: 1.5rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
              <span style="margin-right: 10px;">🔮</span> AR Visualization Hub
            </h3>

            <div style="background: linear-gradient(135deg, #2c3e50, #4a6491); border-radius: 12px; height: 300px; display: flex; align-items: center; justify-content: center; margin-bottom: 25px; position: relative; overflow: hidden;">
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
                <span style="margin-right: 10px;">📌</span> Recent Annotations
              </h4>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div style="background: linear-gradient(135deg, #e3f2fd, #bbdefb); border-radius: 8px; padding: 15px;">
                  <p style="font-weight: bold; color: #0d47a1; margin: 0 0 8px;">Distance Measurement</p>
                  <p style="font-size: 0.9rem; color: #666; margin: 0;">2.5 meters</p>
                  <p style="font-size: 0.8rem; color: #666; margin: 5px 0 0;">Verified</p>
                </div>
                <div style="background: linear-gradient(135deg, #fff3cd, #ffe082); border-radius: 8px; padding: 15px;">
                  <p style="font-weight: bold; color: #856404; margin: 0 0 8px;">Temperature Reading</p>
                  <p style="font-size: 0.9rem; color: #666; margin: 0;">24.5°C</p>
                  <p style="font-size: 0.8rem; color: #666; margin: 5px 0 0;">Pending</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px; margin-bottom: 40px;">
          <h3 style="font-size: 1.5rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
            <span style="margin-right: 10px;">🤖</span> AI-Powered Recommendations
          </h3>

          <div style="background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); border-radius: 12px; padding: 24px; color: white; margin-bottom: 25px;">
            <h4 style="font-size: 1.4rem; font-weight: bold; margin-bottom: 15px;">🎯 Your Personalized Learning Path</h4>
            <p style="font-size: 1.1rem; margin-bottom: 20px; opacity: 0.9;">Full-Stack Web Development Path</p>
            <p style="margin-bottom: 20px; max-width: 800px;">Customized learning journey based on your interests in Web Development and Programming</p>
            <div style="display: flex; gap: 30px; flex-wrap: wrap;">
              <div style="text-align: center;">
                <p style="font-size: 0.9rem; opacity: 0.8;">Duration</p>
                <p style="font-weight: bold; font-size: 1.2rem;">16 weeks</p>
              </div>
              <div style="text-align: center;">
                <p style="font-size: 0.9rem; opacity: 0.8;">Progress</p>
                <p style="font-weight: bold; font-size: 1.2rem;">35% complete</p>
              </div>
              <div style="text-align: center;">
                <p style="font-size: 0.9rem; opacity: 0.8;">Next Milestone</p>
                <p style="font-weight: bold; font-size: 1.2rem;">Database Design</p>
              </div>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px;">
            <div>
              <h4 style="font-weight: bold; color: #333; margin-bottom: 15px;">📊 Skill Assessment</h4>

              <div style="background: linear-gradient(135deg, #e3f2fd, #bbdefb); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                  <div>
                    <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">HTML/CSS</p>
                    <div style="width: 100%; background-color: #e9ecef; border-radius: 5px; height: 12px;">
                      <div style="background: linear-gradient(90deg, #4caf50, #8bc34a); height: 12px; border-radius: 5px; width: 85%;"></div>
                    </div>
                    <p style="font-size: 0.8rem; font-weight: bold; margin: 5px 0 0;">85%</p>
                  </div>
                  <div>
                    <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">JavaScript</p>
                    <div style="width: 100%; background-color: #e9ecef; border-radius: 5px; height: 12px;">
                      <div style="background: linear-gradient(90deg, #4caf50, #8bc34a); height: 12px; border-radius: 5px; width: 92%;"></div>
                    </div>
                    <p style="font-size: 0.8rem; font-weight: bold; margin: 5px 0 0;">92%</p>
                  </div>
                  <div>
                    <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">React</p>
                    <div style="width: 100%; background-color: #e9ecef; border-radius: 5px; height: 12px;">
                      <div style="background: linear-gradient(90deg, #ff9800, #ffc107); height: 12px; border-radius: 5px; width: 65%;"></div>
                    </div>
                    <p style="font-size: 0.8rem; font-weight: bold; margin: 5px 0 0;">65%</p>
                  </div>
                  <div>
                    <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Node.js</p>
                    <div style="width: 100%; background-color: #e9ecef; border-radius: 5px; height: 12px;">
                      <div style="background: linear-gradient(90deg, #ff9800, #ffc107); height: 12px; border-radius: 5px; width: 45%;"></div>
                    </div>
                    <p style="font-size: 0.8rem; font-weight: bold; margin: 5px 0 0;">45%</p>
                  </div>
                </div>
              </div>

              <h4 style="font-weight: bold; color: #333; margin: 25px 0 15px;">💡 AI Insights</h4>

              <div style="background: linear-gradient(135deg, #fff3e0, #ffe0b2); border-radius: 12px; padding: 20px;">
                <ul style="list-style: none; padding: 0; margin: 0;">
                  <li style="display: flex; align-items: flex-start; margin-bottom: 15px;">
                    <div style="width: 28px; height: 28px; background: linear-gradient(135deg, #ff9800, #ffc107); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #212529; font-size: 0.9rem; margin-right: 12px; flex-shrink: 0; font-weight: bold;">1</div>
                    <span>Focus on Node.js to balance your frontend/backend skills. Our analysis shows this will accelerate your progress by 30%.</span>
                  </li>
                  <li style="display: flex; align-items: flex-start; margin-bottom: 15px;">
                    <div style="width: 28px; height: 28px; background: linear-gradient(135deg, #ff9800, #ffc107); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #212529; font-size: 0.9rem; margin-right: 12px; flex-shrink: 0; font-weight: bold;">2</div>
                    <span>Practice React hooks to improve your frontend expertise. We've identified 5 key patterns you should master.</span>
                  </li>
                  <li style="display: flex; align-items: flex-start;">
                    <div style="width: 28px; height: 28px; background: linear-gradient(135deg, #ff9800, #ffc107); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #212529; font-size: 0.9rem; margin-right: 12px; flex-shrink: 0; font-weight: bold;">3</div>
                    <span>Consider database design courses to complement your skills. This will prepare you for backend development roles.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h4 style="font-weight: bold; color: #333; margin-bottom: 15px;">👥 Recommended Collaborations</h4>

              <div style="background: linear-gradient(135deg, #e8f5e9, #c8e6c9); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">
                  <h5 style="font-weight: bold; color: #2e7d32; margin: 0;">Full-Stack E-commerce Project</h5>
                  <span style="background-color: #d4edda; color: #155724; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px; font-weight: bold;">
                    MATCH: 95%
                  </span>
                </div>
                <p style="color: #555; margin: 10px 0;">Build a complete e-commerce platform with team collaboration using modern web technologies</p>

                <div style="display: flex; flex-wrap: wrap; gap: 8px; margin: 15px 0;">
                  <span style="background-color: #c8e6c9; color: #2e7d32; font-size: 0.8rem; padding: 5px 12px; border-radius: 20px; font-weight: bold;">React</span>
                  <span style="background-color: #c8e6c9; color: #2e7d32; font-size: 0.8rem; padding: 5px 12px; border-radius: 20px; font-weight: bold;">Node.js</span>
                  <span style="background-color: #c8e6c9; color: #2e7d32; font-size: 0.8rem; padding: 5px 12px; border-radius: 20px; font-weight: bold;">PostgreSQL</span>
                </div>

                <div style="margin-top: 15px; display: flex; justify-content: space-between; align-items: center;">
                  <div>
                    <p style="font-size: 0.9rem; color: #666; margin: 0;"><span style="font-weight: bold;">2/4</span> participants</p>
                  </div>
                  <button style="background: linear-gradient(135deg, #28a745, #20c997); color: white; font-weight: bold; padding: 10px 20px; border: none; border-radius: 6px; cursor: pointer; font-size: 0.9rem;">
                    Join Project
                  </button>
                </div>
              </div>

              <h4 style="font-weight: bold; color: #333; margin: 25px 0 15px;">📚 Recommended Courses</h4>

              <div style="background: linear-gradient(135deg, #f3e5f5, #e1bee7); border-radius: 12px; padding: 20px;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">
                  <h5 style="font-weight: bold; color: #6a1b9a; margin: 0;">UI/UX Design for Developers</h5>
                  <span style="background-color: #e1bee7; color: #6a1b9a; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px; font-weight: bold;">
                    MATCH: 85%
                  </span>
                </div>
                <p style="color: #555; margin: 10px 0;">Learn essential UI/UX principles specifically for developers to create user-friendly interfaces</p>

                <div style="display: flex; flex-wrap: wrap; gap: 8px; margin: 15px 0;">
                  <span style="background-color: #e1bee7; color: #6a1b9a; font-size: 0.8rem; padding: 5px 12px; border-radius: 20px; font-weight: bold;">Design Principles</span>
                  <span style="background-color: #e1bee7; color: #6a1b9a; font-size: 0.8rem; padding: 5px 12px; border-radius: 20px; font-weight: bold;">Prototyping</span>
                  <span style="background-color: #e1bee7; color: #6a1b9a; font-size: 0.8rem; padding: 5px 12px; border-radius: 20px; font-weight: bold;">User Research</span>
                </div>

                <div style="margin-top: 15px; display: flex; justify-content: space-between; align-items: center;">
                  <div>
                    <p style="font-size: 0.9rem; color: #666; margin: 0;"><span style="font-weight: bold;">1560</span> enrolled</p>
                  </div>
                  <button style="background: linear-gradient(135deg, #6f42c1, #9c27b0); color: white; font-weight: bold; padding: 10px 20px; border: none; border-radius: 6px; cursor: pointer; font-size: 0.9rem;">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style="text-align: center; padding: 30px; background: linear-gradient(135deg, #6a11cb, #2575fc); border-radius: 12px; color: white;">
          <h3 style="font-size: 1.8rem; font-weight: bold; margin-bottom: 15px;">🌟 Keep Up the Great Work! 🌟</h3>
          <p style="font-size: 1.1rem; margin-bottom: 25px; max-width: 700px; margin-left: auto; margin-right: auto; opacity: 0.9;">
            You're making excellent progress on your learning journey. Continue collaborating, exploring AR visualizations, and following your personalized recommendations to achieve your goals!
          </p>
          <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
            <a href="/intelligent-hub" style="background: linear-gradient(135deg, #ff9a9e, #fad0c4); color: #333; font-weight: bold; padding: 16px 32px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.2rem; transition: transform 0.2s; text-decoration: none;">
              🧠 Intelligent Learning Hub
            </a>
            <a href="/docs" style="background: linear-gradient(135deg, #a1c4fd, #c2e9fb); color: #333; font-weight: bold; padding: 16px 32px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.2rem; transition: transform 0.2s; text-decoration: none;">
              📘 Platform Documentation
            </a>
            <button style="background: linear-gradient(135deg, #d4fc79, #96e6a1); color: #333; font-weight: bold; padding: 16px 32px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.2rem; transition: transform 0.2s;">
              📚 Continue Learning Path
            </button>
            <button style="background: linear-gradient(135deg, #a1c4fd, #c2e9fb); color: #333; font-weight: bold; padding: 16px 32px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.2rem; transition: transform 0.2s;">
              👥 Join Collaboration
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}
