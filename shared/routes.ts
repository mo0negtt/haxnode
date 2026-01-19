import { z } from 'zod';
import { insertConfigurationSchema, configurations } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  configurations: {
    list: {
      method: 'GET' as const,
      path: '/api/configurations',
      responses: {
        200: z.array(z.custom<typeof configurations.$inferSelect>()),
      },
    },
    get: {
      method: 'GET' as const,
      path: '/api/configurations/:id',
      responses: {
        200: z.custom<typeof configurations.$inferSelect>(),
        404: errorSchemas.notFound,
      },
    },
    create: {
      method: 'POST' as const,
      path: '/api/configurations',
      input: insertConfigurationSchema,
      responses: {
        201: z.custom<typeof configurations.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
    update: {
      method: 'PUT' as const,
      path: '/api/configurations/:id',
      input: insertConfigurationSchema.partial(),
      responses: {
        200: z.custom<typeof configurations.$inferSelect>(),
        404: errorSchemas.notFound,
      },
    },
    delete: {
      method: 'DELETE' as const,
      path: '/api/configurations/:id',
      responses: {
        204: z.void(),
        404: errorSchemas.notFound,
      },
    },
  },
  template: {
    get: {
      method: 'GET' as const,
      path: '/api/template',
      responses: {
        200: z.object({ content: z.string() }),
      },
    },
  }
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}

// Re-export request types for convenience in hooks
export type CreateConfigurationRequest = z.infer<typeof insertConfigurationSchema>;
export type UpdateConfigurationRequest = Partial<CreateConfigurationRequest>;
