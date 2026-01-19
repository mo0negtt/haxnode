import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { MessageSquare, Palette } from 'lucide-react';

export const SocialNode = memo(({ data, isConnectable }: any) => {
  return (
    <Card className="w-72 shadow-xl border-2 border-orange-500/20">
      <CardHeader className="flex flex-row items-center gap-2 p-3 border-b bg-orange-500/5">
        <MessageSquare className="w-4 h-4 text-orange-500" />
        <CardTitle className="text-sm font-bold uppercase tracking-tight">Messages & Chat</CardTitle>
      </CardHeader>
      <CardContent className="p-3 space-y-3">
        <div className="space-y-1.5">
          <Label className="text-[10px] uppercase font-bold text-muted-foreground/70">Mensajes (Uno por línea)</Label>
          <Textarea 
            value={data.welcomeMessage}
            onChange={(evt) => data.onChange('welcomeMessage', evt.target.value)}
            className="h-24 text-xs bg-background/50 font-mono"
            placeholder="¡Bienvenido!"
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1.5">
            <Label className="text-[10px] uppercase font-bold text-muted-foreground/70 flex items-center gap-1">
              <Palette className="w-3 h-3" /> Color (Hex)
            </Label>
            <div className="flex gap-1.5">
               <div className="w-8 h-8 rounded border border-border shrink-0 shadow-sm" style={{ backgroundColor: `#${data.colorMensaje || 'FFFFFF'}` }} />
               <Input 
                value={data.colorMensaje}
                onChange={(evt) => data.onChange('colorMensaje', evt.target.value.replace('#', ''))}
                className="h-8 text-xs bg-background/50 font-mono uppercase"
                placeholder="FFFFFF"
                maxLength={6}
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label className="text-[10px] uppercase font-bold text-muted-foreground/70">Tipo Letra</Label>
            <Input 
              value={data.tipoLetra}
              onChange={(evt) => data.onChange('tipoLetra', evt.target.value)}
              className="h-8 text-xs bg-background/50"
              placeholder="normal"
            />
          </div>
        </div>
      </CardContent>
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
      <Handle type="source" position={Position.Right} isConnectable={isConnectable} />
    </Card>
  );
});
