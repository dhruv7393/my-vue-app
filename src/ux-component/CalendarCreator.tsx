import React from "react";
import { Calendar, theme } from "antd";
import type { Dayjs } from "dayjs";
import { SelectInfo } from "antd/es/calendar/generateCalendar";
import dayjs from "dayjs";

export interface CalendarCreatorProps {
  dateDisplayed: string;
  handleDateChange: (dateSelected: string) => void;
}

const CalendarCreator = ({
  dateDisplayed,
  handleDateChange,
}: CalendarCreatorProps) => {
  const { token } = theme.useToken();

  const onSelectChange = (value: Dayjs, selectInfo: SelectInfo) => {
    if (selectInfo.source === "date") {
      handleDateChange(value.format("YYYY-MM-DD").toString());
    }
  };

  const wrapperStyle: React.CSSProperties = {
    maxWidth: "100%",
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  return (
    <div style={wrapperStyle}>
      <Calendar
        defaultValue={dayjs(dateDisplayed)}
        fullscreen={false}
        onSelect={onSelectChange}
      />
    </div>
  );
};

export default CalendarCreator;
