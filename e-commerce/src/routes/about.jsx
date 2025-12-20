import { createFileRoute } from "@tanstack/react-router";
import { about } from "../modules/about";

export const Route = createFileRoute("/about")({
  component: about,
});
