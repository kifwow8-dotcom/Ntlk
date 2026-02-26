import type { Express } from "express";
import type { Server } from "http";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get(api.ping.path, (req, res) => {
    res.json({ message: "pong" });
  });

  return httpServer;
}
