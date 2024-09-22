'use client'

import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Moon, Sun } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const NavItems = () => (
  <>
    <Button variant="ghost" className="w-full justify-start md:w-auto">About</Button>
    <Button variant="ghost" className="w-full justify-start md:w-auto">Features</Button>
    <Button variant="ghost" className="w-full justify-start md:w-auto">Contact</Button>
  </>
)

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode])


  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-background dark:from-primary/5 dark:to-background">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">HearMeOut</h1>
        <nav className="hidden md:flex items-center space-x-4">
          <NavItems />
          <Button variant="outline" size="icon" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </nav>
        <div className="flex items-center md:hidden">
          <Button variant="outline" size="icon" className="mr-2" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          {/* <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-4">
                <NavItems />
              </div>
            </SheetContent>
          </Sheet> */}
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <Hero />
        <Features />
      </main>
    </div>
  );
}
