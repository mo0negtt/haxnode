import { Handle, Position } from '@xyflow/react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Users } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export function RolesNode({ data }: { data: any }) {
  const roles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Card className="w-80 shadow-xl border-2 border-indigo-500/20 max-h-[600px] flex flex-col overflow-visible">
      <CardHeader className="flex flex-row items-center gap-2 p-3 border-b bg-indigo-500/5 shrink-0">
        <Users className="w-4 h-4 text-indigo-500" />
        <CardTitle className="text-sm font-bold uppercase tracking-tight">Player Roles</CardTitle>
      </CardHeader>
      <CardContent className="p-0 flex-1 overflow-hidden">
        <ScrollArea className="h-[450px]">
          <div className="p-3 space-y-4">
            {roles.map((num) => (
              <div key={num} className="space-y-2 pb-2 border-b border-border/50 last:border-0">
                <div className="flex items-center justify-between">
                  <Label className="text-[10px] uppercase font-bold text-indigo-500">Role {num}</Label>
                  <Input 
                    className="h-6 text-[10px] w-32 bg-muted/50" 
                    placeholder="Role Name"
                    value={data[`nombreRol${num}`]} 
                    onChange={(e) => data.onChange(`nombreRol${num}`, e.target.value)} 
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <Label className="text-[9px]">Chat Color (Hex)</Label>
                    <div className="flex gap-1">
                      <div 
                        className="w-6 h-6 rounded border border-border shrink-0" 
                        style={{ backgroundColor: `#${data[`colorRol${num}`] || 'FFFFFF'}` }} 
                      />
                      <Input 
                        className="h-6 text-[10px]" 
                        placeholder="FFFFFF"
                        value={data[`colorRol${num}`]} 
                        onChange={(e) => data.onChange(`colorRol${num}`, e.target.value)} 
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Label className="text-[9px]">Users (Comma separated)</Label>
                    <Input 
                      className="h-6 text-[10px]" 
                      placeholder="Messi, Neymar"
                      value={data[`nicknamesRol${num}`]} 
                      onChange={(e) => data.onChange(`nicknamesRol${num}`, e.target.value)} 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </Card>
  );
}
