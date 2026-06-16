import { Linkedin, Mail, Code2, Cloud, Terminal, Pizza, Wine, Star, GitBranch, Award } from "lucide-react";
import wset3Badge from "../assets/WSET3badge2.png.asset.json";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container max-w-3xl py-16 px-6 md:py-24">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            NewDev Przemysław Nowosad
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-mono">
            Building tailored, scalable Cloud infrastructure with clean architecture
          </p>
        </header>

        {/* Value Proposition */}
        <section className="mb-16 border-4 border-foreground p-8 shadow-md bg-secondary/20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Let's Build Something Solid
          </h2>
          <div className="space-y-4 text-lg">
            <p>
              Starting fresh with cloud infrastructure? Or inheriting a setup that's not quite delivering?
            </p>
            <p>
              Whether you need to <span className="font-bold">scale up</span>, migrate from a single AWS account to a proper <span className="font-bold">Organizations structure</span>, or finally get that <span className="font-bold">CI/CD pipeline</span> running smoothly — I can help. Drop me a message on <span className="font-bold">LinkedIn</span> or send an <span className="font-bold">email</span> — let's talk.
            </p>
          </div>
          <ul className="mt-6 space-y-2 font-mono text-sm">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-foreground" />
              Greenfield cloud architecture
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-foreground" />
              Infrastructure optimization & cost reduction
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-foreground" />
              AWS Organizations & multi-account setups
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-foreground" />
              CI/CD automation & deployment pipelines
            </li>
          </ul>
        </section>

        {/* Main Section - IT */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 border-b-4 border-foreground pb-2 inline-block">
            What I Do
          </h2>
          
          <div className="space-y-6 mt-8">
            <div className="border-2 border-foreground p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <Cloud className="w-8 h-8 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">AWS Infrastructure</h3>
                  <p className="text-muted-foreground">
                    Professional-level expertise in <span className="font-mono font-bold text-foreground">AWS</span> cloud infrastructure. 
                    Designing and implementing scalable, secure, cost-effective solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-2 border-foreground p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <Terminal className="w-8 h-8 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Infrastructure as Code</h3>
                  <p className="text-muted-foreground">
                    Expert-level <span className="font-mono font-bold text-foreground">Terraform</span> practitioner. 
                    Automating infrastructure deployment, ensuring reproducibility and reliability.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-2 border-foreground p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <GitBranch className="w-8 h-8 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">CI/CD & Automation</h3>
                  <p className="text-muted-foreground">
                    Streamlining development workflows with <span className="font-mono font-bold text-foreground">GitHub Actions</span>. 
                    Automated testing, builds, and deployments that keep your team moving fast.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-2 border-foreground p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <Code2 className="w-8 h-8 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Backend Development</h3>
                  <p className="text-muted-foreground">
                    Building robust, scalable backend systems with <span className="font-mono font-bold text-foreground">Java</span> and <span className="font-mono font-bold text-foreground">Kotlin</span>. 
                    Clean architecture, high performance, production-ready code.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Separator */}
        <div className="border-t-4 border-muted my-16" />

        {/* Consultancy Section */}
        <section className="mb-8">
          <div className="border border-muted p-5 bg-secondary/30 flex flex-col gap-3">
            <div>
              <h3 className="text-lg font-bold mb-2 text-muted-foreground">
                Wine and pizza consultancy.
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Your pizza dough is not delivering a puff and a crunch you'd expect it to? Looking for new recipes to impress your guests? Need a wine list for your restaurant? Want to start wine by the glass service, but you don't know how? Need to train your staff in wine? Looking to optimize your bottle selection to maximize ROI and minimize waste? I can help with that too — reach out and let's see what I can do for you.
              </p>
            </div>
            
            <div className="flex items-center justify-start">
              <a 
                href="https://eu.credential.net/835a15bc-501e-4220-8c3a-5ca8cbaa35a5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-4 focus:outline-hidden"
              >
                <img 
                  src={wset3Badge.url} 
                  alt="WSET Level 3 Wines Certified" 
                  className="w-32 h-32 md:w-48 md:h-48 object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div>
                  <span className="text-sm md:text-base font-bold text-muted-foreground group-hover:text-foreground transition-colors block tracking-wide">
                    WSET LEVEL 3 AWARD IN WINES
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground/80 block mt-0.5 tracking-wider">
                    PASS WITH DISTINCTION
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Content Creation Section */}
        <section className="mb-16">
          <div className="border border-muted p-6 bg-secondary/30">
            <h3 className="text-lg font-bold mb-4 text-muted-foreground">
              Content Creation
            </h3>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Pizza className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">Food Inspirations</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">Restaurant & Bar Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <Wine className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">Wine & Spirits Content</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="flex flex-wrap gap-4">
          <a
            href="https://www.linkedin.com/in/nowosadp/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border-2 border-foreground px-6 py-3 font-bold hover:bg-foreground hover:text-background transition-colors shadow-xs hover:shadow-sm"
          >
            <Linkedin className="w-5 h-5" />
            Contact me through LinkedIn
          </a>
          <a
            href="mailto:newdev.pn@gmail.com"
            className="inline-flex items-center gap-3 border-2 border-foreground px-6 py-3 font-bold hover:bg-foreground hover:text-background transition-colors shadow-xs hover:shadow-sm"
          >
            <Mail className="w-5 h-5" />
            Email me
          </a>
        </section>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-muted">
          <p className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} NewDev Przemysław Nowosad
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Index;
