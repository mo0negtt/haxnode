import { Server, ShieldCheck, Trophy, Palette, MessageSquare, Bot, MapPin, Share2, CircleDot, ShieldAlert, Users, ShieldX, Webhook, Zap, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiDiscord, SiTiktok } from "react-icons/si";

interface SidebarProps {
  onDragStart: (event: React.DragEvent, nodeType: string) => void;
}

export function Sidebar({ onDragStart }: SidebarProps) {
  const nodeTypes = [
    { type: 'configHost', label: 'Host Settings', icon: Server, color: 'text-primary' },
    { type: 'admin', label: 'Admin Access', icon: ShieldCheck, color: 'text-red-500' },
    { type: 'gameRules', label: 'Game & Rules', icon: Trophy, color: 'text-blue-500' },
    { type: 'automatedMode', label: 'Bot Automation', icon: Zap, color: 'text-amber-500' },
    { type: 'visuals', label: 'Design & Colors', icon: Palette, color: 'text-purple-500' },
    { type: 'social', label: 'Messages & Chat', icon: MessageSquare, color: 'text-orange-500' },
    { type: 'bot', label: 'Referee Bot', icon: Bot, color: 'text-cyan-500' },
    { type: 'announcement', label: 'System Alerts', icon: MessageSquare, color: 'text-green-500' },
    { type: 'socialNetworks', label: 'Social Media', icon: Share2, color: 'text-orange-500' },
    { type: 'hostCustomization', label: 'Location & Flag', icon: MapPin, color: 'text-yellow-400' },
    { type: 'tournamentRules', label: 'Tournament Info', icon: Trophy, color: 'text-blue-400' },
    { type: 'roles', label: 'Player Roles', icon: Users, color: 'text-indigo-500' },
    { type: 'accessRestrictions', label: 'Security & Access', icon: ShieldX, color: 'text-red-700' },
    { type: 'discordWebhooks', label: 'Discord Logs', icon: Webhook, color: 'text-indigo-600' },
    { type: 'ballCustomization', label: 'Ball Editor', icon: CircleDot, color: 'text-pink-500' },
    { type: 'security', label: 'Anti-Spam Filter', icon: ShieldAlert, color: 'text-red-600' },
  ];

  return (
    <aside className="w-64 bg-card border-r border-border h-full flex flex-col">
      <div className="p-4 border-b border-border">
        <h2 className="font-display font-bold text-lg text-foreground">Node Library</h2>
        <p className="text-xs text-muted-foreground mt-1">Drag nodes to canvas</p>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {nodeTypes.map((node) => (
          <div
            key={node.type}
            onDragStart={(event) => onDragStart(event, node.type)}
            draggable
            className="flex items-center gap-3 p-3 rounded-lg border border-border bg-background hover:bg-muted cursor-grab active:cursor-grabbing transition-all shadow-sm hover:shadow-md hover:border-primary/30 group"
          >
            <node.icon className={`w-5 h-5 ${node.color} group-hover:scale-110 transition-transform`} />
            <span className="font-medium text-sm">{node.label}</span>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-border space-y-2 bg-muted/30">
        <Button 
          variant="outline" 
          className="w-full justify-start gap-3 h-10 text-xs font-bold border-muted-foreground/20 bg-background hover:bg-[#5865F2] hover:text-white hover:border-[#5865F2] transition-all group shadow-sm"
          onClick={() => window.open('https://discord.gg/ffqMarg5Jm', '_blank')}
        >
          <SiDiscord className="w-4 h-4 group-hover:scale-110 transition-transform" />
          Discord (GLH)
        </Button>
        <Button 
          variant="outline" 
          className="w-full justify-start gap-3 h-10 text-xs font-bold border-muted-foreground/20 bg-background hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group shadow-sm"
          onClick={() => window.open('https://www.tiktok.com/@mo0negtt', '_blank')}
        >
          <SiTiktok className="w-4 h-4 group-hover:scale-110 transition-transform" />
          TikTok (mo0negtt)
        </Button>
      </div>
    </aside>
  );
}
