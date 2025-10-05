'use client';

// Enhanced collaboration page with improved learning path display and humorous elements
export default function CollaborationsPage() {
  return `
    <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f8f9fa; min-height: 100vh;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <div style="margin-bottom: 30px; text-align: center;">
          <h1 style="font-size: 2.5rem; font-weight: bold; color: #333; margin-bottom: 10px;">🎓 Collaboration Hub 🚀</h1>
          <p style="color: #666; font-size: 1.2rem;">Join collaborative projects and work together with fellow students</p>
        </div>

        <div style="background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); border-radius: 12px; padding: 24px; color: white; margin-bottom: 30px; text-align: center;">
          <h2 style="font-size: 2rem; font-weight: bold; margin-bottom: 15px;">🌟 Featured Collaboration 🌟</h2>
          <p style="font-size: 1.25rem; margin-bottom: 20px; opacity: 0.9;">Web Development Project Collaboration</p>
          <div style="background-color: rgba(255, 255, 255, 0.1); border-radius: 8px; padding: 20px; max-width: 800px; margin: 0 auto;">
            <h3 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 15px;">Full-Stack Web Development Path</h3>
            <p style="font-size: 1.1rem; margin-bottom: 20px;">Comprehensive path covering frontend, backend, and database development</p>
            <div style="display: flex; justify-content: center; gap: 30px; flex-wrap: wrap;">
              <div style="text-align: center;">
                <p style="font-size: 0.9rem; opacity: 0.8;">Duration</p>
                <p style="font-weight: bold; font-size: 1.2rem;">12 weeks</p>
              </div>
              <div style="text-align: center;">
                <p style="font-size: 0.9rem; opacity: 0.8;">Skills</p>
                <p style="font-weight: bold; font-size: 1.2rem;">5+</p>
              </div>
              <div style="text-align: center;">
                <p style="font-size: 0.9rem; opacity: 0.8;">Certification</p>
                <p style="font-weight: bold; font-size: 1.2rem;">Available</p>
              </div>
            </div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 40px;">
          <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px;">
            <h3 style="font-size: 1.5rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
              <span style="margin-right: 10px;">📊</span> Project Progress
            </h3>

            <div style="margin-bottom: 25px;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                <span style="font-weight: bold; color: #333;">Overall Progress</span>
                <span style="font-weight: bold; color: #007bff;">65%</span>
              </div>
              <div style="width: 100%; background-color: #e9ecef; border-radius: 10px; height: 20px;">
                <div style="background: linear-gradient(90deg, #007bff, #00d4ff); height: 20px; border-radius: 10px; width: 65%;"></div>
              </div>
            </div>

            <div>
              <h4 style="font-weight: bold; color: #333; margin-bottom: 15px; display: flex; align-items: center;">
                <span style="margin-right: 10px;">🏁</span> Milestones
              </h4>
              <div style="space-y-3;">
                <div style="display: flex; align-items: center; padding: 12px; background-color: #e8f5e9; border-radius: 8px; margin-bottom: 12px;">
                  <div style="width: 28px; height: 28px; background-color: #4caf50; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; margin-right: 15px;">✓</div>
                  <div>
                    <p style="font-weight: bold; color: #2e7d32;">Project Planning</p>
                    <p style="font-size: 0.85rem; color: #666;">Completed on Oct 20, 2023</p>
                  </div>
                </div>

                <div style="display: flex; align-items: center; padding: 12px; background-color: #e8f5e9; border-radius: 8px; margin-bottom: 12px;">
                  <div style="width: 28px; height: 28px; background-color: #4caf50; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; margin-right: 15px;">✓</div>
                  <div>
                    <p style="font-weight: bold; color: #2e7d32;">Frontend Development</p>
                    <p style="font-size: 0.85rem; color: #666;">Completed on Nov 5, 2023</p>
                  </div>
                </div>

                <div style="display: flex; align-items: center; padding: 12px; background-color: #fff3e0; border-radius: 8px; margin-bottom: 12px;">
                  <div style="width: 28px; height: 28px; background-color: #ff9800; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; margin-right: 15px;">2</div>
                  <div>
                    <p style="font-weight: bold; color: #ef6c00;">Backend Development</p>
                    <p style="font-size: 0.85rem; color: #666;">Due on Nov 20, 2023</p>
                  </div>
                </div>

                <div style="display: flex; align-items: center; padding: 12px; background-color: #f5f5f5; border-radius: 8px;">
                  <div style="width: 28px; height: 28px; background-color: #9e9e9e; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; margin-right: 15px;">3</div>
                  <div>
                    <p style="font-weight: bold; color: #616161;">Testing & Deployment</p>
                    <p style="font-size: 0.85rem; color: #666;">Due on Dec 5, 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px;">
            <h3 style="font-size: 1.5rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
              <span style="margin-right: 10px;">👥</span> Team Members
            </h3>

            <div style="margin-bottom: 25px;">
              <div style="display: flex; align-items: center; padding: 15px; background-color: #e3f2fd; border-radius: 8px; margin-bottom: 15px;">
                <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #2196f3, #21cbf3); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.2rem; margin-right: 15px;">AS</div>
                <div>
                  <h4 style="font-weight: bold; color: #0d47a1; margin: 0;">Andi Saputra</h4>
                  <p style="color: #666; margin: 3px 0; font-size: 0.9rem;">Frontend Developer</p>
                  <div style="display: flex; flex-wrap: wrap; gap: 5px; margin-top: 5px;">
                    <span style="background-color: #bbdefb; color: #0d47a1; font-size: 0.75rem; padding: 3px 8px; border-radius: 12px;">React</span>
                    <span style="background-color: #bbdefb; color: #0d47a1; font-size: 0.75rem; padding: 3px 8px; border-radius: 12px;">CSS</span>
                    <span style="background-color: #bbdefb; color: #0d47a1; font-size: 0.75rem; padding: 3px 8px; border-radius: 12px;">JavaScript</span>
                  </div>
                </div>
              </div>

              <div style="display: flex; align-items: center; padding: 15px; background-color: #e8f5e9; border-radius: 8px; margin-bottom: 15px;">
                <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #4caf50, #8bc34a); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.2rem; margin-right: 15px;">BP</div>
                <div>
                  <h4 style="font-weight: bold; color: #2e7d32; margin: 0;">Budi Prasetyo</h4>
                  <p style="color: #666; margin: 3px 0; font-size: 0.9rem;">Backend Developer</p>
                  <div style="display: flex; flex-wrap: wrap; gap: 5px; margin-top: 5px;">
                    <span style="background-color: #c8e6c9; color: #2e7d32; font-size: 0.75rem; padding: 3px 8px; border-radius: 12px;">Node.js</span>
                    <span style="background-color: #c8e6c9; color: #2e7d32; font-size: 0.75rem; padding: 3px 8px; border-radius: 12px;">Express</span>
                    <span style="background-color: #c8e6c9; color: #2e7d32; font-size: 0.75rem; padding: 3px 8px; border-radius: 12px;">MongoDB</span>
                  </div>
                </div>
              </div>

              <div style="display: flex; align-items: center; padding: 15px; background-color: #f3e5f5; border-radius: 8px;">
                <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #9c27b0, #e91e63); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.2rem; margin-right: 15px;">CD</div>
                <div>
                  <h4 style="font-weight: bold; color: #6a1b9a; margin: 0;">Cinta Dewi</h4>
                  <p style="color: #666; margin: 3px 0; font-size: 0.9rem;">UI/UX Designer</p>
                  <div style="display: flex; flex-wrap: wrap; gap: 5px; margin-top: 5px;">
                    <span style="background-color: #e1bee7; color: #6a1b9a; font-size: 0.75rem; padding: 3px 8px; border-radius: 12px;">Figma</span>
                    <span style="background-color: #e1bee7; color: #6a1b9a; font-size: 0.75rem; padding: 3px 8px; border-radius: 12px;">Adobe XD</span>
                    <span style="background-color: #e1bee7; color: #6a1b9a; font-size: 0.75rem; padding: 3px 8px; border-radius: 12px;">User Research</span>
                  </div>
                </div>
              </div>
            </div>

            <button style="width: 100%; background: linear-gradient(135deg, #007bff, #00d4ff); color: white; font-weight: bold; padding: 15px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.1rem; transition: transform 0.2s;">
              🚀 Join Collaboration
            </button>
          </div>
        </div>

        <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px; margin-bottom: 40px;">
          <h3 style="font-size: 1.5rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
            <span style="margin-right: 10px;">📚</span> Learning Path Details
          </h3>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px;">
            <div>
              <h4 style="font-weight: bold; color: #333; margin-bottom: 15px;">🎯 Learning Objectives</h4>
              <ul style="list-style: none; padding: 0; margin: 0;">
                <li style="display: flex; align-items: flex-start; margin-bottom: 12px;">
                  <div style="width: 24px; height: 24px; background-color: #007bff; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.8rem; margin-right: 12px; flex-shrink: 0;">1</div>
                  <span>Build responsive web interfaces</span>
                </li>
                <li style="display: flex; align-items: flex-start; margin-bottom: 12px;">
                  <div style="width: 24px; height: 24px; background-color: #007bff; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.8rem; margin-right: 12px; flex-shrink: 0;">2</div>
                  <span>Create RESTful APIs</span>
                </li>
                <li style="display: flex; align-items: flex-start; margin-bottom: 12px;">
                  <div style="width: 24px; height: 24px; background-color: #007bff; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.8rem; margin-right: 12px; flex-shrink: 0;">3</div>
                  <span>Implement database design</span>
                </li>
                <li style="display: flex; align-items: flex-start;">
                  <div style="width: 24px; height: 24px; background-color: #007bff; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.8rem; margin-right: 12px; flex-shrink: 0;">4</div>
                  <span>Deploy applications to cloud platforms</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 style="font-weight: bold; color: #333; margin-bottom: 15px;">📋 Prerequisites</h4>
              <div style="background-color: #fff8e1; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
                <ul style="list-style: none; padding: 0; margin: 0;">
                  <li style="display: flex; align-items: center; margin-bottom: 10px;">
                    <div style="width: 20px; height: 20px; background-color: #ffc107; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #212529; font-size: 0.7rem; margin-right: 10px; flex-shrink: 0;">✓</div>
                    <span>Basic Programming</span>
                  </li>
                  <li style="display: flex; align-items: center;">
                    <div style="width: 20px; height: 20px; background-color: #ffc107; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #212529; font-size: 0.7rem; margin-right: 10px; flex-shrink: 0;">✓</div>
                    <span>HTML Fundamentals</span>
                  </li>
                </ul>
              </div>

              <h4 style="font-weight: bold; color: #333; margin-bottom: 15px;">🏆 Certification</h4>
              <div style="background: linear-gradient(135deg, #ffeb3b, #ffc107); border-radius: 8px; padding: 20px; text-align: center;">
                <p style="font-weight: bold; color: #212529; font-size: 1.2rem; margin: 0;">Full-Stack Web Developer Certificate</p>
                <p style="color: #5d4037; margin: 8px 0 0; font-size: 0.9rem;">Industry recognized credential</p>
              </div>
            </div>
          </div>
        </div>

        <h2 style="font-size: 2rem; font-weight: bold; color: #333; margin-bottom: 25px; text-align: center;">🌐 Other Collaborations</h2>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">
          <div style="background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%); border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); overflow: hidden;">
            <div style="padding: 28px;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">
                <h3 style="font-size: 1.4rem; font-weight: bold; color: #333;">Network Infrastructure Design</h3>
                <span style="background-color: #fff3cd; color: #856404; font-size: 0.8rem; padding: 5px 10px; border-radius: 20px; font-weight: bold;">
                  PLANNING
                </span>
              </div>

              <p style="color: #555; margin-bottom: 20px;">Designing a complete network infrastructure for a small business</p>

              <div style="margin-bottom: 20px;">
                <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #555; margin-bottom: 8px;">
                  <span>Progress</span>
                  <span>20%</span>
                </div>
                <div style="width: 100%; background-color: #e9ecef; border-radius: 10px; height: 16px;">
                  <div style="background: linear-gradient(90deg, #ffc107, #ff9800); height: 16px; border-radius: 10px; width: 20%;"></div>
                </div>
              </div>

              <div style="margin-bottom: 20px;">
                <h4 style="font-size: 1rem; font-weight: bold; color: #333; margin-bottom: 8px;">Learning Path</h4>
                <p style="font-size: 0.95rem; color: #555;">Network Infrastructure Planning</p>
              </div>

              <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="font-size: 0.95rem; color: #555;">
                  <span style="font-weight: bold;">2</span> participants
                </div>
                <button style="background: linear-gradient(135deg, #007bff, #00d4ff); color: white; font-weight: bold; padding: 10px 20px; border: none; border-radius: 6px; cursor: pointer; font-size: 0.9rem;">
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div style="background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%); border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); overflow: hidden;">
            <div style="padding: 28px;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">
                <h3 style="font-size: 1.4rem; font-weight: bold; color: #333;">Mobile App Development</h3>
                <span style="background-color: #d4edda; color: #155724; font-size: 0.8rem; padding: 5px 10px; border-radius: 20px; font-weight: bold;">
                  ACTIVE
                </span>
              </div>

              <p style="color: #555; margin-bottom: 20px;">Creating a cross-platform mobile application for student services</p>

              <div style="margin-bottom: 20px;">
                <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #555; margin-bottom: 8px;">
                  <span>Progress</span>
                  <span>45%</span>
                </div>
                <div style="width: 100%; background-color: #e9ecef; border-radius: 10px; height: 16px;">
                  <div style="background: linear-gradient(90deg, #28a745, #20c997); height: 16px; border-radius: 10px; width: 45%;"></div>
                </div>
              </div>

              <div style="margin-bottom: 20px;">
                <h4 style="font-size: 1rem; font-weight: bold; color: #333; margin-bottom: 8px;">Learning Path</h4>
                <p style="font-size: 0.95rem; color: #555;">Cross-Platform Mobile Development</p>
              </div>

              <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="font-size: 0.95rem; color: #555;">
                  <span style="font-weight: bold;">3</span> participants
                </div>
                <button style="background: linear-gradient(135deg, #007bff, #00d4ff); color: white; font-weight: bold; padding: 10px 20px; border: none; border-radius: 6px; cursor: pointer; font-size: 0.9rem;">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>

        <div style="text-align: center; margin-top: 40px; padding: 30px; background-color: #e3f2fd; border-radius: 12px;">
          <h3 style="font-size: 1.8rem; font-weight: bold; color: #0d47a1; margin-bottom: 15px;">💡 Want to start your own collaboration?</h3>
          <p style="font-size: 1.1rem; color: #555; margin-bottom: 25px; max-width: 700px; margin-left: auto; margin-right: auto;">
            Create a new collaborative project and invite fellow students to join you on your learning journey!
          </p>
          <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
            <button style="background: linear-gradient(135deg, #6a11cb, #2575fc); color: white; font-weight: bold; padding: 16px 32px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.2rem; transition: transform 0.2s;">
              🚀 Create New Collaboration
            </button>
            <a href="/collaborations/real-time" style="background: linear-gradient(135deg, #ff9a9e, #fad0c4); color: #333; font-weight: bold; padding: 16px 32px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.2rem; transition: transform 0.2s; text-decoration: none; display: inline-block;">
              ⚡ Join Real-time Session
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}
