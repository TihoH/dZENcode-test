import { Clock } from "lucide-react";
import clases from "./header.module.css";

export default function HeaderDate() {
  const now = new Date();

  const parts = now
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .split(" ");

  const formatted = `${parts[0]} ${parts[1].toUpperCase()}, ${parts[2]}`;

  const time = now.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
  
  return (
    <div className={clases.todeyDate_container}>
      <div className={clases.todeyDate}>
        <span>Today</span>
        <p>{formatted}</p>
      </div>
      <div className={clases.iconTime}>
        <Clock color="#8BC34A" size={"20"} />
        <span>{time}</span>
      </div>
    </div>
  );
}
