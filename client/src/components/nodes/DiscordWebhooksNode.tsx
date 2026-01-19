import { Handle, Position } from '@xyflow/react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Webhook } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

export function DiscordWebhooksNode({ data }: { data: any }) {
  return (
    <Card className="w-80 shadow-xl border-2 border-indigo-500/20">
      <CardHeader className="flex flex-row items-center gap-2 p-3 border-b bg-indigo-500/5">
        <Webhook className="w-4 h-4 text-indigo-500" />
        <CardTitle className="text-sm font-bold uppercase tracking-tight">Discord Logs</CardTitle>
      </CardHeader>
      <CardContent className="p-3 space-y-4 max-h-[500px] overflow-y-auto">
        <div className="space-y-2 pb-2 border-b">
          <Label className="text-[10px] font-bold text-indigo-500">HOST OPEN ANNOUNCEMENT</Label>
          <Input className="h-7 text-xs" placeholder="Webhook URL" value={data.webhookHostOpen} onChange={(e) => data.onChange('webhookHostOpen', e.target.value)} />
          <Textarea className="text-xs min-h-[40px]" placeholder="Message" value={data.msgHostOpen} onChange={(e) => data.onChange('msgHostOpen', e.target.value)} />
          <Input className="h-7 text-xs" placeholder="Tag (e.g. @here)" value={data.tagHostOpen} onChange={(e) => data.onChange('tagHostOpen', e.target.value)} />
        </div>

        <div className="space-y-1">
          <Label className="text-[10px]">Recordings Webhook</Label>
          <Input className="h-7 text-xs" value={data.webhookRecordings} onChange={(e) => data.onChange('webhookRecordings', e.target.value)} />
        </div>

        <div className="space-y-1">
          <Label className="text-[10px]">Call Admins Webhook</Label>
          <Input className="h-7 text-xs" value={data.webhookCallAdmins} onChange={(e) => data.onChange('webhookCallAdmins', e.target.value)} />
          <div className="grid grid-cols-2 gap-2 mt-1">
            <Input className="h-7 text-xs" placeholder="Admin Rol" value={data.rolAdminDiscord} onChange={(e) => data.onChange('rolAdminDiscord', e.target.value)} />
            <Input type="number" className="h-7 text-xs" placeholder="Wait (min)" value={data.waitAdmins} onChange={(e) => data.onChange('waitAdmins', parseInt(e.target.value))} />
          </div>
        </div>

        <div className="space-y-1">
          <Label className="text-[10px]">Kicks/Bans Webhook</Label>
          <Input className="h-7 text-xs" value={data.webhookKicksBans} onChange={(e) => data.onChange('webhookKicksBans', e.target.value)} />
        </div>

        <div className="space-y-1">
          <Label className="text-[10px]">Player Messages Webhook</Label>
          <Input className="h-7 text-xs" value={data.webhookMessages} onChange={(e) => data.onChange('webhookMessages', e.target.value)} />
        </div>

        <div className="space-y-1">
          <Label className="text-[10px]">Join/Leave Webhook</Label>
          <Input className="h-7 text-xs" value={data.webhookBoletero} onChange={(e) => data.onChange('webhookBoletero', e.target.value)} />
        </div>

        <div className="space-y-1">
          <Label className="text-[10px]">Stats Webhook</Label>
          <Input className="h-7 text-xs" value={data.webhookStats} onChange={(e) => data.onChange('webhookStats', e.target.value)} />
        </div>

        <div className="space-y-1">
          <Label className="text-[10px]">Sign (Partidos Oficiales) Webhook</Label>
          <Input className="h-7 text-xs" value={data.webhookSign} onChange={(e) => data.onChange('webhookSign', e.target.value)} />
        </div>

        <div className="space-y-1">
          <Label className="text-[10px]">IP Tracking Webhook</Label>
          <Input className="h-7 text-xs" value={data.webhookIPs} onChange={(e) => data.onChange('webhookIPs', e.target.value)} />
        </div>
      </CardContent>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </Card>
  );
}
