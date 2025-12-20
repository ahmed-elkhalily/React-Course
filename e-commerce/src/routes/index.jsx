import { createFileRoute } from "@tanstack/react-router";
import { Index } from "../modules";

export const Route = createFileRoute("/")({
  component: Index,
});
