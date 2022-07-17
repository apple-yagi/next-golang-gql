import { format as f } from "date-fns";

export const formatDate = (date: Date, format: string) => {
  return f(date, format);
};
