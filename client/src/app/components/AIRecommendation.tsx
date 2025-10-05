// AIRecommendation.tsx - Component for AI-powered personalized recommendations
export default function AIRecommendation() {
  return `
    <div style="font-family: Arial, sans-serif; background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px; margin-bottom: 30px;">
      <h3 style="font-size: 1.5rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
        <span style="margin-right: 10px;">🤖</span> AI-Powered Personalized Recommendations
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

      <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid #eee;">
        <h4 style="font-weight: bold; color: #333; margin-bottom: 15px;">📈 Career Progression Forecast</h4>

        <div style="background: linear-gradient(135deg, #e3f2fd, #bbdefb); border-radius: 12px; padding: 25px;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 25px; position: relative;">
            <div style="text-align: center; flex: 1; position: relative;">
              <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #4caf50, #8bc34a); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; margin: 0 auto 12px; font-size: 1.1rem;">1</div>
              <h5 style="font-weight: bold; margin-bottom: 6px;">Junior Developer</h5>
              <p style="font-size: 0.8rem; color: #666; margin: 0;">Entry-level</p>
              <div style="position: absolute; top: 25px; right: 0; height: 3px; background: linear-gradient(90deg, #4caf50, #8bc34a); width: calc(100% - 25px);"></div>
            </div>
            <div style="text-align: center; flex: 1; position: relative;">
              <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #2196f3, #03a9f4); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; margin: 0 auto 12px; font-size: 1.1rem;">2</div>
              <h5 style="font-weight: bold; margin-bottom: 6px;">Developer</h5>
              <p style="font-size: 0.8rem; color: #666; margin: 0;">Mid-level</p>
              <div style="position: absolute; top: 25px; right: 0; height: 3px; background: linear-gradient(90deg, #2196f3, #03a9f4); width: calc(100% - 25px);"></div>
            </div>
            <div style="text-align: center; flex: 1; position: relative;">
              <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #ff9800, #ffc107); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #212529; font-weight: bold; margin: 0 auto 12px; font-size: 1.1rem;">3</div>
              <h5 style="font-weight: bold; margin-bottom: 6px;">Senior Developer</h5>
              <p style="font-size: 0.8rem; color: #666; margin: 0;">Advanced</p>
              <div style="position: absolute; top: 25px; right: 0; height: 3px; background: linear-gradient(90deg, #ff9800, #ffc107); width: calc(100% - 25px);"></div>
            </div>
            <div style="text-align: center; flex: 1;">
              <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #9c27b0, #e91e63); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; margin: 0 auto 12px; font-size: 1.1rem;">4</div>
              <h5 style="font-weight: bold; margin-bottom: 6px;">Tech Lead</h5>
              <p style="font-size: 0.8rem; color: #666; margin: 0;">Leadership</p>
            </div>
          </div>

          <div style="background-color: white; border-radius: 8px; padding: 20px;">
            <p style="color: #0d47a1; margin: 0 0 15px;">Based on your current progress and our AI analysis, you're on track to become a Junior Developer in <span style="font-weight: bold;">4 months</span>!</p>
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px;">
              <div style="text-align: center;">
                <p style="font-size: 0.9rem; color: #666; margin-bottom: 8px;">Skills Match</p>
                <div style="width: 100%; background-color: #e9ecef; border-radius: 5px; height: 10px; margin-bottom: 8px;">
                  <div style="background: linear-gradient(90deg, #4caf50, #8bc34a); height: 10px; border-radius: 5px; width: 75%"></div>
                </div>
                <p style="font-size: 1.1rem; font-weight: bold; color: #4caf50; margin: 0;">75%</p>
              </div>
              <div style="text-align: center;">
                <p style="font-size: 0.9rem; color: #666; margin-bottom: 8px;">Industry Demand</p>
                <div style="width: 100%; background-color: #e9ecef; border-radius: 5px; height: 10px; margin-bottom: 8px;">
                  <div style="background: linear-gradient(90deg, #2196f3, #03a9f4); height: 10px; border-radius: 5px; width: 92%"></div>
                </div>
                <p style="font-size: 1.1rem; font-weight: bold; color: #2196f3; margin: 0;">92%</p>
              </div>
              <div style="text-align: center;">
                <p style="font-size: 0.9rem; color: #666; margin-bottom: 8px;">Salary Potential</p>
                <div style="width: 100%; background-color: #e9ecef; border-radius: 5px; height: 10px; margin-bottom: 8px;">
                  <div style="background: linear-gradient(90deg, #ff9800, #ffc107); height: 10px; border-radius: 5px; width: 85%"></div>
                </div>
                <p style="font-size: 1.1rem; font-weight: bold; color: #ff9800; margin: 0;">85%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
