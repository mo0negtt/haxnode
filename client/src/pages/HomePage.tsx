import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Layers, Code, Zap } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
              <Cpu className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-display font-bold text-foreground tracking-tight">
              Hax<span className="text-primary">Node</span>
            </h1>
          </div>
          <nav>
            <Link href="/editor">
              <Button size="lg" className="rounded-full font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
                Launch Editor
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Visual Scripting for <br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-green-400 to-emerald-500">
                Haxball Hosts
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Build complex game logic without writing a single line of code. 
              Drag, drop, and connect nodes to create your perfect room script.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/editor">
                <Button size="xl" className="h-14 px-8 text-lg rounded-full font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-all duration-300">
                  Start Creating Now
                </Button>
              </Link>
              <Button 
                size="xl" 
                variant="outline" 
                className="h-14 px-8 text-lg rounded-full border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all"
                onClick={() => window.open('https://github.com/haxball/haxball-issues/wiki/Headless-Host', '_blank')}
              >
                View Documentation
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-card/30 border-t border-border/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={Layers} 
                title="Visual Node System" 
                description="Intuitive drag-and-drop interface inspired by Unreal Engine Blueprints."
              />
              <FeatureCard 
                icon={Code} 
                title="Real-time Code Gen" 
                description="See the JavaScript code update instantly as you modify your node graph."
              />
              <FeatureCard 
                icon={Zap} 
                title="Instant Deploy" 
                description="Export your script in one click and host it directly on Haxball headless."
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-border text-center text-muted-foreground text-sm">
        <p>© 2024 HaxNode Editor. Built for the community.</p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description }: any) {
  return (
    <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-display font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}
