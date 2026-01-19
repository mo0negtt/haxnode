import { Handle, Position } from '@xyflow/react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CircleDot } from "lucide-react";

export function BallCustomizationNode({ data }: { data: any }) {
  return (
    <Card className="w-80 shadow-xl border-2 border-pink-500/20">
      <CardHeader className="flex flex-row items-center gap-2 p-3 border-b bg-pink-500/5">
        <CircleDot className="w-4 h-4 text-pink-500" />
        <CardTitle className="text-sm font-bold uppercase tracking-tight">Ball Editor</CardTitle>
      </CardHeader>
      <CardContent className="p-3 space-y-4">
        <div className="space-y-2">
          <Label className="text-[10px] uppercase font-bold text-muted-foreground">Real Soccer (RS)</Label>
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1">
              <Label className="text-[10px]">Ball Color</Label>
              <Input className="h-7 text-xs" value={data.pelotaRS} onChange={(e) => data.onChange('pelotaRS', e.target.value)} />
            </div>
            <div className="space-y-1">
              <Label className="text-[10px]">PowerShot Color</Label>
              <Input className="h-7 text-xs" value={data.pelotaRS_PowerShot} onChange={(e) => data.onChange('pelotaRS_PowerShot', e.target.value)} />
            </div>
          </div>
          <div className="space-y-1">
            <Label className="text-[10px]">PowerShot Multiplier</Label>
            <Input type="number" step="0.1" className="h-7 text-xs" value={data.potenciaPowerShotRS} onChange={(e) => data.onChange('potenciaPowerShotRS', parseFloat(e.target.value))} />
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-[10px] uppercase font-bold text-muted-foreground">Futsal</Label>
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1">
              <Label className="text-[10px]">Ball Color</Label>
              <Input className="h-7 text-xs" value={data.pelotaFutsal} onChange={(e) => data.onChange('pelotaFutsal', e.target.value)} />
            </div>
            <div className="space-y-1">
              <Label className="text-[10px]">PowerShot Color</Label>
              <Input className="h-7 text-xs" value={data.pelotaFutsal_PowerShot} onChange={(e) => data.onChange('pelotaFutsal_PowerShot', e.target.value)} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1">
              <Label className="text-[10px]">Power Multiplier</Label>
              <Input type="number" step="0.1" className="h-7 text-xs" value={data.potenciaPowerShot} onChange={(e) => data.onChange('potenciaPowerShot', parseFloat(e.target.value))} />
            </div>
            <div className="space-y-1">
              <Label className="text-[10px]">Ball Type</Label>
              <Select value={data.tipoPelotaFutsal} onValueChange={(val) => data.onChange('tipoPelotaFutsal', val)}>
                <SelectTrigger className="h-7 text-xs"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="oveja">Oveja</SelectItem>
                  <SelectItem value="bazinga">Bazinga</SelectItem>
                  <SelectItem value="glh">GLH</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </CardContent>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </Card>
  );
}
