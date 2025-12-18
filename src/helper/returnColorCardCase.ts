const colors = [
  { status: "concluded", bg: "bg-green-500", text: "text-green-500" },
  { status: "current", bg: "bg-blue-500", text: "text-blue-500" },
  { status: "pending", bg: "bg-gray-300", text: "text-gray-400" },
];

const returnColorCardCase = (status: string, type: string) => {
  const color = colors.find((c) => c.status === status);
  if (!color) return ""; // Si no existe, devolvemos vacío
  return color[type as keyof typeof color] || ""; // Accedemos dinámicamente
};
export default returnColorCardCase;
