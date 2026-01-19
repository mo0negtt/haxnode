import { Handle, Position } from '@xyflow/react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Share2 } from "lucide-react";

export function SocialNetworksNode({ data }: { data: any }) {
  return (
    <Card className="w-72 shadow-xl border-2 border-orange-500/20">
      <CardHeader className="flex flex-row items-center gap-2 p-3 border-b bg-orange-500/5">
        <Share2 className="w-4 h-4 text-orange-500" />
        <CardTitle className="text-sm font-bold uppercase tracking-tight">Social Media</CardTitle>
      </CardHeader>
      <CardContent className="p-3 space-y-3">
        <div className="space-y-1">
          <Label className="text-[10px]">Discord Link</Label>
          <Input 
            className="h-7 text-xs"
            value={data.discordLink}
            onChange={(e) => data.onChange('discordLink', e.target.value)}
          />
        </div>
        <div className="space-y-1">
          <Label className="text-[10px]">Youtube Link</Label>
          <Input 
            className="h-7 text-xs"
            value={data.youtubeLink}
            onChange={(e) => data.onChange('youtubeLink', e.target.value)}
          />
        </div>
        <div className="space-y-1">
          <Label className="text-[10px]">Twitch Link</Label>
          <Input 
            className="h-7 text-xs"
            value={data.twitchLink}
            onChange={(e) => data.onChange('twitchLink', e.target.value)}
          />
        </div>
      </CardContent>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </Card>
  );
}
