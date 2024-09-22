import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { FaGoogle, FaApple } from 'react-icons/fa'

export default function SignupLogin() {
  return (
    <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex justify-between items-center mb-4">
            <CardTitle className="text-2xl font-semibold text-foreground">Welcome to CounselConnect</CardTitle>
          </div>
          <CardDescription className="text-muted-foreground">Sign up or log in to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="signup" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
              <TabsTrigger value="login">Log In</TabsTrigger>
            </TabsList>
            <TabsContent value="signup">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-foreground">Password</Label>
                  <Input id="password" type="password" placeholder="Create a password" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password" className="text-foreground">Confirm Password</Label>
                  <Input id="confirm-password" type="password" placeholder="Confirm your password" required />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Sign Up
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="login">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email" className="text-foreground">Email</Label>
                  <Input id="login-email" type="email" placeholder="Enter your email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="login-password" className="text-foreground">Password</Label>
                  <Input id="login-password" type="password" placeholder="Enter your password" required />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Log In
                </Button>
              </form>
            </TabsContent>
          </Tabs>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-muted" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-background text-muted-foreground">Or continue with</span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button variant="outline" className="w-full">
                <FaGoogle className="mr-2 h-4 w-4" />
                Google
              </Button>
              <Button variant="outline" className="w-full">
                <FaApple className="mr-2 h-4 w-4" />
                Apple
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-xs text-center text-muted-foreground mt-4">
            By signing up, you agree to our <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
            We prioritize your privacy and ensure complete anonymity during counseling sessions. Your personal information is encrypted and protected using blockchain technology. You can choose to be a listener or a user after signing up.
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}