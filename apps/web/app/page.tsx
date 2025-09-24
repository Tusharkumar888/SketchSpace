import Image from "next/image";
import { Card } from "@repo/ui/card";
import { Gradient } from "@repo/ui/gradient";
import { TurborepoLogo } from "@repo/ui/turborepo-logo";
import { Header } from "./components/header";
import { LandingDashboard } from "./components/LandingDashboard";

export default function Page() {
  return (
    <div className="">
      <div className="min-h-screen bg-background text-foreground">
        <Header />

        {/* Main content area with top padding for fixed header */}
        <div className="pt-16">
          <div className="flex">
            <LandingDashboard />
          </div>
        </div>

        {/* <Footer /> */}
      </div>
    </div>
  );
}
