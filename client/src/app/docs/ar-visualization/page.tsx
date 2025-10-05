// AR Visualization Documentation Page
'use client';

export default function ARVisualizationDocumentationPage() {
  return `
    <div style="font-family: Arial, sans-serif; padding: 20px; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); min-height: 100vh;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <div style="margin-bottom: 30px; text-align: center;">
          <h1 style="font-size: 2.5rem; font-weight: bold; color: #333; margin-bottom: 10px;">📘 AR Visualization Documentation 🎯</h1>
          <p style="color: #666; font-size: 1.2rem;">Comprehensive guide to our augmented reality visualization components</p>
        </div>

        <div style="background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); border-radius: 12px; padding: 24px; color: white; margin-bottom: 30px; text-align: center;">
          <h2 style="font-size: 2rem; font-weight: bold; margin-bottom: 15px;">🔮 AR Visualization Components Overview</h2>
          <p style="font-size: 1.25rem; margin-bottom: 20px; opacity: 0.9;">Explore our suite of AR visualization tools designed for collaborative learning</p>
          <div style="display: flex; justify-content: center; gap: 30px; flex-wrap: wrap;">
            <div style="text-align: center;">
              <p style="font-size: 0.9rem; opacity: 0.8;">Components</p>
              <p style="font-weight: bold; font-size: 1.5rem;">4</p>
            </div>
            <div style="text-align: center;">
              <p style="font-size: 0.9rem; opacity: 0.8;">Features</p>
              <p style="font-weight: bold; font-size: 1.5rem;">25+</p>
            </div>
            <div style="text-align: center;">
              <p style="font-size: 0.9rem; opacity: 0.8;">Visualization Types</p>
              <p style="font-weight: bold; font-size: 1.5rem;">8</p>
            </div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 40px;">
          <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px;">
            <h3 style="font-size: 1.5rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
              <span style="margin-right: 10px;">🔮</span> Basic AR Visualization
            </h3>
            <p style="color: #666; margin-bottom: 20px;">
              Our foundational AR visualization component provides core functionality for displaying 3D annotations
              with gold sphere markers and basic network equipment representation.
            </p>
            <div style="background: linear-gradient(135deg, #e3f2fd, #bbdefb); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
              <h4 style="font-weight: bold; color: #0d47a1; margin-bottom: 15px;">Key Features:</h4>
              <ul style="list-style: none; padding: 0; margin: 0;">
                <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                  <span style="margin-right: 10px; color: #0d47a1;">✓</span>
                  <span>Gold sphere annotation markers with pulsing animations</span>
                </li>
                <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                  <span style="margin-right: 10px; color: #0d47a1;">✓</span>
                  <span>Basic network equipment visualization</span>
                </li>
                <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                  <span style="margin-right: 10px; color: #0d47a1;">✓</span>
                  <span>Dashed connection lines between annotations</span>
                </li>
                <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                  <span style="margin-right: 10px; color: #0d47a1;">✓</span>
                  <span>Simple annotation details display</span>
                </li>
              </ul>
            </div>
            <a href="/ar-visualization" style="display: inline-block; background: linear-gradient(135deg, #007bff, #00d4ff); color: white; font-weight: bold; padding: 12px 25px; border: none; border-radius: 8px; cursor: pointer; font-size: 1rem; text-decoration: none; text-align: center;">
              View Component
            </a>
          </div>

          <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px;">
            <h3 style="font-size: 1.5rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
              <span style="margin-right: 10px;">🔮</span> Enhanced AR Visualization
            </h3>
            <p style="color: #666; margin-bottom: 20px;">
              Our enhanced component builds upon the basic visualization with improved animations,
              more detailed equipment representations, and comprehensive annotation management features.
            </p>
            <div style="background: linear-gradient(135deg, #fff3cd, #ffe082); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
              <h4 style="font-weight: bold; color: #856404; margin-bottom: 15px;">Key Features:</h4>
              <ul style="list-style: none; padding: 0; margin: 0;">
                <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                  <span style="margin-right: 10px; color: #856404;">✓</span>
                  <span>Enhanced gold sphere animations with improved visual effects</span>
                </li>
                <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                  <span style="margin-right: 10px; color: #856404;">✓</span>
                  <span>Detailed network equipment with labeling</span>
                </li>
                <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                  <span style="margin-right: 10px; color: #856404;">✓</span>
                  <span>Advanced connection lines with dynamic animations</span>
                </li>
                <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                  <span style="margin-right: 10px; color: #856404;">✓</span>
                  <span>Comprehensive annotation details with verification controls</span>
                </li>
                <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                  <span style="margin-right: 10px; color: #856404;">✓</span>
                  <span>Real-time measurement analytics</span>
                </li>
              </ul>
            </div>
            <a href="/ar-visualization/advanced" style="display: inline-block; background: linear-gradient(135deg, #ffc107, #ff9800); color: #212529; font-weight: bold; padding: 12px 25px; border: none; border-radius: 8px; cursor: pointer; font-size: 1rem; text-decoration: none; text-align: center;">
              View Component
            </a>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 40px;">
          <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px;">
            <h3 style="font-size: 1.5rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
              <span style="margin-right: 10px;">🔮</span> Advanced AR Visualization
            </h3>
            <p style="color: #666; margin-bottom: 20px;">
              Our advanced visualization component offers sophisticated 3D representations with
              comprehensive data visualization and collaborative features.
            </p>
            <div style="background: linear-gradient(135deg, #d1ecf1, #a8e6cf); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
              <h4 style="font-weight: bold; color: #0c5460; margin-bottom: 15px;">Key Features:</h4>
              <ul style="list-style: none; padding: 0; margin: 0;">
                <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                  <span style="margin-right: 10px; color: #0c5460;">✓</span>
                  <span>Sophisticated 3D network equipment visualization</span>
                </li>
                <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                  <span style="margin-right: 10px; color: #0c5460;">✓</span>
                  <span>Multiple animation layers for enhanced visual feedback</span>
                </li>
                <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                  <span style="margin-right: 10px; color: #0c5460;">✓</span>
                  <span>Comprehensive measurement annotation system</span>
                </li>
                <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                  <span style="margin-right: 10px; color: #0c5460;">✓</span>
                  <span>Advanced visualization controls (rotate, zoom, labels)</span>
                </li>
                <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                  <span style="margin-right: 10px; color: #0c5460;">✓</span>
                  <span>Detailed measurement analytics with historical data</span>
                </li>
              </ul>
            </div>
            <a href="/ar-visualization/advanced" style="display: inline-block; background: linear-gradient(135deg, #28a745, #20c997); color: white; font-weight: bold; padding: 12px 25px; border: none; border-radius: 8px; cursor: pointer; font-size: 1rem; text-decoration: none; text-align: center;">
              View Component
            </a>
          </div>

          <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px;">
            <h3 style="font-size: 1.5rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
              <span style="margin-right: 10px;">🔮</span> Super Enhanced AR Visualization
            </h3>
            <p style="color: #666; margin-bottom: 20px;">
              Our most advanced component with cutting-edge visualization capabilities,
              real-time collaborative features, and comprehensive analytics.
            </p>
            <div style="background: linear-gradient(135deg, #e8f5e9, #c8e6c9); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
              <h4 style="font-weight: bold; color: #2e7d32; margin-bottom: 15px;">Key Features:</h4>
              <ul style="list-style: none; padding: 0; margin: 0;">
                <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                  <span style="margin-right: 10px; color: #2e7d32;">✓</span>
                  <span>Premium gold sphere visualization with advanced effects</span>
                </li>
                <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                  <span style="margin-right: 10px; color: #2e7d32;">✓</span>
                  <span>Enterprise-grade network equipment representation</span>
                </li>
                <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                  <span style="margin-right: 10px; color: #2e7d32;">✓</span>
                  <span>Multi-layered animation system for immersive experience</span>
                </li>
                <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                  <span style="margin-right: 10px; color: #2e7d32;">✓</span>
                  <span>Real-time collaborative context with presence indicators</span>
                </li>
                <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                  <span style="margin-right: 10px; color: #2e7d32;">✓</span>
                  <span>Advanced analytics with accuracy distribution metrics</span>
                </li>
              </ul>
            </div>
            <a href="/ar-visualization/super-enhanced" style="display: inline-block; background: linear-gradient(135deg, #6f42c1, #9c27b0); color: white; font-weight: bold; padding: 12px 25px; border: none; border-radius: 8px; cursor: pointer; font-size: 1rem; text-decoration: none; text-align: center;">
              View Component
            </a>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 40px;">
          <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px;">
            <h3 style="font-size: 1.5rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
              <span style="margin-right: 10px;">🎯</span> Collaborative AR Learning Path
            </h3>
            <p style="color: #666; margin-bottom: 20px;">
              Our collaborative learning path visualization component with gold sphere annotations
              for tracking progress through educational milestones in AR space.
            </p>
            <div style="background: linear-gradient(135deg, #fce4ec, #f8bbd0); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
              <h4 style="font-weight: bold; color: #880e4f; margin-bottom: 15px;">Key Features:</h4>
              <ul style="list-style: none; padding: 0; margin: 0;">
                <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                  <span style="margin-right: 10px; color: #880e4f;">✓</span>
                  <span>Learning path milestone visualization with 3D gold spheres</span>
                </li>
                <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                  <span style="margin-right: 10px; color: #880e4f;">✓</span>
                  <span>Collaborative context display with team presence indicators</span>
                </li>
                <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                  <span style="margin-right: 10px; color: #880e4f;">✓</span>
                  <span>Progress analytics and skill development tracking</span>
                </li>
                <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                  <span style="margin-right: 10px; color: #880e4f;">✓</span>
                  <span>Interactive milestone exploration with detailed information</span>
                </li>
                <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                  <span style="margin-right: 10px; color: #880e4f;">✓</span>
                  <span>Real-time progress synchronization for collaborative learning</span>
                </li>
              </ul>
            </div>
            <a href="/ar-visualization/collaborative-learning" style="display: inline-block; background: linear-gradient(135deg, #e91e63, #f44336); color: white; font-weight: bold; padding: 12px 25px; border: none; border-radius: 8px; cursor: pointer; font-size: 1rem; text-decoration: none; text-align: center;">
              View Component
            </a>
          </div>

          <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px;">
            <h3 style="font-size: 1.5rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
              <span style="margin-right: 10px;">🔮</span> AR Integrated Collaboration
            </h3>
            <p style="color: #666; margin-bottom: 20px;">
              Our integrated collaboration component that combines real-time collaboration features
              with advanced AR visualization capabilities for enhanced team productivity.
            </p>
            <div style="background: linear-gradient(135deg, #e0f7fa, #b2ebf2); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
              <h4 style="font-weight: bold; color: #006064; margin-bottom: 15px;">Key Features:</h4>
              <ul style="list-style: none; padding: 0; margin: 0;">
                <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                  <span style="margin-right: 10px; color: #006064;">✓</span>
                  <span>Gold sphere annotations for measurement points with pulsing animations</span>
                </li>
                <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                  <span style="margin-right: 10px; color: #006064;">✓</span>
                  <span>Network equipment visualization in 3D space with connection lines</span>
                </li>
                <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                  <span style="margin-right: 10px; color: #006064;">✓</span>
                  <span>Collaborative context display with participant information</span>
                </li>
                <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                  <span style="margin-right: 10px; color: #006064;">✓</span>
                  <span>AR visualization controls for rotation, zoom, and label toggling</span>
                </li>
                <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                  <span style="margin-right: 10px; color: #006064;">✓</span>
                  <span>Comprehensive annotation details with contextual information</span>
                </li>
              </ul>
            </div>
            <a href="/ar-visualization/integrated-collaboration" style="display: inline-block; background: linear-gradient(135deg, #00bcd4, #0097a7); color: white; font-weight: bold; padding: 12px 25px; border: none; border-radius: 8px; cursor: pointer; font-size: 1rem; text-decoration: none; text-align: center;">
              View Component
            </a>
          </div>
        </div>

        <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px; margin-bottom: 40px;">
          <h3 style="font-size: 1.5rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
            <span style="margin-right: 10px;">🔮</span> Ultimate AR Visualization
          </h3>
          <p style="color: #666; margin-bottom: 20px;">
            Our ultimate AR visualization component with cutting-edge features, AI-powered insights,
            and enterprise-grade capabilities for the most demanding visualization needs.
          </p>
          <div style="background: linear-gradient(135deg, #f3e5f5, #e1bee7); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
            <h4 style="font-weight: bold; color: #4a148c; margin-bottom: 15px;">Key Features:</h4>
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                <span style="margin-right: 10px; color: #4a148c;">✓</span>
                <span>Advanced gold sphere visualization with ultimate animations</span>
              </li>
              <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                  <span style="margin-right: 10px; color: #4a148c;">✓</span>
                  <span>Enterprise-grade network equipment representation</span>
                </li>
                <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                  <span style="margin-right: 10px; color: #4a148c;">✓</span>
                  <span>AI-powered predictive analytics and optimization recommendations</span>
                </li>
                <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                  <span style="margin-right: 10px; color: #4a148c;">✓</span>
                  <span>Advanced visualization controls with AI insights panel</span>
                </li>
                <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                  <span style="margin-right: 10px; color: #4a148c;">✓</span>
                  <span>Comprehensive analytics with 14-day trend analysis</span>
                </li>
            </ul>
          </div>
          <a href="/ar-visualization/ultimate" style="display: inline-block; background: linear-gradient(135deg, #7b1fa2, #4a148c); color: white; font-weight: bold; padding: 12px 25px; border: none; border-radius: 8px; cursor: pointer; font-size: 1rem; text-decoration: none; text-align: center;">
            View Component
          </a>
        </div>

        <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px; margin-bottom: 40px;">
          <h3 style="font-size: 1.5rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
            <span style="margin-right: 10px;">🌌</span> Meta-Intelligent AR Visualization
          </h3>
          <p style="color: #666; margin-bottom: 20px;">
            Our meta-intelligent visualization component that combines quantum-conscious AR visualization
            with collective intelligence integration for the most advanced collaborative learning experience.
          </p>
          <div style="background: linear-gradient(135deg, #f3e5f5, #e1bee7); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
            <h4 style="font-weight: bold; color: #4a148c; margin-bottom: 15px;">Key Features:</h4>
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                <span style="margin-right: 10px; color: #4a148c;">✓</span>
                <span>Quantum-conscious gold sphere visualization with consciousness computing animations</span>
              </li>
              <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                <span style="margin-right: 10px; color: #4a148c;">✓</span>
                <span>Neural network equipment representation with quantum status indicators</span>
              </li>
              <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                <span style="margin-right: 10px; color: #4a148c;">✓</span>
                <span>Neuro-linguistic programming optimization with collective intelligence integration</span>
              </li>
              <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                <span style="margin-right: 10px; color: #4a148c;">✓</span>
                <span>Quantum visualization controls with neural overlay toggle</span>
              </li>
              <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                <span style="margin-right: 10px; color: #4a148c;">✓</span>
                <span>Advanced analytics with 21-day quantum trend analysis</span>
              </li>
            </ul>
          </div>
          <a href="/ar-visualization/meta-intelligent" style="display: inline-block; background: linear-gradient(135deg, #7b1fa2, #4a148c); color: white; font-weight: bold; padding: 12px 25px; border: none; border-radius: 8px; cursor: pointer; font-size: 1rem; text-decoration: none; text-align: center;">
            View Component
          </a>
        </div>

        <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px; margin-bottom: 40px;">
          <h3 style="font-size: 1.5rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
            <span style="margin-right: 10px;">⚙️</span> Technical Implementation Details
          </h3>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">
            <div>
              <h4 style="font-weight: bold; color: #333; margin-bottom: 15px;">Core Technologies</h4>
              <div style="background: linear-gradient(135deg, #e3f2fd, #bbdefb); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
                <ul style="list-style: none; padding: 0; margin: 0;">
                  <li style="margin-bottom: 15px; display: flex; align-items: flex-start;">
                    <span style="margin-right: 10px; color: #0d47a1; font-weight: bold;">•</span>
                    <div>
                      <p style="font-weight: bold; margin: 0;">CSS3 Animations</p>
                      <p style="margin: 5px 0 0; font-size: 0.9rem; color: #666;">Custom keyframe animations for gold sphere pulsing effects</p>
                    </div>
                  </li>
                  <li style="margin-bottom: 15px; display: flex; align-items: flex-start;">
                    <span style="margin-right: 10px; color: #0d47a1; font-weight: bold;">•</span>
                    <div>
                      <p style="font-weight: bold; margin: 0;">SVG Graphics</p>
                      <p style="margin: 5px 0 0; font-size: 0.9rem; color: #666;">Dynamic connection lines with animated dash offsets</p>
                    </div>
                  </li>
                  <li style="margin-bottom: 15px; display: flex; align-items: flex-start;">
                    <span style="margin-right: 10px; color: #0d47a1; font-weight: bold;">•</span>
                    <div>
                      <p style="font-weight: bold; margin: 0;">CSS Gradients</p>
                      <p style="margin: 5px 0 0; font-size: 0.9rem; color: #666;">Rich color schemes for equipment and UI elements</p>
                    </div>
                  </li>
                  <li style="display: flex; align-items: flex-start;">
                    <span style="margin-right: 10px; color: #0d47a1; font-weight: bold;">•</span>
                    <div>
                      <p style="font-weight: bold; margin: 0;">Responsive Design</p>
                      <p style="margin: 5px 0 0; font-size: 0.9rem; color: #666;">Grid layouts that adapt to different screen sizes</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h4 style="font-weight: bold; color: #333; margin-bottom: 15px;">Component Architecture</h4>
              <div style="background: linear-gradient(135deg, #fff3cd, #ffe082); border-radius: 12px; padding: 20px;">
                <ul style="list-style: none; padding: 0; margin: 0;">
                  <li style="margin-bottom: 15px; display: flex; align-items: flex-start;">
                    <span style="margin-right: 10px; color: #856404; font-weight: bold;">•</span>
                    <div>
                      <p style="font-weight: bold; margin: 0;">Modular Design</p>
                      <p style="margin: 5px 0 0; font-size: 0.9rem; color: #666;">Reusable components with consistent styling</p>
                    </div>
                  </li>
                  <li style="margin-bottom: 15px; display: flex; align-items: flex-start;">
                    <span style="margin-right: 10px; color: #856404; font-weight: bold;">•</span>
                    <div>
                      <p style="font-weight: bold; margin: 0;">Progressive Enhancement</p>
                      <p style="margin: 5px 0 0; font-size: 0.9rem; color: #666;">Each component builds upon the previous with additional features</p>
                    </div>
                  </li>
                  <li style="margin-bottom: 15px; display: flex; align-items: flex-start;">
                    <span style="margin-right: 10px; color: #856404; font-weight: bold;">•</span>
                    <div>
                      <p style="font-weight: bold; margin: 0;">Performance Optimized</p>
                      <p style="margin: 5px 0 0; font-size: 0.9rem; color: #666;">Efficient rendering with minimal DOM elements</p>
                    </div>
                  </li>
                  <li style="display: flex; align-items: flex-start;">
                    <span style="margin-right: 10px; color: #856404; font-weight: bold;">•</span>
                    <div>
                      <p style="font-weight: bold; margin: 0;">Accessibility Focused</p>
                      <p style="margin: 5px 0 0; font-size: 0.9rem; color: #666;">Semantic HTML structure with proper contrast ratios</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div style="text-align: center; padding: 30px; background: linear-gradient(135deg, #6a11cb, #2575fc); border-radius: 12px; color: white;">
          <h3 style="font-size: 1.8rem; font-weight: bold; margin-bottom: 15px;">🌟 Start Exploring Our AR Visualizations 🌟</h3>
          <p style="font-size: 1.1rem; margin-bottom: 25px; max-width: 700px; margin-left: auto; margin-right: auto; opacity: 0.9;">
            Experience the power of augmented reality in education with our comprehensive visualization suite
          </p>
          <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
            <a href="/ar-visualization" style="background: linear-gradient(135deg, #ff9a9e, #fad0c4); color: #333; font-weight: bold; padding: 16px 32px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.2rem; transition: transform 0.2s; text-decoration: none; display: inline-block;">
              🔮 Basic Visualization
            </a>
            <a href="/ar-visualization/advanced" style="background: linear-gradient(135deg, #a1c4fd, #c2e9fb); color: #333; font-weight: bold; padding: 16px 32px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.2rem; transition: transform 0.2s; text-decoration: none; display: inline-block;">
              🔮 Advanced Visualization
            </a>
            <a href="/ar-visualization/super-enhanced" style="background: linear-gradient(135deg, #d4fc79, #96e6a1); color: #333; font-weight: bold; padding: 16px 32px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.2rem; transition: transform 0.2s; text-decoration: none; display: inline-block;">
              🔮 Super Enhanced
            </a>
            <a href="/ar-visualization/collaborative-learning" style="background: linear-gradient(135deg, #a18cd1, #fbc2eb); color: #333; font-weight: bold; padding: 16px 32px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.2rem; transition: transform 0.2s; text-decoration: none; display: inline-block;">
              🎯 Collaborative Learning
            </a>
            <a href="/docs/ar-visualization/ultimate" style="background: linear-gradient(135deg, #ce93d8, #ab47bc); color: white; font-weight: bold; padding: 16px 32px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.2rem; transition: transform 0.2s; text-decoration: none; display: inline-block;">
              📘 Ultimate Documentation
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}
