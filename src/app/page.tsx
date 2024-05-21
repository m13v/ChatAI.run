"use client";

import { useState } from "react";
import { ChatLayout } from "@/components/chat/chat-layout";
// import { GitHubLogoIcon } from "@radix-ui/react-icons";
// import { cn } from "@/lib/utils";
// import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import ServerComponent from "./server-component";

export default function Home({ defaultLayout }: { defaultLayout: any }) {
  const [url, setUrl] = useState("https://example.com");
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    let formattedUrl = inputValue.trim();
    if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
      formattedUrl = 'https://' + formattedUrl;
    }

    setUrl(formattedUrl);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  return (
    <main className="flex h-[calc(100dvh)] flex-col items-center justify-start p-4 md:px-24 py-8 gap-4">
      <div className="flex justify-between max-w-5xl w-full items-center">
        <Link href="#" className="text-4xl font-bold text">ChatAI.run</Link>
        {/* <Link
          href="https://github.com/jakobhoeg/shadcn-chat"
          className={cn(
            buttonVariants({ variant: "ghost", size: "icon" }),
            "h-10 w-10"
          )}
        >
          <GitHubLogoIcon className="w-7 h-7 text-muted-foreground" />
        </Link> */}
      </div>
      <div className="w-full max-w-5xl flex items-center gap-2">
        <Input 
          placeholder="https://example.com" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown} // Add this line to handle Enter key press
        />
        <Button variant="outline" onClick={handleSearch}>Search</Button>
      </div>
      <div className="w-full flex-grow mt-4 flex flex-col md:flex-row">
        <h2 className="text-2xl font-semibold mt-4">Ask AI a question about this page:</h2>
        <div className="w-full md:w-1/3 h-48 border rounded-lg mt-1 md:mt-0">
          <ChatLayout defaultLayout={defaultLayout} navCollapsedSize={8} />
        </div>
        <h2 className="text-2xl font-semibold mt-4">AI Context:</h2>
        <div className="w-full md:w-2/3 h-full border rounded-lg mt-1 md:mt-0">
          <iframe src={url} className="w-full h-full border rounded-lg" />
        </div>
      </div>
      <div className="flex justify-between max-w-5xl w-full items-start text-xs md:text-sm text-muted-foreground ">
      {/* <p className="max-w-[150px] sm:max-w-lg">Built by <a className="font-semibold" href="https://github.com/jakobhoeg/">Jakob Hoeg</a>. To be used with <a className="font-semibold" href="https://ui.shadcn.com/">shadcn</a>.</p> */}
      {/* <p className="max-w-[150px] sm:max-w-lg text-right">Source code available on <a className="font-semibold" href="https://github.com/jakobhoeg/shadcn-chat">GitHub</a>.</p> */}
      </div>
    </main>
  );
}
