import { Heart, User, Users, CircleEllipsis, ImageOff } from "lucide-react";

export const IndicatorsData = [
  {
    icon: Users,
    key: "totalUsers",
    title: "Total Users",
    subtitle: "1,234",
  },
  {
    icon: User,
    key: "newUsers",
    title: "New Users",
    subtitle: "156",
  },
  {
    icon: Heart,
    key: "topUsers",
    title: "Top Users",
    subtitle: "987",
  },
  {
    icon: CircleEllipsis,
    key: "otherUsers",
    title: "Other Users",
    subtitle: "247",
  },
  {
    icon: ImageOff,
    key: "missingIndicator",
    title: "Missing Indicator",
    subtitle: "-",
  },
];
