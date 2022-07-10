import { formatDate } from "@/utils/formatDate";
import { Card, Text } from "@nextui-org/react";

export type TodoItemProps = {
  text: string;
  updatedAt: string;
};

export const TodoItem = ({ text, updatedAt }: TodoItemProps) => {
  return (
    <Card css={{ maxWidth: "600px", padding: "16px" }}>
      <Text as="p" size={18} weight="bold">
        {text}
      </Text>
      <Text size={12} css={{ textAlign: "right" }}>
        {formatDate(new Date(updatedAt), "yyyy/MM/dd")}
      </Text>
    </Card>
  );
};
