import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Palette, Shirt } from 'lucide-react';

export const VisualsNode = memo(({ data, isConnectable }: any) => {
  return (
    <Card className="w-72 shadow-xl border-2 border-purple-500/20">
      <CardHeader className="flex flex-row items-center gap-2 p-3 border-b bg-purple-500/5">
        <Palette className="w-4 h-4 text-purple-500" />
        <CardTitle className="text-sm font-bold uppercase tracking-tight">Design & Colors</CardTitle>
      </CardHeader>
      <CardContent className="p-3 space-y-3">
        <div className="space-y-1.5">
          <Label className="text-[10px] uppercase font-bold text-muted-foreground/70">Tamaño Jugador</Label>
          <Input 
            type="number"
            min={10}
            max={30}
            value={data.playerSize}
            onChange={(evt) => data.onChange('playerSize', parseInt(evt.target.value) || 15)}
            className="h-8 text-xs bg-background/50"
          />
        </div>

        <div className="space-y-1.5">
          <Label className="flex items-center gap-2 text-[10px] uppercase font-bold text-muted-foreground/70">
            <Shirt className="w-3 h-3 text-red-500" /> Camiseta Roja
          </Label>
          <Input 
            value={data.camisetaRed}
            onChange={(evt) => data.onChange('camisetaRed', evt.target.value)}
            className="h-8 text-xs bg-background/50 font-mono"
            placeholder="/colors red ..."
          />
        </div>

        <div className="space-y-1.5">
          <Label className="flex items-center gap-2 text-[10px] uppercase font-bold text-muted-foreground/70">
            <Shirt className="w-3 h-3 text-blue-500" /> Camiseta Azul
          </Label>
          <Input 
            value={data.camisetaBlue}
            onChange={(evt) => data.onChange('camisetaBlue', evt.target.value)}
            className="h-8 text-xs bg-background/50 font-mono"
            placeholder="/colors blue ..."
          />
        </div>
      </CardContent>
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
      <Handle type="source" position={Position.Right} isConnectable={isConnectable} />
    </Card>
  );
});
