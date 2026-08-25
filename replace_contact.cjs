const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// Add states to ContactSection
code = code.replace(/const ContactSection = \(\) => {/, 
`const ContactSection = () => {
  const [status, setStatus] = useState("");

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Fallback if not injected
    if (!formData.get("access_key")) {
       formData.append("access_key", "b4fd8a9f-46a9-47ee-ac16-8e861f588163");
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setStatus("Message sent successfully!");
        form.reset();
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("Failed to send. Please try again.");
      }
    } catch (err) {
      setStatus("An error occurred.");
    }
  };`);

// Replace the form tag in ContactSection
code = code.replace(/<form className="space-y-4 relative z-10" action="https:\/\/api\.web3forms\.com\/submit" method="POST">/, 
`<form className="space-y-4 relative z-10" onSubmit={handleContactSubmit}>`);

// Add status message below the Submit button
code = code.replace(/Submit Inquiry\s*<\/button>/, `Submit Inquiry\
              </button>\
              {status && <p className="text-center text-sm font-bold mt-4 text-white">{status}</p>}`);

// Add states to Footer
code = code.replace(/const Footer = \(\) => {/, 
`const Footer = () => {
  const [status, setStatus] = useState("");

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Subscribing...");
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    if (!formData.get("access_key")) {
       formData.append("access_key", "b4fd8a9f-46a9-47ee-ac16-8e861f588163");
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setStatus("Subscribed!");
        form.reset();
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("Failed to subscribe.");
      }
    } catch (err) {
      setStatus("Error.");
    }
  };`);

// Replace the form tag in Footer
code = code.replace(/<form className="flex" action="https:\/\/api\.web3forms\.com\/submit" method="POST">/, 
`<form className="flex" onSubmit={handleNewsletterSubmit}>`);

// Add status message below newsletter form
code = code.replace(/<\/form>\s*<\/div>\s*<\/div>\s*<div className="pt-8 border-t border-white\/10/, 
`</form>\
            {status && <p className="text-sm font-bold mt-2 text-[#d48217]">{status}</p>}\
          </div>\
        </div>\
        \
        <div className="pt-8 border-t border-white/10`);

fs.writeFileSync('src/App.tsx', code);
