import { Handle, Position } from '@xyflow/react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageSquare } from "lucide-react";

export function AnnouncementNode({ data }: { data: any }) {
  return (
    <Card className="w-72 shadow-xl border-2 border-green-500/20">
      <CardHeader className="flex flex-row items-center gap-2 p-3 border-b bg-green-500/5">
        <MessageSquare className="w-4 h-4 text-green-500" />
        <CardTitle className="text-sm font-bold uppercase tracking-tight">System Alerts</CardTitle>
      </CardHeader>
      <CardContent className="p-3 space-y-4">
        <div className="space-y-1.5">
          <Label className="text-[10px] uppercase font-bold text-muted-foreground/70">Anuncio 1 (10s)</Label>
          <Textarea 
            className="text-xs min-h-[60px] bg-background/50"
            value={data.announcement1}
            onChange={(e) => data.onChange('announcement1', e.target.value)}
          />
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1">
              <Label className="text-[9px] font-bold text-muted-foreground/70 uppercase">Font</Label>
              <Select value={data.font1} onValueChange={(val) => data.onChange('font1', val)}>
                <SelectTrigger className="h-7 text-xs bg-background/50">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="normal">Normal</SelectItem>
                  <SelectItem value="bold">Bold</SelectItem>
                  <SelectItem value="italic">Italic</SelectItem>
                  <SelectItem value="small">Small</SelectItem>
                  <SelectItem value="small-bold">Small Bold</SelectItem>
                  <SelectItem value="small-italic">Small Italic</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label className="text-[9px] font-bold text-muted-foreground/70 uppercase">Color (Hex)</Label>
              <Input 
                className="h-7 text-xs bg-background/50 uppercase"
                value={data.color1}
                onChange={(e) => data.onChange('color1', e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="space-y-1.5 border-t border-border pt-3">
          <Label className="text-[10px] uppercase font-bold text-muted-foreground/70">Anuncio 2 (40s)</Label>
          <Textarea 
            className="text-xs min-h-[60px] bg-background/50"
            value={data.announcement2}
            onChange={(e) => data.onChange('announcement2', e.target.value)}
          />
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1">
              <Label className="text-[9px] font-bold text-muted-foreground/70 uppercase">Font</Label>
              <Select value={data.font2} onValueChange={(val) => data.onChange('font2', val)}>
                <SelectTrigger className="h-7 text-xs bg-background/50">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="normal">Normal</SelectItem>
                  <SelectItem value="bold">Bold</SelectItem>
                  <SelectItem value="italic">Italic</SelectItem>
                  <SelectItem value="small">Small</SelectItem>
                  <SelectItem value="small-bold">Small Bold</SelectItem>
                  <SelectItem value="small-italic">Small Italic</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label className="text-[9px] font-bold text-muted-foreground/70 uppercase">Color (Hex)</Label>
              <Input 
                className="h-7 text-xs bg-background/50 uppercase"
                value={data.color2}
                onChange={(e) => data.onChange('color2', e.target.value)}
              />
            </div>
          </div>
        </div>
      </CardContent>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </Card>
  );
}
