import { ArrowDown } from "lucide-react";
import mitchPic from "@/assets/mitchPic.png";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="bg-card border-4 border-primary roudned-2xl shadow-xl p-8 space-y-6">
        <div className="flex justify-center">
        <img
            src={mitchPic}
            alt="Mitch Lindsey"
            className="w-50 h-50 rounded-full object-cover border-4 border-primary shadow-lg"
        />
        </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span> Hi, I'm</span>
            <span className="text-primary">
              {" "}
              Mitch
            </span>
            <span className="text-gradient ml-2">
              {""}
              Lindsey
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto">
            I am a software engineering student with a passion for web developement and design.
            I build interfaces that not only look good but function well.
          </p>

          <div className="pt-4">
            <a href="#projects" className="nym-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-float">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-orange" />
      </div>
    </section>
  );
};