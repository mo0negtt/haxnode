import { Handle, Position } from '@xyflow/react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Trophy } from "lucide-react";

export function TournamentRulesNode({ data }: { data: any }) {
  return (
    <Card className="w-72 shadow-xl border-2 border-blue-500/20">
      <CardHeader className="flex flex-row items-center gap-2 p-3 border-b bg-blue-500/5">
        <Trophy className="w-4 h-4 text-blue-500" />
        <CardTitle className="text-sm font-bold uppercase tracking-tight">Tournament Info</CardTitle>
      </CardHeader>
      <CardContent className="p-3 space-y-3">
        <div className="space-y-1">
          <Label className="text-[10px]">Challonge Link</Label>
          <Input 
            className="h-7 text-xs"
            value={data.challongeLink}
            onChange={(e) => data.onChange('challongeLink', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label className="text-[10px]">Rules (One per line)</Label>
          <Textarea 
            className="text-xs min-h-[100px]"
            value={data.rules}
            placeholder="Rule 1&#10;Rule 2&#10;Rule 3..."
            onChange={(e) => data.onChange('rules', e.target.value)}
          />
        </div>
      </CardContent>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </Card>
  );
}
