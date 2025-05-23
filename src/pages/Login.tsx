
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Lock, Phone } from "lucide-react";
import OTPInput from "@/components/auth/OTPInput";
import SocialLogin from "@/components/auth/SocialLogin";
import { toast } from "@/components/ui/toaster";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loginMethod, setLoginMethod] = useState<"email" | "phone">("email");
  const [showOTP, setShowOTP] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOTP] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    
    // This is where you would integrate with your authentication service
    // For now, we'll just simulate a successful login
    if (loginMethod === "email") {
      if (!email || !password) {
        toast({
          title: "Invalid Credentials",
          description: "Please enter both email and password.",
          variant: "destructive",
        });
        return;
      }
      
      // Simulate login success
      toast({
        title: "Login Successful",
        description: "Welcome back to your account!",
      });
      
      setTimeout(() => navigate("/dashboard"), 1000);
    } else if (loginMethod === "phone") {
      if (!phone) {
        toast({
          title: "Phone Required",
          description: "Please enter your phone number.",
          variant: "destructive",
        });
        return;
      }

      if (!showOTP) {
        setShowOTP(true);
        toast({
          title: "OTP Sent",
          description: "A verification code has been sent to your phone.",
        });
      } else {
        if (!otp || otp.length < 6) {
          toast({
            title: "Invalid OTP",
            description: "Please enter a valid verification code.",
            variant: "destructive",
          });
          return;
        }

        // Simulate OTP verification success
        toast({
          title: "Verification Successful",
          description: "Welcome back to your account!",
        });
        
        setTimeout(() => navigate("/dashboard"), 1000);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-3xl font-bold">Welcome Back</CardTitle>
          <CardDescription>
            Sign in to your account to continue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="email" onValueChange={(v) => setLoginMethod(v as "email" | "phone")}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="phone">Phone</TabsTrigger>
            </TabsList>
            
            <TabsContent value="email">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      className="pl-10"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      to="/forgot-password"
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="pl-10"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full">
                  Sign In
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="phone">
              <form onSubmit={handleLogin} className="space-y-4">
                {!showOTP ? (
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="pl-10"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <Button type="submit" className="w-full mt-4">
                      Send Verification Code
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Label>Enter Verification Code</Label>
                    <OTPInput value={otp} onChange={setOTP} />
                    <div className="text-sm text-center mt-2">
                      Didn't receive the code?{" "}
                      <button
                        type="button"
                        onClick={() => {
                          toast({
                            title: "OTP Resent",
                            description: "A new verification code has been sent to your phone.",
                          });
                        }}
                        className="text-primary font-medium hover:underline"
                      >
                        Resend
                      </button>
                    </div>
                    <Button type="submit" className="w-full">
                      Verify & Sign In
                    </Button>
                  </div>
                )}
              </form>
            </TabsContent>
          </Tabs>
          
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-muted"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          
          <SocialLogin />
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary font-medium hover:underline">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
