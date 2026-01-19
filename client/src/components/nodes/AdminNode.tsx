import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ShieldCheck, Key, UserCheck } from 'lucide-react';

export const AdminNode = memo(({ data, isConnectable }: any) => {
  return (
    <Card className="w-72 shadow-xl border-2 border-red-500/20">
      <CardHeader className="flex flex-row items-center gap-2 p-3 border-b bg-red-500/5">
        <ShieldCheck className="w-4 h-4 text-red-500" />
        <CardTitle className="text-sm font-bold tracking-tight">Admin Access</CardTitle>
      </CardHeader>
      <CardContent className="p-3 space-y-3">
        <div className="space-y-1.5">
          <Label htmlFor="adminKey" className="flex items-center gap-2 text-[10px] uppercase font-bold text-muted-foreground/70">
            <Key className="w-3 h-3" /> Clave de Admin
          </Label>
          <Input 
            id="adminKey" 
            value={data.adminKey} 
            onChange={(evt) => data.onChange('adminKey', evt.target.value)}
            className="h-8 text-xs bg-background/50 font-mono"
            placeholder="admin123"
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="vipKey" className="flex items-center gap-2 text-[10px] uppercase font-bold text-muted-foreground/70">
            <Key className="w-3 h-3" /> Clave VIP / Reserva
          </Label>
          <Input 
            id="vipKey" 
            value={data.vipKey} 
            onChange={(evt) => data.onChange('vipKey', evt.target.value)}
            className="h-8 text-xs bg-background/50 font-mono"
            placeholder="vip123"
          />
        </div>

        <div className="space-y-1.5 border-t border-border pt-2">
          <Label className="flex items-center gap-2 text-[10px] uppercase font-bold text-muted-foreground/70">
            <UserCheck className="w-3 h-3" /> Lista de Admins (Auth:Nick)
          </Label>
          <Textarea 
            value={data.adminList}
            onChange={(evt) => data.onChange('adminList', evt.target.value)}
            className="h-20 text-[10px] bg-background/50 font-mono"
            placeholder="auth_id:nick1,nick2&#10;otra_auth:nick3"
          />
          <p className="text-[9px] text-muted-foreground leading-tight">
            Formato: auth:nick1,nick2. Una por línea.
          </p>
        </div>
      </CardContent>
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
      <Handle type="source" position={Position.Right} isConnectable={isConnectable} />
    </Card>
  );
});
