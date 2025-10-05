// Enhanced AI Recommendations Page with personalized learning paths and career progression
export default function AIRecommendationsPage() {
  return `
    <div style="font-family: Arial, sans-serif; padding: 20px; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); min-height: 100vh;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <div style="margin-bottom: 30px; text-align: center;">
          <h1 style="font-size: 2.5rem; font-weight: bold; color: #333; margin-bottom: 10px;">🤖 AI-Powered Recommendations 🚀</h1>
          <p style="color: #666; font-size: 1.2rem;">Personalized learning paths based on your interests and career goals</p>
        </div>

        <div style="background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); border-radius: 12px; padding: 24px; color: white; margin-bottom: 30px; text-align: center;">
          <h2 style="font-size: 2rem; font-weight: bold; margin-bottom: 15px;">🎯 Your Personalized Learning Path</h2>
          <p style="font-size: 1.25rem; margin-bottom: 20px; opacity: 0.9;">Full-Stack Web Development Path</p>
          <p style="font-size: 1.1rem; margin-bottom: 25px; max-width: 800px; margin-left: auto; margin-right: auto;">Customized learning journey based on your interests in Web Development and Programming</p>
          <div style="display: flex; justify-content: center; gap: 40px; flex-wrap: wrap;">
            <div style="text-align: center;">
              <p style="font-size: 0.9rem; opacity: 0.8;">Duration</p>
              <p style="font-weight: bold; font-size: 1.5rem;">16 weeks</p>
            </div>
            <div style="text-align: center;">
              <p style="font-size: 0.9rem; opacity: 0.8;">Progress</p>
              <p style="font-weight: bold; font-size: 1.5rem;">35% complete</p>
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
              <span style="margin-right: 10px;">📊</span> Learning Progress
            </h3>

            <div style="margin-bottom: 25px;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                <span style="font-weight: bold; color: #333;">Overall Progress</span>
                <span style="font-weight: bold; color: #6a11cb;">35%</span>
              </div>
              <div style="width: 100%; background-color: #e9ecef; border-radius: 10px; height: 20px;">
                <div style="background: linear-gradient(90deg, #6a11cb, #2575fc); height: 20px; border-radius: 10px; width: 35%;"></div>
              </div>
            </div>

            <div style="background: linear-gradient(135deg, #e3f2fd, #bbdefb); border-radius: 12px; padding: 20px; margin-bottom: 25px;">
              <h4 style="font-weight: bold; color: #0d47a1; margin-bottom: 15px;">🏆 Skills Assessment</h4>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div>
                  <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">HTML/CSS</p>
                  <div style="width: 100%; background-color: #e9ecef; border-radius: 5px; height: 10px;">
                    <div style="background-color: #4caf50; height: 10px; border-radius: 5px; width: 85%;"></div>
                  </div>
                  <p style="font-size: 0.8rem; font-weight: bold; margin: 5px 0 0;">85%</p>
                </div>
                <div>
                  <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">JavaScript</p>
                  <div style="width: 100%; background-color: #e9ecef; border-radius: 5px; height: 10px;">
                    <div style="background-color: #4caf50; height: 10px; border-radius: 5px; width: 92%;"></div>
                  </div>
                  <p style="font-size: 0.8rem; font-weight: bold; margin: 5px 0 0;">92%</p>
                </div>
                <div>
                  <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">React</p>
                  <div style="width: 100%; background-color: #e9ecef; border-radius: 5px; height: 10px;">
                    <div style="background-color: #ff9800; height: 10px; border-radius: 5px; width: 65%;"></div>
                  </div>
                  <p style="font-size: 0.8rem; font-weight: bold; margin: 5px 0 0;">65%</p>
                </div>
                <div>
                  <p style="font-size: 0.9rem; color: #666; margin: 0 0 5px;">Node.js</p>
                  <div style="width: 100%; background-color: #e9ecef; border-radius: 5px; height: 10px;">
                    <div style="background-color: #ff9800; height: 10px; border-radius: 5px; width: 45%;"></div>
                  </div>
                  <p style="font-size: 0.8rem; font-weight: bold; margin: 5px 0 0;">45%</p>
                </div>
              </div>
            </div>

            <div style="background: linear-gradient(135deg, #fff3e0, #ffe0b2); border-radius: 12px; padding: 20px;">
              <h4 style="font-weight: bold; color: #ef6c00; margin-bottom: 15px;">💡 Learning Insights</h4>
              <ul style="list-style: none; padding: 0; margin: 0;">
                <li style="display: flex; align-items: flex-start; margin-bottom: 12px;">
                  <div style="width: 24px; height: 24px; background-color: #ff9800; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.8rem; margin-right: 12px; flex-shrink: 0;">1</div>
                  <span>Focus on Node.js to balance your frontend/backend skills</span>
                </li>
                <li style="display: flex; align-items: flex-start; margin-bottom: 12px;">
                  <div style="width: 24px; height: 24px; background-color: #ff9800; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.8rem; margin-right: 12px; flex-shrink: 0;">2</div>
                  <span>Practice React hooks to improve your frontend expertise</span>
                </li>
                <li style="display: flex; align-items: flex-start;">
                  <div style="width: 24px; height: 24px; background-color: #ff9800; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.8rem; margin-right: 12px; flex-shrink: 0;">3</div>
                  <span>Consider database design courses to complement your skills</span>
                </li>
              </ul>
            </div>
          </div>

          <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px;">
            <h3 style="font-size: 1.5rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
              <span style="margin-right: 10px;">👥</span> Collaboration Opportunities
            </h3>

            <div style="background: linear-gradient(135deg, #e8f5e9, #c8e6c9); border-radius: 12px; padding: 20px; margin-bottom: 25px;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">
                <h4 style="font-weight: bold; color: #2e7d32; margin: 0;">Full-Stack E-commerce Project</h4>
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

            <div style="background: linear-gradient(135deg, #f3e5f5, #e1bee7); border-radius: 12px; padding: 20px;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">
                <h4 style="font-weight: bold; color: #6a1b9a; margin: 0;">UI/UX Design for Developers</h4>
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

        <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px; margin-bottom: 40px;">
          <h3 style="font-size: 1.5rem; font-weight: bold; color: #333; margin-bottom: 25px; display: flex; align-items: center;">
            <span style="margin-right: 10px;">📚</span> Learning Stages
          </h3>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">
            <div style="border: 3px solid #6a11cb; border-radius: 12px; padding: 25px; position: relative; background: linear-gradient(135deg, #f8f9fa, #e9ecef);">
              <div style="position: absolute; top: -15px; left: 25px; background: linear-gradient(135deg, #6a11cb, #2575fc); color: white; font-weight: bold; padding: 6px 15px; border-radius: 25px; font-size: 0.9rem;">
                CURRENT STAGE
              </div>
              <h4 style="font-size: 1.4rem; font-weight: bold; color: #6a11cb; margin: 15px 0 15px;">Foundation Building</h4>
              <p style="color: #555; margin-bottom: 20px;">Strengthen core skills in your areas of interest</p>

              <div style="margin-bottom: 20px;">
                <h5 style="font-weight: bold; color: #333; margin-bottom: 12px;">Courses in this stage:</h5>
                <div style="background-color: white; border-radius: 8px; padding: 15px; margin-bottom: 15px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                  <div style="display: flex; align-items: flex-start; margin-bottom: 12px;">
                    <div style="width: 30px; height: 30px; background: linear-gradient(135deg, #6a11cb, #2575fc); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.9rem; margin-right: 15px; flex-shrink: 0;">1</div>
                    <div>
                      <p style="font-weight: bold; margin: 0; font-size: 1.1rem;">HTML & CSS Fundamentals</p>
                      <p style="font-size: 0.9rem; color: #666; margin: 5px 0;">Learn the building blocks of web development</p>
                      <div style="display: flex; align-items: center; margin-top: 8px;">
                        <div style="width: 80%; background-color: #e9ecef; border-radius: 5px; height: 8px; margin-right: 10px;">
                          <div style="background-color: #4caf50; height: 8px; border-radius: 5px; width: 100%;"></div>
                        </div>
                        <span style="font-size: 0.8rem; font-weight: bold;">100%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div style="background-color: white; border-radius: 8px; padding: 15px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                  <div style="display: flex; align-items: flex-start; margin-bottom: 12px;">
                    <div style="width: 30px; height: 30px; background: linear-gradient(135deg, #6a11cb, #2575fc); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.9rem; margin-right: 15px; flex-shrink: 0;">2</div>
                    <div>
                      <p style="font-weight: bold; margin: 0; font-size: 1.1rem;">JavaScript Basics</p>
                      <p style="font-size: 0.9rem; color: #666; margin: 5px 0;">Add interactivity to your web pages</p>
                      <div style="display: flex; align-items: center; margin-top: 8px;">
                        <div style="width: 80%; background-color: #e9ecef; border-radius: 5px; height: 8px; margin-right: 10px;">
                          <div style="background-color: #4caf50; height: 8px; border-radius: 5px; width: 100%;"></div>
                        </div>
                        <span style="font-size: 0.8rem; font-weight: bold;">100%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h5 style="font-weight: bold; color: #333; margin-bottom: 12px;">Stage Objectives:</h5>
                <ul style="padding-left: 25px; margin: 0;">
                  <li style="margin-bottom: 10px;">Master fundamental concepts</li>
                  <li style="margin-bottom: 10px;">Complete hands-on projects</li>
                  <li>Build a portfolio showcase</li>
                </ul>
              </div>
            </div>

            <div>
              <div style="background: linear-gradient(135deg, #e9ecef, #ced4da); border-radius: 12px; padding: 25px; margin-bottom: 30px; opacity: 0.7;">
                <h4 style="font-size: 1.4rem; font-weight: bold; color: #6c757d; margin-bottom: 15px;">Advanced Development</h4>
                <p style="color: #6c757d; margin-bottom: 20px;">Deep dive into backend technologies and databases</p>

                <div style="margin-bottom: 20px;">
                  <h5 style="font-weight: bold; color: #6c757d; margin-bottom: 12px;">Courses in this stage:</h5>
                  <div style="background-color: white; border-radius: 8px; padding: 15px; margin-bottom: 15px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                    <div style="display: flex; align-items: flex-start; margin-bottom: 12px;">
                      <div style="width: 30px; height: 30px; background-color: #6c757d; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.9rem; margin-right: 15px; flex-shrink: 0;">3</div>
                      <div>
                        <p style="font-weight: bold; margin: 0; font-size: 1.1rem;">Node.js & Express</p>
                        <p style="font-size: 0.9rem; color: #6c757d; margin: 5px 0;">Build scalable server-side applications</p>
                        <div style="display: flex; align-items: center; margin-top: 8px;">
                          <div style="width: 80%; background-color: #e9ecef; border-radius: 5px; height: 8px; margin-right: 10px;">
                            <div style="background-color: #6c757d; height: 8px; border-radius: 5px; width: 45%;"></div>
                          </div>
                          <span style="font-size: 0.8rem; font-weight: bold; color: #6c757d;">45%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style="background-color: white; border-radius: 8px; padding: 15px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                    <div style="display: flex; align-items: flex-start; margin-bottom: 12px;">
                      <div style="width: 30px; height: 30px; background-color: #6c757d; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.9rem; margin-right: 15px; flex-shrink: 0;">4</div>
                      <div>
                        <p style="font-weight: bold; margin: 0; font-size: 1.1rem;">Database Design with PostgreSQL</p>
                        <p style="font-size: 0.9rem; color: #6c757d; margin: 5px 0;">Design and implement robust databases</p>
                        <div style="display: flex; align-items: center; margin-top: 8px;">
                          <div style="width: 80%; background-color: #e9ecef; border-radius: 5px; height: 8px; margin-right: 10px;">
                            <div style="background-color: #6c757d; height: 8px; border-radius: 5px; width: 0%;"></div>
                          </div>
                          <span style="font-size: 0.8rem; font-weight: bold; color: #6c757d;">0%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 style="font-weight: bold; color: #6c757d; margin-bottom: 12px;">Stage Objectives:</h5>
                  <ul style="padding-left: 25px; margin: 0; opacity: 0.7;">
                    <li style="margin-bottom: 10px;">Create RESTful APIs</li>
                    <li style="margin-bottom: 10px;">Implement database relationships</li>
                    <li>Deploy applications to cloud platforms</li>
                  </ul>
                </div>
              </div>

              <div style="background: linear-gradient(135deg, #e9ecef, #ced4da); border-radius: 12px; padding: 25px; opacity: 0.5;">
                <h4 style="font-size: 1.4rem; font-weight: bold; color: #6c757d; margin-bottom: 15px;">Specialization & Career</h4>
                <p style="color: #6c757d; margin-bottom: 20px;">Focus on your chosen specialization and job preparation</p>

                <div style="margin-bottom: 20px;">
                  <h5 style="font-weight: bold; color: #6c757d; margin-bottom: 12px;">Courses in this stage:</h5>
                  <div style="background-color: white; border-radius: 8px; padding: 15px; margin-bottom: 15px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                    <div style="display: flex; align-items: flex-start; margin-bottom: 12px;">
                      <div style="width: 30px; height: 30px; background-color: #6c757d; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.9rem; margin-right: 15px; flex-shrink: 0;">5</div>
                      <div>
                        <p style="font-weight: bold; margin: 0; font-size: 1.1rem;">React Frontend Development</p>
                        <p style="font-size: 0.9rem; color: #6c757d; margin: 5px 0;">Build modern user interfaces</p>
                        <div style="display: flex; align-items: center; margin-top: 8px;">
                          <div style="width: 80%; background-color: #e9ecef; border-radius: 5px; height: 8px; margin-right: 10px;">
                            <div style="background-color: #6c757d; height: 8px; border-radius: 5px; width: 65%;"></div>
                          </div>
                          <span style="font-size: 0.8rem; font-weight: bold; color: #6c757d;">65%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style="background-color: white; border-radius: 8px; padding: 15px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                    <div style="display: flex; align-items: flex-start; margin-bottom: 12px;">
                      <div style="width: 30px; height: 30px; background-color: #6c757d; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.9rem; margin-right: 15px; flex-shrink: 0;">6</div>
                      <div>
                        <p style="font-weight: bold; margin: 0; font-size: 1.1rem;">DevOps & Deployment</p>
                        <p style="font-size: 0.9rem; color: #6c757d; margin: 5px 0;">Deploy and maintain applications</p>
                        <div style="display: flex; align-items: center; margin-top: 8px;">
                          <div style="width: 80%; background-color: #e9ecef; border-radius: 5px; height: 8px; margin-right: 10px;">
                            <div style="background-color: #6c757d; height: 8px; border-radius: 5px; width: 0%;"></div>
                          </div>
                          <span style="font-size: 0.8rem; font-weight: bold; color: #6c757d;">0%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 style="font-weight: bold; color: #6c757d; margin-bottom: 12px;">Stage Objectives:</h5>
                  <ul style="padding-left: 25px; margin: 0; opacity: 0.7;">
                    <li style="margin-bottom: 10px;">Master your specialization</li>
                    <li style="margin-bottom: 10px;">Prepare for job interviews</li>
                    <li>Build a professional portfolio</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px; margin-bottom: 40px;">
          <h3 style="font-size: 1.5rem; font-weight: bold; color: #333; margin-bottom: 25px; display: flex; align-items: center;">
            <span style="margin-right: 10px;">📈</span> Career Progression
          </h3>

          <div style="display: flex; justify-content: space-between; margin-bottom: 30px; position: relative;">
            <div style="text-align: center; flex: 1; position: relative;">
              <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #4caf50, #8bc34a); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; margin: 0 auto 15px; font-size: 1.2rem;">1</div>
              <h4 style="font-weight: bold; margin-bottom: 8px;">Junior Developer</h4>
              <p style="font-size: 0.9rem; color: #666;">Entry-level position</p>
              <div style="position: absolute; top: 30px; right: 0; height: 3px; background: linear-gradient(90deg, #4caf50, #8bc34a); width: calc(100% - 30px);"></div>
            </div>
            <div style="text-align: center; flex: 1; position: relative;">
              <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #2196f3, #03a9f4); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; margin: 0 auto 15px; font-size: 1.2rem;">2</div>
              <h4 style="font-weight: bold; margin-bottom: 8px;">Developer</h4>
              <p style="font-size: 0.9rem; color: #666;">Mid-level position</p>
              <div style="position: absolute; top: 30px; right: 0; height: 3px; background: linear-gradient(90deg, #2196f3, #03a9f4); width: calc(100% - 30px);"></div>
            </div>
            <div style="text-align: center; flex: 1; position: relative;">
              <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #ff9800, #ffc107); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #212529; font-weight: bold; margin: 0 auto 15px; font-size: 1.2rem;">3</div>
              <h4 style="font-weight: bold; margin-bottom: 8px;">Senior Developer</h4>
              <p style="font-size: 0.9rem; color: #666;">Advanced position</p>
              <div style="position: absolute; top: 30px; right: 0; height: 3px; background: linear-gradient(90deg, #ff9800, #ffc107); width: calc(100% - 30px);"></div>
            </div>
            <div style="text-align: center; flex: 1;">
              <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #9c27b0, #e91e63); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; margin: 0 auto 15px; font-size: 1.2rem;">4</div>
              <h4 style="font-weight: bold; margin-bottom: 8px;">Tech Lead</h4>
              <p style="font-size: 0.9rem; color: #666;">Leadership role</p>
            </div>
          </div>

          <div style="background: linear-gradient(135deg, #e3f2fd, #bbdefb); border-radius: 12px; padding: 25px;">
            <h4 style="font-weight: bold; color: #0d47a1; margin-bottom: 15px;">🎯 Your Path to Success</h4>
            <p style="color: #0d47a1; margin-bottom: 20px;">Based on your current progress, you're on track to become a Junior Developer in 4 months!</p>
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px;">
              <div style="background-color: white; border-radius: 8px; padding: 20px; text-align: center;">
                <p style="font-size: 0.9rem; color: #666; margin-bottom: 10px;">Skills Match</p>
                <div style="width: 100%; background-color: #e9ecef; border-radius: 5px; height: 12px; margin-bottom: 10px;">
                  <div style="background: linear-gradient(90deg, #4caf50, #8bc34a); height: 12px; border-radius: 5px; width: 75%"></div>
                </div>
                <p style="font-size: 1.2rem; font-weight: bold; color: #4caf50; margin: 0;">75%</p>
              </div>
              <div style="background-color: white; border-radius: 8px; padding: 20px; text-align: center;">
                <p style="font-size: 0.9rem; color: #666; margin-bottom: 10px;">Industry Demand</p>
                <div style="width: 100%; background-color: #e9ecef; border-radius: 5px; height: 12px; margin-bottom: 10px;">
                  <div style="background: linear-gradient(90deg, #2196f3, #03a9f4); height: 12px; border-radius: 5px; width: 92%"></div>
                </div>
                <p style="font-size: 1.2rem; font-weight: bold; color: #2196f3; margin: 0;">92%</p>
              </div>
              <div style="background-color: white; border-radius: 8px; padding: 20px; text-align: center;">
                <p style="font-size: 0.9rem; color: #666; margin-bottom: 10px;">Salary Potential</p>
                <div style="width: 100%; background-color: #e9ecef; border-radius: 5px; height: 12px; margin-bottom: 10px;">
                  <div style="background: linear-gradient(90deg, #ff9800, #ffc107); height: 12px; border-radius: 5px; width: 85%"></div>
                </div>
                <p style="font-size: 1.2rem; font-weight: bold; color: #ff9800; margin: 0;">85%</p>
              </div>
            </div>
          </div>
        </div>

        <div style="text-align: center; padding: 30px; background: linear-gradient(135deg, #6a11cb, #2575fc); border-radius: 12px; color: white;">
          <h3 style="font-size: 1.8rem; font-weight: bold; margin-bottom: 15px;">🚀 Ready to advance your career?</h3>
          <p style="font-size: 1.1rem; margin-bottom: 25px; max-width: 700px; margin-left: auto; margin-right: auto; opacity: 0.9;">
            Continue your learning journey with personalized recommendations and unlock your full potential!
          </p>
          <button style="background: linear-gradient(135deg, #ff9a9e, #fad0c4); color: #333; font-weight: bold; padding: 16px 32px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.2rem; transition: transform 0.2s;">
            📚 Continue Learning Path
          </button>
        </div>

        <div style="background: linear-gradient(135deg, #ffd54f, #ffb300); border-radius: 12px; padding: 25px; margin-bottom: 30px; text-align: center;">
          <h3 style="font-weight: bold; color: #333; margin-bottom: 15px;">🔮 Experience Ultimate AI Recommendations</h3>
          <p style="color: #555; margin-bottom: 20px; max-width: 700px; margin-left: auto; margin-right: auto;">
            Unlock quantum-level personalized learning paths with predictive analytics and neural network modeling
          </p>
          <a href="/ai-recommendations/ultimate" style="display: inline-block; background: linear-gradient(135deg, #6a11cb, #2575fc); color: white; font-weight: bold; padding: 12px 25px; border: none; border-radius: 6px; text-decoration: none; font-size: 1rem; transition: transform 0.2s;">
            🤖 Access Ultimate AI Recommendations
          </a>
        </div>
      </div>
    </div>
  `;
}
