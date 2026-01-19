import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Server, Users, Lock, Eye } from 'lucide-react';

export const ConfigHostNode = memo(({ data, isConnectable }: any) => {
  return (
    <Card className="w-72 shadow-xl border-2 border-primary/20">
      <CardHeader className="flex flex-row items-center gap-2 p-3 border-b bg-primary/5">
        <Server className="w-4 h-4 text-primary" />
        <CardTitle className="text-sm font-bold uppercase tracking-tight">Host Settings</CardTitle>
      </CardHeader>
      <CardContent className="p-3 space-y-3">
        <div className="space-y-1.5">
          <Label htmlFor="hostName" className="text-[10px] uppercase font-bold text-muted-foreground/70">Nombre de la Sala</Label>
          <Input 
            id="hostName" 
            value={data.hostName} 
            onChange={(evt) => data.onChange('hostName', evt.target.value)}
            className="h-8 text-xs bg-background/50"
            placeholder="Mi Sala Haxball"
          />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="visible" className="flex items-center gap-2 text-xs">
            <Eye className="w-3.5 h-3.5 text-muted-foreground" />
            Visibilidad Pública
          </Label>
          <Switch 
            id="visible"
            checked={data.public}
            onCheckedChange={(checked) => data.onChange('public', checked)}
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label className="flex items-center gap-2 text-xs">
              <Users className="w-3.5 h-3.5 text-muted-foreground" />
              Jugadores Máximos
            </Label>
            <span className="text-xs font-mono text-primary font-bold">{data.maxPlayers}</span>
          </div>
          <Slider 
            value={[data.maxPlayers]} 
            max={30} 
            min={1} 
            step={1}
            onValueChange={([val]) => data.onChange('maxPlayers', val)}
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="password" className="flex items-center gap-2 text-[10px] uppercase font-bold text-muted-foreground/70">
            <Lock className="w-3 h-3" /> Contraseña (Opcional)
          </Label>
          <Input 
            id="password" 
            type="password"
            value={data.password} 
            onChange={(evt) => data.onChange('password', evt.target.value)}
            className="h-8 text-xs bg-background/50"
            placeholder="Sin contraseña"
          />
        </div>

        <div className="flex items-center justify-between border-t border-border pt-2">
          <Label className="text-xs">Reiniciar Stats</Label>
          <Switch 
            checked={data.reiniciarStats === "Si"}
            onCheckedChange={(checked) => data.onChange('reiniciarStats', checked ? "Si" : "No")}
            className="scale-75 origin-right"
          />
        </div>
      </CardContent>
      <Handle type="source" position={Position.Right} isConnectable={isConnectable} />
    </Card>
  );
});
