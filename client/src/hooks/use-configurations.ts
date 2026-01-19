import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, buildUrl, type CreateConfigurationRequest, type UpdateConfigurationRequest } from "@shared/routes";

// GET /api/configurations
export function useConfigurations() {
  return useQuery({
    queryKey: [api.configurations.list.path],
    queryFn: async () => {
      const res = await fetch(api.configurations.list.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch configurations");
      return api.configurations.list.responses[200].parse(await res.json());
    },
  });
}

// GET /api/configurations/:id
export function useConfiguration(id: number) {
  return useQuery({
    queryKey: [api.configurations.get.path, id],
    queryFn: async () => {
      const url = buildUrl(api.configurations.get.path, { id });
      const res = await fetch(url, { credentials: "include" });
      if (res.status === 404) return null;
      if (!res.ok) throw new Error("Failed to fetch configuration");
      return api.configurations.get.responses[200].parse(await res.json());
    },
    enabled: !!id,
  });
}

// POST /api/configurations
export function useCreateConfiguration() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: CreateConfigurationRequest) => {
      const res = await fetch(api.configurations.create.path, {
        method: api.configurations.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
      });
      if (!res.ok) throw new Error("Failed to create configuration");
      return api.configurations.create.responses[201].parse(await res.json());
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [api.configurations.list.path] }),
  });
}

// PUT /api/configurations/:id
export function useUpdateConfiguration() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, ...updates }: { id: number } & UpdateConfigurationRequest) => {
      const url = buildUrl(api.configurations.update.path, { id });
      const res = await fetch(url, {
        method: api.configurations.update.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
        credentials: "include",
      });
      if (!res.ok) throw new Error("Failed to update configuration");
      return api.configurations.update.responses[200].parse(await res.json());
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [api.configurations.list.path] }),
  });
}

// DELETE /api/configurations/:id
export function useDeleteConfiguration() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      const url = buildUrl(api.configurations.delete.path, { id });
      const res = await fetch(url, { method: api.configurations.delete.method, credentials: "include" });
      if (!res.ok) throw new Error("Failed to delete configuration");
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [api.configurations.list.path] }),
  });
}

// GET /api/template
export function useScriptTemplate() {
  return useQuery({
    queryKey: [api.template.get.path],
    queryFn: async () => {
      const res = await fetch(api.template.get.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch template");
      return api.template.get.responses[200].parse(await res.json());
    },
  });
}
