import {
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Send,
    Twitch,
    Twitter,
  } from "lucide-react";
  import { cn } from "@/library/utils";
  import { useState } from "react";
  
  export const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();

      setIsSubmitting(true);
  
      setTimeout(() => {
        alert("Thank you for your message. I'll get back to you soon.");
        setIsSubmitting(false);
      }, 1500);
      
    };
    return (
      <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get In <span className="text-primary"> Touch</span>
          </h2>
  
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Contact me if you would like to collabortate! I am open to any new opportunities.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">
                {" "}
                Contact Information
              </h3>
  
              <div className="space-y-6 justify-center">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />{" "}
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="font-medium text-left"> Email</h4>
                    <a
                      href="mailto:mitchlindsey98@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors text-left"
                    >
                      mitchlindsey98@gmail.com
                    </a>
                  </div>
                </div>
                
               
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />{" "}
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="font-medium text-left"> Location</h4>
                    <a className="text-muted-foreground text-left">
                      Salt Lake City, UT, USA
                    </a>
                  </div>
                </div>
              </div>
              </div>
  
            <div
              className="bg-card p-8 rounded-lg shadow-xs"
              onSubmit={handleSubmit}
            >
              <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
  
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    {" "}
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                    placeholder="Fransisco Lindor..."
                  />
                </div>
  
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    {" "}
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                    placeholder="polarpete@gmail.com"
                  />
                </div>
  
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    {" "}
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                    placeholder="Hello, I'd like to talk about..."
                  />
                </div>
  
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "nym-button w-full flex items-center justify-center gap-2"
                  )}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </section>
    );
  };