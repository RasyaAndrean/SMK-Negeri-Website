// Enhanced homepage with improved navigation and feature highlights
export default function Home() {
  return `
    <div style="font-family: Arial, sans-serif; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); min-height: 100vh;">
      <!-- Header with enhanced navigation -->
      <header style="background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); padding: 15px 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
        <div style="max-width: 1200px; margin: 0 auto;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="width: 40px; height: 40px; background-color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; color: #6a11cb; font-size: 1.2rem;">🎓</div>
              <h1 style="color: white; font-size: 1.5rem; font-weight: bold; margin: 0;">SMK Negeri</h1>
            </div>

            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              <a href="/" style="background-color: rgba(255, 255, 255, 0.2); color: white; padding: 10px 20px; border-radius: 30px; text-decoration: none; font-weight: bold; transition: background-color 0.3s;">🏠 Home</a>
              <a href="/dashboard" style="background-color: rgba(255, 255, 255, 0.2); color: white; padding: 10px 20px; border-radius: 30px; text-decoration: none; font-weight: bold; transition: background-color 0.3s;">📊 Dashboard</a>
              <a href="/intelligent-hub" style="background-color: rgba(255, 255, 255, 0.2); color: white; padding: 10px 20px; border-radius: 30px; text-decoration: none; font-weight: bold; transition: background-color 0.3s;">🧠 Intelligent Hub</a>
              <a href="/intelligent-hub/enhanced" style="background-color: rgba(255, 255, 255, 0.2); color: white; padding: 10px 20px; border-radius: 30px; text-decoration: none; font-weight: bold; transition: background-color 0.3s;">🧠 Enhanced Hub</a>
              <a href="/collaborations" style="background-color: rgba(255, 255, 255, 0.2); color: white; padding: 10px 20px; border-radius: 30px; text-decoration: none; font-weight: bold; transition: background-color 0.3s;">👥 Collaborations</a>
              <a href="/collaborations/real-time" style="background-color: rgba(255, 255, 255, 0.2); color: white; padding: 10px 20px; border-radius: 30px; text-decoration: none; font-weight: bold; transition: background-color 0.3s;">⚡ Real-time</a>
              <a href="/ar-visualization" style="background-color: rgba(255, 255, 255, 0.2); color: white; padding: 10px 20px; border-radius: 30px; text-decoration: none; font-weight: bold; transition: background-color 0.3s;">🔮 AR Visualization</a>
              <a href="/ar-visualization/advanced" style="background-color: rgba(255, 255, 255, 0.2); color: white; padding: 10px 20px; border-radius: 30px; text-decoration: none; font-weight: bold; transition: background-color 0.3s;">🔮 Advanced AR</a>
              <a href="/ai-recommendations" style="background-color: rgba(255, 255, 255, 0.2); color: white; padding: 10px 20px; border-radius: 30px; text-decoration: none; font-weight: bold; transition: background-color 0.3s;">🤖 AI Recommendations</a>
              <a href="/ai-recommendations/enhanced" style="background-color: rgba(255, 255, 255, 0.2); color: white; padding: 10px 20px; border-radius: 30px; text-decoration: none; font-weight: bold; transition: background-color 0.3s;">🤖 Enhanced AI</a>
              <a href="/docs" style="background-color: rgba(255, 255, 255, 0.2); color: white; padding: 10px 20px; border-radius: 30px; text-decoration: none; font-weight: bold; transition: background-color 0.3s;">📘 Documentation</a>
              <a href="/humor-showcase" style="background-color: rgba(255, 255, 255, 0.2); color: white; padding: 10px 20px; border-radius: 30px; text-decoration: none; font-weight: bold; transition: background-color 0.3s;">😂 Humor Showcase</a>
              <a href="/humor-showcase/enhanced" style="background-color: rgba(255, 255, 255, 0.2); color: white; padding: 10px 20px; border-radius: 30px; text-decoration: none; font-weight: bold; transition: background-color 0.3s;">😂 Enhanced Humor</a>
              <a href="/cross-platform" style="background-color: rgba(255, 255, 255, 0.2); color: white; padding: 10px 20px; border-radius: 30px; text-decoration: none; font-weight: bold; transition: background-color 0.3s;">📱 Cross-Platform</a>
              <a href="/cross-platform/enhanced" style="background-color: rgba(255, 255, 255, 0.2); color: white; padding: 10px 20px; border-radius: 30px; text-decoration: none; font-weight: bold; transition: background-color 0.3s;">📱 Enhanced Cross-Platform</a>
              <button style="background: linear-gradient(135deg, #ff9a9e, #fad0c4); color: #333; padding: 10px 20px; border: none; border-radius: 30px; font-weight: bold; cursor: pointer; transition: transform 0.2s;">🔑 Login</button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <!-- Hero Section -->
        <section style="background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); color: white; padding: 80px 20px; text-align: center;">
          <div style="max-width: 1200px; margin: 0 auto;">
            <div style="max-width: 800px; margin: 0 auto;">
              <h1 style="font-size: 3rem; font-weight: bold; margin-bottom: 25px;">
                🎓 Selamat Datang di SMK Negeri 🚀
              </h1>
              <p style="font-size: 1.5rem; margin-bottom: 40px; opacity: 0.9;">
                Membentuk generasi unggul melalui pendidikan kejuruan
                berkualitas yang sesuai dengan kebutuhan industri 4.0
              </p>
              <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin-bottom: 40px;">
                <button style="background: linear-gradient(135deg, #ff9a9e, #fad0c4); color: #333; font-weight: bold; padding: 16px 32px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.2rem; transition: transform 0.2s;">
                  📝 Daftar PPDB 2024
                </button>
                <button style="background: linear-gradient(135deg, #a1c4fd, #c2e9fb); color: #333; font-weight: bold; padding: 16px 32px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.2rem; transition: transform 0.2s;">
                  🎯 Jelajahi Jurusan
                </button>
              </div>

              <!-- Advanced Features Navigation -->
              <div style="background-color: rgba(255, 255, 255, 0.15); padding: 30px; border-radius: 12px; margin: 40px auto; max-width: 800px;">
                <h3 style="margin-bottom: 20px; color: white; font-size: 1.8rem;">🌟 Advanced Features 🌟</h3>
                <p style="margin-bottom: 25px; font-size: 1.1rem; opacity: 0.9;">
                  Experience our cutting-edge educational platform with collaborative learning tools
                </p>
                <div style="display: flex; flex-wrap: wrap; gap: 15px; justify-content: center;">
                  <a href="/dashboard" style="background: linear-gradient(135deg, #6a11cb, #2575fc); color: white; padding: 15px 25px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 1.1rem; display: flex; align-items: center; gap: 10px; transition: transform 0.2s;">
                    📊 Student Dashboard
                  </a>
                  <a href="/intelligent-hub" style="background: linear-gradient(135deg, #007bff, #00d4ff); color: white; padding: 15px 25px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 1.1rem; display: flex; align-items: center; gap: 10px; transition: transform 0.2s;">
                    🧠 Intelligent Hub
                  </a>
                  <a href="/intelligent-hub/enhanced" style="background: linear-gradient(135deg, #6f42c1, #9c27b0); color: white; padding: 15px 25px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 1.1rem; display: flex; align-items: center; gap: 10px; transition: transform 0.2s;">
                    🧠 Enhanced Hub
                  </a>
                  <a href="/collaborations" style="background: linear-gradient(135deg, #007bff, #00d4ff); color: white; padding: 15px 25px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 1.1rem; display: flex; align-items: center; gap: 10px; transition: transform 0.2s;">
                    👥 Collaborations
                  </a>
                  <a href="/collaborations/real-time" style="background: linear-gradient(135deg, #ff9800, #ffc107); color: #212529; padding: 15px 25px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 1.1rem; display: flex; align-items: center; gap: 10px; transition: transform 0.2s;">
                    ⚡ Real-time Collaboration
                  </a>
                  <a href="/ar-visualization" style="background: linear-gradient(135deg, #28a745, #20c997); color: white; padding: 15px 25px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 1.1rem; display: flex; align-items: center; gap: 10px; transition: transform 0.2s;">
                    🔮 AR Visualization
                  </a>
                  <a href="/ar-visualization/advanced" style="background: linear-gradient(135deg, #6f42c1, #9c27b0); color: white; padding: 15px 25px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 1.1rem; display: flex; align-items: center; gap: 10px; transition: transform 0.2s;">
                    🔮 Advanced AR
                  </a>
                  <a href="/ai-recommendations" style="background: linear-gradient(135deg, #6f42c1, #9c27b0); color: white; padding: 15px 25px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 1.1rem; display: flex; align-items: center; gap: 10px; transition: transform 0.2s;">
                    🤖 AI Recommendations
                  </a>
                  <a href="/ai-recommendations/enhanced" style="background: linear-gradient(135deg, #dc3545, #ff6b6b); color: white; padding: 15px 25px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 1.1rem; display: flex; align-items: center; gap: 10px; transition: transform 0.2s;">
                    🤖 Enhanced AI
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Quick Stats -->
        <section style="background-color: white; padding: 60px 20px;">
          <div style="max-width: 1200px; margin: 0 auto;">
            <div style="text-align: center; margin-bottom: 50px;">
              <h2 style="font-size: 2.5rem; font-weight: bold; color: #333; margin-bottom: 15px;">📊 Our Achievements 📊</h2>
              <p style="font-size: 1.2rem; color: #666; max-width: 700px; margin: 0 auto;">
                Proud accomplishments that reflect our commitment to excellence in vocational education
              </p>
            </div>

            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px;">
              <div style="text-align: center; padding: 30px; background: linear-gradient(135deg, #e3f2fd, #bbdefb); border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
                <div style="font-size: 3rem; font-weight: bold; color: #0d47a1; margin-bottom: 15px;">2,500+</div>
                <div style="font-size: 1.2rem; color: #333; font-weight: bold;">Siswa</div>
                <p style="color: #666; margin-top: 10px;">Active students learning with us</p>
              </div>
              <div style="text-align: center; padding: 30px; background: linear-gradient(135deg, #e8f5e9, #c8e6c9); border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
                <div style="font-size: 3rem; font-weight: bold; color: #2e7d32; margin-bottom: 15px;">150+</div>
                <div style="font-size: 1.2rem; color: #333; font-weight: bold;">Guru & Staff</div>
                <p style="color: #666; margin-top: 10px;">Dedicated educators and support team</p>
              </div>
              <div style="text-align: center; padding: 30px; background: linear-gradient(135deg, #fff3e0, #ffe0b2); border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
                <div style="font-size: 3rem; font-weight: bold; color: #ef6c00; margin-bottom: 15px;">25+</div>
                <div style="font-size: 1.2rem; color: #333; font-weight: bold;">Jurusan</div>
                <p style="color: #666; margin-top: 10px;">Specialized programs for your future</p>
              </div>
              <div style="text-align: center; padding: 30px; background: linear-gradient(135deg, #f3e5f5, #e1bee7); border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
                <div style="font-size: 3rem; font-weight: bold; color: #6a1b9a; margin-bottom: 15px;">98%</div>
                <div style="font-size: 1.2rem; color: #333; font-weight: bold;">Lulusan Bekerja</div>
                <p style="color: #666; margin-top: 10px;">Successful career placement rate</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Featured Programs -->
        <section style="background: linear-gradient(135deg, #f8f9fa, #e9ecef); padding: 80px 20px;">
          <div style="max-width: 1200px; margin: 0 auto;">
            <div style="text-align: center; margin-bottom: 60px;">
              <h2 style="font-size: 2.5rem; font-weight: bold; color: #333; margin-bottom: 15px;">🎯 Program Keahlian Unggulan 🎯</h2>
              <p style="font-size: 1.2rem; color: #666; max-width: 700px; margin: 0 auto;">
                Temukan berbagai jurusan unggulan yang kami tawarkan sesuai
                dengan kebutuhan industri terkini
              </p>
            </div>

            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px;">
              <div style="background-color: white; border-radius: 12px; padding: 30px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); transition: transform 0.3s; border: 2px solid #e9ecef;">
                <div style="width: 70px; height: 70px; background: linear-gradient(135deg, #2196f3, #21cbf3); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; color: white; font-size: 2rem;">💻</div>
                <h3 style="font-size: 1.4rem; font-weight: bold; color: #333; text-align: center; margin-bottom: 15px;">Rekayasa Perangkat Lunak</h3>
                <p style="color: #666; text-align: center; margin-bottom: 20px;">Mengembangkan aplikasi dan sistem berbasis web/mobile</p>
                <a href="#" style="display: block; text-align: center; background: linear-gradient(135deg, #2196f3, #21cbf3); color: white; padding: 12px; border-radius: 6px; text-decoration: none; font-weight: bold; transition: opacity 0.3s;">Selengkapnya →</a>
              </div>

              <div style="background-color: white; border-radius: 12px; padding: 30px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); transition: transform 0.3s; border: 2px solid #e9ecef;">
                <div style="width: 70px; height: 70px; background: linear-gradient(135deg, #4caf50, #8bc34a); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; color: white; font-size: 2rem;">🔧</div>
                <h3 style="font-size: 1.4rem; font-weight: bold; color: #333; text-align: center; margin-bottom: 15px;">Teknik Otomotif</h3>
                <p style="color: #666; text-align: center; margin-bottom: 20px;">Perbaikan dan perawatan kendaraan bermotor</p>
                <a href="#" style="display: block; text-align: center; background: linear-gradient(135deg, #4caf50, #8bc34a); color: white; padding: 12px; border-radius: 6px; text-decoration: none; font-weight: bold; transition: opacity 0.3s;">Selengkapnya →</a>
              </div>

              <div style="background-color: white; border-radius: 12px; padding: 30px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); transition: transform 0.3s; border: 2px solid #e9ecef;">
                <div style="width: 70px; height: 70px; background: linear-gradient(135deg, #9c27b0, #e91e63); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; color: white; font-size: 2rem;">🎨</div>
                <h3 style="font-size: 1.4rem; font-weight: bold; color: #333; text-align: center; margin-bottom: 15px;">Multimedia</h3>
                <p style="color: #666; text-align: center; margin-bottom: 20px;">Desain grafis, animasi, dan produksi konten digital</p>
                <a href="#" style="display: block; text-align: center; background: linear-gradient(135deg, #9c27b0, #e91e63); color: white; padding: 12px; border-radius: 6px; text-decoration: none; font-weight: bold; transition: opacity 0.3s;">Selengkapnya →</a>
              </div>

              <div style="background-color: white; border-radius: 12px; padding: 30px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); transition: transform 0.3s; border: 2px solid #e9ecef;">
                <div style="width: 70px; height: 70px; background: linear-gradient(135deg, #ff9800, #ffc107); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; color: white; font-size: 2rem;">🍽️</div>
                <h3 style="font-size: 1.4rem; font-weight: bold; color: #333; text-align: center; margin-bottom: 15px;">Tata Boga</h3>
                <p style="color: #666; text-align: center; margin-bottom: 20px;">Seni memasak dan pengelolaan restoran</p>
                <a href="#" style="display: block; text-align: center; background: linear-gradient(135deg, #ff9800, #ffc107); color: white; padding: 12px; border-radius: 6px; text-decoration: none; font-weight: bold; transition: opacity 0.3s;">Selengkapnya →</a>
              </div>
            </div>
          </div>
        </section>

        <!-- CTA Section -->
        <section style="background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); color: white; padding: 80px 20px; text-align: center;">
          <div style="max-width: 1200px; margin: 0 auto;">
            <h2 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 25px;">
              🚀 Siap untuk Bergabung dengan Kami? 🚀
            </h2>
            <p style="font-size: 1.5rem; margin-bottom: 40px; max-width: 800px; margin-left: auto; margin-right: auto; opacity: 0.9;">
              Mulai perjalanan pendidikan kejuruanmu bersama SMK Negeri dan raih
              masa depan yang cemerlang
            </p>
            <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
              <button style="background: linear-gradient(135deg, #ff9a9e, #fad0c4); color: #333; font-weight: bold; padding: 18px 36px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.3rem; transition: transform 0.2s;">
                📝 Daftar Sekarang
              </button>
              <button style="background: linear-gradient(135deg, #a1c4fd, #c2e9fb); color: #333; font-weight: bold; padding: 18px 36px; border: none; border-radius: 8px; cursor: pointer; font-size: 1.3rem; transition: transform 0.2s;">
                📞 Hubungi Kami
              </button>
            </div>
          </div>
        </section>
      </main>

      <!-- Footer -->
      <footer style="background-color: #343a40; color: white; padding: 60px 20px;">
        <div style="max-width: 1200px; margin: 0 auto;">
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px;">
            <div>
              <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
                <div style="width: 50px; height: 50px; background-color: #007bff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; color: white; font-size: 1.5rem;">🎓</div>
                <h3 style="font-size: 1.8rem; font-weight: bold; margin: 0;">SMK Negeri</h3>
              </div>
              <p style="color: #ccc; margin-bottom: 20px;">
                Membentuk generasi unggul melalui pendidikan kejuruan
                berkualitas yang sesuai dengan kebutuhan industri 4.0
              </p>
              <div style="display: flex; gap: 20px;">
                <a href="#" style="color: #ccc; font-size: 1.5rem;">📘</a>
                <a href="#" style="color: #ccc; font-size: 1.5rem;">📸</a>
                <a href="#" style="color: #ccc; font-size: 1.5rem;">▶️</a>
              </div>
            </div>

            <div>
              <h4 style="font-size: 1.4rem; font-weight: bold; margin-bottom: 20px;">Tautan Cepat</h4>
              <ul style="list-style: none; padding: 0;">
                <li style="margin-bottom: 12px;">
                  <a href="#" style="color: #ccc; text-decoration: none; transition: color 0.3s;">Profil Sekolah</a>
                </li>
                <li style="margin-bottom: 12px;">
                  <a href="#" style="color: #ccc; text-decoration: none; transition: color 0.3s;">Program Keahlian</a>
                </li>
                <li style="margin-bottom: 12px;">
                  <a href="#" style="color: #ccc; text-decoration: none; transition: color 0.3s;">PPDB</a>
                </li>
                <li style="margin-bottom: 12px;">
                  <a href="/collaborations" style="color: #ccc; text-decoration: none; transition: color 0.3s;">Collaborations</a>
                </li>
                <li style="margin-bottom: 12px;">
                  <a href="/ar-visualization" style="color: #ccc; text-decoration: none; transition: color 0.3s;">AR Visualization</a>
                </li>
                <li style="margin-bottom: 12px;">
                  <a href="/ai-recommendations" style="color: #ccc; text-decoration: none; transition: color 0.3s;">AI Recommendations</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 style="font-size: 1.4rem; font-weight: bold; margin-bottom: 20px;">Kontak</h4>
              <ul style="list-style: none; padding: 0; color: #ccc;">
                <li style="display: flex; align-items: flex-start; margin-bottom: 15px;">
                  <span style="font-size: 1.2rem; margin-right: 12px;">📍</span>
                  <span>Jl. Contoh No. 123, Kota, Provinsi 12345</span>
                </li>
                <li style="display: flex; align-items: center; margin-bottom: 15px;">
                  <span style="font-size: 1.2rem; margin-right: 12px;">📞</span>
                  <span>(021) 12345678</span>
                </li>
                <li style="display: flex; align-items: center;">
                  <span style="font-size: 1.2rem; margin-right: 12px;">✉️</span>
                  <span>info@smknegeri.sch.id</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 style="font-size: 1.4rem; font-weight: bold; margin-bottom: 20px;">Newsletter</h4>
              <p style="color: #ccc; margin-bottom: 20px;">
                Dapatkan informasi terbaru seputar kegiatan sekolah dan program
                PPDB
              </p>
              <form style="display: flex; flex-direction: column; gap: 12px;">
                <input
                  type="email"
                  placeholder="Email Anda"
                  style="padding: 12px 16px; border-radius: 8px; outline: none; color: #333; border: none;"
                />
                <button
                  type="submit"
                  style="background: linear-gradient(135deg, #007bff, #00d4ff); color: white; padding: 12px; border: none; border-radius: 8px; font-weight: bold; cursor: pointer;"
                >
                  🔔 Subscribe
                </button>
              </form>
            </div>
          </div>

          <div style="border-top: 1px solid #495057; margin-top: 50px; padding-top: 30px; text-align: center; color: #ccc;">
            <p>&copy; 2023 SMK Negeri. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  `;
}
