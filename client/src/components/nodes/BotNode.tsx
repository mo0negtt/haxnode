import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Bot } from 'lucide-react';

export const BotNode = memo(({ data, isConnectable }: any) => {
  return (
    <Card className="w-72 shadow-xl border-2 border-cyan-500/20">
      <CardHeader className="flex flex-row items-center gap-2 p-3 border-b bg-cyan-500/5">
        <Bot className="w-4 h-4 text-cyan-500" />
        <CardTitle className="text-sm font-bold uppercase tracking-tight">Referee Bot</CardTitle>
      </CardHeader>
      <CardContent className="p-3 space-y-3">
        <div className="flex items-center justify-between">
          <Label className="text-xs">Mostrar Bot en Sala</Label>
          <Switch 
            checked={data.botVisible}
            onCheckedChange={(checked) => data.onChange('botVisible', checked)}
            className="scale-75 origin-right"
          />
        </div>

        <div className="space-y-1.5">
          <Label className="text-[10px] uppercase font-bold text-muted-foreground/70">Nombre del Bot</Label>
          <Input 
            value={data.botName}
            onChange={(evt) => data.onChange('botName', evt.target.value)}
            className="h-8 text-xs bg-background/50"
            placeholder="HostBot"
          />
        </div>
      </CardContent>
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
      <Handle type="source" position={Position.Right} isConnectable={isConnectable} />
    </Card>
  );
});
