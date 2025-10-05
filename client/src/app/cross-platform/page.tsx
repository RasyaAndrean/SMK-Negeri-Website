// CrossPlatformShowcasePage.tsx - Showcase page for cross-platform compatibility features
export default function CrossPlatformShowcasePage() {
  return `
    <div style="font-family: Arial, sans-serif; padding: 20px; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); min-height: 100vh;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <div style="margin-bottom: 30px; text-align: center;">
          <h1 style="font-size: 2.5rem; font-weight: bold; color: #333; margin-bottom: 10px;">📱 Cross-Platform Showcase 🖥️</h1>
          <p style="color: #666; font-size: 1.2rem;">Demonstrating responsive design and device compatibility</p>
        </div>

        <div style="background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); border-radius: 12px; padding: 24px; color: white; margin-bottom: 30px; text-align: center;">
          <h2 style="font-size: 2rem; font-weight: bold; margin-bottom: 15px;">🌟 Universal Design Showcase 🌟</h2>
          <p style="font-size: 1.25rem; margin-bottom: 20px; opacity: 0.9;">Responsive design that works seamlessly across all devices</p>
          <div style="display: flex; justify-content: center; gap: 40px; flex-wrap: wrap;">
            <div style="text-align: center;">
              <p style="font-size: 0.9rem; opacity: 0.8;">Devices Supported</p>
              <p style="font-weight: bold; font-size: 1.5rem;">5+</p>
            </div>
            <div style="text-align: center;">
              <p style="font-size: 0.9rem; opacity: 0.8;">Screen Sizes</p>
              <p style="font-weight: bold; font-size: 1.5rem;">∞</p>
            </div>
            <div style="text-align: center;">
              <p style="font-size: 0.9rem; opacity: 0.8;">Breakpoints</p>
              <p style="font-weight: bold; font-size: 1.5rem;">4</p>
            </div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 40px;">
          <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px;">
            <h3 style="font-size: 1.5rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
              <span style="margin-right: 10px;">📐</span> Responsive Grid System
            </h3>

            <div style="background: linear-gradient(135deg, #e3f2fd, #bbdefb); border-radius: 12px; padding: 25px; margin-bottom: 25px;">
              <h4 style="font-weight: bold; color: #0d47a1; margin-bottom: 20px; text-align: center;">Flexible Layout Examples</h4>

              <div style="margin-bottom: 25px;">
                <h5 style="font-weight: bold; color: #333; margin-bottom: 15px;">Desktop Layout (1200px+)</h5>
                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px;">
                  <div style="background-color: #bbdefb; border-radius: 8px; padding: 20px; text-align: center; height: 100px; display: flex; align-items: center; justify-content: center;">
                    <span>Column 1</span>
                  </div>
                  <div style="background-color: #90caf9; border-radius: 8px; padding: 20px; text-align: center; height: 100px; display: flex; align-items: center; justify-content: center;">
                    <span>Column 2</span>
                  </div>
                  <div style="background-color: #64b5f6; border-radius: 8px; padding: 20px; text-align: center; height: 100px; display: flex; align-items: center; justify-content: center;">
                    <span>Column 3</span>
                  </div>
                </div>
              </div>

              <div style="margin-bottom: 25px;">
                <h5 style="font-weight: bold; color: #333; margin-bottom: 15px;">Tablet Layout (768px-1199px)</h5>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                  <div style="background-color: #bbdefb; border-radius: 8px; padding: 20px; text-align: center; height: 100px; display: flex; align-items: center; justify-content: center;">
                    <span>Column 1</span>
                  </div>
                  <div style="background-color: #90caf9; border-radius: 8px; padding: 20px; text-align: center; height: 100px; display: flex; align-items: center; justify-content: center;">
                    <span>Column 2</span>
                  </div>
                </div>
              </div>

              <div>
                <h5 style="font-weight: bold; color: #333; margin-bottom: 15px;">Mobile Layout (&lt;768px)</h5>
                <div style="display: grid; grid-template-columns: 1fr; gap: 15px;">
                  <div style="background-color: #bbdefb; border-radius: 8px; padding: 20px; text-align: center; height: 100px; display: flex; align-items: center; justify-content: center;">
                    <span>Column 1</span>
                  </div>
                  <div style="background-color: #90caf9; border-radius: 8px; padding: 20px; text-align: center; height: 100px; display: flex; align-items: center; justify-content: center;">
                    <span>Column 2</span>
                  </div>
                  <div style="background-color: #64b5f6; border-radius: 8px; padding: 20px; text-align: center; height: 100px; display: flex; align-items: center; justify-content: center;">
                    <span>Column 3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px;">
            <h3 style="font-size: 1.5rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
              <span style="margin-right: 10px;">📱</span> Device Simulation
            </h3>

            <div style="background: linear-gradient(135deg, #fff3e0, #ffe0b2); border-radius: 12px; padding: 25px; margin-bottom: 25px;">
              <h4 style="font-weight: bold; color: #ef6c00; margin-bottom: 20px; text-align: center;">Cross-Device Compatibility</h4>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                <div style="text-align: center;">
                  <div style="width: 80px; height: 120px; background: linear-gradient(135deg, #333, #666); border-radius: 12px; margin: 0 auto 15px; position: relative; border: 8px solid #333;">
                    <div style="width: 60px; height: 80px; background: linear-gradient(135deg, #e3f2fd, #bbdefb); border-radius: 4px; margin: 10px auto 0;"></div>
                    <div style="width: 20px; height: 20px; background-color: #666; border-radius: 50%; position: absolute; bottom: 5px; left: 50%; transform: translateX(-50%);"></div>
                  </div>
                  <h5 style="font-weight: bold; margin-bottom: 5px;">Smartphone</h5>
                  <p style="font-size: 0.9rem; color: #666;">320px - 480px</p>
                </div>

                <div style="text-align: center;">
                  <div style="width: 100px; height: 140px; background: linear-gradient(135deg, #333, #666); border-radius: 16px; margin: 0 auto 15px; position: relative; border: 12px solid #333;">
                    <div style="width: 76px; height: 90px; background: linear-gradient(135deg, #e3f2fd, #bbdefb); border-radius: 4px; margin: 10px auto 0;"></div>
                    <div style="width: 25px; height: 25px; background-color: #666; border-radius: 50%; position: absolute; bottom: 7px; left: 50%; transform: translateX(-50%);"></div>
                  </div>
                  <h5 style="font-weight: bold; margin-bottom: 5px;">Tablet</h5>
                  <p style="font-size: 0.9rem; color: #666;">768px - 1024px</p>
                </div>

                <div style="text-align: center;">
                  <div style="width: 140px; height: 100px; background: linear-gradient(135deg, #333, #666); border-radius: 8px; margin: 0 auto 15px; position: relative; border: 16px solid #333;">
                    <div style="width: 108px; height: 68px; background: linear-gradient(135deg, #e3f2fd, #bbdefb); border-radius: 4px; margin: 0 auto;"></div>
                    <div style="width: 8px; height: 8px; background-color: #666; border-radius: 50%; position: absolute; top: 50%; right: 8px; transform: translateY(-50%);"></div>
                  </div>
                  <h5 style="font-weight: bold; margin-bottom: 5px;">Laptop</h5>
                  <p style="font-size: 0.9rem; color: #666;">1024px - 1440px</p>
                </div>

                <div style="text-align: center;">
                  <div style="width: 180px; height: 110px; background: linear-gradient(135deg, #333, #666); border-radius: 8px; margin: 0 auto 15px; position: relative; border: 20px solid #333;">
                    <div style="width: 140px; height: 70px; background: linear-gradient(135deg, #e3f2fd, #bbdefb); border-radius: 4px; margin: 0 auto;"></div>
                    <div style="width: 10px; height: 10px; background-color: #666; border-radius: 50%; position: absolute; top: 50%; right: 10px; transform: translateY(-50%);"></div>
                  </div>
                  <h5 style="font-weight: bold; margin-bottom: 5px;">Desktop</h5>
                  <p style="font-size: 0.9rem; color: #666;">1440px+</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px; margin-bottom: 40px;">
          <h3 style="font-size: 1.5rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
            <span style="margin-right: 10px;">⚡</span> Performance Optimization
          </h3>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px;">
            <div style="background: linear-gradient(135deg, #e8f5e9, #c8e6c9); border-radius: 12px; padding: 20px;">
              <h4 style="font-weight: bold; color: #2e7d32; margin-bottom: 15px; display: flex; align-items: center;">
                <span style="margin-right: 10px;">🚀</span> Loading Strategies
              </h4>
              <ul style="list-style: none; padding: 0; margin: 0;">
                <li style="display: flex; align-items: flex-start; margin-bottom: 15px; padding: 15px; background-color: white; border-radius: 8px;">
                  <div style="width: 30px; height: 30px; background-color: #28a745; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 1rem; margin-right: 15px; flex-shrink: 0;">1</div>
                  <div>
                    <h5 style="font-weight: bold; margin-bottom: 5px;">Lazy Loading</h5>
                    <p style="font-size: 0.9rem; color: #666; margin: 0;">Deferred loading of non-critical resources</p>
                  </div>
                </li>
                <li style="display: flex; align-items: flex-start; margin-bottom: 15px; padding: 15px; background-color: white; border-radius: 8px;">
                  <div style="width: 30px; height: 30px; background-color: #20c997; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 1rem; margin-right: 15px; flex-shrink: 0;">2</div>
                  <div>
                    <h5 style="font-weight: bold; margin-bottom: 5px;">Code Splitting</h5>
                    <p style="font-size: 0.9rem; color: #666; margin: 0;">Modular code delivery for faster initial loads</p>
                  </div>
                </li>
                <li style="display: flex; align-items: flex-start; padding: 15px; background-color: white; border-radius: 8px;">
                  <div style="width: 30px; height: 30px; background-color: #6f42c1; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 1rem; margin-right: 15px; flex-shrink: 0;">3</div>
                  <div>
                    <h5 style="font-weight: bold; margin-bottom: 5px;">Caching</h5>
                    <p style="font-size: 0.9rem; color: #666; margin: 0;">Intelligent caching for frequently accessed data</p>
                  </div>
                </li>
              </ul>
            </div>

            <div style="background: linear-gradient(135deg, #f3e5f5, #e1bee7); border-radius: 12px; padding: 20px;">
              <h4 style="font-weight: bold; color: #6a1b9a; margin-bottom: 15px; display: flex; align-items: center;">
                <span style="margin-right: 10px;">🎨</span> Design Principles
              </h4>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div style="background-color: white; border-radius: 8px; padding: 20px; text-align: center;">
                  <div style="font-size: 2rem; margin-bottom: 15px;">📏</div>
                  <h5 style="font-weight: bold; margin-bottom: 10px;">Flexbox</h5>
                  <p style="font-size: 0.9rem; color: #666;">Flexible layouts</p>
                </div>
                <div style="background-color: white; border-radius: 8px; padding: 20px; text-align: center;">
                  <div style="font-size: 2rem; margin-bottom: 15px;">🔗</div>
                  <h5 style="font-weight: bold; margin-bottom: 10px;">Grid</h5>
                  <p style="font-size: 0.9rem; color: #666;">Grid-based design</p>
                </div>
                <div style="background-color: white; border-radius: 8px; padding: 20px; text-align: center;">
                  <div style="font-size: 2rem; margin-bottom: 15px;">📱</div>
                  <h5 style="font-weight: bold; margin-bottom: 10px;">Media Queries</h5>
                  <p style="font-size: 0.9rem; color: #666;">Responsive breakpoints</p>
                </div>
                <div style="background-color: white; border-radius: 8px; padding: 20px; text-align: center;">
                  <div style="font-size: 2rem; margin-bottom: 15px;">♿</div>
                  <h5 style="font-weight: bold; margin-bottom: 10px;">Accessibility</h5>
                  <p style="font-size: 0.9rem; color: #666;">Inclusive design</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 40px;">
          <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px;">
            <h3 style="font-size: 1.5rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
              <span style="margin-right: 10px;">🔍</span> Touch-Friendly Interface
            </h3>

            <div style="background: linear-gradient(135deg, #e3f2fd, #bbdefb); border-radius: 12px; padding: 25px;">
              <h4 style="font-weight: bold; color: #0d47a1; margin-bottom: 20px; text-align: center;">Mobile-First Design</h4>

              <div style="margin-bottom: 25px;">
                <h5 style="font-weight: bold; color: #333; margin-bottom: 15px;">Touch Targets</h5>
                <div style="display: flex; flex-direction: column; gap: 15px;">
                  <button style="background: linear-gradient(135deg, #007bff, #00d4ff); color: white; font-weight: bold; padding: 18px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.1rem; text-align: center;">
                    Large Button (44px minimum)
                  </button>
                  <button style="background: linear-gradient(135deg, #28a745, #20c997); color: white; font-weight: bold; padding: 18px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.1rem; text-align: center;">
                    Another Large Button
                  </button>
                </div>
              </div>

              <div>
                <h5 style="font-weight: bold; color: #333; margin-bottom: 15px;">Navigation Elements</h5>
                <div style="display: flex; gap: 15px; flex-wrap: wrap;">
                  <div style="background-color: #007bff; color: white; padding: 15px 25px; border-radius: 30px; font-weight: bold; cursor: pointer;">
                    Tab 1
                  </div>
                  <div style="background-color: #e9ecef; color: #495057; padding: 15px 25px; border-radius: 30px; font-weight: bold; cursor: pointer;">
                    Tab 2
                  </div>
                  <div style="background-color: #e9ecef; color: #495057; padding: 15px 25px; border-radius: 30px; font-weight: bold; cursor: pointer;">
                    Tab 3
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px;">
            <h3 style="font-size: 1.5rem; font-weight: bold; color: #333; margin-bottom: 20px; display: flex; align-items: center;">
              <span style="margin-right: 10px;">🎨</span> Consistent Styling
            </h3>

            <div style="background: linear-gradient(135deg, #fff3cd, #ffe082); border-radius: 12px; padding: 25px;">
              <h4 style="font-weight: bold; color: #ef6c00; margin-bottom: 20px; text-align: center;">Unified Design Language</h4>

              <div style="margin-bottom: 25px;">
                <h5 style="font-weight: bold; color: #333; margin-bottom: 15px;">Color Palette</h5>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                  <div style="background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); color: white; padding: 20px; border-radius: 8px; text-align: center;">
                    <div style="font-weight: bold;">Primary</div>
                    <div style="font-size: 0.9rem; opacity: 0.9;">#6a11cb → #2575fc</div>
                  </div>
                  <div style="background: linear-gradient(135deg, #007bff, #00d4ff); color: white; padding: 20px; border-radius: 8px; text-align: center;">
                    <div style="font-weight: bold;">Secondary</div>
                    <div style="font-size: 0.9rem; opacity: 0.9;">#007bff → #00d4ff</div>
                  </div>
                  <div style="background: linear-gradient(135deg, #28a745, #20c997); color: white; padding: 20px; border-radius: 8px; text-align: center;">
                    <div style="font-weight: bold;">Success</div>
                    <div style="font-size: 0.9rem; opacity: 0.9;">#28a745 → #20c997</div>
                  </div>
                  <div style="background: linear-gradient(135deg, #ffc107, #ff9800); color: #212529; padding: 20px; border-radius: 8px; text-align: center;">
                    <div style="font-weight: bold;">Warning</div>
                    <div style="font-size: 0.9rem; opacity: 0.9;">#ffc107 → #ff9800</div>
                  </div>
                </div>
              </div>

              <div>
                <h5 style="font-weight: bold; color: #333; margin-bottom: 15px;">Typography</h5>
                <div style="background-color: white; border-radius: 8px; padding: 20px;">
                  <div style="font-size: 2rem; font-weight: bold; margin-bottom: 10px; color: #333;">Heading 1</div>
                  <div style="font-size: 1.5rem; font-weight: bold; margin-bottom: 10px; color: #333;">Heading 2</div>
                  <div style="font-size: 1.25rem; font-weight: bold; margin-bottom: 10px; color: #333;">Heading 3</div>
                  <div style="font-size: 1rem; color: #666;">Body text with consistent styling across all devices</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style="text-align: center; padding: 30px; background: linear-gradient(135deg, #6a11cb, #2575fc); border-radius: 12px; color: white;">
          <h3 style="font-size: 1.8rem; font-weight: bold; margin-bottom: 15px;">🌟 Universal Accessibility! 🌟</h3>
          <p style="font-size: 1.1rem; margin-bottom: 25px; max-width: 700px; margin-left: auto; margin-right: auto; opacity: 0.9;">
            Our cross-platform design ensures that every student can access learning materials regardless of their device or abilities.
            Responsive design, touch-friendly interfaces, and consistent styling create an inclusive learning environment.
          </p>
          <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
            <a href="/" style="background: linear-gradient(135deg, #ff9a9e, #fad0c4); color: #333; font-weight: bold; padding: 16px 32px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.2rem; transition: transform 0.2s; text-decoration: none;">
              🏠 Return to Homepage
            </a>
            <a href="/docs" style="background: linear-gradient(135deg, #a1c4fd, #c2e9fb); color: #333; font-weight: bold; padding: 16px 32px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.2rem; transition: transform 0.2s; text-decoration: none;">
              📘 View Documentation
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}
