import { ModeToggle } from "@/components/mode-toggle";
import { SideMenu } from "@/components/side-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github, Twitter } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <SideMenu />
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href={""} target="_blank" rel="noreferrer">
              <Github />
              <span className="sr-only">Github</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href={""} target="_blank" rel="noreferrer">
              <Twitter />
              <span className="sr-only">Twitter</span>
            </Link>
          </Button>
          <ModeToggle />

          <Avatar>
            <AvatarFallback />
          </Avatar>
        </div>
      </div>
    </header>
  );
}
