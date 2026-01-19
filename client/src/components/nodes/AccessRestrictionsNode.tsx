import { Handle, Position } from '@xyflow/react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ShieldX } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { ScrollArea } from "@/components/ui/scroll-area";

export function AccessRestrictionsNode({ data }: { data: any }) {
  return (
    <Card className="w-80 shadow-xl border-2 border-red-500/20 max-h-[600px] flex flex-col overflow-visible">
      <CardHeader className="flex flex-row items-center gap-2 p-3 border-b bg-red-500/5 shrink-0">
        <ShieldX className="w-4 h-4 text-red-500" />
        <CardTitle className="text-sm font-bold uppercase tracking-tight">Security & Access</CardTitle>
      </CardHeader>
      <CardContent className="p-0 flex-1 relative overflow-hidden">
        <ScrollArea className="h-[450px]">
          <div className="p-3 space-y-4">
            <div className="flex items-center justify-between p-2 rounded-lg bg-muted/30 border border-border/50">
              <div className="space-y-0.5">
                <Label className="text-xs font-bold">reCAPTCHA</Label>
                <p className="text-[10px] text-muted-foreground">Require verification on join</p>
              </div>
              <Switch 
                checked={data.reCaptcha} 
                onCheckedChange={(val) => data.onChange('reCaptcha', val)} 
                className="scale-90"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <Label className="text-[10px] uppercase font-bold text-muted-foreground/70">Max AFK Players</Label>
                <Input type="number" className="h-7 text-xs" value={data.maxAFK} onChange={(e) => data.onChange('maxAFK', parseInt(e.target.value) || 0)} />
              </div>
              <div className="space-y-1">
                <Label className="text-[10px] uppercase font-bold text-muted-foreground/70">Max Players per IP</Label>
                <Input type="number" className="h-7 text-xs" value={data.maxPerIp} onChange={(e) => data.onChange('maxPerIp', parseInt(e.target.value) || 0)} />
              </div>
            </div>

            <div className="space-y-1">
              <Label className="text-[10px] uppercase font-bold text-muted-foreground/70">Forbidden Countries</Label>
              <Input className="h-7 text-xs" placeholder="united states, united kingdom" value={data.forbiddenCountries} onChange={(e) => data.onChange('forbiddenCountries', e.target.value)} />
              <p className="text-[9px] text-muted-foreground">Comma separated (e.g. argentina, brazil)</p>
            </div>

            <div className="space-y-1">
              <Label className="text-[10px] uppercase font-bold text-muted-foreground/70">Banned IPs</Label>
              <Textarea 
                className="text-xs min-h-[60px] resize-none" 
                placeholder="123.456.789&#10;987.654.321"
                value={data.bannedIps} 
                onChange={(e) => data.onChange('bannedIps', e.target.value)} 
              />
            </div>

            <div className="space-y-1">
              <Label className="text-[10px] uppercase font-bold text-muted-foreground/70">Forbidden Nicknames</Label>
              <Input className="h-7 text-xs" value={data.forbiddenNicks} onChange={(e) => data.onChange('forbiddenNicks', e.target.value)} />
              <p className="text-[9px] text-muted-foreground">Comma separated (e.g. @everyone, @here)</p>
            </div>

            <div className="space-y-1 pt-2 border-t">
              <Label className="text-[10px] uppercase font-bold text-muted-foreground/70">Registered Players (Auth:Nick)</Label>
              <Textarea 
                className="text-xs min-h-[100px] font-mono resize-none" 
                placeholder="auth_id:NickName&#10;auth_id_2:NickName2"
                value={data.registeredPlayers} 
                onChange={(e) => data.onChange('registeredPlayers', e.target.value)} 
              />
            </div>

            <div className="space-y-1 pt-2 border-t">
              <Label className="text-[10px] uppercase font-bold text-red-500/70">Banned by Auth/Nick (Auth:Nick)</Label>
              <Textarea 
                className="text-xs min-h-[100px] font-mono resize-none border-red-500/20 focus-visible:ring-red-500/30" 
                placeholder="banned_auth:BannedNick&#10;another_auth:another_nick"
                value={data.bannedAuthNick} 
                onChange={(e) => data.onChange('bannedAuthNick', e.target.value)} 
              />
              <p className="text-[9px] text-muted-foreground">One pair per line (e.g. auth_123:Malvado)</p>
            </div>
          </div>
        </ScrollArea>
      </CardContent>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </Card>
  );
}
