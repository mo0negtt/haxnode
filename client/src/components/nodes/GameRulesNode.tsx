import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Trophy, Clock, Map } from 'lucide-react';
import { Switch } from "@/components/ui/switch";
import { ScrollArea } from "@/components/ui/scroll-area";

export const GameRulesNode = memo(({ data, isConnectable }: any) => {
  return (
    <Card className="w-72 shadow-xl border-2 border-blue-500/20 max-h-[500px] flex flex-col overflow-hidden">
      <CardHeader className="flex flex-row items-center gap-2 p-3 border-b bg-blue-500/5 shrink-0">
        <Trophy className="w-4 h-4 text-blue-500" />
        <CardTitle className="text-sm font-bold tracking-tight">Game Rules</CardTitle>
      </CardHeader>
      <CardContent className="p-0 flex-1 relative overflow-hidden">
        <ScrollArea className="h-[400px]">
          <div className="p-3 space-y-3">
            <div className="space-y-1.5">
              <Label className="flex items-center gap-2 text-[10px] uppercase font-bold text-muted-foreground/70">
                <Map className="w-3 h-3" /> Mapa Inicial
              </Label>
              <Select 
                value={data.mapName} 
                onValueChange={(val) => data.onChange('mapName', val)}
              >
                <SelectTrigger className="h-8 text-xs bg-background/50">
                  <SelectValue placeholder="Seleccionar mapa" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="EntrenamientoFutsal">EntrenamientoFutsal</SelectItem>
                  <SelectItem value="Futsal x2">Futsal x2</SelectItem>
                  <SelectItem value="Futsal x3">Futsal x3</SelectItem>
                  <SelectItem value="Futsal x4">Futsal x4</SelectItem>
                  <SelectItem value="Futsal x5">Futsal x5</SelectItem>
                  <SelectItem value="Futsal x5 cesped">Futsal x5 cesped</SelectItem>
                  <SelectItem value="Futsal x7">Futsal x7</SelectItem>
                  <SelectItem value="Real Soccer">Real Soccer</SelectItem>
                  <SelectItem value="Real Soccer Evo">Real Soccer Evo</SelectItem>
                  <SelectItem value="Real Futsal">Real Futsal</SelectItem>
                  <SelectItem value="Entrenamiento">Entrenamiento</SelectItem>
                  <SelectItem value="Basquet">Basquet</SelectItem>
                  <SelectItem value="Mini RS">Mini RS</SelectItem>
                  <SelectItem value="Campeones">Campeones</SelectItem>
                  <SelectItem value="Premios">Premios</SelectItem>
                  <SelectItem value="Big">Big</SelectItem>
                  <SelectItem value="Voley 2d">Voley 2d</SelectItem>
                  <SelectItem value="Voley 3d">Voley 3d</SelectItem>
                  <SelectItem value="Escuela">Escuela</SelectItem>
                  <SelectItem value="Skate">Skate</SelectItem>
                  <SelectItem value="Handball">Handball</SelectItem>
                  <SelectItem value="Tenis Ladrillo">Tenis Ladrillo</SelectItem>
                  <SelectItem value="Tenis Pasto">Tenis Pasto</SelectItem>
                  <SelectItem value="Tenis Cemento">Tenis Cemento</SelectItem>
                  <SelectItem value="RS Realista">RS Realista</SelectItem>
                  <SelectItem value="RS Oveja">RS Oveja</SelectItem>
                  <SelectItem value="Penales Red">Penales Red</SelectItem>
                  <SelectItem value="Penales Blue">Penales Blue</SelectItem>
                  <SelectItem value="2 Man">2 Man</SelectItem>
                  <SelectItem value="3 Man">3 Man</SelectItem>
                  <SelectItem value="4 Man">4 Man</SelectItem>
                  <SelectItem value="5 Man">5 Man</SelectItem>
                  <SelectItem value="6 Man">6 Man</SelectItem>
                  <SelectItem value="7 Man">7 Man</SelectItem>
                  <SelectItem value="8 Man">8 Man</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1.5">
                <Label className="flex items-center gap-1 text-[10px] uppercase font-bold text-muted-foreground/70">
                  <Clock className="w-3 h-3" /> Tiempo
                </Label>
                <Input 
                  type="number"
                  min={0}
                  value={data.timeLimit}
                  onChange={(evt) => data.onChange('timeLimit', parseInt(evt.target.value) || 0)}
                  className="h-8 text-xs bg-background/50"
                />
              </div>
              <div className="space-y-1.5">
                <Label className="flex items-center gap-1 text-[10px] uppercase font-bold text-muted-foreground/70">
                  <Trophy className="w-3 h-3" /> Goles
                </Label>
                <Input 
                  type="number"
                  min={0}
                  value={data.scoreLimit}
                  onChange={(evt) => data.onChange('scoreLimit', parseInt(evt.target.value) || 0)}
                  className="h-8 text-xs bg-background/50"
                />
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-border">
              <Label className="text-[9px] font-bold text-muted-foreground/70 uppercase tracking-wider">Modos de Juego</Label>
              {[
                { label: "Auto Balance", key: "autoBalance" },
                { label: "Cambio Camisetas", key: "cambioCami" },
                { label: "PowerShot", key: "powerShot" },
                { label: "Jabulani Mode", key: "jabulaniMode" },
                { label: "Comba Mode", key: "combaMode" },
                { label: "Gol de Oro", key: "golDeOro" },
                { label: "Fair Play", key: "fairPlay" },
                { label: "Gana Sigue", key: "ganaSigue" },
                { label: "Juegan Todos", key: "jueganTodos" },
                { label: "Juegan Algunos", key: "jueganAlgunos" },
              ].map((mode) => (
                <div key={mode.key} className="flex items-center justify-between">
                  <Label className="text-xs">{mode.label}</Label>
                  <Switch 
                    checked={data[mode.key]} 
                    onCheckedChange={(val) => data.onChange(mode.key, val)} 
                    className="scale-75 origin-right"
                  />
                </div>
              ))}
              
              {data.jueganAlgunos && (
                <div className="space-y-1.5 pl-3 border-l-2 border-blue-500/20">
                  <Label className="text-[10px] font-bold text-muted-foreground/70">Máx Jugadores por Equipo</Label>
                  <Input 
                    type="number"
                    min={1}
                    value={data.maxPlayersPerTeam}
                    onChange={(evt) => data.onChange('maxPlayersPerTeam', parseInt(evt.target.value) || 2)}
                    className="h-7 text-xs bg-background/50"
                  />
                </div>
              )}
            </div>
          </div>
        </ScrollArea>
      </CardContent>
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
      <Handle type="source" position={Position.Right} isConnectable={isConnectable} />
    </Card>
  );
});
