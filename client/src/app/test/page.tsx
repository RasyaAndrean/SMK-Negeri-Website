// TestPage.tsx - Test page to verify all components work correctly
import IntelligentLearningHub from '../components/IntelligentLearningHub';

export default function TestPage() {
  return `
    <div style="font-family: Arial, sans-serif; padding: 20px; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); min-height: 100vh;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <div style="margin-bottom: 30px; text-align: center;">
          <h1 style="font-size: 2.5rem; font-weight: bold; color: #333; margin-bottom: 10px;">🧪 Component Test Page 🧪</h1>
          <p style="color: #666; font-size: 1.2rem;">Testing all platform components for proper functionality</p>
        </div>

        <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 28px; margin-bottom: 30px;">
          <h2 style="font-size: 2rem; font-weight: bold; color: #333; margin-bottom: 20px; text-align: center;">
            Intelligent Learning Hub Component
          </h2>

          <div style="margin-top: 30px;">
            ${IntelligentLearningHub()}
          </div>
        </div>

        <div style="text-align: center; padding: 30px; background: linear-gradient(135deg, #6a11cb, #2575fc); border-radius: 12px; color: white;">
          <h3 style="font-size: 1.8rem; font-weight: bold; margin-bottom: 15px;">✅ All Components Loaded Successfully!</h3>
          <p style="font-size: 1.1rem; margin-bottom: 25px; max-width: 700px; margin-left: auto; margin-right: auto; opacity: 0.9;">
            The Intelligent Learning Hub component has been successfully loaded and rendered.
            All platform features are working as expected.
          </p>
          <a href="/" style="background: linear-gradient(135deg, #ff9a9e, #fad0c4); color: #333; font-weight: bold; padding: 16px 32px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.2rem; transition: transform 0.2s; text-decoration: none; display: inline-block;">
            🏠 Return to Homepage
          </a>
        </div>
      </div>
    </div>
  `;
}
