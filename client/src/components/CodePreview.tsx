import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { Download, Copy, Check, ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { saveAs } from "file-saver";

interface CodePreviewProps {
  code: string;
}

export function CodePreview({ code }: CodePreviewProps) {
  const [copied, setCopied] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: "text/javascript;charset=utf-8" });
    saveAs(blob, "haxnode_script.js");
  };

  if (isHidden) {
    return (
      <div className="h-full flex flex-col justify-center border-l border-border bg-card w-10">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setIsHidden(false)}
          className="h-full w-full rounded-none"
          title="Show Script Preview"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
      </div>
    );
  }

  return (
    <div className="w-96 bg-card border-l border-border h-full flex flex-col relative transition-all duration-300">
      <div className="p-4 border-b border-border flex justify-between items-center bg-card">
        <div>
          <h2 className="font-display font-bold text-lg text-foreground">Script Preview</h2>
          <p className="text-xs text-muted-foreground mt-1">Generated Javascript</p>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setIsHidden(true)}
          className="hover:bg-muted"
          title="Hide Preview"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
      
      <div className="flex-1 min-h-0 bg-[#1e1e1e]">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          value={code}
          theme="vs-dark"
          options={{
            readOnly: true,
            minimap: { enabled: false },
            fontSize: 12,
            fontFamily: "'JetBrains Mono', monospace",
            padding: { top: 16 },
            scrollBeyondLastLine: false,
            renderLineHighlight: 'none',
          }}
        />
      </div>

      <div className="p-4 border-t border-border bg-card space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" onClick={handleCopy} className="w-full">
            {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
            {copied ? "Copied" : "Copy"}
          </Button>
          <Button onClick={handleDownload} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            <Download className="w-4 h-4 mr-2" />
            Export .js
          </Button>
        </div>
      </div>
    </div>
  );
}
