import { Award, Clock, Gift, MessageCircle, Shield } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    icon: Shield,
    title: "Complete Anonymity",
    description: "Share your thoughts without revealing your identity. Your privacy is our top priority."
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Connect with listeners any time, day or night. Perfect for busy professionals and night owls."
  },
  {
    icon: MessageCircle,
    title: "Peer Support",
    description: "Talk to empathetic listeners who understand your challenges. No professional license required."
  },
  {
    icon: Gift,
    title: "Rewards for Listeners",
    description: "Earn tokens and recognition for providing valuable support to others in the community."
  },
  {
    icon: Award,
    title: "Personal Growth",
    description: "Develop your emotional intelligence and communication skills as both a user and a listener."
  }
]

export default function Features() {
  return (
    <section>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-heading">Why Choose HearMeOut?</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="pt-6">
            <CardContent>
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground font-heading">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}