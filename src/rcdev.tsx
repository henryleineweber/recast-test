import { Detail } from "@raycast/api";
import { useAI } from "@raycast/utils";

export default function Command() {
  const { data, isLoading } = useAI("Tell your best dad joke");

  return <Detail isLoading={isLoading} markdown={data} />;
}