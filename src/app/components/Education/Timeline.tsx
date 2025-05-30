import React, { ReactNode } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

interface TimelineItemProps {
  date: string;
  title: string;
  subtitle?: string;
  description: string;
  icon: ReactNode;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  subtitle,
  description,
  icon,
}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#d3d3d3",
        color: "black",
        borderRadius: "0.7rem",
      }}
      iconStyle={{
        background: "white",
        color: "white",
        boxShadow:
          "0 0 0 4px #c7d2fe, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)",
      }}
      icon={icon}
    >
      <h3 className="text-2xl text-center font-sans font-semibold">{title}</h3>
      {subtitle && <h4 className="text-center text-lg">2023 -2027</h4>}
      {subtitle && <h4 className="text-center text-lg mb-2">{subtitle}</h4>}
      <div className="border-t border-accent"></div>
      <p className="text-center font-sans font-semibold">{description}</p>
    </VerticalTimelineElement>
  );
};

export default TimelineItem;
