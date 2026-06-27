import { FolderKanban, CheckCircle, Clock, Users } from "lucide-react";

export const metricCards = [
  {
    icon: FolderKanban,
    iconBg: "bg-[#1e3a5f]",
    iconColor: "text-[#60a5fa]",
    trend: "+2",
    trendUp: true,
    value: 12,
    label: "Active Projects",
    barColor: "bg-[#1e3a5f]",
    bars: [10, 16, 10, 20, 16, 24, 18, 28],
  },
  {
    icon: CheckCircle,
    iconBg: "bg-[#175147]",
    iconColor: "text-[#4ade80]",
    trend: "+18",
    trendUp: true,
    value: 142,
    label: "Tasks Completed",
    barColor: "bg-[#175147]",
    bars: [10, 16, 10, 20, 16, 24, 18, 28],
  },
  {
    icon: Clock,
    iconBg: "bg-[#4D4531]",
    iconColor: "text-[#fbbf24]",
    trend: "-5",
    trendUp: false,
    value: 24,
    label: "Pending Tasks",
    barColor: "bg-[#4D4531]",
    bars: [10, 16, 10, 20, 16, 24, 18, 28],
  },
  {
    icon: Users,
    iconBg: "bg-[#4B2D4E]",
    iconColor: "text-[#EC4899]",
    trend: "+1",
    trendUp: true,
    value: 8,
    label: "Team Members",
    barColor: "bg-[#4B2D4E]",
    bars: [10, 16, 10, 20, 16, 24, 18, 28],
  },
];

export const activeProjects = [
  {
    name: "Mobile App Redesign",
    dueDate: "Due in 5 days",
    progress: 75,
    color: "bg-[#22c55e]",
  },
  {
    name: "API Documentation",
    dueDate: "Due in 12 days",
    progress: 45,
    color: "bg-[#3b82f6]",
  },
  {
    name: "Q4 Planning",
    dueDate: "Due tomorrow",
    progress: 90,
    color: "bg-[#f59e0b]",
  },
];

export const recentActivities = [
  {
    color: "bg-[#4ade80]",
    text: 'Sarah Chen completed task "User Authentication"',
    time: "5m ago",
  },
  {
    color: "bg-[#60a5fa]",
    text: 'Mike Torres created new project "Mobile App"',
    time: "12m ago",
  },
  {
    color: "bg-[#c084fc]",
    text: 'Alex Kim commented on "API Redesign"',
    time: "1h ago",
  },
  {
    color: "bg-[#f87171]",
    text: 'Emma Davis assigned you to "Code Review"',
    time: "2h ago",
  },
];

export const todaysTasks = [
  {
    text: "Review pull requests",
    priority: "High",
    priorityColor: "bg-[#ef4444]",
    completed: false,
  },
  {
    text: "Update design system docs",
    priority: "Med",
    priorityColor: "bg-[#f59e0b]",
    completed: true,
  },
  {
    text: "Team standup meeting",
    priority: "Low",
    priorityColor: "bg-[#475569]",
    completed: false,
  },
];

export const teamMembers = [
  {
    name: "Sarah Chen",
    role: "Frontend Dev",
    avatar: "S",
    avatarColor: "bg-[#3b82f6]",
    status: "Active",
  },
  {
    name: "Mike Torres",
    role: "Backend Dev",
    avatar: "M",
    avatarColor: "bg-[#f43f5e]",
    status: "Active",
  },
  {
    name: "Alex Kim",
    role: "Designer",
    avatar: "A",
    avatarColor: "bg-[#a855f7]",
    status: "Away",
  },
  {
    name: "Emma Davis",
    role: "PM",
    avatar: "E",
    avatarColor: "bg-[#10b981]",
    status: "Active",
  },
];
