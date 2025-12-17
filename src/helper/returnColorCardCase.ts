type StatusType = "concluded" | "current" | "pending";

const returnColorCardCase = (status: StatusType, type: "text" | "bg") => {
  const colors: Record<StatusType, { bg: string; text: string }> = {
    concluded: { bg: "bg-green-500", text: "text-green-500" },
    current: { bg: "bg-blue-500", text: "text-blue-500" },
    pending: { bg: "bg-gray-300", text: "text-gray-400" },
  };

  return colors[status][type];
};
export default returnColorCardCase;
