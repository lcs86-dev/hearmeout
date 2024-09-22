import { ArrowRight, Clock, Shield } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center mb-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground font-heading">Your Safe Space for Support, Anytime</h2>
        <p className="text-xl mb-8 text-muted-foreground">Connect anonymously with empathetic listeners and find the emotional support you need, on your schedule.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <Link href="/signup-login">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          {/* <Button size="lg" variant="outline" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground border-secondary">Explore as a Listener</Button> */}
        </div>
        <div className="flex justify-center space-x-8 mb-8">
          <div className="flex items-center">
            <Clock className="h-6 w-6 mr-2 text-primary" />
            <span className="text-sm">Available 24/7</span>
          </div>
          <div className="flex items-center">
            <Shield className="h-6 w-6 mr-2 text-primary" />
            <span className="text-sm">100% Anonymous</span>
          </div>
        </div>
      </div>
      {/* <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
        <Image
          src="/placeholder.svg?height=400&width=800"
          alt="Diverse group of people connecting"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      </div> */}
    </section>
  )
}