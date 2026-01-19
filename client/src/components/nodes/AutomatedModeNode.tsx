import { Handle, Position } from '@xyflow/react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Zap } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export function AutomatedModeNode({ data }: { data: any }) {
  return (
    <Card className="w-80 shadow-xl border-2 border-amber-500/20">
      <CardHeader className="flex flex-row items-center gap-2 p-3 border-b bg-amber-500/5">
        <Zap className="w-4 h-4 text-amber-500" />
        <CardTitle className="text-sm font-bold uppercase tracking-tight">Bot Automation</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-80">
          <div className="p-3 space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-xs">Enable Automated Mode</Label>
              <Switch 
                checked={data.enabled} 
                onCheckedChange={(val) => data.onChange('enabled', val)} 
                className="scale-75 origin-right"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label className="text-[10px] uppercase font-bold text-muted-foreground/70">Change Limit (s)</Label>
                <Input 
                  type="number" 
                  className="h-8 text-xs bg-background/50" 
                  value={data.changeLimit} 
                  onChange={(e) => data.onChange('changeLimit', parseInt(e.target.value))} 
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-[10px] uppercase font-bold text-muted-foreground/70">Wait Time (ms)</Label>
                <Input 
                  type="number" 
                  className="h-8 text-xs bg-background/50" 
                  value={data.waitTime} 
                  onChange={(e) => data.onChange('waitTime', parseInt(e.target.value))} 
                />
              </div>
            </div>

            <div className="space-y-3 pt-2 border-t border-border">
              <Label className="text-[9px] font-bold text-muted-foreground/70 uppercase tracking-wider">Map Configs (Time/Goals)</Label>
              
              {[
                { label: "Entrenamiento", key: "EntrenamientoFutsal" },
                { label: "Futsal x2", key: "Futsalx2" },
                { label: "Futsal x3", key: "Futsalx3" },
                { label: "Futsal x4", key: "Futsalx4" },
                { label: "Futsal x5", key: "Futsalx5" },
                { label: "Futsal x7", key: "Futsalx7" },
              ].map((map) => (
                <div key={map.key} className="space-y-1.5">
                  <Label className="text-[10px] font-bold">{map.label}</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input 
                      type="number" 
                      placeholder="Min" 
                      className="h-7 text-[10px] bg-background/50" 
                      value={data[`time${map.key}`]} 
                      onChange={(e) => data.onChange(`time${map.key}`, parseInt(e.target.value))} 
                    />
                    <Input 
                      type="number" 
                      placeholder="Goals" 
                      className="h-7 text-[10px] bg-background/50" 
                      value={data[`goals${map.key}`]} 
                      onChange={(e) => data.onChange(`goals${map.key}`, parseInt(e.target.value))} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
      </CardContent>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </Card>
  );
}
