import { Mail, MapPin, Linkedin, Instagram, Github, Send } from "lucide-react"
import { cn } from '@/lib/utils';
import { useToast } from "@/hooks/use-toast"
import { useState } from "react";


export const ContactSection = () => {
  const {toast} = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message"
      })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <section id="contact" className="pt-0 mb-10 pb-10 px-4 relative ">
        <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl md:text-2xl font-semibold mb-10 text-start">
                Get In <span className="text-primary"> Touch</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Have a project in mind or want to colaborate? Feel free to reach out.
              I'm always open to discussing new opportunities
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h3 className="text-2xl font-base  mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6 justify-center">
                  <div className="flex text-start items-start space-x-4">
                    <div className="p-3 mt-1 rounded-full bg-primary/10">
                      <Mail className="h-5 w-5 text-primary"/>
                    </div>
                    <div className="">
                      <h4 className="font-medium">Email</h4>
                      <a 
                        href="mailto:baguswicaksana217@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        baguswicaksana217@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex text-start items-start space-x-4">
                    <div className="p-3 mt-1 rounded-full bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary"/>
                    </div>
                    <div className="">
                      <h4 className="font-medium">Location</h4>
                      <a className="text-muted-foreground hover:text-primary transition-colors">
                        Depok, Jawa Barat, Indonesia
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <h4 className="font-medium mb-4">Connect with me</h4>
                  <div className="flex space-x-4 justify-center">
                    <a href="https://www.linkedin.com/in/bagus-wicaksana/" target="_blank">
                      <Linkedin/>
                    </a>
                    <a href="" target="_blank">
                      <Instagram/>
                    </a>
                    <a href="" target="_blank">
                      <Github/>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-xs border" onSubmit={handleSubmit}>
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                <form className="space-y-6" action="">
                  <div className="text-star">
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input type="text" id="name" placeholder="Input your name" name="name" required className="w-full px-3 py-2 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:primary"/>
                  </div>
                  <div className="text-start">
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input type="email" id="email" placeholder="Input your email" name="email" required className="w-full px-3 py-2 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:primary"/>
                  </div>
                  <div className="text-start">
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea id="message" placeholder="Input your message" name="message" required className="w-full px-3 py-2 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:primary resize-none"/>
                  </div>

                  <button type="submit" disabled={isSubmitting} className={cn("cosmic-button w-full flex items-center justify-center gap-2", )}>
                    {isSubmitting ? "Sending...":"Send Message"}
                    <Send size={16}/>
                  </button>
                </form>
              </div>
            </div>
        </div>
    </section>
  )
}