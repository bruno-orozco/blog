import { HomeIcon, NotesIcon, ProjectsIcon } from "../../components/Icons";
import type { MenuItemProps } from "../../components/MenuItem";

export const menuItems: MenuItemProps[] = [
  {
    icon: HomeIcon,
    text: "Inicio",
    href: "/",
  },
  {
    icon: NotesIcon,
    text: "Notas",
    href: "/notes",
  },
  {
    icon: ProjectsIcon,
    text: "Proyectos",
    href: "/projects",
  },
];
