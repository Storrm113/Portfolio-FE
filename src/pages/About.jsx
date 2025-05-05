export default function About() {
    return (
      <section className="min-h-screen bg-[#fef3c7] dark:bg-black text-gray-900 dark:text-red-100 transition-colors duration-300 py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* About Me */}
          <div>
            <h2 className="text-3xl font-bold mb-4 border-b-4 border-blue-600 dark:border-red-500 inline-block">
              About Me
            </h2>
            <p className="text-lg leading-relaxed">
              Hi, I’m a passionate web developer and designer focused on building
              modern, responsive, and accessible websites. This portfolio was
              built using React, Node.js, Express, and Tailwind CSS — with secure
              features like reCAPTCHA and email handling via Nodemailer. I enjoy
              crafting beautiful UIs and seamless user experiences that help
              businesses shine online.
            </p>
          </div>
  
          {/* Tools & Tech */}
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-blue-700 dark:text-red-400">
              🛠️ Tools & Technologies
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm list-disc list-inside">
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>Nodemailer</li>
              <li>Formik & Yup</li>
              <li>Google reCAPTCHA</li>
              <li>Render (backend deployment)</li>
              <li>Netlify/Vercel (frontend deployment)</li>
            </ul>
          </div>
  
          {/* Services Offered */}
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-blue-700 dark:text-red-400">
              💼 Services Offered
            </h3>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li>Custom Website Design & Development</li>
              <li>Responsive Frontend Development</li>
              <li>Landing Pages & Portfolios</li>
              <li>Small Business Sites</li>
              <li>Contact Forms with Email Integration</li>
              <li>Dark/Light Mode UI Implementation</li>
              <li>SEO-Friendly Markup & Best Practices</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  