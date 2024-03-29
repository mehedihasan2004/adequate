import { Router } from "express";
import { UserRoutes } from "./modules/user/route";
import { DoctorRoutes } from "./modules/doctor/route";

const router = Router();

[
  { path: "/users", route: UserRoutes },
  { path: "/doctors", route: DoctorRoutes },
].forEach(({ path, route }) => router.use(path, route));

export const routes = router;
