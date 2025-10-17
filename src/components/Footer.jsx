import { Link } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 mt-10">
      <div className="mx-auto">
        {/* Contact Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        </div>

        {/* Contact Methods */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-8 text-sm">
          <a 
            href="mailto:alzivkovic@outlook.com" 
            className="flex items-center gap-3"
          >
            <EmailIcon className="text-blue-500" />
            <span>alzivkovic@outlook.com</span>
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 pb-20 sm:pb-8">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Aleksandar Zivkovic
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer