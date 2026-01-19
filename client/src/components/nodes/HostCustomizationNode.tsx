import { Handle, Position } from '@xyflow/react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Flag } from "lucide-react";

const countryCoords = {
  "argentina": "Argentina",
  "haxarg": "HaxARG",
  "chile": "Chile",
  "uruguay": "Uruguay",
  "brasil": "Brasil",
  "peru": "Peru",
  "colombia": "Colombia",
  "venezuela": "Venezuela",
  "costa rica": "Costa Rica",
  "mexico": "Mexico",
  "united states": "United States",
  "marruecos": "Marruecos",
  "spain": "Spain",
  "portugal": "Portugal",
  "italy": "Italy",
  "united kingdom": "United Kingdom",
  "germany": "Germany",
  "turkey": "Turkey",
  "serbia": "Serbia",
  "poland": "Poland",
  "ukraine": "Ukraine",
  "russia": "Russia",
  "china": "China",
  "south korea": "South Korea",
  "vietnam": "Vietnam",
  "france": "France",
  "croatia": "Croatia",
  "macedonia": "Macedonia",
  "israel": "Israel",
  "canada": "Canada",
  "bolivia": "Bolivia",
  "paraguay": "Paraguay",
  "honduras": "Honduras",
  "myubication": "My Location"
};

export function HostCustomizationNode({ data }: { data: any }) {
  return (
    <Card className="w-72 shadow-xl border-2 border-yellow-500/20">
      <CardHeader className="flex flex-row items-center gap-2 p-3 border-b bg-yellow-500/5">
        <MapPin className="w-4 h-4 text-yellow-500" />
        <CardTitle className="text-sm font-bold uppercase tracking-tight">Location & Flag</CardTitle>
      </CardHeader>
      <CardContent className="p-3 space-y-3">
        <div className="space-y-1.5">
          <Label className="text-[10px] uppercase font-bold text-muted-foreground/70">Host Location</Label>
          <Select value={data.location} onValueChange={(val) => data.onChange('location', val)}>
            <SelectTrigger className="h-8 text-xs bg-background/50">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(countryCoords).map(([key, label]) => (
                <SelectItem key={key} value={key} className="text-xs">{label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label className="text-[10px] uppercase font-bold text-muted-foreground/70 flex items-center gap-1">
            <Flag className="w-3 h-3" /> Host Flag (Country Name)
          </Label>
          <Input 
            className="h-8 text-xs bg-background/50"
            placeholder="e.g. Germany"
            value={data.flag}
            onChange={(e) => data.onChange('flag', e.target.value)}
          />
        </div>
      </CardContent>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </Card>
  );
}
