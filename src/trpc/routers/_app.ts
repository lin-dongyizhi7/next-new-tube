import { createTRPCRouter } from "../init";

import { categoriesRouter } from "@/modules/categories/server/procedures";
import { studioRouter } from "@/modules/studio/server/procedures";
import { videosRouter } from "@/modules/video/server/procedures";

// import { TRPCError } from "@trpc/server";
export const appRouter = createTRPCRouter({
  categories: categoriesRouter,
  studio: studioRouter,
  videos: videosRouter
});
// export type definition of API
export type AppRouter = typeof appRouter;
