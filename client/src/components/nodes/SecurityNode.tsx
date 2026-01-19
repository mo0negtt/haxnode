import { Handle, Position } from '@xyflow/react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { ShieldAlert } from "lucide-react";

export function SecurityNode({ data }: { data: any }) {
  return (
    <Card className="w-72 shadow-xl border-2 border-red-500/20">
      <CardHeader className="flex flex-row items-center gap-2 p-3 border-b bg-red-500/5">
        <ShieldAlert className="w-4 h-4 text-red-500" />
        <CardTitle className="text-sm font-bold uppercase tracking-tight">Anti-Spam Filter</CardTitle>
      </CardHeader>
      <CardContent className="p-3 space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-[10px] font-bold">Enable Anti-Spam</Label>
          <Switch checked={data.cooldownEnabled} onCheckedChange={(val) => data.onChange('cooldownEnabled', val)} />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <Label className="text-[10px]">Message Limit</Label>
            <Input type="number" className="h-7 text-xs" value={data.spamLimit} onChange={(e) => data.onChange('spamLimit', parseInt(e.target.value))} />
          </div>
          <div className="space-y-1">
            <Label className="text-[10px]">Kick Threshold</Label>
            <Input type="number" className="h-7 text-xs" value={data.kickThreshold} onChange={(e) => data.onChange('kickThreshold', parseInt(e.target.value))} />
          </div>
        </div>
        <div className="space-y-1">
          <Label className="text-[10px]">Cooldown (ms)</Label>
          <Input type="number" step="1000" className="h-7 text-xs" value={data.cooldownTime} onChange={(e) => data.onChange('cooldownTime', parseInt(e.target.value))} />
        </div>
        
        <div className="pt-2 border-t space-y-2">
          <Label className="text-[10px] uppercase font-bold text-muted-foreground">Admin Protection</Label>
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1">
              <Label className="text-[10px]">Max Attempts</Label>
              <Input type="number" className="h-7 text-xs" value={data.maxAttempts} onChange={(e) => data.onChange('maxAttempts', parseInt(e.target.value))} />
            </div>
            <div className="space-y-1">
              <Label className="text-[10px]">Alert @</Label>
              <Input type="number" className="h-7 text-xs" value={data.alertThreshold} onChange={(e) => data.onChange('alertThreshold', parseInt(e.target.value))} />
            </div>
          </div>
        </div>
      </CardContent>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </Card>
  );
}
