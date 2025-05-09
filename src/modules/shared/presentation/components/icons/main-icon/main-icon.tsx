import {
  BarChart,
  Brush,
  CalendarCheck,
  ChevronRight,
  Code,
  ExternalLink,
  Eye,
  FilePenLine,
  FileText,
  Globe,
  Handshake,
  Layers,
  Menu,
  Search,
  SearchCheck,
  ShoppingCart,
  Star,
  UsersRound,
} from "lucide-react";
import { JSXElementConstructor } from "react";
export enum AppIcons {
  ChevronRight = "ChevronRight",
  Globe = "Globe",
  Brush = "Brush",
  Code = "Code",
  ShoppingCart = "ShoppingCart",
  Search = "Search",
  Facebook = "Facebook",
  FileText = "FileText",
  Layers = "Layers",
  BarChart = "BarChart",
  ExternalLink = "ExternalLink",
  UsersRound = "UsersRound",
  Menu = "Menu",
  Eye = "Eye",
  Star = "Star",
  HandShake = "HandShake",
  FilePen = "FilePen",
  SearchCheck = "SearchCheck",
  CalendarCheck = "CalendarCheck",
}

interface IconProps {
  size?: number;
  className?: string;
}

interface AppIconsMap {
  [key: string]: JSXElementConstructor<IconProps>;
}

const APPICONS = {
  [AppIcons.ChevronRight]: (props: IconProps) => <ChevronRight size={props.size} className={props.className} />,
  [AppIcons.Globe]: (props: IconProps) => <Globe size={props.size} className={props.className} />,
  [AppIcons.Brush]: (props: IconProps) => <Brush size={props.size} className={props.className} />,
  [AppIcons.Code]: (props: IconProps) => <Code size={props.size} className={props.className} />,
  [AppIcons.ShoppingCart]: (props: IconProps) => <ShoppingCart size={props.size} className={props.className} />,
  [AppIcons.Search]: (props: IconProps) => <Search size={props.size} className={props.className} />,
  [AppIcons.Facebook]: (props: IconProps) => <Brush size={props.size} className={props.className} />,
  [AppIcons.FileText]: (props: IconProps) => <FileText size={props.size} className={props.className} />,
  [AppIcons.Layers]: (props: IconProps) => <Layers size={props.size} className={props.className} />,
  [AppIcons.BarChart]: (props: IconProps) => <BarChart size={props.size} className={props.className} />,
  [AppIcons.ExternalLink]: (props: IconProps) => <ExternalLink size={props.size} className={props.className} />,
  [AppIcons.UsersRound]: (props: IconProps) => <UsersRound size={props.size} className={props.className} />,
  [AppIcons.Menu]: (props: IconProps) => <Menu size={props.size} className={props.className} />,
  [AppIcons.Eye]: (props: IconProps) => <Eye size={props.size} className={props.className} />,
  [AppIcons.Star]: (props: IconProps) => <Star size={props.size} className={props.className} />,
  [AppIcons.HandShake]: (props: IconProps) => <Handshake size={props.size} className={props.className} />,
  [AppIcons.FilePen]: (props: IconProps) => <FilePenLine size={props.size} className={props.className} />,
  [AppIcons.SearchCheck]: (props: IconProps) => <SearchCheck size={props.size} className={props.className} />,
  [AppIcons.CalendarCheck]: (props: IconProps) => <CalendarCheck size={props.size} className={props.className} />,
};

interface IconComponentProps {
  name: AppIcons;
  size?: number;
  className?: string;
}

export default function Icon(props: IconComponentProps) {
  const Comp = APPICONS?.[props.name];

  return <Comp size={props.size} className={props.className} />;
}
