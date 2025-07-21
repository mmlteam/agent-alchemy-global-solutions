const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">AI</span>
            </div>
            <span className="text-xl font-bold">AI Automation</span>
          </div>
          
          <div className="flex justify-center gap-8 text-sm text-muted-foreground">
            <a href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <span>© 2024 AI Automation. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;