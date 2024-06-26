function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Me</h2>
          <p className="mb-4" style={{fontSize:".9rem"}}>
            I am a highly enthusiast Frontend Developer having real-world experience in
            Design layouts,User Experience(UX),User Interface(UI), Deployments etc
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/seelam-vinay-kumar-reddy/" target="_blank"
                className="hover:text-white transition-colors duration-300"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="mailto:seelamvinaykumarreddy@gmail.com"
                className="hover:text-white transition-colors duration-300"
              >
                Gmail
              </a>
            </li>
            <li>
              <a
                href="https://github.com/seelamvinaykumarreddy"
                className="hover:text-white transition-colors duration-300"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1ZxMydTvXvpCQFvzb1PG5H0d9qSooeR9n/view"
                className="hover:text-white transition-colors duration-300"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Me</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/seelam-vinay-kumar-reddy/"
              className="hover:text-white transition-colors duration-300"
            >
              Linkedin
            </a>
            
            <a
              href="https://github.com/seelamvinaykumarreddy"
              className="hover:text-white transition-colors duration-300"
            >
              Github
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Me</h2>
          <p>Long Beach, California</p>
          <p>US 90815</p>
          <p>Email: seelamvinaykumarreddy@gmail.com</p>
        </div>
      </div>
      <p className="text-center text-lg pt-8 font-semibold text-white">
        ⚡ Vinay Kumar Reddy Seelam ⚡
      </p>
    </footer>
  );
}

export default Footer;
